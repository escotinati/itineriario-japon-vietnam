# Japón & Vietnam · Guía de Viaje 2026

Aplicación React (Vite) que sirve como guía interactiva de viaje para el itinerario Japón & Vietnam, verano 2026.

## Comandos

```bash
npm run dev      # servidor de desarrollo (normalmente en :5173 o :5174)
npm run build    # build de producción en dist/
npm run preview  # previsualizar el build
```

## Estructura

```
src/
  App.jsx                   # componente raíz: estado global, navegación, notas personalizadas
  index.css                 # estilos globales (design tokens CSS + todos los componentes)
  map-embeds.css            # estilos del bloque "Ruta completa del día" en DayCard
  main.jsx                  # punto de entrada React (importa index.css y map-embeds.css)
  components/
    Accordion.jsx           # acordeones L1 (SectionAccordion) y L2 (BlockAccordion)
    Alert.jsx               # alertas de aviso (warn/blue/green/red)
    Badge.jsx               # etiquetas inline pequeñas (warn/tip/info/red)
    DayCard.jsx             # tarjeta de día individual del itinerario
    DestGrid.jsx            # grid 2 columnas de destinos con expansión a pantalla completa
    DestinationSection.jsx  # (legacy, no usado actualmente)
    Overview.jsx            # sección de alojamientos con links a Google Maps
    SearchBar.jsx           # barra de búsqueda + filtros + formulario "Añadir nota"
    SearchResults.jsx       # resultados de búsqueda con resaltado de coincidencias
    Transport.jsx           # sección de transporte: vuelos, trenes y metro
  data/
    trips.js                # TODA la información del viaje (única fuente de verdad)
    maps.js                 # rutas de Google Maps por destino y día (dayRoutes)
```

## Cómo añadir contenido

Toda la información del viaje está en `src/data/trips.js`. Exporta:

- `destinations` — array de destinos (ver estructura abajo)
- `hotels` — array de alojamientos (con `mapsUrl` para Google Maps)
- `flights` — array de vuelos
- `trains` — array de trayectos en tren
- `metro` — array de tarjetas de metro/transporte urbano

### Estructura de un destino

```js
{
  id: 'tokyo',          // ancla de navegación y clave única
  country: 'Japón',     // 'Japón' | 'Vietnam' (afecta colores del tile)
  stage: '1ª etapa',
  name: 'Tokio',
  subtitle: '東京',      // opcional, se muestra en gris debajo del nombre
  dates: '22 – 26 julio',
  alerts: [{ type: 'blue'|'green'|'red'|'warn', text: 'HTML string...' }],
  days: [
    {
      label: '22 jul',
      title: '...',
      mapsUrl: 'https://www.google.com/maps/search/?api=1&query=...',  // enlace al lugar principal
      desc: '...',
      tags: [{ type, text }],
    }
  ],
  extras: [...],        // opcional, mismo formato que days
  food: [{ name: '...', desc: '...' }],
}
```

Para añadir un destino nuevo: añadir un objeto al array `destinations` en `trips.js` y un enlace en el array `NAV_LINKS` de `App.jsx`.

### Estructura de un hotel

```js
{
  city: 'Tokio',
  dates: '22–26 jul',
  name: 'Park Hotel Tokyo',
  address: 'Shiodome Media Tower, 1-7-1 Higashi-Shimbashi...',
  mapsUrl: 'https://www.google.com/maps/search/?api=1&query=...',  // opcional
}
```

## Google Maps — dos capas de integración

Cada día del itinerario tiene dos tipos de enlace a Maps:

### 1. `mapsUrl` — lugar principal del día (en `trips.js`)
Campo opcional en cada objeto `day` / `extra`. Enlaza al punto de interés principal del día (templo, barrio, aeropuerto…). Se muestra al expandir la tarjeta como una píldora azul **"Ver en Google Maps"** justo encima de la descripción.

```js
mapsUrl: 'https://www.google.com/maps/search/?api=1&query=Senso-ji+Temple+Asakusa+Tokyo'
```

### 2. `routeUrl` — ruta completa del día (en `src/data/maps.js`)
Objeto indexado por `dayRoutes[destId][dayIndex]` con la ruta de múltiples paradas del día completo. Se muestra al final del contenido expandido como un bloque verde **"Ruta completa del día"** con las paradas y un botón "Abrir ruta en Google Maps".

```js
// maps.js
export const dayRoutes = {
  tokyo: [
    null,  // día sin ruta (llegada)
    { label: 'Meiji Jingu → Takeshita St → Shibuya Crossing → Shibuya Sky', url: 'https://...' },
    ...
  ],
  ...
}
```

`DestGrid.jsx` lee `dayRoutes[dest.id]` y pasa `routeUrl={routes[i]}` como prop explícita a `DayCard`. Los extras no reciben `routeUrl`.

### Props de `DayCard`
- `label`, `title`, `desc`, `tags` — datos del día (desde `trips.js` via spread `{...d}`)
- `mapsUrl` — enlace lugar principal (desde `trips.js` via spread `{...d}`)
- `routeUrl` — objeto `{ label, url }` con la ruta completa (pasado explícitamente desde `DestGrid`)

## Grid de destinos

`DestGrid.jsx` muestra los destinos en una cuadrícula de 2 columnas. Al hacer clic en un tile compacto, se expande a ancho completo usando una técnica de split-array (arrays `before` / `active` / `after`), evitando el problema de huecos del CSS grid auto-placement.

- Tile compacto: muestra país, etapa, nombre, fechas y estadísticas (días, gastronomía, notas propias)
- Tile expandido: acordeones L2 para "Mis notas", "Itinerario", "Extras" y "Gastronomía"

## Notas personalizadas

Los usuarios pueden añadir notas a cualquier destino desde la barra de búsqueda. Se persisten en `localStorage` con la clave `travel-custom-entries`.

Cada nota tiene: `destId`, `categoria` (visita/comida/shopping/transporte/consejo/nota), `titulo`, `nota` (opcional), `id` (timestamp).

Al guardar una nota, el destino correspondiente se abre automáticamente y la pantalla hace scroll hasta él. Las notas aparecen en el tile expandido dentro de un acordeón "Mis notas" (con `defaultOpen: true`) antes del itinerario.

Lógica en `App.jsx`: `addEntry` / `removeEntry` + `saveEntries` (localStorage).

## Búsqueda

La búsqueda indexa automáticamente todo el contenido de `trips.js`:
- **días y extras** → categoría `actividad`
- **food** → categoría `comida`
- **alerts** → categoría `transporte`

Filtros disponibles: Todo · Japón · Vietnam · Gastronomía · Transporte · Actividades

Implementada en `SearchResults.jsx` con resaltado de coincidencias (`<mark>`). Al hacer clic en un resultado, navega y abre el destino correspondiente.

## Acordeones

`Accordion.jsx` exporta dos niveles:

- **`SectionAccordion` (L1)** — nivel de sección (ya no se usa directamente; los destinos usan `DestGrid`)
- **`BlockAccordion` (L2)** — sub-bloques dentro de un destino expandido. Props: `title`, `count` (badge numérico), `defaultOpen` (boolean)

La animación usa `grid-template-rows: 0fr → 1fr` con un wrapper interno `overflow: hidden; min-height: 0`.

## Transporte

`Transport.jsx` tiene tres `BlockAccordion` con sub-componentes propios:
- **Vuelos** — `FlightCard`: origen/destino, hora, duración, aerolínea
- **Trenes** — `TrainCard`: ruta, fecha, servicio (Shinkansen, etc.), notas
- **Metro** — `MetroCard`: ciudad, tip general, lista de líneas útiles
- **JR Pass Comparator** — tabla comparativa billetes sueltos vs JR Pass. El layout de la tabla usa las clases CSS `.jrc-table-row` y `.jrc-compare` (no inline styles) para que el media query mobile pueda sobreescribirlos.

## Formulario "Añadir nota"

En `SearchBar.jsx`, el botón "Añadir nota" vive integrado al final de la fila de filtros (`.filter-tab-add`), separado por una línea vertical (`.filter-sep`). Al activarlo:
- El icono `+` rota 45° hasta convertirse en `×`
- El formulario aparece con animación slide-down (`grid-template-rows: 0fr → 1fr` en `.aef-wrap`)
- Los campos ocultos tienen `tabIndex={-1}` para no interferir con la navegación por teclado

## Mobile (iPhone 15 Pro · ≤480px)

La app está optimizada para iPhone 15 Pro (393px de ancho lógico). El breakpoint principal es `@media (max-width: 480px)` definido en `index.css`.

Ajustes aplicados:
- `main`, `.hero`, `section` — padding reducido
- `.bacc-trigger`, `.bacc-body` — padding compacto en acordeones
- `.dest-tile-close` → 36px · `.custom-entry-remove` → 32px (touch targets mínimos)
- `.jrc-table-row` → 3 columnas (oculta `.jrc-col-date`) · `.jrc-compare` → 1 columna vertical
- `.aef-actions` → `flex-direction: column-reverse` con botones a ancho completo
- `.day-maps-wrap`, `.day-route-block` → padding lateral ajustado a 16px

## Viaje

- **Fechas:** 21 julio – 13 agosto 2026 (24 días)
- **Ruta:** Madrid → Tokio → Hakone → Kioto → Hiroshima → Osaka → Da Nang → Hanoi → Madrid
- **Japón:** 22 jul – 4 ago (13 días)
- **Vietnam:** 4 ago – 13 ago (9 días)

### Hoteles
| Fechas | Ciudad | Hotel |
|--------|--------|-------|
| 22–26 jul | Tokio | Park Hotel Tokyo |
| 26–27 jul | Hakone | Hotel Kajikaso (Ryokan) |
| 27–31 jul | Kioto | Royal Park Hotel Kyoto Sanjo |
| 31 jul–1 ago | Hiroshima | The Knot Hiroshima |
| 1–4 ago | Osaka | voco Osaka Central by IHG |
| 4–8 ago | Da Nang | Son Tra Beach Resort & Spa |
| 8–12 ago | Hanoi | The Legend Hanoi Hotel |

## Diseño

Tipografía: **Sora** (display, títulos) + **Inter** (sans-serif, cuerpo).

### Tokens de color (`index.css`)

```
--bg / --surface          fondo página / fondo tarjeta
--ink                     texto principal (#111827)
--ink-2                   texto secundario (#374151)
--ink-3                   texto de apoyo (#4B5563, contraste 7.4:1)
--ink-4                   metadatos y etiquetas (#6B7280, contraste 4.6:1)
--ink-muted               puramente decorativo — líneas, puntos, iconos (#9CA3AF)
--border / --border-2     bordes suaves / bordes con hover

--red / --red-bg / --red-text       Japón, énfasis, errores
--teal / --teal-bg / --teal-text    Vietnam, positivo
--blue / --blue-bg / --blue-text    información de transporte
--amber / --amber-bg / --amber-text advertencias generales
--green / --green-bg / --green-text éxito, consejos
```

Todos los valores de color, espaciado y tipografía se referencian mediante variables CSS; no hay valores mágicos hardcodeados en los componentes.
