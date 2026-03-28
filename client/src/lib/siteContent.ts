/*
  Design reminder for siteContent.ts:
  British atelier construction style with premium residential positioning,
  warm architectural imagery, calm trust-led messaging, and consistent editorial tone.
  Shared copy should feel measured, credible, and specific rather than generic.
*/

import {
  Building2,
  Hammer,
  Home as HomeIcon,
  LucideIcon,
  MapPin,
  Ruler,
} from "lucide-react";

export const siteAssets = {
  heroImage:
    "https://d2xsxph8kpxj0f.cloudfront.net/310519663487388036/TekBmbNyta7v8mcU6nDN5J/rok-hero-residential-extension-bn3o6rzPWyFPSSW35FncBb.webp",
  vanImage:
    "https://d2xsxph8kpxj0f.cloudfront.net/310519663487388036/TekBmbNyta7v8mcU6nDN5J/rok-van-hero-full_00aa5da3.png",
  kitchenImage:
    "https://d2xsxph8kpxj0f.cloudfront.net/310519663487388036/TekBmbNyta7v8mcU6nDN5J/rok-project-kitchen-interior-Z3K4yyrmKiaXpD3ePXMzyj.webp",
  detailImage:
    "https://d2xsxph8kpxj0f.cloudfront.net/310519663487388036/TekBmbNyta7v8mcU6nDN5J/rok-craft-detail-joinery-8ZeVj6o25w8uKDV7w4cW7R.webp",
  processImage:
    "https://d2xsxph8kpxj0f.cloudfront.net/310519663487388036/TekBmbNyta7v8mcU6nDN5J/rok-process-architectural-site-TQigzLF3PquLFsJtWwC6Ng.webp",
};

export const siteNavigation = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "Projects", href: "/projects" },
  { label: "Process", href: "/process" },
  { label: "Areas", href: "/areas" },
  { label: "Contact", href: "/contact" },
];

export const serviceAreas = [
  {
    name: "Sussex",
    description:
      "Residential extensions, refurbishments and carefully managed private home projects across East and West Sussex.",
  },
  {
    name: "Surrey",
    description:
      "Premium residential construction for homeowners looking for a polished finish and clear project management.",
  },
  {
    name: "Kent",
    description:
      "Extensions, renovations and bespoke building work delivered with a calm, detail-led approach.",
  },
  {
    name: "Greater London",
    description:
      "High-value residential projects where communication, sequencing and finish quality all matter.",
  },
] as const;

export type ServiceItem = {
  title: string;
  body: string;
  icon: LucideIcon;
  detail: string;
  outcomes: string[];
};

export const services: ServiceItem[] = [
  {
    title: "Extensions",
    body: "Rear, side return and wraparound extensions designed to improve light, flow and everyday living.",
    icon: Ruler,
    detail:
      "We deliver residential extensions that feel integrated with the original home, balancing structure, light, proportion and practical day-to-day use.",
    outcomes: [
      "Improved layout and circulation",
      "Better natural light and garden connection",
      "A finish that feels consistent with the home",
    ],
  },
  {
    title: "Renovations",
    body: "Whole-home refurbishments and interior reconfiguration delivered with a careful eye for finish and function.",
    icon: Hammer,
    detail:
      "From complete refurbishments to targeted interior reworking, our renovation projects focus on quality, coordination and a resolved final result.",
    outcomes: [
      "Upgraded interiors and more useful rooms",
      "Careful detailing across finishes and joinery",
      "A clearer, calmer building process",
    ],
  },
  {
    title: "New Builds",
    body: "Bespoke residential construction managed from enabling works through to final detailing and handover.",
    icon: HomeIcon,
    detail:
      "New-build homes need disciplined management from early groundwork through envelope, fit-out and the final finishing stages. We structure the project around clarity and quality control.",
    outcomes: [
      "Consistent management through each build stage",
      "High attention to build quality and finish",
      "A home shaped around long-term value",
    ],
  },
  {
    title: "Project Management",
    body: "Structured planning, communication and site coordination that keep programme, quality and expectations aligned.",
    icon: Building2,
    detail:
      "Strong residential delivery depends on sequencing, communication and oversight. We keep the process organised so clients always understand where the project stands.",
    outcomes: [
      "Clear communication throughout the build",
      "Better control of sequencing and site standards",
      "A more dependable client experience",
    ],
  },
];

export const featuredProjects = [
  {
    title: "Contemporary family extension",
    summary:
      "A light-filled rear extension pairing slim glazing, warm stone surfaces and a calm open-plan layout for everyday living.",
    image: siteAssets.heroImage,
    label: "Featured exterior",
    type: "Extension",
  },
  {
    title: "Bespoke kitchen renovation",
    summary:
      "A refined interior centred around rooflights, oak joinery and a carefully planned kitchen-family space.",
    image: siteAssets.kitchenImage,
    label: "Interior finish",
    type: "Renovation",
  },
  {
    title: "Craftsmanship in the details",
    summary:
      "Joinery lines, ironmongery, shadow gaps and surface junctions considered with the same care as the wider build.",
    image: siteAssets.detailImage,
    label: "Detail study",
    type: "Craftsmanship",
  },
  {
    title: "Organised site delivery",
    summary:
      "A well-managed site environment with clearer sequencing, cleaner coordination and stronger day-to-day oversight.",
    image: siteAssets.processImage,
    label: "Process focus",
    type: "Delivery",
  },
];

export const processSteps = [
  {
    step: "01",
    title: "Initial consultation",
    text: "We discuss your plans, priorities, timescales and the kind of finished home you want to create.",
  },
  {
    step: "02",
    title: "Scope and programme",
    text: "We define the project clearly, outline likely sequencing and create a realistic route to delivery.",
  },
  {
    step: "03",
    title: "Build and coordinate",
    text: "The site is managed carefully with close attention to workmanship, communication and programme control.",
  },
  {
    step: "04",
    title: "Finish and handover",
    text: "Final details are reviewed properly so the completed space feels resolved, polished and ready to use.",
  },
] as const;

export const trustReasons = [
  "Clear communication from first conversation to final handover.",
  "Well-managed residential sites that stay organised and presentable.",
  "High-spec finishes and careful detailing shaped around the brief.",
  "A practical, client-focused approach across the South East.",
] as const;

export const projectMetrics = [
  { value: "South East", label: "Regional residential focus" },
  { value: "4 core offers", label: "Extensions to full project management" },
  { value: "Detail-led", label: "Approach to finish and handover" },
] as const;

export const contactDetails = {
  phone: "01323 409640",
  email: "info@therokgroup.co.uk",
  coverage: "Sussex, Surrey, Kent and Greater London",
  officeNote:
    "Speak with The Rok Group about your extension, renovation or new build and we will help outline the most practical next step.",
};

export const areaHighlights = [
  {
    name: "Local knowledge",
    description:
      "We understand the expectations of homeowners undertaking high-value residential improvements across the South East.",
    icon: MapPin,
  },
  {
    name: "Premium finish",
    description:
      "Projects are shaped around long-term quality, thoughtful detailing and a cleaner final result.",
    icon: HomeIcon,
  },
  {
    name: "Managed delivery",
    description:
      "From initial brief through to handover, the emphasis stays on clear coordination and dependable progress.",
    icon: Building2,
  },
] as const;

export const testimonial = {
  quote:
    "Professional, organised and meticulous from start to finish. The end result felt calm, high quality and properly thought through.",
  attribution: "Homeowner testimonial — South East residential project",
};
