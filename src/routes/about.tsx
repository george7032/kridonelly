import { createFileRoute, Link } from "@tanstack/react-router";
import { CheckCircle2, Eye, Target } from "lucide-react";

import officersDuo from "@/assets/officers-duo.jpg.asset.json";
import { CtaBand, PageHero, SectionHeading } from "@/components/site/layout";
import {
  ABOUT_PARAGRAPHS,
  CORE_VALUES,
  INTRODUCTION,
  LOOKING_AHEAD,
  MISSION,
  PROMISE,
  VISION,
} from "@/lib/site-data";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Us | Lancaster Security Limited" },
      {
        name: "description",
        content:
          "Learn about Lancaster Security Limited — a professional security solutions company built on discipline, innovation, and professionalism, serving sectors across Kenya and East Africa.",
      },
      { property: "og:type", content: "website" },
      { property: "og:title", content: "About Lancaster Security Limited" },
      {
        property: "og:description",
        content:
          "Built on a foundation of discipline, innovation, and professionalism — integrated security and risk management services across commercial, industrial, institutional, residential, and public sectors.",
      },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: AboutPage,
});

function Introduction() {
  return (
    <section className="bg-background py-20 lg:py-24">
      <div className="mx-auto max-w-4xl px-6">
        <SectionHeading kicker="The Context" title="Introduction" />
        <div className="mt-6 space-y-5 text-[0.95rem] leading-relaxed text-ink/75 sm:text-base">
          {INTRODUCTION.map((p) => (
            <p key={p.slice(0, 40)}>{p}</p>
          ))}
        </div>
      </div>
    </section>
  );
}

function AboutBody() {
  return (
    <section className="bg-cream py-20 lg:py-24">
      <div className="mx-auto grid max-w-7xl items-center gap-14 px-6 lg:grid-cols-2">
        <div className="relative order-2 lg:order-1">
          <img
            src={officersDuo.url}
            alt="Lancaster Security officers standing watch"
            className="w-full rounded-3xl object-cover shadow-xl"
          />
          <div className="gold-gradient absolute -bottom-6 -right-4 hidden rounded-2xl px-7 py-5 text-white shadow-xl sm:block lg:-right-8">
            <p className="font-display text-3xl font-black">24/7</p>
            <p className="font-display text-xs font-bold uppercase tracking-widest">
              Protection &amp; Response
            </p>
          </div>
        </div>
        <div className="order-1 lg:order-2">
          <SectionHeading kicker="Who We Are" title="About Us" />
          <div className="mt-6 space-y-5 text-[0.95rem] leading-relaxed text-ink/75 sm:text-base">
            {ABOUT_PARAGRAPHS.map((p) => (
              <p key={p.slice(0, 40)}>{p}</p>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function GuidingPrinciples() {
  return (
    <section className="bg-background py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid items-start gap-14 lg:grid-cols-2">
          <div>
            <div className="flex items-start gap-5">
              <span className="gold-gradient flex size-14 shrink-0 items-center justify-center rounded-full text-white shadow-lg">
                <Eye className="size-6" aria-hidden />
              </span>
              <div>
                <h3 className="font-display text-xl font-extrabold uppercase tracking-wide text-gold-deep">
                  Our Vision
                </h3>
                <p className="mt-3 text-[0.95rem] leading-relaxed text-ink/75">
                  {VISION}
                </p>
              </div>
            </div>

            <div className="mt-10 flex items-start gap-5">
              <span className="gold-gradient flex size-14 shrink-0 items-center justify-center rounded-full text-white shadow-lg">
                <Target className="size-6" aria-hidden />
              </span>
              <div>
                <h3 className="font-display text-xl font-extrabold uppercase tracking-wide text-gold-deep">
                  Our Mission
                </h3>
                <p className="mt-3 text-[0.95rem] leading-relaxed text-ink/75">
                  {MISSION}
                </p>
              </div>
            </div>

            <div className="mt-10 rounded-3xl border border-gold/30 bg-cream p-8">
              <h3 className="font-display text-xl font-extrabold uppercase tracking-wide text-gold-deep">
                Our Promise
              </h3>
              <p className="mt-3 text-[0.95rem] leading-relaxed text-ink/75">
                {PROMISE}
              </p>
            </div>
          </div>

          <div>
            <SectionHeading kicker="What Guides Us" title="Core Values" />
            <div className="mt-8 divide-y divide-gold/15 overflow-hidden rounded-3xl border border-gold/20 bg-card">
              {CORE_VALUES.map((value) => (
                <div key={value.title} className="flex gap-4 p-5">
                  <span className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-gold/12 text-gold">
                    <value.icon className="size-5" aria-hidden />
                  </span>
                  <div>
                    <h4 className="font-display text-sm font-extrabold uppercase tracking-wide text-ink">
                      {value.title}
                    </h4>
                    <p className="mt-1 text-sm leading-relaxed text-ink/70">
                      {value.text}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function LookingAhead() {
  return (
    <section className="bg-cream py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div>
            <SectionHeading kicker="The Road Ahead" title="Looking Ahead" />
            <p className="mt-6 text-[0.95rem] leading-relaxed text-ink/75">
              As the security industry continues to evolve, Lancaster Security
              Limited remains committed to innovation, growth, and operational
              excellence. By continuously investing in people, technology, and
              innovation, we aim to remain at the forefront of modern security
              solutions while delivering unmatched protection and peace of
              mind.
            </p>
            <ul className="mt-8 space-y-4">
              {LOOKING_AHEAD.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="gold-gradient mt-0.5 flex size-6 shrink-0 items-center justify-center rounded-full text-white">
                    <CheckCircle2 className="size-4" aria-hidden />
                  </span>
                  <span className="text-sm leading-relaxed text-ink/80">{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-3xl border border-gold/25 bg-card p-10 text-center shadow-sm lg:p-14">
            <p className="text-gradient-gold font-display text-2xl font-black uppercase leading-snug tracking-wide sm:text-3xl">
              Securing Today and Protecting Tomorrow
            </p>
            <p className="mt-5 text-sm leading-relaxed text-ink/70">
              Through innovation, professionalism, and unwavering dedication,
              we provide security solutions that empower organizations to
              operate with confidence and resilience.
            </p>
            <Link
              to="/services"
              className="gold-gradient mt-8 inline-flex items-center gap-2 rounded-full px-7 py-3.5 font-display text-sm font-bold uppercase tracking-wider text-white shadow-xl shadow-gold/20 transition-transform hover:scale-105"
            >
              Explore Our Services
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

function AboutPage() {
  return (
    <>
      <PageHero
        kicker="About Lancaster"
        title="A Smarter, Stronger Approach to Security"
        intro="Get to know the company behind Kenya's integrated security and risk management solutions — our story, our guiding principles, and where we are headed."
      />
      <Introduction />
      <AboutBody />
      <GuidingPrinciples />
      <LookingAhead />
      <CtaBand />
    </>
  );
}
