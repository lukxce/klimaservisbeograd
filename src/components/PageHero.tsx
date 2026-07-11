import type { ReactNode } from "react";

import { Container } from "@/components/Container";

type Stat = {
  value: string;
  label: string;
};

type Cta = {
  label: string;
  href: string;
};

function DecorativeBadge() {
  return (
    <div className="relative hidden h-full w-full items-center justify-center lg:flex">
      <div className="absolute h-64 w-64 rounded-full bg-accent/10 blur-2xl" />
      <div className="absolute -top-3 right-8 h-14 w-14 rotate-6 rounded-2xl bg-accent/15" />
      <div className="absolute bottom-4 left-4 h-9 w-9 rounded-full bg-navy/10" />
      <div className="relative flex h-40 w-40 items-center justify-center rounded-[2rem] border border-navy/10 bg-white shadow-xl">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" className="h-16 w-16 text-accent-dark">
          <path d="M12 2v20M2 12h20M5 5l14 14M19 5L5 19" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
          <circle cx="12" cy="12" r="3" fill="currentColor" />
        </svg>
      </div>
    </div>
  );
}

export function PageHero({
  eyebrow,
  title,
  subtitle,
  primaryCta,
  secondaryCta,
  stats,
  breadcrumb,
}: {
  eyebrow: string;
  title: ReactNode;
  subtitle?: string;
  primaryCta?: Cta;
  secondaryCta?: Cta;
  stats?: Stat[];
  breadcrumb?: ReactNode;
}) {
  return (
    <section className="relative overflow-hidden border-b border-navy/10 bg-surface">
      <div className="pointer-events-none absolute -right-32 -top-32 h-80 w-80 rounded-full bg-accent/10 blur-3xl" />
      <Container className="relative grid grid-cols-1 gap-10 py-16 lg:grid-cols-[1fr_auto] lg:items-center lg:py-20">
        <div>
          {breadcrumb}
          <span className="inline-flex items-center gap-3 text-sm font-semibold uppercase tracking-[0.2em] text-accent-dark">
            {eyebrow}
            <span className="h-px w-10 bg-accent/50" />
          </span>
          <h1 className="mt-5 max-w-2xl text-4xl font-semibold leading-[1.1] text-navy sm:text-5xl">
            {title}
          </h1>
          {subtitle && <p className="mt-5 max-w-2xl text-lg text-muted">{subtitle}</p>}
          {(primaryCta || secondaryCta) && (
            <div className="mt-8 flex flex-wrap gap-3">
              {primaryCta && (
                <a
                  href={primaryCta.href}
                  className="rounded-lg bg-navy px-6 py-3 text-sm font-semibold text-white transition hover:bg-accent-dark"
                >
                  {primaryCta.label}
                </a>
              )}
              {secondaryCta && (
                <a
                  href={secondaryCta.href}
                  className="rounded-lg border border-navy/20 px-6 py-3 text-sm font-semibold text-navy transition hover:bg-navy hover:text-white"
                >
                  {secondaryCta.label}
                </a>
              )}
            </div>
          )}
        </div>
        <div className="hidden h-48 w-48 lg:block">
          <DecorativeBadge />
        </div>
      </Container>

      {stats && stats.length > 0 && (
        <Container className="relative pb-14 md:pb-20">
          <div
            className={`grid divide-y divide-navy/10 rounded-xl border border-navy/10 bg-white shadow-sm sm:divide-x sm:divide-y-0 ${
              stats.length === 2 ? "sm:grid-cols-2" : "sm:grid-cols-3"
            }`}
          >
            {stats.map((stat) => (
              <div key={stat.label} className="flex items-center gap-3 px-6 py-4">
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-accent/10 text-accent-dark">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" className="h-4.5 w-4.5">
                    <path d="M12 2v20M2 12h20M5 5l14 14M19 5L5 19" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
                  </svg>
                </span>
                <div className="flex flex-col gap-0.5">
                  <span className="text-lg font-semibold text-navy">
                    {stat.value}
                  </span>
                  <span className="text-xs text-muted">{stat.label}</span>
                </div>
              </div>
            ))}
          </div>
        </Container>
      )}
    </section>
  );
}
