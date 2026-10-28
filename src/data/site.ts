// Wszystkie treści strony w jednym miejscu. Zmień tekst, zapisz plik i gotowe.

export const site = {
  name: 'A STUDIO',
  owner: 'Ania Iskierska',
  tagline: 'Kameralna siłownia i fitness w Mosinie',
  description:
    'A STUDIO to kameralna siłownia i studio fitness w Mosinie. Wolne ciężary, strefa cardio, zajęcia grupowe i treningi personalne w świetnej atmosferze.',

  // Pasek „wersja demonstracyjna” na górze strony. Ustaw false po akceptacji przez klienta.
  demoBanner: true,

  phone: '+48 577 666 087',
  phoneHref: 'tel:+48577666087',
  email: 'kontakt.astudio@gmail.com',
  instagram: 'https://www.instagram.com/astudio.gym/',
  instagramHandle: '@astudio.gym',
  facebook: 'https://www.facebook.com/107618434757376',

  address: {
    street: 'Główna 59 C/D',
    postalCode: '62-050',
    city: 'Mosina',
  },
  mapsEmbed:
    'https://maps.google.com/maps?q=A%20STUDIO%2C%20G%C5%82%C3%B3wna%2059C%2C%2062-050%20Mosina&z=16&output=embed',
  mapsDirections:
    'https://www.google.com/maps/dir/?api=1&destination=A%20STUDIO%2C%20G%C5%82%C3%B3wna%2059C%2C%2062-050%20Mosina',
  googleReviews: 'https://share.google/2ZAZMJP2gXMubr33C',
  rating: { value: '4,8', count: 24 },

  // Dni: 1 = poniedziałek … 7 = niedziela. Pusta lista = zamknięte.
  openingHours: [
    { day: 1, label: 'Poniedziałek', ranges: [['08:00', '10:00'], ['16:00', '20:00']] },
    { day: 2, label: 'Wtorek', ranges: [['08:00', '10:00'], ['16:00', '20:00']] },
    { day: 3, label: 'Środa', ranges: [['08:00', '10:00'], ['16:00', '20:00']] },
    { day: 4, label: 'Czwartek', ranges: [['08:00', '10:00'], ['16:00', '20:00']] },
    { day: 5, label: 'Piątek', ranges: [['08:00', '10:00'], ['16:00', '19:00']] },
    { day: 6, label: 'Sobota', ranges: [] },
    { day: 7, label: 'Niedziela', ranges: [] },
  ] as { day: number; label: string; ranges: [string, string][] }[],

  // Grafik z arkusza Google: Plik → Udostępnij → Opublikuj w internecie → format CSV,
  // wklej link tutaj. Kolumny: dzien, godzina, zajecia, opis. Puste = grafik poniżej.
  scheduleSheetCsvUrl: '',

  schedule: [
    { day: 'Poniedziałek', time: '18:00', name: 'Trening obwodowy', note: 'Całe ciało, stacje, dużo energii' },
    { day: 'Poniedziałek', time: '19:00', name: 'Power Pilates', note: 'Mocny core i stabilizacja' },
    { day: 'Wtorek', time: '08:00', name: 'Trening siłowy', note: 'Technika i progres z ciężarami' },
    { day: 'Wtorek', time: '18:00', name: 'Sexy Pupa', note: 'Pośladki i nogi, gumy i obciążenie' },
    { day: 'Wtorek', time: '19:00', name: 'Płaski brzuch', note: 'Mięśnie brzucha i głębokie' },
    { day: 'Środa', time: '18:00', name: 'FBW', note: 'Full Body Workout' },
    { day: 'Środa', time: '19:00', name: 'Zdrowy kręgosłup', note: 'Mobilność, postawa, ulga dla pleców' },
    { day: 'Czwartek', time: '08:00', name: 'Trening siłowy', note: 'Technika i progres z ciężarami' },
    { day: 'Czwartek', time: '18:00', name: 'Vinyasa joga', note: 'Płynna praktyka w rytmie oddechu' },
    { day: 'Czwartek', time: '19:00', name: 'Joga Stretch & Relax', note: 'Rozciąganie i wyciszenie' },
    { day: 'Piątek', time: '18:00', name: 'Pump & Tone', note: 'Sztangi, wytrzymałość, sylwetka' },
  ],

  // Ceny przykładowe, do potwierdzenia z właścicielką. Po uzupełnieniu ustaw false.
  pricesArePlaceholder: true,
  prices: [
    { name: 'Wejście jednorazowe', price: '25 zł', details: ['Siłownia lub jedne zajęcia', 'Dobre na pierwszy raz'] },
    {
      name: 'Karnet open',
      price: '139 zł',
      period: '/ miesiąc',
      details: ['Siłownia bez limitu wejść', 'Wszystkie zajęcia grupowe', 'Konsultacja na start'],
      featured: true,
    },
    { name: 'Trening personalny', price: '120 zł', period: '/ 60 min', details: ['Plan pod Twój cel', 'Porady żywieniowe', 'Pakiety taniej'] },
  ] as { name: string; price: string; period?: string; details: string[]; featured?: boolean }[],
  sportCards: ['FitProfit', 'FitSport'],

  offer: [
    { title: 'Siłownia', text: 'Pełen zestaw hantli, stanowiska z wolnymi ciężarami, maszyny i bramy. Wszystko, czego potrzebujesz do treningu siłowego.' },
    { title: 'Strefa cardio', text: 'Bieżnie i rowery w jasnej strefie z drewnianą podłogą. Idealne na rozgrzewkę i spalanie.' },
    { title: 'Zajęcia grupowe', text: 'Od treningu obwodowego i FBW, przez pilates, po jogę. Małe grupy, więc trener widzi każdego.' },
    { title: 'Treningi personalne', text: 'Indywidualny plan, korekta techniki i motywacja. Trenerzy, którzy wymagają, ale z uśmiechem.' },
    { title: 'Porady żywieniowe', text: 'Trening to połowa sukcesu. Pomożemy ułożyć jedzenie tak, żeby efekty przyszły szybciej.' },
    { title: 'Kameralna atmosfera', text: 'Bez tłumów i kolejek do sprzętu. Tu się znamy z imienia i trenujemy w swoim tempie.' },
  ],

  reviews: [
    {
      author: 'Wojciech M.',
      text: 'Super miejsce, świetnie wyposażona kameralna siłownia, Anka jest bardzo dobrym trenerem personalnym. Korzystałem kilka miesięcy z treningów i korzystałbym dłużej, gdyby nie moja przeprowadzka. Polecam serdecznie.',
    },
    {
      author: 'Izabela Ł.',
      text: 'Polecam klimatyczne miejsce, fajna atmosfera. Indywidualne podejście. Choć nie jest lekko, trenerzy są wymagający, to chodzi się tu z przyjemnością.',
    },
    {
      author: 'Opinia z Google',
      text: 'Polecam serdecznie, kameralna i miła atmosfera.',
    },
  ],

  faq: [
    {
      q: 'Nigdy nie ćwiczyłem/am. Czy to miejsce dla mnie?',
      a: 'Jak najbardziej. W kameralnej siłowni trener ma czas, żeby pokazać sprzęt i poprawić technikę. Zadzwoń, a umówimy pierwszą wizytę.',
    },
    {
      q: 'Czy na zajęcia grupowe trzeba się zapisać?',
      a: 'Grupy są małe, dlatego najlepiej dać znać wcześniej: telefonicznie lub wiadomością na Instagramie.',
    },
    {
      q: 'Czy honorujecie karty sportowe?',
      a: 'Tak, przyjmujemy karty FitProfit i FitSport.',
    },
    {
      q: 'Co zabrać na pierwszy trening?',
      a: 'Wygodny strój, czyste obuwie na zmianę, ręcznik i wodę. Resztę mamy na miejscu.',
    },
  ],
};

export type Site = typeof site;
