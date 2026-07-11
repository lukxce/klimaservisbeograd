import Link from "next/link";

import { Container } from "@/components/Container";
import { MobileMenu } from "@/components/MobileMenu";
import { getSiteSettings } from "@/lib/data";

const serviceLinks = [
  { href: "/usluge/servis", label: "Servis klima uređaja" },
  { href: "/usluge/montaza", label: "Montaža klima uređaja" },
  { href: "/usluge/popravka", label: "Popravka klima uređaja" },
  { href: "/usluge/dijagnostika", label: "Dijagnostika kvara" },
];

const navLinks = [
  { href: "/shop", label: "Prodaja klima" },
  { href: "/cenovnik", label: "Cenovnik" },
  { href: "/blog", label: "Blog" },
  { href: "/kontakt", label: "Kontakt" },
];

export async function Header() {
  const settings = await getSiteSettings();

  return (
    <header className="sticky top-0 z-40 border-b border-navy/10 bg-background/95 backdrop-blur">
      {/* Mobilni red: burger levo, logo centrirano, CTA desno */}
      <Container className="relative grid grid-cols-[auto_1fr_auto] items-center gap-2 py-4 md:hidden">
        <div className="flex justify-start">
          <MobileMenu serviceLinks={serviceLinks} navLinks={navLinks} />
        </div>
        <Link
          href="/"
          className="truncate text-center font-[family-name:var(--font-fraunces)] text-base font-semibold tracking-tight text-navy"
        >
          {settings.title}
        </Link>
        <div className="flex justify-end">
          <a
            href={`tel:${settings.phone.replace(/\s/g, "")}`}
            className="rounded-lg bg-navy px-4 py-2 text-sm font-semibold text-white transition hover:bg-accent"
          >
            Pozovite
          </a>
        </div>
      </Container>

      {/* Desktop red */}
      <Container className="hidden items-center justify-between py-5 md:flex">
        <Link
          href="/"
          className="font-[family-name:var(--font-fraunces)] text-xl font-semibold tracking-tight text-navy"
        >
          {settings.title}
        </Link>
        <nav className="flex items-center gap-7 text-sm font-medium text-navy/80">
          <div className="group relative">
            <Link href="/usluge" className="flex items-center gap-1 transition hover:text-navy">
              Usluge
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-3.5 w-3.5">
                <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.084l3.71-3.855a.75.75 0 111.08 1.04l-4.25 4.417a.75.75 0 01-1.08 0L5.21 8.27a.75.75 0 01.02-1.06z" clipRule="evenodd" />
              </svg>
            </Link>
            <div className="invisible absolute left-0 top-full w-64 rounded-xl border border-navy/10 bg-white p-2 opacity-0 shadow-lg transition group-hover:visible group-hover:opacity-100">
              {serviceLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="block rounded-lg px-4 py-2.5 text-sm text-navy transition hover:bg-surface hover:text-accent-dark"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href} className="transition hover:text-navy">
              {link.label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-5">
          <div className="hidden text-right lg:block">
            <a
              href={`tel:${settings.phone.replace(/\s/g, "")}`}
              className="block text-sm font-bold text-navy transition hover:text-accent-dark"
            >
              {settings.phone}
            </a>
            <span className="block text-[11px] text-muted">{settings.workingHours}</span>
          </div>
          <Link
            href="/kontakt"
            className="rounded-lg bg-navy px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-accent"
          >
            Zakažite termin
          </Link>
        </div>
      </Container>
    </header>
  );
}
