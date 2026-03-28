/*
  Design reminder for Home.tsx:
  British atelier construction style with editorial asymmetry, warm residential imagery,
  deep slate accents, generous whitespace, and calm premium conversion-focused storytelling.
  Avoid generic centred brochure layouts. Emphasise craftsmanship, clarity, and trust.
*/

import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  Building2,
  CheckCircle2,
  Hammer,
  Home as HomeIcon,
  Mail,
  MapPin,
  Phone,
  Ruler,
} from "lucide-react";

const heroImage =
  "https://d2xsxph8kpxj0f.cloudfront.net/310519663487388036/TekBmbNyta7v8mcU6nDN5J/rok-hero-residential-extension-bn3o6rzPWyFPSSW35FncBb.webp";
const kitchenImage =
  "https://d2xsxph8kpxj0f.cloudfront.net/310519663487388036/TekBmbNyta7v8mcU6nDN5J/rok-project-kitchen-interior-Z3K4yyrmKiaXpD3ePXMzyj.webp";
const detailImage =
  "https://d2xsxph8kpxj0f.cloudfront.net/310519663487388036/TekBmbNyta7v8mcU6nDN5J/rok-craft-detail-joinery-8ZeVj6o25w8uKDV7w4cW7R.webp";
const processImage =
  "https://d2xsxph8kpxj0f.cloudfront.net/310519663487388036/TekBmbNyta7v8mcU6nDN5J/rok-process-architectural-site-TQigzLF3PquLFsJtWwC6Ng.webp";

const services = [
  {
    title: "Extensions",
    body: "Rear, side return and wraparound extensions designed to improve light, flow and everyday living.",
    icon: Ruler,
  },
  {
    title: "Renovations",
    body: "Whole-home refurbishments and interior reconfiguration delivered with a careful eye for finish and function.",
    icon: Hammer,
  },
  {
    title: "New Builds",
    body: "Bespoke residential construction managed from enabling works through to final detailing and handover.",
    icon: HomeIcon,
  },
  {
    title: "Project Management",
    body: "Structured planning, communication and site coordination that keep programme, quality and expectations aligned.",
    icon: Building2,
  },
];

const reasons = [
  "Clear communication from first conversation to final handover.",
  "Well-managed residential sites that stay organised and presentable.",
  "High-spec finishes and careful detailing shaped around the brief.",
  "A practical, client-focused approach across the South East.",
];

const projects = [
  {
    title: "Contemporary family extension",
    summary:
      "A light-filled rear extension pairing slim glazing, warm stone surfaces and a calm open-plan layout for everyday living.",
    image: heroImage,
    label: "Featured exterior",
  },
  {
    title: "Bespoke kitchen renovation",
    summary:
      "A refined interior centred around rooflights, oak joinery and a carefully planned kitchen-family space.",
    image: kitchenImage,
    label: "Interior finish",
  },
  {
    title: "Craftsmanship in the details",
    summary:
      "Joinery lines, ironmongery, shadow gaps and surface junctions considered with the same care as the wider build.",
    image: detailImage,
    label: "Detail study",
  },
];

const processSteps = [
  {
    step: "01",
    title: "Initial consultation",
    text: "We discuss your plans, priorities, timescales and the character of the finished space you want to create.",
  },
  {
    step: "02",
    title: "Scope and programme",
    text: "We define the project clearly, outline likely sequencing, and establish a realistic route to delivery.",
  },
  {
    step: "03",
    title: "Build and coordinate",
    text: "The site is managed carefully with close attention to communication, workmanship and programme control.",
  },
  {
    step: "04",
    title: "Finish and handover",
    text: "Final details are reviewed properly so the completed space feels resolved, polished and ready to enjoy.",
  },
];

const areas = ["Sussex", "Surrey", "Kent", "Greater London"];

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="sticky top-0 z-50 border-b border-white/8 bg-[color:var(--color-ink)]/78 backdrop-blur-2xl">
        <div className="container flex items-center justify-between gap-6 py-3.5 lg:py-4">
          <a href="#top" className="group flex items-center gap-3 text-primary-foreground">
            <div className="flex h-10 w-10 items-center justify-center border border-white/18 bg-white/4 text-sm font-semibold tracking-[0.35em] text-white transition duration-300 group-hover:border-[color:var(--color-gold)] group-hover:text-[color:var(--color-gold)]">
              R
            </div>
            <div>
              <p className="font-display text-[2rem] uppercase leading-none tracking-[0.1em]">
                Rok
              </p>
              <p className="text-[0.7rem] uppercase tracking-[0.34em] text-white/58">
                The Rok Group
              </p>
            </div>
          </a>

          <nav className="hidden items-center gap-7 lg:flex">
            {[
              ["Services", "#services"],
              ["Projects", "#projects"],
              ["Process", "#process"],
              ["Areas", "#areas"],
              ["Contact", "#contact"],
            ].map(([label, href]) => (
              <a
                key={label}
                href={href}
                className="text-[0.82rem] uppercase tracking-[0.14em] text-white/70 transition duration-300 hover:text-white"
              >
                {label}
              </a>
            ))}
          </nav>

          <div className="hidden items-center gap-4 lg:flex">
            <a
              href="tel:01323409640"
              className="flex items-center gap-2 text-sm text-white/78 transition hover:text-white"
            >
              <Phone className="h-4 w-4 text-[color:var(--color-gold)]" />
              01323 409640
            </a>
            <Button asChild className="rounded-none border border-[color:var(--color-gold)] bg-[color:var(--color-gold)] px-5 text-[0.78rem] uppercase tracking-[0.14em] text-[color:var(--color-ink)] hover:bg-[color:var(--color-stone)]">
              <a href="#contact">Request consultation</a>
            </Button>
          </div>
        </div>
      </header>

      <main id="top">
        <section className="relative overflow-hidden bg-[color:var(--color-ink)] text-primary-foreground">
          <div className="absolute inset-0">
            <img
              src={heroImage}
              alt="Contemporary residential extension exterior"
              className="h-full w-full object-cover opacity-35"
            />
            <div className="absolute inset-0 bg-[linear-gradient(92deg,rgba(11,22,35,0.96)_0%,rgba(11,22,35,0.86)_34%,rgba(11,22,35,0.52)_60%,rgba(11,22,35,0.22)_100%)]" />
          </div>

          <div className="container relative grid min-h-[92vh] items-end gap-16 pt-32 pb-16 md:pb-20 lg:grid-cols-[1.08fr_0.92fr] lg:items-center lg:pt-40 lg:pb-24">
            <div className="max-w-[46rem] space-y-10">
              <div className="space-y-5">
                <div className="inline-flex items-center gap-3 border border-white/12 bg-white/6 px-4 py-2.5 text-[0.69rem] uppercase tracking-[0.24em] text-white/72 backdrop-blur-sm">
                  <span className="h-px w-8 bg-[color:var(--color-gold)]" />
                  Premium residential construction across the South East
                </div>
                <h1 className="max-w-[9.6ch] font-display text-[4rem] uppercase leading-[0.9] tracking-[0.015em] text-white sm:text-[4.8rem] md:text-[5.35rem] lg:text-[5.55rem] xl:text-[5.9rem]">
                  Built with structure. Finished with care.
                </h1>
                <p className="max-w-[32rem] text-lg leading-8 text-white/74 md:text-[1.08rem]">
                  The Rok Group delivers extensions, renovations and bespoke residential builds with a calmer,
                  more carefully managed approach to workmanship, sequencing and finish quality.
                </p>
              </div>

              <div className="flex flex-col gap-4 pt-2 sm:flex-row">
                <Button asChild className="rounded-none border border-[color:var(--color-gold)] bg-[color:var(--color-gold)] px-7 py-6 text-[0.82rem] uppercase tracking-[0.16em] text-[color:var(--color-ink)] hover:bg-[color:var(--color-stone)]">
                  <a href="#contact">
                    Request consultation <ArrowRight className="ml-2 h-4 w-4" />
                  </a>
                </Button>
                <Button asChild variant="outline" className="rounded-none border-white/22 bg-white/2 px-7 py-6 text-[0.82rem] uppercase tracking-[0.16em] text-white hover:bg-white/10 hover:text-white">
                  <a href="#projects">View featured work</a>
                </Button>
              </div>
            </div>

            <div className="grid gap-4 self-end pt-8 md:grid-cols-3 lg:grid-cols-1 lg:justify-self-end lg:max-w-[18.5rem] lg:pt-32">
              {[
                ["Residential focus", "Extensions, refurbishments and bespoke private homes"],
                ["Managed delivery", "Clear communication and disciplined site coordination"],
                ["Finish quality", "Detail-led workmanship shaped around long-term value"],
              ].map(([title, text]) => (
                <div
                  key={title}
                  className="border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.10),rgba(255,255,255,0.05))] p-5 backdrop-blur-lg transition duration-500 hover:-translate-y-1 hover:bg-white/10"
                >
                  <p className="mb-3 text-[0.68rem] uppercase tracking-[0.24em] text-[color:var(--color-gold)]">
                    {title}
                  </p>
                  <p className="text-[0.96rem] leading-7 text-white/72">{text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="relative bg-[color:var(--color-soft)] py-24 lg:py-32">
          <div className="container grid gap-14 lg:grid-cols-[0.84fr_1.16fr] lg:items-start">
            <div className="space-y-6 lg:sticky lg:top-28">
              <p className="section-label">What we do</p>
              <h2 className="font-display text-5xl uppercase leading-[0.92] text-[color:var(--color-ink)] md:text-6xl">
                Residential building work that feels resolved, not rushed.
              </h2>
              <p className="max-w-lg text-lg leading-8 text-[color:var(--color-muted-ink)]">
                We work with homeowners who want more than a basic contractor experience. The focus is on clear
                planning, thoughtful execution and a finish that stands up to daily life as well as first impressions.
              </p>
            </div>

            <div id="services" className="grid gap-5 md:grid-cols-2">
              {services.map(({ title, body, icon: Icon }) => (
                <article
                  key={title}
                  className="group border border-[color:var(--color-border-soft)] bg-white p-8 shadow-[0_20px_60px_rgba(10,22,35,0.08)] transition duration-500 hover:-translate-y-1 hover:shadow-[0_28px_80px_rgba(10,22,35,0.14)]"
                >
                  <div className="mb-8 flex items-center justify-between">
                    <div className="flex h-12 w-12 items-center justify-center border border-[color:var(--color-border-soft)] bg-[color:var(--color-soft)] text-[color:var(--color-ink)] transition duration-500 group-hover:border-[color:var(--color-gold)] group-hover:bg-[color:var(--color-gold)]/10">
                      <Icon className="h-5 w-5" />
                    </div>
                    <span className="text-[0.68rem] uppercase tracking-[0.28em] text-[color:var(--color-muted-ink)]/70">
                      ROK service
                    </span>
                  </div>
                  <h3 className="mb-4 text-2xl font-semibold tracking-[-0.03em] text-[color:var(--color-ink)]">
                    {title}
                  </h3>
                  <p className="text-base leading-8 text-[color:var(--color-muted-ink)]">{body}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="projects" className="bg-background py-24 lg:py-32">
          <div className="container space-y-14">
            <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
              <div className="space-y-5">
                <p className="section-label">Featured work</p>
                <h2 className="font-display text-5xl uppercase leading-[0.92] text-[color:var(--color-ink)] md:text-6xl">
                  Spaces that show the standard, not just the service list.
                </h2>
              </div>
              <p className="max-w-2xl justify-self-end text-lg leading-8 text-[color:var(--color-muted-ink)]">
                We focus on projects where the finished result matters as much as the build itself: light, proportion,
                material quality and the everyday practicality of the completed space.
              </p>
            </div>

            <div className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr_0.8fr]">
              {projects.map((project, index) => (
                <article
                  key={project.title}
                  className={`group overflow-hidden border border-[color:var(--color-border-soft)] bg-white shadow-[0_24px_70px_rgba(10,22,35,0.08)] ${
                    index === 0 ? "lg:row-span-2" : ""
                  }`}
                >
                  <div className={`overflow-hidden ${index === 0 ? "aspect-[4/5]" : "aspect-[4/3]"}`}>
                    <img
                      src={project.image}
                      alt={project.title}
                      className="h-full w-full object-cover transition duration-700 group-hover:scale-[1.04]"
                    />
                  </div>
                  <div className="space-y-4 p-7">
                    <p className="text-[0.68rem] uppercase tracking-[0.28em] text-[color:var(--color-gold)]">
                      {project.label}
                    </p>
                    <h3 className="text-2xl font-semibold tracking-[-0.03em] text-[color:var(--color-ink)]">
                      {project.title}
                    </h3>
                    <p className="leading-8 text-[color:var(--color-muted-ink)]">{project.summary}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-[color:var(--color-ink)] py-24 text-primary-foreground lg:py-32">
          <div className="container grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
            <div className="space-y-6">
              <p className="section-label !text-[color:var(--color-gold)]/90 before:!bg-[color:var(--color-gold)]">Why clients choose Rok</p>
              <h2 className="font-display text-5xl uppercase leading-[0.92] text-white md:text-6xl">
                A measured approach to quality, communication and control.
              </h2>
              <p className="max-w-xl text-lg leading-8 text-white/72">
                High-value residential projects require more than trade capability. They require sequencing, judgement,
                site discipline and consistent communication so the process feels dependable from start to finish.
              </p>
            </div>

            <div className="grid gap-5 md:grid-cols-2">
              {reasons.map((reason) => (
                <div key={reason} className="border border-white/12 bg-white/4 p-6">
                  <CheckCircle2 className="mb-4 h-5 w-5 text-[color:var(--color-gold)]" />
                  <p className="leading-8 text-white/80">{reason}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="process" className="bg-[color:var(--color-soft)] py-24 lg:py-32">
          <div className="container grid gap-14 lg:grid-cols-[1fr_0.95fr] lg:items-center">
            <div className="relative overflow-hidden border border-[color:var(--color-border-soft)] bg-white p-4 shadow-[0_26px_80px_rgba(10,22,35,0.10)]">
              <img
                src={processImage}
                alt="Residential construction site process"
                className="aspect-[5/4] w-full object-cover"
              />
              <div className="absolute left-0 top-0 m-9 border border-white/30 bg-[color:var(--color-ink)]/72 px-5 py-4 text-white backdrop-blur-sm">
                <p className="text-[0.68rem] uppercase tracking-[0.28em] text-[color:var(--color-gold)]">Managed delivery</p>
              <p className="mt-2 max-w-[15rem] text-sm leading-7 text-white/80">
                Clean sequencing, considered supervision and steady communication throughout the build.
              </p>

              </div>
            </div>

            <div className="space-y-8">
              <div className="space-y-5">
                <p className="section-label">Our process</p>
                <h2 className="font-display text-5xl uppercase leading-[0.92] text-[color:var(--color-ink)] md:text-6xl">
                  A simpler path from first brief to final handover.
                </h2>
              </div>

              <div className="space-y-4">
                {processSteps.map((item) => (
                  <div key={item.step} className="grid gap-4 border-t border-[color:var(--color-border-soft)] py-5 md:grid-cols-[5rem_1fr]">
                    <p className="font-display text-3xl text-[color:var(--color-gold-deep)]">{item.step}</p>
                    <div>
                      <h3 className="mb-2 text-2xl font-semibold tracking-[-0.03em] text-[color:var(--color-ink)]">
                        {item.title}
                      </h3>
                      <p className="leading-8 text-[color:var(--color-muted-ink)]">{item.text}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="areas" className="bg-background py-24 lg:py-32">
          <div className="container grid gap-10 lg:grid-cols-[0.84fr_1.16fr] lg:items-start">
            <div className="space-y-5">
              <p className="section-label">Where we work</p>
              <h2 className="font-display text-5xl uppercase leading-[0.92] text-[color:var(--color-ink)] md:text-6xl">
                Serving clients across the South East.
              </h2>
              <p className="max-w-lg text-lg leading-8 text-[color:var(--color-muted-ink)]">
                We support homeowners across Sussex, Surrey, Kent and Greater London who want a residential contractor
                that combines careful site management with a polished, high-quality finish.
              </p>
            </div>

            <div className="grid gap-5 sm:grid-cols-2">
              {areas.map((area) => (
                <div key={area} className="border border-[color:var(--color-border-soft)] bg-[color:var(--color-soft)] p-8 transition duration-300 hover:border-[color:var(--color-gold)]">
                  <MapPin className="mb-5 h-5 w-5 text-[color:var(--color-gold)]" />
                  <h3 className="mb-3 text-2xl font-semibold tracking-[-0.03em] text-[color:var(--color-ink)]">
                    {area}
                  </h3>
                  <p className="leading-8 text-[color:var(--color-muted-ink)]">
                    Extensions, refurbishments and carefully managed residential projects shaped around quality,
                    communication and a polished end result.
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-[linear-gradient(135deg,#ede6d9_0%,#f8f5ef_40%,#ffffff_100%)] py-24 lg:py-32">
          <div className="container grid gap-10 lg:grid-cols-[0.88fr_1.12fr] lg:items-center">
            <div className="space-y-6 border-l-2 border-[color:var(--color-gold)] pl-6 lg:pl-8">
              <p className="section-label">Client confidence</p>
              <blockquote className="font-serif-display text-4xl leading-[1.12] tracking-[-0.02em] text-[color:var(--color-ink)] md:text-5xl">
                “Professional, organised and meticulous from start to finish. The end result felt calm, high quality and
                properly thought through.”
              </blockquote>
              <p className="text-sm uppercase tracking-[0.24em] text-[color:var(--color-muted-ink)]/80">
                Homeowner testimonial — South East residential project
              </p>
            </div>

            <div className="grid gap-5 md:grid-cols-3">
              {[
                ["Consultative", "A straightforward conversation about your project and likely next steps."],
                ["Responsive", "A clear invitation to get in touch by phone or email for an early discussion."],
                ["Detail-led", "Messaging and imagery that support a more premium residential perception."],
              ].map(([title, text]) => (
                <div key={title} className="border border-[color:var(--color-border-soft)] bg-white p-6 shadow-[0_18px_54px_rgba(10,22,35,0.06)]">
                  <p className="mb-3 text-[0.72rem] uppercase tracking-[0.24em] text-[color:var(--color-gold-deep)]">
                    {title}
                  </p>
                  <p className="leading-8 text-[color:var(--color-muted-ink)]">{text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="contact" className="bg-[color:var(--color-ink)] py-24 text-primary-foreground lg:py-32">
          <div className="container grid gap-8 lg:grid-cols-[0.88fr_1.12fr]">
            <div className="space-y-6">
              <p className="section-label !text-[color:var(--color-gold)]/90 before:!bg-[color:var(--color-gold)]">Contact</p>
              <h2 className="font-display text-5xl uppercase leading-[0.92] text-white md:text-6xl">
                Ready to discuss your project?
              </h2>
              <p className="max-w-xl text-lg leading-8 text-white/74">
                Speak with The Rok Group about your extension, renovation or new build. We can arrange an initial
                conversation and advise on the most practical next step for your plans.
              </p>
              <div className="space-y-4 pt-4 text-white/80">
                <a href="tel:01323409640" className="flex items-center gap-3 text-lg transition hover:text-white">
                  <Phone className="h-5 w-5 text-[color:var(--color-gold)]" />
                  01323 409640
                </a>
                <a href="mailto:info@therokgroup.co.uk" className="flex items-center gap-3 text-lg transition hover:text-white">
                  <Mail className="h-5 w-5 text-[color:var(--color-gold)]" />
                  info@therokgroup.co.uk
                </a>
                <p className="flex items-start gap-3 text-lg">
                  <MapPin className="mt-1 h-5 w-5 text-[color:var(--color-gold)]" />
                  South East residential projects including Sussex, Surrey, Kent and Greater London.
                </p>
              </div>
            </div>

            <div className="border border-white/10 bg-white/5 p-8 backdrop-blur-sm md:p-10">
              <div className="grid gap-4 md:grid-cols-2">
                <label className="space-y-2">
                  <span className="text-sm uppercase tracking-[0.2em] text-white/62">Name</span>
                  <input
                    type="text"
                    placeholder="Your name"
                    className="w-full rounded-none border border-white/16 bg-white/8 px-4 py-3 text-white placeholder:text-white/35 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--color-gold)]"
                  />
                </label>
                <label className="space-y-2">
                  <span className="text-sm uppercase tracking-[0.2em] text-white/62">Email</span>
                  <input
                    type="email"
                    placeholder="Email address"
                    className="w-full rounded-none border border-white/16 bg-white/8 px-4 py-3 text-white placeholder:text-white/35 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--color-gold)]"
                  />
                </label>
                <label className="space-y-2 md:col-span-2">
                  <span className="text-sm uppercase tracking-[0.2em] text-white/62">Telephone</span>
                  <input
                    type="text"
                    placeholder="Phone number"
                    className="w-full rounded-none border border-white/16 bg-white/8 px-4 py-3 text-white placeholder:text-white/35 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--color-gold)]"
                  />
                </label>
                <label className="space-y-2 md:col-span-2">
                  <span className="text-sm uppercase tracking-[0.2em] text-white/62">Project outline</span>
                  <textarea
                    placeholder="Tell us about your extension, renovation or new build"
                    rows={6}
                    className="w-full rounded-none border border-white/16 bg-white/8 px-4 py-3 text-white placeholder:text-white/35 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--color-gold)]"
                  />
                </label>
              </div>

              <div className="mt-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                <p className="max-w-md text-sm leading-7 text-white/58">
                  Share a few details and we will be in touch to arrange an initial conversation about your project.
                </p>
                <Button asChild className="rounded-none border border-[color:var(--color-gold)] bg-[color:var(--color-gold)] px-6 text-[color:var(--color-ink)] hover:bg-[color:var(--color-stone)]">
                  <a href="mailto:info@therokgroup.co.uk">Start your enquiry</a>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-[color:var(--color-border-soft)] bg-white py-10">
        <div className="container grid gap-6 md:grid-cols-[1fr_auto_auto] md:items-end">
          <div>
            <p className="font-display text-3xl uppercase tracking-[0.1em] text-[color:var(--color-ink)]">The Rok Group</p>
            <p className="mt-2 max-w-lg text-sm leading-7 text-[color:var(--color-muted-ink)]">
              Premium residential construction across the South East with a focus on extensions, renovations, new builds
              and carefully managed project delivery.
            </p>
          </div>

          <div className="space-y-2 text-sm text-[color:var(--color-muted-ink)]">
            <a href="#services" className="block transition hover:text-[color:var(--color-ink)]">Services</a>
            <a href="#projects" className="block transition hover:text-[color:var(--color-ink)]">Projects</a>
            <a href="#areas" className="block transition hover:text-[color:var(--color-ink)]">Areas</a>
          </div>

          <div className="space-y-2 text-sm text-[color:var(--color-muted-ink)] md:text-right">
            <a href="tel:01323409640" className="block transition hover:text-[color:var(--color-ink)]">01323 409640</a>
            <a href="mailto:info@therokgroup.co.uk" className="block transition hover:text-[color:var(--color-ink)]">info@therokgroup.co.uk</a>
            <p>© 2026 The Rok Group</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
