import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import {
  ArrowRight,
  Award,
  Banknote,
  Building2,
  CheckCircle2,
  Church,
  Cctv,
  ClipboardCheck,
  Dog,
  Eye,
  Fence,
  Flame,
  GraduationCap,
  Handshake,
  HardHat,
  HeartPulse,
  Landmark,
  Lightbulb,
  LockKeyhole,
  Mail,
  MapPin,
  Menu,
  PartyPopper,
  Phone,
  Search,
  Shield,
  ShieldCheck,
  ShoppingBag,
  Siren,
  Sparkles,
  Target,
  UserCheck,
  Users,
  X,
} from "lucide-react";

import logo from "@/assets/lancaster-logo.png.asset.json";
import heroGuards from "@/assets/hero-guards.jpg.asset.json";
import officersDuo from "@/assets/officers-duo.jpg.asset.json";
import k9Security from "@/assets/k9-security.jpg.asset.json";
import staticGuarding from "@/assets/static-guarding.jpg.asset.json";
import alarmResponse from "@/assets/alarm-response.jpg.asset.json";
import vipProtection from "@/assets/vip-protection.jpg.asset.json";
import eventSecurity from "@/assets/event-security.jpg.asset.json";
import cctvInstallation from "@/assets/cctv-installation.jpg.asset.json";
import accessControl from "@/assets/access-control.jpg.asset.json";
import perimeterProtection from "@/assets/perimeter-protection.jpg.asset.json";
import fireAlarm from "@/assets/fire-alarm.jpg.asset.json";
import investigations from "@/assets/investigations.jpg.asset.json";
import receptionServices from "@/assets/reception-services.jpg.asset.json";
import consultancy from "@/assets/consultancy.jpg.asset.json";
import guardsTeam from "@/assets/guards-team.jpg.asset.json";

const NAV_LINKS = [
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Why Us", href: "#why-us" },
  { label: "Who We Serve", href: "#sectors" },
  { label: "Workflow", href: "#workflow" },
  { label: "Contact", href: "#contact" },
];

const PHONES = ["0722 217619", "0726 135428", "0724 066378"];
const EMAIL = "info@lancastersecurity.com";
const WEBSITE = "www.lancastersecurity.com";
const ADDRESS = "P.O. Box 72056-00200, City Square, Nairobi, Kenya";

const CORE_VALUES = [
  {
    icon: ShieldCheck,
    title: "Integrity",
    text: "We act with honesty, accountability, and transparency in every aspect of our operations.",
  },
  {
    icon: Eye,
    title: "Vigilance",
    text: "We maintain constant awareness and preparedness to identify and respond to risks promptly.",
  },
  {
    icon: Award,
    title: "Excellence",
    text: "We pursue the highest standards of service through continuous improvement and operational discipline.",
  },
  {
    icon: Lightbulb,
    title: "Innovation",
    text: "We embrace technology and modern security practices to enhance protection and efficiency.",
  },
  {
    icon: UserCheck,
    title: "Professionalism",
    text: "We uphold exceptional standards in conduct, appearance, communication, and service delivery.",
  },
];

const PHYSICAL_SERVICES = [
  {
    letter: "a",
    title: "Static Guarding Services",
    image: staticGuarding,
    alt: "Lancaster security officer on duty at a gatehouse",
    text: "Our professional security officers provide round-the-clock protection for commercial premises, institutions, industrial facilities, residential communities, and public establishments. Through access control, perimeter monitoring, patrol operations, and incident response, our officers maintain a strong security presence that deters threats while ensuring operational continuity.",
  },
  {
    letter: "b",
    title: "K9 Security Services",
    image: k9Security,
    alt: "Trained K9 unit during patrol operations",
    text: "Our specialized K9 units provide enhanced protection capabilities through patrol operations, explosive detection, narcotics detection, contraband identification, and high-risk security support. The combination of trained handlers and highly disciplined canine teams creates an effective layer of security beyond conventional guarding.",
  },
  {
    letter: "c",
    title: "Event Security Management",
    image: eventSecurity,
    alt: "Guards providing security at an exclusive VIP event",
    text: "We deliver comprehensive event security solutions covering planning, crowd management, access control, VIP coordination, emergency preparedness, and on-site security supervision. Our teams ensure a safe and orderly environment for guests, organizers, and stakeholders.",
  },
  {
    letter: "d",
    title: "Executive & VIP Protection",
    image: vipProtection,
    alt: "Close protection officers in formal suits",
    text: "Our close protection services are designed for executives, dignitaries, diplomats, public figures, and high-net-worth individuals. Through detailed threat assessments and protective strategies, we ensure personal safety without disrupting normal activities.",
  },
  {
    letter: "e",
    title: "Alarm Response Services",
    image: alarmResponse,
    alt: "Response officer coordinating over a two-way radio",
    text: "Our response units are strategically positioned to react swiftly to alarms, emergencies, security breaches, and incidents, minimizing risk and ensuring immediate intervention when needed.",
  },
];

const ELECTRONIC_SERVICES = [
  {
    icon: Cctv,
    title: "CCTV Installation & Surveillance",
    image: cctvInstallation,
    alt: "Technician installing a surveillance camera",
    text: "We design, install, monitor, and maintain advanced surveillance systems that provide real-time visibility, evidence management, remote monitoring, and intelligent threat detection.",
  },
  {
    icon: LockKeyhole,
    title: "Access Control Solutions",
    image: accessControl,
    alt: "Modern electronic access control device",
    text: "Our access control systems enable organizations to regulate movement, secure sensitive areas, manage visitor access, and maintain detailed access records through modern authentication technologies.",
  },
  {
    icon: Siren,
    title: "Alarm Detection Systems",
    image: fireAlarm,
    alt: "Integrated alarm detection panel",
    text: "We provide intrusion alarms, panic alarms, fire detection systems, and integrated alert mechanisms that enable rapid identification and response to security incidents.",
  },
  {
    icon: Fence,
    title: "Perimeter Protection Systems",
    image: perimeterProtection,
    alt: "Razor wire perimeter protection",
    text: "Our electric fence and razor-wire security solutions provide an effective first line of defense by detecting, deterring, and preventing unauthorized access to secured premises.",
  },
];


const RISK_SERVICES = [
  {
    icon: ClipboardCheck,
    title: "Security Audits & Risk Assessments",
    text: "We conduct comprehensive evaluations of facilities, procedures, assets, and vulnerabilities to identify potential threats and recommend effective mitigation strategies.",
  },
  {
    icon: Handshake,
    title: "Security Consultancy",
    text: "Our experts provide strategic guidance on security planning, risk management, policy development, compliance requirements, and operational security improvements.",
  },
  {
    icon: Search,
    title: "Investigations & Intelligence Gathering",
    text: "We offer professional investigative services, background verification, surveillance operations, fraud investigations, and intelligence collection to support informed decision-making and risk reduction.",
  },
];

const BUSINESS_SUPPORT = [
  {
    title: "Security Reception Services",
    image: receptionServices,
    alt: "Professional security reception officer",
    text: "Our trained reception security personnel combine professional customer service with visitor management, access control, emergency coordination, and administrative support.",
  },
  {
    title: "Secure Transportation Services",
    image: vipProtection,
    alt: "Secure executive transportation",
    text: "We provide security-conscious transportation solutions including executive drivers, secure logistics support, VIP transport, and controlled movement of valuable assets.",
  },
  {
    title: "Surveillance & Investigation Officers",
    image: investigations,
    alt: "Investigators conducting an internal review",
    text: "Our officers assist organizations with monitoring operations, internal investigations, compliance reviews, evidence gathering, and operational intelligence.",
  },
  {
    title: "Integrated Facilities Support",
    image: consultancy,
    alt: "Facilities support coordination meeting",
    text: "Our facilities support solutions combine security oversight with maintenance coordination, operational monitoring, facility administration, and workplace support services that enhance efficiency and safety.",
  },
];

const WHY_US = [
  {
    title: "Strategic Security Approach",
    text: "We focus on prevention and preparedness rather than simply reacting to incidents.",
  },
  {
    title: "Integrated Security Solutions",
    text: "We combine manpower, technology, intelligence, and operational support into one seamless security ecosystem.",
  },
  {
    title: "Technology-Enabled Operations",
    text: "We leverage modern security technologies to enhance surveillance, detection, and response.",
  },
  {
    title: "Highly Trained Personnel",
    text: "Rigorous vetting and continuous training produce disciplined, professional officers.",
  },
  {
    title: "Rapid Response Capability",
    text: "Our operational structures are designed to ensure swift and effective incident response.",
  },
  {
    title: "Tailored Client Solutions",
    text: "We recognize that every client is unique and therefore develop customized security strategies for every assignment.",
  },
  {
    title: "Continuous Improvement",
    text: "Regular audits, assessments, training, and performance reviews ensure our services remain effective and relevant.",
  },
];

const SECTORS = [
  { icon: Building2, label: "Corporate Organizations" },
  { icon: Landmark, label: "Government Institutions" },
  { icon: GraduationCap, label: "Educational Institutions" },
  { icon: HeartPulse, label: "Healthcare Facilities" },
  { icon: Banknote, label: "Financial Institutions" },
  { icon: Church, label: "Religious Organizations" },
  { icon: HardHat, label: "Construction Sites" },
  { icon: ShoppingBag, label: "Retail & Commercial Centers" },
  { icon: PartyPopper, label: "Event Organizers" },
  { icon: Users, label: "NGOs & Development Agencies" },
  { icon: UserCheck, label: "High-Net-Worth Individuals" },
  { icon: Shield, label: "Residential Communities" },
];

const WORKFLOW = [
  {
    step: "01",
    title: "Discovery & Consultation",
    text: "We engage with clients to understand operational environments, security concerns, objectives, and expectations.",
  },
  {
    step: "02",
    title: "Risk Analysis & Site Assessment",
    text: "Our experts conduct detailed evaluations to identify vulnerabilities, threats, and security requirements.",
  },
  {
    step: "03",
    title: "Solution Design & Planning",
    text: "We develop a tailored security plan that combines the right personnel, technology, and protocols.",
  },
  {
    step: "04",
    title: "Deployment & Implementation",
    text: "Security personnel, systems, and resources are deployed according to the approved plan.",
  },
  {
    step: "05",
    title: "Monitoring & Incident Management",
    text: "We maintain continuous oversight through inspections, communication systems, reporting structures, and rapid response capabilities.",
  },
  {
    step: "06",
    title: "Review & Improvement",
    text: "Regular audits, performance reviews, and refresher training keep the solution effective as risks evolve.",
  },
];

const VETTING_ITEMS = [
  "Valid National Identification",
  "Certificate of Good Conduct",
  "Academic Certificates",
  "Residence Verification",
  "Village Chief Introduction Letter",
  "Previous Employment References",
  "Three Professional Referees",
  "Comprehensive Background Checks",
  "Medical Fitness Assessment",
  "Physical Fitness Assessment",
  "Oral and Written Interviews",
  "Verification of Employment History",
  "Character and Integrity Evaluation",
];

const TRAINING_ITEMS = [
  "Security Fundamentals",
  "Private Security Laws & Regulations",
  "Surveillance & Observation",
  "Access Control Procedures",
  "Emergency Response",
  "Fire Safety",
  "First Aid",
  "Customer Service",
  "Public Relations",
  "Report Writing",
  "Communication Skills",
  "Ethics & Professional Conduct",
  "Conflict Management",
  "Counter-Terrorism Awareness",
];

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
      { name: "twitter:title", content: "Lancaster Security Limited" },
      {
        name: "twitter:description",
        content:
          "Integrated security and risk management services across commercial, industrial, institutional, residential, and public sectors.",
      },
    ],
  }),
  component: Index,
});

function SectionHeading({
  kicker,
  title,
  align = "left",
  dark = false,
}: {
  kicker: string;
  title: string;
  align?: "left" | "center";
  dark?: boolean;
}) {
  return (
    <div className={align === "center" ? "text-center" : ""}>
      <p className="section-kicker">
        <Sparkles className="size-4" aria-hidden />
        {kicker}
      </p>
      <h2
        className={`mt-3 text-3xl font-extrabold uppercase leading-tight tracking-tight sm:text-4xl lg:text-[2.6rem] ${
          dark ? "text-cream" : "text-ink"
        }`}
      >
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

function TopBar() {
  return (
    <div className="hidden bg-ink text-cream/90 md:block">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-6 py-2 text-xs">
        <div className="flex items-center gap-5">
          {PHONES.map((phone) => (
            <a
              key={phone}
              href={`tel:${phone.replace(/\s/g, "")}`}
              className="inline-flex items-center gap-2 transition-colors hover:text-gold"
            >
              <Phone className="size-3.5 text-gold" aria-hidden />
              {phone}
            </a>
          ))}
        </div>
        <div className="flex items-center gap-5">
          <a
            href={`mailto:${EMAIL}`}
            className="inline-flex items-center gap-2 transition-colors hover:text-gold"
          >
            <Mail className="size-3.5 text-gold" aria-hidden />
            {EMAIL}
          </a>
          <span className="inline-flex items-center gap-2">
            <MapPin className="size-3.5 text-gold" aria-hidden />
            Nairobi, Kenya
          </span>
        </div>
      </div>
    </div>
  );
}

function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-gold/20 bg-background/95 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-6 py-3">
        <a href="#" className="flex items-center gap-3">
          <img
            src={logo.url}
            alt="Lancaster Security Limited logo"
            className="h-12 w-auto"
          />
          <span className="hidden font-display text-sm font-extrabold uppercase leading-tight tracking-wide text-ink sm:block">
            Lancaster
            <span className="block text-gold">Security Ltd</span>
          </span>
        </a>

        <nav className="hidden items-center gap-7 lg:flex">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="font-display text-[0.8rem] font-bold uppercase tracking-wider text-ink/80 transition-colors hover:text-gold"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            className="gold-gradient inline-flex items-center gap-2 rounded-full px-5 py-2.5 font-display text-[0.8rem] font-bold uppercase tracking-wider text-white shadow-lg shadow-gold/30 transition-transform hover:scale-105"
          >
            Get a Quote
            <ArrowRight className="size-4" aria-hidden />
          </a>
        </nav>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? "Close menu" : "Open menu"}
          className="inline-flex size-11 items-center justify-center rounded-lg border border-gold/40 text-ink lg:hidden"
        >
          {open ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </div>

      {open && (
        <nav className="border-t border-gold/20 bg-background px-6 py-4 lg:hidden">
          <div className="flex flex-col gap-3">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="font-display text-sm font-bold uppercase tracking-wider text-ink/80"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="gold-gradient mt-2 inline-flex items-center justify-center gap-2 rounded-full px-5 py-3 font-display text-sm font-bold uppercase tracking-wider text-white"
            >
              Get a Quote
              <ArrowRight className="size-4" aria-hidden />
            </a>
          </div>
        </nav>
      )}
    </header>
  );
}

function Hero() {
  return (
    <section className="relative overflow-hidden bg-ink text-white">
      <div
        className="pointer-events-none absolute inset-y-0 right-0 hidden w-1/3 lg:block"
        style={{
          background:
            "linear-gradient(115deg, transparent 0%, var(--cream) 130%)",
          clipPath: "polygon(30% 0, 100% 0, 100% 100%, 0% 100%)",
        }}
        aria-hidden
      />
      <div
        className="pointer-events-none absolute -left-24 top-0 h-full w-72 opacity-40"
        style={{
          background: "var(--gold-soft)",
          clipPath: "polygon(40% 0, 100% 0, 60% 100%, 0% 100%)",
        }}
        aria-hidden
      />

      <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-6 py-16 lg:grid-cols-2 lg:py-24">
        <div>
          <span className="inline-flex items-center gap-2 rounded-full border border-gold/50 bg-gold/10 px-4 py-1.5 font-display text-xs font-bold uppercase tracking-[0.2em] text-gold">
            Company Profile
          </span>
          <h1 className="mt-6 font-display text-4xl font-black uppercase leading-[1.05] tracking-tight sm:text-5xl lg:text-6xl">
            Lancaster
            <span className="text-gradient-gold block">Security</span>
            <span className="block">Limited</span>
          </h1>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-white/75 sm:text-lg">
            Professional, technology-enabled security and risk management
            solutions — protecting people, assets, and operations across
            commercial, industrial, institutional, residential, and public
            sectors.
          </p>
          <div className="mt-9 flex flex-wrap gap-4">
            <a
              href="#services"
              className="gold-gradient inline-flex items-center gap-2 rounded-full px-7 py-3.5 font-display text-sm font-bold uppercase tracking-wider text-white shadow-xl shadow-gold/30 transition-transform hover:scale-105"
            >
              Our Services
              <ArrowRight className="size-4" aria-hidden />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/5 px-7 py-3.5 font-display text-sm font-bold uppercase tracking-wider text-white transition-colors hover:border-gold hover:text-gold"
            >
              Talk to Us
            </a>
          </div>
          <p className="mt-8 font-display text-sm font-bold uppercase tracking-[0.25em] text-gold/80">
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

function About() {
  return (
    <section id="about" className="bg-background py-20 lg:py-28">
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
            <p>
              Lancaster Security Limited is a professional security solutions
              company dedicated to delivering integrated security and risk
              management services across commercial, industrial,
              institutional, residential, and public sectors.
            </p>
            <p>
              Built on a foundation of discipline, innovation, and
              professionalism, we combine highly trained personnel, modern
              security technologies, strategic planning, and continuous
              operational support to deliver dependable protection and
              measurable value to our clients.
            </p>
            <p>
              Every environment presents unique risks. We work closely with
              our clients to understand their security objectives and develop
              customized solutions that strengthen protection, improve
              operational efficiency, and minimize vulnerabilities — with an
              emphasis on prevention, preparedness, rapid response, and
              continuous improvement.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function VisionMission() {
  return (
    <section className="bg-cream py-20 lg:py-28">
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
                  To become the most trusted and technologically advanced
                  security solutions provider in Africa, setting new standards
                  of excellence in protection, risk management, and customer
                  satisfaction.
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
                  To deliver intelligent, reliable, and innovative security
                  solutions that protect people, assets, and operations while
                  creating safer environments for sustainable growth.
                </p>
              </div>
            </div>

            <div className="mt-10 rounded-3xl bg-ink p-8 text-cream">
              <h3 className="font-display text-xl font-extrabold uppercase tracking-wide text-gold">
                Our Promise
              </h3>
              <p className="mt-3 text-[0.95rem] leading-relaxed text-cream/80">
                To provide proactive security services driven by
                professionalism, innovation, integrity, and unwavering
                commitment to safeguarding our clients&apos; interests.
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

function ServiceCard({ service }: { service: (typeof PHYSICAL_SERVICES)[number] }) {
  return (
    <article className="group overflow-hidden rounded-3xl border border-gold/15 bg-card shadow-sm transition-shadow hover:shadow-xl">
      <div className="relative h-56 overflow-hidden">
        <img
          src={service.image.url}
          alt={service.alt}
          className="size-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink/70 via-transparent to-transparent" />
        <span className="absolute bottom-4 left-5 font-display text-lg font-extrabold uppercase tracking-wide text-white">
          <span className="text-gold">{service.letter})</span> {service.title}
        </span>
      </div>
      <div className="p-6">
        <p className="text-sm leading-relaxed text-ink/70">{service.text}</p>
      </div>
    </article>
  );
}

function Services() {
  return (
    <section id="services" className="bg-background py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeading kicker="Division A" title="Comprehensive Security Solutions" align="center" />
        <p className="mx-auto mt-6 max-w-3xl text-center text-[0.95rem] leading-relaxed text-ink/70">
          Lancaster Security offers its solutions through two specialized
          service divisions — comprehensive security solutions and business
          support services.
        </p>

        <div className="mt-10 flex items-center gap-4">
          <span className="flex size-14 shrink-0 items-center justify-center rounded-2xl bg-ink font-display text-2xl font-black text-gold">
            A
          </span>
          <h3 className="font-display text-2xl font-extrabold uppercase tracking-wide text-ink">
            1) Physical Security Services
          </h3>
        </div>
        <div className="mt-8 grid gap-7 sm:grid-cols-2 lg:grid-cols-3">
          {PHYSICAL_SERVICES.map((s) => (
            <ServiceCard key={s.title} service={s} />
          ))}
        </div>

        <div className="mt-20 flex items-center gap-4">
          <span className="flex size-14 shrink-0 items-center justify-center rounded-2xl bg-ink font-display text-2xl font-black text-gold">
            2
          </span>
          <h3 className="font-display text-2xl font-extrabold uppercase tracking-wide text-ink">
            Electronic Security Solutions
          </h3>
        </div>
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

        <div className="mt-20 flex items-center gap-4">
          <span className="flex size-14 shrink-0 items-center justify-center rounded-2xl bg-ink font-display text-2xl font-black text-gold">
            3
          </span>
          <h3 className="font-display text-2xl font-extrabold uppercase tracking-wide text-ink">
            Security Risk &amp; Intelligence Services
          </h3>
        </div>
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

        <div className="mt-20 flex items-center gap-4">
          <span className="flex size-14 shrink-0 items-center justify-center rounded-2xl bg-ink font-display text-2xl font-black text-gold">
            B
          </span>
          <h3 className="font-display text-2xl font-extrabold uppercase tracking-wide text-ink">
            Business Support &amp; Operational Services
          </h3>
        </div>
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
      </div>
    </section>
  );
}

function WhyUs() {
  return (
    <section id="why-us" className="bg-ink py-20 text-white lg:py-28">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeading kicker="The Lancaster Advantage" title="Why Choose Lancaster Security?" dark />
        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {WHY_US.map((item, i) => (
            <div
              key={item.title}
              className="rounded-3xl border border-white/10 bg-white/[0.04] p-7 transition-colors hover:border-gold/50"
            >
              <span className="font-display text-3xl font-black text-gold">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="mt-3 font-display text-base font-extrabold uppercase tracking-wide">
                {item.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-white/65">
                {item.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Sectors() {
  return (
    <section id="sectors" className="bg-cream py-20 lg:py-28">
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
      </div>
    </section>
  );
}

function Workflow() {
  return (
    <section id="workflow" className="bg-background py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeading kicker="How We Work" title="Our Service Workflow" align="center" />
        <div className="relative mt-14 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {WORKFLOW.map((item) => (
            <div key={item.step} className="relative rounded-3xl border border-gold/15 bg-card p-7 shadow-sm">
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
      </div>
    </section>
  );
}

function Recruitment() {
  return (
    <section id="recruitment" className="bg-cream py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeading kicker="People First" title="Vetting, Training & Recruitment" align="center" />
        <div className="mt-14 grid gap-10 lg:grid-cols-[1.1fr_1fr]">
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

function LookingAhead() {
  const focus = [
    "Expansion of regional operations across Kenya and East Africa.",
    "Adoption of emerging security technologies and smart surveillance.",
    "Deepened specialization in high-risk and complex environments.",
    "Building strategic partnerships that enhance service delivery and client value.",
  ];
  return (
    <section className="bg-background py-20 lg:py-28">
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
              {focus.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="gold-gradient mt-0.5 flex size-6 shrink-0 items-center justify-center rounded-full text-white">
                    <CheckCircle2 className="size-4" aria-hidden />
                  </span>
                  <span className="text-sm leading-relaxed text-ink/80">{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-3xl bg-ink p-10 text-center lg:p-14">
            <p className="font-display text-2xl font-black uppercase leading-snug tracking-wide text-gold sm:text-3xl">
              Securing Today and Protecting Tomorrow
            </p>
            <p className="mt-5 text-sm leading-relaxed text-white/70">
              Through innovation, professionalism, and unwavering dedication,
              we provide security solutions that empower organizations to
              operate with confidence and resilience. Partner with Lancaster
              Security Limited and experience a smarter, stronger, and
              future-ready approach to security.
            </p>
            <a
              href="#contact"
              className="gold-gradient mt-8 inline-flex items-center gap-2 rounded-full px-7 py-3.5 font-display text-sm font-bold uppercase tracking-wider text-white shadow-xl shadow-gold/20 transition-transform hover:scale-105"
            >
              Partner With Us
              <ArrowRight className="size-4" aria-hidden />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section id="contact" className="bg-cream py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeading kicker="Get In Touch" title="Contact Us" align="center" />
        <p className="mx-auto mt-6 max-w-2xl text-center text-[0.95rem] leading-relaxed text-ink/70">
          Speak with our team about a tailored security solution for your
          organization, facility, or event.
        </p>
        <div className="mt-12 grid gap-6 md:grid-cols-3">
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
                    className="text-sm font-semibold text-ink/75 transition-colors hover:text-gold"
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
                className="text-sm font-semibold text-ink/75 transition-colors hover:text-gold"
              >
                {EMAIL}
              </a>
            </p>
            <p className="mt-1.5">
              <a
                href={`https://${WEBSITE}`}
                className="text-sm font-semibold text-ink/75 transition-colors hover:text-gold"
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
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="bg-ink py-12 text-white">
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-8 px-6 lg:flex-row lg:justify-between">
        <div className="flex items-center gap-4">
          <img src={logo.url} alt="Lancaster Security Limited logo" className="h-16 w-auto" />
          <div>
            <p className="font-display text-sm font-extrabold uppercase tracking-wide text-gold">
              Lancaster Security Limited
            </p>
            <p className="mt-1 text-xs text-white/60">
              Securing Today · Protecting Tomorrow
            </p>
          </div>
        </div>
        <nav className="flex flex-wrap justify-center gap-6">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="font-display text-xs font-bold uppercase tracking-wider text-white/70 transition-colors hover:text-gold"
            >
              {link.label}
            </a>
          ))}
        </nav>
        <p className="text-xs text-white/50">
          © {new Date().getFullYear()} Lancaster Security Limited. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

function Index() {
  return (
    <div className="min-h-screen bg-background">
      <TopBar />
      <Navbar />
      <main>
        <Hero />
        <About />
        <VisionMission />
        <Services />
        <WhyUs />
        <Sectors />
        <Workflow />
        <Recruitment />
        <LookingAhead />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
