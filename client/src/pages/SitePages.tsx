/*
  Design reminder for SitePages.tsx:
  British atelier construction style with editorial asymmetry, warm architectural imagery,
  deep slate contrast, restrained gold accents, and premium residential storytelling.
  Every page should feel calm, credible, and materially refined rather than generic.
*/

import PublicLayout from "@/components/PublicLayout";
import Seo from "@/components/Seo";
import { Button } from "@/components/ui/button";
import {
  areaHighlights,
  contactDetails,
  featuredProjects,
  processSteps,
  projectMetrics,
  serviceAreas,
  services,
  siteAssets,
  testimonial,
  trustReasons,
} from "@/lib/siteContent";
import {
  ArrowRight,
  CheckCircle2,
  Mail,
  MapPin,
  Phone,
} from "lucide-react";
import { Link } from "wouter";

const siteOrigin = "https://www.therokgroup.co.uk";

const businessStructuredData = {
  "@context": "https://schema.org",
  "@type": "GeneralContractor",
  name: "The Rok Group",
  url: siteOrigin,
  telephone: "+44 1323 409640",
  email: "info@therokgroup.co.uk",
  areaServed: ["Sussex", "Surrey", "Kent", "Greater London"],
  serviceType: ["House extensions", "Renovations", "New builds", "Project management"],
  image: [siteAssets.vanImage, siteAssets.heroImage, siteAssets.kitchenImage],
};

function webPageStructuredData(name: string, description: string, path: string, image: string) {
  return {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name,
    description,
    url: `${siteOrigin}${path === "/" ? "" : path}`,
    isPartOf: {
      "@type": "WebSite",
      name: "The Rok Group",
      url: siteOrigin,
    },
    primaryImageOfPage: image,
  };
}

function PageHero({
  label,
  title,
  intro,
  image,
  dark = false,
  children,
}: {
  label: string;
  title: string;
  intro: string;
  image: string;
  dark?: boolean;
  children?: React.ReactNode;
}) {
  return (
    <section className={`relative overflow-hidden ${dark ? "bg-[color:var(--color-ink)] text-white" : "bg-[color:var(--color-soft)] text-[color:var(--color-ink)]"}`}>
      <div className="absolute inset-0">
        <img src={image} alt={title} className={`h-full w-full object-cover ${dark ? "opacity-30" : "opacity-14"}`} />
        <div
          className={dark
            ? "absolute inset-0 bg-[linear-gradient(90deg,rgba(11,22,35,0.95)_0%,rgba(11,22,35,0.82)_45%,rgba(11,22,35,0.58)_100%)]"
            : "absolute inset-0 bg-[linear-gradient(90deg,rgba(244,239,231,0.98)_0%,rgba(244,239,231,0.92)_45%,rgba(244,239,231,0.82)_100%)]"}
        />
      </div>
      <div className="container relative grid min-h-[34rem] gap-10 py-24 lg:grid-cols-[1fr_0.62fr] lg:items-end lg:py-32">
        <div className="max-w-4xl space-y-6">
          <p className={`section-label ${dark ? "!text-[color:var(--color-gold)] before:!bg-[color:var(--color-gold)]" : ""}`}>
            {label}
          </p>
          <h1 className={`max-w-[10ch] font-display text-[4.2rem] uppercase leading-[0.9] sm:text-6xl md:text-7xl lg:max-w-[11ch] lg:text-[5.75rem] ${dark ? "text-white" : "text-[color:var(--color-ink)]"}`}>
            {title}
          </h1>
          <p className={`max-w-2xl text-lg leading-8 ${dark ? "text-white/76" : "text-[color:var(--color-muted-ink)]"}`}>
            {intro}
          </p>
        </div>
        {children ? <div className="relative lg:justify-self-end lg:max-w-sm">{children}</div> : null}
      </div>
    </section>
  );
}

function ContactPanel({ inverted = false }: { inverted?: boolean }) {
  return (
    <div className={inverted ? "border border-white/10 bg-white/5 p-8 backdrop-blur-sm md:p-10" : "border border-[color:var(--color-border-soft)] bg-white p-8 shadow-[0_24px_70px_rgba(10,22,35,0.08)] md:p-10"}>
      <div className="grid gap-4 md:grid-cols-2">
        <label className="space-y-2">
          <span className={`text-sm uppercase tracking-[0.2em] ${inverted ? "text-white/62" : "text-[color:var(--color-muted-ink)]/80"}`}>Name</span>
          <input
            type="text"
            placeholder="Your name"
            className={inverted ? "w-full rounded-none border border-white/16 bg-white/8 px-4 py-3 text-white placeholder:text-white/35 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--color-gold)]" : "w-full rounded-none border border-[color:var(--color-border-soft)] bg-[color:var(--color-soft)] px-4 py-3 text-[color:var(--color-ink)] placeholder:text-[color:var(--color-muted-ink)]/45 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--color-gold)]"}
          />
        </label>
        <label className="space-y-2">
          <span className={`text-sm uppercase tracking-[0.2em] ${inverted ? "text-white/62" : "text-[color:var(--color-muted-ink)]/80"}`}>Email</span>
          <input
            type="email"
            placeholder="Email address"
            className={inverted ? "w-full rounded-none border border-white/16 bg-white/8 px-4 py-3 text-white placeholder:text-white/35 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--color-gold)]" : "w-full rounded-none border border-[color:var(--color-border-soft)] bg-[color:var(--color-soft)] px-4 py-3 text-[color:var(--color-ink)] placeholder:text-[color:var(--color-muted-ink)]/45 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--color-gold)]"}
          />
        </label>
        <label className="space-y-2 md:col-span-2">
          <span className={`text-sm uppercase tracking-[0.2em] ${inverted ? "text-white/62" : "text-[color:var(--color-muted-ink)]/80"}`}>Telephone</span>
          <input
            type="text"
            placeholder="Phone number"
            className={inverted ? "w-full rounded-none border border-white/16 bg-white/8 px-4 py-3 text-white placeholder:text-white/35 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--color-gold)]" : "w-full rounded-none border border-[color:var(--color-border-soft)] bg-[color:var(--color-soft)] px-4 py-3 text-[color:var(--color-ink)] placeholder:text-[color:var(--color-muted-ink)]/45 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--color-gold)]"}
          />
        </label>
        <label className="space-y-2 md:col-span-2">
          <span className={`text-sm uppercase tracking-[0.2em] ${inverted ? "text-white/62" : "text-[color:var(--color-muted-ink)]/80"}`}>Project outline</span>
          <textarea
            rows={6}
            placeholder="Tell us about your extension, renovation or new build"
            className={inverted ? "w-full rounded-none border border-white/16 bg-white/8 px-4 py-3 text-white placeholder:text-white/35 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--color-gold)]" : "w-full rounded-none border border-[color:var(--color-border-soft)] bg-[color:var(--color-soft)] px-4 py-3 text-[color:var(--color-ink)] placeholder:text-[color:var(--color-muted-ink)]/45 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--color-gold)]"}
          />
        </label>
      </div>

      <div className="mt-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <p className={`max-w-md text-sm leading-7 ${inverted ? "text-white/58" : "text-[color:var(--color-muted-ink)]"}`}>
          Share a few details and we will be in touch to arrange an initial conversation about your project.
        </p>
        <Button asChild className="rounded-none border border-[color:var(--color-gold)] bg-[color:var(--color-gold)] px-6 text-[color:var(--color-ink)] hover:bg-[color:var(--color-stone)]">
          <a href={`mailto:${contactDetails.email}`}>Start your enquiry</a>
        </Button>
      </div>
    </div>
  );
}

export function HomePage() {
  return (
    <PublicLayout>
      <Seo
        title="Builders in Sussex, Surrey, Kent & Greater London | The Rok Group"
        description="The Rok Group delivers extensions, renovations, bespoke new builds and managed residential construction across Sussex, Surrey, Kent and Greater London."
        path="/"
        image={siteAssets.vanImage}
        keywords="The Rok Group, builders Sussex, builders Surrey, builders Kent, builders Greater London, home extensions, property renovations, residential builders, construction company South East"
        structuredData={[
          {
            "@context": "https://schema.org",
            "@type": "WebSite",
            name: "The Rok Group",
            url: siteOrigin,
          },
          businessStructuredData,
          webPageStructuredData(
            "Builders in Sussex, Surrey, Kent & Greater London | The Rok Group",
            "The Rok Group delivers extensions, renovations, bespoke new builds and managed residential construction across Sussex, Surrey, Kent and Greater London.",
            "/",
            siteAssets.vanImage,
          ),
        ]}
      />
      <section className="relative overflow-hidden bg-[color:var(--color-ink)] text-primary-foreground">
        <div className="absolute inset-0">
          <img
            src={siteAssets.vanImage}
            alt="The Rok Group branded van parked on site"
            className="absolute top-[18%] right-0 h-[48%] w-full object-contain object-right-top opacity-[0.58] [-webkit-mask-image:linear-gradient(to_bottom,transparent_0%,rgba(0,0,0,0.9)_14%,rgba(0,0,0,1)_30%,rgba(0,0,0,1)_60%,rgba(0,0,0,0.78)_76%,rgba(0,0,0,0.42)_90%,transparent_100%)] [mask-image:linear-gradient(to_bottom,transparent_0%,rgba(0,0,0,0.9)_14%,rgba(0,0,0,1)_30%,rgba(0,0,0,1)_60%,rgba(0,0,0,0.78)_76%,rgba(0,0,0,0.42)_90%,transparent_100%)] sm:top-[17%] sm:h-[62%] sm:opacity-[0.52] md:top-[15%] md:h-[70%] md:opacity-[0.47] lg:top-[12%] lg:h-[80%] lg:opacity-[0.43] xl:top-[10%] xl:h-[84%]"
          />
          <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(11,22,35,0.93)_0%,rgba(11,22,35,0.84)_24%,rgba(11,22,35,0.56)_54%,rgba(11,22,35,0.42)_72%,rgba(11,22,35,0.24)_88%,rgba(11,22,35,0.34)_100%)] sm:bg-[linear-gradient(96deg,rgba(11,22,35,0.90)_0%,rgba(11,22,35,0.68)_34%,rgba(11,22,35,0.38)_62%,rgba(11,22,35,0.16)_86%,rgba(11,22,35,0.28)_100%)]" />
        </div>

        <div className="container relative grid min-h-[92vh] items-start gap-8 pt-20 pb-10 md:min-h-[88vh] md:items-end md:gap-14 md:pt-28 md:pb-16 lg:grid-cols-[1fr_0.88fr] lg:items-center lg:gap-16 lg:pt-36 lg:pb-20 xl:min-h-[92vh] xl:pt-40 xl:pb-24">
          <div className="max-w-[43rem] space-y-6 md:space-y-9 lg:space-y-10">
            <div className="space-y-4">
              <h1 className="max-w-[8.2ch] font-display text-[2.9rem] uppercase leading-[0.92] tracking-[0.015em] text-white sm:text-[4rem] md:max-w-[9.2ch] md:text-[4.9rem] lg:max-w-[10ch] lg:text-[5.35rem] xl:text-[5.8rem]">
                Trusted builders across the South East.
              </h1>
              <p className="max-w-[22rem] text-[0.98rem] leading-8 text-white/78 sm:max-w-[29rem] md:max-w-[34rem] md:text-[1.05rem] lg:text-[1.08rem]">
                The Rok Group delivers home extensions, renovations, new builds and project management across
                Sussex, Surrey, Kent and Greater London with a calmer, more carefully managed approach to
                workmanship, sequencing and finish quality.
              </p>
            </div>

            <div className="flex flex-col gap-3 pt-4 sm:flex-row sm:gap-4">
              <Button asChild className="rounded-none border border-[color:var(--color-gold)] bg-[color:var(--color-gold)] px-6 py-5 text-[0.78rem] uppercase tracking-[0.16em] text-[color:var(--color-ink)] hover:bg-[color:var(--color-stone)] sm:px-7 sm:py-6 sm:text-[0.82rem]">
                <Link href="/contact">
                  Request consultation <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button asChild variant="outline" className="rounded-none border-white/22 bg-white/2 px-6 py-5 text-[0.78rem] uppercase tracking-[0.16em] text-white hover:bg-white/10 hover:text-white sm:px-7 sm:py-6 sm:text-[0.82rem]">
                <Link href="/projects">View featured work</Link>
              </Button>
            </div>
          </div>

          <div className="hidden gap-4 self-end pt-4 md:grid md:grid-cols-3 lg:grid-cols-1 lg:justify-self-end lg:max-w-[17rem] lg:pt-24 xl:max-w-[18rem] xl:pt-28">
            {[
              ["Residential focus", "Extensions, refurbishments and bespoke private homes"],
              ["Managed delivery", "Clear communication and disciplined site coordination"],
              ["Finish quality", "Detail-led workmanship shaped around long-term value"],
            ].map(([title, text]) => (
              <div
                key={title}
                className="border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.12),rgba(255,255,255,0.06))] p-5 backdrop-blur-lg transition duration-500 hover:-translate-y-1 hover:bg-white/10"
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

          <div className="grid gap-5 md:grid-cols-2">
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

      <section className="bg-background py-24 lg:py-32">
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
            {featuredProjects.slice(0, 3).map((project, index) => (
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
            {trustReasons.map((reason) => (
              <div key={reason} className="border border-white/12 bg-white/4 p-6">
                <CheckCircle2 className="mb-4 h-5 w-5 text-[color:var(--color-gold)]" />
                <p className="leading-8 text-white/80">{reason}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[color:var(--color-soft)] py-24 lg:py-32">
        <div className="container grid gap-14 lg:grid-cols-[1fr_0.95fr] lg:items-center">
          <div className="relative overflow-hidden border border-[color:var(--color-border-soft)] bg-white p-4 shadow-[0_26px_80px_rgba(10,22,35,0.10)]">
            <img src={siteAssets.processImage} alt="Residential construction site process" className="aspect-[5/4] w-full object-cover" />
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

      <section className="bg-background py-24 lg:py-32">
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
            {serviceAreas.map((area) => (
              <div key={area.name} className="border border-[color:var(--color-border-soft)] bg-[color:var(--color-soft)] p-8 transition duration-300 hover:border-[color:var(--color-gold)]">
                <MapPin className="mb-5 h-5 w-5 text-[color:var(--color-gold)]" />
                <h3 className="mb-3 text-2xl font-semibold tracking-[-0.03em] text-[color:var(--color-ink)]">
                  {area.name}
                </h3>
                <p className="leading-8 text-[color:var(--color-muted-ink)]">{area.description}</p>
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
              “{testimonial.quote}”
            </blockquote>
            <p className="text-sm uppercase tracking-[0.24em] text-[color:var(--color-muted-ink)]/80">
              {testimonial.attribution}
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

      <section className="bg-[color:var(--color-ink)] py-24 text-primary-foreground lg:py-32">
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
              <a href={`tel:${contactDetails.phone.replace(/\s+/g, "")}`} className="flex items-center gap-3 text-lg transition hover:text-white">
                <Phone className="h-5 w-5 text-[color:var(--color-gold)]" />
                {contactDetails.phone}
              </a>
              <a href={`mailto:${contactDetails.email}`} className="flex items-center gap-3 text-lg transition hover:text-white">
                <Mail className="h-5 w-5 text-[color:var(--color-gold)]" />
                {contactDetails.email}
              </a>
              <p className="flex items-start gap-3 text-lg">
                <MapPin className="mt-1 h-5 w-5 text-[color:var(--color-gold)]" />
                South East residential projects including {contactDetails.coverage}.
              </p>
            </div>
          </div>

          <ContactPanel inverted />
        </div>
      </section>
    </PublicLayout>
  );
}

export function ServicesPage() {
  return (
    <PublicLayout>
      <Seo
        title="Extensions, Renovations & New Builds | The Rok Group Services"
        description="Explore The Rok Group services for house extensions, renovations, bespoke new builds and residential project management across the South East."
        path="/services"
        image={siteAssets.processImage}
        keywords="house extensions Sussex, renovation builders Surrey, new build contractors Kent, residential project management Greater London, The Rok Group services"
        structuredData={webPageStructuredData(
          "Extensions, Renovations & New Builds | The Rok Group Services",
          "Explore The Rok Group services for house extensions, renovations, bespoke new builds and residential project management across the South East.",
          "/services",
          siteAssets.processImage,
        )}
      />
      <PageHero
        label="Services"
        title="Extensions, renovations and residential delivery with more control."
        intro="The Rok Group focuses on residential work where planning, communication and finish quality all need proper attention. Our service pages are designed to explain not only what we build, but how we deliver it."
        image={siteAssets.processImage}
      >
        <div className="border border-[color:var(--color-border-soft)] bg-white/82 p-6 shadow-[0_20px_60px_rgba(10,22,35,0.08)] backdrop-blur-sm">
          <p className="section-label">Core offers</p>
          <div className="mt-5 grid gap-4">
            {services.map((service) => (
              <div key={service.title} className="border-t border-[color:var(--color-border-soft)] pt-4 first:border-t-0 first:pt-0">
                <p className="text-lg font-semibold text-[color:var(--color-ink)]">{service.title}</p>
                <p className="mt-1 text-sm leading-7 text-[color:var(--color-muted-ink)]">{service.body}</p>
              </div>
            ))}
          </div>
        </div>
      </PageHero>

      <section className="bg-background py-24 lg:py-32">
        <div className="container space-y-16">
          {services.map(({ title, detail, outcomes, icon: Icon, body }) => (
            <article key={title} className="grid gap-8 border-t border-[color:var(--color-border-soft)] pt-10 lg:grid-cols-[0.72fr_1.28fr] lg:items-start">
              <div className="space-y-5">
                <div className="flex h-14 w-14 items-center justify-center border border-[color:var(--color-border-soft)] bg-[color:var(--color-soft)] text-[color:var(--color-ink)]">
                  <Icon className="h-6 w-6" />
                </div>
                <h2 className="font-display text-5xl uppercase leading-[0.92] text-[color:var(--color-ink)] md:text-6xl">{title}</h2>
                <p className="max-w-md text-base leading-8 text-[color:var(--color-muted-ink)]">{body}</p>
              </div>

              <div className="grid gap-6 lg:grid-cols-[1.05fr_0.95fr]">
                <div className="border border-[color:var(--color-border-soft)] bg-white p-8 shadow-[0_18px_54px_rgba(10,22,35,0.05)]">
                  <p className="section-label">Approach</p>
                  <p className="mt-5 text-lg leading-8 text-[color:var(--color-muted-ink)]">{detail}</p>
                </div>
                <div className="border border-[color:var(--color-border-soft)] bg-[color:var(--color-soft)] p-8">
                  <p className="section-label">What clients value</p>
                  <div className="mt-5 space-y-4">
                    {outcomes.map((outcome) => (
                      <div key={outcome} className="flex gap-3">
                        <CheckCircle2 className="mt-1 h-5 w-5 text-[color:var(--color-gold)]" />
                        <p className="leading-8 text-[color:var(--color-muted-ink)]">{outcome}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-[color:var(--color-ink)] py-24 text-white lg:py-32">
        <div className="container grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div className="space-y-6">
            <p className="section-label !text-[color:var(--color-gold)] before:!bg-[color:var(--color-gold)]">Why this matters</p>
            <h2 className="font-display text-5xl uppercase leading-[0.92] text-white md:text-6xl">
              The right contractor experience should feel organised, not opaque.
            </h2>
            <p className="max-w-xl text-lg leading-8 text-white/74">
              Better service pages should reassure clients that the project will be understood properly, structured clearly and delivered with care. That means setting expectations early and keeping quality visible throughout the job.
            </p>
          </div>
          <div className="grid gap-5 md:grid-cols-3">
            {projectMetrics.map((metric) => (
              <div key={metric.label} className="border border-white/12 bg-white/4 p-7">
                <p className="font-display text-4xl uppercase tracking-[0.06em] text-[color:var(--color-gold)]">{metric.value}</p>
                <p className="mt-3 text-sm uppercase tracking-[0.18em] text-white/60">{metric.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </PublicLayout>
  );
}

export function ProjectsPage() {
  return (
    <PublicLayout>
      <Seo
        title="Residential Building Projects | The Rok Group"
        description="View The Rok Group project-led residential work, including extensions, renovations, craftsmanship details and managed construction delivery across the South East."
        path="/projects"
        image={siteAssets.heroImage}
        keywords="building projects Sussex, extension projects Surrey, renovation portfolio Kent, residential builders projects South East, The Rok Group projects"
        structuredData={webPageStructuredData(
          "Residential Building Projects | The Rok Group",
          "View The Rok Group project-led residential work, including extensions, renovations, craftsmanship details and managed construction delivery across the South East.",
          "/projects",
          siteAssets.heroImage,
        )}
      />
      <PageHero
        label="Projects"
        title="Project-led pages that show finish, judgement and residential quality."
        intro="For premium residential work, the portfolio should do more than prove activity. It should show the kind of finished environments clients are trying to create and the standard of delivery behind them."
        image={siteAssets.heroImage}
        dark
      >
        <div className="border border-white/10 bg-white/6 p-6 backdrop-blur-md">
          <p className="section-label !text-[color:var(--color-gold)] before:!bg-[color:var(--color-gold)]">Portfolio focus</p>
          <p className="mt-5 text-base leading-8 text-white/74">
            Warm materials, well-resolved interiors, disciplined site management and a calmer final impression.
          </p>
        </div>
      </PageHero>

      <section className="bg-background py-24 lg:py-32">
        <div className="container grid gap-6 lg:grid-cols-2">
          {featuredProjects.map((project, index) => (
            <article key={project.title} className={`overflow-hidden border border-[color:var(--color-border-soft)] bg-white shadow-[0_24px_70px_rgba(10,22,35,0.08)] ${index === 0 ? "lg:col-span-2 lg:grid lg:grid-cols-[1.15fr_0.85fr]" : ""}`}>
              <div className={`${index === 0 ? "h-full" : ""}`}>
                <img src={project.image} alt={project.title} className={`w-full object-cover ${index === 0 ? "h-full min-h-[24rem]" : "aspect-[4/3]"}`} />
              </div>
              <div className="space-y-5 p-8 md:p-10">
                <p className="text-[0.72rem] uppercase tracking-[0.28em] text-[color:var(--color-gold)]">{project.label}</p>
                <h2 className="font-display text-5xl uppercase leading-[0.92] text-[color:var(--color-ink)] md:text-6xl">{project.title}</h2>
                <p className="text-lg leading-8 text-[color:var(--color-muted-ink)]">{project.summary}</p>
                <div className="grid gap-4 border-t border-[color:var(--color-border-soft)] pt-6 md:grid-cols-2">
                  <div>
                    <p className="text-[0.72rem] uppercase tracking-[0.22em] text-[color:var(--color-muted-ink)]/70">Project type</p>
                    <p className="mt-2 text-base text-[color:var(--color-ink)]">{project.type}</p>
                  </div>
                  <div>
                    <p className="text-[0.72rem] uppercase tracking-[0.22em] text-[color:var(--color-muted-ink)]/70">What stands out</p>
                    <p className="mt-2 text-base text-[color:var(--color-ink)]">Light, material warmth and disciplined detailing.</p>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-[color:var(--color-soft)] py-24 lg:py-32">
        <div className="container grid gap-10 lg:grid-cols-[0.88fr_1.12fr] lg:items-center">
          <div className="space-y-6">
            <p className="section-label">How to strengthen this page further</p>
            <h2 className="font-display text-5xl uppercase leading-[0.92] text-[color:var(--color-ink)] md:text-6xl">
              Real case studies will make the strongest difference next.
            </h2>
            <p className="max-w-xl text-lg leading-8 text-[color:var(--color-muted-ink)]">
              The current structure is ready for live project stories. Once real jobs, photos and short before-and-after narratives are added, this page can become one of the strongest trust-building parts of the site.
            </p>
          </div>
          <div className="grid gap-5 md:grid-cols-2">
            {[
              "Add the location, scope and timescale of each project.",
              "Include a short client objective and how the build solved it.",
              "Show at least one finished interior and one exterior image per case study.",
              "Add a short testimonial quote wherever possible.",
            ].map((item) => (
              <div key={item} className="border border-[color:var(--color-border-soft)] bg-white p-6 shadow-[0_16px_50px_rgba(10,22,35,0.05)]">
                <CheckCircle2 className="mb-4 h-5 w-5 text-[color:var(--color-gold)]" />
                <p className="leading-8 text-[color:var(--color-muted-ink)]">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </PublicLayout>
  );
}

export function ProcessPage() {
  return (
    <PublicLayout>
      <Seo
        title="Our Building Process | The Rok Group"
        description="See how The Rok Group handles consultation, scope, programme, build coordination and handover for residential construction projects across the South East."
        path="/process"
        image={siteAssets.processImage}
        keywords="building process South East, house extension process Sussex, renovation project management Surrey, The Rok Group process"
        structuredData={webPageStructuredData(
          "Our Building Process | The Rok Group",
          "See how The Rok Group handles consultation, scope, programme, build coordination and handover for residential construction projects across the South East.",
          "/process",
          siteAssets.processImage,
        )}
      />
      <PageHero
        label="Process"
        title="A clearer route from early conversation to finished handover."
        intro="Process pages should reduce uncertainty. They help homeowners understand how the project will be discussed, structured, coordinated and completed, especially when the work is substantial and the finish really matters."
        image={siteAssets.processImage}
      >
        <div className="grid gap-4">
          {trustReasons.slice(0, 2).map((reason) => (
            <div key={reason} className="border border-[color:var(--color-border-soft)] bg-white/82 p-5 shadow-[0_20px_60px_rgba(10,22,35,0.06)] backdrop-blur-sm">
              <CheckCircle2 className="mb-3 h-5 w-5 text-[color:var(--color-gold)]" />
              <p className="leading-7 text-[color:var(--color-muted-ink)]">{reason}</p>
            </div>
          ))}
        </div>
      </PageHero>

      <section className="bg-background py-24 lg:py-32">
        <div className="container space-y-5">
          {processSteps.map((item, index) => (
            <div key={item.step} className="grid gap-6 border-t border-[color:var(--color-border-soft)] py-8 lg:grid-cols-[8rem_0.9fr_1.1fr] lg:items-start">
              <p className="font-display text-5xl text-[color:var(--color-gold-deep)] md:text-6xl">{item.step}</p>
              <h2 className="font-display text-4xl uppercase leading-[0.92] text-[color:var(--color-ink)] md:text-5xl">{item.title}</h2>
              <div className="space-y-4">
                <p className="text-lg leading-8 text-[color:var(--color-muted-ink)]">{item.text}</p>
                <div className="border border-[color:var(--color-border-soft)] bg-[color:var(--color-soft)] p-6">
                  <p className="text-[0.72rem] uppercase tracking-[0.24em] text-[color:var(--color-gold-deep)]">What this stage should feel like</p>
                  <p className="mt-3 leading-8 text-[color:var(--color-muted-ink)]">
                    {index === 0 && "Consultative, straightforward and focused on understanding the brief properly."}
                    {index === 1 && "Clear enough that scope, expectations and likely sequencing all make practical sense."}
                    {index === 2 && "Organised on site, communicative in delivery and steady in decision-making."}
                    {index === 3 && "Detailed, polished and properly reviewed before the project is handed back."}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </PublicLayout>
  );
}

export function AreasPage() {
  return (
    <PublicLayout>
      <Seo
        title="Builders Covering Sussex, Surrey, Kent & Greater London | The Rok Group"
        description="The Rok Group works across Sussex, Surrey, Kent and Greater London, delivering extensions, renovations, new builds and managed residential construction."
        path="/areas"
        image={siteAssets.vanImage}
        keywords="builders Sussex, builders Surrey, builders Kent, builders Greater London, residential construction South East, The Rok Group areas"
        structuredData={webPageStructuredData(
          "Builders Covering Sussex, Surrey, Kent & Greater London | The Rok Group",
          "The Rok Group works across Sussex, Surrey, Kent and Greater London, delivering extensions, renovations, new builds and managed residential construction.",
          "/areas",
          siteAssets.vanImage,
        )}
      />
      <PageHero
        label="Areas"
        title="Regional coverage with a more useful local trust signal."
        intro="Area pages help reassure homeowners that the company understands the expectations of projects across Sussex, Surrey, Kent and Greater London. They also give the site a better structure for local relevance."
        image={siteAssets.kitchenImage}
      >
        <div className="border border-[color:var(--color-border-soft)] bg-white/82 p-6 shadow-[0_20px_60px_rgba(10,22,35,0.08)] backdrop-blur-sm">
          <p className="section-label">Coverage</p>
          <p className="mt-5 text-base leading-8 text-[color:var(--color-muted-ink)]">{contactDetails.coverage}</p>
        </div>
      </PageHero>

      <section className="bg-background py-24 lg:py-32">
        <div className="container grid gap-6 md:grid-cols-2">
          {serviceAreas.map((area) => (
            <article key={area.name} className="border border-[color:var(--color-border-soft)] bg-white p-8 shadow-[0_20px_60px_rgba(10,22,35,0.06)]">
              <p className="text-[0.72rem] uppercase tracking-[0.26em] text-[color:var(--color-gold)]">Area focus</p>
              <h2 className="mt-4 font-display text-5xl uppercase leading-[0.92] text-[color:var(--color-ink)] md:text-6xl">{area.name}</h2>
              <p className="mt-5 text-lg leading-8 text-[color:var(--color-muted-ink)]">{area.description}</p>
              <div className="mt-8 border-t border-[color:var(--color-border-soft)] pt-6">
                <p className="leading-8 text-[color:var(--color-muted-ink)]">
                  Homeowners in {area.name} often want a contractor who can combine reliable communication, cleaner organisation on site and a final result that feels properly finished. This page framework is designed to support that message more clearly.
                </p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-[color:var(--color-soft)] py-24 lg:py-32">
        <div className="container grid gap-5 md:grid-cols-3">
          {areaHighlights.map(({ name, description, icon: Icon }) => (
            <div key={name} className="border border-[color:var(--color-border-soft)] bg-white p-7 shadow-[0_16px_50px_rgba(10,22,35,0.05)]">
              <Icon className="mb-5 h-6 w-6 text-[color:var(--color-gold)]" />
              <h3 className="mb-3 text-2xl font-semibold tracking-[-0.03em] text-[color:var(--color-ink)]">{name}</h3>
              <p className="leading-8 text-[color:var(--color-muted-ink)]">{description}</p>
            </div>
          ))}
        </div>
      </section>
    </PublicLayout>
  );
}

export function ContactPage() {
  return (
    <PublicLayout>
      <Seo
        title="Contact The Rok Group | Builders Across the South East"
        description="Contact The Rok Group to discuss an extension, renovation, new build or residential construction project across Sussex, Surrey, Kent or Greater London."
        path="/contact"
        image={siteAssets.vanImage}
        keywords="contact builders Sussex, extension quote Surrey, renovation contractor Kent, new build contact Greater London, The Rok Group contact"
        structuredData={webPageStructuredData(
          "Contact The Rok Group | Builders Across the South East",
          "Contact The Rok Group to discuss an extension, renovation, new build or residential construction project across Sussex, Surrey, Kent or Greater London.",
          "/contact",
          siteAssets.vanImage,
        )}
      />
      <PageHero
        label="Contact"
        title="A cleaner, calmer way to start the conversation."
        intro="The enquiry page should make it easy for homeowners to take the next step without feeling pressured or unsure of what happens next. It should feel consultative, responsive and well managed from the first interaction."
        image={siteAssets.detailImage}
        dark
      >
        <div className="border border-white/10 bg-white/6 p-6 backdrop-blur-md">
          <p className="section-label !text-[color:var(--color-gold)] before:!bg-[color:var(--color-gold)]">Direct contact</p>
          <div className="mt-5 space-y-4 text-white/80">
            <a href={`tel:${contactDetails.phone.replace(/\s+/g, "")}`} className="flex items-center gap-3 text-lg transition hover:text-white">
              <Phone className="h-5 w-5 text-[color:var(--color-gold)]" />
              {contactDetails.phone}
            </a>
            <a href={`mailto:${contactDetails.email}`} className="flex items-center gap-3 text-lg transition hover:text-white">
              <Mail className="h-5 w-5 text-[color:var(--color-gold)]" />
              {contactDetails.email}
            </a>
          </div>
        </div>
      </PageHero>

      <section className="bg-background py-24 lg:py-32">
        <div className="container grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
          <div className="space-y-6">
            <p className="section-label">Get in touch</p>
            <h2 className="font-display text-5xl uppercase leading-[0.92] text-[color:var(--color-ink)] md:text-6xl">
              Tell us about your plans and we will help shape the next step.
            </h2>
            <p className="text-lg leading-8 text-[color:var(--color-muted-ink)]">{contactDetails.officeNote}</p>
            <div className="space-y-4 border-t border-[color:var(--color-border-soft)] pt-6 text-[color:var(--color-muted-ink)]">
              <p className="flex items-start gap-3 leading-8">
                <MapPin className="mt-1 h-5 w-5 text-[color:var(--color-gold)]" />
                Coverage across {contactDetails.coverage}.
              </p>
              <p className="flex items-start gap-3 leading-8">
                <CheckCircle2 className="mt-1 h-5 w-5 text-[color:var(--color-gold)]" />
                Best suited to extensions, renovations, new builds and higher-value residential work.
              </p>
                <p className="flex items-start gap-3 leading-8">
                  <CheckCircle2 className="mt-1 h-5 w-5 text-[color:var(--color-gold)]" />
                  Tell us the type of work, your location and your target timescale and we will help outline the next practical step.
                </p>

            </div>
          </div>

          <ContactPanel />
        </div>
      </section>
    </PublicLayout>
  );
}
