import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import {
  ArrowRight,
  ArrowUpRight,
  Mail,
  Clock,
  Phone,
  MapPin,
  MessageCircle,
  Instagram,
  Send,
  Sparkles,
  ShieldCheck,
  Gem,
} from "lucide-react";
import contactHero from "@/assets/contact-hero.jpg";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — SERIN Maison" },
      {
        name: "description",
        content:
          "SERIN Atelier — private consultation, bespoke commissions, and worldwide concierge. Reach our maison via KakaoTalk, email, or our Seoul showroom.",
      },
      { property: "og:title", content: "Contact — SERIN Maison" },
      { property: "og:image", content: "/contact-hero.jpg" },
    ],
  }),
  component: ContactPage,
});

/* ---------- Top Navigation ---------- */
function TopNav() {
  return (
    <header className="absolute top-0 left-0 right-0 z-30">
      <div className="mx-auto flex max-w-[1480px] items-center justify-between px-10 py-8">
        <a
          href="/"
          className="font-serif text-[26px] tracking-[0.42em] text-white"
        >
          SERIN
        </a>
        <nav className="hidden md:flex items-center gap-12 text-[11px] uppercase tracking-[0.32em] text-white/75">
          <a href="/photo-bar" className="hover:text-white transition">
            Photo Bar
          </a>
          <a href="/custom-collection" className="hover:text-white transition">
            Collection
          </a>
          <a href="#" className="hover:text-white transition">
            Gallery
          </a>
          <a href="/about" className="hover:text-white transition">
            Atelier
          </a>
          <a
            href="/contact"
            className="text-white relative after:absolute after:-bottom-2 after:left-0 after:right-0 after:h-px after:bg-[#c9a86a]"
          >
            Contact
          </a>
        </nav>
        <div className="flex items-center gap-5 text-white/80">
          <a href="/my-page" className="hover:text-white" aria-label="account">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.3">
              <circle cx="12" cy="8" r="4" />
              <path d="M4 21c1.5-4 5-6 8-6s6.5 2 8 6" />
            </svg>
          </a>
          <a href="/cart" className="hover:text-white" aria-label="cart">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.3">
              <path d="M6 7h12l-1.5 12h-9zM9 7a3 3 0 016 0" />
            </svg>
          </a>
        </div>
      </div>
    </header>
  );
}

/* ---------- Hero ---------- */
function Hero() {
  return (
    <section className="relative h-[760px] w-full overflow-hidden bg-[#0d0a07]">
      <img
        src={contactHero}
        alt="SERIN private atelier"
        className="absolute inset-0 h-full w-full object-cover opacity-80"
      />
      {/* layered gradients */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#0d0a07] via-[#0d0a07]/70 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-t from-[#0d0a07] via-transparent to-transparent" />
      {/* gold seam */}
      <div className="pointer-events-none absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#c9a86a]/60 to-transparent" />

      <TopNav />

      <div className="relative mx-auto max-w-[1480px] px-10 pt-44">
        <div className="flex items-center gap-4 text-[11px] uppercase tracking-[0.5em] text-[#c9a86a]">
          <span className="h-px w-10 bg-[#c9a86a]" />
          Maison Serin · Est. 1998
        </div>

        <h1 className="mt-8 font-serif text-[88px] leading-[1.02] tracking-[-0.01em] text-white max-w-3xl">
          A private<br />
          <span className="italic text-[#e9d8b4]">conversation</span> in silver.
        </h1>

        <p className="mt-8 max-w-xl text-[14px] leading-[1.9] text-white/70">
          From a single engraved word to a fully commissioned heirloom, our atelier
          responds to every inquiry with the same care we bring to the bench.
          We invite you to write to us.
        </p>

        <div className="mt-12 flex flex-wrap items-center gap-4">
          <a
            href="#contact-form"
            className="group inline-flex items-center gap-3 bg-[#c9a86a] px-8 py-4 text-[11px] uppercase tracking-[0.32em] text-[#0d0a07] hover:bg-[#d8ba80] transition"
          >
            Begin a Consultation
            <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" strokeWidth={1.5} />
          </a>
          <a
            href="#channels"
            className="inline-flex items-center gap-3 border border-white/25 px-8 py-4 text-[11px] uppercase tracking-[0.32em] text-white hover:border-white/60 transition"
          >
            View Channels
          </a>
        </div>

        {/* bottom stats strip */}
        <div className="absolute bottom-12 left-10 right-10 flex flex-wrap items-end justify-between gap-8 text-white/70">
          <div className="text-[11px] uppercase tracking-[0.42em]">
            <span className="text-[#c9a86a]">●</span>&nbsp; Replying within 24h
          </div>
          <div className="hidden md:flex items-center gap-12 text-[11px] uppercase tracking-[0.32em]">
            <div>
              <p className="text-[#c9a86a] font-serif text-3xl normal-case tracking-normal">26</p>
              <p className="mt-2">Years of craft</p>
            </div>
            <div>
              <p className="text-[#c9a86a] font-serif text-3xl normal-case tracking-normal">14K+</p>
              <p className="mt-2">Pieces engraved</p>
            </div>
            <div>
              <p className="text-[#c9a86a] font-serif text-3xl normal-case tracking-normal">42</p>
              <p className="mt-2">Countries served</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------- Channels ---------- */
function Channels() {
  const channels = [
    {
      tag: "Instant",
      icon: MessageCircle,
      title: "KakaoTalk",
      sub: "@serin.maison",
      desc: "The fastest path to our concierge. Share a photo, and we will reply with availability and a private quote.",
      cta: "Open KakaoTalk",
      accent: true,
    },
    {
      tag: "Considered",
      icon: Mail,
      title: "Private Email",
      sub: "atelier@serin.co.kr",
      desc: "Best for commissions, corporate gifting and editorial collaboration. Attach references freely.",
      cta: "Compose Email",
    },
    {
      tag: "By Appointment",
      icon: MapPin,
      title: "Seoul Showroom",
      sub: "Cheongdam-dong, Gangnam",
      desc: "A private viewing of the full collection in our flagship atelier. Reservation required.",
      cta: "Reserve a Visit",
    },
  ];

  return (
    <section id="channels" className="bg-[#f6f1e7] py-32">
      <div className="mx-auto max-w-[1320px] px-10">
        <div className="flex items-end justify-between mb-16">
          <div>
            <div className="flex items-center gap-3 text-[11px] uppercase tracking-[0.42em] text-[#9a7d44]">
              <span className="h-px w-8 bg-[#c9a86a]" />
              Channels
            </div>
            <h2 className="mt-5 font-serif text-[52px] leading-[1.05] text-[#1a1410] max-w-2xl">
              Three doors. <span className="italic text-[#9a7d44]">One atelier.</span>
            </h2>
          </div>
          <p className="hidden md:block max-w-sm text-[13px] leading-[1.9] text-[#5b524a]">
            Each channel is staffed by the same small team of artisans and advisors —
            no call centres, no scripts.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-[#e6dcc8]">
          {channels.map(({ icon: Icon, ...c }) => (
            <div
              key={c.title}
              className={`group relative bg-[#f6f1e7] p-12 transition hover:bg-white ${
                c.accent ? "md:bg-[#0d0a07] md:text-white" : ""
              }`}
            >
              <div
                className={`flex items-center justify-between text-[10px] uppercase tracking-[0.4em] ${
                  c.accent ? "text-[#c9a86a]" : "text-[#9a7d44]"
                }`}
              >
                <span>{c.tag}</span>
                <Icon className="h-5 w-5" strokeWidth={1.2} />
              </div>

              <h3
                className={`mt-12 font-serif text-[32px] leading-tight ${
                  c.accent ? "text-white" : "text-[#1a1410]"
                }`}
              >
                {c.title}
              </h3>
              <p
                className={`mt-2 text-[13px] tracking-[0.15em] ${
                  c.accent ? "text-[#c9a86a]" : "text-[#9a7d44]"
                }`}
              >
                {c.sub}
              </p>

              <p
                className={`mt-8 text-[13px] leading-[1.9] ${
                  c.accent ? "text-white/70" : "text-[#5b524a]"
                }`}
              >
                {c.desc}
              </p>

              <button
                className={`mt-12 inline-flex items-center gap-3 text-[11px] uppercase tracking-[0.32em] border-b pb-2 transition ${
                  c.accent
                    ? "text-white border-[#c9a86a] hover:text-[#c9a86a]"
                    : "text-[#1a1410] border-[#1a1410]/40 hover:border-[#c9a86a] hover:text-[#9a7d44]"
                }`}
              >
                {c.cta}
                <ArrowUpRight className="h-4 w-4" strokeWidth={1.5} />
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- Inquiry Form ---------- */
function InquiryForm() {
  const [type, setType] = useState("Bespoke Commission");
  const types = ["Bespoke Commission", "Photo Bar", "Heritage", "Corporate Gifting", "Press & Editorial"];

  return (
    <section id="contact-form" className="bg-[#0d0a07] py-32 relative overflow-hidden">
      {/* decorative seam */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#c9a86a]/50 to-transparent" />
      <div className="absolute -top-40 -right-40 h-[420px] w-[420px] rounded-full bg-[#c9a86a]/10 blur-3xl" />
      <div className="absolute -bottom-40 -left-40 h-[420px] w-[420px] rounded-full bg-[#c9a86a]/5 blur-3xl" />

      <div className="relative mx-auto max-w-[1320px] px-10 grid grid-cols-1 lg:grid-cols-[1fr_1.3fr] gap-20">
        {/* Left copy */}
        <div className="text-white">
          <div className="flex items-center gap-3 text-[11px] uppercase tracking-[0.42em] text-[#c9a86a]">
            <span className="h-px w-8 bg-[#c9a86a]" />
            Private Inquiry
          </div>
          <h2 className="mt-6 font-serif text-[56px] leading-[1.05]">
            Tell us the<br /><span className="italic text-[#e9d8b4]">story</span> you wish<br />to silver.
          </h2>
          <p className="mt-8 max-w-md text-[13px] leading-[1.9] text-white/70">
            Every commission begins with a conversation. Share the moment, the message,
            or the milestone — our atelier will respond personally with a proposal,
            timeline, and investment.
          </p>

          <div className="mt-14 space-y-5 text-[13px] text-white/80">
            <div className="flex items-start gap-4">
              <Sparkles className="h-4 w-4 mt-1 text-[#c9a86a]" strokeWidth={1.4} />
              Hand-finished by our Seoul atelier
            </div>
            <div className="flex items-start gap-4">
              <ShieldCheck className="h-4 w-4 mt-1 text-[#c9a86a]" strokeWidth={1.4} />
              Hallmarked 999 fine silver, lifetime guarantee
            </div>
            <div className="flex items-start gap-4">
              <Gem className="h-4 w-4 mt-1 text-[#c9a86a]" strokeWidth={1.4} />
              Discretion assured — every inquiry is confidential
            </div>
          </div>
        </div>

        {/* Form card */}
        <form className="bg-[#13100b] border border-white/10 p-12 space-y-8">
          {/* inquiry type chips */}
          <div>
            <label className="text-[10px] uppercase tracking-[0.4em] text-[#9a7d44]">
              Inquiry Type
            </label>
            <div className="mt-4 flex flex-wrap gap-2">
              {types.map((t) => (
                <button
                  type="button"
                  key={t}
                  onClick={() => setType(t)}
                  className={`px-4 py-2.5 text-[11px] uppercase tracking-[0.22em] border transition ${
                    type === t
                      ? "bg-[#c9a86a] border-[#c9a86a] text-[#0d0a07]"
                      : "border-white/20 text-white/70 hover:border-[#c9a86a]/60 hover:text-white"
                  }`}
                >
                  {t}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-2 gap-6">
            <Field label="Name" placeholder="Your full name" />
            <Field label="Country" placeholder="Republic of Korea" />
            <Field label="Email" placeholder="you@maison.com" type="email" />
            <Field label="Phone (optional)" placeholder="+82" />
          </div>

          <div>
            <label className="text-[10px] uppercase tracking-[0.4em] text-[#9a7d44]">
              Message
            </label>
            <textarea
              rows={5}
              placeholder="Share the occasion, names to engrave, references, or questions…"
              className="mt-3 w-full bg-transparent border-b border-white/20 py-3 text-[14px] text-white placeholder:text-white/30 focus:outline-none focus:border-[#c9a86a] transition resize-none"
            />
          </div>

          <div className="flex items-center justify-between pt-4">
            <p className="text-[11px] text-white/40 max-w-[260px] leading-relaxed">
              By submitting, you agree to our discreet handling of your personal details.
            </p>
            <button
              type="submit"
              className="group inline-flex items-center gap-3 bg-[#c9a86a] px-8 py-4 text-[11px] uppercase tracking-[0.32em] text-[#0d0a07] hover:bg-[#d8ba80] transition"
            >
              Send Inquiry
              <Send className="h-4 w-4 transition-transform group-hover:translate-x-1" strokeWidth={1.5} />
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}

function Field({ label, placeholder, type = "text" }: { label: string; placeholder: string; type?: string }) {
  return (
    <div>
      <label className="text-[10px] uppercase tracking-[0.4em] text-[#9a7d44]">{label}</label>
      <input
        type={type}
        placeholder={placeholder}
        className="mt-3 w-full bg-transparent border-b border-white/20 py-3 text-[14px] text-white placeholder:text-white/30 focus:outline-none focus:border-[#c9a86a] transition"
      />
    </div>
  );
}

/* ---------- Visit / Hours ---------- */
function Visit() {
  return (
    <section className="bg-[#f6f1e7] py-32">
      <div className="mx-auto max-w-[1320px] px-10 grid grid-cols-1 lg:grid-cols-2 gap-16 items-stretch">
        {/* Showroom card */}
        <div className="relative bg-[#1a1410] text-white p-14 overflow-hidden">
          <div className="absolute top-0 right-0 h-32 w-32 border-t border-r border-[#c9a86a]/40" />
          <div className="absolute bottom-0 left-0 h-32 w-32 border-b border-l border-[#c9a86a]/40" />
          <div className="flex items-center gap-3 text-[11px] uppercase tracking-[0.42em] text-[#c9a86a]">
            <span className="h-px w-8 bg-[#c9a86a]" />
            The Atelier
          </div>
          <h3 className="mt-6 font-serif text-[44px] leading-[1.05]">
            Visit us in<br /><span className="italic text-[#e9d8b4]">Cheongdam</span>.
          </h3>

          <div className="mt-12 space-y-6 text-[13px]">
            <div className="flex items-start gap-4">
              <MapPin className="h-4 w-4 mt-1 text-[#c9a86a]" strokeWidth={1.4} />
              <div>
                <p className="text-white/90">Maison Serin Flagship</p>
                <p className="text-white/55 mt-1">88 Apgujeong-ro, Gangnam-gu, Seoul</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <Phone className="h-4 w-4 mt-1 text-[#c9a86a]" strokeWidth={1.4} />
              <div>
                <p className="text-white/90">+82 2 0000 0000</p>
                <p className="text-white/55 mt-1">Direct line to the concierge</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <Mail className="h-4 w-4 mt-1 text-[#c9a86a]" strokeWidth={1.4} />
              <div>
                <p className="text-white/90">atelier@serin.co.kr</p>
                <p className="text-white/55 mt-1">For commissions and press</p>
              </div>
            </div>
          </div>

          <button className="mt-14 inline-flex items-center gap-3 border-b border-[#c9a86a] pb-2 text-[11px] uppercase tracking-[0.32em] text-white hover:text-[#c9a86a] transition">
            View on Map
            <ArrowUpRight className="h-4 w-4" strokeWidth={1.5} />
          </button>
        </div>

        {/* Hours + social */}
        <div className="flex flex-col gap-8">
          <div className="bg-white p-14 flex-1">
            <div className="flex items-center gap-3 text-[11px] uppercase tracking-[0.42em] text-[#9a7d44]">
              <Clock className="h-4 w-4" strokeWidth={1.4} />
              Opening Hours
            </div>

            <ul className="mt-10 divide-y divide-[#e6dcc8] text-[14px] text-[#1a1410]">
              {[
                ["Monday — Friday", "10:00 — 19:00"],
                ["Saturday", "11:00 — 17:00 · by appointment"],
                ["Sunday & Holidays", "Closed"],
              ].map(([d, h]) => (
                <li key={d} className="flex items-center justify-between py-5">
                  <span className="text-[#5b524a]">{d}</span>
                  <span className="font-serif text-[16px]">{h}</span>
                </li>
              ))}
            </ul>

            <p className="mt-8 text-[12px] leading-[1.9] text-[#5b524a]">
              Private after-hours viewings can be arranged for international clients
              and bespoke commissions.
            </p>
          </div>

          <div className="bg-[#ece6dc] p-10 flex items-center justify-between">
            <div>
              <p className="text-[11px] uppercase tracking-[0.4em] text-[#9a7d44]">Follow the Maison</p>
              <p className="mt-3 font-serif text-[22px] text-[#1a1410]">@serin.maison</p>
            </div>
            <div className="flex items-center gap-3">
              {[Instagram, MessageCircle, Mail].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="h-11 w-11 grid place-items-center border border-[#1a1410]/30 text-[#1a1410] hover:bg-[#1a1410] hover:text-white transition"
                >
                  <Icon className="h-4 w-4" strokeWidth={1.4} />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------- FAQ ---------- */
function FAQ() {
  const items = [
    {
      q: "How long does a bespoke commission take?",
      a: "Most engraved Photo Bars are completed in 10–14 days. Fully bespoke heirloom pieces range from 4 to 8 weeks depending on complexity.",
    },
    {
      q: "Do you ship internationally?",
      a: "Yes — we ship worldwide with insured, signature-required courier. International orders typically arrive within 5–7 business days.",
    },
    {
      q: "Can I provide my own photograph or sketch?",
      a: "Absolutely. Send your reference via KakaoTalk or email; our engravers will advise on the finest interpretation in silver.",
    },
    {
      q: "Are private viewings available?",
      a: "Our Cheongdam atelier hosts private viewings by reservation, including after-hours appointments for international guests.",
    },
  ];
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="bg-[#0d0a07] text-white py-32">
      <div className="mx-auto max-w-[1100px] px-10">
        <div className="text-center">
          <div className="inline-flex items-center gap-3 text-[11px] uppercase tracking-[0.42em] text-[#c9a86a]">
            <span className="h-px w-8 bg-[#c9a86a]" />
            Frequently Asked
            <span className="h-px w-8 bg-[#c9a86a]" />
          </div>
          <h2 className="mt-6 font-serif text-[48px] leading-[1.1]">
            Considered answers,<br />
            <span className="italic text-[#e9d8b4]">before you ask.</span>
          </h2>
        </div>

        <div className="mt-16 divide-y divide-white/10 border-y border-white/10">
          {items.map((it, i) => {
            const isOpen = open === i;
            return (
              <button
                key={i}
                onClick={() => setOpen(isOpen ? null : i)}
                className="w-full text-left py-8 group"
              >
                <div className="flex items-center justify-between gap-8">
                  <span className="font-serif text-[22px] text-white group-hover:text-[#e9d8b4] transition">
                    {it.q}
                  </span>
                  <span
                    className={`h-9 w-9 grid place-items-center border border-[#c9a86a]/50 text-[#c9a86a] transition-transform ${
                      isOpen ? "rotate-45" : ""
                    }`}
                  >
                    +
                  </span>
                </div>
                <div
                  className={`grid transition-all duration-500 ease-out ${
                    isOpen ? "grid-rows-[1fr] opacity-100 mt-5" : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="text-[14px] leading-[1.9] text-white/65 max-w-2xl">{it.a}</p>
                  </div>
                </div>
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* ---------- Closing CTA ---------- */
function ClosingCTA() {
  return (
    <section className="bg-[#f6f1e7] py-28">
      <div className="mx-auto max-w-[1100px] px-10 text-center">
        <p className="font-serif italic text-[#9a7d44] text-[18px]">— A note from the atelier</p>
        <h3 className="mt-6 font-serif text-[44px] leading-[1.15] text-[#1a1410]">
          "Every piece we make begins with someone's<br />
          <span className="italic">quiet, important moment</span>. We are honoured to listen."
        </h3>
        <p className="mt-8 text-[12px] uppercase tracking-[0.4em] text-[#9a7d44]">
          Seo Rin · Founder & Master Engraver
        </p>

        <div className="mt-14 inline-flex items-center gap-4">
          <a
            href="#contact-form"
            className="group inline-flex items-center gap-3 bg-[#1a1410] px-10 py-4 text-[11px] uppercase tracking-[0.32em] text-white hover:bg-[#c9a86a] hover:text-[#0d0a07] transition"
          >
            Begin Your Inquiry
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" strokeWidth={1.5} />
          </a>
        </div>
      </div>
    </section>
  );
}

/* ---------- Footer ---------- */
function Footer() {
  return (
    <footer className="bg-[#0d0a07] border-t border-[#c9a86a]/20">
      <div className="mx-auto max-w-[1480px] px-10 py-14 grid grid-cols-1 md:grid-cols-4 gap-10 text-[12px] text-white/55">
        <div>
          <p className="font-serif text-2xl tracking-[0.4em] text-white">SERIN</p>
          <p className="mt-5 leading-[1.9]">당신의 순간을, 순은에 새기다.<br />Maison Serin · Seoul, Korea</p>
        </div>
        <div>
          <p className="text-[11px] uppercase tracking-[0.4em] text-[#c9a86a] mb-4">Maison</p>
          <ul className="space-y-2.5">
            <li><a href="/about" className="hover:text-white">Our Story</a></li>
            <li><a href="/heritage" className="hover:text-white">Heritage</a></li>
            <li><a href="/showroom" className="hover:text-white">Showroom</a></li>
          </ul>
        </div>
        <div>
          <p className="text-[11px] uppercase tracking-[0.4em] text-[#c9a86a] mb-4">Service</p>
          <ul className="space-y-2.5">
            <li><a href="/contact" className="hover:text-white">Contact</a></li>
            <li><a href="#" className="hover:text-white">Care Guide</a></li>
            <li><a href="#" className="hover:text-white">Shipping & Returns</a></li>
          </ul>
        </div>
        <div>
          <p className="text-[11px] uppercase tracking-[0.4em] text-[#c9a86a] mb-4">Connect</p>
          <p>atelier@serin.co.kr</p>
          <p className="mt-1">+82 2 0000 0000</p>
        </div>
      </div>
      <div className="border-t border-white/5">
        <div className="mx-auto max-w-[1480px] px-10 py-6 flex items-center justify-between text-[11px] text-white/35">
          <p>© {new Date().getFullYear()} SERIN Maison. All rights reserved.</p>
          <p className="uppercase tracking-[0.32em]">Crafted in Seoul</p>
        </div>
      </div>
    </footer>
  );
}

function ContactPage() {
  return (
    <div className="min-h-screen bg-[#f6f1e7] font-sans antialiased">
      <Hero />
      <Channels />
      <InquiryForm />
      <Visit />
      <FAQ />
      <ClosingCTA />
      <Footer />
    </div>
  );
}
