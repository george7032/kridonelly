import {
  Award,
  Banknote,
  Building2,
  Church,
  ClipboardCheck,
  Cctv,
  Eye,
  Fence,
  GraduationCap,
  Handshake,
  HardHat,
  HeartPulse,
  Landmark,
  Lightbulb,
  LockKeyhole,
  Search,
  Shield,
  ShieldCheck,
  ShoppingBag,
  Siren,
  UserCheck,
  Users,
  type LucideIcon,
} from "lucide-react";

import alarmResponse from "@/assets/alarm-response.jpg.asset.json";
import accessControl from "@/assets/access-control.jpg.asset.json";
import consultancy from "@/assets/consultancy.jpg.asset.json";
import cctvInstallation from "@/assets/cctv-installation.jpg.asset.json";
import eventSecurity from "@/assets/event-security.jpg.asset.json";
import fireAlarm from "@/assets/fire-alarm.jpg.asset.json";
import guardsTeam from "@/assets/guards-team.jpg.asset.json";
import investigations from "@/assets/investigations.jpg.asset.json";
import k9Security from "@/assets/k9-security.jpg.asset.json";
import officersDuo from "@/assets/officers-duo.jpg.asset.json";
import perimeterProtection from "@/assets/perimeter-protection.jpg.asset.json";
import receptionServices from "@/assets/reception-services.jpg.asset.json";
import staticGuarding from "@/assets/static-guarding.jpg.asset.json";
import vipProtection from "@/assets/vip-protection.jpg.asset.json";

export const PHONES = ["0722 217619", "0726 135428", "0724 066378"];
export const EMAIL = "info@lancastersecurity.com";
export const WEBSITE = "www.lancastersecurity.com";
export const ADDRESS = "P.O. Box 72056-00200, City Square, Nairobi, Kenya";

export const NAV_LINKS = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
  { label: "Services", to: "/services" },
  { label: "Why Us", to: "/why-us" },
  { label: "Who We Serve", to: "/who-we-serve" },
  { label: "Workflow", to: "/workflow" },
  { label: "Contact", to: "/contact" },
];

export const INTRODUCTION = [
  "Security today extends far beyond guarding gates and responding to incidents. Organizations operate in an increasingly dynamic environment where risks can emerge from physical threats, unauthorized access, operational vulnerabilities, technological disruptions, and evolving criminal tactics. As businesses grow and infrastructures become more complex, traditional security approaches are often insufficient to provide the level of protection modern organizations require.",
  "The challenge facing many organizations is not simply the presence of threats, but the lack of integrated security strategies capable of anticipating risks before they escalate. Delayed response, poorly trained personnel, weak surveillance systems, inadequate access controls, and fragmented security operations continue to expose businesses, institutions, and communities to avoidable losses.",
  "Our commitment is not only to protect assets and property but also to contribute to the resilience, continuity, and success of every organization we serve.",
];

export const ABOUT_PARAGRAPHS = [
  "Lancaster Security Limited is a professional security solutions company dedicated to delivering integrated security and risk management services across commercial, industrial, institutional, residential, and public sectors.",
  "Built on a foundation of discipline, innovation, and professionalism, Lancaster Security provides tailored security solutions designed to address both current and emerging security challenges. We combine highly trained personnel, modern security technologies, strategic planning, and continuous operational support to deliver dependable protection and measurable value to our clients.",
  "At Lancaster Security, we recognize that every environment presents unique risks. As such, we work closely with our clients to understand their security objectives and develop customized solutions that strengthen protection, improve operational efficiency, and minimize vulnerabilities.",
  "Our approach emphasizes prevention, preparedness, rapid response, and continuous improvement, ensuring that clients receive comprehensive security support at every level.",
];

export const VISION =
  "To become the most trusted and technologically advanced security solutions provider in Africa, setting new standards of excellence in protection, risk management, and customer satisfaction.";

export const MISSION =
  "To deliver intelligent, reliable, and innovative security solutions that protect people, assets, and operations while creating safer environments for sustainable growth.";

export const PROMISE =
  "To provide proactive security services driven by professionalism, innovation, integrity, and unwavering commitment to safeguarding our clients' interests.";

export const CORE_VALUES: { icon: LucideIcon; title: string; text: string }[] = [
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

export const PHYSICAL_SERVICES = [
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

export const ELECTRONIC_SERVICES: {
  icon: LucideIcon;
  title: string;
  image: { url: string };
  alt: string;
  text: string;
}[] = [
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

export const RISK_SERVICES: { icon: LucideIcon; title: string; text: string }[] = [
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

export const BUSINESS_SUPPORT = [
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

export const WHY_US: { title: string; text: string }[] = [
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

export const SECTORS: { icon: LucideIcon; label: string; text: string }[] = [
  {
    icon: Building2,
    label: "Corporate Organizations",
    text: "Headquarters, office towers, and campuses protected with reception security, access control, and executive protection.",
  },
  {
    icon: Landmark,
    label: "Government Institutions",
    text: "Public offices and installations secured by thoroughly vetted, disciplined, and accountable personnel.",
  },
  {
    icon: GraduationCap,
    label: "Educational Institutions",
    text: "Schools, colleges, and universities kept safe through campus patrols, access management, and event control.",
  },
  {
    icon: HeartPulse,
    label: "Healthcare Facilities",
    text: "Hospitals and clinics supported with sensitive-area protection, visitor control, and emergency readiness.",
  },
  {
    icon: Banknote,
    label: "Financial Institutions",
    text: "Banks, saccos, and payment points safeguarded with high-visibility guarding and rapid alarm response.",
  },
  {
    icon: Church,
    label: "Religious Organizations",
    text: "Worship centers and grounds managed with orderly crowd control during services and large gatherings.",
  },
  {
    icon: HardHat,
    label: "Construction Sites",
    text: "Equipment, materials, and works protected with after-hours patrols and strict site access control.",
  },
  {
    icon: ShoppingBag,
    label: "Retail & Commercial Centers",
    text: "Malls, outlets, and commercial premises supported with loss prevention and customer safety operations.",
  },
  {
    icon: Users,
    label: "Event Organizers",
    text: "Concerts, conferences, and private functions covered end to end by dedicated event security teams.",
  },
  {
    icon: Shield,
    label: "NGOs & Development Agencies",
    text: "Offices, compounds, and field operations protected with dependable, well-supervised security cover.",
  },
  {
    icon: UserCheck,
    label: "High-Net-Worth Individuals",
    text: "Personal and residential protection, secure transportation, and discreet close protection services.",
  },
  {
    icon: Eye,
    label: "Residential Communities",
    text: "Estates and gated communities secured with gatehouse officers, patrols, and visitor registers.",
  },
];

export const WORKFLOW: { step: string; title: string; text: string }[] = [
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

export const VETTING_ITEMS = [
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

export const TRAINING_ITEMS = [
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

export const LOOKING_AHEAD = [
  "Expansion of regional operations across Kenya and East Africa.",
  "Adoption of emerging security technologies and smart surveillance.",
  "Deepened specialization in high-risk and complex environments.",
  "Building strategic partnerships that enhance service delivery and client value.",
];

export const images = { officersDuo, guardsTeam };
