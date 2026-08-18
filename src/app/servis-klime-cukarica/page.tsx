import type { Metadata } from "next";
import Link from "next/link";

import { Container } from "@/components/Container";
import { PageHero } from "@/components/PageHero";
import { ClosingCta } from "@/components/ClosingCta";
import { JsonLd } from "@/components/JsonLd";
import { getSiteSettings } from "@/lib/data";
import { SITE_URL } from "@/lib/site-config";

const PATH = "/servis-klime-cukarica";

export async function generateMetadata(): Promise<Metadata> {
  const settings = await getSiteSettings();
  const title = "Servis klime Čukarica | montaža, čišćenje i popravka";
  const description = `Servis klima uređaja na Čukarici: Banovo brdo, Žarkovo, Sremčica i Vidikovac. Montaža, dubinsko pranje i popravke. Pozovite ${settings.phone}.`;

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
    text: "U kućama sa dvorištem u Sremčici i Kneževcu spoljna jedinica često stoji niže i bliže zelenilu, pa brže skuplja polen i lišće nego jedinica na terasi solitera. Dubinsko pranje isparivača i turbine radimo sa dezinfekcijom, a spoljnu jedinicu perem posebno kad je pod krošnjom ili uz živu ogradu.",
    href: "/usluge/servis",
  },
  {
    title: "Montaža u kući sa dvorištem",
    text: "Kod porodičnih kuća u Žarkovu, Sremčici i Kneževcu pozicija spoljne jedinice se bira slobodno, bez saglasnosti kućnog saveta. To ubrzava posao i otvara opcije koje u zgradi ne postoje, na primer postavljanje na zid dvorišne strane ili na noge direktno na travnjaku, uz dovoljan razmak od žive ograde.",
    href: "/usluge/montaza",
  },
  {
    title: "Montaža u novijim stambenim kompleksima",
    text: "Cerak, Vidikovac i deo Banovog brda uz Požešku imaju stambene komplekse izgrađene u poslednjih desetak i više godina, sa pozicijama za spoljne jedinice predviđenim projektom. Montaža je tu po pravilu brza, a pažnju obraćamo na pravila zgrade o izgledu i rasporedu jedinica na zajedničkoj fasadi.",
    href: "/usluge/montaza",
  },
  {
    title: "Popravka, dopuna gasa i zamena delova",
    text: "U starijim delovima Banovog brda i u kućama koje su duže u upotrebi najčešće otkazuju kondenzator, step motor klapne i spojevi na trasi izloženi vremenskim uslovima u dvorištu. Gas dopunjavamo tek kada nađemo mesto curenja.",
    href: "/usluge/popravka",
  },
];

const faq = [
  {
    question: "Koje delove Čukarice pokrivate?",
    answer:
      "Ceo opštinu: Banovo brdo, Žarkovo, Kneževac, Sremčicu, Cerak, Vidikovac, Košutnjak, Filmski grad i naselja bliža Ibarskoj magistrali kao što je Umka. Za Sremčicu i Umku termin dogovaramo unapred da bismo izlazak spojili sa drugim intervencijama u tom pravcu.",
  },
  {
    question: "Da li je montaža u kući sa dvorištem jeftinija nego u stanu?",
    answer:
      "Osnovna cena montaže zavisi od jačine uređaja, ne od tipa objekta, ali kuća sa dvorištem u praksi često izađe povoljnije. Nema rada na visini ni doplate za pristup fasadi kad je spoljna jedinica na zidu prizemlja ili na nogama u dvorištu, a takva pozicija je kod nas u Sremčici i Kneževcu čest slučaj.",
  },
  {
    question: "Gde je najbolje postaviti spoljnu jedinicu u dvorištu?",
    answer:
      "Na mestu koje ima slobodan protok vazduha sa svih strana, nije u direktnom prepodnevnom ili popodnevnom suncu po ceo dan, i ne duva prema prozoru spavaće sobe, ni sopstvenom ni komšijskom. U dvorištu je moguće postaviti jedinicu i na betonske noge direktno na tlu, što je jeftinije od zidnih nosača i lakše za kasniji servis.",
  },
  {
    question: "Da li montirate klimu u novijim kompleksima na Cerku i Vidikovcu?",
    answer:
      "Da, i tamo je posao po pravilu brz jer su pozicije za spoljne jedinice predviđene projektom, sa pripremljenim prodorima kroz zid. Ono na šta pazimo je pravilo zgrade o izgledu jedinice sa ulice, jer deo ovih kompleksa ima ujednačen izgled fasade koji uprava zgrade želi da očuva.",
  },
  {
    question: "Koliko brzo možete da izađete na Čukaricu?",
    answer:
      "Za Banovo brdo, Žarkovo i Kneževac najčešće isti ili sledeći radni dan. Za Sremčicu i Umku rok je nešto duži jer izlazak planiramo unapred. U julu i avgustu se, kao i svuda, rokovi produžavaju, pa se redovan servis isplati zakazati u proleće.",
  },
  {
    question: "Radite li klime u kućama sa baštom gde ima puno drveća?",
    answer:
      "Da, i to je čest slučaj u Sremčici i Kneževcu. Kod takvih dvorišta spoljnu jedinicu pozicioniramo dalje od direktnog pada lišća i polena kad god je to izvodljivo, a pri servisu dubinsko pranje spoljne jedinice radimo redovnije nego kod jedinica na otvorenoj terasi solitera.",
  },
  {
    question: "Zašto mi je ponuđena duža trasa za kuću u odnosu na stan iste kvadrature?",
    answer:
      "Zato što unutrašnja jedinica u kući često ide u sobu koja je udaljenija od zida na koji izlazi spoljna jedinica, posebno kad se pozicija bira zbog izgleda dvorišta a ne zbog najkraćeg puta. Svaki dodatni metar trase preko standardna tri metra se naplaćuje po dužnom metru, i to unapred procenjujemo pri dogovoru termina.",
  },
];

export default async function ServisKlimeCukaricaPage() {
  const settings = await getSiteSettings();

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Početna", item: SITE_URL },
      { "@type": "ListItem", position: 2, name: "Servis klime Čukarica", item: `${SITE_URL}${PATH}` },
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
    areaServed: { "@type": "Place", name: "Čukarica, Beograd" },
  };

  return (
    <>
      <JsonLd data={breadcrumbJsonLd} />
      <JsonLd data={faqJsonLd} />
      <JsonLd data={serviceJsonLd} />

      <PageHero
        eyebrow="Čukarica"
        title="Servis klime Čukarica: od Banovog brda do Sremčice"
        subtitle="Čukarica spaja gradsko i prigradsko: blokovska gradnja na Banovom brdu, kuće sa dvorištem u Žarkovu, Sremčici i Kneževcu, i noviji stambeni kompleksi na Cerku i Vidikovcu. Montažu i servis prilagođavamo tipu objekta, ne obrnuto."
        primaryCta={{ label: `Pozovite ${settings.phone}`, href: `tel:${settings.phone.replace(/\s/g, "")}` }}
        secondaryCta={{ label: "Zakažite termin", href: "/kontakt" }}
        stats={[
          { value: "Ceo opštinu", label: "od Banovog brda do Sremčice" },
          { value: "Kuće i kompleksi", label: "montaža prilagođena objektu" },
          { value: "Garancija", label: "na sve izvedene radove" },
        ]}
      />

      <section className="py-14">
        <Container className="max-w-3xl">
          <span className="text-sm font-semibold uppercase tracking-wide text-accent-dark">
            Zašto je Čukarica raznolik teren
          </span>
          <h2 className="mt-2 text-3xl font-bold text-navy">
            Gradsko i prigradsko u istoj opštini
          </h2>
          <p className="mt-4 text-muted">
            Čukarica je opština koja se teško svrstava u jedan tip gradnje. Banovo brdo je
            uglavnom gradska, blokovska sredina sa zgradama iz raznih perioda, slična po logici
            montaže drugim centralnim delovima grada. Žarkovo, Sremčica i Kneževac su, s druge
            strane, pretežno porodične kuće sa dvorištem, gde je pristup poziciji spoljne jedinice
            slobodniji nego u bilo kojoj zgradi. Cerak, Vidikovac i deo Banovog brda uz Požešku
            čine noviji stambeni kompleksi, izgrađeni u poslednjih desetak i više godina.
          </p>
          <p className="mt-4 text-muted">
            Ta raznolikost menja svaki korak posla. U kući je pitanje mesta u dvorištu, ne
            saglasnosti kućnog saveta. U bloku na Banovom brdu je pitanje pozicije na terasi ili
            fasadi, kao i svuda u starijoj gradnji. U novijem kompleksu je pitanje pravila zgrade
            o izgledu jedinice sa ulice, jer deo tih naselja neguje ujednačen izgled fasade.
          </p>
          <p className="mt-4 text-muted">
            Zato pre izlaska pitamo u kakvom ste objektu: kuća sa dvorištem, starija zgrada ili
            noviji kompleks. Odgovor obično već kaže da li je pozicija spoljne jedinice stvar
            slobodnog izbora ili nečega što treba prvo proveriti sa upravom zgrade.
          </p>
        </Container>
      </section>

      <section className="bg-surface py-14">
        <Container>
          <span className="text-sm font-semibold uppercase tracking-wide text-accent-dark">Usluge</span>
          <h2 className="mt-2 text-3xl font-bold text-navy">Šta radimo na Čukarici</h2>
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
            Dvorište menja pravila
          </span>
          <h2 className="mt-2 text-3xl font-bold text-navy">
            Zašto je montaža u kući sa baštom drugačiji posao
          </h2>
          <p className="mt-4 text-muted">
            U stanu ili zgradi pozicija spoljne jedinice je često ograničena projektom, kućnim
            redom ili prostim nedostatkom mesta na terasi. U kući sa dvorištem, česta situacija u
            Žarkovu, Sremčici i Kneževcu, taj problem praktično ne postoji. Jedinica može ići na
            zid dvorišne strane, ispod strehe, ili na sopstvene noge direktno na travnjaku ili
            betonskoj podlozi, van vidokruga sa ulice ako je to poželjno.
          </p>
          <p className="mt-4 text-muted">
            Sloboda izbora pozicije donosi i odgovornost da se bira pametno. Jedinica postavljena
            predaleko od kuće znači duže trasu i veći trošak, a jedinica ugurana uz živu ogradu ili
            pod krošnju drveta brže se prlja i teže održava. Pri montaži predlažemo poziciju koja
            balansira kratku trasu, slobodan protok vazduha i lakši budući pristup za servis, a ne
            samo mesto koje deluje najzgodnije na prvi pogled.
          </p>
          <p className="mt-4 text-muted">
            U novijim kompleksima na Cerku i Vidikovcu situacija je bliža stanu u zgradi: pozicije
            su predviđene projektom, trasa je kratka, a ono što proveravamo je pravilo zgrade o
            izgledu jedinice sa ulične strane, jer deo tih naselja ima propisan izgled fasade koji
            uprava želi da zadrži ujednačenim.
          </p>
        </Container>
      </section>

      <section className="bg-surface py-14">
        <Container className="max-w-3xl">
          <span className="text-sm font-semibold uppercase tracking-wide text-accent-dark">
            Pristup poziciji
          </span>
          <h2 className="mt-2 text-3xl font-bold text-navy">
            Šta proveravamo pre izlaska na Čukaricu
          </h2>
          <p className="mt-4 text-muted">
            Kod kuća nas zanima da li dvorište ima prostor za spoljnu jedinicu na tlu ili je
            planirana montaža na zid, i da li postoji struja na toj strani objekta. Kod stanova u
            starijim zgradama na Banovom brdu nas zanima sprat i tip zida. Kod novijih kompleksa
            na Cerku i Vidikovcu nas zanima da li zgrada ima propisanu poziciju ili pravilo o
            izgledu jedinice sa ulice.
          </p>
          <p className="mt-4 text-muted">
            Par minuta razgovora telefonom o tipu objekta obično je dovoljno da unapred znamo da
            li nosimo standardnu opremu za montažu u dvorištu ili opremu za rad na visini u
            starijoj zgradi na Banovom brdu.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Link
              href="/usluge/montaza"
              className="rounded-lg border border-navy/20 px-5 py-2.5 text-sm font-semibold text-navy transition hover:bg-navy hover:text-white"
            >
              Sve o montaži klime
            </Link>
            <Link
              href="/blog/cene-montaze-klime-u-beogradu-po-kapacitetu"
              className="rounded-lg border border-navy/20 px-5 py-2.5 text-sm font-semibold text-navy transition hover:bg-navy hover:text-white"
            >
              Cene montaže po kapacitetu
            </Link>
          </div>
        </Container>
      </section>

      <section className="py-14">
        <Container className="max-w-3xl">
          <span className="text-sm font-semibold uppercase tracking-wide text-accent-dark">Cene</span>
          <h2 className="mt-2 text-3xl font-bold text-navy">Okvirne cene za Čukaricu</h2>
          <p className="mt-4 text-muted">
            Montaža uređaja od 9 ili 12 BTU kreće od 9200 dinara, 18 BTU od 11500 dinara, a 24 BTU
            od 13800 dinara, sa standardnom trasom do tri metra. Redovan servis je od 2900 dinara
            za 9 i 12 BTU, odnosno od 3400 dinara za 18 i 24 BTU. Demontaža stare klime kreće od
            3400 dinara, a dopuna i provera gasa od 6900 dinara.
          </p>
          <p className="mt-4 text-muted">
            Kod kuća sa dvorištem najčešća doplata je dodatni dužni metar trase preko tri metra,
            od 2500 do 3200 dinara, kada se spoljna jedinica postavi dalje radi boljeg izgleda
            dvorišta. Kod starijih zgrada na Banovom brdu se povremeno pojavi doplata za rad na
            visini, dok je kod novijih kompleksa na Cerku i Vidikovcu montaža po pravilu bez
            dodatnih stavki, jer su pozicije već pripremljene.
          </p>
          <Link
            href="/cenovnik"
            className="mt-6 inline-block rounded-lg bg-navy px-6 py-3 text-sm font-semibold text-white transition hover:bg-accent-dark"
          >
            Pogledajte ceo cenovnik
          </Link>
        </Container>
      </section>

      <section className="bg-surface py-14">
        <Container className="max-w-3xl">
          <span className="text-sm font-semibold uppercase tracking-wide text-accent-dark">
            Česta pitanja
          </span>
          <h2 className="mt-2 text-3xl font-bold text-navy">
            Pitanja koja najčešće dobijamo sa Čukarice
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
