import { createFileRoute } from "@tanstack/react-router";

import { CtaBand, PageHero } from "@/components/site/layout";
import { SECTORS } from "@/lib/site-data";

export const Route = createFileRoute("/who-we-serve")({
  head: () => ({
    meta: [
      { title: "Who We Serve | Lancaster Security Limited" },
      {
        name: "description",
        content:
          "Lancaster Security serves corporate organizations, government institutions, schools, hospitals, financial institutions, construction sites, residential communities, events, and high-net-worth individuals.",
      },
      { property: "og:type", content: "website" },
      { property: "og:title", content: "Who We Serve | Lancaster Security Limited" },
      {
        property: "og:description",
        content:
          "Integrated security solutions across commercial, industrial, institutional, residential, and public sectors.",
      },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: WhoWeServePage,
});

function SectorGrid() {
  return (
    <section className="bg-background py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {SECTORS.map((sector) => (
            <article
              key={sector.label}
              className="rounded-3xl border border-gold/15 bg-card p-7 shadow-sm transition-all hover:-translate-y-1 hover:shadow-xl"
            >
              <span className="flex size-12 items-center justify-center rounded-2xl bg-gold/12 text-gold">
                <sector.icon className="size-6" aria-hidden />
              </span>
              <h3 className="mt-4 font-display text-sm font-extrabold uppercase tracking-wide text-ink">
                {sector.label}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-ink/70">
                {sector.text}
              </p>
            </article>
          ))}
        </div>

        <div className="mt-14 rounded-3xl border border-gold/20 bg-cream p-8 text-center lg:p-10">
          <h3 className="font-display text-xl font-extrabold uppercase tracking-wide text-gold-deep">
            Don&apos;t See Your Sector?
          </h3>
          <p className="mx-auto mt-3 max-w-2xl text-sm leading-relaxed text-ink/70">
            Every environment presents unique risks. We work with organizations
            of every kind to develop customized solutions that fit their
            security objectives — tell us about yours.
          </p>
        </div>
      </div>
    </section>
  );
}

function WhoWeServePage() {
  return (
    <>
      <PageHero
        kicker="Industries & Clients"
        title="Who We Serve"
        intro="Our solutions support organizations and individuals across diverse sectors — each with its own risks, operations, and security objectives."
      />
      <SectorGrid />
      <CtaBand
        title="Your Sector, Your Solution"
        text="Speak with our team about a security plan tailored to your industry, facility, or community."
      />
    </>
  );
}
