import { createFileRoute } from "@tanstack/react-router";

import { CtaBand, PageHero } from "@/components/site/layout";
import {
  BUSINESS_SUPPORT,
  ELECTRONIC_SERVICES,
  PHYSICAL_SERVICES,
  RISK_SERVICES,
} from "@/lib/site-data";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Our Services | Lancaster Security Limited" },
      {
        name: "description",
        content:
          "Explore Lancaster Security's services — static guarding, K9 units, event security, VIP protection, alarm response, CCTV, access control, perimeter protection, risk advisory, and business support.",
      },
      { property: "og:type", content: "website" },
      { property: "og:title", content: "Security Services | Lancaster Security Limited" },
      {
        property: "og:description",
        content:
          "Two specialized divisions: comprehensive security solutions and business support & operational services — one seamless security ecosystem.",
      },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: ServicesPage,
});

function DivisionHeading({
  tag,
  title,
}: {
  tag: string;
  title: string;
}) {
  return (
    <div className="mt-20 flex items-center gap-4 first:mt-16">
      <span className="flex size-14 shrink-0 items-center justify-center rounded-2xl bg-gold-deep font-display text-2xl font-black text-white">
        {tag}
      </span>
      <h2 className="font-display text-2xl font-extrabold uppercase tracking-wide text-ink">
        {title}
      </h2>
    </div>
  );
}

function GroupHeading({ number, title }: { number: string; title: string }) {
  return (
    <div className="mt-16 flex items-center gap-4">
      <span className="flex size-12 shrink-0 items-center justify-center rounded-xl bg-gold/15 font-display text-xl font-black text-gold-deep">
        {number}
      </span>
      <h3 className="font-display text-xl font-extrabold uppercase tracking-wide text-ink">
        {title}
      </h3>
    </div>
  );
}

function ServicesPage() {
  return (
    <>
      <PageHero
        kicker="What We Offer"
        title="Comprehensive Security & Business Support Services"
        intro="Lancaster Security offers its solutions through two specialized service divisions — comprehensive security solutions and business support services — designed to work together as one seamless security ecosystem."
      />

      <section className="bg-background py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-6">
          <DivisionHeading tag="A" title="Comprehensive Security Solutions" />

          <GroupHeading number="1" title="Physical Security Services" />
          <div className="mt-8 grid gap-7 sm:grid-cols-2 lg:grid-cols-3">
            {PHYSICAL_SERVICES.map((s) => (
              <article
                key={s.title}
                className="group overflow-hidden rounded-3xl border border-gold/15 bg-card shadow-sm transition-shadow hover:shadow-xl"
              >
                <div className="relative h-56 overflow-hidden">
                  <img
                    src={s.image.url}
                    alt={s.alt}
                    className="size-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink/70 via-transparent to-transparent" />
                  <span className="absolute bottom-4 left-5 font-display text-lg font-extrabold uppercase tracking-wide text-white">
                    <span className="text-gold">{s.letter})</span> {s.title}
                  </span>
                </div>
                <div className="p-6">
                  <p className="text-sm leading-relaxed text-ink/70">{s.text}</p>
                </div>
              </article>
            ))}
          </div>

          <GroupHeading number="2" title="Electronic Security Solutions" />
          <div className="mt-8 grid gap-7 sm:grid-cols-2 lg:grid-cols-4">
            {ELECTRONIC_SERVICES.map((s) => (
              <article
                key={s.title}
                className="group overflow-hidden rounded-3xl border border-gold/15 bg-card shadow-sm transition-shadow hover:shadow-xl"
              >
                <div className="relative h-40 overflow-hidden">
                  <img
                    src={s.image.url}
                    alt={s.alt}
                    className="size-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-5">
                  <span className="flex size-10 items-center justify-center rounded-xl bg-gold/12 text-gold">
                    <s.icon className="size-5" aria-hidden />
                  </span>
                  <h4 className="mt-3 font-display text-sm font-extrabold uppercase tracking-wide text-ink">
                    {s.title}
                  </h4>
                  <p className="mt-2 text-sm leading-relaxed text-ink/70">
                    {s.text}
                  </p>
                </div>
              </article>
            ))}
          </div>

          <GroupHeading number="3" title="Security Risk & Intelligence Services" />
          <div className="mt-8 grid gap-7 md:grid-cols-3">
            {RISK_SERVICES.map((s) => (
              <article
                key={s.title}
                className="rounded-3xl border border-gold/15 bg-card p-7 shadow-sm transition-shadow hover:shadow-xl"
              >
                <span className="gold-gradient flex size-12 items-center justify-center rounded-xl text-white shadow-lg">
                  <s.icon className="size-6" aria-hidden />
                </span>
                <h4 className="mt-4 font-display text-sm font-extrabold uppercase tracking-wide text-ink">
                  {s.title}
                </h4>
                <p className="mt-2 text-sm leading-relaxed text-ink/70">
                  {s.text}
                </p>
              </article>
            ))}
          </div>

          <DivisionHeading tag="B" title="Business Support & Operational Services" />
          <div className="mt-8 grid gap-7 sm:grid-cols-2 lg:grid-cols-4">
            {BUSINESS_SUPPORT.map((s) => (
              <article
                key={s.title}
                className="group overflow-hidden rounded-3xl border border-gold/15 bg-card shadow-sm transition-shadow hover:shadow-xl"
              >
                <div className="relative h-40 overflow-hidden">
                  <img
                    src={s.image.url}
                    alt={s.alt}
                    className="size-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-5">
                  <h4 className="font-display text-sm font-extrabold uppercase tracking-wide text-ink">
                    {s.title}
                  </h4>
                  <p className="mt-2 text-sm leading-relaxed text-ink/70">
                    {s.text}
                  </p>
                </div>
              </article>
            ))}
          </div>

          <div className="mt-16 rounded-3xl border border-gold/20 bg-cream p-8 text-center">
            <p className="mx-auto max-w-3xl text-[0.95rem] leading-relaxed text-ink/75">
              Every assignment begins with understanding your environment. We
              combine services from both divisions into a tailored solution that
              strengthens protection, improves operational efficiency, and
              minimizes vulnerabilities.
            </p>
          </div>
        </div>
      </section>

      <CtaBand
        title="Request a Tailored Solution"
        text="Tell us about your facility, organization, or event, and our team will design a security plan that fits your risks, operations, and budget."
      />
    </>
  );
}
