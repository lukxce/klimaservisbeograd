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
      <Container className="relative py-16 md:py-20">
        {breadcrumb}
        <span className="inline-flex items-center gap-3 text-sm font-semibold uppercase tracking-[0.2em] text-accent-dark">
          {eyebrow}
          <span className="h-px w-10 bg-accent/50" />
        </span>
        <h1 className="mt-5 max-w-3xl text-4xl font-semibold leading-[1.1] text-navy sm:text-5xl">
          {title}
        </h1>
        {subtitle && <p className="mt-5 max-w-2xl text-lg text-muted">{subtitle}</p>}
        {(primaryCta || secondaryCta) && (
          <div className="mt-8 flex flex-wrap gap-3">
            {primaryCta && (
              <a
                href={primaryCta.href}
                className="rounded-lg bg-navy px-6 py-3 text-sm font-semibold text-white transition hover:bg-accent"
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

        {stats && stats.length > 0 && (
          <div
            className={`mt-12 grid divide-y divide-navy/10 rounded-xl border border-navy/10 bg-white sm:divide-x sm:divide-y-0 ${
              stats.length === 2 ? "sm:grid-cols-2" : "sm:grid-cols-3"
            }`}
          >
            {stats.map((stat) => (
              <div key={stat.label} className="flex flex-col gap-0.5 px-6 py-4">
                <span className="font-[family-name:var(--font-fraunces)] text-lg font-semibold text-navy">
                  {stat.value}
                </span>
                <span className="text-xs text-muted">{stat.label}</span>
              </div>
            ))}
          </div>
        )}
      </Container>
    </section>
  );
}
