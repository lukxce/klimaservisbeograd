import type { Metadata } from "next";
import Link from "next/link";

import { Container } from "@/components/Container";
import { PageHero } from "@/components/PageHero";
import { ClosingCta } from "@/components/ClosingCta";
import { JsonLd } from "@/components/JsonLd";
import { getSiteSettings } from "@/lib/data";
import { SITE_URL } from "@/lib/site-config";

const PATH = "/servis-klime-vozdovac";

export async function generateMetadata(): Promise<Metadata> {
  const settings = await getSiteSettings();
  const title = "Servis klime Voždovac - montaža, čišćenje i popravka klima uređaja";
  const description = `Servis klima uređaja na Voždovcu: Autokomanda, Dušanovac, Banjica, Medaković, Stepa Stepanović i naselja ka Avali. Montaža, dubinsko pranje i popravke. Pozovite ${settings.phone}.`;

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
    text: "Na Voždovcu je dosta zelenila i uređaji brzo skupe polen i puh sa drveća, posebno u nižim delovima ka Dušanovcu i Autokomandi. Dubinsko pranje isparivača i turbine radimo sa dezinfekcijom i proverom odvoda kondenzata, a spoljnu jedinicu perem posebno kad je pod krošnjom.",
    href: "/usluge/servis",
  },
  {
    title: "Montaža u stanu i u kući na kosini",
    text: "U stanovima na Banjici i u naselju Stepa Stepanović pozicije su uglavnom predviđene projektom. Kod kuća u Kumodražu, Jajincima i Belom Potoku pozicija se bira prema nagibu placa, jer strana koja je prizemlje sa ulice zna da bude prvi sprat iz dvorišta.",
    href: "/usluge/montaza",
  },
  {
    title: "Popravka, dopuna gasa i zamena delova",
    text: "Kod uređaja starijih od deset godina, čestih u zgradama oko Vojvode Stepe i na Dušanovcu, najčešće otkazuju kondenzator, step motor klapne i spojevi na trasi. Gas dopunjavamo tek kada nađemo mesto curenja, jer gas ne nestaje sam od sebe.",
    href: "/usluge/popravka",
  },
  {
    title: "Dijagnostika zatečene instalacije",
    text: "Kupili ste stan u naselju iz osamdesetih ili kuću u Kumodražu sa klimom nepoznate starosti. Izlazimo, merimo pritisak, proveravamo elektroniku i trasu, i dajemo pisanu konstataciju sa procenom da li se uređaj isplati servisirati ili menjati.",
    href: "/usluge/dijagnostika",
  },
];

const faq = [
  {
    question: "Koje delove Voždovca pokrivate?",
    answer:
      "Ceo Voždovac: Autokomanda, Voždovac centar oko Vojvode Stepe, Dušanovac, Konjarnik prema granici sa Zvezdarom, Banjica, Braće Jerković, Medaković I, II i III, naselje Stepa Stepanović, Vojvodić, Kumodraž, Jajinci, Beli Potok, Pinosava, Zuce i Ripanj. Za naselja iza Avale, dakle Pinosavu, Zuce i Ripanj, termin dogovaramo unapred da bismo izlazak spojili sa drugim intervencijama u tom pravcu.",
  },
  {
    question: "Zašto pitate za nagib terena pre izlaska?",
    answer:
      "Zato što na Voždovcu nagib direktno određuje koliko je posao složen. Kuća koja je iz ulice prizemnica često je iz dvorišta objekat na spratu, pa se spoljna jedinica koja deluje kao dohvatljiva sa merdevina zapravo nalazi četiri do pet metara iznad terena. To je razlika između standardne montaže i posla koji traži platformu ili rad sa opremom za visinu, a to je bolje znati telefonom nego kad ekipa već stoji u dvorištu.",
  },
  {
    question: "Da li montirate klimu u naselju Stepa Stepanović?",
    answer:
      "Da, i to je jedan od naselja u kojima najčešće radimo. Stanovi imaju predviđene pozicije za spoljne jedinice na lodžama ili u za to namenjenim nišama, pa je montaža po pravilu brza i bez iznenađenja. Ono na šta obraćamo pažnju je odvod kondenzata, jer u delu stanova prirodan pad nije moguć bez pumpice, i buka prema susednoj lodži, koju rešavamo izborom pozicije i antivibracionim podloškama.",
  },
  {
    question: "Klima mi je u stanu na Banjici, spoljna jedinica je na visini. Kako to radite?",
    answer:
      "Za pozicije do kojih se ne može sa lodže ili prozora koristimo opremu za rad na visini, a za pojedine zgrade je jedino rešenje pristup sa alpinističkom opremom. Ovo se dogovara i naplaćuje posebno od same montaže, i uvek se saopštava pre dolaska, nikad kao naknadno iznenađenje na licu mesta.",
  },
  {
    question: "Koliko brzo možete da izađete na Voždovac?",
    answer:
      "Za centralni deo, dakle Autokomandu, Voždovac, Dušanovac, Banjicu i Medakoviće, najčešće isti ili sledeći radni dan. Naša adresa je u Vojvode Stepe, pa je ovo teren na kom smo svakodnevno. Za Ripanj, Zuce i Pinosavu rok je nešto duži. U julu i avgustu se sve produžava, pa se redovan servis isplati zakazati u maju ili junu.",
  },
  {
    question: "Radite li klime u kućama u Kumodražu i Jajincima?",
    answer:
      "Da, i tamo je posao najčešće lakši nego u zgradi, jer nema kućnog saveta ni ograničenja za fasadu. Ono što treba proveriti unapred je da li postoji struja na strani na koju ide spoljna jedinica i da li je prilaz do te pozicije dovoljno ravan da se priđe merdevinama. Kod placeva u nagibu se to razlikuje od kuće do kuće.",
  },
  {
    question: "Stan mi je na poslednjem spratu i ceo dan je na suncu, koja klima mi treba?",
    answer:
      "Poslednji sprat pod ravnim krovom prima toplotu i odozgo i sa strane, pa se kapacitet po pravilu bira jedan stepen jače nego što bi sama kvadratura sugerisala. Prostorija od trideset kvadrata koja bi inače tražila 12000 BTU na poslednjem spratu sa južnom orijentacijom često traži 18000 BTU da ne bi radila stalno na maksimumu.",
  },
];

export default async function ServisKlimeVozdovacPage() {
  const settings = await getSiteSettings();

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Početna", item: SITE_URL },
      { "@type": "ListItem", position: 2, name: "Servis klime Voždovac", item: `${SITE_URL}${PATH}` },
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
    areaServed: { "@type": "Place", name: "Voždovac, Beograd" },
  };

  return (
    <>
      <JsonLd data={breadcrumbJsonLd} />
      <JsonLd data={faqJsonLd} />
      <JsonLd data={serviceJsonLd} />

      <PageHero
        eyebrow="Voždovac"
        title="Servis klime Voždovac: od Autokomande do Avale"
        subtitle="Voždovac se spušta i penje. Zgrade iz sedamdesetih oko Vojvode Stepe, novogradnja na Stepi Stepanoviću i Medakoviću, pa kuće na kosinama Kumodraža i Jajinaca. Naša baza je upravo tu, pa je ovo teren koji poznajemo iz prve ruke."
        primaryCta={{ label: `Pozovite ${settings.phone}`, href: `tel:${settings.phone.replace(/\s/g, "")}` }}
        secondaryCta={{ label: "Zakažite termin", href: "/kontakt" }}
        stats={[
          { value: "Ceo Voždovac", label: "od Autokomande do Ripnja" },
          { value: "Domaći teren", label: "adresa nam je u Vojvode Stepe" },
          { value: "Garancija", label: "na sve izvedene radove" },
        ]}
      />

      <section className="py-14">
        <Container className="max-w-3xl">
          <span className="text-sm font-semibold uppercase tracking-wide text-accent-dark">
            Zašto je Voždovac poseban teren
          </span>
          <h2 className="mt-2 text-3xl font-bold text-navy">
            Opština koja se penje od Autokomande do Avale
          </h2>
          <p className="mt-4 text-muted">
            Voždovac je jedna od retkih beogradskih opština koja u sebi ima gotovo svaki tip
            objekta. Donji deo, oko Autokomande i Dušanovca, čine zgrade iz šezdesetih i
            sedamdesetih, sa uređajima koji su često u drugoj ili trećoj deceniji rada. Središnji
            pojas oko Vojvode Stepe i Braće Jerković donosi zgrade iz osamdesetih sa lodžama.
            Medaković III i naselje Stepa Stepanović su novija gradnja sa unapred predviđenim
            pozicijama. A od Kumodraža naviše, preko Jajinaca i Belog Potoka do Pinosave i Ripnja,
            radi se gotovo isključivo o porodičnim kućama.
          </p>
          <p className="mt-4 text-muted">
            Ono što povezuje ceo taj potez i što ga razlikuje od ravnog Novog Beograda jeste nagib.
            Voždovac se od Autokomande do Avale penje više od dvesta metara nadmorske visine, i taj
            nagib se vidi na svakom drugom placu. Kuća koja je iz ulice prizemnica, iz dvorišta je
            objekat na spratu. Zid na koji bi spoljna jedinica prirodno išla može biti sa strane
            koja gleda u strminu, gde merdevine nemaju gde da stanu.
          </p>
          <p className="mt-4 text-muted">
            Zbog toga na Voždovcu pitanja pre izlaska nisu formalnost. Sprat i tip zida su bitni kao
            i svuda, ali ovde se dodaje i pitanje sa koje strane se prilazi poziciji i kakav je teren
            ispod nje. Nekoliko minuta razgovora telefonom obično odluči da li je posao standardna
            montaža od dva sata ili intervencija koja traži dodatnu opremu.
          </p>
        </Container>
      </section>

      <section className="bg-surface py-14">
        <Container>
          <span className="text-sm font-semibold uppercase tracking-wide text-accent-dark">Usluge</span>
          <h2 className="mt-2 text-3xl font-bold text-navy">Šta radimo na Voždovcu</h2>
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
            Stara i nova gradnja
          </span>
          <h2 className="mt-2 text-3xl font-bold text-navy">
            Dva različita posla u istoj opštini
          </h2>
          <p className="mt-4 text-muted">
            U zgradama oko Vojvode Stepe, na Dušanovcu i Braće Jerković najveći deo poziva nije
            montaža nego servis i popravka. Uređaji su tu često od pre petnaest i više godina,
            postavljeni u vreme kada su se klime tek uvodile u stanove, pa trase znaju biti izvedene
            improvizovano, sa kanalicama koje su vremenom popucale i izolacijom koja je otpala.
            Kod takvih instalacija prvo proveravamo trasu, jer je česta situacija da uređaj nije
            neispravan, nego instalacija ispod njega jeste.
          </p>
          <p className="mt-4 text-muted">
            U novijim naseljima, Medakoviću III i Stepi Stepanoviću, situacija je obrnuta. Tu se
            uglavnom radi prva montaža u stanu koji je useljen pre koju godinu. Pozicije su
            predviđene projektom, trasa je kratka, i posao je gotov za dva sata. Ono na šta obraćamo
            pažnju u tim zgradama je odvod kondenzata, jer u delu stanova ne postoji prirodan pad do
            odvoda, pa je pumpica za kondenzat jedina ispravna opcija, i buka prema susedu, koju
            rešavamo antivibracionim podloškama i orijentacijom jedinice.
          </p>
          <p className="mt-4 text-muted">
            U kućama od Kumodraža naviše nema ni kućnog saveta ni ograničenja za fasadu, pa je
            sloboda izbora pozicije najveća. Zauzvrat, teren postavlja svoja pravila. Na placu u
            nagibu se planira i gde će voda od kondenzata da otiče, jer ono što se u ravnom dvorištu
            upije, na kosini pravi trag niz zid ili stazu.
          </p>
        </Container>
      </section>

      <section className="bg-surface py-14">
        <Container className="max-w-3xl">
          <span className="text-sm font-semibold uppercase tracking-wide text-accent-dark">
            Pristup poziciji
          </span>
          <h2 className="mt-2 text-3xl font-bold text-navy">
            Šta proveravamo pre izlaska na Voždovac
          </h2>
          <p className="mt-4 text-muted">
            Kod stanova nas zanima sprat, da li postoji lodža ili terasa koja može da primi spoljnu
            jedinicu, i da li je pozicija dostupna iznutra ili traži rad sa fasade. Kod kuća nas
            zanima da li je teren ispod pozicije ravan, koliki je stvaran razmak od tla do mesta
            gde jedinica ide, i da li postoji struja na toj strani objekta.
          </p>
          <p className="mt-4 text-muted">
            Odgovor na ova tri pitanja odlučuje da li dolazimo sa standardnom opremom ili sa
            opremom za visinu. Ako je potreban rad na visini, to kažemo unapred, sa cenom, pre nego
            što uopšte dogovorimo termin. Najgori scenario je ekipa koja se popne uz Kumodraž i
            zatekne poziciju do koje se ne može bez platforme, jer se tada posao odlaže, a i
            klijent i mi smo izgubili pola dana.
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
          <h2 className="mt-2 text-3xl font-bold text-navy">Okvirne cene za Voždovac</h2>
          <p className="mt-4 text-muted">
            Montaža uređaja od 9 ili 12 BTU kreće od 9200 dinara, 18 BTU od 11500 dinara, a 24 BTU
            od 13800 dinara, sa standardnom trasom do tri metra. Redovan servis je od 2900 dinara za
            9 i 12 BTU, odnosno od 3400 dinara za 18 i 24 BTU. Demontaža stare klime kreće od 3400
            dinara, a dopuna i provera gasa od 6900 dinara.
          </p>
          <p className="mt-4 text-muted">
            Na Voždovcu se, češće nego u ravnijim delovima grada, pojave dve doplate. Prva je
            dodatni dužni metar trase preko tri metra, od 2500 do 3200 dinara, jer se kod kuća na
            kosini spoljna jedinica ponekad mora spustiti na pristupačniju stranu objekta. Druga je
            pumpica za kondenzat, potrebna svuda gde prirodan pad odvoda ne postoji, što je čest
            slučaj u novijim stanovima na Medakoviću i Stepi Stepanoviću.
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
            Pitanja koja najčešće dobijamo sa Voždovca
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
