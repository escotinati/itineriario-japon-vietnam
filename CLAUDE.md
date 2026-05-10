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
  App.jsx                        # componente raíz, estado de búsqueda y navegación
  index.css                      # estilos globales (variables CSS, todos los componentes)
  main.jsx                       # punto de entrada React
  components/
    Alert.jsx                    # alertas de transporte/aviso (dorado, azul, verde, rojo)
    Badge.jsx                    # etiquetas pequeñas inline (warn, tip, info, red)
    DayCard.jsx                  # tarjeta de día individual del itinerario
    DestinationSection.jsx       # sección completa de un destino
    Overview.jsx                 # resumen de vuelos y hoteles
    SearchBar.jsx                # barra de búsqueda + filtros de categoría
    SearchResults.jsx            # resultados de búsqueda + índice de búsqueda
  data/
    trips.js                     # TODA la información del viaje (única fuente de verdad)
```

## Cómo añadir contenido

Toda la información del viaje está en `src/data/trips.js`. La estructura es:

```js
// Destino
{
  id: 'tokyo',          // usado para anclas de navegación (#tokyo)
  country: 'Japón',
  stage: '1ª etapa',
  name: 'Tokio',
  subtitle: '東京',
  dates: '22 – 26 julio...',
  alerts: [{ type: 'blue'|'green'|'red'|'warn', text: 'HTML string...' }],
  days: [{ label: '22 jul', title: '...', desc: '...', tags: [{type, text}] }],
  extras: [...],         // opcional, mismo formato que days
  food: [{ name: '...', desc: '...' }],
}
```

Para añadir un destino nuevo: añadir un objeto al array `destinations` en `trips.js` y un enlace en el array `NAV_LINKS` de `App.jsx`.

## Búsqueda

La búsqueda indexa automáticamente todo el contenido de `trips.js`:
- **días** → categoría `actividad`
- **food** → categoría `comida`
- **alerts** → categoría `transporte`

Filtros disponibles: Todo · Japón · Vietnam · Gastronomía · Transporte · Actividades

La búsqueda está implementada en `SearchResults.jsx` con resaltado de coincidencias. Al hacer clic en un resultado navega directamente a la sección del destino.

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

Sistema de colores definido en variables CSS en `index.css`:
- `--cream` / `--ink` — fondo y texto principal
- `--red` — Japón / énfasis
- `--teal` — Vietnam / positivo
- `--blue` — información de transporte
- `--gold` — advertencias generales

Tipografía: **Cormorant Garamond** (serif, títulos) + **DM Sans** (sans, cuerpo).
