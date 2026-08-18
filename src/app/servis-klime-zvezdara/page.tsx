import type { Metadata } from "next";
import Link from "next/link";

import { Container } from "@/components/Container";
import { PageHero } from "@/components/PageHero";
import { ClosingCta } from "@/components/ClosingCta";
import { JsonLd } from "@/components/JsonLd";
import { getSiteSettings } from "@/lib/data";
import { SITE_URL } from "@/lib/site-config";

const PATH = "/servis-klime-zvezdara";

export async function generateMetadata(): Promise<Metadata> {
  const settings = await getSiteSettings();
  const title = "Servis klime Zvezdara | montaža, čišćenje i popravka";
  const description = `Servis klima uređaja na Zvezdari: Vukov spomenik, Đeram, Konjarnik, Mirijevo i Mokri Lug. Montaža, dubinsko pranje i popravke. Pozovite ${settings.phone}.`;

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
    text: "Zvezdarska šuma, drvoredi u Učiteljskom naselju i bašte u Mirijevu znače da spoljne jedinice na ovoj opštini skupljaju više lišća, polena i semenja nego jedinice u golom bloku. Isparivač i turbinu peremo dubinski uz dezinfekciju, a lamele spoljne jedinice posebno, jer se kod nas na Zvezdari zapuše brže nego što vlasnici očekuju.",
    href: "/usluge/servis",
  },
  {
    title: "Montaža u starijoj gradnji uz centar",
    text: "Vukov spomenik, Đeram, Bulbulder i Ćalije su nadomak centra i pretežno starija gradnja, sa debelim zidovima, visokim plafonima i fasadama koje gledaju na prometne ulice. Prodor kroz zid tu traje duže nego u novogradnji, a poziciju spoljne jedinice biramo tako da ne visi nad trotoarom.",
    href: "/usluge/montaza",
  },
  {
    title: "Montaža u kući na strmoj parceli",
    text: "Zeleno brdo, Mirijevo, Veliki i Mali Mokri Lug su pretežno porodične kuće na nagibu, gde je jedna strana objekta u nivou ulice a druga metar ili dva ispod nje. Poziciju spoljne jedinice biramo prema tome gde je pristup za kasniji servis siguran, a ne samo gde je zid najbliži.",
    href: "/usluge/montaza",
  },
  {
    title: "Popravka, dopuna gasa i zamena delova",
    text: "U starijim stanovima oko Vukovog spomenika i Đerma najčešće otkazuju kondenzator i step motor klapne, dok kod kuća na Zvezdari češće stradaju spojevi na trasi koja je duže izložena vremenu. Gas dopunjavamo tek kada nađemo mesto curenja.",
    href: "/usluge/popravka",
  },
];

const faq = [
  {
    question: "Koje delove Zvezdare pokrivate?",
    answer:
      "Celu opštinu: Vukov spomenik, Đeram, Bulbulder, Ćalije, Lion, Slavujev venac, Učiteljsko naselje, Konjarnik, Zeleno brdo, Denkovu baštu, Mirijevo i oba Mokra Luga. Za Mirijevo i Mokri Lug termin volimo da dogovorimo dan ranije, da bismo izlazak spojili sa drugim intervencijama u tom pravcu.",
  },
  {
    question: "Da li nagib ulice poskupljuje montažu?",
    answer:
      "Sam po sebi ne. Nagib postaje stavka tek kad zbog njega zid na koji ide spoljna jedinica bude znatno viši od terena, pa je potreban rad na visini tamo gde bi na ravnom bila obična montaža sa merdevina. To se na Zeleno brdo i Mirijevo dešava kod kuća čija je donja strana ukopana, i uvek vam to kažemo pri dogovoru termina, ne posle posla.",
  },
  {
    question: "Zašto mi se spoljna jedinica na Zvezdari brže prlja nego ranije u stanu u bloku?",
    answer:
      "Najčešće zbog zelenila. Zvezdarska šuma, stari drvoredi u Učiteljskom naselju i bašte u Mirijevu i Mokrom Lugu znače da u vazduhu ima znatno više polena, semenja i sitnog lišća nego oko golih blokova. Lamele kondenzatora to hvataju kao filter, pa uređaj gubi na učinku i pre nego što vlasnik primeti da nešto nije u redu.",
  },
  {
    question: "Montiram klimu u stanu kod Vukovog spomenika, ima li nečega specifičnog?",
    answer:
      "Ima, i to su debljina zida i pogled na ulicu. Starija gradnja u tom delu ima zidove kroz koje prodor traje duže nego u novogradnji, pa montaža ume da potraje. Drugo, deo ulica u tom pojasu je prometan i uređen, pa poziciju spoljne jedinice biramo tako da ne stoji direktno iznad trotoara i da kondenzat ne kaplje na prolaznike.",
  },
  {
    question: "Koliko brzo možete da izađete na Zvezdaru?",
    answer:
      "Za Vukov spomenik, Đeram, Bulbulder i Konjarnik najčešće isti ili sledeći radni dan, jer je to blizu i lako dostupno. Za Mirijevo, Zeleno brdo i oba Mokra Luga rok je obično dan duži jer izlazak planiramo unapred. U julu i avgustu se rokovi produžavaju svuda, pa se redovan servis isplati zakazati u proleće.",
  },
  {
    question: "Imam kuću u Mirijevu na kosini, gde je najbolje da ide spoljna jedinica?",
    answer:
      "Na strani gde je teren najbliži nivou jedinice, jer to čini kasniji servis jednostavnim i jeftinijim. Kod kuća na nagibu se često desi da je najkraća trasa upravo prema onoj strani koja je ukopana ili teško dostupna, što znači da svaki naredni servis traži merdevine ili rad na visini. Par metara duža trasa prema pristupačnoj strani se isplati već posle drugog servisa.",
  },
  {
    question: "Da li možete da parkirate i priđete kući u uskoj ulici na Zelenom brdu?",
    answer:
      "U najvećem broju slučajeva da, ali nam pomaže da to znamo unapred. Deo ulica na Zelenom brdu i u starom Mirijevu je uzak, strm i bez mesta za zaustavljanje ispred kapije, pa opremu nosimo pešice od najbližeg mesta gde možemo da stanemo. To ne menja cenu, ali menja vreme koje planiramo za izlazak.",
  },
];

export default async function ServisKlimeZvezdaraPage() {
  const settings = await getSiteSettings();

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Početna", item: SITE_URL },
      { "@type": "ListItem", position: 2, name: "Servis klime Zvezdara", item: `${SITE_URL}${PATH}` },
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
    areaServed: { "@type": "Place", name: "Zvezdara, Beograd" },
  };

  return (
    <>
      <JsonLd data={breadcrumbJsonLd} />
      <JsonLd data={faqJsonLd} />
      <JsonLd data={serviceJsonLd} />

      <PageHero
        eyebrow="Zvezdara"
        title="Servis klime Zvezdara: od Vukovog spomenika do Mirijeva"
        subtitle="Zvezdara je stambena opština na brdu, sa starijom gradnjom nadomak centra oko Vukovog spomenika i Đerma, i porodičnim kućama na strmim parcelama Zelenog brda, Mirijeva i Mokrog Luga. Nagib ulice i blizina zelenila su dve stvari koje ovde najviše menjaju posao."
        primaryCta={{ label: `Pozovite ${settings.phone}`, href: `tel:${settings.phone.replace(/\s/g, "")}` }}
        secondaryCta={{ label: "Zakažite termin", href: "/kontakt" }}
        stats={[
          { value: "Cela opština", label: "od Vukovog spomenika do Mokrog Luga" },
          { value: "Teren na nagibu", label: "pozicija birana zbog pristupa" },
          { value: "Garancija", label: "na sve izvedene radove" },
        ]}
      />

      <section className="py-14">
        <Container className="max-w-3xl">
          <span className="text-sm font-semibold uppercase tracking-wide text-accent-dark">
            Stambena opština na brdu
          </span>
          <h2 className="mt-2 text-3xl font-bold text-navy">
            Blizu centra, a i dalje na kosini
          </h2>
          <p className="mt-4 text-muted">
            Zvezdara je pre svega stambena opština, bez velikih poslovnih zona i bez turističke
            vreve, i to se oseti na terenu: najveći deo posla su stanovi i kuće u kojima ljudi
            zaista žive cele godine. Ono što je čini specifičnom je kombinacija dve stvari koje se
            retko sreću zajedno. Donji pojas, oko Vukovog spomenika, Đerma, Bulbuldera i Ćalija, je
            praktično nastavak centra grada, sa starijom gradnjom, debelim zidovima i prometnim
            ulicama. Gornji pojas, Zeleno brdo, Mirijevo, Veliki i Mali Mokri Lug, su porodične
            kuće raspoređene po kosini, često na parcelama gde je jedna strana objekta u nivou
            ulice a druga metar ili dva ispod nje.
          </p>
          <p className="mt-4 text-muted">
            Između ta dva pojasa su Konjarnik, Učiteljsko naselje, Slavujev venac i Denkova bašta,
            gde se stambene zgrade i porodične kuće smenjuju iz ulice u ulicu. Novija gradnja se u
            poslednjih petnaestak godina najviše popunjavala baš tu i u Mirijevu, često na parcelama
            između postojećih kuća, tako da ista ulica ume da ima zgradu iz osamdesetih, kuću iz
            šezdesetih i novu zgradu sa pripremljenim pozicijama za spoljne jedinice.
          </p>
          <p className="mt-4 text-muted">
            Zato pre izlaska pitamo dve stvari: u kakvom ste objektu i kakav je teren oko njega.
            Odgovor na to obično već kaže da li nosimo standardnu opremu ili opremu za rad na
            visini, i koliko vremena treba da planiramo za sam pristup.
          </p>
        </Container>
      </section>

      <section className="bg-surface py-14">
        <Container>
          <span className="text-sm font-semibold uppercase tracking-wide text-accent-dark">Usluge</span>
          <h2 className="mt-2 text-3xl font-bold text-navy">Šta radimo na Zvezdari</h2>
          <div className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2">
            {services.map((service) => (
              <Link
                key={service.title}
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
            Nagib menja pristup
          </span>
          <h2 className="mt-2 text-3xl font-bold text-navy">
            Zašto na Zvezdari poziciju biramo prema terenu
          </h2>
          <p className="mt-4 text-muted">
            Na ravnoj parceli je izbor pozicije spoljne jedinice uglavnom pitanje najkraće trase i
            slobodnog protoka vazduha. Na kosini se tome dodaje treće pitanje, koje vlasnici retko
            postave pri montaži a osete pri svakom sledećem servisu: da li se do te jedinice može
            prići bez merdevina. Kod kuća na Zelenom brdu i u starom Mirijevu se često desi da je
            zid sa najkraćom trasom baš onaj ispod kog je teren propao metar i po, pa jedinica koja
            je pri montaži izgledala savršeno dostupno kasnije zahteva penjanje pri svakom pranju.
          </p>
          <p className="mt-4 text-muted">
            Zato na terenu u nagibu predlažemo poziciju koja je ponekad metar ili dva dalje, ali na
            strani gde je tlo u nivou jedinice. Ta razlika u trasi se plati jednom, pri montaži, dok
            se lakši pristup vraća kroz svaki naredni servis, i kroz mogućnost da sami proverite
            stanje jedinice bez ikakvog penjanja. Kod hitnih intervencija, kad uređaj stane usred
            avgusta, dostupna spoljna jedinica često znači i da posao završimo u jednom izlasku.
          </p>
          <p className="mt-4 text-muted">
            Zelenilo je druga stvar koju na Zvezdari uzimamo u obzir. Zvezdarska šuma, stari
            drvoredi u Učiteljskom naselju i bašte u Mirijevu i Mokrom Lugu znače više polena,
            semenja i sitnog lišća u vazduhu nego oko golih blokova. Lamele spoljne jedinice to
            hvataju kao filter i uređaj polako gubi na učinku, obično toliko postepeno da vlasnik
            pomisli kako je klima naprosto ostarila. Kad je jedinica pod krošnjom ili uz živu
            ogradu, dubinsko pranje spoljnog dela radimo redovnije nego što bi bilo potrebno na
            otvorenoj terasi.
          </p>
        </Container>
      </section>

      <section className="bg-surface py-14">
        <Container className="max-w-3xl">
          <span className="text-sm font-semibold uppercase tracking-wide text-accent-dark">
            Pre dolaska
          </span>
          <h2 className="mt-2 text-3xl font-bold text-navy">
            Šta proveravamo pre izlaska na Zvezdaru
          </h2>
          <p className="mt-4 text-muted">
            Kod stanova u donjem pojasu, oko Vukovog spomenika, Đerma i Bulbuldera, zanima nas sprat,
            debljina i tip zida kroz koji ide prodor, i da li fasada gleda na prometnu ulicu. Stariji
            zidovi u tom delu grada traže više vremena za prodor nego novogradnja, a pozicija iznad
            trotoara traži pažnju oko odvoda kondenzata.
          </p>
          <p className="mt-4 text-muted">
            Kod kuća na Zelenom brdu, u Mirijevu i Mokrom Lugu zanima nas nagib parcele, koja je
            strana objekta u nivou ulice, i da li ispred kapije ima mesta za zaustavljanje vozila.
            Uske i strme ulice u tim delovima ne menjaju cenu, ali menjaju vreme koje planiramo za
            izlazak, jer se oprema često nosi pešice od najbližeg mesta gde možemo da stanemo.
          </p>
          <p className="mt-4 text-muted">
            Par minuta razgovora telefonom o objektu i terenu obično je dovoljno da unapred znamo da
            li nosimo standardnu opremu za montažu ili opremu za rad na visini, i to je jedini
            razlog zbog kog postavljamo ta pitanja pre dolaska.
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
          <h2 className="mt-2 text-3xl font-bold text-navy">Okvirne cene za Zvezdaru</h2>
          <p className="mt-4 text-muted">
            Montaža uređaja od 9 ili 12 BTU kreće od 12000 dinara, 18 BTU od 15000 dinara, a 24 BTU
            od 18000 dinara, sa standardnom trasom do tri metra. Redovan servis je od 5000 dinara za
            9 i 12 BTU, odnosno od 5500 dinara za 18 i 24 BTU. Demontaža stare klime kreće od 3500
            dinara, a dopuna i provera gasa od 7000 dinara.
          </p>
          <p className="mt-4 text-muted">
            Na Zvezdari se najčešće pojave dve dodatne stavke. Prva je dužni metar trase preko tri
            metra, od 2500 do 3000 dinara, kod kuća gde poziciju biramo prema pristupačnoj strani a
            ne prema najkraćem putu. Druga je rad na visini, koji se javlja i u starijim zgradama u
            donjem pojasu i kod kuća na kosini gde je zid znatno viši od terena. Obe stavke
            procenjujemo unapred, pri dogovoru termina, da na kraju posla ne bi bilo iznenađenja.
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
            Pitanja koja najčešće dobijamo sa Zvezdare
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
