// Rutas de Google Maps por destino y día
// Indexadas como dayRoutes[destId][dayIndex]
// El label describe las paradas de la ruta completa del día

export const dayRoutes = {
  tokyo: [
    // 22 jul — Llegada
    null,
    // 23 jul — Harajuku & Shibuya
    {
      label: 'Meiji Jingu → Takeshita St → Shibuya Crossing → Shibuya Sky',
      url: 'https://www.google.com/maps/dir/Meiji+Jingu+Tokyo/Takeshita+Street+Harajuku+Tokyo/Shibuya+Crossing+Tokyo/Shibuya+Sky+Scramble+Square+Tokyo/',
    },
    // 24 jul — Asakusa & Akihabara
    {
      label: 'Senso-ji → Nakamise-dori → Akihabara Electric Town',
      url: 'https://www.google.com/maps/dir/Senso-ji+Temple+Asakusa+Tokyo/Nakamise+Dori+Asakusa+Tokyo/Akihabara+Electric+Town+Tokyo/',
    },
    // 25 jul — Ginza & Odaiba + Omakase
    {
      label: 'Itoya Ginza → Ginza Six → Shinbashi → TeamLab Borderless',
      url: 'https://www.google.com/maps/dir/Itoya+Ginza+Tokyo/Ginza+Six+Tokyo/Shinbashi+Station+Tokyo/teamLab+Borderless+Azabudai+Hills+Tokyo/',
    },
    // 26 jul — Shinjuku → Hakone
    {
      label: 'Shinjuku Gyoen → Omoide Yokocho → Shinjuku Station (Odakyu)',
      url: 'https://www.google.com/maps/dir/Shinjuku+Gyoen+National+Garden+Tokyo/Omoide+Yokocho+Shinjuku+Tokyo/Shinjuku+Station+Tokyo/',
    },
  ],

  hakone: [
    // Mañana — Hakone Loop inicio
    {
      label: 'Hakone-Yumoto → Gora → Owakudani (teleférico)',
      url: 'https://www.google.com/maps/dir/Hakone-Yumoto+Station+Kanagawa/Gora+Station+Hakone/Owakudani+Hakone+Japan/',
    },
    // Mediodía — Lago Ashi & Santuario
    {
      label: 'Owakudani → Lago Ashi → Moto-Hakone → Santuario de Hakone',
      url: 'https://www.google.com/maps/dir/Owakudani+Hakone+Japan/Lake+Ashi+Motohakone+Hakone/Hakone+Shrine+Motohakone/',
    },
    // Tarde — Yosegi Zaiku
    {
      label: 'Moto-Hakone → Hakone-Yumoto (artesanía Yosegi)',
      url: 'https://www.google.com/maps/dir/Motohakone+Port+Hakone/Hakone-Yumoto+Station+Kanagawa/',
    },
    // Noche — Onsen & Kaiseki
    {
      label: 'Hotel Kajikaso — Onsen & Cena Kaiseki',
      url: 'https://www.google.com/maps/search/?api=1&query=Hotel+Kajikaso+Yumoto+688+Hakone+Kanagawa',
    },
  ],

  kyoto: [
    // 27 jul — Llegada: Pontocho & Río Kamo
    {
      label: 'Kyoto Station → Hotel Sanjo → Río Kamo → Pontocho',
      url: 'https://www.google.com/maps/dir/Kyoto+Station/Royal+Park+Hotel+Kyoto+Sanjo/Kamo+River+Kyoto/Pontocho+Nakagyo-ku+Kyoto/',
    },
    // 28 jul — Higashiyama & Gion
    {
      label: 'Kiyomizudera → Sannenzaka → Ninenzaka → Gion Hanamikoji',
      url: 'https://www.google.com/maps/dir/Kiyomizudera+Temple+Kyoto/Sannenzaka+Kyoto/Ninenzaka+Kyoto/Hanamikoji+Dori+Gion+Kyoto/',
    },
    // 29 jul — Arashiyama & Camino del Filósofo
    {
      label: 'Arashiyama Bamboo Grove → Tenryuji → Nanzenji → Ginkakuji',
      url: 'https://www.google.com/maps/dir/Arashiyama+Bamboo+Forest+Kyoto/Tenryuji+Temple+Kyoto/Nanzenji+Temple+Kyoto/Ginkakuji+Temple+Kyoto/',
    },
    // 30 jul — Fushimi Inari, Nishiki & Kinkakuji
    {
      label: 'Fushimi Inari → Nishiki Market → Kinkakuji → Ryoanji',
      url: 'https://www.google.com/maps/dir/Fushimi+Inari+Taisha+Kyoto/Nishiki+Market+Kyoto/Kinkakuji+Temple+Kyoto/Ryoanji+Temple+Kyoto/',
    },
  ],

  hiroshima: [
    // 31 jul — Llegada & Parque de la Paz
    {
      label: 'Hiroshima Station → Parque de la Paz → Cúpula Genbaku → Okonomimura',
      url: 'https://www.google.com/maps/dir/Hiroshima+Station/Hiroshima+Peace+Memorial+Park/Atomic+Bomb+Dome+Hiroshima/Okonomimura+Hiroshima/',
    },
    // 1 ago — Miyajima
    {
      label: 'Hiroshima Station → Ferry Miyajimaguchi → O-Torii → Santuario Itsukushima → Monte Misen',
      url: 'https://www.google.com/maps/dir/Hiroshima+Station/Miyajimaguchi+Station+Hiroshima/Itsukushima+Shrine+Miyajima/Mount+Misen+Miyajima+Hiroshima/',
    },
    // Noche — Okonomiyaki
    {
      label: 'Okonomimura — Okonomiyaki estilo Hiroshima',
      url: 'https://www.google.com/maps/search/?api=1&query=Okonomimura+Naka-ku+Hiroshima+Japan',
    },
  ],

  osaka: [
    // 1 ago — Llegada: Dotonbori
    {
      label: 'Shin-Osaka → voco Osaka → Dotonbori → Hozenji Yokocho',
      url: 'https://www.google.com/maps/dir/Shin-Osaka+Station/voco+Osaka+Central/Dotonbori+Osaka/Hozenji+Yokocho+Osaka/',
    },
    // 2 ago — Amerikamura & Shinsekai
    {
      label: 'Amerikamura Triangle Park → Shinsekai → Torre Tsutenkaku',
      url: 'https://www.google.com/maps/dir/Amerikamura+Triangle+Park+Osaka/Shinsekai+Osaka/Tsutenkaku+Tower+Osaka/',
    },
    // 3 ago — Umeda & Omakase
    {
      label: 'Hankyu Umeda → Shinsaibashi → Umeda Sky Building',
      url: 'https://www.google.com/maps/dir/Hankyu+Umeda+Department+Store+Osaka/Shinsaibashi+Shopping+Street+Osaka/Umeda+Sky+Building+Osaka/',
    },
    // 4 ago — Vuelo KIX
    {
      label: 'Namba Station → Aeropuerto Kansai KIX (Nankai Rapi:t)',
      url: 'https://www.google.com/maps/dir/Namba+Station+Osaka/Kansai+International+Airport+KIX/',
    },
  ],

  danang: [
    // 4-6 ago — Llegada & Resort
    {
      label: 'Aeropuerto Da Nang → Son Tra Resort & Spa',
      url: 'https://www.google.com/maps/dir/Da+Nang+International+Airport/Son+Tra+Resort+Spa+Da+Nang+Vietnam/',
    },
    // 7 ago — Hoi An
    {
      label: 'Da Nang → Puente Japonés → Casco Antiguo → Mercado Central → Farolillos noche',
      url: 'https://www.google.com/maps/dir/Son+Tra+Resort+Da+Nang/Japanese+Bridge+Hoi+An+Vietnam/Hoi+An+Ancient+Town+Vietnam/Hoi+An+Central+Market+Vietnam/',
    },
    // 8 ago — Mañana libre & Vuelo Hanoi
    {
      label: 'Son Tra Resort → My Khe Beach → Aeropuerto Da Nang T1',
      url: 'https://www.google.com/maps/dir/Son+Tra+Resort+Da+Nang/My+Khe+Beach+Da+Nang/Da+Nang+International+Airport/',
    },
  ],

  hanoi: [
    // 8 ago — Llegada
    {
      label: 'Noi Bai Airport T1 → The Legend Hanoi Hotel',
      url: 'https://www.google.com/maps/dir/Noi+Bai+International+Airport+Hanoi/The+Legend+Hanoi+Hotel+Ngo+Quyen/',
    },
    // 9 ago — Mausoleo & Old Quarter
    {
      label: 'Mausoleo Ho Chi Minh → Pagoda Pilar Único → Templo Literatura → Lago Hoan Kiem → Old Quarter',
      url: 'https://www.google.com/maps/dir/Ho+Chi+Minh+Mausoleum+Hanoi/One+Pillar+Pagoda+Hanoi/Temple+of+Literature+Hanoi/Hoan+Kiem+Lake+Hanoi/',
    },
    // 10 ago — Mercado Dong Xuan & Mercado Nocturno
    {
      label: 'Mercado Dong Xuan → Old Quarter (tiendas) → Hang Dao Night Market → Bia Hoi Corner',
      url: 'https://www.google.com/maps/dir/Dong+Xuan+Market+Hanoi/Hang+Gai+Street+Old+Quarter+Hanoi/Hang+Dao+Street+Hanoi/Luong+Van+Can+Street+Hanoi/',
    },
    // 11 ago — Hoa Lo, Barrio Francés & Cha Ca
    {
      label: 'Pho Gia Truyen → Prisión Hoa Lo → Ópera de Hanoi → Cha Ca La Vong',
      url: 'https://www.google.com/maps/dir/Pho+Gia+Truyen+Bat+Dan+Hanoi/Hoa+Lo+Prison+Museum+Hanoi/Hanoi+Opera+House/Cha+Ca+La+Vong+Restaurant+Hanoi/',
    },
    // 12 ago — Vuelo Madrid
    {
      label: 'The Legend Hotel → Lago Hoan Kiem → Noi Bai Airport T2',
      url: 'https://www.google.com/maps/dir/The+Legend+Hanoi+Hotel/Hoan+Kiem+Lake+Hanoi/Noi+Bai+International+Airport+Hanoi/',
    },
  ],
}
