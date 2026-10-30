import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, ArrowUpRight, CheckCircle2 } from "lucide-react";

import heroGuards from "@/assets/hero-guards.jpg.asset.json";
import officersDuo from "@/assets/officers-duo.jpg.asset.json";
import { CtaBand, SectionHeading } from "@/components/site/layout";
import {
  ABOUT_PARAGRAPHS,
  SECTORS,
  WHY_US,
  WORKFLOW,
} from "@/lib/site-data";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      {
        title: "Lancaster Security Limited | Integrated Security Solutions in Kenya",
      },
      {
        name: "description",
        content:
          "Lancaster Security Limited delivers integrated guarding, K9, CCTV, access control, VIP protection, and business support services across Kenya and East Africa. Securing today, protecting tomorrow.",
      },
      { property: "og:type", content: "website" },
      {
        property: "og:title",
        content: "Lancaster Security Limited | Integrated Security Solutions",
      },
      {
        property: "og:description",
        content:
          "Professional, technology-enabled security solutions — guarding, K9, electronic security, risk advisory, and business support. Securing today, protecting tomorrow.",
      },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Hero() {
  return (
    <section className="relative overflow-hidden bg-cream text-ink">
      <div
        className="pointer-events-none absolute -left-24 top-0 h-full w-72 opacity-40"
        style={{
          background: "var(--gold-soft)",
          clipPath: "polygon(40% 0, 100% 0, 60% 100%, 0% 100%)",
        }}
        aria-hidden
      />
      <div
        className="pointer-events-none absolute -right-32 bottom-0 hidden h-full w-[34rem] opacity-50 lg:block"
        style={{
          background: "var(--gold-soft)",
          clipPath: "polygon(35% 100%, 100% 0, 100% 100%, 0 100%)",
        }}
        aria-hidden
      />

      <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-6 py-16 lg:grid-cols-2 lg:py-24">
        <div>
          <span className="inline-flex items-center gap-2 rounded-full border border-gold/60 bg-gold/10 px-4 py-1.5 font-display text-xs font-bold uppercase tracking-[0.2em] text-gold-deep">
            Company Profile
          </span>
          <h1 className="mt-6 font-display text-4xl font-black uppercase leading-[1.05] tracking-tight sm:text-5xl lg:text-6xl">
            Lancaster
            <span className="text-gradient-gold block">Security</span>
            <span className="block">Limited</span>
          </h1>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-ink/75 sm:text-lg">
            Professional, technology-enabled security and risk management
            solutions — protecting people, assets, and operations across
            commercial, industrial, institutional, residential, and public
            sectors.
          </p>
          <div className="mt-9 flex flex-wrap gap-4">
            <Link
              to="/services"
              className="gold-gradient inline-flex items-center gap-2 rounded-full px-7 py-3.5 font-display text-sm font-bold uppercase tracking-wider text-white shadow-xl shadow-gold/30 transition-transform hover:scale-105"
            >
              Our Services
              <ArrowRight className="size-4" aria-hidden />
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 rounded-full border border-gold-deep/40 bg-card px-7 py-3.5 font-display text-sm font-bold uppercase tracking-wider text-ink transition-colors hover:border-gold hover:text-gold-deep"
            >
              Talk to Us
            </Link>
          </div>
          <p className="mt-8 font-display text-sm font-bold uppercase tracking-[0.25em] text-gold-deep">
            Securing Today · Protecting Tomorrow
          </p>
        </div>

        <div className="relative">
          <div
            className="absolute -inset-3 -z-0 rounded-3xl gold-gradient opacity-60"
            style={{ clipPath: "polygon(4% 0, 100% 0, 96% 100%, 0% 100%)" }}
            aria-hidden
          />
          <img
            src={heroGuards.url}
            alt="Two Lancaster Security officers on duty"
            className="relative w-full rounded-3xl object-cover shadow-2xl"
            style={{ clipPath: "polygon(4% 0, 100% 0, 96% 100%, 0% 100%)" }}
          />
        </div>
      </div>
    </section>
  );
}

function WhoWeAre() {
  return (
    <section className="bg-background py-20 lg:py-28">
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
            <p>{ABOUT_PARAGRAPHS[0]}</p>
            <p>{ABOUT_PARAGRAPHS[1]}</p>
          </div>
          <Link
            to="/about"
            className="mt-8 inline-flex items-center gap-2 font-display text-sm font-bold uppercase tracking-wider text-gold-deep transition-colors hover:text-gold"
          >
            More about who we are
            <ArrowUpRight className="size-4" aria-hidden />
          </Link>
        </div>
      </div>
    </section>
  );
}

const DIVISIONS = [
  {
    tag: "Division A",
    title: "Comprehensive Security Solutions",
    text: "Physical security services, electronic security solutions, and security risk & advisory services — from static guarding and K9 units to CCTV, access control, perimeter protection, and risk assessments.",
  },
  {
    tag: "Division B",
    title: "Business Support & Operational Services",
    text: "Corporate outsourcing and facilities management services — security reception, secure transportation, surveillance & investigation officers, and integrated facilities support.",
  },
];

function Divisions() {
  return (
    <section className="bg-cream py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeading
          kicker="What We Do"
          title="Two Specialized Service Divisions"
          align="center"
        />
        <p className="mx-auto mt-6 max-w-3xl text-center text-[0.95rem] leading-relaxed text-ink/70">
          Lancaster Security offers its solutions through two specialized
          service divisions, working together as one seamless security
          ecosystem.
        </p>
        <div className="mt-12 grid gap-7 lg:grid-cols-2">
          {DIVISIONS.map((d) => (
            <Link
              key={d.tag}
              to="/services"
              className="group rounded-3xl border border-gold/20 bg-card p-9 shadow-sm transition-all hover:-translate-y-1 hover:shadow-xl"
            >
              <span className="inline-flex rounded-full bg-gold/12 px-4 py-1 font-display text-xs font-bold uppercase tracking-[0.2em] text-gold-deep">
                {d.tag}
              </span>
              <h3 className="mt-5 font-display text-2xl font-extrabold uppercase tracking-tight text-ink">
                {d.title}
              </h3>
              <p className="mt-4 text-sm leading-relaxed text-ink/70">
                {d.text}
              </p>
              <span className="mt-6 inline-flex items-center gap-2 font-display text-sm font-bold uppercase tracking-wider text-gold-deep">
                Explore all services
                <ArrowRight
                  className="size-4 transition-transform group-hover:translate-x-1"
                  aria-hidden
                />
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

function WhyUsTeaser() {
  return (
    <section className="bg-background py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeading kicker="The Lancaster Advantage" title="Why Choose Us" align="center" />
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {WHY_US.slice(0, 3).map((item, i) => (
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
        </div>
        <div className="mt-10 text-center">
          <Link
            to="/why-us"
            className="inline-flex items-center gap-2 rounded-full border border-gold-deep/40 bg-card px-7 py-3 font-display text-sm font-bold uppercase tracking-wider text-ink transition-colors hover:border-gold hover:text-gold-deep"
          >
            See all seven reasons
            <ArrowRight className="size-4" aria-hidden />
          </Link>
        </div>
      </div>
    </section>
  );
}

function SectorsTeaser() {
  return (
    <section className="bg-cream py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeading kicker="Industries & Clients" title="Who We Serve" align="center" />
        <p className="mx-auto mt-6 max-w-2xl text-center text-[0.95rem] leading-relaxed text-ink/70">
          Our solutions support organizations and individuals across diverse
          sectors.
        </p>
        <div className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
          {SECTORS.map((sector) => (
            <div
              key={sector.label}
              className="flex items-center gap-3 rounded-2xl border border-gold/20 bg-card px-4 py-4 shadow-sm transition-colors hover:border-gold/60"
            >
              <span className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-gold/12 text-gold">
                <sector.icon className="size-5" aria-hidden />
              </span>
              <p className="text-sm font-semibold leading-snug text-ink">
                {sector.label}
              </p>
            </div>
          ))}
        </div>
        <div className="mt-10 text-center">
          <Link
            to="/who-we-serve"
            className="inline-flex items-center gap-2 font-display text-sm font-bold uppercase tracking-wider text-gold-deep transition-colors hover:text-gold"
          >
            How we serve each sector
            <ArrowUpRight className="size-4" aria-hidden />
          </Link>
        </div>
      </div>
    </section>
  );
}

function WorkflowTeaser() {
  return (
    <section className="bg-background py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeading kicker="How We Work" title="Our Service Workflow" align="center" />
        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {WORKFLOW.map((item) => (
            <div
              key={item.step}
              className="rounded-3xl border border-gold/15 bg-card p-7 shadow-sm"
            >
              <span className="font-display text-4xl font-black text-gold/25">
                {item.step}
              </span>
              <h3 className="mt-2 font-display text-base font-extrabold uppercase tracking-wide text-ink">
                {item.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-ink/70">
                {item.text}
              </p>
            </div>
          ))}
        </div>
        <div className="mx-auto mt-12 max-w-3xl rounded-3xl border border-gold/20 bg-card p-8 text-center shadow-sm">
          <ul className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3">
            {["Prevention", "Preparedness", "Rapid Response", "Continuous Improvement"].map(
              (item) => (
                <li
                  key={item}
                  className="flex items-center gap-2 font-display text-sm font-bold uppercase tracking-wider text-gold-deep"
                >
                  <CheckCircle2 className="size-4 text-gold" aria-hidden />
                  {item}
                </li>
              ),
            )}
          </ul>
        </div>
      </div>
    </section>
  );
}

function Index() {
  return (
    <>
      <Hero />
      <WhoWeAre />
      <Divisions />
      <WhyUsTeaser />
      <SectorsTeaser />
      <WorkflowTeaser />
      <CtaBand />
    </>
  );
}
