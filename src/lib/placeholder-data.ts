// Privremeni (izmišljeni) sadržaj za pokretanje sajta.
// Zamenite stvarnim podacima kroz CMS panel na /studio, ovo su samo razumne
// početne vrednosti da sajt ne bude prazan.

// Helperi za pisanje dugačkog sadržaja u Portable Text formatu (isti format
// koji koristi Sanity), bez ručnog kucanja pune strukture bloka za svaki red.
function h2(text: string) {
  return { _type: "block", style: "h2", children: [{ _type: "span", text }] };
}
function h3(text: string) {
  return { _type: "block", style: "h3", children: [{ _type: "span", text }] };
}
function p(text: string) {
  return { _type: "block", style: "normal", children: [{ _type: "span", text }] };
}
function bullets(items: string[]) {
  return items.map((text) => ({
    _type: "block",
    style: "normal",
    listItem: "bullet" as const,
    level: 1,
    children: [{ _type: "span", text }],
  }));
}

export const siteSettings = {
  title: "Klima Servis Beograd",
  tagline: "Profesionalna ugradnja, servis i prodaja klima uređaja u Beogradu",
  phone: "060 555 0117",
  phoneSecondary: "011 405 2280",
  email: "info@klimaservisbeograd.rs",
  address: "Bulevar Mihajla Pupina 10, Novi Beograd",
  city: "Beograd",
  serviceAreas: ["Beograd", "Novi Beograd", "Vračar", "Zvezdara", "Voždovac", "Zemun", "Palilula"],
  workingHours: "Pon–Sub: 08–20h",
  openingHoursSpecification: [
    {
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
      opens: "08:00",
      closes: "20:00",
    },
  ],
  // Približne koordinate Novog Beograda, zameniti tačnom geo-lokacijom adrese firme.
  geo: { lat: 44.8125, lng: 20.4312 },
  brands: ["Daikin", "Mitsubishi", "Gree", "LG", "Samsung", "Midea", "Hisense", "Vivax"],
};

export type ServiceItem = {
  slug: string;
  title: string;
  category: "servis" | "montaza" | "popravka" | "dijagnostika";
  shortDescription: string;
  priceFrom: number;
  priceTo?: number;
  priceNote?: string;
  featured?: boolean;
};

export const services: ServiceItem[] = [
  {
    slug: "servis-9-12-btu",
    title: "Servis klime 9 i 12 BTU",
    category: "servis",
    shortDescription: "Čišćenje filtera, dezinfekcija isparivača i provera rada uređaja.",
    priceFrom: 2900,
    featured: true,
  },
  {
    slug: "servis-18-24-btu",
    title: "Servis klime 18 i 24 BTU",
    category: "servis",
    shortDescription: "Čišćenje filtera, dezinfekcija isparivača i provera rada uređaja za veće uređaje.",
    priceFrom: 3400,
  },
  {
    slug: "veliki-servis-9-12-btu",
    title: "Veliki servis klime 9 i 12 BTU",
    category: "servis",
    shortDescription: "Rasklapanje jedinice, dubinsko pranje isparivača i ventilatora, dezinfekcija.",
    priceFrom: 5200,
  },
  {
    slug: "veliki-servis-18-24-btu",
    title: "Veliki servis klime 18 i 24 BTU",
    category: "servis",
    shortDescription: "Rasklapanje jedinice, dubinsko pranje isparivača i ventilatora za veće uređaje.",
    priceFrom: 6300,
  },
  {
    slug: "montaza-9-12-btu",
    title: "Montaža klime 9 i 12 BTU",
    category: "montaza",
    shortDescription: "Profesionalna ugradnja unutrašnje i spoljašnje jedinice, uključen osnovni materijal do 3m.",
    priceFrom: 9200,
    featured: true,
  },
  {
    slug: "montaza-18-btu",
    title: "Montaža klime 18 BTU",
    category: "montaza",
    shortDescription: "Profesionalna ugradnja jedinice od 18 BTU, uključen osnovni materijal do 3m.",
    priceFrom: 11500,
  },
  {
    slug: "montaza-24-btu",
    title: "Montaža klime 24 BTU",
    category: "montaza",
    shortDescription: "Profesionalna ugradnja jedinice od 24 BTU, uključen osnovni materijal do 3m.",
    priceFrom: 13800,
  },
  {
    slug: "demontaza-klime",
    title: "Demontaža klime",
    category: "montaza",
    shortDescription: "Uklanjanje postojećeg uređaja, uz mogućnost ponovne ugradnje na novoj lokaciji.",
    priceFrom: 3400,
  },
  {
    slug: "duzni-metar-9-12-btu",
    title: "Dužni metar instalacije 9 i 12 BTU",
    category: "montaza",
    shortDescription: "Cena po svakom dodatnom metru bakarne instalacije preko standardna 3m.",
    priceFrom: 2500,
    priceNote: "po dužnom metru",
  },
  {
    slug: "duzni-metar-18-btu",
    title: "Dužni metar instalacije 18 BTU",
    category: "montaza",
    shortDescription: "Cena po svakom dodatnom metru bakarne instalacije preko standardna 3m.",
    priceFrom: 2900,
    priceNote: "po dužnom metru",
  },
  {
    slug: "duzni-metar-24-btu",
    title: "Dužni metar instalacije 24 BTU",
    category: "montaza",
    shortDescription: "Cena po svakom dodatnom metru bakarne instalacije preko standardna 3m.",
    priceFrom: 3200,
    priceNote: "po dužnom metru",
  },
  {
    slug: "kondenz-crevo",
    title: "Kondenz crevo",
    category: "popravka",
    shortDescription: "Postavljanje ili zamena creva za odvod kondenzovane vode.",
    priceFrom: 300,
    priceNote: "po metru",
  },
  {
    slug: "zamena-izolacije",
    title: "Zamena izolacije na bakarnim cevima",
    category: "popravka",
    shortDescription: "Zamena oštećene ili istrošene izolacije radi bolje energetske efikasnosti.",
    priceFrom: 800,
    priceNote: "po metru",
  },
  {
    slug: "zamena-kondenzatora",
    title: "Zamena kondenzatora",
    category: "popravka",
    shortDescription: "Zamena neispravnog kondenzatora na spoljašnjoj jedinici.",
    priceFrom: 4000,
    priceTo: 6900,
    priceNote: "zavisi od kapaciteta uređaja",
  },
  {
    slug: "dopuna-gasa",
    title: "Dopuna i provera freona",
    category: "popravka",
    shortDescription: "Provera zaptivenosti sistema i dopuna gasa R32 ili R410A.",
    priceFrom: 6900,
    priceTo: 10400,
    priceNote: "zavisi od tipa gasa i kapaciteta",
    featured: true,
  },
  {
    slug: "popravka-elektronike",
    title: "Popravka elektronike",
    category: "popravka",
    shortDescription: "Dijagnostika i popravka upravljačke ploče, senzora i ventilatora.",
    priceFrom: 3400,
    priceTo: 9200,
  },
  {
    slug: "zamena-holendera",
    title: "Zamena holendera",
    category: "popravka",
    shortDescription: "Zamena spojnice na instalaciji radi otklanjanja curenja gasa.",
    priceFrom: 1500,
    priceNote: "po komadu",
  },
  {
    slug: "zamena-ventila",
    title: "Zamena ventila",
    category: "popravka",
    shortDescription: "Zamena neispravnog ventila na unutrašnjoj ili spoljašnjoj jedinici.",
    priceFrom: 4600,
  },
  {
    slug: "step-motor",
    title: "Step motor",
    category: "popravka",
    shortDescription: "Zamena step motora zaduženog za pokretanje lamela unutrašnje jedinice.",
    priceFrom: 3400,
  },
  {
    slug: "konstatacija-kvara",
    title: "Konstatacija kvara",
    category: "dijagnostika",
    shortDescription: "Izlazak servisera i utvrđivanje uzroka kvara, uračunato u cenu popravke ako se izvrši.",
    priceFrom: 1700,
    featured: true,
  },
];

export type ProductItem = {
  slug: string;
  title: string;
  brand: string;
  type: string;
  btu: number;
  price: number;
  oldPrice?: number;
  installationIncluded: boolean;
  shortDescription: string;
  featured?: boolean;
  specs: {
    energyClassCooling: string;
    energyClassHeating: string;
    gasType: string;
    wifi: boolean;
    warranty: string;
  };
  features: string[];
};

export const products: ProductItem[] = [
  {
    slug: "gree-pular-eco-12k",
    title: "Gree Pular Eco 12k",
    brand: "Gree",
    type: "Zidni",
    btu: 12000,
    price: 480,
    installationIncluded: true,
    shortDescription: "Inverter klima uređaj sa Wi-Fi upravljanjem, R32 gas, tih rad.",
    featured: true,
    specs: {
      energyClassCooling: "A++",
      energyClassHeating: "A+",
      gasType: "R32",
      wifi: true,
      warranty: "2 + 5 godina",
    },
    features: [
      "Inverter tehnologija za stabilnu temperaturu i nižu potrošnju struje",
      "Wi-Fi upravljanje putem mobilne aplikacije",
      "Tih rad unutrašnje jedinice",
      "Auto-restart funkcija posle nestanka struje",
      "Filter za prečišćavanje vazduha",
    ],
  },
  {
    slug: "midea-xtreme-save-12k",
    title: "Midea Xtreme Save 12k",
    brand: "Midea",
    type: "Zidni",
    btu: 12000,
    price: 450,
    oldPrice: 520,
    installationIncluded: true,
    shortDescription: "Visoko energetski efikasan model, idealan za dnevne boravke do 35m².",
    featured: true,
    specs: {
      energyClassCooling: "A+++",
      energyClassHeating: "A++",
      gasType: "R32",
      wifi: true,
      warranty: "2 + 5 godina",
    },
    features: [
      "Izuzetno visoka energetska efikasnost (A+++)",
      "I-ECO tehnologija za dodatnu uštedu energije",
      "Wi-Fi upravljanje",
      "Rad na niskim spoljnim temperaturama do -15°C",
      "Self-clean funkcija isparivača",
    ],
  },
  {
    slug: "daikin-sensira-18k",
    title: "Daikin Sensira 18k",
    brand: "Daikin",
    type: "Zidni",
    btu: 18000,
    price: 780,
    installationIncluded: true,
    shortDescription: "Pouzdan japanski brend, pogodan za veće prostorije i poslovni prostor.",
    featured: true,
    specs: {
      energyClassCooling: "A++",
      energyClassHeating: "A+",
      gasType: "R32",
      wifi: false,
      warranty: "2 + 5 godina",
    },
    features: [
      "Pouzdana japanska tehnologija",
      "Econo režim za smanjenu potrošnju energije",
      "Tih rad i stabilno hlađenje i grejanje",
      "Automatski restart nakon nestanka struje",
      "Pogodan za veće prostorije i poslovni prostor",
    ],
  },
  {
    slug: "hisense-comfort-9k",
    title: "Hisense Comfort 9k",
    brand: "Hisense",
    type: "Zidni",
    btu: 9000,
    price: 380,
    installationIncluded: true,
    shortDescription: "Kompaktan i tih uređaj za manje sobe i kancelarije.",
    specs: {
      energyClassCooling: "A++",
      energyClassHeating: "A+",
      gasType: "R32",
      wifi: false,
      warranty: "2 + 5 godina",
    },
    features: [
      "Kompaktan dizajn pogodan za manje prostorije",
      "Tih rad, idealan za spavaće sobe i kancelarije",
      "I-Feel funkcija za precizno merenje temperature u prostoriji",
      "Brzo hlađenje i grejanje pri pokretanju",
    ],
  },
  {
    slug: "lg-dualcool-24k",
    title: "LG DualCool 24k",
    brand: "LG",
    type: "Zidni",
    btu: 24000,
    price: 990,
    installationIncluded: true,
    featured: true,
    shortDescription: "Snažan inverter model za velike prostorije, Wi-Fi i brzo hlađenje.",
    specs: {
      energyClassCooling: "A++",
      energyClassHeating: "A+",
      gasType: "R32",
      wifi: true,
      warranty: "2 + 5 godina",
    },
    features: [
      "Snažan kapacitet za velike prostorije i otvorene planove",
      "Wi-Fi upravljanje putem LG ThinQ aplikacije",
      "DUAL Inverter kompresor za brzo hlađenje i tih rad",
      "Auto Clean funkcija sprečava stvaranje buđi i neprijatnih mirisa",
    ],
  },
  {
    slug: "vivax-cool-12k",
    title: "Vivax Cool 12k",
    brand: "Vivax",
    type: "Zidni",
    btu: 12000,
    price: 420,
    installationIncluded: true,
    shortDescription: "Odličan odnos cene i kvaliteta za stambeni prostor.",
    specs: {
      energyClassCooling: "A++",
      energyClassHeating: "A+",
      gasType: "R32",
      wifi: false,
      warranty: "2 + 3 godine",
    },
    features: [
      "Odličan odnos cene i kvaliteta",
      "Inverter tehnologija",
      "Četiri režima rada: hlađenje, grejanje, sušenje i ventilacija",
      "Jednostavno upravljanje daljinskim upravljačem",
    ],
  },
];

export type BlogPostItem = {
  slug: string;
  title: string;
  category: "servis" | "montaza" | "izbor" | "saveti";
  excerpt: string;
  summary: string;
  keyTakeaways: string[];
  publishedAt: string;
  body: unknown[];
  faq: { question: string; answer: string }[];
};

export const blogPosts: BlogPostItem[] = [
  {
    slug: "koliko-kosta-ugradnja-klime-u-beogradu",
    title: "Koliko košta ugradnja klime u Beogradu i šta sve utiče na cenu",
    category: "montaza",
    excerpt:
      "Cena montaže nije ista za stan na petom spratu novogradnje i kuću sa fasadom pod zaštitom. Evo od čega se cena zapravo sastoji.",
    summary:
      "Cena ugradnje klime u Beogradu zavisi od snage uređaja, dužine instalacione trase, pozicije spoljne jedinice i uslova zgrade. Osnovna montaža pokriva standardnu trasu do tri metra, a svaki dodatni metar, penjanje na fasadu ili rad na visini povećavaju cenu po jasnim stavkama.",
    keyTakeaways: [
      "Osnovna montaža podrazumeva standardnu trasu do tri metra i pozicije dostupne bez posebne opreme",
      "Dužina trase je stavka koja najčešće povećava konačnu cenu",
      "Pozicija spoljne jedinice u zgradama često zavisi od pravila kućnog saveta",
      "Najjeftinija ponuda često ne uključuje materijal i doplate koje se pojave na licu mesta",
    ],
    publishedAt: "2026-05-20T09:00:00.000Z",
    body: [
      p("Pitanje cene montaže je prvo koje se postavi pri kupovini klime, a odgovor „zavisi” s razlogom frustrira. U ovom tekstu je razloženo od čega se cena ugradnje zapravo sastoji, koje su standardne stavke, a šta spada u doplate, kako biste ponude mogli da poredite po istim kriterijumima."),
      h2("Šta pokriva osnovna cena montaže"),
      p("Osnovna montaža podrazumeva postavljanje unutrašnje i spoljne jedinice na pripremljene pozicije, povezivanje instalacione trase standardne dužine do tri metra, vakumiranje sistema i puštanje u rad sa proverom svih funkcija. U cenu je po pravilu uključen osnovni materijal: bakarne cevi, kablovi, nosači spoljne jedinice i creva za odvod kondenzata u okviru standardne dužine."),
      p("Vakumiranje zaslužuje posebnu napomenu, jer je korak na kom se najčešće štedi kod sumnjivo jeftinih montaža. Bez izvlačenja vazduha i vlage iz instalacije pre puštanja gasa, uređaj radi slabije i kompresor se brže troši. Ako ponuda ne pominje vakumiranje, vredi pitati direktno."),
      h2("Stavke koje povećavaju cenu"),
      p("Dužina trase preko standardnih tri metra naplaćuje se po dužnom metru i to je najčešća doplata. Slede pozicije koje zahtevaju rad na visini ili penjanje na fasadu, probijanje deblji zidova, skrivanje instalacije u zid umesto kanalice, i ugradnja pumpice za kondenzat tamo gde prirodan pad odvoda nije moguć."),
      p("U beogradskim zgradama posebna stavka ume da bude pozicija spoljne jedinice. Kućni saveti u novijim zgradama često propisuju gde jedinica sme da stoji, a kod starijih zgrada u centru fasada može biti pod zaštitom, pa jedinica ide na terasu ili krov, što menja dužinu trase i složenost posla. Zato je razgovor o poziciji pre zakazivanja montaže važniji nego što deluje."),
      h2("Kako da poredite ponude"),
      p("Dve ponude su uporedive tek kad znate šta svaka uključuje: da li je materijal u ceni i do koje dužine, da li se vakumira, da li je nosač spoljne jedinice uračunat, i koliko košta dodatni metar trase. Najniža polazna cifra često podrazumeva da se svaka od ovih stavki doplaćuje posebno, pa konačan račun premaši ponudu koja je na papiru delovala skuplje."),
    ],
    faq: [
      { question: "Da li je montaža uključena u cenu klime iz vašeg kataloga?", answer: "Da, uz uređaje iz naše ponude standardna montaža je uključena u istaknutu cenu, a eventualne doplate za dužu trasu ili posebne uslove saopštavaju se pre početka rada." },
      { question: "Koliko traje ugradnja klime?", answer: "Standardna montaža sa pripremljenim pozicijama traje dva do tri sata, a složenije instalacije sa dužom trasom ili radom na visini mogu trajati i ceo dan." },
      { question: "Da li mogu da ugradim klimu ako fasada ne sme da se buši?", answer: "U većini slučajeva postoji rešenje, jedinica na terasi, zajednička pozicija predviđena od strane zgrade ili trasa kroz unutrašnje prostorije, a najbolje je da poziciju prokomentarišemo pre kupovine uređaja." },
    ],
  },
  {
    slug: "zasto-klima-ne-hladi-najcesci-uzroci",
    title: "Zašto klima ne hladi: najčešći uzroci i šta možete sami da proverite",
    category: "servis",
    excerpt:
      "Klima radi, duva, ali vazduh nije hladan. Pre nego što pozovete servis, nekoliko stvari možete proveriti sami za pet minuta.",
    summary:
      "Kada klima duva ali ne hladi, uzrok je najčešće zaprljan filter, pogrešan režim rada, zaprljana spoljna jedinica ili gubitak rashladnog gasa. Prve tri stvari korisnik može da proveri sam, dok curenje gasa i kvarovi na kompresoru ili elektronici zahtevaju servisera.",
    keyTakeaways: [
      "Prvo proverite režim rada i zadatu temperaturu na daljinskom",
      "Zaprljan filter je najčešći i najjeftiniji uzrok slabog hlađenja",
      "Zarasla spoljna jedinica ne može da preda toplotu i uređaj gubi kapacitet",
      "Ako je gas u pitanju, dopuna bez pronalaska curenja je bacanje novca",
    ],
    publishedAt: "2026-06-15T09:00:00.000Z",
    body: [
      p("Usred jula, klima radi ceo dan, a u stanu i dalje toplo. Ovo je jedan od najčešćih poziva koje servis dobija u sezoni, a dobar deo tih izlazaka mogao je da se izbegne jednostavnom proverom koju korisnik može da uradi sam. Evo redosleda kojim vredi ići pre poziva serviseru."),
      h2("Šta možete proveriti sami"),
      p("Prvo daljinski: proverite da je uređaj u režimu hlađenja (snežna pahulja, ne sunce ili kapljica) i da je zadata temperatura bar nekoliko stepeni ispod trenutne sobne. Zvuči banalno, ali pogrešan režim posle prelaska sa grejanja na hlađenje je čest uzrok „kvara” koji to nije."),
      p("Zatim filteri: otvorite prednju masku unutrašnje jedinice i pogledajte mrežaste filtere. Ako su sivi od prašine, operite ih mlakom vodom, osušite i vratite. Zaprljan filter smanjuje protok vazduha toliko da uređaj može da izgubi i trećinu kapaciteta, a čišćenje je posao od deset minuta."),
      p("Na kraju spoljna jedinica: ako je dostupna, pogledajte da li su rebra kondenzatora zarasla u prašinu, puh od topola ili lišće, i da li nešto blokira protok vazduha oko jedinice. Spoljna jedinica koja ne može da preda toplotu okolini ne može ni da hladi prostoriju, koliko god unutrašnja duvala."),
      h2("Kada je vreme za servisera"),
      p("Ako su filteri čisti, režim ispravan i spoljna jedinica prohodna, a hlađenje je i dalje slabo, uzrok je najverovatnije gubitak rashladnog gasa, zaprljan isparivač koji zahteva dubinsko pranje, ili kvar na senzorima i elektronici. Led na cevima, sikćući zvuk ili spoljna jedinica koja se pali i gasi u kratkim intervalima dodatno ukazuju na problem sa gasom."),
      p("Važno je znati da klima nije potrošni sistem kad je gas u pitanju: uređaj koji hladi slabije jer je „izgubio gas” negde curi. Dopuna bez pronalaska i saniranja mesta curenja znači da ćete istu intervenciju plaćati svake sezone. Ozbiljan servis prvo meri pritisak, traži curenje, pa tek onda dopunjava."),
    ],
    faq: [
      { question: "Koliko često treba prati filtere?", answer: "U sezoni korišćenja na svake dve do četiri nedelje, zavisno od količine prašine u prostoru. To je posao koji korisnik bezbedno radi sam." },
      { question: "Klima hladi ali se oseća neprijatan miris, šta je uzrok?", answer: "Najčešće plesan i naslage na isparivaču ili u kadici za kondenzat. To rešava servis sa dezinfekcijom, ne osveživači prostora." },
      { question: "Da li je normalno da klima izbacuje vodu napolju?", answer: "Da, kondenzacija je normalna pojava pri hlađenju. Problem je ako voda curi iz unutrašnje jedinice u prostoriju, tada je odvod začepljen i potreban je servis." },
    ],
  },
  {
    slug: "inverter-ili-obicna-klima-sta-se-isplati",
    title: "Inverter ili obična klima: šta se više isplati za stan u Beogradu",
    category: "izbor",
    excerpt:
      "Inverter modeli su skuplji pri kupovini, ali je razlika u računu za struju stvarna. Kada se ta razlika isplati, a kada je običan uređaj sasvim dovoljan?",
    summary:
      "Inverter klima kontinuirano prilagođava snagu kompresora i zato troši manje struje pri dugotrajnom radu, tiša je i bolje drži temperaturu. On/off modeli su jeftiniji i sasvim solidni za prostore koji se hlade povremeno. Za svakodnevno korišćenje i grejanje tokom zime, inverter se po pravilu isplati.",
    keyTakeaways: [
      "Inverter štedi struju pri dugotrajnom radu jer ne pali i gasi kompresor stalno",
      "Za povremeno hlađenje vikendice ili retko korišćene sobe, on/off je racionalan izbor",
      "Ako klimom i grejete, inverter je praktično obavezan zbog efikasnosti na niskim temperaturama",
      "Predimenzionisan uređaj je česta i skupa greška, snaga se bira prema kvadraturi i osunčanosti",
    ],
    publishedAt: "2026-07-01T09:00:00.000Z",
    body: [
      p("Pri kupovini klime prvo pitanje je obično brend, a drugo cena. Pitanje inverter ili običan uređaj često se preskoči, iako dugoročno utiče na trošak više nego izbor između dva slična brenda. Razlika nije marketinška, nego u načinu na koji uređaj radi."),
      h2("U čemu je stvarna razlika"),
      p("Običan (on/off) uređaj radi punom snagom dok ne postigne zadatu temperaturu, zatim se kompresor gasi, pa ponovo pali kad temperatura odstupi. Inverter kontinuirano prilagođava snagu kompresora, pa umesto ciklusa paljenja i gašenja radi tiho na sniženoj snazi i održava temperaturu bez oscilacija."),
      p("Posledice u praksi: inverter troši manje struje pri dugotrajnom radu jer izbegava energetski skupe startove kompresora, tiši je, i temperatura u prostoriji je stabilnija. Kod on/off modela oscilacije od stepen-dva i zvuk paljenja kompresora su normalna pojava."),
      h2("Kada se šta isplati"),
      p("Za stan u kom klima radi svaki dan tokom sezone, i posebno ako se koristi i za grejanje u prelaznim periodima ili tokom zime, inverter se isplati: razlika u ceni uređaja vraća se kroz niže račune, a komfor je primetno bolji. Savremeni inverter modeli sa oznakom za grejanje efikasno rade i na spoljnim temperaturama znatno ispod nule, gde on/off tehnologija gubi smisao."),
      p("On/off uređaj ostaje racionalan izbor za prostore koji se hlade povremeno i kratko: vikendica, gostinjska soba, pomoćni prostor. Tu se ušteda invertera ne stigne isplatiti, a niža cena kupovine je konkretna i odmah."),
      p("Nezavisno od tehnologije, snaga uređaja mora odgovarati prostoru. Predimenzionisana klima hladi naglo i gasi se pre nego što osuši vazduh, pa prostor deluje hladno a sparno, dok poddimenzionisana radi non-stop na maksimumu. Kvadratura, visina plafona, osunčanost i sprat utiču na izbor, i to je računica koju vredi proći sa serviserom pre kupovine, ne posle."),
    ],
    faq: [
      { question: "Da li inverter klima može da greje i zimi?", answer: "Da, savremeni inverter modeli efikasno greju i na spoljnim temperaturama od minus deset do minus petnaest stepeni, a pojedini modeli i niže. Za korišćenje kao primarno grejanje bitno je izabrati model deklarisan za rad na niskim temperaturama." },
      { question: "Kolika je razlika u potrošnji struje?", answer: "Zavisi od načina korišćenja, ali pri svakodnevnom višesatnom radu inverter po pravilu troši dvadeset do četrdeset procenata manje od on/off uređaja istog kapaciteta." },
      { question: "Koji kapacitet mi treba za stan od 50 kvadrata?", answer: "Za prosečnu prostoriju do 25 kvadrata dovoljno je 9000 BTU, za 25 do 35 kvadrata 12000 BTU, a veći ili otvoreni prostori zahtevaju 18000 BTU i više. Osunčanost i visina plafona pomeraju ovu računicu, pa je procena na licu mesta najpouzdanija." },
    ],
  },
];

export type ServicePageItem = {
  slug: "servis" | "montaza" | "popravka" | "dijagnostika";
  title: string;
  heroSubtitle: string;
  body: unknown[];
  checklist: { title: string; description: string }[];
  ctaBandTitle: string;
  ctaBandText: string;
  ctaBandBullets: string[];
  whyUs: { title: string; description: string }[];
  faq: { question: string; answer: string }[];
};

export const servicePages: ServicePageItem[] = [
  {
    slug: "servis",
    title: "Servis klima uređaja",
    heroSubtitle:
      "Redovno održavanje, dubinsko pranje i dezinfekcija klima uređaja na teritoriji celog Beograda.",
    body: [
      p("Vršimo redovan i veliki servis klima uređaja svih brendova u stanovima, kućama i poslovnim prostorima u Beogradu. Servis obuhvata čišćenje i dezinfekciju uređaja, proveru rada svih funkcija i kontrolu odvoda kondenzata, uz termin koji se unapred dogovara i poštuje."),
      h2("Zašto klima traži redovno održavanje"),
      p("Unutrašnja jedinica klime tokom rada provlači vazduh iz prostorije kroz filter i isparivač, a sa vazduhom i prašinu, vlagu i sve što gradski vazduh nosi. U beogradskim uslovima, uz saobraćaj i sezonu topola, filteri i izmenjivač se zaprljaju brže nego što većina korisnika očekuje. Posledice su uvek iste: slabiji protok vazduha, duži rad kompresora, veći račun za struju i, vremenom, neprijatan miris jer vlažne naslage na isparivaču postaju podloga za buđ."),
      p("U Klima Servisu Beograd mali servis radimo kao standardnu godišnju intervenciju: pranje i dezinfekcija filtera, čišćenje isparivača, provera odvoda kondenzata i kontrola svih režima rada. Veliki servis, sa rasklapanjem jedinice i dubinskim pranjem isparivača i turbine pod pritiskom, preporučujemo na dve do tri godine ili čim se pojavi miris i curenje koje redovan servis ne rešava."),
      h2("Mali i veliki servis: šta se radi i kada"),
      h3("Mali (redovni) servis"),
      p("Mali servis je standardna godišnja intervencija: pranje i dezinfekcija filtera, pregled isparivača, provera odvoda kondenzata i kontrola svih režima rada uređaja. Ne zahteva rasklapanje jedinice, traje kratko i dovoljan je za stambeni prostor u kom klima radi u normalnim uslovima, bez povećane količine prašine ili dima."),
      h3("Veliki servis"),
      p("Veliki servis podrazumeva potpuno rasklapanje unutrašnje jedinice, dubinsko pranje isparivača i ventilatora (turbine) pod pritiskom, čišćenje odvoda kondenzata i po potrebi proveru pritiska rashladnog gasa. Preporučujemo ga na svake dve do tri godine, ili odmah ako mali servis nije rešio neprijatan miris, primetili ste curenje vode ili je hlađenje i dalje slabo i pored redovnog održavanja."),
      h2("Koliko često treba servisirati klimu"),
      p("Za stan ili kuću sa uobičajenom upotrebom, jednom godišnje je dovoljno, po pravilu u proleće pred sezonu hlađenja. Ako klimu koristite i za grejanje tokom zime, servis pred zimsku sezonu je jednako važan, jer se isparivač prlja bez obzira na to da li uređaj hladi ili greje. Poslovni prostori, restorani i saloni sa povećanom količinom prašine ili vlage u vazduhu zahtevaju servis i do dva puta godišnje."),
      h2("Znaci da je servis potreban odmah"),
      p("Neprijatan miris pri uključivanju, kapanje vode iz unutrašnje jedinice, primetno slabije hlađenje uz iste podešene temperature i glasniji rad ventilatora su znaci koje ne treba gurati u sledeću sezonu. Začepljen odvod kondenzata ume da ošteti zid ispod jedinice, a zaprljan isparivač tera kompresor, pojedinačno najskuplji deo uređaja, da radi duže i pod većim opterećenjem nego što je projektovano. Servis obavljen na prve znake je po pravilu brža i jeftinija intervencija od popravke koja sledi kad se znaci ignorišu."),
      bullets([
        "Potrošnja struje raste jer kompresor radi duže da bi nadoknadio smanjen protok vazduha",
        "Neprijatan miris i lošiji kvalitet vazduha u prostoriji",
        "Curenje kondenzovane vode usled začepljenog odvoda",
        "Ubrzano habanje kompresora, pojedinačno najskupljeg dela za zamenu",
      ]),
    ],
    checklist: [
      { title: "Pranje i dezinfekcija filtera", description: "" },
      { title: "Čišćenje isparivača", description: "" },
      { title: "Provera odvoda kondenzata", description: "" },
      { title: "Kontrola svih režima rada", description: "" },
      { title: "Dubinsko pranje kod velikog servisa", description: "" },
    ],
    ctaBandTitle: "Sezona samo što nije počela?",
    ctaBandText:
      "Zakažite servis pre prvih vrućina, termini u maju i junu se najbrže popune. Van sezone dolazimo obično u roku od dva radna dana.",
    ctaBandBullets: [
      "Termin koji se unapred dogovara i poštuje",
      "Servis svih brendova klima uređaja",
      "Cena poznata pre dolaska",
      "Garancija na izvedeni servis",
    ],
    whyUs: [
      { title: "Bez skrivenih doplata", description: "Cena servisa se zna pre dolaska, doplate postoje samo za unapred saopštene stavke." },
      { title: "Kompletna oprema", description: "Dubinsko pranje pod pritiskom i dezinfekcija, ne samo brisanje filtera." },
      { title: "Svi brendovi", description: "Od Daikin i Mitsubishi do Vivax i Midea, servisiramo sve što se ugrađuje u Beogradu." },
      { title: "Cela godina", description: "Servis radimo i van sezone, kad su termini fleksibilniji a uređaj spreman za leto." },
    ],
    faq: [
      { question: "Koliko traje servis klime?", answer: "Mali servis traje 45 minuta do sat vremena po uređaju, a veliki servis sa rasklapanjem jedinice dva do tri sata." },
      { question: "Da li servisirate sve brendove?", answer: "Da, servisiramo sve brendove klima uređaja dostupne na našem tržištu, nezavisno od toga gde je uređaj kupljen." },
      { question: "Kada je najbolje zakazati servis?", answer: "Idealno u proleće, pre početka sezone hlađenja. Termini van špica se lakše dogovaraju, a uređaj dočeka leto spreman." },
    ],
  },
  {
    slug: "montaza",
    title: "Montaža klima uređaja",
    heroSubtitle:
      "Profesionalna ugradnja sa vakumiranjem, urednom trasom i pozicijom usklađenom sa pravilima zgrade.",
    body: [
      p("Vršimo montažu klima uređaja svih proizvođača u stanovima, kućama i poslovnim prostorima na teritoriji Beograda. Standardna montaža obuhvata postavljanje obe jedinice, instalacionu trasu do tri metra sa osnovnim materijalom, vakumiranje sistema i puštanje u rad sa proverom svih funkcija."),
      h2("Šta razlikuje urednu montažu"),
      p("Klima uređaj je onoliko dobar koliko je dobra njegova montaža. Ista jedinica, ugrađena sa vakumiranjem i pravilno dimenzionisanom trasom, radiće godinama bolje od identične jedinice priključene na brzinu. Vakumiranje, izvlačenje vazduha i vlage iz instalacije pre puštanja gasa, je korak koji se kod najjeftinijih montaža preskače, a upravo on određuje da li će kompresor raditi u uslovima za koje je projektovan."),
      p("U Klima Servisu Beograd svaka montaža podrazumeva vakuum pumpu, proveru pritiska pre puštanja u rad i urednu trasu, u kanalici ili skrivenu u zid po dogovoru. Pozicija spoljne jedinice se bira tako da bude dostupna za budući servis i usklađena sa pravilima zgrade, što je u beogradskim novogradnjama sa definisanim pozicijama i starijim zgradama sa zaštićenim fasadama često ključni deo dogovora pre same ugradnje."),
      h2("Izbor snage uređaja pre montaže"),
      p("Pre nego što se dogovori termin montaže, vredi proveriti da li je izabrana snaga uređaja odgovarajuća za prostor. Predimenzionisana klima hladi naglo pa se gasi pre nego što izvuče vlagu iz vazduha, zbog čega prostor deluje hladno, a sparno. Poddimenzionisana radi neprekidno na maksimumu, troši više struje i brže se haba. Kvadratura, visina plafona, orijentacija prema suncu i broj spoljnih zidova menjaju računicu, i to je procena koju radimo pre kupovine, ne posle."),
      h2("Priprema koja štedi novac"),
      p("Najveći broj doplata kod montaže dolazi od stvari koje su se mogle znati unapred: trasa duža od standardne, potreba za radom na visini, probijanje armiranog zida ili pumpica za kondenzat tamo gde odvod nema prirodan pad. Zato pozicije i trasu komentarišemo pre termina, po potrebi i izlaskom na adresu, kako bi konačna cena bila poznata pre početka rada, a ne posle bušenja prvog otvora. Ako kupujete uređaj iz naše ponude, standardna montaža je uračunata u cenu klime."),
      h2("Šta dobijate uz svaku montažu"),
      bullets([
        "Vakumiranje sistema pre puštanja gasa, bez izuzetka",
        "Nosače spoljne jedinice dimenzionisane prema težini uređaja i poziciji",
        "Urednu trasu, u kanalici ili skrivenu u zid po dogovoru",
        "Proveru rada svih režima pre nego što serviser napusti adresu",
        "Pisanu potvrdu o izvršenoj montaži i garanciju na rad",
      ]),
    ],
    checklist: [
      { title: "Postavljanje obe jedinice", description: "" },
      { title: "Trasa do 3m sa materijalom", description: "" },
      { title: "Vakumiranje sistema", description: "" },
      { title: "Puštanje u rad i provera", description: "" },
      { title: "Dogovor pozicije pre termina", description: "" },
    ],
    ctaBandTitle: "Kupili ste klimu ili tek birate?",
    ctaBandText:
      "Javite se pre kupovine, proverićemo da li izabrani model odgovara prostoru i da li pozicija zahteva nešto posebno. Savet je besplatan.",
    ctaBandBullets: [
      "Montaža uređaja kupljenih bilo gde",
      "Standardna montaža uključena uz klime iz naše ponude",
      "Vakumiranje kao obavezan deo svake ugradnje",
      "Garancija na izvedenu montažu",
    ],
    whyUs: [
      { title: "Vakumiranje bez izuzetka", description: "Svaka instalacija se vakumira pre puštanja gasa, bez obzira na dužinu trase." },
      { title: "Cena pre bušenja", description: "Doplate se saopštavaju pre početka rada, ne na kraju." },
      { title: "Uredna trasa", description: "Kanalica u boji zida ili skrivena instalacija, bez visećih kablova preko fasade." },
      { title: "Poznavanje beogradskih zgrada", description: "Od novogradnje sa propisanim pozicijama do starih zgrada u centru." },
    ],
    faq: [
      { question: "Da li montirate klimu kupljenu u drugoj radnji?", answer: "Da, montiramo uređaje kupljene bilo gde, uz istu proceduru i garanciju na rad kao za uređaje iz naše ponude." },
      { question: "Šta je uključeno u standardnu montažu?", answer: "Postavljanje obe jedinice, trasa do tri metra sa osnovnim materijalom, nosači, vakumiranje i puštanje u rad. Duža trasa i posebni uslovi se naplaćuju po cenovniku." },
      { question: "Da li radite montaže na visini?", answer: "Da, za pozicije koje zahtevaju rad na visini ili alpinističku opremu dajemo posebnu ponudu nakon procene." },
    ],
  },
  {
    slug: "popravka",
    title: "Popravka klima uređaja",
    heroSubtitle:
      "Dijagnostika i otklanjanje kvarova na licu mesta, sa jasnom procenom isplativosti pre svake popravke.",
    body: [
      p("Vršimo popravku klima uređaja svih brendova na teritoriji Beograda. Intervencija počinje dijagnostikom kojom se utvrđuje uzrok kvara, nakon čega dobijate cenu popravke pre nego što rad počne. Većina kvarova se otklanja na licu mesta, u jednoj poseti."),
      h2("Najčešći kvarovi i njihovi uzroci"),
      p("Klima koja ne hladi najčešće je izgubila deo rashladnog gasa, a gas se ne troši, on negde curi. Zato ozbiljna popravka podrazumeva pronalazak i saniranje mesta curenja, pa tek onda dopunu, jer dopuna bez sanacije znači istu intervenciju svake sezone. Curenje vode iz unutrašnje jedinice po pravilu je začepljen odvod kondenzata, dok uređaj koji se pali i gasi ili uopšte ne reaguje obično ima problem sa senzorima, elektronikom ili kondenzatorom spoljne jedinice."),
      p("U Klima Servisu Beograd dijagnostiku radimo merenjem, ne nagađanjem: pritisak gasa, temperature na izmenjivačima i rad elektronike proveravaju se instrumentima pre nego što se bilo šta rastavi. Na osnovu nalaza dobijate tačan opis kvara i cenu otklanjanja, a na zamenjene delove i rad dajemo garanciju."),
      h2("Simptomi i verovatni uzroci"),
      bullets([
        "Klima duva, ali vazduh nije hladan, najčešće znači gubitak gasa ili zaprljan isparivač",
        "Voda kaplje iz unutrašnje jedinice, znak začepljenog ili nagnutog odvoda kondenzata",
        "Uređaj se pali i odmah gasi, obično kvar na senzoru, kondenzatoru ili elektronskoj ploči",
        "Led na cevima ili spoljnoj jedinici ukazuje na nizak pritisak gasa usled curenja",
        "Glasno zujanje ili lupanje pri radu, obično olabavljen ili istrošen deo ventilatora, ređe kompresora",
      ]),
      h2("Popraviti ili zameniti uređaj"),
      p("Kod starijih uređaja postoji granica posle koje popravka nema ekonomskog smisla. Kvar kompresora na uređaju starom dvanaest godina ili elektronika koja košta pola cene novog uređaja su situacije u kojima ćemo to otvoreno reći, uz računicu koja poredi cenu popravke, očekivani preostali vek uređaja i cenu zamene. Odluka je uvek vaša, ali sa brojkama na stolu, ne posle plaćene popravke koja se nije isplatila."),
      p("Garancija na popravku pokriva i ugrađeni deo i rad. Ako se isti kvar ponovi u garantnom roku, izlazak i intervencija su besplatni. Ova garancija ne pokriva nov, nepovezan kvar niti štetu nastalu nestručnim rukovanjem posle popravke."),
    ],
    checklist: [
      { title: "Dijagnostika instrumentima", description: "" },
      { title: "Pronalazak i sanacija curenja", description: "" },
      { title: "Zamena delova na licu mesta", description: "" },
      { title: "Čišćenje odvoda kondenzata", description: "" },
      { title: "Procena isplativosti popravke", description: "" },
    ],
    ctaBandTitle: "Klima otkazala usred sezone?",
    ctaBandText:
      "Opišite kvar telefonom, za većinu simptoma možemo odmah reći šta je verovatan uzrok i koliko košta otklanjanje.",
    ctaBandBullets: [
      "Dijagnostika pre svake popravke",
      "Cena poznata pre početka rada",
      "Garancija na delove i rad",
      "Iskrena procena kad popravka nije isplativa",
    ],
    whyUs: [
      { title: "Merenje, ne nagađanje", description: "Dijagnostika instrumentima pre nego što se bilo šta rastavi ili naplati." },
      { title: "Curenje se sanira, ne prikriva", description: "Dopuna gasa ide tek posle pronalaska i otklanjanja uzroka gubitka." },
      { title: "Delovi sa garancijom", description: "Ugrađujemo originalne ili odgovarajuće delove uz garanciju na rad." },
      { title: "Otvorena računica", description: "Kad popravka nije isplativa, dobijate poređenje sa cenom zamene, pa odlučujete." },
    ],
    faq: [
      { question: "Koliko košta izlazak i dijagnostika?", answer: "Dijagnostika se naplaćuje po cenovniku, a ako se odlučite za popravku kod nas, uračunava se u cenu intervencije." },
      { question: "Da li dopunjavate freon bez popravke curenja?", answer: "Na izričit zahtev da, ali uvek uz jasno upozorenje da je to privremeno rešenje i da će se gubitak ponoviti." },
      { question: "Koliko brzo izlazite na teren u sezoni?", answer: "U špicu sezone obično u roku od 24 do 48 sati, van sezone po pravilu već naredni radni dan." },
    ],
  },
  {
    slug: "dijagnostika",
    title: "Dijagnostika kvara",
    heroSubtitle:
      "Merenje pritiska, temperatura i rada elektronike, sa pisanim nalazom i predlogom rešenja.",
    body: [
      p("Vršimo dijagnostiku kvarova na klima uređajima svih brendova u Beogradu. Pregled obuhvata merenje pritiska rashladnog gasa, kontrolu temperatura na izmenjivačima, proveru elektronike i senzora, i pregled instalacione trase. Rezultat je jasan nalaz: šta je uzrok problema, šta je potrebno za otklanjanje i koliko to košta."),
      h2("Kada dijagnostika ima smisla kao zasebna usluga"),
      p("Dijagnostika kao samostalna usluga najkorisnija je kad simptomi nisu jednoznačni: uređaj hladi slabije ali radi, potrošnja struje je porasla bez očiglednog razloga, ili se problem javlja povremeno pa ga je teško uhvatiti. Korisna je i pre kupovine stana sa ugrađenim klimama, kao i kad želite nezavisnu procenu posle ponude drugog servisa koja deluje predimenzionisano."),
      p("U Klima Servisu Beograd dijagnostika znači merenje instrumentima: manometri za pritisak gasa, termometri za temperature razmene, provera napona i rada senzora. Na osnovu izmerenih vrednosti dobijate nalaz sa opisom stanja uređaja i, ako postoji kvar, tačnu cenu otklanjanja. Ako se odlučite da popravku radimo mi, cena dijagnostike se uračunava u intervenciju."),
      h2("Šta nalaz obuhvata"),
      p("Nalaz sadrži izmerene vrednosti pritiska i temperatura, ocenu stanja filtera i izmenjivača, proveru odvoda kondenzata i zaključak o uzroku problema sa predlogom rešenja. Kod starijih uređaja nalaz uključuje i procenu preostalog veka, kako biste odluku o popravci ili zameni doneli na osnovu brojki. Pisani nalaz možete koristiti i kao osnov za reklamaciju kod prodavca ili drugog izvođača montaže."),
      h2("Dijagnostika pre kupovine stana ili posle tuđe montaže"),
      p("Dijagnostiku često tražite i kad kupujete stan sa ugrađenim klima uređajima, pre nego što se dogovori cena, ili kad želite nezavisnu proveru posle montaže koju je radio neko drugi. U oba slučaja merenje pokazuje ono što se golim okom ne vidi: da li je instalacija pravilno vakumirana, da li spoljna jedinica ima dovoljan protok vazduha oko sebe i da li je pritisak gasa u granicama koje proizvođač propisuje. Ako se pronađe nedostatak nastao lošom montažom, nalaz vam služi kao osnov za razgovor sa izvođačem koji je posao radio."),
    ],
    checklist: [
      { title: "Merenje pritiska gasa", description: "" },
      { title: "Kontrola temperatura razmene", description: "" },
      { title: "Provera elektronike i senzora", description: "" },
      { title: "Pregled instalacione trase", description: "" },
      { title: "Pisani nalaz sa predlogom", description: "" },
    ],
    ctaBandTitle: "Niste sigurni šta je sa uređajem?",
    ctaBandText:
      "Opišite simptome telefonom, reći ćemo vam da li je dijagnostika potrebna ili je problem rešiv običnim servisom.",
    ctaBandBullets: [
      "Merenje instrumentima, ne procena od oka",
      "Nalaz sa izmerenim vrednostima",
      "Cena dijagnostike se uračunava u popravku",
      "Nezavisna procena tuđih ponuda",
    ],
    whyUs: [
      { title: "Instrumenti, ne utisak", description: "Svaki zaključak stoji na izmerenoj vrednosti koju možete videti." },
      { title: "Nalaz koji ostaje", description: "Pisani rezultat pregleda, upotrebljiv i za reklamacije." },
      { title: "Bez naduvanih popravki", description: "Predlažemo samo ono što merenja pokažu da je potrebno." },
      { title: "Uračunato u popravku", description: "Ako popravku radimo mi, dijagnostiku ne plaćate duplo." },
    ],
    faq: [
      { question: "Da li mogu da dobijem samo dijagnostiku bez popravke?", answer: "Da, dijagnostika je samostalna usluga i nalaz je vaš, nezavisno od toga kod koga radite popravku." },
      { question: "Koliko traje dijagnostika?", answer: "Standardni pregled sa merenjima traje 30 do 45 minuta po uređaju." },
      { question: "Može li dijagnostika da otkrije curenje gasa?", answer: "Merenje pritiska pokazuje da li gasa nedostaje, a lociranje samog mesta curenja radi se detektorom ili UV sredstvom i po pravilu je deo popravke." },
    ],
  },
];
