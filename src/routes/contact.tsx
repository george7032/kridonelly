import { createFileRoute } from "@tanstack/react-router";
import { ArrowRight, Mail, MapPin, Phone } from "lucide-react";
import { useState, type FormEvent } from "react";

import { PageHero } from "@/components/site/layout";
import { ADDRESS, EMAIL, PHONES, WEBSITE } from "@/lib/site-data";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact Us | Lancaster Security Limited" },
      {
        name: "description",
        content:
          "Reach Lancaster Security Limited in Nairobi, Kenya — call 0722 217619, email info@lancastersecurity.com, or request a tailored security quote for your organization, facility, or event.",
      },
      { property: "og:type", content: "website" },
      { property: "og:title", content: "Contact Lancaster Security Limited" },
      {
        property: "og:description",
        content:
          "Speak with our team about a tailored security solution — securing today, protecting tomorrow.",
      },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: ContactPage,
});

const SERVICE_OPTIONS = [
  "Static Guarding Services",
  "K9 Security Services",
  "Event Security Management",
  "Executive & VIP Protection",
  "Alarm Response Services",
  "CCTV Installation & Surveillance",
  "Access Control Solutions",
  "Alarm Detection Systems",
  "Perimeter Protection Systems",
  "Security Audits & Risk Assessments",
  "Security Consultancy",
  "Investigations & Intelligence",
  "Security Reception Services",
  "Secure Transportation Services",
  "Integrated Facilities Support",
];

const inputClass =
  "w-full rounded-xl border border-gold/30 bg-background px-4 py-3 text-sm text-ink placeholder:text-ink/40 focus:border-gold focus:outline-none focus:ring-2 focus:ring-gold/30";

function ContactCards() {
  return (
    <div className="grid gap-6 md:grid-cols-3">
      <div className="rounded-3xl border border-gold/20 bg-card p-8 text-center shadow-sm">
        <span className="gold-gradient mx-auto flex size-12 items-center justify-center rounded-full text-white shadow-lg">
          <Phone className="size-5" aria-hidden />
        </span>
        <h3 className="mt-4 font-display text-sm font-extrabold uppercase tracking-widest text-ink">
          Mobile
        </h3>
        <ul className="mt-3 space-y-1.5">
          {PHONES.map((phone) => (
            <li key={phone}>
              <a
                href={`tel:${phone.replace(/\s/g, "")}`}
                className="text-sm font-semibold text-ink/75 transition-colors hover:text-gold-deep"
              >
                {phone}
              </a>
            </li>
          ))}
        </ul>
      </div>
      <div className="rounded-3xl border border-gold/20 bg-card p-8 text-center shadow-sm">
        <span className="gold-gradient mx-auto flex size-12 items-center justify-center rounded-full text-white shadow-lg">
          <Mail className="size-5" aria-hidden />
        </span>
        <h3 className="mt-4 font-display text-sm font-extrabold uppercase tracking-widest text-ink">
          Email &amp; Web
        </h3>
        <p className="mt-3">
          <a
            href={`mailto:${EMAIL}`}
            className="text-sm font-semibold text-ink/75 transition-colors hover:text-gold-deep"
          >
            {EMAIL}
          </a>
        </p>
        <p className="mt-1.5">
          <a
            href={`https://${WEBSITE}`}
            className="text-sm font-semibold text-ink/75 transition-colors hover:text-gold-deep"
          >
            {WEBSITE}
          </a>
        </p>
      </div>
      <div className="rounded-3xl border border-gold/20 bg-card p-8 text-center shadow-sm">
        <span className="gold-gradient mx-auto flex size-12 items-center justify-center rounded-full text-white shadow-lg">
          <MapPin className="size-5" aria-hidden />
        </span>
        <h3 className="mt-4 font-display text-sm font-extrabold uppercase tracking-widest text-ink">
          Address
        </h3>
        <p className="mt-3 text-sm font-semibold leading-relaxed text-ink/75">
          {ADDRESS}
        </p>
      </div>
    </div>
  );
}

function QuoteForm() {
  const [name, setName] = useState("");
  const [organization, setOrganization] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [service, setService] = useState(SERVICE_OPTIONS[0]);
  const [message, setMessage] = useState("");
  const [sent, setSent] = useState(false);

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    const subject = `Quote request: ${service}${organization ? ` — ${organization}` : ""}`;
    const body = [
      `Name: ${name}`,
      `Organization: ${organization || "—"}`,
      `Phone: ${phone || "—"}`,
      `Email: ${email || "—"}`,
      `Service of interest: ${service}`,
      "",
      "Details:",
      message || "—",
    ].join("\n");
    window.location.href = `mailto:${EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    setSent(true);
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-3xl border border-gold/20 bg-card p-8 shadow-sm lg:p-10"
    >
      <h3 className="font-display text-xl font-extrabold uppercase tracking-wide text-ink">
        Request a Quote
      </h3>
      <p className="mt-2 text-sm text-ink/70">
        Fill in the details below and your email app will open with the request
        ready to send to our team — or call us directly on any of the numbers
        above.
      </p>
      <div className="mt-6 grid gap-4 sm:grid-cols-2">
        <input
          required
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Your name"
          className={inputClass}
        />
        <input
          value={organization}
          onChange={(e) => setOrganization(e.target.value)}
          placeholder="Organization / company"
          className={inputClass}
        />
        <input
          required
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          placeholder="Phone number"
          type="tel"
          className={inputClass}
        />
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email address"
          type="email"
          className={inputClass}
        />
        <select
          value={service}
          onChange={(e) => setService(e.target.value)}
          className={`${inputClass} sm:col-span-2`}
          aria-label="Service of interest"
        >
          {SERVICE_OPTIONS.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
        <textarea
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Tell us about your site, facility, event, or security concern"
          rows={5}
          className={`${inputClass} resize-y sm:col-span-2`}
        />
      </div>
      <button
        type="submit"
        className="gold-gradient mt-6 inline-flex items-center gap-2 rounded-full px-8 py-3.5 font-display text-sm font-bold uppercase tracking-wider text-white shadow-xl shadow-gold/30 transition-transform hover:scale-105"
      >
        Send Quote Request
        <ArrowRight className="size-4" aria-hidden />
      </button>
      {sent && (
        <p className="mt-4 text-sm font-semibold text-gold-deep">
          Your email app should now be open with the request ready to send. If
          nothing happened, email us directly at {EMAIL}.
        </p>
      )}
    </form>
  );
}

function ContactPage() {
  return (
    <>
      <PageHero
        kicker="Get In Touch"
        title="Let's Talk About Your Security"
        intro="Speak with our team about a tailored security solution for your organization, facility, or event. Call us, email us, or send a quote request below."
      />
      <section className="bg-background py-20 lg:py-24">
        <div className="mx-auto max-w-7xl space-y-14 px-6">
          <ContactCards />
          <QuoteForm />
        </div>
      </section>
    </>
  );
}
