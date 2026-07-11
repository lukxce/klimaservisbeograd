import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

import { Container } from "@/components/Container";
import { PlaceholderImage } from "@/components/PlaceholderImage";
import { ServiceCard } from "@/components/ServiceCard";
import { ProductCard } from "@/components/ProductCard";
import { BlogCard } from "@/components/BlogCard";
import { ClosingCta } from "@/components/ClosingCta";
import {
  getSiteSettings,
  getFeaturedServices,
  getFeaturedProducts,
  getBlogPosts,
} from "@/lib/data";
import { formatServiceAreas } from "@/lib/format";
import { SITE_URL } from "@/lib/site-config";

export async function generateMetadata(): Promise<Metadata> {
  const settings = await getSiteSettings();
  const title = `Klima servis ${settings.city} | Servis, montaža i prodaja klima uređaja`;
  const description = `Servis, montaža, popravka i prodaja klima uređaja u ${settings.city}u i okolini. Brz izlazak na teren, garancija na radove. Pozovite ${settings.phone}.`;

  return {
    title: { absolute: title },
    description,
    alternates: { canonical: "/" },
    openGraph: { title, description, type: "website", url: SITE_URL },
  };
}

export default async function HomePage() {
  const [settings, featuredServices, featuredProducts, posts] = await Promise.all([
    getSiteSettings(),
    getFeaturedServices(),
    getFeaturedProducts(),
    getBlogPosts(),
  ]);

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-navy text-white">
        <div className="pointer-events-none absolute -left-40 top-0 h-[30rem] w-[30rem] rounded-full bg-accent/15 blur-3xl" />
        <div className="pointer-events-none absolute -right-32 bottom-0 h-80 w-80 rounded-full bg-white/5 blur-3xl" />
        <Container className="relative grid grid-cols-1 items-center gap-12 py-20 lg:grid-cols-[1.2fr_0.8fr] lg:py-28">
          <div>
            <span className="inline-flex items-center gap-3 text-sm font-semibold uppercase tracking-[0.2em] text-accent">
              Klima servis · Beograd
              <span className="h-px w-10 bg-accent/60" />
            </span>
            <h1 className="mt-6 text-4xl font-semibold leading-[1.08] sm:text-6xl">
              Klima uređaji u sigurnim rukama,
              <span className="text-accent"> cele godine</span>
            </h1>
            <p className="mt-6 max-w-lg text-lg text-white/70">
              Ugradnja, servis i popravka klima uređaja na teritoriji celog
              Beograda. Precizni termini, uredna montaža i cena poznata pre
              početka rada.
            </p>
            <div className="mt-9 flex flex-wrap gap-3">
              <Link
                href="/shop"
                className="rounded-lg bg-accent px-7 py-3.5 text-sm font-semibold text-white transition hover:bg-accent-dark"
              >
                Pogledajte klime
              </Link>
              <a
                href="#usluge"
                className="rounded-lg border border-white/25 px-7 py-3.5 text-sm font-semibold text-white transition hover:bg-white hover:text-navy"
              >
                Pogledajte usluge
              </a>
            </div>
            <ul className="mt-10 flex flex-wrap gap-x-8 gap-y-2 text-sm text-white/70">
              <li className="flex items-center gap-2">
                <span className="text-accent">—</span> Termin koji se poštuje
              </li>
              <li className="flex items-center gap-2">
                <span className="text-accent">—</span> Garancija na sve radove
              </li>
              <li className="flex items-center gap-2">
                <span className="text-accent">—</span> Cena poznata unapred
              </li>
            </ul>
          </div>

          {/* Kartica za zakazivanje */}
          <div className="rounded-2xl border border-white/10 bg-white p-8 text-navy shadow-2xl">
            <span className="text-xs font-semibold uppercase tracking-[0.18em] text-accent-dark">
              Zakažite dolazak
            </span>
            <a
              href={`tel:${settings.phone.replace(/\s/g, "")}`}
              className="mt-3 block font-[family-name:var(--font-display)] text-3xl font-semibold tracking-tight hover:text-accent-dark"
            >
              {settings.phone}
            </a>
            <div className="mt-6 space-y-4 border-t border-navy/10 pt-6 text-sm">
              <div className="flex items-start justify-between gap-4">
                <span className="text-muted">Radno vreme</span>
                <span className="text-right font-semibold">{settings.workingHours}</span>
              </div>
              <div className="flex items-start justify-between gap-4">
                <span className="shrink-0 text-muted">Pokrivamo</span>
                <span className="text-right font-semibold">
                  {formatServiceAreas(settings.city, settings.serviceAreas)}
                </span>
              </div>
              <div className="flex items-start justify-between gap-4">
                <span className="text-muted">Odgovor na upit</span>
                <span className="text-right font-semibold">u toku radnog dana</span>
              </div>
            </div>
            <Link
              href="/kontakt"
              className="mt-7 block rounded-lg bg-navy px-6 py-3.5 text-center text-sm font-semibold text-white transition hover:bg-accent"
            >
              Pošaljite upit
            </Link>
          </div>
        </Container>

        {/* Brendovi */}
        <div className="relative border-t border-white/10">
          <Container className="py-5">
            <div
              className="relative overflow-hidden"
              style={{
                maskImage:
                  "linear-gradient(to right, transparent, black 12%, black 88%, transparent)",
              }}
            >
              <div className="marquee-track flex w-max items-center gap-12">
                {[...settings.brands, ...settings.brands].map((brand, i) => (
                  <span
                    key={`${brand}-${i}`}
                    className="whitespace-nowrap text-sm font-semibold uppercase tracking-widest text-white/35"
                  >
                    {brand}
                  </span>
                ))}
              </div>
            </div>
          </Container>
        </div>
      </section>

      {/* Featured services */}
      <section id="usluge" className="scroll-mt-24 py-16">
        <Container>
          <div className="flex items-end justify-between">
            <div>
              <span className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-wide text-accent-dark">
                <span className="h-px w-6 bg-accent" />
                Usluge
              </span>
              <h2 className="mt-2 text-3xl font-bold text-navy sm:text-4xl">Najtraženije usluge</h2>
            </div>
            <Link href="/cenovnik" className="hidden text-sm font-semibold text-accent hover:underline sm:block">
              Kompletan cenovnik →
            </Link>
          </div>
          <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {featuredServices.map((service, i) => (
              <div key={service.slug} className={i === 3 ? "hidden sm:block" : ""}>
                <ServiceCard service={service} />
              </div>
            ))}
          </div>
          <div className="mt-6 flex flex-col gap-3 sm:hidden">
            <Link
              href="/cenovnik"
              className="rounded-lg bg-accent px-6 py-3 text-center text-sm font-semibold text-white transition hover:bg-accent-dark"
            >
              Pogledajte cenovnik
            </Link>
            <Link
              href="/usluge"
              className="rounded-lg border border-navy/15 px-6 py-3 text-center text-sm font-semibold text-navy transition hover:bg-navy hover:text-white"
            >
              Vidi sve usluge
            </Link>
          </div>
        </Container>
      </section>

      {/* How it works */}
      <section className="bg-surface py-16">
        <Container>
          <div className="mx-auto max-w-2xl text-center">
            <span className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-wide text-accent-dark">
              <span className="h-px w-6 bg-accent" />
              Kako radimo
              <span className="h-px w-6 bg-accent" />
            </span>
            <h2 className="mt-2 text-3xl font-bold text-navy sm:text-4xl">
              Od poziva do hladnog vazduha u tri koraka
            </h2>
          </div>
          <div className="relative mt-12 grid grid-cols-1 gap-10 sm:grid-cols-3 sm:gap-6">
            <div className="pointer-events-none absolute left-[16.66%] right-[16.66%] top-7 hidden border-t-2 border-dashed border-accent/25 sm:block" />
            {[
              {
                step: "1",
                title: "Pozovite ili pošaljite upit",
                text: "Opišite problem ili šta vam treba. Odmah dobijate okvirnu cenu i termin, bez čekanja.",
              },
              {
                step: "2",
                title: "Dolazak i dijagnostika",
                text: "Serviser izlazi na teren u dogovoreno vreme, utvrđuje stanje i potvrđuje cenu pre početka rada.",
              },
              {
                step: "3",
                title: "Rešen problem, sa garancijom",
                text: "Radovi se završavaju na licu mesta kad god je moguće. Na sve radove dajemo garanciju.",
              },
            ].map((item) => (
              <div key={item.step} className="relative text-center">
                <span className="relative z-10 mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-accent-dark text-xl font-bold text-white shadow-lg shadow-accent/25">
                  {item.step}
                </span>
                <h3 className="mt-5 text-lg font-semibold text-navy">{item.title}</h3>
                <p className="mx-auto mt-2 max-w-xs text-sm text-muted">{item.text}</p>
              </div>
            ))}
          </div>
          <div className="mt-12 text-center">
            <a
              href={`tel:${settings.phone.replace(/\s/g, "")}`}
              className="inline-block rounded-lg bg-navy px-7 py-3.5 text-sm font-semibold text-white transition hover:bg-accent"
            >
              Pozovite {settings.phone}
            </a>
          </div>
        </Container>
      </section>

      {/* Featured products */}
      <section className="bg-white py-16">
        <Container>
          <div className="flex items-end justify-between">
            <div>
              <span className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-wide text-accent-dark">
                <span className="h-px w-6 bg-accent" />
                Katalog klima
              </span>
              <h2 className="mt-2 text-3xl font-bold text-navy sm:text-4xl">Izdvojeni klima uređaji</h2>
            </div>
            <Link href="/shop" className="hidden text-sm font-semibold text-accent hover:underline sm:block">
              Kompletan katalog →
            </Link>
          </div>
          <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {featuredProducts.map((product) => (
              <ProductCard key={product.slug} product={product} />
            ))}
          </div>
          <div className="mt-6 sm:hidden">
            <Link
              href="/shop"
              className="block rounded-lg bg-navy px-6 py-3 text-center text-sm font-semibold text-white transition hover:bg-navy-light"
            >
              Pogledajte sve modele
            </Link>
          </div>
        </Container>
      </section>

      {/* About */}
      <section className="relative overflow-hidden bg-navy py-16 text-white">
        <div className="pointer-events-none absolute -right-24 top-0 h-72 w-72 rounded-full bg-accent/10 blur-3xl" />
        <Container className="relative grid grid-cols-1 items-center gap-10 md:grid-cols-2">
          {settings.aboutImageUrl ? (
            <div className="relative h-72 w-full overflow-hidden rounded-3xl ring-1 ring-white/10 sm:h-96">
              <Image src={settings.aboutImageUrl} alt={settings.title} fill className="object-cover" />
            </div>
          ) : (
            <PlaceholderImage
              label="Slika: serviser na terenu"
              tone="navy"
              className="h-72 w-full rounded-3xl ring-1 ring-white/10 sm:h-96"
            />
          )}
          <div>
            <span className="text-sm font-semibold uppercase tracking-wide text-accent">
              O nama
            </span>
            <h2 className="mt-2 text-3xl font-bold">
              Servis klima uređaja sa iskustvom na terenu
            </h2>
            <p className="mt-4 text-white/70">
              {settings.title} pruža usluge servisa, montaže, popravke i prodaje
              klima uređaja. Pokrivamo: {formatServiceAreas(settings.city, settings.serviceAreas)}.
            </p>
            <p className="mt-3 text-white/70">
              Radimo sa proverenim brendovima: {settings.brands.join(", ")}.
            </p>
            <ul className="mt-8 grid grid-cols-1 gap-3 border-y border-white/10 py-6 sm:grid-cols-2">
              <li className="flex items-center gap-2 text-sm text-white/80">
                <span className="text-accent">—</span> Svi vodeći brendovi klima
              </li>
              <li className="flex items-center gap-2 text-sm text-white/80">
                <span className="text-accent">—</span> Garancija na sve radove
              </li>
              <li className="flex items-center gap-2 text-sm text-white/80">
                <span className="text-accent">—</span> Uredna montaža bez oštećenja
              </li>
              <li className="flex items-center gap-2 text-sm text-white/80">
                <span className="text-accent">—</span> Originalni rezervni delovi
              </li>
            </ul>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href={`tel:${settings.phone.replace(/\s/g, "")}`}
                className="rounded-lg bg-accent px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-accent/25 transition hover:bg-accent-dark"
              >
                Pozovite {settings.phone}
              </a>
              <Link
                href="/kontakt"
                className="rounded-lg border border-white/20 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white hover:text-navy"
              >
                Kontakt
              </Link>
            </div>
          </div>
        </Container>
      </section>

      {/* CTA strip */}
      <section className="py-16">
        <Container className="grid grid-cols-1 gap-6 sm:grid-cols-3">
          {[
            {
              href: "/cenovnik",
              eyebrow: "Cenovnik",
              title: "Proverite cene usluga",
              text: "Servis, montaža, popravka i dodatni radovi prikazani pregledno.",
              icon: (
                <path d="M9 7h6m-6 4h6m-6 4h3M5 3h14a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1Z" />
              ),
            },
            {
              href: "/shop",
              eyebrow: "Shop",
              title: "Kupite novu klimu",
              text: "Pregledajte katalog uređaja sa montažom uključenom u cenu.",
              icon: (
                <path d="M3 7h18v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V7Zm3 3h8m-8 8c1.5 2 1.5 3 0 4m6-4c1.5 2 1.5 3 0 4m6-4c1.5 2 1.5 3 0 4" />
              ),
            },
            {
              href: "/kontakt",
              eyebrow: "Kvar",
              title: "Prijavite kvar",
              text: "Opišite problem i dogovorite izlazak servisera.",
              icon: (
                <path d="m14.7 6.3 3 3L8 19H5v-3l9.7-9.7Zm2-2 1.6-1.6a1 1 0 0 1 1.4 0l1.6 1.6a1 1 0 0 1 0 1.4L19.7 7.3l-3-3Z" />
              ),
            },
          ].map((card) => (
            <Link
              key={card.href}
              href={card.href}
              className="group rounded-2xl border border-black/5 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:border-accent/20 hover:shadow-lg"
            >
              <div className="flex items-start justify-between">
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-accent/10 text-accent transition group-hover:bg-accent group-hover:text-white">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-5 w-5"
                  >
                    {card.icon}
                  </svg>
                </span>
                <span className="text-accent opacity-0 transition group-hover:translate-x-1 group-hover:opacity-100">
                  →
                </span>
              </div>
              <span className="mt-4 block text-xs font-semibold uppercase tracking-wide text-accent-dark">
                {card.eyebrow}
              </span>
              <h3 className="mt-1 text-lg font-semibold text-navy">{card.title}</h3>
              <p className="mt-1 text-sm text-muted">{card.text}</p>
            </Link>
          ))}
        </Container>
      </section>

      {/* Blog preview */}
      <section className="bg-surface py-16">
        <Container>
          <div className="flex items-end justify-between">
            <div>
              <span className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-wide text-accent-dark">
                <span className="h-px w-6 bg-accent" />
                Blog
              </span>
              <h2 className="mt-2 text-3xl font-bold text-navy sm:text-4xl">Korisni tekstovi o klimama</h2>
            </div>
            <Link href="/blog" className="hidden text-sm font-semibold text-accent hover:underline sm:block">
              Ceo blog →
            </Link>
          </div>
          <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-3">
            {posts.slice(0, 3).map((post) => (
              <BlogCard key={post.slug} post={post} />
            ))}
          </div>
        </Container>
      </section>

      <ClosingCta phone={settings.phone} />
    </>
  );
}
