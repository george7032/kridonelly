import { createFileRoute } from "@tanstack/react-router";
import { CheckCircle2 } from "lucide-react";

import guardsTeam from "@/assets/guards-team.jpg.asset.json";
import { CtaBand, PageHero } from "@/components/site/layout";
import { TRAINING_ITEMS, VETTING_ITEMS, WHY_US } from "@/lib/site-data";

export const Route = createFileRoute("/why-us")({
  head: () => ({
    meta: [
      { title: "Why Choose Us | Lancaster Security Limited" },
      {
        name: "description",
        content:
          "Seven reasons to choose Lancaster Security — strategic approach, integrated solutions, technology-enabled operations, highly trained personnel, rapid response, and more.",
      },
      { property: "og:type", content: "website" },
      { property: "og:title", content: "Why Choose Lancaster Security?" },
      {
        property: "og:description",
        content:
          "Prevention and preparedness, integrated solutions, technology-enabled operations, and rigorously vetted officers — the Lancaster advantage.",
      },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: WhyUsPage,
});

function Reasons() {
  return (
    <section className="bg-background py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {WHY_US.map((item, i) => (
            <div
              key={item.title}
              className="rounded-3xl border border-gold/15 bg-card p-7 shadow-sm transition-colors hover:border-gold/50"
            >
              <span className="font-display text-3xl font-black text-gold">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="mt-3 font-display text-base font-extrabold uppercase tracking-wide text-ink">
                {item.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-ink/70">
                {item.text}
              </p>
            </div>
          ))}
          <div className="gold-gradient flex flex-col justify-center rounded-3xl p-7 text-white shadow-lg">
            <p className="font-display text-xl font-black uppercase leading-snug">
              One partner for manpower, technology, intelligence, and support
            </p>
            <p className="mt-3 text-sm text-white/85">
              That is the Lancaster advantage — a single, accountable security
              ecosystem.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function People() {
  return (
    <section className="bg-cream py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-10 lg:grid-cols-[1.1fr_1fr]">
          <div className="relative overflow-hidden rounded-3xl shadow-xl">
            <img
              src={guardsTeam.url}
              alt="Lancaster Security team of officers"
              className="size-full object-cover"
            />
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-ink/85 to-transparent p-8 pt-20">
              <p className="font-display text-lg font-extrabold uppercase tracking-wide text-white">
                Trust begins with recruitment.
              </p>
              <p className="mt-1 text-sm text-white/80">
                Only candidates who successfully meet all requirements proceed
                to training and deployment.
              </p>
            </div>
          </div>

          <div className="space-y-6">
            <div className="rounded-3xl border border-gold/20 bg-card p-7 shadow-sm">
              <h3 className="font-display text-lg font-extrabold uppercase tracking-wide text-gold-deep">
                Rigorous Vetting Process
              </h3>
              <p className="mt-2 text-sm text-ink/70">
                At Lancaster Security, trust begins with recruitment. Every
                prospective officer undergoes a rigorous screening process
                including:
              </p>
              <ul className="mt-4 grid gap-2.5 sm:grid-cols-2">
                {VETTING_ITEMS.map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm text-ink/75">
                    <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-gold" aria-hidden />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-3xl border border-gold/20 bg-card p-7 shadow-sm">
              <h3 className="font-display text-lg font-extrabold uppercase tracking-wide text-gold-deep">
                Continuous Training Programs
              </h3>
              <p className="mt-2 text-sm text-ink/70">
                We recruit individuals who demonstrate integrity, discipline,
                professionalism, and commitment to service — and keep them
                sharp with continuous professional development.
              </p>
              <ul className="mt-4 grid gap-2.5 sm:grid-cols-2">
                {TRAINING_ITEMS.map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm text-ink/75">
                    <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-gold" aria-hidden />
                    {item}
                  </li>
                ))}
              </ul>
              <p className="mt-4 text-sm text-ink/70">
                Continuous refresher programs ensure our teams remain prepared
                for evolving security demands.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function WhyUsPage() {
  return (
    <>
      <PageHero
        kicker="The Lancaster Advantage"
        title="Why Choose Lancaster Security?"
        intro="Seven reasons organizations across Kenya and East Africa trust us with their people, assets, and operations — and the people-first standards behind them."
      />
      <Reasons />
      <People />
      <CtaBand
        title="Experience the Difference"
        text="Put our approach, our people, and our technology to work for your organization."
      />
    </>
  );
}
