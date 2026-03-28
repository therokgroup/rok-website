/*
  Design reminder for PublicLayout.tsx:
  British atelier construction style with disciplined editorial structure,
  deep slate surfaces, restrained gold accents, and premium residential credibility.
  The header and footer should feel calm, precise, and materially refined.
*/

import { Button } from "@/components/ui/button";
import { contactDetails, siteNavigation } from "@/lib/siteContent";
import { Menu, Phone } from "lucide-react";
import { type ReactNode, useMemo, useState } from "react";
import { Link, useLocation } from "wouter";

function Logo() {
  return (
    <Link href="/">
      <span className="group flex items-center text-primary-foreground">
        <span>
          <span className="font-display text-[2rem] uppercase leading-none tracking-[0.1em] transition duration-300 group-hover:text-[color:var(--color-gold)]">Rok</span>
          <span className="block text-[0.7rem] uppercase tracking-[0.34em] text-white/58 transition duration-300 group-hover:text-white/72">The Rok Group</span>
        </span>
      </span>
    </Link>
  );
}

function NavLinks({ mobile = false, onNavigate }: { mobile?: boolean; onNavigate?: () => void }) {
  const [location] = useLocation();
  const current = useMemo(() => (location === "/" ? "/" : location.replace(/\/$/, "")), [location]);

  return (
    <>
      {siteNavigation.map((item) => {
        const active = current === item.href;
        return (
          <Link key={item.href} href={item.href} onClick={onNavigate}>
            <span
              className={mobile
                ? `block border-b border-white/8 py-4 text-[0.9rem] uppercase tracking-[0.16em] transition ${active ? "text-[color:var(--color-gold)]" : "text-white/76 hover:text-white"}`
                : `text-[0.82rem] uppercase tracking-[0.14em] transition duration-300 ${active ? "text-[color:var(--color-gold)]" : "text-white/70 hover:text-white"}`}
            >
              {item.label}
            </span>
          </Link>
        );
      })}
    </>
  );
}

export default function PublicLayout({ children }: { children: ReactNode }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="sticky top-0 z-50 border-b border-white/8 bg-[color:var(--color-ink)]/78 backdrop-blur-2xl">
        <div className="container flex items-center justify-between gap-6 py-3.5 lg:py-4">
          <Logo />

          <nav className="hidden items-center gap-7 lg:flex">
            <NavLinks />
          </nav>

          <div className="hidden items-center gap-4 lg:flex">
            <a
              href={`tel:${contactDetails.phone.replace(/\s+/g, "")}`}
              className="flex items-center gap-2 text-sm text-white/78 transition hover:text-white"
            >
              <Phone className="h-4 w-4 text-[color:var(--color-gold)]" />
              {contactDetails.phone}
            </a>
            <Button asChild className="rounded-none border border-[color:var(--color-gold)] bg-[color:var(--color-gold)] px-5 text-[0.78rem] uppercase tracking-[0.14em] text-[color:var(--color-ink)] hover:bg-[color:var(--color-stone)]">
              <Link href="/contact">Request consultation</Link>
            </Button>
          </div>

          <button
            type="button"
            className="inline-flex h-11 w-11 items-center justify-center border border-white/12 text-white transition hover:border-[color:var(--color-gold)] hover:text-[color:var(--color-gold)] lg:hidden"
            onClick={() => setOpen((value) => !value)}
            aria-label="Toggle navigation"
            aria-expanded={open}
          >
            <Menu className="h-5 w-5" />
          </button>
        </div>

        {open && (
          <div className="border-t border-white/8 bg-[color:var(--color-ink)] px-5 pb-6 lg:hidden">
            <div className="mx-auto max-w-4xl pt-3">
              <NavLinks mobile onNavigate={() => setOpen(false)} />
              <div className="mt-6 flex flex-col gap-3">
                <a
                  href={`tel:${contactDetails.phone.replace(/\s+/g, "")}`}
                  className="text-sm text-white/76 transition hover:text-white"
                >
                  {contactDetails.phone}
                </a>
                <a href={`mailto:${contactDetails.email}`} className="text-sm text-white/60 transition hover:text-white">
                  {contactDetails.email}
                </a>
                <Button asChild className="mt-2 rounded-none border border-[color:var(--color-gold)] bg-[color:var(--color-gold)] text-[color:var(--color-ink)] hover:bg-[color:var(--color-stone)]">
                  <Link href="/contact" onClick={() => setOpen(false)}>
                    Request consultation
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        )}
      </header>

      <main>{children}</main>

      <footer className="border-t border-white/8 bg-[color:var(--color-ink)] text-white">
        <div className="container grid gap-12 py-16 lg:grid-cols-[0.9fr_0.5fr_0.6fr] lg:gap-16">
          <div className="max-w-lg space-y-5">
            <Logo />
            <p className="text-base leading-8 text-white/70">
              Premium residential construction across the South East, with a focus on extensions,
              renovations, bespoke homes and carefully managed delivery.
            </p>
          </div>

          <div>
            <p className="section-label !text-white/45">Navigate</p>
            <div className="mt-5 space-y-3">
              {siteNavigation.map((item) => (
                <Link key={item.href} href={item.href}>
                  <span className="block text-sm uppercase tracking-[0.16em] text-white/70 transition hover:text-white">
                    {item.label}
                  </span>
                </Link>
              ))}
            </div>
          </div>

          <div className="space-y-4">
            <p className="section-label !text-white/45">Contact</p>
            <a href={`tel:${contactDetails.phone.replace(/\s+/g, "")}`} className="block text-lg text-white/82 transition hover:text-white">
              {contactDetails.phone}
            </a>
            <a href={`mailto:${contactDetails.email}`} className="block text-base text-white/62 transition hover:text-white">
              {contactDetails.email}
            </a>
            <p className="text-sm leading-7 text-white/55">{contactDetails.coverage}</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
