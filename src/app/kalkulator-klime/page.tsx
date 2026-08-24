import type { Metadata } from "next";
import Link from "next/link";

import { Container } from "@/components/Container";
import { PageHero } from "@/components/PageHero";
import { KlimaCalculator } from "@/components/KlimaCalculator";
import { JsonLd } from "@/components/JsonLd";
import { getSiteSettings } from "@/lib/data";
import { SITE_URL } from "@/lib/site-config";

const PATH = "/kalkulator-klime";

export async function generateMetadata(): Promise<Metadata> {
  const settings = await getSiteSettings();
  const title = `Kalkulator klime u ${settings.city}u | koja snaga mi treba`;
  const description = `Izračunajte koja BTU snaga klime vam treba na osnovu kvadrature, orijentacije i sprata, i vidite koji modeli u ${settings.city}u odgovaraju.`;

  return {
    title,
    description,
    alternates: { canonical: PATH },
    openGraph: {
      images: [`${SITE_URL}/opengraph-image`],
      title,
      description,
      type: "website",
      url: `${SITE_URL}${PATH}`,
    },
  };
}

const faq = [
  {
    question: "Da li je procena kalkulatora dovoljno precizna za kupovinu klime?",
    answer:
      "Za većinu stanova i kuća da - kalkulator računa na osnovu kvadrature, orijentacije, sprata, izolacije i broja osoba, što pokriva glavne faktore. Za granične slučajeve, recimo dnevnu sobu sa panoramskim staklom ili spojene prostorije, ipak preporučujemo kratak razgovor sa serviserom pre nego što naručite konkretan model.",
  },
  {
    question: "Zašto je orijentacija prozora toliko bitna u beogradskim zgradama?",
    answer:
      "Stanovi okrenuti ka jugu ili zapadu, čest raspored u novogradnji na Novom Beogradu i Voždovcu, primaju direktno sunce po ceo dan i posebno se zagrevaju popodne. Ista kvadratura okrenuta ka severu ili istoku hladi se lakše, pa kalkulator tu razliku uračunava kroz koeficijent orijentacije.",
  },
  {
    question: "Šta znači kad kalkulator predloži multi-split sistem?",
    answer:
      "Kada izračunata snaga pređe 24000 BTU, jedna spoljna jedinica teško prati potrošnju, posebno u velikim stanovima sa otvorenim dnevnim boravkom i kuhinjom u istom prostoru. Multi-split sistem, sa po jednom unutrašnjom jedinicom za svaku prostoriju, obično je i tiši i isplativiji izbor od jedne predimenzionisane klime.",
  },
  {
    question: "Da li sprat na kom se stan nalazi menja preporuku?",
    answer:
      "Da. Stanovi na poslednjem spratu, pogotovo u zgradama bez dodatne izolacije krova, leti se zagrevaju brže nego stanovi na srednjim spratovima, pa kalkulator za potkrovlje i vrh zgrade dodaje deo na osnovnu procenu.",
  },
];

export default async function KalkulatorKlimePage() {
  const settings = await getSiteSettings();

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Početna", item: SITE_URL },
      { "@type": "ListItem", position: 2, name: "Kalkulator klime", item: `${SITE_URL}${PATH}` },
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

  return (
    <>
      <JsonLd data={breadcrumbJsonLd} />
      <JsonLd data={faqJsonLd} />

      <PageHero
        eyebrow="Besplatan alat"
        title={`Koja klima mi treba za ${settings.city}?`}
        subtitle="Odgovorite na nekoliko pitanja o prostoriji i dobićete preporučenu snagu u BTU, plus modele iz naše ponude koji joj odgovaraju."
        breadcrumb={
          <nav className="mb-3 text-sm text-muted">
            <Link href="/" className="hover:text-accent">Početna</Link>
            <span className="mx-2">/</span>
            <span className="text-navy">Kalkulator klime</span>
          </nav>
        }
      />

      <section className="py-14">
        <Container className="max-w-2xl">
          <KlimaCalculator phone={settings.phone} />
        </Container>
      </section>

      <section className="border-t border-black/5 bg-surface py-14">
        <Container className="max-w-3xl">
          <span className="font-mono text-sm font-semibold uppercase tracking-wide text-accent">
            Kako računamo
          </span>
          <h2 className="mt-2 text-2xl font-bold text-navy">Otkud ovi brojevi</h2>
          <p className="mt-4 text-muted">
            Polazna tačka je kvadratura prostorije i osnovna procena snage po
            kvadratnom metru. Tu cifru zatim korigujemo prema realnim uslovima u
            stanu: visina plafona, strana sveta na koju su okrenuti prozori,
            sprat, kvalitet stolarije i izolacije, kao i broj ljudi koji obično
            borave u prostoriji.
          </p>
          <p className="mt-4 text-muted">
            Za zgrade u Beogradu je posebno bitna orijentacija - stanovi okrenuti
            ka zapadu ili jugu, čest slučaj u novijim naseljima, dobijaju veći
            koeficijent jer se popodne duže zagrevaju. Konačan rezultat
            zaokružujemo na stvarnu prodajnu snagu (9000, 12000, 18000 ili 24000
            BTU), a ako procena pređe taj okvir, predlažemo multi-split rešenje
            umesto jedne predimenzionisane jedinice.
          </p>
        </Container>
      </section>

      <section className="py-14">
        <Container className="max-w-3xl">
          <span className="font-mono text-sm font-semibold uppercase tracking-wide text-accent">
            Pitanja
          </span>
          <h2 className="mt-2 text-2xl font-bold text-navy">Često postavljana pitanja</h2>
          <div className="mt-6 space-y-6">
            {faq.map((item) => (
              <div key={item.question}>
                <h3 className="font-semibold text-navy">{item.question}</h3>
                <p className="mt-1 text-sm text-muted">{item.answer}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
