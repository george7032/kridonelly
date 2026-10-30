import { Link } from "@tanstack/react-router";
import { ArrowRight, Mail, MapPin, Menu, Phone, Sparkles, X } from "lucide-react";
import { useState, type ReactNode } from "react";

import logo from "@/assets/lancaster-logo.png.asset.json";
import { ADDRESS, EMAIL, NAV_LINKS, PHONES } from "@/lib/site-data";

export function TopBar() {
  return (
    <div className="hidden border-b border-gold/25 bg-cream text-ink/80 md:block">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-6 py-2 text-xs">
        <div className="flex items-center gap-5">
          {PHONES.map((phone) => (
            <a
              key={phone}
              href={`tel:${phone.replace(/\s/g, "")}`}
              className="inline-flex items-center gap-2 transition-colors hover:text-gold-deep"
            >
              <Phone className="size-3.5 text-gold-deep" aria-hidden />
              {phone}
            </a>
          ))}
        </div>
        <div className="flex items-center gap-5">
          <a
            href={`mailto:${EMAIL}`}
            className="inline-flex items-center gap-2 transition-colors hover:text-gold-deep"
          >
            <Mail className="size-3.5 text-gold-deep" aria-hidden />
            {EMAIL}
          </a>
          <span className="inline-flex items-center gap-2">
            <MapPin className="size-3.5 text-gold-deep" aria-hidden />
            Nairobi, Kenya
          </span>
        </div>
      </div>
    </div>
  );
}

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-gold/20 bg-background/95 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-6 py-3">
        <Link to="/" className="flex items-center gap-3">
          <img
            src={logo.url}
            alt="Lancaster Security Limited logo"
            className="h-12 w-auto"
          />
          <span className="hidden font-display text-sm font-extrabold uppercase leading-tight tracking-wide text-ink sm:block">
            Lancaster
            <span className="block text-gold">Security Ltd</span>
          </span>
        </Link>

        <nav className="hidden items-center gap-6 xl:flex">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              activeOptions={{ exact: link.to === "/" }}
              className="font-display text-[0.8rem] font-bold uppercase tracking-wider text-ink/80 transition-colors hover:text-gold data-[status=active]:text-gold-deep"
            >
              {link.label}
            </Link>
          ))}
          <Link
            to="/contact"
            className="gold-gradient inline-flex items-center gap-2 rounded-full px-5 py-2.5 font-display text-[0.8rem] font-bold uppercase tracking-wider text-white shadow-lg shadow-gold/30 transition-transform hover:scale-105"
          >
            Get a Quote
            <ArrowRight className="size-4" aria-hidden />
          </Link>
        </nav>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? "Close menu" : "Open menu"}
          className="inline-flex size-11 items-center justify-center rounded-lg border border-gold/40 text-ink xl:hidden"
        >
          {open ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </div>

      {open && (
        <nav className="border-t border-gold/20 bg-background px-6 py-4 xl:hidden">
          <div className="flex flex-col gap-3">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                onClick={() => setOpen(false)}
                activeOptions={{ exact: link.to === "/" }}
                className="font-display text-sm font-bold uppercase tracking-wider text-ink/80 data-[status=active]:text-gold-deep"
              >
                {link.label}
              </Link>
            ))}
            <Link
              to="/contact"
              onClick={() => setOpen(false)}
              className="gold-gradient mt-2 inline-flex items-center justify-center gap-2 rounded-full px-5 py-3 font-display text-sm font-bold uppercase tracking-wider text-white"
            >
              Get a Quote
              <ArrowRight className="size-4" aria-hidden />
            </Link>
          </div>
        </nav>
      )}
    </header>
  );
}

export function Footer() {
  return (
    <footer className="bg-gold-deep py-12 text-cream">
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-8 px-6 lg:flex-row lg:justify-between">
        <div className="flex items-center gap-4">
          <img
            src={logo.url}
            alt="Lancaster Security Limited logo"
            className="h-16 w-auto"
          />
          <div>
            <p className="font-display text-sm font-extrabold uppercase tracking-wide text-white">
              Lancaster Security Limited
            </p>
            <p className="mt-1 text-xs text-cream/70">
              Securing Today · Protecting Tomorrow
            </p>
          </div>
        </div>
        <nav className="flex flex-wrap justify-center gap-6">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className="font-display text-xs font-bold uppercase tracking-wider text-cream/80 transition-colors hover:text-white"
            >
              {link.label}
            </Link>
          ))}
        </nav>
        <div className="text-center text-xs text-cream/70 lg:text-right">
          <p>{ADDRESS}</p>
          <p className="mt-2 text-cream/60">
            © {new Date().getFullYear()} Lancaster Security Limited. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

export function SectionHeading({
  kicker,
  title,
  align = "left",
}: {
  kicker: string;
  title: string;
  align?: "left" | "center";
}) {
  return (
    <div className={align === "center" ? "text-center" : ""}>
      <p className="section-kicker">
        <Sparkles className="size-4" aria-hidden />
        {kicker}
      </p>
      <h2 className="mt-3 text-3xl font-extrabold uppercase leading-tight tracking-tight text-ink sm:text-4xl lg:text-[2.6rem]">
        {title}
      </h2>
      <div
        className={`mt-5 h-1.5 w-24 rounded-full bg-gold ${
          align === "center" ? "mx-auto" : ""
        }`}
      />
    </div>
  );
}

export function PageHero({
  kicker,
  title,
  intro,
}: {
  kicker: string;
  title: string;
  intro: string;
}) {
  return (
    <section className="relative overflow-hidden border-b border-gold/20 bg-cream">
      <div
        className="pointer-events-none absolute -right-24 top-0 h-full w-96 opacity-40"
        style={{
          background: "var(--gold-soft)",
          clipPath: "polygon(40% 0, 100% 0, 60% 100%, 0% 100%)",
        }}
        aria-hidden
      />
      <div className="relative mx-auto max-w-7xl px-6 py-14 lg:py-20">
        <p className="section-kicker">
          <Sparkles className="size-4" aria-hidden />
          {kicker}
        </p>
        <h1 className="mt-4 max-w-3xl font-display text-4xl font-black uppercase leading-[1.08] tracking-tight text-ink sm:text-5xl">
          {title}
        </h1>
        <p className="mt-5 max-w-2xl text-base leading-relaxed text-ink/75">
          {intro}
        </p>
        <div className="mt-6 h-1.5 w-24 rounded-full bg-gold" />
      </div>
    </section>
  );
}

export function CtaBand({
  title = "Partner With Us",
  text = "Speak with our team about a tailored security solution for your organization, facility, or event — and experience a smarter, stronger, and future-ready approach to security.",
  cta = "Get a Quote",
}: {
  title?: string;
  text?: string;
  cta?: string;
}) {
  return (
    <section className="bg-background py-16 lg:py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="gold-gradient relative overflow-hidden rounded-3xl px-8 py-12 text-center text-white shadow-xl shadow-gold/20 lg:px-14">
          <p className="font-display text-2xl font-black uppercase tracking-wide sm:text-3xl">
            {title}
          </p>
          <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-white/85 sm:text-base">
            {text}
          </p>
          <Link
            to="/contact"
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-ink px-7 py-3.5 font-display text-sm font-bold uppercase tracking-wider text-white transition-transform hover:scale-105"
          >
            {cta}
            <ArrowRight className="size-4" aria-hidden />
          </Link>
        </div>
      </div>
    </section>
  );
}

export function SiteLayout({ children }: { children: ReactNode }) {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <TopBar />
      <Navbar />
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  );
}
