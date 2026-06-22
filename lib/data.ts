// Single source of truth for all DJ Shipping content.
// Consumed by Navbar, Footer, maps, cards, and section components.

export const company = {
  name: "DJ Shipping",
  established: 1999,
  years: 25,
  tagline: "Premier Freight Forwarding & Customs Clearance",
  domain: "www.djshipping.net",
  blurb:
    "25 years of end-to-end supply chain excellence. Licensed, trusted, and globally connected.",
} as const;

export const contact = {
  phone: { label: "+92-42-37180721", href: "tel:+924237180721" },
  whatsapp: { label: "0321 4968004", href: "https://wa.me/923214968004" },
  salesEmail: { label: "sales@djshipping.net", href: "mailto:sales@djshipping.net" },
  mgmtEmail: { label: "jawaid@djshipping.net", href: "mailto:jawaid@djshipping.net" },
  headOffice: "200 MB, DHA Phase 6, Lahore, Punjab, Pakistan",
} as const;

export interface NavItem {
  label: string;
  href: string;
}

export const navItems: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "Network", href: "/network" },
  { label: "Contact", href: "/contact" },
];

export interface Stat {
  value: number;
  suffix: string;
  prefix?: string;
  label: string;
}

export const stats: Stat[] = [
  { value: 25, suffix: "+", label: "Years of Excellence" },
  { value: 5, suffix: "", label: "Offices Nationwide" },
  { value: 4, suffix: "", label: "Elite Memberships" },
  { value: 100, suffix: "K+", label: "Shipments Cleared" },
];

export interface ValueProp {
  title: string;
  description: string;
  icon: IconName;
}

export const valueProps: ValueProp[] = [
  {
    title: "A Quarter Century of Trade",
    description:
      "Operating continuously since 1999 — a 25-year track record handling cargo across every major Pakistani gateway.",
    icon: "shield",
  },
  {
    title: "Licensed Customs Authority",
    description:
      "A fully licensed customs clearance agent, compliant with Pakistan Customs Service and FBR regulations.",
    icon: "doc",
  },
  {
    title: "Nationwide Presence",
    description:
      "Five strategically positioned offices — Lahore, Karachi, Faisalabad, Islamabad and Sialkot — close to every commercial zone.",
    icon: "pin",
  },
  {
    title: "Elite Network Access",
    description:
      "JC TRANS, PIFFA, IATA and ACAAP memberships connect you to a pre-vetted global logistics consortium.",
    icon: "globe",
  },
];

export type IconName =
  | "customs"
  | "ship"
  | "plane"
  | "truck"
  | "shield"
  | "doc"
  | "pin"
  | "globe"
  | "check"
  | "arrow"
  | "phone"
  | "mail"
  | "whatsapp"
  | "clock"
  | "box"
  | "route"
  | "anchor"
  | "scale"
  | "layers"
  | "factory";

export interface Service {
  number: string;
  slug: string;
  title: string;
  tagline: string;
  icon: IconName;
  description: string;
  capabilities: string[];
  image: string;
}

export const services: Service[] = [
  {
    number: "01",
    slug: "customs-clearance",
    title: "Customs Clearance",
    tagline: "Licensed. Compliant. Decisive.",
    icon: "customs",
    description:
      "An active customs clearance license earned through 25+ years of continuous operation, fully compliant with Pakistan Customs Service and FBR regulations. Certified clearing agents specialise in tariff classification, duty assessment, documentation and procedures across five major gateways — from pre-shipment documentation review and HS code validation to GD filing, examination liaison, duty payment and final cargo release.",
    capabilities: [
      "Import / Export GD filing",
      "HS code classification & tariff optimisation",
      "Duty drawback & SRO compliance",
      "Examination & scanning coordination",
      "Post-clearance audit support",
      "One-window operation (FBR, NTN, SRB)",
    ],
    image: "/images/port.jpg",
  },
  {
    number: "02",
    slug: "freight-forwarding",
    title: "Freight Forwarding",
    tagline: "Air & Ocean. Global Reach.",
    icon: "ship",
    description:
      "IATA-certified and ACAAP-registered, integrated into the JC TRANS international logistics network. Ocean freight covers FCL and LCL shipments across major global trade lanes with vessel booking, Bill of Lading, marine insurance and multi-modal pre-carriage. Air freight runs on direct relationships with Emirates SkyCargo, Qatar Airways Cargo, Turkish Cargo and PIA Cargo from three Pakistani airports.",
    capabilities: [
      "FCL & LCL ocean freight (import/export)",
      "Air freight (express & general cargo)",
      "Vessel booking & B/L management",
      "Rate negotiation & carrier selection",
      "Marine insurance arrangement",
      "Freight tracking & status reporting",
      "Hazardous cargo (DG) handling",
    ],
    image: "/images/freight.jpg",
  },
  {
    number: "03",
    slug: "land-transportation",
    title: "Land Transportation",
    tagline: "Port to Door. Safe. On Time.",
    icon: "truck",
    description:
      "Post-clearance cargo transport from Pakistan's ports and dry ports to inland commercial hubs, through a network of road transport partners covering eight major cities. A traffic management desk provides real-time visibility. Cross-border operations manage the Pakistan–Afghanistan Transit Trade corridor and coordinate logistics from Central Asia and China via Torkham and Wagah.",
    capabilities: [
      "Port-to-warehouse delivery",
      "Container haulage (20ft, 40ft, 40HC)",
      "Dry van, flatbed & refrigerated transport",
      "Cross-border transit (Afghanistan corridor)",
      "Bonded truck operations",
      "Last-mile delivery to industrial zones",
    ],
    image: "/images/land.jpg",
  },
];

export interface Office {
  city: string;
  code: string;
  role: string;
  hq?: boolean;
  address?: string;
  services: string[];
  // approx position on the Pakistan map (viewBox 0..100)
  map: { x: number; y: number };
}

export const offices: Office[] = [
  {
    city: "Lahore",
    code: "LHE",
    role: "Headquarters",
    hq: true,
    address: "200 MB, DHA Phase 6 · Lahore, Punjab, Pakistan",
    services: ["Customs Clearance", "Freight Forwarding", "Land Transport", "Air Cargo Management"],
    map: { x: 70, y: 47 },
  },
  {
    city: "Karachi",
    code: "KHI",
    role: "Regional Branch",
    address: "Port city operations hub · Sindh, Pakistan",
    services: ["Customs Clearance", "Port Operations", "Ocean Freight", "Land Transport"],
    map: { x: 30, y: 86 },
  },
  {
    city: "Faisalabad",
    code: "LYP",
    role: "Regional Branch",
    address: "Industrial textile belt · Punjab, Pakistan",
    services: ["Customs Clearance", "Dry Port Liaison", "Land Transport", "Textile Cargo"],
    map: { x: 62, y: 52 },
  },
  {
    city: "Islamabad",
    code: "ISB",
    role: "Regional Branch",
    address: "Federal capital territory · Pakistan",
    services: ["Customs Clearance", "Air Cargo", "Government Liaison", "Land Transport"],
    map: { x: 66, y: 30 },
  },
  {
    city: "Sialkot",
    code: "SKT",
    role: "Regional Branch",
    address: "Export manufacturing hub · Punjab, Pakistan",
    services: ["Customs Clearance", "Export Handling", "Air Cargo", "Surgical / Sports Goods"],
    map: { x: 73, y: 38 },
  },
];

export interface Membership {
  abbr: string;
  name: string;
  scope: string;
  description: string;
}

export const memberships: Membership[] = [
  {
    abbr: "JC TRANS",
    name: "JC TRANS Global Network",
    scope: "Global",
    description:
      "A global consortium of pre-vetted freight professionals across 180+ countries, enabling preferential agreements and end-to-end cargo tracking.",
  },
  {
    abbr: "PIFFA",
    name: "Pakistan International Freight Forwarders Association",
    scope: "Pakistan",
    description:
      "Membership ensures compliance with professional freight standards and provides ongoing regulatory consultation.",
  },
  {
    abbr: "IATA",
    name: "International Air Transport Association",
    scope: "Global",
    description:
      "Accreditation authorises air waybill issuance and direct airline negotiations in full compliance with aviation standards.",
  },
  {
    abbr: "ACAAP",
    name: "Air Cargo Agents Association of Pakistan",
    scope: "Pakistan",
    description:
      "Membership provides preferred cargo handling at Pakistani airports.",
  },
];

export interface Corridor {
  region: string;
  code: string;
  detail: string;
  // arc endpoint on world map (viewBox 0..100)
  to: { x: number; y: number };
}

// Origin node (Pakistan) for the world reach map
export const worldOrigin = { x: 66, y: 44 };

export const corridors: Corridor[] = [
  { region: "China / CPEC Routes", code: "PEK", detail: "Overland & sea via CPEC", to: { x: 82, y: 38 } },
  { region: "Gulf (UAE, Saudi Arabia)", code: "DXB", detail: "Air & ocean, high frequency", to: { x: 60, y: 48 } },
  { region: "European Ports", code: "RTM", detail: "Rotterdam · Hamburg", to: { x: 50, y: 28 } },
  { region: "UK Gateways", code: "FXT", detail: "Felixstowe · London Gateway", to: { x: 47, y: 26 } },
  { region: "North America", code: "HOU", detail: "Houston · Los Angeles", to: { x: 16, y: 40 } },
  { region: "East Africa", code: "MBA", detail: "Mombasa", to: { x: 56, y: 60 } },
  { region: "Southeast Asia", code: "SIN", detail: "Singapore & regional ports", to: { x: 82, y: 58 } },
  { region: "Central Asia Corridor", code: "TAS", detail: "Via Torkham & Wagah", to: { x: 70, y: 33 } },
];

export interface ProcessStep {
  number: string;
  title: string;
  description: string;
  icon: IconName;
}

export const processSteps: ProcessStep[] = [
  { number: "01", title: "Enquiry & Quote", description: "Share cargo details; receive a competitive quotation within one business day.", icon: "doc" },
  { number: "02", title: "Booking & Documentation", description: "Vessel/flight booking, B/L and GD preparation, HS code validation.", icon: "box" },
  { number: "03", title: "Customs Clearance", description: "GD filing, examination liaison and duty payment across major gateways.", icon: "customs" },
  { number: "04", title: "Freight Movement", description: "Air or ocean freight executed with live status reporting.", icon: "ship" },
  { number: "05", title: "Land Transport", description: "Port-to-door haulage to your warehouse or industrial zone.", icon: "truck" },
  { number: "06", title: "Delivery & POD", description: "Final-mile delivery with proof of delivery and documentation handover.", icon: "check" },
];

export interface Industry {
  title: string;
  description: string;
  icon: IconName;
}

export const industries: Industry[] = [
  { title: "Textiles & Apparel", description: "Specialised textile cargo handling out of the Faisalabad industrial belt.", icon: "layers" },
  { title: "Surgical & Sports Goods", description: "Export handling and air cargo from the Sialkot manufacturing hub.", icon: "shield" },
  { title: "FMCG & Manufacturing", description: "High-volume import clearance and nationwide distribution support.", icon: "factory" },
  { title: "Project & DG Cargo", description: "Oversized, hazardous and project cargo under IATA DGR and IMO rules.", icon: "anchor" },
];

export interface Faq {
  question: string;
  answer: string;
}

export const faqs: Faq[] = [
  {
    question: "Do you handle both import and export?",
    answer:
      "Yes. We provide comprehensive customs clearance and freight forwarding services for both import and export consignments across all modes — air, ocean and land.",
  },
  {
    question: "Is your customs clearance licence current?",
    answer:
      "Absolutely. Our customs clearance licence has been continuously active since 1999 — a full 25-year track record with Pakistan Customs and the Federal Board of Revenue.",
  },
  {
    question: "Which ports and airports do you operate at?",
    answer:
      "We operate at Karachi Port, Port Qasim, Dry Port Lahore (QICT), Dry Port Faisalabad, Islamabad Dry Port, and all major Pakistani international airports.",
  },
  {
    question: "Can you manage hazardous or oversized cargo?",
    answer:
      "Yes. Our team is trained in IATA Dangerous Goods Regulations (DGR) for air cargo and IMO regulations for ocean freight, and we regularly handle oversized and project cargo.",
  },
  {
    question: "How do I request a quotation?",
    answer:
      "The quickest way is via WhatsApp at 0321 4968004, or submit the quote request form with your cargo details (origin, destination, weight, dimensions, commodity) and we will respond within one business day.",
  },
];

export interface BusinessHours {
  day: string;
  hours: string;
}

export const businessHours: BusinessHours[] = [
  { day: "Monday – Thursday", hours: "9:00 am – 6:00 pm" },
  { day: "Friday", hours: "9:00 am – 1:00 pm · 2:30 pm – 6:00 pm" },
  { day: "Saturday", hours: "9:00 am – 2:00 pm" },
  { day: "Sunday", hours: "Closed" },
];

export const footerServices = [
  "Customs Clearance",
  "Air Freight",
  "Ocean Freight",
  "Land Transportation",
  "Container Management",
];
