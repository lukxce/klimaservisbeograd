export function brandSlug(brand: string): string {
  return brand
    .normalize("NFD")
    .replace(/[̀-ͯ]/g, "")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

export function btuBucket(btu: number): 9000 | 12000 | 18000 | 24000 {
  if (btu <= 10500) return 9000;
  if (btu <= 15000) return 12000;
  if (btu <= 21000) return 18000;
  return 24000;
}

export function capacitySlug(btu: number): string {
  return `${btu}-btu`;
}

type FaqItem = { question: string; answer: string };

type BrandHub = {
  slug: string;
  name: string;
  subtitle: string;
  intro: string[];
  faq: FaqItem[];
};

export const BRAND_HUBS: BrandHub[] = [
  {
    slug: "lg",
    name: "LG",
    subtitle: "Najtraženiji brend na beogradskom tržištu i najveći deo naše ponude.",
    intro: [
      "Kad god neko u Beogradu pomene kupovinu klime, LG je gotovo uvek jedan od prvih brendova koji se pomene - i to se ogleda u strukturi naše ponude, gde LG čini najveći broj dostupnih modela. Zahvaljujući Dual Inverter kompresoru, uređaji rade tiše i brže dostižu podešenu temperaturu nego stariji, ne-inverter modeli.",
      "Asortiman ide od pristupačnijih Standard i Special serija do Dualcool AI Air Deluxe linije sa Wi-Fi upravljanjem i pametnim funkcijama. Za stan u soliteru na Novom Beogradu ili kuću na periferiji, u LG ponudi se najlakše pronalazi model koji odgovara i kvadraturi prostorije i raspoloživom budžetu.",
    ],
    faq: [
      {
        question: "Zašto se LG klime najčešće biraju u Beogradu?",
        answer:
          "LG kombinuje razvijenu inverter tehnologiju sa širokim rasponom modela po ceni - od osnovnih do naprednih linija - pa gotovo svako domaćinstvo može pronaći model koji odgovara i prostoru i budžetu.",
      },
      {
        question: "Koliko košta ugradnja LG klime u Beogradu?",
        answer:
          "Montaža standardnog LG uređaja od 9 ili 12 BTU košta od 9200 dinara, za 18 BTU od 11500 dinara, a za 24 BTU od 13800 dinara. Cena uređaja je posebna stavka i prikazana je na stranici svakog modela.",
      },
      {
        question: "Koliko traje garancija na LG klimu?",
        answer:
          "Garancija zavisi od serije i najčešće iznosi od 2 do 5 godina - tačan period je naveden u specifikacijama na stranici svakog modela.",
      },
    ],
  },
  {
    slug: "midea",
    name: "Midea",
    subtitle: "Najpristupačnija inverter opcija za manje stanove i budžetske kupovine.",
    intro: [
      "Midea je jedan od najvećih svetskih proizvođača rashladne opreme - toliko veliki da proizvodi uređaje i za druge brendove koje ćete videti na tržištu. Zahvaljujući obimu proizvodnje, uspeva da ponudi inverter tehnologiju - manju potrošnju struje i tiši rad - po nižoj ceni nego većina konkurencije.",
      "U Beogradu je ovo čest izbor za garsonjere, iznajmljivanje stanova ili kao dodatni uređaj u kući gde vrhunske performanse nisu presudne, ali pouzdanost i razumna cena jesu.",
    ],
    faq: [
      {
        question: "Da li se isplati Midea klima?",
        answer:
          "Za manje prostore i budžetske kupovine da - Midea nudi inverter prednosti po najpristupačnijoj ceni u našoj ponudi, uz pouzdanost proizvođača koji opslužuje veliki deo svetskog tržišta.",
      },
      {
        question: "Koliko košta Midea klima sa montažom u Beogradu?",
        answer:
          "Cena samog uređaja prikazana je na stranici svakog modela, dok montaža počinje od 9200 dinara za 9 i 12 BTU, odnosno od 11500 dinara za 18 BTU uređaje.",
      },
    ],
  },
  {
    slug: "hisense",
    name: "Hisense",
    subtitle: "Srednja kategorija - bolja opremljenost od budžetskih modela, niža cena od premium brendova.",
    intro: [
      "Hisense je poslednjih godina agresivno proširio prisustvo na evropskom tržištu, a klima uređaji nisu izuzetak. Njihove inverter linije pozicionirane su tačno između najjeftinijih i vodećih svetskih brendova - bolja opremljenost i efikasnost od ulaznog nivoa, po ceni koja i dalje ostaje pristupačna.",
      "U beogradskoj ponudi ovo je često izbor kupaca koji žele nešto više od osnovnog modela, a ne žele da plate premiju vodećeg brenda kao što je Mitsubishi Electric.",
    ],
    faq: [
      {
        question: "Da li je Hisense dobar izbor za stan u Beogradu?",
        answer:
          "Da, posebno za kupce koji traže bolju opremljenost od budžetskih modela bez plaćanja pune cene premium brenda - Hisense nudi solidan kompromis u srednjoj cenovnoj kategoriji.",
      },
      {
        question: "Koliko košta ugradnja Hisense klime u Beogradu?",
        answer:
          "Montaža uređaja od 9 ili 12 BTU košta od 9200 dinara, a za 18 BTU modele od 11500 dinara. Cena samog uređaja je prikazana na stranici svakog modela.",
      },
    ],
  },
  {
    slug: "vaillant",
    name: "Vaillant",
    subtitle: "Nemački proizvođač poznatiji po kotlovima, sada i u segmentu klima uređaja i toplotnih pumpi.",
    intro: [
      "Vaillant decenijama gradi reputaciju u proizvodnji kotlova i sistema grejanja u Nemačkoj, a poslednjih godina proširuje ponudu na klima uređaje i toplotne pumpe. Mnogi kupci u Beogradu koji već imaju Vaillant kotao u kući biraju isti brend i za klimu, iz poverenja stečenog kroz drugi proizvod.",
      "U našoj ponudi Vaillant spada u viši cenovni razred, namenjen kupcima kojima je renome proizvođača i dugoročna pouzdanost prioritet u odnosu na najnižu moguću cenu.",
    ],
    faq: [
      {
        question: "Da li je Vaillant klima dobar izbor?",
        answer:
          "Vaillant je etabliran nemački proizvođač sa dugom tradicijom u grejnoj tehnici, i taj kvalitet izrade prenosi i na ponudu klima uređaja - posebno cenjeno kod kupaca koji već poznaju brend iz sveta kotlova.",
      },
      {
        question: "Koliko košta ugradnja Vaillant klime u Beogradu?",
        answer:
          "Montaža zavisi od kapaciteta - od 9200 dinara za 9 i 12 BTU, do 13800 dinara za najjače, 24 BTU modele. Cena uređaja prikazana je na stranici svakog modela.",
      },
    ],
  },
  {
    slug: "mitsubishi-electric",
    name: "Mitsubishi Electric",
    subtitle: "Premium segment naše ponude - tih rad i dug radni vek kao glavni argument.",
    intro: [
      "Mitsubishi Electric je jedan od najstarijih proizvođača klima uređaja na svetu, sa reputacijom izgrađenom na tihom radu, pouzdanosti i dugom veku trajanja. U beogradskim stanovima gde su spavaće sobe blizu dnevnog boravka, nivo buke uređaja često je presudan faktor pri izboru - i to je oblast u kojoj ovaj brend tradicionalno prednjači.",
      "Cena je viša od proseka u našoj ponudi, ali kupci koji biraju Mitsubishi Electric najčešće to rade svesno - žele uređaj koji neće menjati narednu deceniju i po.",
    ],
    faq: [
      {
        question: "Zašto je Mitsubishi Electric klima skuplja?",
        answer:
          "Cena odražava dugogodišnju reputaciju za tih rad, pouzdanost i dug radni vek - kupci ga najčešće biraju svesno, kao dugoročnu investiciju umesto najjeftinijeg rešenja.",
      },
      {
        question: "Koliko košta ugradnja Mitsubishi Electric klime u Beogradu?",
        answer:
          "Montaža počinje od 9200 dinara za 9 i 12 BTU uređaje. Cena samog uređaja, koja je viša od proseka zbog premium pozicioniranja, prikazana je na stranici svakog modela.",
      },
    ],
  },
  {
    slug: "romstal",
    name: "Romstal",
    subtitle: "Regionalni proizvođač sa iskustvom prilagođenim balkanskim uslovima, u srednjoj cenovnoj kategoriji.",
    intro: [
      "Romstal je prisutan na tržištu grejne i rashladne tehnike u regionu godinama, sa opremom testiranom na lokalnom podneblju. Za kupce u Beogradu koji žele proveren uređaj bez plaćanja premije za globalno prepoznatljiv brend, ovo je često razumna sredina.",
    ],
    faq: [
      {
        question: "Koliko košta ugradnja Romstal klime u Beogradu?",
        answer:
          "Montaža zavisi od kapaciteta i kreće se od 9200 dinara za 9 i 12 BTU uređaje. Cena samog uređaja prikazana je na stranici svakog modela.",
      },
    ],
  },
  {
    slug: "clivet",
    name: "CLIVET",
    subtitle: "Italijanski proizvođač sa poreklom u komercijalnim sistemima, u stambenoj ponudi za zahtevnije kupce.",
    intro: [
      "CLIVET gradi reputaciju prvenstveno kroz profesionalne i komercijalne HVAC sisteme - klimatizaciju poslovnih zgrada i većih objekata širom Beograda. Stambene inverter linije nasleđuju to isto inženjersko iskustvo, prilagođeno manjim prostorima poput stanova i kuća.",
    ],
    faq: [
      {
        question: "Koliko košta ugradnja CLIVET klime u Beogradu?",
        answer:
          "Montaža počinje od 9200 dinara za 9 i 12 BTU uređaje. Cena samog uređaja prikazana je na stranici svakog modela.",
      },
    ],
  },
];

type CapacityHub = {
  btu: 9000 | 12000 | 18000 | 24000;
  colloquial: string;
  roomSize: string;
  installFrom: number;
  intro: string[];
  faq: FaqItem[];
};

export const CAPACITY_HUBS: CapacityHub[] = [
  {
    btu: 9000,
    colloquial: "9-tka",
    roomSize: "do 20-25 kvadrata",
    installFrom: 9200,
    intro: [
      "U beogradskim stanovima, 9000 BTU ('9-tka') je standardni izbor za spavaće sobe i manje kancelarije - prostorije do 20-25 kvadrata. Ovo je uobičajen kapacitet za tipičnu spavaću sobu u soliteru na Novom Beogradu, stanu u Vračaru ili manjoj kancelariji u centru grada.",
      "Manji uređaj troši manje struje, ali ako prostorija prelazi preporučenu kvadraturu, klima će raditi neprekidno na maksimumu i teže će održavati temperaturu - zato kapacitet treba birati prema kvadraturi, a ne isključivo prema ceni.",
    ],
    faq: [
      {
        question: "Za koju sobu je dovoljna klima od 9000 BTU?",
        answer:
          "9000 BTU, '9-tka', pokriva prostorije do oko 20-25 kvadrata - standardne spavaće sobe i manje kancelarije, uz uobičajenu izolaciju i standardnu veličinu prozora.",
      },
      {
        question: "Koliko košta ugradnja klime od 9000 BTU u Beogradu?",
        answer:
          "Montaža uređaja od 9000 BTU košta od 9200 dinara za osnovnu instalaciju do tri metra. Cena uređaja prikazana je posebno na stranici svakog modela.",
      },
    ],
  },
  {
    btu: 12000,
    colloquial: "12-ica",
    roomSize: "od 25 do 35 kvadrata",
    installFrom: 9200,
    intro: [
      "12000 BTU ('12-ica') je najprodavaniji kapacitet u Beogradu i pokriva prostorije od 25 do 35 kvadrata - najčešće dnevne sobe standardne veličine. U novogradnji, gde je dnevni boravak često spojen sa trpezarijom, ovo je i minimalna preporuka za komforan rad tokom leta.",
      "Mnogi kupci namerno biraju jači uređaj nego što je striktno potrebno za prostoriju - klima koja ne mora neprekidno da radi na punom kapacitetu troši manje i traje duže.",
    ],
    faq: [
      {
        question: "Za koju prostoriju je klima od 12000 BTU?",
        answer:
          "12000 BTU, '12-ica', pokriva prostorije od 25 do 35 kvadrata i najčešći je izbor za dnevne sobe standardne veličine u beogradskim stanovima i kućama.",
      },
      {
        question: "Koliko košta ugradnja klime od 12000 BTU u Beogradu?",
        answer:
          "Cena montaže je ista kao i za 9000 BTU - od 9200 dinara za osnovnu instalaciju do tri metra. Cena uređaja prikazana je na stranici svakog modela.",
      },
    ],
  },
  {
    btu: 18000,
    colloquial: "18-ica",
    roomSize: "od 35 do 50 kvadrata",
    installFrom: 11500,
    intro: [
      "18000 BTU ('18-ica') se najčešće bira za otvorene prostore u novogradnji, gde su kuhinja, trpezarija i dnevna soba spojeni u jednu celinu od 35 do 50 kvadrata, ili za veće poslovne kancelarije.",
      "Jača spoljašnja jedinica i duže cevi znače da je montaža nešto skuplja nego kod manjih kapaciteta - to važi za sve brendove podjednako, ne samo za pojedine proizvođače.",
    ],
    faq: [
      {
        question: "Za koji prostor je klima od 18000 BTU?",
        answer:
          "18000 BTU, '18-ica', pokriva prostorije od 35 do 50 kvadrata - najčešće otvorene dnevne prostore spojene sa kuhinjom, tipične za noviju beogradsku gradnju.",
      },
      {
        question: "Koliko košta ugradnja klime od 18000 BTU u Beogradu?",
        answer:
          "Montaža uređaja od 18000 BTU košta od 11500 dinara, zbog dužih cevi instalacije i veće spoljašnje jedinice. Cena uređaja prikazana je na stranici svakog modela.",
      },
    ],
  },
  {
    btu: 24000,
    colloquial: "24-ica",
    roomSize: "preko 50 kvadrata",
    installFrom: 13800,
    intro: [
      "24000 BTU ('24-ica') je najjači standardni kapacitet u ponudi, namenjen prostorijama preko 50 kvadrata - poslovnim prostorima, salama za sastanke ili stanovima i kućama sa velikim otvorenim planom.",
      "Za ovaj kapacitet posebno preporučujemo procenu na licu mesta pre kupovine - u velikom prostoru, potcenjen kapacitet nikada neće efikasno rashladiti ili zagrejati prostoriju, dok precenjen znači nepotrebnu potrošnju struje.",
    ],
    faq: [
      {
        question: "Za koji prostor je klima od 24000 BTU?",
        answer:
          "24000 BTU, '24-ica', namenjena je prostorijama preko 50 kvadrata - većim poslovnim prostorima ili stanovima i kućama sa otvorenim planom prostora.",
      },
      {
        question: "Koliko košta ugradnja klime od 24000 BTU u Beogradu?",
        answer:
          "Montaža uređaja od 24000 BTU košta od 13800 dinara, zbog najduže instalacije i najveće spoljašnje jedinice u ponudi. Cena uređaja prikazana je na stranici svakog modela.",
      },
    ],
  },
];
