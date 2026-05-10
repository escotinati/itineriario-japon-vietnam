export const trains = [
  {
    date: '22 jul',
    route: 'Narita → Shinjuku / Tokio',
    service: "Narita Express (N'EX)",
    duration: '~1h 30 min',
    price: '~3.070¥ · JR Pass: gratis',
    notes: 'Directo desde T1 y T2. Reserva de asiento incluida en el billete. Primera parada principal: Shinjuku.',
  },
  {
    date: '26 jul',
    route: 'Shinjuku → Hakone-Yumoto',
    service: 'Odakyu Romance Car',
    duration: '~85 min',
    price: '~2.000¥',
    notes: 'Reserva de asiento recomendable en la web de Odakyu. Billetes también en taquillas de Shinjuku.',
  },
  {
    date: '27 jul',
    route: 'Odawara → Kioto',
    service: 'Shinkansen Hikari',
    duration: '~1h 50 min',
    price: '~14.000¥ · JR Pass: gratis',
    notes: 'Tomar primero bus Hakone-Yumoto → Odawara (~30 min). JR Pass cubre el tramo completo desde Odawara.',
  },
  {
    date: '31 jul',
    route: 'Kioto → Hiroshima',
    service: 'Shinkansen Hikari / Sakura',
    duration: '~1h 20 min',
    price: 'JR Pass: gratis',
    notes: 'El JR Pass NO cubre Nozomi ni Mizuho. Usar exclusivamente Hikari o Sakura.',
  },
  {
    date: '31 jul',
    route: 'Hiroshima → Miyajima',
    service: 'JR Sanyo Line + Ferry JR',
    duration: '~30 min tren + 10 min ferry',
    price: 'JR Pass: gratis (incluye ferry)',
    notes: 'Tren hasta Miyajimaguchi, luego ferry JR Miyajima Ferry. Con JR Pass ambos tramos son gratuitos.',
  },
  {
    date: '1 ago',
    route: 'Hiroshima → Osaka (Shin-Osaka)',
    service: 'Shinkansen Hikari',
    duration: '~1h',
    price: 'JR Pass: gratis',
    notes: 'Llegada a Shin-Osaka. Metro Midosuji (roja) hasta Namba o Shinsaibashi en ~15 min.',
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
    tip: 'No hay metro. Grab es la opción más segura y económica: precio fijo antes de subir, sin regateo. Descarga la app antes de salir de España y activa datos de roaming o cómprate una SIM local.',
    lines: [
      'Grab Bike — mototaxi, ~30.000–50.000 VND (1–2€). Perfecto para trayectos cortos en Hanoi.',
      'Grab Car — taxi 4 plazas, ~80.000–150.000 VND (3–6€). Más cómodo para equipaje.',
      'Taxi Mai Linh (verde) — alternativa fiable sin app. Pide siempre taxímetro.',
    ],
  },
]

export const flights = [
  { from: 'MAD T4S', to: 'NRT T2', dep: '15:45', arr: '19:10', date: '21 jul → 22 jul', duration: '~14 horas' },
  { from: 'KIX T1', to: 'DAD', dep: '14:30', arr: '19:50', date: '4 ago', duration: '~4h 20 min' },
  { from: 'DAD T1', to: 'HAN T1', dep: '22:25', arr: '23:45', date: '8 ago', duration: '~1h 20 min' },
  { from: 'HAN T2', to: 'MAD', dep: '19:30', arr: '07:35', date: '12 ago → 13 ago', duration: '~13 horas' },
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
    alerts: [
      {
        type: 'warn',
        text: '<strong>⚠ Cambio recomendado para el día 26:</strong> Los restaurantes omakase son experiencias nocturnas (19–22h). Salir a Hakone ese mismo día después es inviable. Sugerencia: mueve el <strong>omakase al día 25</strong> (noche tras Ginza) y el día 26 haz Shinjuku por la mañana, come pronto y toma el Romance Car a las 13–14h.',
      },
    ],
    days: [
      {
        label: '22 jul',
        title: 'Llegada a Tokio',
        desc: 'Aterrizaje 19:10 en Narita T2. Check-in en el Park Hotel Tokyo. Cena ligera en un konbini cercano (7-Eleven o Lawson) — primera experiencia konbini del viaje: onigiri, tamagoyaki y matcha latte.',
        tags: [],
      },
      {
        label: '23 jul',
        title: 'Shibuya & Harajuku',
        desc: 'Scramble crossing de Shibuya y Shibuya Sky (mirador, reservar con antelación). Harajuku: Takeshita Street para moda excéntrica, luego Omotesando para arquitectura y marcas premium. Merienda: crepes de Harajuku.',
        tags: [],
      },
      {
        label: '24 jul',
        title: 'Asakusa & Akihabara',
        desc: 'Templo Sensō-ji muy temprano (antes de las 8h para evitar masas). Nakamise-dori para papelería tradicional y objetos de recuerdo. Por la tarde: Akihabara para electrónica y cultura geek. Tip relojes: Ginza Rasin (4 plantas de relojes de lujo de segunda mano: Rolex, Omega a precios mejores que en Europa).',
        tags: [],
      },
      {
        label: '25 jul',
        title: 'Ginza & Odaiba + Omakase',
        desc: 'Mañana: Ginza para tiendas icónicas — Itoya para papelería fina (imprescindible), 6 plantas de artículos japoneses únicos. Tarde: Odaiba, TeamLab Borderless (reserva online con antelación). Noche: experiencia omakase en Tokio.',
        tags: [{ type: 'tip', text: 'Recomendado' }],
      },
      {
        label: '26 jul',
        title: 'Shinjuku → Hakone',
        desc: 'Mañana: Shinjuku Gyoen (parque tranquilo), Golden Gai y Omoide Yokocho para fotos. Comida temprana ~11:30h. Tren Odakyu Romance Car desde Shinjuku a las 13–14h (reserva de asiento recomendable). Llegada a Hakone-Yumoto ~15:30h. Taxi al hotel Kajikaso (~10 min, ~800¥) o servicio de recogida del hotel.',
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
        title: 'Hakone Loop (ruta circular)',
        desc: 'El Hakone Free Pass incluye: tren Hakone-Tozan → funicular → teleférico → barco pirata del Lago Ashi → autobús de vuelta. Empieza temprano (8–9h) para evitar colas en el teleférico.',
        tags: [],
      },
      {
        label: 'Mediodía',
        title: 'Owakudani',
        desc: 'Valle volcánico activo con aguas sulfurosas. Los famosos kuro-tamago (huevos negros hervidos en las aguas termales), ~500¥ por 5 unidades. Vistas al Monte Fuji si el cielo está despejado.',
        tags: [],
      },
      {
        label: 'Tarde',
        title: 'Barco pirata · Lago Ashi',
        desc: 'Crucero por el lago con vistas al Monte Fuji. Incluido en el Hakone Free Pass. Desembarco en Moto-Hakone para ver el torii sobre el agua. Vuelta en autobús.',
        tags: [],
      },
      {
        label: 'Noche',
        title: 'Onsen & Cena Kaiseki en el ryokan',
        desc: 'El Hotel Kajikaso es un ryokan tradicional. Aprovecha el rotenburo (baño de aguas termales al aire libre). La cena kaiseki (menú degustación japonés) es parte de la experiencia — avisa de alergias al reservar.',
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
        title: 'Llegada a Kioto',
        desc: 'Instalación en el hotel. Paseo nocturno por Pontocho Alley — callejón estrecho paralelo al río Kamo con restaurantes kawayuka sobre el agua. Primera cena junto al río.',
        tags: [{ type: 'info', text: 'tarde' }],
      },
      {
        label: '28 jul',
        title: 'Higashiyama & Gion',
        desc: 'Templo Kiyomizudera (abrir a las 6h, ir muy temprano). Callejones Ninenzaka y Sannenzaka con tiendas de artesanía. Por la tarde: barrio Gion para ver el Kioto más antiguo. Hanamikoji-dori para cruzarte con alguna geiko al anochecer.',
        tags: [],
      },
      {
        label: '29 jul',
        title: 'Arashiyama & Camino del Filósofo',
        desc: 'Mañana en Arashiyama: bosque de bambú (llegar antes de las 8h), jardín zen Tenryuji, paseo en barca por el río Oi. Tarde: Tetsugaku-no-michi (Camino del Filósofo), canal bordeado de cerezos, templos y cafés tranquilos.',
        tags: [],
      },
      {
        label: '30 jul',
        title: 'Fushimi Inari, Kinkaku-ji & Teramachi',
        desc: 'Madrugada en Fushimi Inari (5:30–8h para la experiencia mística sin turistas). Mediodía: Nishiki Market para comer. Tarde: Kinkaku-ji (Pabellón Dorado) y Ryoan-ji (jardín de piedras zen, el más famoso del mundo). Noche: Teramachi Arcade para shopping.',
        tags: [],
      },
    ],
    extras: [
      {
        label: 'Extra',
        title: 'Nijo Castle',
        desc: 'Castillo del shogunato Tokugawa con los famosos suelos "nightingale" (crujen para detectar intrusos). La arquitectura político-militar más importante de Kioto. A 15 min a pie del hotel.',
        tags: [{ type: 'tip', text: 'Muy cerca del hotel' }],
      },
      {
        label: 'Extra',
        title: 'Fushimi Sake District',
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
        label: 'Mañana',
        title: 'Parque & Museo Memorial de la Paz',
        desc: 'Dedica al menos 2–3 horas. El Museo Memorial es impactante y necesario. La Cúpula Genbaku (bomba atómica), junto al río, es Patrimonio de la UNESCO. Visita con respeto — es un lugar de reflexión y memoria.',
        tags: [],
      },
      {
        label: 'Tarde',
        title: 'Miyajima',
        desc: 'Ferry ~30 min desde Hiroshima a la isla sagrada. Torii flotante del santuario Itsukushima (icónico al atardecer), ciervos salvajes que pasean libremente y Monte Misen. Con JR Pass, el ferry está incluido.',
        tags: [{ type: 'tip', text: 'Muy recomendado' }],
      },
      {
        label: 'Noche',
        title: 'Okonomiyaki estilo Hiroshima',
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
        title: 'Dotonbori — paraíso foodie',
        desc: 'Takoyaki en Aizuya o Wanaka. Kushikatsu en Kushikatsu Daruma (regla de oro: no mojar dos veces en la salsa). El Glico Man y los neones del puente Ebisubashi para las fotos icónicas. Noche: Hozenji Yokocho, callejón de izakayas al amor de la piedra musgosa.',
        tags: [],
      },
      {
        label: '2 ago',
        title: 'Amerikamura & Shinsekai',
        desc: 'Amerikamura por la mañana: moda urbana, vintage y streetwear japonés, tiendas de segunda mano. Tarde: Shinsekai, ambiente retro años 50, torre Tsutenkaku y más kushikatsu. Paseo por el parque Tennoji.',
        tags: [],
      },
      {
        label: '3 ago',
        title: 'Umeda & Omakase Sushi Akagi',
        desc: 'Mañana: shopping en los grandes almacenes Hankyu y Hanshin de Umeda. Subida al Umeda Sky Building (mirador doble con escalera mecánica flotante — espectacular al atardecer). Noche: omakase en Sushi Akagi — reserva con meses de antelación vía Tableall o Pocket Concierge.',
        tags: [],
      },
      {
        label: '4 ago',
        title: 'Vuelo a Da Nang',
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
        title: 'Relax en el resort',
        desc: 'Piscina, spa y playa de My Khe (nombrada una de las mejores playas de Asia). El resort organiza actividades: kayak, snorkel y clases de cocina vietnamita.',
        tags: [],
      },
      {
        label: '7 ago',
        title: 'Hoi An — Ciudad Antigua',
        desc: '~30 min en taxi desde Da Nang (~200.000 VND). Farolillos, casas coloniales y canales. Mercado Central para barganear telas y especias. Las sastrerías son excepcionales — lleva fotos de referencia, entregan en 24–48h (Yali Couture y A Dong Silk son las más recomendadas, 50–150 USD por traje).',
        tags: [{ type: 'tip', text: 'Patrimonio UNESCO' }],
      },
      {
        label: '8 ago',
        title: 'Mañana libre · Vuelo nocturno a Hanoi',
        desc: 'Tarde de playa. Cena en Da Nang: Mi Quang (noodles con cúrcuma, gambas y cacahuetes) en el mercado Bac My An.',
        tags: [{ type: 'warn', text: '22:25' }],
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
        desc: 'El hotel The Legend gestiona el transfer desde el aeropuerto. Llegada al hotel cerca de la medianoche.',
        tags: [{ type: 'info', text: '23:45 · transfer incluido' }],
      },
      {
        label: '9 ago',
        title: 'Mausoleo Ho Chi Minh & Old Quarter',
        desc: 'Mausoleo abre a las 7:30h. Lleva ropa respetuosa (hombros y rodillas cubiertos). Después: Templo de la Literatura y lago Hoan Kiem. Old Quarter: las famosas 36 calles gremiales, cada una especializada en un oficio.',
        tags: [],
      },
      {
        label: '10 ago',
        title: 'Night Market & Regateo',
        desc: 'Dong Xuan Market para ropa, recuerdos y cultura del regateo. Hang Dao Night Market (abre viernes–domingo). Dong Khoi para marcas imitación. Comienza siempre ofreciendo el 30–40% del precio pedido.',
        tags: [],
      },
      {
        label: '11 ago',
        title: 'Gastronomía & Barrio Francés',
        desc: 'Desayuno de pho en Pho Gia Truyen (abre a las 6:30h, llegar antes). Paseo por el elegante barrio colonial francés. Taller de cocina vietnamita opcional. Última noche: cena en Cha Ca La Vong (desde 1871, solo sirven un plato — chả cá a la brasa con hierbas frescas).',
        tags: [],
      },
      {
        label: '12 ago',
        title: 'Vuelo de vuelta a Madrid',
        desc: 'Salida desde Terminal 2 (diferente a la llegada). Llega al aeropuerto ~17:30. Transfer gestionado por el hotel — confirma el terminal al hacer el check-in. Llegada a Madrid el 13 de agosto a las 7:35.',
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
