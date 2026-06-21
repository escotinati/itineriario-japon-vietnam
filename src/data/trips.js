export const trains = [
  {
    date: '22 jul · ~20:00h',
    route: 'Narita → Shinbashi · Park Hotel Tokyo',
    service: "Narita Express (N'EX)",
    duration: '~1h 20–50 min',
    price: '~3.070¥ · JR Pass: gratis',
    notes: 'A esa hora ya habrás pasado el pico de rush hour, así que el tren irá bastante cómodo. Los N\'EX salen cada 30–60 min: saliendo sobre las 20:00–20:30 desde Narita, llegas a Shinbashi sobre las 21:20–21:50. Desde Shinbashi tomar la Salida Este (East Exit) — el Park Hotel (Shiodome Media Tower) está a 5–8 min a pie. Directo desde T1 y T2; reserva de asiento incluida en el billete.',
  },
  {
    date: '26 jul · ~9:00h',
    route: 'Shinbashi → Odawara → Hakone-Yumoto · Hotel Kajikaso',
    service: 'Shinkansen Kodama + Hakone Tozan',
    duration: '~1h – 1h 15 min',
    price: '~2.500¥ tramo Shinkansen · JR Pass: gratis',
    notes: '① Shinbashi → Shinagawa en JR (2 min, muy cerca) → Shinkansen Kodama dirección Shin-Osaka hasta Odawara (~35 min). ② Odawara → Hakone-Yumoto en Odakyu o Hakone Tozan (~15 min). El Hotel Kajikaso está en Yumoto, prácticamente al lado de la estación. — El JR Pass no cubre Hakone Tozan ni Odakyu; conviene el Hakone Free Pass (Odakyu), que incluye casi todos los transportes dentro de Hakone. — El 26 jul es sábado: Hakone es destino muy popular los fines de semana, reserva el Shinkansen con antelación. — Saliendo a las 9h desde Shiodome llegarías a Hakone sobre las 10:15–10:30h.',
  },

  {
    date: '27 jul · ~9:00h',
    route: 'Hakone-Yumoto → Odawara → Kyoto · Royal Park Hotel Sanjo',
    service: 'Hakone Tozan + Shinkansen Hikari',
    duration: '~1h 45 min – 2h',
    price: '~13.500¥ tramo Shinkansen · JR Pass: gratis (solo Hikari)',
    notes: '① Hakone-Yumoto → Odawara en Hakone Tozan o Odakyu (~15 min; tramo NO cubierto por JR Pass). ② Odawara → Kyoto en Shinkansen Hikari (~1h 10 min) o Nozomi (~50 min, sin JR Pass). ③ Kyoto Station → hotel: autobús o taxi (~15 min) o metro Karasuma hasta Karasuma-Oike + a pie (~20 min). — El 27 jul es domingo: los Shinkansen van llenos, reserva plaza con antelación (con JR Pass la reserva de asiento es gratuita). — Saliendo a las 9h de Hakone-Yumoto llegarías a Kyoto sobre las 11:00–11:15h.',
  },
  {
    date: '31 jul · ~9:00h',
    route: 'Kyoto → Hiroshima · THE KNOT Hiroshima',
    service: 'Shinkansen Hikari / Sakura',
    duration: '~1h 45 min',
    price: '~11.000¥ · JR Pass: gratis (Hikari y Sakura)',
    notes: '① Hotel → Kyoto Station en autobús o metro Karasuma (~20 min). ② Kyoto → Hiroshima en Shinkansen Hikari o Sakura (~1h); ambos cubiertos por JR Pass. ③ Hiroshima Station → THE KNOT: tranvía línea 1 o 2 hasta Otemachi (~15 min) o taxi (~10 min). — El 31 jul es viernes: empiezan los movimientos de fin de semana, reserva plaza con antelación. — Saliendo a las 9h llegarías a Hiroshima sobre las 11:00h. — El tranvía de Hiroshima es muy cómodo para moverse por el centro. | Hiroshima → Miyajima (mismo día): JR Sanyo Line hasta Miyajimaguchi + Ferry JR Miyajima (~30 min tren + 10 min ferry). JR Pass: gratis en ambos tramos.',
  },
  {
    date: '1 ago · ~12:00h',
    route: 'Hiroshima → Shin-Osaka → voco Osaka Central',
    service: 'Shinkansen Hikari / Sakura',
    duration: '~2h – 2h 15 min',
    price: '~11.000¥ · JR Pass: gratis (Hikari y Sakura)',
    notes: '① THE KNOT → Hiroshima Station en tranvía desde Otemachi (~15 min) o taxi (~10 min). ② Hiroshima → Shin-Osaka en Shinkansen Hikari o Sakura (~1h 30 min); ambos cubiertos por JR Pass. ③ Shin-Osaka → voco Osaka Central (Kyomachibori): metro Midosuji hasta Yodoyabashi o Hommachi + a pie ~10 min, o taxi directo (~25 min, ~2.000¥). — El 1 ago es sábado: mucho movimiento turístico, reserva el Shinkansen con antelación. — Saliendo a las 12h llegarías a Osaka sobre las 14:15–14:30h, con la tarde libre para explorar. — El voco está en Kyomachibori, un barrio tranquilo junto al río muy bien ubicado para moverse por Osaka.',
  },
  {
    date: '4 ago',
    route: 'Namba → Aeropuerto Kansai (KIX)',
    service: 'Nankai Rapi:t (Limited Express)',
    duration: '~35 min',
    price: '~1.490¥',
    notes: 'Alternativa con JR Pass: Haruka desde Shin-Osaka (~1h). Salida para vuelo 14:30 KIX.',
  },
]

export const metro = [
  {
    city: 'Tokio',
    card: 'Suica o Pasmo',
    tip: 'Recarga en cualquier máquina (verde o azul). Válida para metro, JR urbano, autobús y konbinis. Carga mínima recomendada: 3.000¥. Se recarga en cualquier estación sin límite.',
    lines: [
      'Yamanote Line (verde) — bucle que conecta Shinjuku, Shibuya, Harajuku, Akihabara y Ueno. La más útil.',
      'Tokyo Metro (9 líneas) — cubre Asakusa (Ginza Line), Roppongi (Hibiya) y el resto de la ciudad.',
      'IC card válida en JR, Tokyo Metro y Toei Subway: sin comprar billetes individuales.',
    ],
  },
  {
    city: 'Osaka',
    card: 'ICOCA o Suica de Tokio',
    tip: 'La Suica de Tokio funciona perfectamente en Osaka. Red muy intuitiva con código de colores y número de línea en cada estación.',
    lines: [
      'Midosuji Line (roja, M) — Shin-Osaka ↔ Namba ↔ Tennoji. La más útil para turistas.',
      'Tanimachi Line (morada, T) — Paralela y menos saturada. Conecta el Castillo de Osaka.',
      'Yotsubashi Line (azul, Y) — Shin-Osaka ↔ Namba. Alternativa rápida y descongestionada.',
    ],
  },
  {
    city: 'Da Nang & Hanoi',
    card: 'Grab (app móvil)',
    tip: 'El hotel incluye un coche para un trayecto, Aeropuerto → Hotel, para el día 4 de agosto. El trayecto de vuelta, Hotel → Aeropuerto DAD (8 ago), se hace en coche pagando 15€. — No hay metro. Grab es la opción más segura y económica: precio fijo antes de subir, sin regateo. Descarga la app antes de salir de España y activa datos de roaming o cómprate una SIM local.',
    lines: [
      'Grab Bike — mototaxi, ~30.000–50.000 VND (1–2€). Perfecto para trayectos cortos en Hanoi.',
      'Grab Car — taxi 4 plazas, ~80.000–150.000 VND (3–6€). Más cómodo para equipaje.',
      'Taxi Mai Linh (verde) — alternativa fiable sin app. Pide siempre taxímetro.',
    ],
  },
]

export const flights = [
  { from: 'MAD T4S', to: 'DOH', dep: '15:45', arr: '23:30', date: '21 jul', duration: '~6h 45 min' },
  { from: 'DOH', to: 'NRT T2', dep: '02:50', arr: '19:10', date: '21 jul → 22 jul', duration: '~10h 20 min' },
  { from: 'KIX T1', to: 'DAD', dep: '14:30', arr: '19:50', date: '4 ago', duration: '~4h 20 min' },
  { from: 'DAD T1', to: 'HAN T1', dep: '22:25', arr: '23:45', date: '8 ago', duration: '~1h 20 min' },
  { from: 'HAN T2', to: 'DOH', dep: '19:30', arr: '22:20', date: '12 ago', duration: '~6h 50 min' },
  { from: 'DOH', to: 'MAD', dep: '01:25', arr: '07:35', date: '12 ago → 13 ago', duration: '~7h 10 min' },
]

export const hotels = [
  {
    dates: '22–26 jul', city: 'Tokio',
    name: 'Park Hotel Tokyo',
    address: 'Minato-ku, Higashi Shimbashi 1-7-1',
    mapsUrl: 'https://www.google.com/maps/search/?api=1&query=Park+Hotel+Tokyo+Higashi+Shimbashi+1-7-1+Minato-ku+Tokyo',
  },
  {
    dates: '26–27 jul', city: 'Hakone',
    name: 'Hakone Yumoto Onsen Hotel Kajikaso',
    address: 'Kanagawa, Hakone, Yumoto 688',
    mapsUrl: 'https://www.google.com/maps/search/?api=1&query=Hotel+Kajikaso+Yumoto+688+Hakone+Kanagawa',
  },
  {
    dates: '27–31 jul', city: 'Kioto',
    name: 'Royal Park Hotel Kyoto Sanjo',
    address: 'Nakagyo-ku, Sanjo-dori Kawaramachi',
    mapsUrl: 'https://www.google.com/maps/search/?api=1&query=Royal+Park+Hotel+Kyoto+Sanjo+Nakagyo-ku+Sanjo-dori+Kawaramachi',
  },
  {
    dates: '31 jul–1 ago', city: 'Hiroshima',
    name: 'The Knot Hiroshima',
    address: 'Naka-ku, Otemachi 3-1-1',
    mapsUrl: 'https://www.google.com/maps/search/?api=1&query=The+Knot+Hiroshima+Otemachi+3-1-1+Naka-ku',
  },
  {
    dates: '1–4 ago', city: 'Osaka',
    name: 'voco Osaka Central by IHG',
    address: 'Nishi-ku, Kyomachibori 1-7-1',
    mapsUrl: 'https://www.google.com/maps/search/?api=1&query=voco+Osaka+Central+IHG+Kyomachibori+1-7-1+Nishi-ku',
  },
  {
    dates: '4–8 ago', city: 'Da Nang',
    name: 'Son Tra Beach Resort & Spa',
    address: 'Son Tra Peninsula, Da Nang',
    mapsUrl: 'https://www.google.com/maps/search/?api=1&query=Son+Tra+Beach+Resort+Spa+Da+Nang+Vietnam',
  },
  {
    dates: '8–12 ago', city: 'Hanoi',
    name: 'The Legend Hanoi Hotel',
    address: 'Ngo Quyen, Hoan Kiem, Hanoi',
    mapsUrl: 'https://www.google.com/maps/search/?api=1&query=The+Legend+Hanoi+Hotel+Ngo+Quyen+Hoan+Kiem',
  },
]

export const destinations = [
  {
    id: 'tokyo',
    country: 'Japón',
    stage: '1ª etapa',
    name: 'Tokio',
    subtitle: '東京',
    dates: '22 – 26 julio · 4 noches · Park Hotel Tokyo',
    alerts: [],
    days: [
      {
        label: '22 jul',
        title: 'Llegada a Tokio',
        mapsUrl: 'https://www.google.com/maps/search/?api=1&query=Park+Hotel+Tokyo+Shiodome+Minato-ku',
        desc: 'Aterrizaje 19:10 en Narita T2. Check-in en el Park Hotel Tokyo. Cena ligera en un konbini cercano (7-Eleven o Lawson) — primera experiencia konbini del viaje: onigiri, tamagoyaki y matcha latte.',
        tags: [],
      },
      {
        label: '23 jul',
        title: 'Shibuya & Harajuku',
        mapsUrl: 'https://www.google.com/maps/search/?api=1&query=Harajuku+Shibuya+Tokyo+Japan',
        desc: `
<p style="margin-bottom:10px">Empieza en <strong>Harajuku</strong> a primera hora — se llena por las tardes. Por la tarde cruza a <strong>Shibuya</strong>.</p>

<p style="font-size:11px;font-weight:700;letter-spacing:.1em;text-transform:uppercase;color:var(--ink-4);margin-bottom:6px">🌿 Harajuku — Mañana</p>
<ul style="list-style:none;display:flex;flex-direction:column;gap:5px;margin-bottom:14px">
  <li style="padding-left:16px;position:relative"><span style="position:absolute;left:0;color:var(--ink-muted);font-weight:700">·</span><strong>Meiji Jingu Shrine</strong> — A pocos minutos de la estación. Ambiente sereno en cuanto atraviesas los torii, perfecto para empezar el día con calma.</li>
  <li style="padding-left:16px;position:relative"><span style="position:absolute;left:0;color:var(--ink-muted);font-weight:700">·</span><strong>Yoyogi Park</strong> — Justo al lado del santuario. Precioso en verano, con músicos callejeros y gente haciendo picnic.</li>
  <li style="padding-left:16px;position:relative"><span style="position:absolute;left:0;color:var(--ink-muted);font-weight:700">·</span><strong>Takeshita Street</strong> — Moda kawaii, streetwear colorido, cosplay y accesorios a precios asequibles.</li>
  <li style="padding-left:16px;position:relative"><span style="position:absolute;left:0;color:var(--ink-muted);font-weight:700">·</span><strong>Cat Street</strong> — Conecta Harajuku con Shibuya. Menos masificada, destaca por sus tiendas de vintage y cafés con encanto.</li>
</ul>

<p style="font-size:11px;font-weight:700;letter-spacing:.1em;text-transform:uppercase;color:var(--ink-4);margin-bottom:6px">🏙 Shibuya — Tarde</p>
<ul style="list-style:none;display:flex;flex-direction:column;gap:5px;margin-bottom:14px">
  <li style="padding-left:16px;position:relative"><span style="position:absolute;left:0;color:var(--ink-muted);font-weight:700">·</span><strong>Shibuya Crossing</strong> — El cruce peatonal más famoso del mundo.</li>
  <li style="padding-left:16px;position:relative"><span style="position:absolute;left:0;color:var(--ink-muted);font-weight:700">·</span><strong>Shibuya Sky</strong> — Mirador al aire libre en lo alto del Scramble Square. Espectacular al atardecer. <span style="background:var(--amber-bg);color:var(--amber-text);border:1px solid #FDE68A;border-radius:99px;font-size:10px;font-weight:600;padding:1px 8px">Reservar antes</span></li>
  <li style="padding-left:16px;position:relative"><span style="position:absolute;left:0;color:var(--ink-muted);font-weight:700">·</span><strong>Estatua de Hachiko</strong> — Justo a la salida de Shibuya Station.</li>
</ul>

<p style="font-size:11px;font-weight:700;letter-spacing:.1em;text-transform:uppercase;color:var(--ink-4);margin-bottom:6px">🛍 Tiendas</p>
<ul style="list-style:none;display:flex;flex-direction:column;gap:5px;margin-bottom:14px">
  <li style="padding-left:16px;position:relative"><span style="position:absolute;left:0;color:var(--ink-muted);font-weight:700">·</span><strong>Laforet Harajuku</strong> — 140 locales de moda, icono juvenil de Tokio.</li>
  <li style="padding-left:16px;position:relative"><span style="position:absolute;left:0;color:var(--ink-muted);font-weight:700">·</span><strong>Omotesando Hills</strong> — Diseñado por Tadao Ando. Lujo, gastronomía y arquitectura.</li>
  <li style="padding-left:16px;position:relative"><span style="position:absolute;left:0;color:var(--ink-muted);font-weight:700">·</span><strong>Harakado</strong> — Inaugurado en 2024, frente a la estación de Harajuku.</li>
  <li style="padding-left:16px;position:relative"><span style="position:absolute;left:0;color:var(--ink-muted);font-weight:700">·</span><strong>WEGO / Kinji</strong> — Streetwear y vintage en Takeshita, muy asequibles.</li>
  <li style="padding-left:16px;position:relative"><span style="position:absolute;left:0;color:var(--ink-muted);font-weight:700">·</span><strong>Kiddy Land</strong> — Juguetería icónica de Omotesando, ideal para souvenirs.</li>
  <li style="padding-left:16px;position:relative"><span style="position:absolute;left:0;color:var(--ink-muted);font-weight:700">·</span><strong>Daiso</strong> — Todo a 100¥. En Takeshita Street.</li>
  <li style="padding-left:16px;position:relative"><span style="position:absolute;left:0;color:var(--ink-muted);font-weight:700">·</span><strong>Shibuya 109</strong> — Templo de la moda juvenil femenina.</li>
  <li style="padding-left:16px;position:relative"><span style="position:absolute;left:0;color:var(--ink-muted);font-weight:700">·</span><strong>PARCO Shibuya</strong> — Videojuegos, cultura pop y diseño.</li>
</ul>

<p style="font-size:11px;font-weight:700;letter-spacing:.1em;text-transform:uppercase;color:var(--ink-4);margin-bottom:6px">🍜 Dónde comer</p>
<ul style="list-style:none;display:flex;flex-direction:column;gap:5px">
  <li style="padding-left:16px;position:relative"><span style="position:absolute;left:0;color:var(--ink-muted);font-weight:700">·</span><strong>Marion Crepes</strong> — Takeshita Street desde 1977. Más de 70 variedades.</li>
  <li style="padding-left:16px;position:relative"><span style="position:absolute;left:0;color:var(--ink-muted);font-weight:700">·</span><strong>The Matcha Tokyo</strong> — Omotesando. Matcha ceremonial y dulces wagashi.</li>
  <li style="padding-left:16px;position:relative"><span style="position:absolute;left:0;color:var(--ink-muted);font-weight:700">·</span><strong>Harajuku Gyozaro</strong> — Gyozas auténticas, muy populares entre locales.</li>
  <li style="padding-left:16px;position:relative"><span style="position:absolute;left:0;color:var(--ink-muted);font-weight:700">·</span><strong>Yaiyai Okonomiyaki</strong> — Muy bien valorado en Harajuku.</li>
  <li style="padding-left:16px;position:relative"><span style="position:absolute;left:0;color:var(--ink-muted);font-weight:700">·</span><strong>Tsukiji Totodon</strong> (cena) — Marisco y sushi fresco en Shibuya.</li>
  <li style="padding-left:16px;position:relative"><span style="position:absolute;left:0;color:var(--ink-muted);font-weight:700">·</span><strong>Ukai Tei</strong> (cena premium) — Teppanyaki de alta gama en Omotesando.</li>
</ul>

<hr style="border:none;border-top:1px solid var(--border);margin:18px 0" />
<p style="font-size:11px;font-weight:700;letter-spacing:.1em;text-transform:uppercase;color:var(--ink-4);margin-bottom:12px">💡 Tips y recomendaciones — Tokio</p>

<p style="margin-bottom:6px"><span style="background:var(--green-bg);color:var(--green-text);border:1px solid #BBF7D0;border-radius:99px;font-size:10px;font-weight:600;padding:1px 8px">restaurante</span></p>
<ul style="list-style:none;display:flex;flex-direction:column;gap:5px;margin-bottom:14px">
  <li style="padding-left:16px;position:relative"><span style="position:absolute;left:0;color:var(--ink-muted);font-weight:700">·</span><strong>Ichiran Ramen</strong> — Ramen en cabinas individuales, experiencia única e introspectiva</li>
  <li style="padding-left:16px;position:relative"><span style="position:absolute;left:0;color:var(--ink-muted);font-weight:700">·</span><strong>Sushiro / Kurasushi</strong> — Conveyor belt sushi, económico y de buena calidad</li>
  <li style="padding-left:16px;position:relative"><span style="position:absolute;left:0;color:var(--ink-muted);font-weight:700">·</span><strong>Sukiya / Yoshinoya</strong> — Gyudon (cuenco de buey), ~500¥, rápido y barato</li>
</ul>

<p style="margin-bottom:6px"><span style="background:var(--amber-bg);color:var(--amber-text);border:1px solid #FDE68A;border-radius:99px;font-size:10px;font-weight:600;padding:1px 8px">entrada anticipada</span></p>
<ul style="list-style:none;display:flex;flex-direction:column;gap:5px;margin-bottom:14px">
  <li style="padding-left:16px;position:relative"><span style="position:absolute;left:0;color:var(--ink-muted);font-weight:700">·</span><strong>TeamLab Tokio</strong> — Arte digital inmersivo en Odaiba. Reservar con semanas de antelación en la web oficial</li>
  <li style="padding-left:16px;position:relative"><span style="position:absolute;left:0;color:var(--ink-muted);font-weight:700">·</span><strong>Shibuya Sky</strong> — Mirador al aire libre en Scramble Square. Reservar online</li>
</ul>

<p style="margin-bottom:6px"><span style="background:var(--blue-bg);color:var(--blue-text);border:1px solid #BFDBFE;border-radius:99px;font-size:10px;font-weight:600;padding:1px 8px">shopping</span></p>
<ul style="list-style:none;display:flex;flex-direction:column;gap:5px">
  <li style="padding-left:16px;position:relative"><span style="position:absolute;left:0;color:var(--ink-muted);font-weight:700">·</span><strong>Manhole Goods Store</strong> — Souvenirs con diseños de tapas de alcantarilla locales, únicos</li>
  <li style="padding-left:16px;position:relative"><span style="position:absolute;left:0;color:var(--ink-muted);font-weight:700">·</span><strong>Glanta</strong> — Anillos personalizados grabados al momento</li>
  <li style="padding-left:16px;position:relative"><span style="position:absolute;left:0;color:var(--ink-muted);font-weight:700">·</span><strong>Mizutani Camera en Ueno</strong> — Relojes vintage y de segunda mano</li>
  <li style="padding-left:16px;position:relative"><span style="position:absolute;left:0;color:var(--ink-muted);font-weight:700">·</span><strong>Itoya</strong> — Papelería de 6 plantas en Ginza</li>
  <li style="padding-left:16px;position:relative"><span style="position:absolute;left:0;color:var(--ink-muted);font-weight:700">·</span><strong>Jins</strong> — Óptica, gafas graduadas el mismo día</li>
  <li style="padding-left:16px;position:relative"><span style="position:absolute;left:0;color:var(--ink-muted);font-weight:700">·</span><strong>Seiyu</strong> — Supermercado (Walmart), más barato que los konbinis</li>
  <li style="padding-left:16px;position:relative"><span style="position:absolute;left:0;color:var(--ink-muted);font-weight:700">·</span><strong>3 COINS</strong> — Todo a 300¥: hogar, accesorios y regalos</li>
  <li style="padding-left:16px;position:relative"><span style="position:absolute;left:0;color:var(--ink-muted);font-weight:700">·</span><strong>ABC Mart</strong> — Cadena de calzado, marcas a buen precio</li>
  <li style="padding-left:16px;position:relative"><span style="position:absolute;left:0;color:var(--ink-muted);font-weight:700">·</span><strong>Don Quijote</strong> — Tienda 24h, buscar parches para los pies (kinesiológicos)</li>
</ul>
        `,
        tags: [],
      },
      {
        label: '24 jul',
        title: 'Asakusa & Akihabara',
        mapsUrl: 'https://www.google.com/maps/search/?api=1&query=Senso-ji+Temple+Asakusa+Tokyo',
        desc: `
<p style="margin-bottom:10px">Contraste perfecto en un solo día: Asakusa tradicional y sereno por la mañana, Akihabara caótico y estimulante por la tarde. Están a <strong>10 min en metro</strong> el uno del otro (línea Ginza).</p>

<p style="font-size:11px;font-weight:700;letter-spacing:.1em;text-transform:uppercase;color:var(--ink-4);margin-bottom:6px">⛩️ Asakusa — Mañana</p>
<ul style="list-style:none;display:flex;flex-direction:column;gap:5px;margin-bottom:6px">
  <li style="padding-left:16px;position:relative"><span style="position:absolute;left:0;color:var(--ink-muted);font-weight:700">·</span><strong>Senso-ji</strong> — Llega antes de las 7h. De madrugada estarás prácticamente solo; a partir de las 9h se masifica. El templo más antiguo y fotografiado de Tokio. <span style="background:var(--amber-bg);color:var(--amber-text);border:1px solid #FDE68A;border-radius:99px;font-size:10px;font-weight:600;padding:1px 8px">Madrugar</span></li>
  <li style="padding-left:16px;position:relative"><span style="position:absolute;left:0;color:var(--ink-muted);font-weight:700">·</span><strong>Puerta Kaminarimon</strong> — La enorme puerta roja con su farol gigante que abre el camino al templo. La foto más icónica de Asakusa.</li>
  <li style="padding-left:16px;position:relative"><span style="position:absolute;left:0;color:var(--ink-muted);font-weight:700">·</span><strong>Nakamise-dori</strong> — 250 metros de tiendas de souvenirs y snacks tradicionales donde se respira el Japón más antiguo. Al final, el Senso-ji con su pagoda.</li>
  <li style="padding-left:16px;position:relative"><span style="position:absolute;left:0;color:var(--ink-muted);font-weight:700">·</span><strong>Shin-Nakamise Dori</strong> — Galería cubierta que cruza Nakamise-dori, más moderna, con tiendas y restaurantes.</li>
  <li style="padding-left:16px;position:relative"><span style="position:absolute;left:0;color:var(--ink-muted);font-weight:700">·</span><strong>Santuario de Asakusa & templos laterales</strong> — A la izquierda del Senso-ji hay pequeños santuarios y zonas ajardinadas mucho menos masificadas.</li>
  <li style="padding-left:16px;position:relative"><span style="position:absolute;left:0;color:var(--ink-muted);font-weight:700">·</span><strong>Rickshaw (Jinrikisha)</strong> — Paseo en rickshaw tradicional por el barrio. Caro pero muy especial y fotogénico.</li>
</ul>

<p style="font-size:11px;font-weight:700;letter-spacing:.1em;text-transform:uppercase;color:var(--ink-4);margin:10px 0 6px">🍡 Snacks de Nakamise-dori</p>
<ul style="list-style:none;display:flex;flex-direction:column;gap:5px;margin-bottom:14px">
  <li style="padding-left:16px;position:relative"><span style="position:absolute;left:0;color:var(--ink-muted);font-weight:700">·</span><strong>Senbei</strong> — Galletas de arroz tostadas, las más populares de la calle.</li>
  <li style="padding-left:16px;position:relative"><span style="position:absolute;left:0;color:var(--ink-muted);font-weight:700">·</span><strong>Kibi-dango</strong> — Bolas de masa de arroz dulce, textura suave y pegajosa.</li>
  <li style="padding-left:16px;position:relative"><span style="position:absolute;left:0;color:var(--ink-muted);font-weight:700">·</span><strong>Age-manju</strong> — Dulces de pasta de judías fritos con tempura. Únicos.</li>
  <li style="padding-left:16px;position:relative"><span style="position:absolute;left:0;color:var(--ink-muted);font-weight:700">·</span><strong>Melon Pan · Asakusa Kagetsudo</strong> — El mejor melon pan de Tokio: normal 200¥, relleno de helado 450¥. Imprescindible.</li>
</ul>

<p style="font-size:11px;font-weight:700;letter-spacing:.1em;text-transform:uppercase;color:var(--ink-4);margin-bottom:6px">🍱 Comer en Asakusa</p>
<ul style="list-style:none;display:flex;flex-direction:column;gap:5px;margin-bottom:14px">
  <li style="padding-left:16px;position:relative"><span style="position:absolute;left:0;color:var(--ink-muted);font-weight:700">·</span><strong>Daikokuya</strong> — Tempura de referencia en Asakusa desde 1887. Cola inevitable pero merece la pena.</li>
  <li style="padding-left:16px;position:relative"><span style="position:absolute;left:0;color:var(--ink-muted);font-weight:700">·</span><strong>Asakusa Imahan</strong> — Wagyu a precios asequibles, ideal para amantes de la carne.</li>
  <li style="padding-left:16px;position:relative"><span style="position:absolute;left:0;color:var(--ink-muted);font-weight:700">·</span><strong>Asakusa Okonomiyaki Sometaro</strong> — Okonomiyaki tradicional muy bien valorado.</li>
</ul>

<p style="font-size:11px;font-weight:700;letter-spacing:.1em;text-transform:uppercase;color:var(--ink-4);margin-bottom:6px">⚡ Akihabara — Tarde</p>
<ul style="list-style:none;display:flex;flex-direction:column;gap:5px;margin-bottom:14px">
  <li style="padding-left:16px;position:relative"><span style="position:absolute;left:0;color:var(--ink-muted);font-weight:700">·</span><strong>Chūo Dōri</strong> — La calle principal y más pintoresca del barrio. Neons, música y tiendas de varios pisos a ambos lados. Sal por la salida <em>Electric Town</em> de la estación.</li>
  <li style="padding-left:16px;position:relative"><span style="position:absolute;left:0;color:var(--ink-muted);font-weight:700">·</span><strong>Arcades (Game Centers)</strong> — Edificios de 6–8 plantas con máquinas grúa, simuladores y toda clase de juegos. Imprescindible aunque no seas gamer.</li>
  <li style="padding-left:16px;position:relative"><span style="position:absolute;left:0;color:var(--ink-muted);font-weight:700">·</span><strong>Gachapon</strong> — Máquinas de cápsulas con miniaturas por todas partes. Hay tiendas enteras dedicadas solo a ellas (~200–500¥ por cápsula).</li>
  <li style="padding-left:16px;position:relative"><span style="position:absolute;left:0;color:var(--ink-muted);font-weight:700">·</span><strong>Maid Café · @Home Cafe</strong> — Experiencia única con camareras en inglés. Curioso aunque no seas fan del anime.</li>
  <li style="padding-left:16px;position:relative"><span style="position:absolute;left:0;color:var(--ink-muted);font-weight:700">·</span><strong>2K540 Aki-Oka Artisan</strong> — Talleres de artesanos bajo las vías del tren entre Akihabara y Ueno. Muy diferente al resto del barrio, fotogénico y tranquilo.</li>
</ul>

<p style="font-size:11px;font-weight:700;letter-spacing:.1em;text-transform:uppercase;color:var(--ink-4);margin-bottom:6px">🛒 Tiendas de Akihabara</p>
<ul style="list-style:none;display:flex;flex-direction:column;gap:5px">
  <li style="padding-left:16px;position:relative"><span style="position:absolute;left:0;color:var(--ink-muted);font-weight:700">·</span><strong>Yodobashi Camera</strong> — Megacentro comercial de electrónica, cámaras y gadgets en múltiples plantas. El más grande del barrio.</li>
  <li style="padding-left:16px;position:relative"><span style="position:absolute;left:0;color:var(--ink-muted);font-weight:700">·</span><strong>Mandarake</strong> — Tienda mítica con manga, figuras y artículos raros de colección. Para coleccionistas.</li>
  <li style="padding-left:16px;position:relative"><span style="position:absolute;left:0;color:var(--ink-muted);font-weight:700">·</span><strong>Super Potato</strong> — Videojuegos retro: Famicom, Super Nintendo, Game Boy... Una joya para nostálgicos.</li>
  <li style="padding-left:16px;position:relative"><span style="position:absolute;left:0;color:var(--ink-muted);font-weight:700">·</span><strong>Animate</strong> — Productos oficiales de anime y manga de las franquicias más populares.</li>
  <li style="padding-left:16px;position:relative"><span style="position:absolute;left:0;color:var(--ink-muted);font-weight:700">·</span><strong>Don Quijote Akihabara</strong> — Cosplay, souvenirs y artículos variados a buen precio. Abre hasta tarde.</li>
</ul>
        `,
        tags: [],
      },
      {
        label: '25 jul',
        title: 'Ginza & Odaiba + Omakase',
        mapsUrl: 'https://www.google.com/maps/search/?api=1&query=Ginza+Tokyo+Japan',
        desc: `
<p style="margin-bottom:10px">Conexión geográfica perfecta: Ginza está en el centro y desde allí llegas a Odaiba en <strong>15 minutos</strong>. Todo Ginza se recorre a pie — las calles principales forman una cuadrícula muy cómoda.</p>

<p style="font-size:11px;font-weight:700;letter-spacing:.1em;text-transform:uppercase;color:var(--ink-4);margin-bottom:6px">🏙 Ginza — Mañana</p>
<ul style="list-style:none;display:flex;flex-direction:column;gap:5px;margin-bottom:14px">
  <li style="padding-left:16px;position:relative"><span style="position:absolute;left:0;color:var(--ink-muted);font-weight:700">·</span><strong>Itoya</strong> — Papelería de 6 plantas, imprescindible. Artículos de escritura japoneses únicos, cuadernos, sellos, washi tape. Imposible salir con las manos vacías.</li>
  <li style="padding-left:16px;position:relative"><span style="position:absolute;left:0;color:var(--ink-muted);font-weight:700">·</span><strong>Ginza Six</strong> — El centro comercial más elegante de Tokio. Marcas de lujo internacionales y japonesas, gastronomía en los últimos pisos y jardín en la azotea.</li>
  <li style="padding-left:16px;position:relative"><span style="position:absolute;left:0;color:var(--ink-muted);font-weight:700">·</span><strong>Edificio Ginza Wako</strong> — El icónico edificio con reloj en el cruce central de Ginza. La imagen más representativa del barrio.</li>
  <li style="padding-left:16px;position:relative"><span style="position:absolute;left:0;color:var(--ink-muted);font-weight:700">·</span><strong>Teatro Kabuki-za</strong> — Aunque no entres, la fachada tradicional contrasta espectacularmente con los rascacielos de alrededor. Fotogénico e histórico.</li>
  <li style="padding-left:16px;position:relative"><span style="position:absolute;left:0;color:var(--ink-muted);font-weight:700">·</span><strong>Ginza Rasin</strong> — 4 plantas de relojes de lujo de segunda mano: Rolex, Omega, Patek Philippe a mejores precios que en Europa. Imprescindible si te interesan los relojes.</li>
</ul>

<p style="font-size:11px;font-weight:700;letter-spacing:.1em;text-transform:uppercase;color:var(--ink-4);margin-bottom:6px">🚈 Cómo llegar a Odaiba</p>
<ul style="list-style:none;display:flex;flex-direction:column;gap:5px;margin-bottom:14px">
  <li style="padding-left:16px;position:relative"><span style="position:absolute;left:0;color:var(--ink-muted);font-weight:700">·</span><strong>Ginza → Shinbashi</strong> en metro línea Ginza (2 min, 1 parada) — o a pie en ~12 min.</li>
  <li style="padding-left:16px;position:relative"><span style="position:absolute;left:0;color:var(--ink-muted);font-weight:700">·</span><strong>Shinbashi → Daiba</strong> en <strong>Yurikamome</strong> (~15 min, ~320¥). Tren automatizado sin conductor — súbete en el <em>primer vagón</em> para vistas frontales. Hace un giro de 270° al cruzar el Rainbow Bridge, una experiencia en sí misma. <span style="background:var(--blue-bg);color:var(--blue-text);border:1px solid #BFDBFE;border-radius:99px;font-size:10px;font-weight:600;padding:1px 8px">Suica válida · Sin JR Pass</span></li>
  <li style="padding-left:16px;position:relative"><span style="position:absolute;left:0;color:var(--ink-muted);font-weight:700">·</span>Alternativa panorámica: <strong>Water Bus</strong> desde Hinode Pier hasta Odaiba (~25 min). Más lento pero espectacular sobre la bahía.</li>
</ul>

<p style="font-size:11px;font-weight:700;letter-spacing:.1em;text-transform:uppercase;color:var(--ink-4);margin-bottom:6px">🏝 Odaiba — Tarde</p>
<ul style="list-style:none;display:flex;flex-direction:column;gap:5px;margin-bottom:14px">
  <li style="padding-left:16px;position:relative"><span style="position:absolute;left:0;color:var(--ink-muted);font-weight:700">·</span><strong>Réplica Estatua de la Libertad + Odaiba Seaside Park</strong> — Vistas a la bahía de Tokio y al Rainbow Bridge. El paseo marítimo es precioso al atardecer.</li>
  <li style="padding-left:16px;position:relative"><span style="position:absolute;left:0;color:var(--ink-muted);font-weight:700">·</span><strong>Unicorn Gundam</strong> — Robot gigante de 20m frente al DiverCity. Hace un espectáculo de luces y sonido cada 2 horas durante el día.</li>
  <li style="padding-left:16px;position:relative"><span style="position:absolute;left:0;color:var(--ink-muted);font-weight:700">·</span><strong>Fuji TV Building</strong> — Diseñado por Kenzō Tange, con una gran bola metálica en el centro. Sube al mirador Hachitama al atardecer para vistas de 270° sobre la bahía y, si hay suerte, el Monte Fuji en el horizonte.</li>
  <li style="padding-left:16px;position:relative"><span style="position:absolute;left:0;color:var(--ink-muted);font-weight:700">·</span><strong>DiverCity Tokyo Plaza</strong> — Centro comercial junto al Gundam. Buena opción para comer: zona de food court en planta baja con ramen y tempura por menos de 800¥.</li>
  <li style="padding-left:16px;position:relative"><span style="position:absolute;left:0;color:var(--ink-muted);font-weight:700">·</span><strong>TeamLab Borderless</strong> — Museo de arte digital inmersivo, la experiencia más única de Tokio. Duración ~1,5–2h. Abre hasta las 21:00h — ideal visitarlo al atardecer. <span style="background:var(--red-bg);color:var(--red-text);border:1px solid #FECDD3;border-radius:99px;font-size:10px;font-weight:600;padding:1px 8px">⚠ Reserva online imprescindible</span></li>
</ul>

<p style="font-size:11px;font-weight:700;letter-spacing:.1em;text-transform:uppercase;color:var(--ink-4);margin-bottom:6px">🍽 Noche — Omakase en Tokio</p>
<ul style="list-style:none;display:flex;flex-direction:column;gap:5px">
  <li style="padding-left:16px;position:relative"><span style="position:absolute;left:0;color:var(--ink-muted);font-weight:700">·</span>Cierra el día con una experiencia <strong>omakase</strong> — menú degustación de sushi donde el chef decide los pases según el mejor pescado del día. La experiencia gastronómica definitiva de Tokio.</li>
  <li style="padding-left:16px;position:relative"><span style="position:absolute;left:0;color:var(--ink-muted);font-weight:700">·</span>Plataformas para reservar: <strong>Tableall</strong> o <strong>Pocket Concierge</strong>. Precio orientativo ~15.000–30.000¥ por persona. <span style="background:var(--amber-bg);color:var(--amber-text);border:1px solid #FDE68A;border-radius:99px;font-size:10px;font-weight:600;padding:1px 8px">Reservar con semanas de antelación</span></li>
</ul>
        `,
        tags: [{ type: 'tip', text: 'Recomendado' }],
      },
      {
        label: '26 jul',
        title: 'Shinjuku → Hakone',
        mapsUrl: 'https://www.google.com/maps/search/?api=1&query=Shinjuku+Gyoen+National+Garden+Tokyo',
        desc: `
<p style="margin-bottom:10px">Día de viaje a Hakone con mañana libre en Shinjuku. El Hotel Kajikaso está a <strong>5 minutos a pie</strong> de la estación Hakone-Yumoto — uno de los accesos más cómodos de todo Hakone.</p>

<p style="font-size:11px;font-weight:700;letter-spacing:.1em;text-transform:uppercase;color:var(--ink-4);margin-bottom:6px">🌸 Shinjuku — Mañana</p>
<ul style="list-style:none;display:flex;flex-direction:column;gap:5px;margin-bottom:14px">
  <li style="padding-left:16px;position:relative"><span style="position:absolute;left:0;color:var(--ink-muted);font-weight:700">·</span><strong>Shinjuku Gyoen</strong> — Parque tranquilo y precioso, ideal para descansar antes del viaje. Combina jardines japoneses, francés e inglés en el corazón de la ciudad.</li>
  <li style="padding-left:16px;position:relative"><span style="position:absolute;left:0;color:var(--ink-muted);font-weight:700">·</span><strong>Golden Gai</strong> — Laberinto de callejones con más de 200 bares diminutos. De día es fotogénico y tranquilo — ideal para explorarlo antes de que abran.</li>
  <li style="padding-left:16px;position:relative"><span style="position:absolute;left:0;color:var(--ink-muted);font-weight:700">·</span><strong>Omoide Yokocho</strong> — El callejero del humo: puestos de yakitori diminutos desde los años 50. Muy fotogénico incluso a mediodía.</li>
  <li style="padding-left:16px;position:relative"><span style="position:absolute;left:0;color:var(--ink-muted);font-weight:700">·</span>Comida temprana ~11:30h para llegar cómodo a Shinjuku Station. <strong>Ramen Fuunji</strong> (tsukemen, muy cerca de Shinjuku) es la opción perfecta antes del tren.</li>
</ul>

<p style="font-size:11px;font-weight:700;letter-spacing:.1em;text-transform:uppercase;color:var(--ink-4);margin-bottom:6px">🚂 Ruta óptima a Hakone</p>
<ul style="list-style:none;display:flex;flex-direction:column;gap:5px;margin-bottom:14px">
  <li style="padding-left:16px;position:relative"><span style="position:absolute;left:0;color:var(--ink-muted);font-weight:700">·</span><strong>Shinjuku → Hakone-Yumoto</strong> en <strong>Odakyu Romancecar</strong> directo, sin transbordos. ~80 min · todos los asientos reservados. El tren de las 13–14h llega a Yumoto sobre las 14:30–15:30h. <span style="background:var(--amber-bg);color:var(--amber-text);border:1px solid #FDE68A;border-radius:99px;font-size:10px;font-weight:600;padding:1px 8px">⚠ Reservar desde el 26 jun</span></li>
  <li style="padding-left:16px;position:relative"><span style="position:absolute;left:0;color:var(--ink-muted);font-weight:700">·</span><strong>Hakone-Yumoto → Hotel Kajikaso</strong> — 5 minutos a pie desde la estación. El hotel se ve desde el andén.</li>
  <li style="padding-left:16px;position:relative"><span style="position:absolute;left:0;color:var(--ink-muted);font-weight:700">·</span>Shinjuku es una estación laberinto — sigue siempre los carteles de <em>Odakyu</em>, no los de JR. Date 15 min extra si es la primera vez.</li>
</ul>

<p style="font-size:11px;font-weight:700;letter-spacing:.1em;text-transform:uppercase;color:var(--ink-4);margin-bottom:6px">🎟 Ticket recomendado: Hakone Free Pass</p>
<ul style="list-style:none;display:flex;flex-direction:column;gap:5px;margin-bottom:14px">
  <li style="padding-left:16px;position:relative"><span style="position:absolute;left:0;color:var(--ink-muted);font-weight:700">·</span>El <strong>Hakone Free Pass</strong> (Odakyu) es la opción más inteligente: incluye el trayecto Shinjuku–Odawara ida y vuelta + uso ilimitado de Hakone Tozan Railway, teleférico, barco pirata del Lago Ashi, funicular y autobuses dentro de Hakone + descuentos en 70+ atracciones.</li>
  <li style="padding-left:16px;position:relative"><span style="position:absolute;left:0;color:var(--ink-muted);font-weight:700">·</span>Precio 2026: <strong>2 días desde Shinjuku: 7.100¥ · 3 días: 7.500¥</strong>. La diferencia es solo 400¥ — mejor el de 3 días para tener flexibilidad.</li>
  <li style="padding-left:16px;position:relative"><span style="position:absolute;left:0;color:var(--ink-muted);font-weight:700">·</span>El Free Pass cubre la tarifa base del Romancecar. Para subir al Romancecar solo añade el <strong>suplemento limited express (~1.150¥ digital)</strong> en los mostradores Odakyu de Shinjuku.</li>
  <li style="padding-left:16px;position:relative"><span style="position:absolute;left:0;color:var(--ink-muted);font-weight:700">·</span>Precio total optimizado por persona: <strong>~8.250¥</strong> (vs ~14.000¥ comprando todo suelto). Compra online en <strong>Klook, KKday</strong> o en el <em>Odakyu Sightseeing Service Center</em> de Shinjuku. <span style="background:var(--green-bg);color:var(--green-text);border:1px solid #BBF7D0;border-radius:99px;font-size:10px;font-weight:600;padding:1px 8px">Ahorro ~5.750¥</span></li>
</ul>

<p style="font-size:11px;font-weight:700;letter-spacing:.1em;text-transform:uppercase;color:var(--ink-4);margin-bottom:6px">🏨 Llegada al Hotel Kajikaso</p>
<ul style="list-style:none;display:flex;flex-direction:column;gap:5px">
  <li style="padding-left:16px;position:relative"><span style="position:absolute;left:0;color:var(--ink-muted);font-weight:700">·</span>Check-in a partir de las <strong>15:00h</strong>. Ryokan tradicional con onsen a orillas del río Hayakawa y las montañas de Hakone de fondo.</li>
  <li style="padding-left:16px;position:relative"><span style="position:absolute;left:0;color:var(--ink-muted);font-weight:700">·</span>El hotel dispone de <strong>2 baños termales públicos</strong> (plantas 2 y 6) con agua de manantial natural. Aprovechar la tarde y noche para el onsen.</li>
  <li style="padding-left:16px;position:relative"><span style="position:absolute;left:0;color:var(--ink-muted);font-weight:700">·</span><strong>Cena kaiseki</strong> incluida en el ryokan — menú de temporada que cambia mensualmente. Avisa de alergias al hacer la reserva.</li>
</ul>
        `,
        tags: [{ type: 'warn', text: 'Día de viaje' }],
      },
    ],
    food: [
      { name: 'Konbini experience', desc: '7-Eleven, Lawson o FamilyMart: onigiri, tamagoyaki, nikuman, matcha latte y snacks únicos. Una institución cultural.' },
      { name: 'Tsukiji Outer Market', desc: 'El mercado interior cerró pero el exterior sigue activo. Ideal para desayuno con sushi fresco y tamagoyaki recién hecho.' },
      { name: 'Ramen Fuunji (Shinjuku)', desc: 'Especialidad tsukemen (ramen para mojar). Cola inevitable pero merece la pena. Uno de los mejores de Tokio.' },
      { name: 'Ginza Rasin · Relojes', desc: '4 plantas dedicadas a relojes de lujo de segunda mano. Rolex, Omega, Patek Philippe a mejores precios que en Europa.' },
    ],
  },
  {
    id: 'hakone',
    country: 'Japón',
    stage: '2ª etapa',
    name: 'Hakone',
    subtitle: '箱根',
    dates: '26 – 27 julio · 1 noche · Hotel Kajikaso (Ryokan & Onsen)',
    alerts: [
      {
        type: 'blue',
        text: '<strong>Transporte desde Tokio:</strong> Odakyu Romance Car desde Shinjuku directo a Hakone-Yumoto (~85 min, ~2.000¥). Reserva de asiento en la web de Odakyu. Del hotel al aeropuerto: taxi ~10 min (~800¥) o servicio de recogida del hotel (consultar al reservar).',
      },
      {
        type: 'green',
        text: '<strong>Transporte a Kioto (día 27):</strong> Bus local Hakone-Yumoto → Odawara (~30 min) + Shinkansen Hikari Odawara → Kioto (~1h 45 min). Con JR Pass está cubierto. Sin JR Pass: ~14.000¥ por persona.',
      },
    ],
    days: [
      {
        label: 'Mañana',
        title: 'Hakone Loop — Inicio',
        mapsUrl: 'https://www.google.com/maps/search/?api=1&query=Owakudani+Hakone+Kanagawa+Japan',
        desc: `
<p style="margin-bottom:10px">El loop se hace en <strong>sentido horario</strong>: Yumoto → tren de montaña → Gora → funicular → teleférico → Owakudani → Togendai → barco pirata → Moto-Hakone → autobús de vuelta. Todo cubierto por el <strong>Hakone Free Pass</strong>.</p>

<p style="font-size:11px;font-weight:700;letter-spacing:.1em;text-transform:uppercase;color:var(--ink-4);margin-bottom:6px">⚠️ Antes de salir</p>
<ul style="list-style:none;display:flex;flex-direction:column;gap:5px;margin-bottom:14px">
  <li style="padding-left:16px;position:relative"><span style="position:absolute;left:0;color:var(--ink-muted);font-weight:700">·</span>Consulta el estado del teleférico esa mañana en la web oficial — Owakudani cierra con frecuencia por actividad volcánica (gas sulfuroso). <span style="background:var(--amber-bg);color:var(--amber-text);border:1px solid #FDE68A;border-radius:99px;font-size:10px;font-weight:600;padding:1px 8px">Verificar la mañana del día</span></li>
  <li style="padding-left:16px;position:relative"><span style="position:absolute;left:0;color:var(--ink-muted);font-weight:700">·</span>En julio el Monte Fuji puede estar tapado por niebla. Las mejores probabilidades de verlo son <strong>entre las 8 y las 10h</strong> — sal lo antes posible del hotel.</li>
  <li style="padding-left:16px;position:relative"><span style="position:absolute;left:0;color:var(--ink-muted);font-weight:700">·</span>Lleva una mascarilla ligera para Owakudani — el olor a azufre es intenso y el aire cargado puede molestar.</li>
</ul>

<p style="font-size:11px;font-weight:700;letter-spacing:.1em;text-transform:uppercase;color:var(--ink-4);margin-bottom:6px">🚞 Tren Hakone Tozan</p>
<ul style="list-style:none;display:flex;flex-direction:column;gap:5px;margin-bottom:14px">
  <li style="padding-left:16px;position:relative"><span style="position:absolute;left:0;color:var(--ink-muted);font-weight:700">·</span><strong>Hakone-Yumoto → Gora</strong> en el tren de montaña cremallera. Sube más de 300 metros de altitud serpenteando por un valle boscoso y denso. Uno de los trenes de montaña más bonitos de Japón.</li>
  <li style="padding-left:16px;position:relative"><span style="position:absolute;left:0;color:var(--ink-muted);font-weight:700">·</span>En Gora, parada opcional en el <strong>Hakone Open Air Museum</strong> — esculturas de Henry Moore, Picasso y Rodin al aire libre con vistas a las montañas. Si el tiempo lo permite, merece 1h.</li>
</ul>

<p style="font-size:11px;font-weight:700;letter-spacing:.1em;text-transform:uppercase;color:var(--ink-4);margin-bottom:6px">🚡 Funicular + Teleférico → Owakudani</p>
<ul style="list-style:none;display:flex;flex-direction:column;gap:5px">
  <li style="padding-left:16px;position:relative"><span style="position:absolute;left:0;color:var(--ink-muted);font-weight:700">·</span>Funicular <strong>Gora → Sounzan</strong>, luego teleférico de góndola <strong>Sounzan → Owakudani → Togendai</strong>. Vistas crecientes del valle volcánico.</li>
  <li style="padding-left:16px;position:relative"><span style="position:absolute;left:0;color:var(--ink-muted);font-weight:700">·</span><strong>Owakudani</strong> — Valle volcánico activo a ~1.044m. Fumarolas, piscinas sulfurosas burbujeantes y un paisaje de otro planeta. Los <strong>kuro-tamago</strong> (huevos negros cocidos en agua sulfurosa) se venden en bolsas de 5 por 500¥. La leyenda dice que comer uno añade 7 años de vida.</li>
</ul>

<hr style="border:none;border-top:1px solid var(--border);margin:18px 0" />
<p style="font-size:11px;font-weight:700;letter-spacing:.1em;text-transform:uppercase;color:var(--ink-4);margin-bottom:12px">💡 Tips y recomendaciones — Hakone</p>

<p style="margin-bottom:6px"><span style="background:var(--blue-bg);color:var(--blue-text);border:1px solid #BFDBFE;border-radius:99px;font-size:10px;font-weight:600;padding:1px 8px">transporte</span></p>
<ul style="list-style:none;display:flex;flex-direction:column;gap:5px">
  <li style="padding-left:16px;position:relative"><span style="position:absolute;left:0;color:var(--ink-muted);font-weight:700">·</span><strong>Hakone Free Pass</strong> (Odakyu) — Incluye Shinkansen Shinjuku–Odawara ida y vuelta + transporte ilimitado dentro de Hakone (tren de montaña, teleférico, barco pirata, funicular, autobuses) + descuentos en 70+ atracciones. <strong>2 días: 7.100¥ · 3 días: 7.500¥</strong> (solo 400¥ de diferencia — mejor el de 3 días). Comprar en Klook, KKday o en el Odakyu Sightseeing Service Center de Shinjuku. El suplemento Romancecar (~1.150¥) se paga aparte. <span style="background:var(--green-bg);color:var(--green-text);border:1px solid #BBF7D0;border-radius:99px;font-size:10px;font-weight:600;padding:1px 8px">Ahorro ~5.750¥ vs suelto</span></li>
</ul>
        `,
        tags: [],
      },
      {
        label: 'Mediodía',
        title: 'Lago Ashi — Barco Pirata & Santuario',
        mapsUrl: 'https://www.google.com/maps/search/?api=1&query=Lake+Ashi+Hakone+Kanagawa+Japan',
        desc: `
<p style="margin-bottom:10px">Desde Togendai embarca en el <strong>barco pirata</strong> para cruzar el Lago Ashi. El lago ocupa parte de un antiguo cráter volcánico y en días despejados el Monte Fuji emerge sobre la orilla occidental.</p>

<p style="font-size:11px;font-weight:700;letter-spacing:.1em;text-transform:uppercase;color:var(--ink-4);margin-bottom:6px">⛵ Barco Pirata · Lago Ashi</p>
<ul style="list-style:none;display:flex;flex-direction:column;gap:5px;margin-bottom:14px">
  <li style="padding-left:16px;position:relative"><span style="position:absolute;left:0;color:var(--ink-muted);font-weight:700">·</span><strong>Togendai → Moto-Hakone</strong> en barco pirata (~25 min). Incluido en el Hakone Free Pass. Baja en <strong>Moto-Hakone</strong> para ver el torii y el santuario.</li>
  <li style="padding-left:16px;position:relative"><span style="position:absolute;left:0;color:var(--ink-muted);font-weight:700">·</span>El <strong>Torii de la Paz</strong> sobre el agua es la foto más icónica de Hakone — el torii rojo sobresale en el lago con las montañas de fondo.</li>
</ul>

<p style="font-size:11px;font-weight:700;letter-spacing:.1em;text-transform:uppercase;color:var(--ink-4);margin-bottom:6px">⛩️ Santuario de Hakone</p>
<ul style="list-style:none;display:flex;flex-direction:column;gap:5px;margin-bottom:14px">
  <li style="padding-left:16px;position:relative"><span style="position:absolute;left:0;color:var(--ink-muted);font-weight:700">·</span>A 5 minutos a pie del muelle de Moto-Hakone siguiendo las puertas torii bermellón entre cedros centenarios. Un camino forestal precioso que lleva al salón principal del santuario.</li>
  <li style="padding-left:16px;position:relative"><span style="position:absolute;left:0;color:var(--ink-muted);font-weight:700">·</span>El santuario está dedicado al <strong>dragón Kuzuryu</strong> de nueve cabezas, la criatura legendaria que habitaba el lago Ashi. Ambiente sereno y muy diferente al turismo de superficie.</li>
</ul>

<p style="font-size:11px;font-weight:700;letter-spacing:.1em;text-transform:uppercase;color:var(--ink-4);margin-bottom:6px">🍱 Comer en Moto-Hakone</p>
<ul style="list-style:none;display:flex;flex-direction:column;gap:5px">
  <li style="padding-left:16px;position:relative"><span style="position:absolute;left:0;color:var(--ink-muted);font-weight:700">·</span>Hay varios restaurantes y cafés junto al muelle de Moto-Hakone. Buena opción para un almuerzo tranquilo antes de volver al hotel.</li>
  <li style="padding-left:16px;position:relative"><span style="position:absolute;left:0;color:var(--ink-muted);font-weight:700">·</span>Vuelta al hotel en <strong>autobús Hakone Tozan</strong> (línea H o K hasta Hakone-Yumoto, ~35 min). Cubierto por el Hakone Free Pass.</li>
</ul>
        `,
        tags: [],
      },
      {
        label: 'Tarde',
        title: 'Yosegi Zaiku — Artesanía de Madera',
        mapsUrl: 'https://www.google.com/maps/search/?api=1&query=Hakone-Yumoto+Kanagawa+Japan',
        desc: `
<p style="margin-bottom:10px">De vuelta en Yumoto, dedica un rato a la artesanía más característica de Hakone: el <strong>Yosegi Zaiku</strong>, mosaicos de madera con patrones geométricos elaborados combinando distintas maderas naturales. Declarada artesanía tradicional por el Ministerio de Industria japonés en 1984.</p>

<ul style="list-style:none;display:flex;flex-direction:column;gap:5px">
  <li style="padding-left:16px;position:relative"><span style="position:absolute;left:0;color:var(--ink-muted);font-weight:700">·</span><strong>Honma Yosegi Museum</strong> (Hakone-Yumoto) — Tienda en planta baja y museo en el segundo piso. Ofrecen talleres para hacer tu propio posavasos de marquetería: 4 sesiones al día, reserva con antelación.</li>
  <li style="padding-left:16px;position:relative"><span style="position:absolute;left:0;color:var(--ink-muted);font-weight:700">·</span><strong>Hamamatsuya</strong> — Tienda con ~200 años de historia. Fábrica visible en el segundo piso donde puedes ver al maestro artesano trabajar y encargar piezas personalizadas.</li>
  <li style="padding-left:16px;position:relative"><span style="position:absolute;left:0;color:var(--ink-muted);font-weight:700">·</span>Los productos más populares: <strong>himitsu-bako</strong> (cajas de apertura secreta con mecanismo oculto), posavasos, marcos de fotos y cajas decorativas. Van de 500¥ a varios miles según complejidad.</li>
  <li style="padding-left:16px;position:relative"><span style="position:absolute;left:0;color:var(--ink-muted);font-weight:700">·</span>La tienda de souvenirs de <strong>Hakone Ekimae</strong> (junto a la estación) abre hasta las 20:00h — puedes comprar también al volver del onsen.</li>
</ul>
        `,
        tags: [],
      },
      {
        label: 'Noche',
        title: 'Onsen & Cena Kaiseki',
        mapsUrl: 'https://www.google.com/maps/search/?api=1&query=Hotel+Kajikaso+Hakone-Yumoto+Kanagawa',
        desc: `
<p style="margin-bottom:10px">La razón principal de quedarse a dormir en Hakone: el onsen al caer el sol y la cena kaiseki de temporada.</p>

<ul style="list-style:none;display:flex;flex-direction:column;gap:5px">
  <li style="padding-left:16px;position:relative"><span style="position:absolute;left:0;color:var(--ink-muted);font-weight:700">·</span><strong>Onsen · Hotel Kajikaso</strong> — 2 baños termales públicos en plantas 2 y 6. Agua de manantial natural directa del subsuelo por 9 tuberías. El rotenburo (baño exterior) con el río Hayakawa al fondo y las montañas de Hakone es la experiencia definitiva.</li>
  <li style="padding-left:16px;position:relative"><span style="position:absolute;left:0;color:var(--ink-muted);font-weight:700">·</span><strong>Cena Kaiseki</strong> — Menú de degustación japonés de temporada que cambia cada mes. Pequeños platos elaborados con los mejores ingredientes de la estación. La experiencia gastronómica más auténtica del viaje.</li>
  <li style="padding-left:16px;position:relative"><span style="position:absolute;left:0;color:var(--ink-muted);font-weight:700">·</span>Reglas del onsen: no tatuajes visibles (preguntar al hotel), toalla pequeña doblada sobre la cabeza (no en el agua), ducharse antes de entrar a la piscina.</li>
</ul>
        `,
        tags: [],
      },
    ],
    food: [],
  },
  {
    id: 'kyoto',
    country: 'Japón',
    stage: '3ª etapa',
    name: 'Kioto',
    subtitle: '京都',
    dates: '27 – 31 julio · 4 noches · Royal Park Hotel Kyoto Sanjo',
    alerts: [
      {
        type: 'blue',
        text: '<strong>Del tren al hotel:</strong> Desde la estación de Kioto, toma el autobús línea 5 dirección Iwakura y baja en Sanjo-Keihan (~20 min, 230¥). O taxi directo ~8 min (~800¥). El hotel está a 2 min a pie de la parada Sanjo-Keihan.',
      },
    ],
    days: [
      {
        label: '27 jul',
        title: 'Hakone → Kioto · Llegada',
        mapsUrl: 'https://www.google.com/maps/search/?api=1&query=Pontocho+Nakagyo-ku+Kyoto+Japan',
        desc: `
<p style="margin-bottom:10px">El Royal Park Hotel Kyoto Sanjo está en una ubicación inmejorable: a <strong>5 min a pie</strong> de las estaciones de metro Kyoto Shiyakusho-mae y Sanjo Keihan, y a 5 min a pie de Pontocho. El equipaje se puede dejar en el hotel al llegar antes del check-in (15:00h).</p>

<p style="font-size:11px;font-weight:700;letter-spacing:.1em;text-transform:uppercase;color:var(--ink-4);margin-bottom:6px">🚂 Ruta óptima — Salida ~9:00h</p>
<ul style="list-style:none;display:flex;flex-direction:column;gap:5px;margin-bottom:14px">
  <li style="padding-left:16px;position:relative"><span style="position:absolute;left:0;color:var(--ink-muted);font-weight:700">·</span><strong>Hotel Kajikaso → Hakone-Yumoto</strong> — 5 min a pie.</li>
  <li style="padding-left:16px;position:relative"><span style="position:absolute;left:0;color:var(--ink-muted);font-weight:700">·</span><strong>Hakone-Yumoto → Odawara</strong> — Hakone Tozan (~15 min, ~300¥). Cubierto por el Hakone Free Pass si aún es válido.</li>
  <li style="padding-left:16px;position:relative"><span style="position:absolute;left:0;color:var(--ink-muted);font-weight:700">·</span><strong>Odawara → Kyoto Station</strong> — Shinkansen <strong>Hikari</strong> directo (~1h 10 min). El Nozomi NO para en Odawara — el Hikari es la única opción directa con JR Pass. ~2 Hikari por hora. <span style="background:var(--blue-bg);color:var(--blue-text);border:1px solid #BFDBFE;border-radius:99px;font-size:10px;font-weight:600;padding:1px 8px">JR Pass ✓</span></li>
  <li style="padding-left:16px;position:relative"><span style="position:absolute;left:0;color:var(--ink-muted);font-weight:700">·</span><strong>Kyoto Station → Hotel</strong> — Bus línea 17 desde Kyoto Station Karasumaguchi hasta Kawaramachi Sanjo (~13 min, ~230¥). O metro Karasuma hasta Karasuma-Oike (~5 min) + 8 min a pie.</li>
  <li style="padding-left:16px;position:relative"><span style="position:absolute;left:0;color:var(--ink-muted);font-weight:700">·</span>⏱ <strong>Tiempo total puerta a puerta: ~1h 45 min.</strong> Llegada a Kioto ~11:00–11:15h.</li>
  <li style="padding-left:16px;position:relative"><span style="position:absolute;left:0;color:var(--ink-muted);font-weight:700">·</span>El 27 es domingo — los Hikari van llenos. <strong>Reserva plaza</strong> en los mostradores de Odawara o por la app JR antes de salir. <span style="background:var(--amber-bg);color:var(--amber-text);border:1px solid #FDE68A;border-radius:99px;font-size:10px;font-weight:600;padding:1px 8px">⚠ Reservar plaza</span></li>
</ul>

<p style="font-size:11px;font-weight:700;letter-spacing:.1em;text-transform:uppercase;color:var(--ink-4);margin-bottom:6px">🌙 Tarde — Pontocho & Río Kamo</p>
<ul style="list-style:none;display:flex;flex-direction:column;gap:5px;margin-bottom:14px">
  <li style="padding-left:16px;position:relative"><span style="position:absolute;left:0;color:var(--ink-muted);font-weight:700">·</span>Deja el equipaje en el hotel y baja al <strong>río Kamo</strong> — el paseo junto al río es fresco, tranquilo y muy característico de Kioto. Primera impresión perfecta de la ciudad.</li>
  <li style="padding-left:16px;position:relative"><span style="position:absolute;left:0;color:var(--ink-muted);font-weight:700">·</span><strong>Pontocho</strong> — Calejón de 500 metros paralelo al río, de Sanjo a Shijo. Casas de madera tradicionales, restaurantes kaiseki, izakayas y bares. A 5 min a pie del hotel — cruzas el puente de Sanjo y ya lo ves.</li>
  <li style="padding-left:16px;position:relative"><span style="position:absolute;left:0;color:var(--ink-muted);font-weight:700">·</span><strong>Kiyamachi-dori</strong> — La calle paralela a Pontocho, más informal y animada. Buena para tomar algo antes de cenar.</li>
</ul>

<p style="font-size:11px;font-weight:700;letter-spacing:.1em;text-transform:uppercase;color:var(--ink-4);margin-bottom:6px">🍽 Cena — Kawayuka sobre el río</p>
<ul style="list-style:none;display:flex;flex-direction:column;gap:5px">
  <li style="padding-left:16px;position:relative"><span style="position:absolute;left:0;color:var(--ink-muted);font-weight:700">·</span>Julio es el mejor momento del año para las <strong>kawayuka</strong> — terrazas sobre el río Kamogawa en estructuras de pilares, únicas en el mundo. La brisa del río y los farolillos hacen que cenar aquí sea una experiencia inolvidable.</li>
  <li style="padding-left:16px;position:relative"><span style="position:absolute;left:0;color:var(--ink-muted);font-weight:700">·</span>Los restaurantes abren a partir de las 17:00h. En verano las kawayuka se agotan — pide al hotel que te ayude a reservar mesa, o házlo online antes del viaje. <span style="background:var(--red-bg);color:var(--red-text);border:1px solid #FECDD3;border-radius:99px;font-size:10px;font-weight:600;padding:1px 8px">⚠ Reservar con antelación</span></li>
  <li style="padding-left:16px;position:relative"><span style="position:absolute;left:0;color:var(--ink-muted);font-weight:700">·</span>Si no consigues kawayuka, Pontocho tiene excelentes opciones sin terraza: yakitori, kaiseki asequible y obanzai (cocina casera kyotense).</li>
</ul>
        `,
        tags: [{ type: 'info', text: 'Llegada ~11h' }],
      },
      {
        label: '28 jul',
        title: 'Higashiyama & Gion',
        mapsUrl: 'https://www.google.com/maps/search/?api=1&query=Kiyomizudera+Higashiyama+Kyoto+Japan',
        desc: `
<p style="margin-bottom:10px">Plan perfecto para un día: Higashiyama <strong>a primera hora</strong> cuando está vacío, bajando desde Kiyomizudera por Sannenzaka y Ninenzaka hacia Gion. Al atardecer, Hanamikoji se transforma y las probabilidades de ver geiko y maiko se disparan.</p>

<p style="font-size:11px;font-weight:700;letter-spacing:.1em;text-transform:uppercase;color:var(--ink-4);margin-bottom:6px">⛩️ Kiyomizudera — Muy temprano</p>
<ul style="list-style:none;display:flex;flex-direction:column;gap:5px;margin-bottom:14px">
  <li style="padding-left:16px;position:relative"><span style="position:absolute;left:0;color:var(--ink-muted);font-weight:700">·</span>Abre a las <strong>6:00h</strong> (hasta las 18:30h en julio). Llega entre las 6:00 y 7:30h para tenerlo prácticamente solo — a partir de las 9h la masificación es brutal. Entrada: <strong>500¥</strong>. <span style="background:var(--amber-bg);color:var(--amber-text);border:1px solid #FDE68A;border-radius:99px;font-size:10px;font-weight:600;padding:1px 8px">Madrugar</span></li>
  <li style="padding-left:16px;position:relative"><span style="position:absolute;left:0;color:var(--ink-muted);font-weight:700">·</span>La <strong>plataforma volada</strong> del salón principal — construida sin un solo clavo sobre columnas de 13 metros — ofrece vistas panorámicas sobre los tejados de Kioto. Espectacular al amanecer.</li>
  <li style="padding-left:16px;position:relative"><span style="position:absolute;left:0;color:var(--ink-muted);font-weight:700">·</span><strong>Cascada Otowa</strong> — Tres canales de agua dentro del templo. Cada uno concede un don: longevidad, éxito en los estudios y suerte en el amor. Solo puedes beber de uno — la leyenda dice que beber de los tres trae mala suerte por codicia.</li>
</ul>

<p style="font-size:11px;font-weight:700;letter-spacing:.1em;text-transform:uppercase;color:var(--ink-4);margin-bottom:6px">🪨 Sannenzaka & Ninenzaka — Mañana</p>
<ul style="list-style:none;display:flex;flex-direction:column;gap:5px;margin-bottom:14px">
  <li style="padding-left:16px;position:relative"><span style="position:absolute;left:0;color:var(--ink-muted);font-weight:700">·</span>Baja desde Kiyomizudera por <strong>Sannenzaka</strong> — calle empedrada en pendiente con casas de madera (machiya) del período Edo. Tiendas de cerámica kiyomizu-ware, teterías y dulces tradicionales.</li>
  <li style="padding-left:16px;position:relative"><span style="position:absolute;left:0;color:var(--ink-muted);font-weight:700">·</span>Continúa por <strong>Ninenzaka</strong> — desde un punto específico aquí se obtiene la vista clásica de la <strong>Pagoda Yasaka de 5 pisos</strong> enmarcada por las fachadas tradicionales. La foto más icónica de Kioto.</li>
  <li style="padding-left:16px;position:relative"><span style="position:absolute;left:0;color:var(--ink-muted);font-weight:700">·</span><strong>Templo Kodai-ji</strong> — Conectado con Ninenzaka, jardín zen con estanque y arquitectura del s. XVII preciosa. Vale la pena la entrada.</li>
  <li style="padding-left:16px;position:relative"><span style="position:absolute;left:0;color:var(--ink-muted);font-weight:700">·</span><strong>Calle Nene-no-Michi</strong> — Calle peatonal tranquila que conecta el Kodai-ji con el santuario Yasaka. Ideal para el paseo de mediodía.</li>
</ul>

<p style="font-size:11px;font-weight:700;letter-spacing:.1em;text-transform:uppercase;color:var(--ink-4);margin-bottom:6px">🏮 Gion — Atardecer & Noche</p>
<ul style="list-style:none;display:flex;flex-direction:column;gap:5px;margin-bottom:14px">
  <li style="padding-left:16px;position:relative"><span style="position:absolute;left:0;color:var(--ink-muted);font-weight:700">·</span><strong>Hanamikoji-dori</strong> — La arteria principal de Gion. Llega entre las <strong>17:30 y 19:00h</strong> — es cuando las luces se encienden, el ambiente es mágico y las probabilidades de ver geiko o maiko son máximas. Parte sur de Shijo-dori, más actividad.</li>
  <li style="padding-left:16px;position:relative"><span style="position:absolute;left:0;color:var(--ink-muted);font-weight:700">·</span><strong>Shimbashi</strong> — Los callejones al este del río, paralelos a Hanamikoji. Más tranquilos y auténticos. Farolillos de papel, sauce llorón sobre el canal y mucho menos turismo que la calle principal.</li>
  <li style="padding-left:16px;position:relative"><span style="position:absolute;left:0;color:var(--ink-muted);font-weight:700">·</span><strong>Santuario Yasaka</strong> — Al final de Shijo-dori, impresionante al atardecer con los farolillos encendidos. Entrada libre.</li>
  <li style="padding-left:16px;position:relative"><span style="position:absolute;left:0;color:var(--ink-muted);font-weight:700">·</span><strong>Templo Kennin-ji</strong> — El templo zen más antiguo de Kioto, en pleno Gion. Su famoso biombo de dragones y jardín de arena son un respiro espiritual entre tanto turismo.</li>
</ul>

<p style="font-size:11px;font-weight:700;letter-spacing:.1em;text-transform:uppercase;color:var(--ink-4);margin-bottom:6px">💡 Tips geiko & maiko</p>
<ul style="list-style:none;display:flex;flex-direction:column;gap:5px;margin-bottom:14px">
  <li style="padding-left:16px;position:relative"><span style="position:absolute;left:0;color:var(--ink-muted);font-weight:700">·</span>Las <strong>geiko</strong> (nombre local de las geishas) y sus aprendices las <strong>maiko</strong> se desplazan hacia sus compromisos entre las 18:00 y las 20:00h. Observa desde la distancia — nunca las detengas, bloquees el paso ni les hagas fotos sin permiso.</li>
  <li style="padding-left:16px;position:relative"><span style="position:absolute;left:0;color:var(--ink-muted);font-weight:700">·</span>Ojo: muchas mujeres de kimono que verás son <strong>turistas que han alquilado uno</strong>. El maquillaje blanco completo es el único detalle que distingue a las profesionales auténticas.</li>
  <li style="padding-left:16px;position:relative"><span style="position:absolute;left:0;color:var(--ink-muted);font-weight:700">·</span>Alternativa garantizada: <strong>Gion Corner</strong> (al final de Hanamikoji) — espectáculos cortos de artes tradicionales con maiko reales: ceremonia del té, ikebana, teatro bunraku y danza kyomai. Reserva online. <span style="background:var(--green-bg);color:var(--green-text);border:1px solid #BBF7D0;border-radius:99px;font-size:10px;font-weight:600;padding:1px 8px">Garantizado</span></li>
</ul>

<p style="font-size:11px;font-weight:700;letter-spacing:.1em;text-transform:uppercase;color:var(--ink-4);margin-bottom:6px">🍽 Cena en Gion</p>
<ul style="list-style:none;display:flex;flex-direction:column;gap:5px">
  <li style="padding-left:16px;position:relative"><span style="position:absolute;left:0;color:var(--ink-muted);font-weight:700">·</span>Hanamikoji está llena de excelentes restaurantes. Busca <strong>obanzai</strong> (cocina casera kyotense en pequeños platos) o <strong>kaiseki asequible</strong> — una experiencia culinaria auténtica en el barrio más elegante de Kioto.</li>
  <li style="padding-left:16px;position:relative"><span style="position:absolute;left:0;color:var(--ink-muted);font-weight:700">·</span>Para un ambiente más informal, cruza al lado del río y cena en <strong>Kiyamachi-dori</strong> con las izakayas junto al canal.</li>
</ul>

<hr style="border:none;border-top:1px solid var(--border);margin:18px 0" />
<p style="font-size:11px;font-weight:700;letter-spacing:.1em;text-transform:uppercase;color:var(--ink-4);margin-bottom:12px">💡 Tips y recomendaciones — Kioto</p>

<p style="margin-bottom:6px"><span style="background:var(--green-bg);color:var(--green-text);border:1px solid #BBF7D0;border-radius:99px;font-size:10px;font-weight:600;padding:1px 8px">restaurante</span></p>
<ul style="list-style:none;display:flex;flex-direction:column;gap:5px;margin-bottom:14px">
  <li style="padding-left:16px;position:relative"><span style="position:absolute;left:0;color:var(--ink-muted);font-weight:700">·</span><strong>Sukemasa</strong> — Mejores gyozas de Kioto</li>
  <li style="padding-left:16px;position:relative"><span style="position:absolute;left:0;color:var(--ink-muted);font-weight:700">·</span><strong>Tonkatsu Maisen</strong> — Tonkatsu (chuleta de cerdo empanada), muy bien valorado</li>
</ul>

<p style="margin-bottom:6px"><span style="background:var(--blue-bg);color:var(--blue-text);border:1px solid #BFDBFE;border-radius:99px;font-size:10px;font-weight:600;padding:1px 8px">shopping</span></p>
<ul style="list-style:none;display:flex;flex-direction:column;gap:5px">
  <li style="padding-left:16px;position:relative"><span style="position:absolute;left:0;color:var(--ink-muted);font-weight:700">·</span><strong>Veramore di nucleo Kyoto Honten</strong> — Palillos personalizados grabados al momento</li>
  <li style="padding-left:16px;position:relative"><span style="position:absolute;left:0;color:var(--ink-muted);font-weight:700">·</span><strong>Urban Research</strong> — Segunda mano curada, buena selección de ropa</li>
  <li style="padding-left:16px;position:relative"><span style="position:absolute;left:0;color:var(--ink-muted);font-weight:700">·</span><strong>Japan Blue Jeans</strong> — Denim japonés selecto de segunda mano</li>
  <li style="padding-left:16px;position:relative"><span style="position:absolute;left:0;color:var(--ink-muted);font-weight:700">·</span><strong>Kanful</strong> — Segunda mano curada, menswear</li>
</ul>
        `,
        tags: [],
      },
      {
        label: '29 jul',
        title: 'Arashiyama & Camino del Filósofo',
        mapsUrl: 'https://www.google.com/maps/search/?api=1&query=Arashiyama+Bamboo+Grove+Kyoto+Japan',
        desc: `
<p style="margin-bottom:10px">Arashiyama a primera hora para ver el bosque de bambú sin masificaciones, luego el Camino del Filósofo por la tarde cuando Arashiyama se llena y Okazaki se vacía. Son los dos paseos a pie más bonitos de Kioto.</p>

<p style="font-size:11px;font-weight:700;letter-spacing:.1em;text-transform:uppercase;color:var(--ink-4);margin-bottom:6px">🚆 Cómo llegar a Arashiyama</p>
<ul style="list-style:none;display:flex;flex-direction:column;gap:5px;margin-bottom:14px">
  <li style="padding-left:16px;position:relative"><span style="position:absolute;left:0;color:var(--ink-muted);font-weight:700">·</span><strong>Kyoto Station → Saga-Arashiyama</strong> en línea JR Sagano (~11 min servicio rápido, ~230¥). <span style="background:var(--blue-bg);color:var(--blue-text);border:1px solid #BFDBFE;border-radius:99px;font-size:10px;font-weight:600;padding:1px 8px">JR Pass ✓</span></li>
  <li style="padding-left:16px;position:relative"><span style="position:absolute;left:0;color:var(--ink-muted);font-weight:700">·</span>Desde el hotel: metro línea Tozai hasta Uzumasa-Tenjingawa + tranvía Randen hasta Arashiyama (~25 min, ~400¥). Más pintoresco pero algo más lento. Evita el autobús — va siempre congestionado.</li>
  <li style="padding-left:16px;position:relative"><span style="position:absolute;left:0;color:var(--ink-muted);font-weight:700">·</span>Desde Saga-Arashiyama, 8 min a pie hasta el puente Togetsukyo y la zona principal. <span style="background:var(--amber-bg);color:var(--amber-text);border:1px solid #FDE68A;border-radius:99px;font-size:10px;font-weight:600;padding:1px 8px">Llegar antes de las 8h</span></li>
</ul>

<p style="font-size:11px;font-weight:700;letter-spacing:.1em;text-transform:uppercase;color:var(--ink-4);margin-bottom:6px">🎍 Arashiyama — Mañana</p>
<ul style="list-style:none;display:flex;flex-direction:column;gap:5px;margin-bottom:14px">
  <li style="padding-left:16px;position:relative"><span style="position:absolute;left:0;color:var(--ink-muted);font-weight:700">·</span><strong>Bosque de Bambú de Sagano</strong> — Acceso gratuito, abierto 24h. El sendero principal (‘Take no Michi’) atraviesa la arboleda de este a oeste. Ve hacia el extremo final del sendero — allí hay menos gente. Apunta la cámara hacia arriba para capturar el bambú disparando hacia el cielo y evitar multitudes en el plano. El sonido del viento entre los tallos fue declarado uno de los ‘100 paisajes sonoros’ de Japón.</li>
  <li style="padding-left:16px;position:relative"><span style="position:absolute;left:0;color:var(--ink-muted);font-weight:700">·</span><strong>Templo Tenryuji</strong> — Patrimonio de la Humanidad y uno de los cinco grandes templos zen de Kioto. Entrada ~800¥. Su jardín Sogenchi, con estanque y vistas a las montañas de Arashiyama de fondo (‘paisaje prestado’), es sublimemente hermoso. La puerta norte conecta directamente con el bosque de bambú.</li>
  <li style="padding-left:16px;position:relative"><span style="position:absolute;left:0;color:var(--ink-muted);font-weight:700">·</span><strong>Okochi Sanso</strong> — Villa de 30.000 m² del actor de cine silente Denjiro Okochi. Entrada ~1.000¥ (incluye matcha y wagashi). Jardines espectaculares y vistas panorámicas sobre Arashiyama y la ciudad. Muy tranquila, mucho menos visitada que el bosque.</li>
  <li style="padding-left:16px;position:relative"><span style="position:absolute;left:0;color:var(--ink-muted);font-weight:700">·</span><strong>Puente Togetsukyo</strong> — El puente de madera sobre el río Hozu con las montañas al fondo. Precioso al amanecer. A 8 min a pie desde la estación.</li>
  <li style="padding-left:16px;position:relative"><span style="position:absolute;left:0;color:var(--ink-muted);font-weight:700">·</span><strong>Parque de los Monos de Iwatayama</strong> (opcional) — ~200 macacos japoneses libres. Curioso: ellos están sueltos y tú en una jaula cuando les das de comer. Subida pronunciada, ~30 min. Entrada 550¥.</li>
</ul>

<p style="font-size:11px;font-weight:700;letter-spacing:.1em;text-transform:uppercase;color:var(--ink-4);margin-bottom:6px">🍱 Comer en Arashiyama</p>
<ul style="list-style:none;display:flex;flex-direction:column;gap:5px;margin-bottom:14px">
  <li style="padding-left:16px;position:relative"><span style="position:absolute;left:0;color:var(--ink-muted);font-weight:700">·</span>Hay muchos restaurantes y cafés en la calle principal junto al puente. Especialidad local: <strong>yudofu</strong> (tofu en caldo suave) y <strong>matcha</strong> en cualquier forma. Hora tranquila para comer: 11:30h antes de que llegue la oleada de turistas de mediodía.</li>
</ul>

<p style="font-size:11px;font-weight:700;letter-spacing:.1em;text-transform:uppercase;color:var(--ink-4);margin-bottom:6px">🚶 Camino del Filósofo — Tarde</p>
<ul style="list-style:none;display:flex;flex-direction:column;gap:5px">
  <li style="padding-left:16px;position:relative"><span style="position:absolute;left:0;color:var(--ink-muted);font-weight:700">·</span><strong>Tetsugaku-no-michi</strong> — Canal de ~2 km bordeado de cerezos, templos y cafés tranquilos. El filósofo Nishida Kitarō lo recorría a diario meditando. En julio el follaje verde es exuberante y hay mucho menos gente que en primavera.</li>
  <li style="padding-left:16px;position:relative"><span style="position:absolute;left:0;color:var(--ink-muted);font-weight:700">·</span>Empieza en el sur (Nanzen-ji) y camina hacia el norte, o al revés. El recorrido completo a pie son ~45 min sin paradas.</li>
  <li style="padding-left:16px;position:relative"><span style="position:absolute;left:0;color:var(--ink-muted);font-weight:700">·</span><strong>Templo Nanzen-ji</strong> — Al inicio del camino. Complejo zen enorme con un acueducto de ladrillo del s. XIX que parece sacado de Roma. Entrada libre al recinto principal.</li>
  <li style="padding-left:16px;position:relative"><span style="position:absolute;left:0;color:var(--ink-muted);font-weight:700">·</span><strong>Templo Eikan-do (Zenrin-ji)</strong> — A mitad del camino. Famoso por su figura de Buda mirando hacia atrás (‘Mikaeri Amida’). Entrada 600¥.</li>
  <li style="padding-left:16px;position:relative"><span style="position:absolute;left:0;color:var(--ink-muted);font-weight:700">·</span><strong>Templo Ginkaku-ji</strong> — Al final norte del camino, el ‘Pabelón de Plata’. Jardín de arena con el cónico Ko-getsu-dai (montaña de arena que refleja la luna). Entrada 500¥.</li>
  <li style="padding-left:16px;position:relative"><span style="position:absolute;left:0;color:var(--ink-muted);font-weight:700">·</span>Hay cafés encantadores a lo largo del canal — ideal para parar a tomar algo y descansar.</li>
</ul>
        `,
        tags: [],
      },
      {
        label: '30 jul',
        title: 'Fushimi Inari, Kinkaku-ji & Teramachi',
        mapsUrl: 'https://www.google.com/maps/search/?api=1&query=Fushimi+Inari+Shrine+Kyoto+Japan',
        desc: `
<p style="margin-bottom:10px">El día más intenso de Kioto: madrugada mística en Fushimi Inari, mercado de Nishiki al mediodía y el Pabellón Dorado por la tarde. Un día que resume tres caras radicalmente distintas de la ciudad.</p>

<p style="font-size:11px;font-weight:700;letter-spacing:.1em;text-transform:uppercase;color:var(--ink-4);margin-bottom:6px">⛩️ Fushimi Inari — Madrugada</p>
<ul style="list-style:none;display:flex;flex-direction:column;gap:5px;margin-bottom:14px">
  <li style="padding-left:16px;position:relative"><span style="position:absolute;left:0;color:var(--ink-muted);font-weight:700">·</span>Abierto 24h, entrada gratuita. <strong>Llega entre las 5:30 y 6:30h</strong> para tener los primeros túneles de torii prácticamente solo. A partir de las 9h empieza el caos turístico. <span style="background:var(--amber-bg);color:var(--amber-text);border:1px solid #FDE68A;border-radius:99px;font-size:10px;font-weight:600;padding:1px 8px">Madrugar sí o sí</span></li>
  <li style="padding-left:16px;position:relative"><span style="position:absolute;left:0;color:var(--ink-muted);font-weight:700">·</span><strong>Cómo llegar:</strong> JR Nara Line desde Kyoto Station hasta Inari Station (~5 min, ~150¥). <span style="background:var(--blue-bg);color:var(--blue-text);border:1px solid #BFDBFE;border-radius:99px;font-size:10px;font-weight:600;padding:1px 8px">JR Pass ✓</span> La estación queda justo frente a la entrada del santuario.</li>
  <li style="padding-left:16px;position:relative"><span style="position:absolute;left:0;color:var(--ink-muted);font-weight:700">·</span><strong>Senbon Torii</strong> — Los dos pasillos paralelos de torii bermellón más juntos y pequeños. La imagen icónica. El 80% de los turistas se queda aquí y vuelve. Si tienes tiempo y piernas, sube más.</li>
  <li style="padding-left:16px;position:relative"><span style="position:absolute;left:0;color:var(--ink-muted);font-weight:700">·</span><strong>Yotsutsuji</strong> (mirador, ~45 min subiendo) — A mitad de la montaña. Vistas panorámicas sobre el sur de Kioto. La gente desaparece mágicamente a partir de aquí. Hay banco, máquinas de refrescos y helados. La mayoría de viajeros llega hasta aquí y vuelve (1h30 ida y vuelta).</li>
  <li style="padding-left:16px;position:relative"><span style="position:absolute;left:0;color:var(--ink-muted);font-weight:700">·</span><strong>Cima del Monte Inari</strong> (opcional, ~2-3h ruta circular completa) — Para los más aventureros. No hay una gran vista en la cima, pero el bosque se vuelve completamente silencioso y contemplativo. Tramos superiores con torii igualmente impresionantes y sin nadie.</li>
  <li style="padding-left:16px;position:relative"><span style="position:absolute;left:0;color:var(--ink-muted);font-weight:700">·</span>Fushimi Inari tiene su <strong>propio bosque de bambú</strong> — menos conocido que el de Arashiyama. Gira a la derecha después del Senbon Torii y sigue el sendero ~300 metros. Tranquilo y sin vallas.</li>
  <li style="padding-left:16px;position:relative"><span style="position:absolute;left:0;color:var(--ink-muted);font-weight:700">·</span>Fíjate en las estatuas de <strong>zorros kitsune</strong> por todo el recinto — son los mensajeros del dios Inari. Muchos llevan una llave en la boca (llave de los graneros de arroz) o una joya (riqueza).</li>
  <li style="padding-left:16px;position:relative"><span style="position:absolute;left:0;color:var(--ink-muted);font-weight:700">·</span>Lleva agua y calzado cómodo — son más de 12.000 escalones de piedra irregulares si subes a la cima.</li>
</ul>

<p style="font-size:11px;font-weight:700;letter-spacing:.1em;text-transform:uppercase;color:var(--ink-4);margin-bottom:6px">🍱 Mercado Nishiki — Mediodía</p>
<ul style="list-style:none;display:flex;flex-direction:column;gap:5px;margin-bottom:14px">
  <li style="padding-left:16px;position:relative"><span style="position:absolute;left:0;color:var(--ink-muted);font-weight:700">·</span><strong>"La cocina de Kioto"</strong> — Mercado cubierto de 400 metros con más de 120 puestos. Horario: 9:00–18:00. Desde Fushimi Inari: JR Nara Line de vuelta a Kyoto Station, luego metro Karasuma hasta Shijo (~5 min a pie).</li>
  <li style="padding-left:16px;position:relative"><span style="position:absolute;left:0;color:var(--ink-muted);font-weight:700">·</span>Imprescindibles: <strong>tamagoyaki</strong> (tortilla dulce en palito), <strong>yuba</strong> (piel de leche de soja, especialidad de Kioto), <strong>tsukemono</strong> (encurtidos de verduras de temporada), <strong>dango</strong> y <strong>soja suave helada</strong>. Come paseando.</li>
  <li style="padding-left:16px;position:relative"><span style="position:absolute;left:0;color:var(--ink-muted);font-weight:700">·</span>Al final del mercado desembocas en <strong>Teramachi-dori</strong> — calle comercial cubierta con tiendas de recuerdos, artesanía y ropa. Su paralela <strong>Shinkyogoku</strong> tiene más tiendas de artesanía. Guarda tiempo para la noche.</li>
</ul>

<p style="font-size:11px;font-weight:700;letter-spacing:.1em;text-transform:uppercase;color:var(--ink-4);margin-bottom:6px">🌟 Kinkaku-ji & Ryoan-ji — Tarde</p>
<ul style="list-style:none;display:flex;flex-direction:column;gap:5px;margin-bottom:14px">
  <li style="padding-left:16px;position:relative"><span style="position:absolute;left:0;color:var(--ink-muted);font-weight:700">·</span><strong>Kinkaku-ji (Pabellón Dorado)</strong> — Abre 9:00–17:00. Entrada 500¥. El edificio con sus dos pisos superiores cubiertos de pan de oro puro reflejado en el estanque Kyoko-chi es la imagen más reconocida de Japón. Hay un circuito de un solo sentido — llega temprano para hacer la foto del reflejo sin colas. <strong>Tip:</strong> el ticket de entrada es también un omamori (amuleto de protección) — guárdalo.</li>
  <li style="padding-left:16px;position:relative"><span style="position:absolute;left:0;color:var(--ink-muted);font-weight:700">·</span><strong>Cómo llegar desde Nishiki:</strong> Autobús líneas 101 o 205 desde parada Shijo Karasuma hasta Kinkakuji-michi (~40 min, 230¥). O taxi ~20 min.</li>
  <li style="padding-left:16px;position:relative"><span style="position:absolute;left:0;color:var(--ink-muted);font-weight:700">·</span><strong>Ryoan-ji</strong> (a 10 min a pie del Kinkaku-ji) — El jardín de piedras zen más famoso del mundo. 15 rocas colocadas de forma que nunca puedes verlas todas a la vez desde ningún ángulo. Patrimonio UNESCO. Entrada 600¥. Muy meditativo si lo visitas con tranquilidad.</li>
</ul>

<p style="font-size:11px;font-weight:700;letter-spacing:.1em;text-transform:uppercase;color:var(--ink-4);margin-bottom:6px">🛍 Teramachi & Shinkyogoku — Noche</p>
<ul style="list-style:none;display:flex;flex-direction:column;gap:5px">
  <li style="padding-left:16px;position:relative"><span style="position:absolute;left:0;color:var(--ink-muted);font-weight:700">·</span>Las galerías comerciales cubiertas de Teramachi y Shinkyogoku animan de noche con tiendas de artesanía, recuerdos, ropa y restaurantes. Muy cerca del hotel — ideal para el último paseo del día.</li>
  <li style="padding-left:16px;position:relative"><span style="position:absolute;left:0;color:var(--ink-muted);font-weight:700">·</span>Para cenar, Teramachi desemboca directamente en <strong>Pontocho</strong> — a 5 min a pie del hotel para cerrar el día junto al río.</li>
</ul>
        `,
        tags: [],
      },
    ],
    extras: [
      {
        label: 'Extra',
        title: 'Nijo Castle',
        mapsUrl: 'https://www.google.com/maps/search/?api=1&query=Nijo+Castle+Kyoto+Japan',
        desc: 'Castillo del shogunato Tokugawa con los famosos suelos "nightingale" (crujen para detectar intrusos). La arquitectura político-militar más importante de Kioto. A 15 min a pie del hotel.',
        tags: [{ type: 'tip', text: 'Muy cerca del hotel' }],
      },
      {
        label: 'Extra',
        title: 'Fushimi Sake District',
        mapsUrl: 'https://www.google.com/maps/search/?api=1&query=Fushimi+Sake+District+Gekkeikan+Kyoto',
        desc: 'En el mismo barrio de Fushimi Inari, las bodegas centenarias de Gekkeikan. Visita y cata de sake fresco directamente del tonel. Combinar con la visita al santuario.',
        tags: [],
      },
    ],
    food: [
      { name: 'Kawayuka — terrazas sobre el Kamo ★', desc: 'Solo de mayo a septiembre. Pontocho y Kibune tienen las mejores terrazas. Reserva con semanas de antelación en julio, especialmente fines de semana.' },
      { name: 'Nishiki Market', desc: '"La cocina de Kioto". Yudofu, pickles de Kyoto, dango, pulpo en palito. Para comer de pie paseando por el mercado cubierto.' },
      { name: 'Obanzai Ryori', desc: 'Cocina casera kyotense: pequeños platos de verduras, tofu y pescado de temporada. Experiencia auténtica y económica.' },
      { name: 'Matcha en Uji', desc: 'Excursión ~30 min en tren. Uji es el origen del mejor matcha del mundo. Matcha ceremonial y pastelería wagashi en tazas tradicionales.' },
    ],
  },
  {
    id: 'hiroshima',
    country: 'Japón',
    stage: '4ª etapa',
    name: 'Hiroshima',
    subtitle: '広島',
    dates: '31 julio – 1 agosto · 1 noche · The Knot Hiroshima',
    alerts: [
      {
        type: 'blue',
        text: '<strong>Kioto → Hiroshima:</strong> Shinkansen Nozomi (~1h) o Hikari (~1h 20 min). Con JR Pass no puedes usar el Nozomi — usa el Hikari. Hiroshima está a solo 340 km de Kioto.',
      },
    ],
    days: [
      {
        label: '31 jul',
        title: 'Kioto → Hiroshima · Llegada',
        mapsUrl: 'https://www.google.com/maps/search/?api=1&query=Hiroshima+Peace+Memorial+Park+Japan',
        desc: `
<p style="margin-bottom:10px">Los dos hoteles tienen una posición excelente: el Royal Park está a 20 min de Kyoto Station y THE KNOT está a <strong>7 min a pie del Parque de la Paz</strong>. Con salida a las 9h llegas a Hiroshima sobre las 11:15h — con toda la tarde para la visita más importante del viaje.</p>

<p style="font-size:11px;font-weight:700;letter-spacing:.1em;text-transform:uppercase;color:var(--ink-4);margin-bottom:6px">🚂 Ruta óptima — Salida 9:00h</p>
<ul style="list-style:none;display:flex;flex-direction:column;gap:5px;margin-bottom:14px">
  <li style="padding-left:16px;position:relative"><span style="position:absolute;left:0;color:var(--ink-muted);font-weight:700">·</span><strong>Hotel → Karasuma Oike</strong> — 5 min a pie hasta la estación de metro.</li>
  <li style="padding-left:16px;position:relative"><span style="position:absolute;left:0;color:var(--ink-muted);font-weight:700">·</span><strong>Metro línea Karasuma → Kyoto Station</strong> — ~5 min. Total hotel-estación: ~20 min.</li>
  <li style="padding-left:16px;position:relative"><span style="position:absolute;left:0;color:var(--ink-muted);font-weight:700">·</span><strong>Kyoto Station → Hiroshima</strong> en <strong>Shinkansen Hikari o Sakura</strong> (~1h). Ambos cubiertos por JR Pass. El Nozomi es más rápido pero <em>no está incluido</em> en el JR Pass. <span style="background:var(--blue-bg);color:var(--blue-text);border:1px solid #BFDBFE;border-radius:99px;font-size:10px;font-weight:600;padding:1px 8px">JR Pass ✓ Hikari/Sakura</span></li>
  <li style="padding-left:16px;position:relative"><span style="position:absolute;left:0;color:var(--ink-muted);font-weight:700">·</span><strong>Hiroshima Station → THE KNOT</strong> — Tranvía hasta parada <em>Chuden-Mae</em> (~9 min, ~230¥) + 3 min a pie. O taxi ~1.700¥ directo.</li>
  <li style="padding-left:16px;position:relative"><span style="position:absolute;left:0;color:var(--ink-muted);font-weight:700">·</span>⏱ <strong>Llegada al hotel ~11:15h.</strong> El 31 es viernes — reserva plaza en el Shinkansen con antelación. <span style="background:var(--amber-bg);color:var(--amber-text);border:1px solid #FDE68A;border-radius:99px;font-size:10px;font-weight:600;padding:1px 8px">⚠ Reservar plaza</span></li>
</ul>

<p style="font-size:11px;font-weight:700;letter-spacing:.1em;text-transform:uppercase;color:var(--ink-4);margin-bottom:6px">🏨 THE KNOT Hiroshima</p>
<ul style="list-style:none;display:flex;flex-direction:column;gap:5px;margin-bottom:14px">
  <li style="padding-left:16px;position:relative"><span style="position:absolute;left:0;color:var(--ink-muted);font-weight:700">·</span>El hotel está a <strong>menos de 1 km de la Cúpula</strong> y a 7 min a pie del Parque de la Paz. Literalmente en el corazón de todo.</li>
  <li style="padding-left:16px;position:relative"><span style="position:absolute;left:0;color:var(--ink-muted);font-weight:700">·</span>Destacado: <strong>terraza-bar en la planta 14</strong> con vistas panorámicas sobre la ciudad. Al llegar, deja el equipaje y súbe un momento — orientarse viendo Hiroshima desde arriba antes de bajar al Parque de la Paz tiene mucho sentido.</li>
</ul>

<p style="font-size:11px;font-weight:700;letter-spacing:.1em;text-transform:uppercase;color:var(--ink-4);margin-bottom:6px">☮️ Parque & Museo Memorial de la Paz — Tarde</p>
<ul style="list-style:none;display:flex;flex-direction:column;gap:5px;margin-bottom:14px">
  <li style="padding-left:16px;position:relative"><span style="position:absolute;left:0;color:var(--ink-muted);font-weight:700">·</span>El parque es <strong>gratuito y abierto 24h</strong>. El Museo Memorial abre hasta las <strong>19:00h en julio</strong> — entrada 200¥. Dedica al menos 2–3 horas. Es impactante, necesario y emocionalmente intenso. Llévalo con calma.</li>
  <li style="padding-left:16px;position:relative"><span style="position:absolute;left:0;color:var(--ink-muted);font-weight:700">·</span><strong>Cúpula Genbaku</strong> — El único edificio que sobrevivió al bombardeo. Estructura esquelética de hormigón y acero a orillas del río, declarada Patrimonio de la UNESCO en 1996. Visítala al atardecer para fotografiar su silueta contra el cielo.</li>
  <li style="padding-left:16px;position:relative"><span style="position:absolute;left:0;color:var(--ink-muted);font-weight:700">·</span><strong>Arco del Cenotafio</strong> — Cofre con los nombres de más de 140.000 víctimas. Su diseño se alinea con la Llama de la Paz y la Cúpula, creando un eje visual simbólico a través del parque.</li>
  <li style="padding-left:16px;position:relative"><span style="position:absolute;left:0;color:var(--ink-muted);font-weight:700">·</span><strong>Monumento a los Niños de la Paz</strong> — Inspirado en Sadako Sasaki, la niña que dobló grullas de papel esperando recuperarse. Miles de grullas de origami de todo el mundo rodean el monumento.</li>
  <li style="padding-left:16px;position:relative"><span style="position:absolute;left:0;color:var(--ink-muted);font-weight:700">·</span>Visita con respeto — es un lugar de duelo y memoria, no un sitio turístico al uso. Guarda silencio junto a los monumentos.</li>
</ul>

<p style="font-size:11px;font-weight:700;letter-spacing:.1em;text-transform:uppercase;color:var(--ink-4);margin-bottom:6px">🍱 Cena — Okonomimura</p>
<ul style="list-style:none;display:flex;flex-direction:column;gap:5px">
  <li style="padding-left:16px;position:relative"><span style="position:absolute;left:0;color:var(--ink-muted);font-weight:700">·</span><strong>Okonomimura</strong> — Edificio de 3 plantas dedicado íntegramente al okonomiyaki estilo Hiroshima: con noodles soba, muy diferente al de Osaka. Cada planta tiene varios puestos — siéntate en la barra y ve cocinar al chef delante de ti. A ~10 min a pie del hotel.</li>
  <li style="padding-left:16px;position:relative"><span style="position:absolute;left:0;color:var(--ink-muted);font-weight:700">·</span>También puedes cenar en el propio <strong>THE KNOT</strong> (restaurante italiano-español en planta baja, muy bien valorado) y guardar el okonomimura para la noche del día siguiente.</li>
</ul>
        `,
        tags: [{ type: 'info', text: 'Llegada ~11h' }],
      },
      {
        label: 'Tarde',
        title: 'Miyajima — Isla Sagrada',
        mapsUrl: 'https://www.google.com/maps/search/?api=1&query=Itsukushima+Shrine+Miyajima+Hiroshima',
        desc: `
<p style="margin-bottom:10px">Miyajima es una de las tres vistas más bellas de Japón desde el siglo XVII. El día 1 de agosto tiene sentido dedicarle el día entero — con Hiroshima ya visto el día anterior, Miyajima se disfruta sin prisas.</p>

<p style="font-size:11px;font-weight:700;letter-spacing:.1em;text-transform:uppercase;color:var(--ink-4);margin-bottom:6px">🚢 Cómo llegar desde Hiroshima</p>
<ul style="list-style:none;display:flex;flex-direction:column;gap:5px;margin-bottom:14px">
  <li style="padding-left:16px;position:relative"><span style="position:absolute;left:0;color:var(--ink-muted);font-weight:700">·</span>Tranvía desde THE KNOT (parada Chuden-Mae) hasta Hiroshima Station, luego <strong>JR San-yo Line hasta Miyajimaguchi</strong> (~25 min). <span style="background:var(--blue-bg);color:var(--blue-text);border:1px solid #BFDBFE;border-radius:99px;font-size:10px;font-weight:600;padding:1px 8px">JR Pass ✓</span></li>
  <li style="padding-left:16px;position:relative"><span style="position:absolute;left:0;color:var(--ink-muted);font-weight:700">·</span>Desde Miyajimaguchi, el <strong>ferry JR Miyajima</strong> cruza en ~10 min. Sale cada 15 min desde las 6h hasta las 23h. Gratuito con JR Pass. <span style="background:var(--blue-bg);color:var(--blue-text);border:1px solid #BFDBFE;border-radius:99px;font-size:10px;font-weight:600;padding:1px 8px">JR Pass ✓</span></li>
  <li style="padding-left:16px;position:relative"><span style="position:absolute;left:0;color:var(--ink-muted);font-weight:700">·</span>⏱ <strong>Tiempo total THE KNOT → Miyajima: ~50 min.</strong> Sale desde el hotel a las 9h, en la isla a las 10h.</li>
</ul>

<p style="font-size:11px;font-weight:700;letter-spacing:.1em;text-transform:uppercase;color:var(--ink-4);margin-bottom:6px">🌊 Torii & Santuario Itsukushima</p>
<ul style="list-style:none;display:flex;flex-direction:column;gap:5px;margin-bottom:14px">
  <li style="padding-left:16px;position:relative"><span style="position:absolute;left:0;color:var(--ink-muted);font-weight:700">·</span>El <strong>O-Torii</strong> mide 16,6 metros y pesa unas 60 toneladas. Se mantiene en pie únicamente por su propio peso, sin anclas. Con marea alta aparece flotando sobre el agua — con marea baja puedes caminar hasta él. Consulta las tablas de mareas antes del viaje para planificar cuándo vas.</li>
  <li style="padding-left:16px;position:relative"><span style="position:absolute;left:0;color:var(--ink-muted);font-weight:700">·</span><strong>Santuario Itsukushima</strong> — Patrimonio de la UNESCO. Construido sobre pilotes sobre el mar, pasillos de madera naranja que se extienden sobre el agua. Abre 6:30–18:00h, entrada 300¥.</li>
  <li style="padding-left:16px;position:relative"><span style="position:absolute;left:0;color:var(--ink-muted);font-weight:700">·</span><strong>Tip mareas:</strong> llegar a mediodía con marea baja para caminar hasta el torii, y quedarse hasta el atardecer cuando sube la marea para la foto flotante. Los ferries funcionan hasta las 23h — no hay prisa.</li>
</ul>

<p style="font-size:11px;font-weight:700;letter-spacing:.1em;text-transform:uppercase;color:var(--ink-4);margin-bottom:6px">🗻 Monte Misen</p>
<ul style="list-style:none;display:flex;flex-direction:column;gap:5px;margin-bottom:14px">
  <li style="padding-left:16px;position:relative"><span style="position:absolute;left:0;color:var(--ink-muted);font-weight:700">·</span><strong>Teleférico</strong> desde la estación Momijidani (15 min a pie del muelle): cabinas pequeñas hasta Kayadani (10 min) + cabinas grandes hasta Shishiiwa (4 min). Desde Shishiiwa, 30 min a pie hasta la cima. Vistas panorámicas del Mar Interior de Seto.</li>
  <li style="padding-left:16px;position:relative"><span style="position:absolute;left:0;color:var(--ink-muted);font-weight:700">·</span>Es el único teleférico del mundo que sobrevuela un Patrimonio de la Humanidad.</li>
  <li style="padding-left:16px;position:relative"><span style="position:absolute;left:0;color:var(--ink-muted);font-weight:700">·</span>Alternativa: subida a pie por la ruta Daisho-in (~3 km, 2h, la menos empinada). Por el camino hay más de 2.000 escalones y cientos de figuras de Buda en piedra.</li>
</ul>

<p style="font-size:11px;font-weight:700;letter-spacing:.1em;text-transform:uppercase;color:var(--ink-4);margin-bottom:6px">⛩️ Templo Daisho-in</p>
<ul style="list-style:none;display:flex;flex-direction:column;gap:5px;margin-bottom:14px">
  <li style="padding-left:16px;position:relative"><span style="position:absolute;left:0;color:var(--ink-muted);font-weight:700">·</span>A los pies del Monte Misen. Fundado en 806 por el monje Kobo Daishi. Lleno de estatuillas budistas, ruedas de oración que puedes girar al subir las escaleras y una espiritualidad palpable. Mucho menos visitado que el santuario principal. Entrada libre.</li>
</ul>

<p style="font-size:11px;font-weight:700;letter-spacing:.1em;text-transform:uppercase;color:var(--ink-4);margin-bottom:6px">🦌 Ciervos & Calle Omotesando</p>
<ul style="list-style:none;display:flex;flex-direction:column;gap:5px;margin-bottom:14px">
  <li style="padding-left:16px;position:relative"><span style="position:absolute;left:0;color:var(--ink-muted);font-weight:700">·</span>~500 ciervos sika salvajes deambulan libres por la isla. Más tranquilos que los de Nara. <strong>Prohibido alimentarlos</strong> — son animales sagrados. Guarda mapas, entradas y snacks en bolsillos cerrados: saben exactamente dónde buscar.</li>
  <li style="padding-left:16px;position:relative"><span style="position:absolute;left:0;color:var(--ink-muted);font-weight:700">·</span><strong>Ostras a la brasa</strong> — La especialidad de Miyajima. Desde ~300¥ por ostra. Puestos por toda Omotesando. Imprescindible.</li>
  <li style="padding-left:16px;position:relative"><span style="position:absolute;left:0;color:var(--ink-muted);font-weight:700">·</span><strong>Momiji Manju</strong> — Pastelito con forma de hoja de arce relleno de anko, matcha, chocolate o crema. El souvenir-snack de la isla. Puestos por toda la calle comercial.</li>
  <li style="padding-left:16px;position:relative"><span style="position:absolute;left:0;color:var(--ink-muted);font-weight:700">·</span>Lleva efectivo — varios puestos de comida no aceptan tarjeta.</li>
</ul>

<p style="font-size:11px;font-weight:700;letter-spacing:.1em;text-transform:uppercase;color:var(--ink-4);margin-bottom:6px">🌅 Atardecer & Vuelta</p>
<ul style="list-style:none;display:flex;flex-direction:column;gap:5px">
  <li style="padding-left:16px;position:relative"><span style="position:absolute;left:0;color:var(--ink-muted);font-weight:700">·</span>Quédate hasta que suba la marea para la foto del torii flotante al atardecer. El último ferry sale ~23h — sin ninguna prisa para volver.</li>
  <li style="padding-left:16px;position:relative"><span style="position:absolute;left:0;color:var(--ink-muted);font-weight:700">·</span>Al volver, cena en <strong>Okonomimura</strong> si no lo hiciste la noche anterior.</li>
</ul>
        `,
        tags: [{ type: 'tip', text: 'Muy recomendado' }],
      },
      {
        label: 'Noche',
        title: 'Okonomiyaki estilo Hiroshima',
        mapsUrl: 'https://www.google.com/maps/search/?api=1&query=Okonomimura+Naka-ku+Hiroshima+Japan',
        desc: 'Okonomiyaki-mura: edificio de 3 plantas dedicado íntegramente al okonomiyaki local (con noodles soba, muy diferente al de Osaka). Una de las mejores experiencias gastronómicas del viaje.',
        tags: [],
      },
    ],
    food: [],
  },
  {
    id: 'osaka',
    country: 'Japón',
    stage: '5ª etapa',
    name: 'Osaka',
    subtitle: '大阪',
    dates: '1 – 4 agosto · 3 noches · voco Osaka Central by IHG',
    alerts: [
      {
        type: 'blue',
        text: '<strong>Hiroshima → Osaka:</strong> Shinkansen Nozomi (~45 min) o Hikari (~1h). Llegada a Shin-Osaka, desde donde el metro te lleva al centro. El hotel en Nishi-ku está a ~10 min en metro.',
      },
    ],
    days: [
      {
        label: '1 ago',
        title: 'Llegada a Osaka — Dotonbori',
        mapsUrl: 'https://www.google.com/maps/search/?api=1&query=Dotonbori+Namba+Osaka+Japan',
        desc: `
<p style="margin-bottom:10px">Llegada desde Hiroshima ~14:15h. El voco Osaka Central está en Kyomachibori, un barrio tranquilo junto al río, a 10 min en metro del centro. Tarde libre para estrenar Osaka con la zona más intensa de la ciudad.</p>

<p style="font-size:11px;font-weight:700;letter-spacing:.1em;text-transform:uppercase;color:var(--ink-4);margin-bottom:6px">🚂 Llegada desde Hiroshima</p>
<ul style="list-style:none;display:flex;flex-direction:column;gap:5px;margin-bottom:14px">
  <li style="padding-left:16px;position:relative"><span style="position:absolute;left:0;color:var(--ink-muted);font-weight:700">·</span>THE KNOT → Hiroshima Station en tranvía (~9 min) → <strong>Shinkansen Hikari o Sakura hasta Shin-Osaka</strong> (~1h 30 min). <span style="background:var(--blue-bg);color:var(--blue-text);border:1px solid #BFDBFE;border-radius:99px;font-size:10px;font-weight:600;padding:1px 8px">JR Pass ✓</span></li>
  <li style="padding-left:16px;position:relative"><span style="position:absolute;left:0;color:var(--ink-muted);font-weight:700">·</span>Shin-Osaka → voco: metro línea Midosuji hasta Yodoyabashi o Hommachi + ~10 min a pie. O taxi directo ~25 min (~2.000¥).</li>
  <li style="padding-left:16px;position:relative"><span style="position:absolute;left:0;color:var(--ink-muted);font-weight:700">·</span>El 1 ago es sábado — mucho movimiento. Reserva plaza Shinkansen con antelación. <span style="background:var(--amber-bg);color:var(--amber-text);border:1px solid #FDE68A;border-radius:99px;font-size:10px;font-weight:600;padding:1px 8px">⚠ Reservar plaza</span></li>
</ul>

<p style="font-size:11px;font-weight:700;letter-spacing:.1em;text-transform:uppercase;color:var(--ink-4);margin-bottom:6px">🌮 Dotonbori — Tarde-Noche</p>
<ul style="list-style:none;display:flex;flex-direction:column;gap:5px;margin-bottom:14px">
  <li style="padding-left:16px;position:relative"><span style="position:absolute;left:0;color:var(--ink-muted);font-weight:700">·</span><strong>El Glico Man y el puente Ebisubashi</strong> — La foto más icónica de Osaka. Los neones se encienden al caer el sol — este es el momento para la foto.</li>
  <li style="padding-left:16px;position:relative"><span style="position:absolute;left:0;color:var(--ink-muted);font-weight:700">·</span><strong>Takoyaki</strong> — Las bolas de pulpo originales de Osaka. Prueba en <strong>Aizuya</strong> (fundado en 1933, dicen que lo inventaron aquí) o <strong>Wanaka</strong>. Cola inevitable en ambos pero merece la pena.</li>
  <li style="padding-left:16px;position:relative"><span style="position:absolute;left:0;color:var(--ink-muted);font-weight:700">·</span><strong>Kushikatsu Daruma</strong> — Brochetas rebozadas y fritas. Regla de oro sagrada e inquebrantable: <em>nunca mojar dos veces en la salsa</em>. Cartel en todos los locales.</li>
  <li style="padding-left:16px;position:relative"><span style="position:absolute;left:0;color:var(--ink-muted);font-weight:700">·</span><strong>Hozenji Yokocho</strong> — Calejón diminuto a espaldas de Dotonbori. Adoquines, izakayas al amor de la piedra musgosa y ambiente de otra época. Muy diferente al caos de Dotonbori a 50 metros.</li>
  <li style="padding-left:16px;position:relative"><span style="position:absolute;left:0;color:var(--ink-muted);font-weight:700">·</span><strong>Okonomiyaki Mizuno</strong> — Estilo Osaka (revuelto, más cremoso que el de Hiroshima). En Dotonbori desde 1945. Espera inevitable.</li>
</ul>

<p style="font-size:11px;font-weight:700;letter-spacing:.1em;text-transform:uppercase;color:var(--ink-4);margin-bottom:6px">🍱 Mercado Kuromon — Mañana del día siguiente</p>
<ul style="list-style:none;display:flex;flex-direction:column;gap:5px">
  <li style="padding-left:16px;position:relative"><span style="position:absolute;left:0;color:var(--ink-muted);font-weight:700">·</span>"La cocina de Osaka". Sashimi, cangrejo, wagyu en palito y ostras frescas. Abre desde las 9h — ideal para desayunar el día 2 antes de seguir explorando.</li>
</ul>
        `,
        tags: [],
      },
      {
        label: '2 ago',
        title: 'Amerikamura & Shinsekai',
        mapsUrl: 'https://www.google.com/maps/search/?api=1&query=Amerikamura+Shinsaibashi+Osaka+Japan',
        desc: `
<p style="margin-bottom:10px">Dos barrios completamente distintos que juntos muestran el mejor contraste de Osaka: la cultura urbana y el vintage de Amerikamura por la mañana, el ambiente retro y popular de Shinsekai por la tarde.</p>

<p style="font-size:11px;font-weight:700;letter-spacing:.1em;text-transform:uppercase;color:var(--ink-4);margin-bottom:6px">👟 Amerikamura — Mañana</p>
<ul style="list-style:none;display:flex;flex-direction:column;gap:5px;margin-bottom:14px">
  <li style="padding-left:16px;position:relative"><span style="position:absolute;left:0;color:var(--ink-muted);font-weight:700">·</span>El barrio más hip de Osaka: moda urbana, streetwear japonés, tiendas de segunda mano vintage, skaters y arte callejero. El equivalente osakaño de Harajuku, pero más relajado y local.</li>
  <li style="padding-left:16px;position:relative"><span style="position:absolute;left:0;color:var(--ink-muted);font-weight:700">·</span>La plaza central <strong>Triangle Park</strong> — punto de encuentro con frecuentes eventos, música en directo y exhibiciones improvisadas.</li>
  <li style="padding-left:16px;position:relative"><span style="position:absolute;left:0;color:var(--ink-muted);font-weight:700">·</span>Tiendas de segunda mano como <strong>Namba Hard Rock</strong>, <strong>Big Step</strong> y docenas de selectas de ropa vintage muy asequibles. Buenos precios comparado con Tokio.</li>
  <li style="padding-left:16px;position:relative"><span style="position:absolute;left:0;color:var(--ink-muted);font-weight:700">·</span><strong>American Village Freemarket B.B</strong> — El mercadillo de vintage más icónico de Amerikamura. Ropa americana nueva y de segunda mano, accesorios y piezas únicas. Planta baja del New American Plaza Building (Nishishinsaibashi 1-16-12). Horario: 11:00–22:00h — a 5 min a pie de Shinsaibashi Station.</li>
</ul>

<p style="font-size:11px;font-weight:700;letter-spacing:.1em;text-transform:uppercase;color:var(--ink-4);margin-bottom:6px">🏙 Shinsekai — Tarde</p>
<ul style="list-style:none;display:flex;flex-direction:column;gap:5px;margin-bottom:14px">
  <li style="padding-left:16px;position:relative"><span style="position:absolute;left:0;color:var(--ink-muted);font-weight:700">·</span>Barrio retro de los años 50 en torno a la <strong>Torre Tsutenkaku</strong>. Carteles vintage, restaurantes de kushikatsu en cada esquina, y un ambiente de barrio popular auténtico que no existe en otras ciudades japonesas.</li>
  <li style="padding-left:16px;position:relative"><span style="position:absolute;left:0;color:var(--ink-muted);font-weight:700">·</span><strong>Torre Tsutenkaku</strong> — El símbolo de Shinsekai. Subida al mirador opcional (~1.000¥), pero la experiencia del barrio a su alrededor ya vale el viaje.</li>
  <li style="padding-left:16px;position:relative"><span style="position:absolute;left:0;color:var(--ink-muted);font-weight:700">·</span><strong>Kushikatsu</strong> por segunda vez — en Shinsekai el kushikatsu es aún más barato y más local que en Dotonbori. <strong>Chitose</strong> tiene reputación de ser el más auténtico del barrio.</li>
  <li style="padding-left:16px;position:relative"><span style="position:absolute;left:0;color:var(--ink-muted);font-weight:700">·</span><strong>Parque Tennoji</strong> — Junto a Shinsekai. Tranquilo, con jardines bien cuidados. Buena opción para descansar entre barrios.</li>
</ul>

<p style="font-size:11px;font-weight:700;letter-spacing:.1em;text-transform:uppercase;color:var(--ink-4);margin-bottom:6px">🏨 Castillo de Osaka (opcional)</p>
<ul style="list-style:none;display:flex;flex-direction:column;gap:5px">
  <li style="padding-left:16px;position:relative"><span style="position:absolute;left:0;color:var(--ink-muted);font-weight:700">·</span>Si queda tiempo a primera hora, el Castillo de Osaka vale la visita por los jardines y la perspectiva histórica. Mejor ir a las 9h para evitar colas. Metro línea Tanimachi hasta Tanimachi 4-chome.</li>
</ul>

<hr style="border:none;border-top:1px solid var(--border);margin:18px 0" />
<p style="font-size:11px;font-weight:700;letter-spacing:.1em;text-transform:uppercase;color:var(--ink-4);margin-bottom:12px">💡 Tips y recomendaciones — Osaka</p>

<p style="margin-bottom:6px"><span style="background:var(--green-bg);color:var(--green-text);border:1px solid #BBF7D0;border-radius:99px;font-size:10px;font-weight:600;padding:1px 8px">restaurante</span></p>
<ul style="list-style:none;display:flex;flex-direction:column;gap:5px">
  <li style="padding-left:16px;position:relative"><span style="position:absolute;left:0;color:var(--ink-muted);font-weight:700">·</span><strong>Yakiniku Rikimaru Higashidori, Umeda</strong> — Yakiniku (carne a la parrilla) con carne de Kobe</li>
</ul>
        `,
        tags: [],
      },
      {
        label: '3 ago',
        title: 'Umeda & Omakase Sushi Akagi',
        mapsUrl: 'https://www.google.com/maps/search/?api=1&query=Umeda+Sky+Building+Osaka+Japan',
        desc: `
<p style="margin-bottom:10px">El día más premium del viaje: shopping de lujo en Umeda por la mañana, el mirador más espectacular de Osaka al atardecer y la experiencia gastronómica definitiva por la noche.</p>

<p style="font-size:11px;font-weight:700;letter-spacing:.1em;text-transform:uppercase;color:var(--ink-4);margin-bottom:6px">🏢 Umeda — Mañana</p>
<ul style="list-style:none;display:flex;flex-direction:column;gap:5px;margin-bottom:14px">
  <li style="padding-left:16px;position:relative"><span style="position:absolute;left:0;color:var(--ink-muted);font-weight:700">·</span>Los grandes almacenes <strong>Hankyu</strong> y <strong>Hanshin</strong> de Umeda son los más elegantes de Osaka. Hankyu en particular es una experiencia en sí misma: los sótanos con gastronomía japonesa de alta gama son de los mejores depáchika del país.</li>
  <li style="padding-left:16px;position:relative"><span style="position:absolute;left:0;color:var(--ink-muted);font-weight:700">·</span><strong>Shinsaibashi</strong> (10 min en metro) — La gran galерía comercial cubierta. Mezcla de marcas internacionales, tiendas locales y varias tiendas especializadas en relojes de lujo de segunda mano. Complementa las compras de Ginza Rasin de Tokio.</li>
</ul>

<p style="font-size:11px;font-weight:700;letter-spacing:.1em;text-transform:uppercase;color:var(--ink-4);margin-bottom:6px">🌇 Umeda Sky Building — Atardecer</p>
<ul style="list-style:none;display:flex;flex-direction:column;gap:5px;margin-bottom:14px">
  <li style="padding-left:16px;position:relative"><span style="position:absolute;left:0;color:var(--ink-muted);font-weight:700">·</span>El <strong>Floating Garden Observatory</strong> — mirador de 360° en la azotea de dos torres unidas por una pasarela flotante y una escalera mecánica transparente colgada en el aire. Visualmente impresionante y único en el mundo.</li>
  <li style="padding-left:16px;position:relative"><span style="position:absolute;left:0;color:var(--ink-muted);font-weight:700">·</span>Llega ~1h antes del atardecer para ver la ciudad con luz diurna, el cambio de colores del cielo y luego la ciudad iluminada de noche. La orientación oeste es la mejor para la puesta de sol.</li>
  <li style="padding-left:16px;position:relative"><span style="position:absolute;left:0;color:var(--ink-muted);font-weight:700">·</span>Entrada ~1.500¥. No se puede entrar con comida o bebida exterior en el mirador.</li>
</ul>

<p style="font-size:11px;font-weight:700;letter-spacing:.1em;text-transform:uppercase;color:var(--ink-4);margin-bottom:6px">🍣 Noche — Omakase Sushi Akagi</p>
<ul style="list-style:none;display:flex;flex-direction:column;gap:5px">
  <li style="padding-left:16px;position:relative"><span style="position:absolute;left:0;color:var(--ink-muted);font-weight:700">·</span>La experiencia gastronómica más especial de Osaka. <strong>Sushi Akagi</strong> — omakase donde el chef Akagi decide los pases según el mejor pescado del día. Precio orientativo ~30.000–40.000¥ por persona.</li>
  <li style="padding-left:16px;position:relative"><span style="position:absolute;left:0;color:var(--ink-muted);font-weight:700">·</span>Reserva con <strong>meses de antelación</strong> a través de <strong>Tableall</strong> o <strong>Pocket Concierge</strong>. Es uno de los restaurantes más demandados de Osaka. <span style="background:var(--red-bg);color:var(--red-text);border:1px solid #FECDD3;border-radius:99px;font-size:10px;font-weight:600;padding:1px 8px">⚠ Reserva urgente</span></li>
</ul>
        `,
        tags: [],
      },
      {
        label: '4 ago',
        title: 'Vuelo a Da Nang',
        mapsUrl: 'https://www.google.com/maps/search/?api=1&query=Kansai+International+Airport+KIX+Osaka',
        desc: 'Llega al aeropuerto ~12:00. Transporte: tren Nankai Limited Express "Rapi:t" desde Namba hasta KIX (~35 min, ~1.490¥) o JR Haruka (~1h). Mañana libre para el último konbini o duty free.',
        tags: [{ type: 'warn', text: 'Vuelo 14:30 KIX' }],
      },
    ],
    food: [
      { name: 'Kuromon Ichiba Market', desc: 'El mercado de la cocina de Osaka. Sashimi, cangrejo, wagyu en palito y ostras frescas. Perfecto para el desayuno del día 1.' },
      { name: 'Sushi Akagi — Omakase', desc: 'Reserva online meses antes vía Tableall o Pocket Concierge. Precio ~¥30.000–40.000 por persona. Altamente recomendado.' },
      { name: 'Relojes en Shinsaibashi', desc: 'Varias tiendas especializadas en relojes de lujo de segunda mano en el barrio de Shinsaibashi. Complementa las compras de Tokio.' },
      { name: 'Okonomiyaki Mizuno', desc: 'Estilo Osaka (revuelto, más cremoso que el de Hiroshima). En Dotonbori, institución desde 1945.' },
    ],
  },
  {
    id: 'danang',
    country: 'Vietnam',
    stage: '1ª etapa',
    name: 'Da Nang',
    subtitle: '& Hoi An',
    dates: '4 – 8 agosto · Son Tra Beach Resort & Spa',
    alerts: [],
    days: [
      {
        label: '4–6 ago',
        title: 'Llegada a Da Nang · Relax en el resort',
        mapsUrl: 'https://www.google.com/maps/search/?api=1&query=Son+Tra+Beach+Resort+Spa+Da+Nang+Vietnam',
        desc: `
<p style="margin-bottom:10px">Llegada al aeropuerto de Da Nang a las <strong>19:50h</strong>. Coche privado incluido que lleva directamente al Son Tra Beach Resort & Spa — sin buscar transporte al llegar.</p>

<p style="font-size:11px;font-weight:700;letter-spacing:.1em;text-transform:uppercase;color:var(--ink-4);margin-bottom:6px">🚗 Llegada · 4 agosto · 19:50h</p>
<ul style="list-style:none;display:flex;flex-direction:column;gap:5px;margin-bottom:14px">
  <li style="padding-left:16px;position:relative"><span style="position:absolute;left:0;color:var(--ink-muted);font-weight:700">·</span>Aterrizaje en <strong>Da Nang International Airport (DAD) T1</strong> a las 19:50h. Recogida de equipaje y aduana.</li>
  <li style="padding-left:16px;position:relative"><span style="position:absolute;left:0;color:var(--ink-muted);font-weight:700">·</span><strong>Coche privado incluido</strong> desde el aeropuerto hasta el hotel — ~20 min por la península de Son Tra. Confirma con el resort los datos del conductor antes del viaje.</li>
  <li style="padding-left:16px;position:relative"><span style="position:absolute;left:0;color:var(--ink-muted);font-weight:700">·</span>Llegada al resort ~20:30h. Check-in, primera impresión del Mar de China Meridional de noche y cena en el hotel.</li>
</ul>

<p style="font-size:11px;font-weight:700;letter-spacing:.1em;text-transform:uppercase;color:var(--ink-4);margin-bottom:6px">🏖 Días 5–6 agosto · Relax en el resort</p>
<ul style="list-style:none;display:flex;flex-direction:column;gap:5px">
  <li style="padding-left:16px;position:relative"><span style="position:absolute;left:0;color:var(--ink-muted);font-weight:700">·</span>Piscina, spa y playa de <strong>My Khe</strong> — nombrada una de las mejores playas de Asia. Arena blanca y fina, aguas cálidas en agosto.</li>
  <li style="padding-left:16px;position:relative"><span style="position:absolute;left:0;color:var(--ink-muted);font-weight:700">·</span>El resort organiza actividades: kayak, snorkel y <strong>clases de cocina vietnamita</strong>.</li>
  <li style="padding-left:16px;position:relative"><span style="position:absolute;left:0;color:var(--ink-muted);font-weight:700">·</span>Da Nang tiene una gastronomía propia excelente — prueba el <strong>Mí Quảng</strong> (noodles con cúrcuma y gambas) y las <strong>bánh xèo</strong> (crepes vietnamitas crujientes) en los restaurantes locales cerca del resort.</li>
</ul>
        `,
        tags: [{ type: 'info', text: 'Llegada 19:50h' }],
      },
      {
        label: '7 ago',
        title: 'Hoi An — Ciudad Antigua',
        mapsUrl: 'https://www.google.com/maps/search/?api=1&query=Hoi+An+Ancient+Town+Vietnam',
        desc: `
<p style="margin-bottom:10px">~30 min en taxi desde Da Nang (~200.000 VND). Patrimonio de la Humanidad por la UNESCO desde 1999 — casas coloniales, templos chinos, el río Thu Bon y los farolillos más famosos de Vietnam. Ve por la mañana para evitar las oleadas de turistas que llegan después del mediodía.</p>

<p style="font-size:11px;font-weight:700;letter-spacing:.1em;text-transform:uppercase;color:var(--ink-4);margin-bottom:6px">🏙 Casco Antiguo — Mañana</p>
<ul style="list-style:none;display:flex;flex-direction:column;gap:5px;margin-bottom:14px">
  <li style="padding-left:16px;position:relative"><span style="position:absolute;left:0;color:var(--ink-muted);font-weight:700">·</span><strong>Puente Japonés (Chùa Cầu)</strong> — El icono de Hoi An. Construido en el s. XVII por mercaderes japoneses, con un pequeño templo en su interior. El paseo exterior es gratis — solo gastas entrada si quieres entrar al templo.</li>
  <li style="padding-left:16px;position:relative"><span style="position:absolute;left:0;color:var(--ink-muted);font-weight:700">·</span><strong>Bono turístico ~6€</strong> — Permite visitar 5 atracciones de entre 22 disponibles (casas antiguas, salones de asambleas chinos, museos). Cómpralo en la Oficina de Turismo de Hoi An.</li>
  <li style="padding-left:16px;position:relative"><span style="position:absolute;left:0;color:var(--ink-muted);font-weight:700">·</span><strong>Mercado Central</strong> — Animadísimo por las mañanas. Productos frescos, especias, artesanía local y puestos de comida vietnamita típica.</li>
  <li style="padding-left:16px;position:relative"><span style="position:absolute;left:0;color:var(--ink-muted);font-weight:700">·</span><strong>Salón de Asambleas de Fujian</strong> — El más grande de los 5 salones conservados. Construido en 1690, era el punto de encuentro de los inmigrantes chinos de la provincia de Fujian.</li>
</ul>

<p style="font-size:11px;font-weight:700;letter-spacing:.1em;text-transform:uppercase;color:var(--ink-4);margin-bottom:6px">✂️ Sastrerías — Mediodía</p>
<ul style="list-style:none;display:flex;flex-direction:column;gap:5px;margin-bottom:14px">
  <li style="padding-left:16px;position:relative"><span style="position:absolute;left:0;color:var(--ink-muted);font-weight:700">·</span>Más de 400 sastrerías en el casco histórico. Ropa a medida en tiempo récord, a veces en horas. Mucho más barato que en Europa. <strong>Lleva fotos de referencia</strong> del modelo que quieres.</li>
  <li style="padding-left:16px;position:relative"><span style="position:absolute;left:0;color:var(--ink-muted);font-weight:700">·</span><strong>Yali Couture</strong> y <strong>A Dong Silk</strong> — Las mejor valoradas. Entrega en 24–48h. Precio orientativo 50–150 USD por prenda. También hacen zapatos a medida.</li>
  <li style="padding-left:16px;position:relative"><span style="position:absolute;left:0;color:var(--ink-muted);font-weight:700">·</span>Deja el encargo a mediodía para recogerlo antes de volver — o acuerda envío al hotel si no da tiempo.</li>
</ul>

<p style="font-size:11px;font-weight:700;letter-spacing:.1em;text-transform:uppercase;color:var(--ink-4);margin-bottom:6px">🍱 Gastronomía</p>
<ul style="list-style:none;display:flex;flex-direction:column;gap:5px;margin-bottom:14px">
  <li style="padding-left:16px;position:relative"><span style="position:absolute;left:0;color:var(--ink-muted);font-weight:700">·</span><strong>Cao Lau</strong> — El plato exclusivo de Hoi An: noodles gruesos con cerdo y hierbas frescas. Solo auténtico aquí por el agua de los pozos locales. En puestos del Mercado Central (~1,50–2,50€).</li>
  <li style="padding-left:16px;position:relative"><span style="position:absolute;left:0;color:var(--ink-muted);font-weight:700">·</span><strong>Bánh Mì Phương</strong> — Considerado el mejor bánh mì del mundo (New York Times, Anthony Bourdain). Cola inevitable pero merece cada minuto.</li>
  <li style="padding-left:16px;position:relative"><span style="position:absolute;left:0;color:var(--ink-muted);font-weight:700">·</span><strong>Morning Glory</strong> — Restaurante muy recomendado para una cena sentada con lo mejor de la cocina local.</li>
</ul>

<p style="font-size:11px;font-weight:700;letter-spacing:.1em;text-transform:uppercase;color:var(--ink-4);margin-bottom:6px">🏮 Farolillos & Río — Noche</p>
<ul style="list-style:none;display:flex;flex-direction:column;gap:5px">
  <li style="padding-left:16px;position:relative"><span style="position:absolute;left:0;color:var(--ink-muted);font-weight:700">·</span>Al caer la noche el casco antiguo entero se ilumina con cientos de farolillos de colores. Ambiente completamente diferente al del día.</li>
  <li style="padding-left:16px;position:relative"><span style="position:absolute;left:0;color:var(--ink-muted);font-weight:700">·</span><strong>Paseo en barca por el río Thu Bon</strong> — Las embarcaciones van decoradas con farolillos. Es tradición soltar linternas de papel sobre el agua (~50.000 VND/h, ~2€).</li>
  <li style="padding-left:16px;position:relative"><span style="position:absolute;left:0;color:var(--ink-muted);font-weight:700">·</span><strong>Mercado Nocturno</strong> — Puestos de artesanía y farolillos para llevar (~120.000 VND, ~3€). El souvenir por excelencia de Hoi An.</li>
  <li style="padding-left:16px;position:relative"><span style="position:absolute;left:0;color:var(--ink-muted);font-weight:700">·</span>Terrazas junto al río para cerrar la noche con una cerveza o cóctel viendo pasar las barcas iluminadas.</li>
</ul>
        `,
        tags: [{ type: 'tip', text: 'Patrimonio UNESCO' }],
      },
      {
        label: '8 ago',
        title: 'Mañana libre · Vuelo nocturno a Hanoi',
        mapsUrl: 'https://www.google.com/maps/search/?api=1&query=My+Khe+Beach+Da+Nang+Vietnam',
        desc: `
<p style="margin-bottom:10px">Mañana tranquila en Da Nang antes del vuelo nocturno. Última tarde de resort, cena temprana y aeropuerto.</p>

<p style="font-size:11px;font-weight:700;letter-spacing:.1em;text-transform:uppercase;color:var(--ink-4);margin-bottom:6px">🏖 Mañana — Playa & Resort</p>
<ul style="list-style:none;display:flex;flex-direction:column;gap:5px;margin-bottom:14px">
  <li style="padding-left:16px;position:relative"><span style="position:absolute;left:0;color:var(--ink-muted);font-weight:700">·</span>Última mañana de playa en My Khe o piscina del resort. Check-out y deja el equipaje en consigna.</li>
  <li style="padding-left:16px;position:relative"><span style="position:absolute;left:0;color:var(--ink-muted);font-weight:700">·</span>Cena temprana en Da Nang: <strong>Mí Quảng</strong> (noodles con cúrcuma, gambas y cacahuetes) en el mercado Bac My An.</li>
</ul>

<p style="font-size:11px;font-weight:700;letter-spacing:.1em;text-transform:uppercase;color:var(--ink-4);margin-bottom:6px">✈️ Vuelo a Hanoi — 22:25h</p>
<ul style="list-style:none;display:flex;flex-direction:column;gap:5px">
  <li style="padding-left:16px;position:relative"><span style="position:absolute;left:0;color:var(--ink-muted);font-weight:700">·</span>Aeropuerto Da Nang <strong>T1</strong> — el mismo terminal de llegada. Salida <strong>22:25h</strong>, vuelo doméstico (~1h 20 min).</li>
  <li style="padding-left:16px;position:relative"><span style="position:absolute;left:0;color:var(--ink-muted);font-weight:700">·</span>Llegada <strong>Hanoi Noi Bai T1</strong> a las <strong>23:45h</strong>. Recogida de equipaje y aduana.</li>
  <li style="padding-left:16px;position:relative"><span style="position:absolute;left:0;color:var(--ink-muted);font-weight:700">·</span><strong>Coche privado de The Legend</strong> esperando en llegadas — ~40–50 min hasta el hotel. Check-in cerca de la medianoche. <span style="background:var(--blue-bg);color:var(--blue-text);border:1px solid #BFDBFE;border-radius:99px;font-size:10px;font-weight:600;padding:1px 8px">Transfer incluido</span></li>
  <li style="padding-left:16px;position:relative"><span style="position:absolute;left:0;color:var(--ink-muted);font-weight:700">·</span><strong>⚠ El vuelo de vuelta a Madrid (12 ago) sale desde T2</strong>, edificio separado. Confirma al hacer check-in en el hotel que el transfer de salida te lleve al terminal correcto.</li>
</ul>
        `,
        tags: [{ type: 'warn', text: 'Vuelo 22:25 · DAD→HAN' }],
      },
    ],
    food: [
      { name: 'Farolillos de luna llena', desc: 'Los farolillos se encienden cada noche en la ciudad antigua. La noche de luna llena del 2 de agosto de 2026 es la más especial si podéis adelantar la visita.' },
      { name: 'Sastrería a medida', desc: 'Yali Couture y A Dong Silk son las mejor valoradas. Lleva referencias visuales. Entrega en 24–48h por 50–150 USD por prenda.' },
      { name: 'Cao Lau', desc: 'El plato típico de Hoi An: noodles gruesos con cerdo y hierbas frescas. Solo existe aquí — el agua local es parte de la receta. En el Mercado Central.' },
      { name: 'Banh Mi Phuong', desc: 'Considerado el mejor banh mi del mundo (New York Times, Anthony Bourdain). Cola inevitable pero el sándwich es extraordinario.' },
    ],
  },
  {
    id: 'hanoi',
    country: 'Vietnam',
    stage: '2ª etapa',
    name: 'Hanoi',
    subtitle: 'Hà Nội',
    dates: '8 – 12 agosto · The Legend Hanoi Hotel',
    alerts: [
      {
        type: 'warn',
        text: '<strong>⚠ Ojo con los terminales en Hanoi:</strong> La llegada fue por T1 pero el vuelo de vuelta sale desde T2. Son edificios separados en el aeropuerto Noi Bai. Avisa al hotel para que el transfer de salida te lleve al terminal correcto.',
      },
    ],
    days: [
      {
        label: '8 ago',
        title: 'Llegada a Hanoi',
        mapsUrl: 'https://www.google.com/maps/search/?api=1&query=The+Legend+Hanoi+Hotel+Ngo+Quyen+Hoan+Kiem',
        desc: `
<p style="margin-bottom:10px">Llegada al aeropuerto Noi Bai a las <strong>23:45h</strong>. Coche privado de The Legend esperando en la zona de llegadas de T1.</p>

<p style="font-size:11px;font-weight:700;letter-spacing:.1em;text-transform:uppercase;color:var(--ink-4);margin-bottom:6px">🚗 Llegada · 8 agosto · 23:45h</p>
<ul style="list-style:none;display:flex;flex-direction:column;gap:5px">
  <li style="padding-left:16px;position:relative"><span style="position:absolute;left:0;color:var(--ink-muted);font-weight:700">·</span>Aterrizaje en <strong>Hanoi Noi Bai T1</strong> a las 23:45h. Recogida de equipaje y control de aduana.</li>
  <li style="padding-left:16px;position:relative"><span style="position:absolute;left:0;color:var(--ink-muted);font-weight:700">·</span><strong>Coche privado de The Legend</strong> esperando en llegadas. El hotel gestiona el transfer directamente — confirma los datos del conductor al hacer el check-in online. <span style="background:var(--blue-bg);color:var(--blue-text);border:1px solid #BFDBFE;border-radius:99px;font-size:10px;font-weight:600;padding:1px 8px">Transfer incluido</span></li>
  <li style="padding-left:16px;position:relative"><span style="position:absolute;left:0;color:var(--ink-muted);font-weight:700">·</span>Trayecto aeropuerto → hotel ~40–50 min. Check-in cerca de la medianoche.</li>
  <li style="padding-left:16px;position:relative"><span style="position:absolute;left:0;color:var(--ink-muted);font-weight:700">·</span><strong>⚠ Ojo con los terminales:</strong> esta llegada es por <strong>T1</strong>, pero el vuelo de vuelta a Madrid (12 ago) sale desde <strong>T2</strong> — son edificios separados. Avisa al hotel para que el transfer de salida te lleve al terminal correcto.</li>
</ul>
        `,
        tags: [{ type: 'info', text: '23:45 · transfer incluido' }],
      },
      {
        label: '9 ago',
        title: 'Mausoleo Ho Chi Minh & Old Quarter',
        mapsUrl: 'https://www.google.com/maps/search/?api=1&query=Ho+Chi+Minh+Mausoleum+Ba+Dinh+Hanoi+Vietnam',
        desc: `
<p style="margin-bottom:10px">El día más histórico de Hanoi: mañana institucional en el barrio del Mausoleo y tarde perdiéndose por el laberinto del Old Quarter.</p>

<p style="font-size:11px;font-weight:700;letter-spacing:.1em;text-transform:uppercase;color:var(--ink-4);margin-bottom:6px">🏹 Mausoleo Ho Chi Minh — Mañana temprana</p>
<ul style="list-style:none;display:flex;flex-direction:column;gap:5px;margin-bottom:14px">
  <li style="padding-left:16px;position:relative"><span style="position:absolute;left:0;color:var(--ink-muted);font-weight:700">·</span>Abre a las <strong>7:30h</strong> (solo mañanas, cerrado lunes y viernes). Llegar antes de las 8h para evitar la cola. Lleva ropa respetuosa: hombros y rodillas cubiertos obligatorio. Silencio total en el interior.</li>
  <li style="padding-left:16px;position:relative"><span style="position:absolute;left:0;color:var(--ink-muted);font-weight:700">·</span>El cuerpo embalsamado de Ho Chi Minh reposa en un ataud de cristal iluminado. La cola avanza despacio — es uno de los lugares más sagrados del país para los vietnamitas. Entrada gratuita.</li>
  <li style="padding-left:16px;position:relative"><span style="position:absolute;left:0;color:var(--ink-muted);font-weight:700">·</span><strong>Ba Dinh Square</strong> — La plaza frente al Mausoleo es donde Ho Chi Minh declaró la independencia en 1945. Una de las plazas más importantes del país.</li>
  <li style="padding-left:16px;position:relative"><span style="position:absolute;left:0;color:var(--ink-muted);font-weight:700">·</span><strong>Casa de Ho Chi Minh</strong> (junto al Mausoleo) — La sencilla casa de madera sobre pilotes donde vivió los últimos años. Enorme contraste con el poder que emanó de ella. ~40.000 VND.</li>
  <li style="padding-left:16px;position:relative"><span style="position:absolute;left:0;color:var(--ink-muted);font-weight:700">·</span><strong>Pagoda del Pilar Único (Chua Mot Cot)</strong> — A 2 min a pie del Mausoleo. Templo del siglo XI construido sobre un único pilar de piedra en medio de un estanque de lotos. Una de las imágenes más icónicas de Vietnam.</li>
  <li style="padding-left:16px;position:relative"><span style="position:absolute;left:0;color:var(--ink-muted);font-weight:700">·</span><strong>Templo de la Literatura (Van Mieu)</strong> — A 15 min a pie. Primera universidad de Vietnam (1070). Arquitectura confuciana con jardines, estanques y estélas de piedra con los nombres de los primeros graduados. ~30.000 VND.</li>
</ul>

<p style="font-size:11px;font-weight:700;letter-spacing:.1em;text-transform:uppercase;color:var(--ink-4);margin-bottom:6px">🌊 Lago Hoan Kiem & Old Quarter — Tarde</p>
<ul style="list-style:none;display:flex;flex-direction:column;gap:5px">
  <li style="padding-left:16px;position:relative"><span style="position:absolute;left:0;color:var(--ink-muted);font-weight:700">·</span><strong>Lago Hoan Kiem</strong> — El corazón de Hanoi. El <strong>puente rojo Huc</strong> cruza hasta el <strong>Templo Ngoc Son</strong> en la isla, que se ilumina fotogénicamente al caer la noche. El lago circunda la leyenda de la tortuga sagrada que se llevó la espada del rey Le Loi. Entrada libre.</li>
  <li style="padding-left:16px;position:relative"><span style="position:absolute;left:0;color:var(--ink-muted);font-weight:700">·</span><strong>Old Quarter — las 36 calles gremiales</strong> — El barrio más caoticó y vivo de Vietnam. Cada calle se especializaba históricamente en un oficio: Hang Gai (seda), Hang Bac (plata), Hang Ma (papel). Pérdete sin rumbo fijo — es la mejor manera de descubrirlo.</li>
  <li style="padding-left:16px;position:relative"><span style="position:absolute;left:0;color:var(--ink-muted);font-weight:700">·</span><strong>Calle del Tren (Train Street)</strong> — Una calle residencial estrechísima por cuyo centro pasa un tren dos veces al día. Los vecinos apartan sus sillas y macetas segundos antes de que pase. Única en el mundo.</li>
  <li style="padding-left:16px;position:relative"><span style="position:absolute;left:0;color:var(--ink-muted);font-weight:700">·</span><strong>Café de huevo (Ca Phe Trung)</strong> — Una de las especialidades más únicas de Hanoi: café con yema de huevo batida en crema espumosa. Nació en los años 40 por la escasez de leche. Giang Cafe es el original.</li>
</ul>
        `,
        tags: [],
      },
      {
        label: '10 ago',
        title: 'Mercado Nocturno & Tiendas Fake',
        mapsUrl: 'https://www.google.com/maps/search/?api=1&query=Dong+Xuan+Market+Hoan+Kiem+Hanoi+Vietnam',
        desc: `
<p style="margin-bottom:10px">El día de las compras: mañana en el mercado más grande de Hanoi, tarde explorando las tiendas de imitaciones y noche en el mercado nocturno del Old Quarter.</p>

<p style="font-size:11px;font-weight:700;letter-spacing:.1em;text-transform:uppercase;color:var(--ink-4);margin-bottom:6px">🛒 Mercado Dong Xuan — Mañana</p>
<ul style="list-style:none;display:flex;flex-direction:column;gap:5px;margin-bottom:14px">
  <li style="padding-left:16px;position:relative"><span style="position:absolute;left:0;color:var(--ink-muted);font-weight:700">·</span>El mercado cubierto más grande de Hanoi, en pleno Old Quarter. Construido por los franceses a finales del s. XIX. Ropa, artística local, productos del hogar y comida. Los turistas van más por la experiencia que por las compras.</li>
  <li style="padding-left:16px;position:relative"><span style="position:absolute;left:0;color:var(--ink-muted);font-weight:700">·</span>La planta baja tiene puestos de comida local excelentes para desayunar o almorzar barato. Bun cha, pho y banh mi frescos desde primera hora.</li>
</ul>

<p style="font-size:11px;font-weight:700;letter-spacing:.1em;text-transform:uppercase;color:var(--ink-4);margin-bottom:6px">👟 Tiendas de Imitaciones — Tarde</p>
<ul style="list-style:none;display:flex;flex-direction:column;gap:5px;margin-bottom:14px">
  <li style="padding-left:16px;position:relative"><span style="position:absolute;left:0;color:var(--ink-muted);font-weight:700">·</span>El Old Quarter está lleno de tiendas con imitaciones de <strong>North Face, Patagonia, Nike, Adidas, Supreme</strong> y todas las marcas de lujo imaginables. Calidad variable pero precios mínimos.</li>
  <li style="padding-left:16px;position:relative"><span style="position:absolute;left:0;color:var(--ink-muted);font-weight:700">·</span><strong>Calle Hang Gai</strong> — La calle de la seda. También tiendas de ropa a medida y souvenirs de alta calidad. Más orientada a lacas, sedas y artesanía fina que a imitaciones baratas.</li>
  <li style="padding-left:16px;position:relative"><span style="position:absolute;left:0;color:var(--ink-muted);font-weight:700">·</span><strong>Regla de oro del regateo:</strong> nunca empieces por encima del 40% del precio pedido. Si el vendedor acepta tu primera oferta sin negociar, has ofrecido demasiado. Pasea y compara antes de comprar.</li>
  <li style="padding-left:16px;position:relative"><span style="position:absolute;left:0;color:var(--ink-muted);font-weight:700">·</span>Lleva efectivo en dong vietnamita (VND) — muchas tiendas pequeñas no aceptan tarjeta. Los cajeros del Old Quarter cobran comisión alta; mejor sacar en el hotel o en Techcombank.</li>
</ul>

<p style="font-size:11px;font-weight:700;letter-spacing:.1em;text-transform:uppercase;color:var(--ink-4);margin-bottom:6px">🌌 Mercado Nocturno — Noche</p>
<ul style="list-style:none;display:flex;flex-direction:column;gap:5px">
  <li style="padding-left:16px;position:relative"><span style="position:absolute;left:0;color:var(--ink-muted);font-weight:700">·</span><strong>Hang Dao Night Market</strong> — Abre <strong>viernes, sábado y domingo</strong> desde las 18h en la calle Hang Dao y alrededores del lago Hoan Kiem. Si el día 10 cae en uno de esos días, perfecto. Si no, la zona del lago por la noche siempre tiene ambiente.</li>
  <li style="padding-left:16px;position:relative"><span style="position:absolute;left:0;color:var(--ink-muted);font-weight:700">·</span>Cientos de puestos de ropa, artesanía, recuerdos y comida callejera con el lago iluminado de fondo.</li>
  <li style="padding-left:16px;position:relative"><span style="position:absolute;left:0;color:var(--ink-muted);font-weight:700">·</span><strong>Bia hoi corner</strong> (esquina Luong Van Can / Dinh Liet) — La cerveza artesanal más barata del mundo (~0,25 USD el vaso). Taburetes de plástico en la calle, ambiente local 100%. El cierre perfecto del día.</li>
</ul>
        `,
        tags: [],
      },
      {
        label: '11 ago',
        title: 'Gastronomía, Prisión Hoa Lo & Barrio Francés',
        mapsUrl: 'https://www.google.com/maps/search/?api=1&query=Hoa+Lo+Prison+Museum+Hanoi+Vietnam',
        desc: `
<p style="margin-bottom:10px">Último día completo en Hanoi. Desayuno histórico, prisión colonial por la mañana, barrio francés por la tarde y la mejor cena de Vietnam por la noche.</p>

<p style="font-size:11px;font-weight:700;letter-spacing:.1em;text-transform:uppercase;color:var(--ink-4);margin-bottom:6px">🍜 Desayuno — Pho Gia Truyen</p>
<ul style="list-style:none;display:flex;flex-direction:column;gap:5px;margin-bottom:14px">
  <li style="padding-left:16px;position:relative"><span style="position:absolute;left:0;color:var(--ink-muted);font-weight:700">·</span><strong>Pho Gia Truyen</strong> — El pho de buey más famoso de Hanoi, desde 1955. Abre a las <strong>6:30h</strong>, llega antes o habrá cola. Solo sirven pho — no hay carta. Tazón de caldo perfecto, fideos frescos y carne generosa. Calle Bat Dan 49.</li>
</ul>

<p style="font-size:11px;font-weight:700;letter-spacing:.1em;text-transform:uppercase;color:var(--ink-4);margin-bottom:6px">🔓 Prisión Hoa Lo — Mañana</p>
<ul style="list-style:none;display:flex;flex-direction:column;gap:5px;margin-bottom:14px">
  <li style="padding-left:16px;position:relative"><span style="position:absolute;left:0;color:var(--ink-muted);font-weight:700">·</span>Construida por los franceses en 1896 para presos políticos vietnamitas. Su nombre significa <em>“horno de fuego”</em>. Diseñada para 600 presos, llegó a albergar 2.000 en condiciones deplorables. Durante la guerra de Vietnam fue usada para prisioneros americanos, que la llamaron irónicamente <em>Hanoi Hilton</em>.</li>
  <li style="padding-left:16px;position:relative"><span style="position:absolute;left:0;color:var(--ink-muted);font-weight:700">·</span>El museo conserva celdas originales, grilletes, recreaciones de torturas y testimonios. Duro pero necesario — complemento natural al Parque de la Paz de Hiroshima. Entrada ~30.000 VND.</li>
</ul>

<p style="font-size:11px;font-weight:700;letter-spacing:.1em;text-transform:uppercase;color:var(--ink-4);margin-bottom:6px">🇨🇵 Barrio Francés & Ópera — Tarde</p>
<ul style="list-style:none;display:flex;flex-direction:column;gap:5px;margin-bottom:14px">
  <li style="padding-left:16px;position:relative"><span style="position:absolute;left:0;color:var(--ink-muted);font-weight:700">·</span>Al sur del lago Hoan Kiem, el barrio colonial francés tiene una escala y una elegancia muy diferente al Old Quarter. Bulevares arbolados, villas coloniales y la catedral de San José, una iglesia neogótica que parece trasplantada de París.</li>
  <li style="padding-left:16px;position:relative"><span style="position:absolute;left:0;color:var(--ink-muted);font-weight:700">·</span><strong>Ópera de Hanoi</strong> — Edificio colonial del s. XIX modelado sobre la Ópera Garnier de París. Exterior impresionante. Si coincide alguna actuación, vale la pena entrar.</li>
  <li style="padding-left:16px;position:relative"><span style="position:absolute;left:0;color:var(--ink-muted);font-weight:700">·</span>Cafés con terraza para tomar un último café vietnamita (ca phe sua da — con leche condensada y hielo) antes de la cena.</li>
</ul>

<p style="font-size:11px;font-weight:700;letter-spacing:.1em;text-transform:uppercase;color:var(--ink-4);margin-bottom:6px">🍽 Cena de despedida — Cha Ca La Vong</p>
<ul style="list-style:none;display:flex;flex-direction:column;gap:5px">
  <li style="padding-left:16px;position:relative"><span style="position:absolute;left:0;color:var(--ink-muted);font-weight:700">·</span><strong>Cha Ca La Vong</strong> — Desde 1871. El restaurante más antiguo de Hanoi y uno de los más únicos del mundo: solo sirven un plato. <em>Chả cá</em>: pescado a la brasa marinado con cúrcuma y galanga, servido en sartén chisporroteante con eneldo fresco, cebolleta, cacahuetes y fideos bun. Tú lo preparas en la mesa. Calle Cha Ca 14.</li>
  <li style="padding-left:16px;position:relative"><span style="position:absolute;left:0;color:var(--ink-muted);font-weight:700">·</span>Alternativa para cerrar con buen sabor: <strong>Bun Cha Obama</strong> — el restaurante donde Obama cenó con Anthony Bourdain en 2016. Bun cha (cerdo a la brasa con fideos) a ~5 USD. En el Old Quarter.</li>
</ul>
        `,
        tags: [],
      },
      {
        label: '12 ago',
        title: 'Vuelo de vuelta a Madrid',
        mapsUrl: 'https://www.google.com/maps/search/?api=1&query=Noi+Bai+International+Airport+T2+Hanoi+Vietnam',
        desc: `
<p style="margin-bottom:10px">El vuelo internacional sale a las <strong>19:30h desde T2</strong>. Para vuelos internacionales en Hanoi se recomienda llegar <strong>3 horas antes</strong> — las colas de inmigración y seguridad pueden ser muy largas. El coche privado del hotel sale a las <strong>16:00h</strong> como máximo.</p>

<p style="font-size:11px;font-weight:700;letter-spacing:.1em;text-transform:uppercase;color:var(--ink-4);margin-bottom:6px">🌅 Mañana libre</p>
<ul style="list-style:none;display:flex;flex-direction:column;gap:5px;margin-bottom:14px">
  <li style="padding-left:16px;position:relative"><span style="position:absolute;left:0;color:var(--ink-muted);font-weight:700">·</span>Check-out a la hora acordada con el hotel. Deja el equipaje en consigna y aprovecha la mañana para un último paseo por el lago Hoan Kiem o las calles del Old Quarter.</li>
  <li style="padding-left:16px;position:relative"><span style="position:absolute;left:0;color:var(--ink-muted);font-weight:700">·</span>Último almuerzo vietnamita — un bowl de pho o un banh mi en cualquier puesto del Old Quarter.</li>
</ul>

<p style="font-size:11px;font-weight:700;letter-spacing:.1em;text-transform:uppercase;color:var(--ink-4);margin-bottom:6px">🚗 Al Aeropuerto — Salida 16:00h</p>
<ul style="list-style:none;display:flex;flex-direction:column;gap:5px">
  <li style="padding-left:16px;position:relative"><span style="position:absolute;left:0;color:var(--ink-muted);font-weight:700">·</span><strong>Coche privado del hotel</strong> a las 16:00h. Trayecto ~40–50 min hasta Noi Bai. <span style="background:var(--blue-bg);color:var(--blue-text);border:1px solid #BFDBFE;border-radius:99px;font-size:10px;font-weight:600;padding:1px 8px">Transfer incluido</span></li>
  <li style="padding-left:16px;position:relative"><span style="position:absolute;left:0;color:var(--ink-muted);font-weight:700">·</span><strong>⚠ Terminal T2</strong> — diferente a la llegada (T1). Confirma con el hotel que el conductor te lleve a T2. Las terminales están en edificios separados.</li>
  <li style="padding-left:16px;position:relative"><span style="position:absolute;left:0;color:var(--ink-muted);font-weight:700">·</span>Llegada al aeropuerto ~16:45–17:00h. 3 horas para check-in, seguridad, inmigración y embarque. Las colas de seguridad e inmigración en Noi Bai T2 pueden ser muy largas cuando coinciden varios vuelos internacionales. No ajustar el tiempo. <span style="background:var(--amber-bg);color:var(--amber-text);border:1px solid #FDE68A;border-radius:99px;font-size:10px;font-weight:600;padding:1px 8px">⚠ Llegar 3h antes</span></li>
  <li style="padding-left:16px;position:relative"><span style="position:absolute;left:0;color:var(--ink-muted);font-weight:700">·</span>Vuelo <strong>HAN T2 → MAD</strong> · Salida 19:30h · ~13h de vuelo · Llegada a Madrid el <strong>13 de agosto a las 7:35h</strong>.</li>
</ul>
        `,
        tags: [{ type: 'red', text: 'T2 · 19:30' }],
      },
    ],
    food: [
      { name: 'Pho Gia Truyen', desc: 'El pho más famoso de Hanoi. Cola desde las 6h, abre a las 6:30. Tazones de caldo de buey perfectos, servidos desde 1955.' },
      { name: 'Cha Ca La Vong', desc: 'Desde 1871, solo sirven un plato: chả cá, pescado a la brasa con cúrcuma, eneldo y cacahuetes. Uno de los más únicos del mundo.' },
      { name: 'Bun Cha Obama', desc: 'El restaurante donde Obama cenó con Anthony Bourdain en 2016. Bun cha (cerdo a la brasa con fideos) a 5 USD. En el Old Quarter.' },
      { name: 'Bia hoi (cerveza fresca)', desc: 'La cerveza artesanal más barata del mundo (~0,25 USD). Las esquinas con taburetes de plástico del Old Quarter son el lugar más auténtico para tomarla.' },
    ],
  },
]
