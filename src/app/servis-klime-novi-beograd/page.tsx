import type { Metadata } from "next";
import Link from "next/link";

import { Container } from "@/components/Container";
import { PageHero } from "@/components/PageHero";
import { ClosingCta } from "@/components/ClosingCta";
import { JsonLd } from "@/components/JsonLd";
import { getSiteSettings } from "@/lib/data";
import { SITE_URL } from "@/lib/site-config";

const PATH = "/servis-klime-novi-beograd";

export async function generateMetadata(): Promise<Metadata> {
  const settings = await getSiteSettings();
  const title = "Servis klime Novi Beograd | montaža, čišćenje i popravka";
  const description = `Servis klima uređaja na Novom Beogradu: blokovi, soliteri i novogradnja. Montaža, dubinsko pranje, dopuna gasa i popravka. Pozovite ${settings.phone}.`;

  return {
    title,
    description,
    alternates: { canonical: PATH },
    openGraph: {
      images: [`${SITE_URL}/opengraph-image`], title, description, type: "website", url: `${SITE_URL}${PATH}` },
  };
}

const services = [
  {
    title: "Redovan servis i dubinsko pranje",
    text: "Pranje isparivača, turbine i filtera, dezinfekcija unutrašnje jedinice i provera odvoda kondenzata. U blokovima ovo radimo bez skidanja jedinice sa zida, sa zaštitnom kesom i usisom vode, pa nema kapanja po parketu ni po komšiji ispod.",
    href: "/usluge/servis",
  },
  {
    title: "Montaža klime u soliteru i novogradnji",
    text: "Postavljanje unutrašnje i spoljne jedinice, trasa, vakumiranje i puštanje u rad. Na višim spratovima radimo sa opremom za rad na visini, a poziciju spoljne jedinice usklađujemo sa pravilima zgrade pre nego što bilo šta izbušimo.",
    href: "/usluge/montaza",
  },
  {
    title: "Popravka i dopuna gasa",
    text: "Klima ne hladi, curi voda, pali se i gasi u kratkim intervalima ili prijavljuje grešku. Prvo tražimo uzrok, pa tek onda dopunjavamo gas ili menjamo deo, jer dopuna preko curenja traje samo do sledeće sezone.",
    href: "/usluge/popravka",
  },
  {
    title: "Dijagnostika i konstatacija kvara",
    text: "Izlazak na teren, merenje pritiska, provera elektronike i pisana konstatacija sa procenom troška. Korisno i kada kupujete polovan stan u bloku pa ne znate u kakvom je stanju zatečena klima.",
    href: "/usluge/dijagnostika",
  },
];

const faq = [
  {
    question: "Radite li servis klime u blokovima na Novom Beogradu?",
    answer:
      "Da, blokovi su nam svakodnevni teren. Pokrivamo celu opštinu, od Blokova 19, 21, 22, 23, 30, 44, 45, 61, 62, 63, 70 i 70a, preko Fontane, Ledina i Bežanijske kose, do poslovnih objekata uz Bulevar Mihajla Pupina. Za intervencije u blokovima uglavnom uspevamo da ponudimo termin isti ili sledeći radni dan.",
  },
  {
    question: "Da li smem sam da odlučim gde ide spoljna jedinica u soliteru?",
    answer:
      "Ne u potpunosti. Fasada zgrade je zajednička imovina, pa poziciju spoljne jedinice po pravilu određuje kućni red ili odluka skupštine stanara. Većina novobeogradskih solitera ima predviđene pozicije na terasi ili u loggi, i to je najsigurnije rešenje. Detaljnije o tome pisali smo u tekstu o postavljanju klime na fasadu zgrade.",
  },
  {
    question: "Kako izvodite trasu u panelnoj zgradi?",
    answer:
      "Panelne zgrade imaju armiranobetonske zidove sa gustom armaturom, pa se trasa ne probija nasumično. Bušimo prolaz na mestu gde ne presecamo armaturu, a instalaciju vodimo kroz PVC kanalicu ili postojeći prolaz ka terasi. Ako je pozicija takva da prirodan pad odvoda ne postoji, ugrađujemo pumpicu za kondenzat.",
  },
  {
    question: "Koliko košta montaža klime na Novom Beogradu?",
    answer:
      "Montaža uređaja od 9 ili 12 BTU kreće od 12000 dinara, 18 BTU od 15000 dinara, a 24 BTU od 18000 dinara, sa standardnom trasom do tri metra. Svaki dodatni dužni metar naplaćuje se od 2500 do 3000 dinara u zavisnosti od jačine uređaja. Rad na visini na fasadi solitera dogovara se posebno, na osnovu procene pozicije.",
  },
  {
    question: "Da li radite u stanovima u novogradnji koji još nemaju useljene stanare?",
    answer:
      "Da, i to je najbolji trenutak za montažu. Dok nema poda, nameštaja i krečenja, trasa može da se sakrije u zid umesto u kanalicu, a odvod kondenzata da se izvede na najkraći mogući način. Ako ste u fazi opremanja stana, pozovite nas pre nego što izvođač zatvori zidove.",
  },
  {
    question: "Zašto klima u bloku curi vodu na zid?",
    answer:
      "Najčešće zbog zapušenog odvoda kondenzata ili prljave unutrašnje jedinice, ređe zbog pogrešnog nagiba jedinice pri montaži. U višespratnicama je odvod često duži nego u kući, pa se lakše zapuši. Intervencija je kratka, ali je ne treba odlagati jer voda ide u zid i ka susednom stanu.",
  },
];

export default async function ServisKlimeNoviBeogradPage() {
  const settings = await getSiteSettings();

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Početna", item: SITE_URL },
      { "@type": "ListItem", position: 2, name: "Servis klime Novi Beograd", item: `${SITE_URL}${PATH}` },
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
    provider: { "@type": "HVACBusiness", name: settings.title, telephone: settings.phone, address: settings.address ? { "@type": "PostalAddress", streetAddress: settings.address, addressLocality: settings.city, addressCountry: "RS" } : undefined, },
    areaServed: { "@type": "Place", name: "Novi Beograd, Beograd" },
  };

  return (
    <>
      <JsonLd data={breadcrumbJsonLd} />
      <JsonLd data={faqJsonLd} />
      <JsonLd data={serviceJsonLd} />

      <PageHero
        eyebrow="Novi Beograd"
        title="Servis klime Novi Beograd: blokovi, soliteri i novogradnja"
        subtitle="Izlazimo na teren po celoj opštini, od blokova uz Savu do Bežanijske kose. Radimo servis, montažu, popravku i dopunu gasa, sa iskustvom u zgradama gde pozicija spoljne jedinice i dužina trase nisu stvar slobodnog izbora."
        primaryCta={{ label: `Pozovite ${settings.phone}`, href: `tel:${settings.phone.replace(/\s/g, "")}` }}
        secondaryCta={{ label: "Prijavite kvar", href: "/kontakt" }}
        stats={[
          { value: "Isti ili sledeći dan", label: "termin za blokove i okolinu" },
          { value: "Rad na visini", label: "montaža na fasadi solitera" },
          { value: "Garancija", label: "na sve izvedene radove" },
        ]}
      />

      <section className="py-14">
        <Container className="max-w-3xl">
          <span className="text-sm font-semibold uppercase tracking-wide text-accent-dark">
            Zašto je Novi Beograd poseban
          </span>
          <h2 className="mt-2 text-3xl font-bold text-navy">
            Zgrada diktira posao, ne uređaj
          </h2>
          <p className="mt-4 text-muted">
            Novi Beograd je najveća opština u gradu i gotovo u celosti vertikalna. Blokovska
            gradnja iz sedamdesetih i osamdesetih, soliteri od deset do dvadeset i više spratova,
            i noviji stambeni kompleksi uz Bulevar i Savu. Tehnički, klima uređaj je svuda isti.
            Ono što se menja od zgrade do zgrade je gde spoljna jedinica sme da stoji, kuda se
            provlači trasa i kako se izvodi odvod kondenzata.
          </p>
          <p className="mt-4 text-muted">
            U starijim blokovima zidovi su armiranobetonski paneli sa gustom armaturom, pa se
            prolaz za cevi ne buši gde padne, nego tamo gde ne presecamo nosivi element. U
            soliterima su terase i lodže po pravilu jedina dozvoljena pozicija za spoljnu
            jedinicu, jer je ulična fasada zajednička imovina i pod režimom koji je u
            međuvremenu i zakonski pooštren. U novogradnji su pozicije obično predviđene
            projektom, sa pripremljenim prodorima i mestom za jedinicu, pa je posao najbrži,
            ali samo ako se poštuje ono što je projektant predvideo.
          </p>
          <p className="mt-4 text-muted">
            Zato pre izlaska pitamo dve stvari: u kojoj ste zgradi i na kom spratu. Odgovor na
            to obično već kaže koliko će posao trajati i šta je realno izvodljivo.
          </p>
        </Container>
      </section>

      <section className="bg-surface py-14">
        <Container>
          <span className="text-sm font-semibold uppercase tracking-wide text-accent-dark">Usluge</span>
          <h2 className="mt-2 text-3xl font-bold text-navy">Šta radimo na Novom Beogradu</h2>
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
            Spoljna jedinica
          </span>
          <h2 className="mt-2 text-3xl font-bold text-navy">
            Gde jedinica sme da stoji u bloku i soliteru
          </h2>
          <p className="mt-4 text-muted">
            Pravilo koje važi za skoro sve novobeogradske zgrade: jedinica ide na terasu, u lodžu
            ili na dvorišnu stranu, a ne na fasadu okrenutu ka ulici ili trgu. To više nije samo
            pitanje kućnog reda, nego i zakonske obaveze sa rokovima koji već teku. Ako vam je
            jedinica trenutno na uličnoj fasadi, vredi da znate do kada mora da se premesti.
          </p>
          <p className="mt-4 text-muted">
            Praktična strana je jednako važna. Jedinica na terasi mora imati slobodan protok
            vazduha sa najmanje trideset centimetara iza rešetke, ne sme duvati direktno u
            zastakljenje, i ne sme kapati kondenzat na balkon ispod. Poslednje je najčešći razlog
            zbog kog nas komšije pozovu, i skoro uvek je posledica montaže koja je odvod rešila
            najkraćim putem umesto pravim.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Link
              href="/blog/klima-na-fasadi-novi-rokovi-i-kazne"
              className="rounded-lg border border-navy/20 px-5 py-2.5 text-sm font-semibold text-navy transition hover:bg-navy hover:text-white"
            >
              Rokovi i kazne za jedinicu na fasadi
            </Link>
            <Link
              href="/blog/klima-u-soliteru-na-novom-beogradu"
              className="rounded-lg border border-navy/20 px-5 py-2.5 text-sm font-semibold text-navy transition hover:bg-navy hover:text-white"
            >
              Klima u soliteru: vodič pre ugradnje
            </Link>
          </div>
        </Container>
      </section>

      <section className="bg-surface py-14">
        <Container className="max-w-3xl">
          <span className="text-sm font-semibold uppercase tracking-wide text-accent-dark">Cene</span>
          <h2 className="mt-2 text-3xl font-bold text-navy">Okvirne cene za Novi Beograd</h2>
          <p className="mt-4 text-muted">
            Montaža uređaja od 9 ili 12 BTU kreće od 12000 dinara, 18 BTU od 15000 dinara, a 24
            BTU od 18000 dinara, sa standardnom trasom do tri metra. Redovan servis za 9 i 12 BTU
            je od 5000 dinara, za 18 i 24 BTU od 5500 dinara, a dopuna i provera gasa od 7000
            dinara. Dodatni dužni metar trase naplaćuje se od 2500 do 3000 dinara, u zavisnosti
            od jačine uređaja.
          </p>
          <p className="mt-4 text-muted">
            Cene ne zavise od toga u kom ste bloku, ali zavise od pozicije. Rad na visini na
            fasadi solitera, skrivanje trase u zid umesto u kanalicu i ugradnja pumpice za
            kondenzat su stavke koje se dogovaraju unapred, pre nego što ekipa dođe.
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
            Pitanja koja najčešće dobijamo sa Novog Beograda
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
