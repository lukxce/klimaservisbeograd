import type { Metadata } from "next";
import Link from "next/link";

import { Container } from "@/components/Container";
import { PageHero } from "@/components/PageHero";
import { ClosingCta } from "@/components/ClosingCta";
import { JsonLd } from "@/components/JsonLd";
import { getSiteSettings } from "@/lib/data";
import { SITE_URL } from "@/lib/site-config";

const PATH = "/servis-klime-zemun";

export async function generateMetadata(): Promise<Metadata> {
  const settings = await getSiteSettings();
  const title = "Servis klime Zemun | montaža, čišćenje i popravka";
  const description = `Servis klima uređaja u Zemunu: starija gradnja, kuće i stambene zgrade. Montaža, dubinsko pranje, dopuna gasa i hitne popravke. Pozovite ${settings.phone}.`;

  return {
    title,
    description,
    alternates: { canonical: PATH },
    openGraph: { title, description, type: "website", url: `${SITE_URL}${PATH}` },
  };
}

const services = [
  {
    title: "Servis i dubinsko pranje klime",
    text: "U zemunskim kućama uređaji često rade duže po sezoni nego u stanovima, jer greju i prelazne mesece. Zato dubinsko pranje isparivača i turbine radimo temeljno, sa dezinfekcijom i proverom prohodnosti odvoda kondenzata.",
    href: "/usluge/servis",
  },
  {
    title: "Montaža u kući i starijoj zgradi",
    text: "Kod kuća je pozicija spoljne jedinice obično slobodna, pa se posao svodi na najkraću i najtišu trasu. Kod starijih zgrada prvo proveravamo debljinu i tip zida, jer opeka i mešovita gradnja traže drugačiji pristup od betona.",
    href: "/usluge/montaza",
  },
  {
    title: "Popravka, dopuna gasa i zamena delova",
    text: "Stariji uređaji u Zemunu najčešće otkazuju zbog curenja gasa na spojevima, kondenzatora ili step motora klapne. Pre bilo kakve dopune tražimo mesto curenja, jer se gas ne troši sam od sebe.",
    href: "/usluge/popravka",
  },
  {
    title: "Dijagnostika zatečene instalacije",
    text: "Kupili ste kuću ili stan sa postojećom klimom nepoznate starosti. Izlazimo, merimo pritisak, proveravamo instalaciju i elektroniku i dajemo pisanu konstataciju sa procenom da li se uređaj isplati servisirati ili menjati.",
    href: "/usluge/dijagnostika",
  },
];

const faq = [
  {
    question: "Koje delove Zemuna pokrivate?",
    answer:
      "Ceo Zemun i okolna naselja: staro gradsko jezgro i Gardoš, centar oko Glavne ulice, Novi Zemun, Gornji grad, Altina, Batajnica, Ugrinovci, Zemun Polje i Kamendin. Za Batajnicu i naselja dalje od centra termin dogovaramo unapred da bismo izlazak spojili sa drugim intervencijama u tom delu.",
  },
  {
    question: "Da li montaža u kući košta manje nego u zgradi?",
    answer:
      "Osnovna cena montaže je ista i zavisi od jačine uređaja, ne od tipa objekta. Kuća je u praksi često jeftinija na kraju, jer nema rada na visini ni doplate za pristup fasadi, a pozicija spoljne jedinice u prizemlju ili na zidu do metar i po visine je dostupna bez posebne opreme. Ono što ume da poskupi posao u kući je duža trasa, kada jedinica ide na suprotnu stranu objekta.",
  },
  {
    question: "Šta je specifično kod montaže u starim zemunskim kućama?",
    answer:
      "Zidovi od pune opeke debljine i preko pedeset centimetara, ponekad sa naknadno dodatom izolacijom ili unutrašnjim oblogama. Bušenje traje duže i zahteva dužu krunu za prodor, a prolaz se planira tako da izlazi na čistom mestu sa spoljne strane. Kod objekata u zaštićenoj celini Gardoša postoje i ograničenja za intervenciju na uličnoj fasadi, pa jedinicu po pravilu vodimo na dvorišnu stranu.",
  },
  {
    question: "Radite li klime u poslovnim prostorima u Glavnoj ulici?",
    answer:
      "Da. Za lokale i kancelarije radimo servis van radnog vremena kada je to potrebno, jer dubinsko pranje unutrašnje jedinice zahteva da prostor bude prazan sat do dva. Za lokale u zaštićenom jezgru pozicija spoljne jedinice se dogovara pažljivije nego drugde.",
  },
  {
    question: "Koliko brzo možete da izađete u Zemun?",
    answer:
      "Za centar Zemuna i Novi Zemun najčešće isti ili sledeći radni dan. U jeku sezone, u julu i avgustu, rokovi se produžavaju, pa se za redovan servis isplati javiti u maju ili junu, kada nema gužve i termin je slobodan odmah.",
  },
  {
    question: "Klima mi greje slabije nego ranije, da li je gotova?",
    answer:
      "Ne nužno. Slabije grejanje kod starijih uređaja najčešće ima tri uzroka: prljav isparivač koji smanjuje protok vazduha, nizak nivo gasa zbog sporog curenja, ili zaleđivanje spoljne jedinice jer defrost ciklus ne radi kako treba. Sva tri se utvrde na licu mesta i prva dva se po pravilu popravljaju, bez zamene uređaja.",
  },
];

export default async function ServisKlimeZemunPage() {
  const settings = await getSiteSettings();

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Početna", item: SITE_URL },
      { "@type": "ListItem", position: 2, name: "Servis klime Zemun", item: `${SITE_URL}${PATH}` },
    ],
  };

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faq.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: { "@type": "Answer", text: item.answer },
    })),
  };

  const serviceJsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: "Servis i montaža klima uređaja",
    provider: { "@type": "HVACBusiness", name: settings.title, telephone: settings.phone },
    areaServed: { "@type": "Place", name: "Zemun, Beograd" },
  };

  return (
    <>
      <JsonLd data={breadcrumbJsonLd} />
      <JsonLd data={faqJsonLd} />
      <JsonLd data={serviceJsonLd} />

      <PageHero
        eyebrow="Zemun"
        title="Servis klime Zemun: kuće, starija gradnja i stambene zgrade"
        subtitle="Zemun je mešavina svega: stare kuće od pune opeke, zgrade iz šezdesetih, novogradnja na Altini i Novom Zemunu. Radimo servis, montažu i popravku sa pristupom koji se prilagođava objektu, ne obrnuto."
        primaryCta={{ label: `Pozovite ${settings.phone}`, href: `tel:${settings.phone.replace(/\s/g, "")}` }}
        secondaryCta={{ label: "Zakažite termin", href: "/kontakt" }}
        stats={[
          { value: "Ceo Zemun", label: "od Gardoša do Batajnice" },
          { value: "Kuće i zgrade", label: "montaža prilagođena objektu" },
          { value: "Garancija", label: "na sve izvedene radove" },
        ]}
      />

      <section className="py-14">
        <Container className="max-w-3xl">
          <span className="text-sm font-semibold uppercase tracking-wide text-accent-dark">
            Zašto je Zemun drugačiji teren
          </span>
          <h2 className="mt-2 text-3xl font-bold text-navy">
            Tri vrste objekata u istoj opštini
          </h2>
          <p className="mt-4 text-muted">
            Za razliku od Novog Beograda, gde je gotovo sve blokovska i visoka gradnja, Zemun je
            slojevit. Staro jezgro oko Gardoša i Glavne ulice čine kuće i zgrade od pune opeke,
            deo njih u zaštićenoj kulturno-istorijskoj celini. Šira zona iz šezdesetih i
            sedamdesetih donosi stambene zgrade srednje visine. Altina, Zemun Polje, Kamendin i
            delovi Batajnice su porodične kuće, dobar deo sa naknadnim dogradnjama.
          </p>
          <p className="mt-4 text-muted">
            Tri različita objekta znače tri različita posla. U kući je pozicija spoljne jedinice
            po pravilu slobodna, pa se planira po logici najkraće i najtiše trase, sa jedinicom
            koja ne duva ka susednom dvorištu. U staroj zgradi glavno pitanje je zid: puna opeka
            debljine pola metra traži dužu krunu i više vremena za prodor, a trasa se često vodi
            drugačije nego što je vlasnik zamišljao. U novogradnji na Altini pozicije su najčešće
            predviđene projektom.
          </p>
          <p className="mt-4 text-muted">
            Zbog toga izlazak dogovaramo tek pošto znamo o kakvom se objektu radi. Kod kuće je to
            obično kraći razgovor telefonom. Kod objekata u zaštićenoj celini vredi unapred
            proveriti da li je intervencija na uličnoj fasadi uopšte moguća, jer je odgovor
            najčešće ne, a rešenje je dvorišna strana.
          </p>
        </Container>
      </section>

      <section className="bg-surface py-14">
        <Container>
          <span className="text-sm font-semibold uppercase tracking-wide text-accent-dark">Usluge</span>
          <h2 className="mt-2 text-3xl font-bold text-navy">Šta radimo u Zemunu</h2>
          <div className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2">
            {services.map((service) => (
              <Link
                key={service.href}
                href={service.href}
                className="group rounded-lg border border-navy/10 bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
              >
                <h3 className="text-lg font-bold text-navy group-hover:text-accent-dark">
                  {service.title}
                </h3>
                <p className="mt-2 text-sm text-muted">{service.text}</p>
                <span className="mt-4 inline-block text-sm font-semibold text-accent-dark">
                  Saznajte više →
                </span>
              </Link>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-14">
        <Container className="max-w-3xl">
          <span className="text-sm font-semibold uppercase tracking-wide text-accent-dark">
            Pristup objektu
          </span>
          <h2 className="mt-2 text-3xl font-bold text-navy">
            Šta proveravamo pre izlaska u Zemun
          </h2>
          <p className="mt-4 text-muted">
            Kod kuća nas zanima da li je predviđena pozicija spoljne jedinice dostupna sa merdevina
            ili traži platformu, i da li postoji struja na strani na koju ide jedinica. Kod
            zgrada nas zanima sprat, tip zida i da li postoji terasa ili lodža koja može da primi
            jedinicu. U zaštićenoj celini Gardoša unapred računamo na dvorišnu poziciju.
          </p>
          <p className="mt-4 text-muted">
            Ova provera traje par minuta telefonom, a spašava ceo izlazak. Najgori scenario je
            ekipa koja dođe sa opremom za standardnu montažu i zatekne zid od pedeset pet
            centimetara pune opeke ili poziciju do koje se ne može bez platforme. Tada se posao
            odlaže, a niko od toga nema koristi.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Link
              href="/usluge/montaza"
              className="rounded-lg border border-navy/20 px-5 py-2.5 text-sm font-semibold text-navy transition hover:bg-navy hover:text-white"
            >
              Sve o montaži klime
            </Link>
            <Link
              href="/blog/koliko-kosta-ugradnja-klime-u-beogradu"
              className="rounded-lg border border-navy/20 px-5 py-2.5 text-sm font-semibold text-navy transition hover:bg-navy hover:text-white"
            >
              Od čega zavisi cena ugradnje
            </Link>
          </div>
        </Container>
      </section>

      <section className="bg-surface py-14">
        <Container className="max-w-3xl">
          <span className="text-sm font-semibold uppercase tracking-wide text-accent-dark">Cene</span>
          <h2 className="mt-2 text-3xl font-bold text-navy">Okvirne cene za Zemun</h2>
          <p className="mt-4 text-muted">
            Montaža uređaja od 9 ili 12 BTU kreće od 9200 dinara, 18 BTU od 11500 dinara, a 24
            BTU od 13800 dinara, sa standardnom trasom do tri metra. Redovan servis je od 2900
            dinara za 9 i 12 BTU, odnosno od 3400 dinara za 18 i 24 BTU. Demontaža stare klime
            kreće od 3400 dinara, a dopuna i provera gasa od 6900 dinara.
          </p>
          <p className="mt-4 text-muted">
            Kod starih zemunskih kuća sa debelim zidovima prodor ume da potraje duže od
            uobičajenog, ali to ne menja osnovnu cenu montaže. Ono što se doplaćuje je dodatni
            dužni metar trase preko tri metra, od 2500 do 3200 dinara, i eventualna pumpica za
            kondenzat tamo gde prirodan pad odvoda ne postoji.
          </p>
          <Link
            href="/cenovnik"
            className="mt-6 inline-block rounded-lg bg-navy px-6 py-3 text-sm font-semibold text-white transition hover:bg-accent-dark"
          >
            Pogledajte ceo cenovnik
          </Link>
        </Container>
      </section>

      <section className="py-14">
        <Container className="max-w-3xl">
          <span className="text-sm font-semibold uppercase tracking-wide text-accent-dark">
            Česta pitanja
          </span>
          <h2 className="mt-2 text-3xl font-bold text-navy">
            Pitanja koja najčešće dobijamo iz Zemuna
          </h2>
          <div className="mt-8 space-y-6">
            {faq.map((item) => (
              <div key={item.question}>
                <h3 className="font-semibold text-navy">{item.question}</h3>
                <p className="mt-1 text-muted">{item.answer}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <ClosingCta phone={settings.phone} />
    </>
  );
}
