import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import { ArrowUpRight, MessageCircle, Sparkles } from "lucide-react";
import heroImg from "@/assets/contact-hero.jpg";

export const Route = createFileRoute("/contact-2")({
  head: () => ({
    meta: [
      { title: "Contact Us — SERIN" },
      { name: "description", content: "SERIN 고객 문의 — 카카오톡으로 빠르고 친절하게 답변드립니다." },
      { property: "og:title", content: "Contact Us — SERIN" },
      { property: "og:description", content: "SERIN 고객 문의 — 카카오톡으로 빠르고 친절하게 답변드립니다." },
      { property: "og:type", content: "website" },
    ],
  }),
  component: Contact2Page,
});

/* ---------- Reveal on scroll ---------- */
function useReveal<T extends HTMLElement>() {
  const ref = useRef<T | null>(null);
  const [shown, setShown] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && (setShown(true), io.disconnect())),
      { threshold: 0.15 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);
  return { ref, shown };
}

/* ---------- Navigation ---------- */
function TopNav() {
  const items = [
    { label: "포토바", href: "/photo-bar" },
    { label: "컬렉션", href: "/custom-collection" },
    { label: "갤러리", href: "/showroom" },
    { label: "이용 안내", href: "/heritage" },
    { label: "고객센터", href: "/contact-2", active: true },
  ];
  return (
    <header className="absolute top-0 inset-x-0 z-30">
      <div className="mx-auto flex max-w-[1440px] items-center justify-between px-10 py-7">
        <a href="/" className="font-serif text-[22px] tracking-[0.42em] text-white">SERIN</a>
        <nav className="hidden md:flex items-center gap-10 text-[12px] tracking-[0.24em] text-white/80">
          {items.map((i) => (
            <a
              key={i.label}
              href={i.href}
              className={`transition hover:text-white ${i.active ? "text-white underline underline-offset-[10px] decoration-[#c9a86a]" : ""}`}
            >
              {i.label}
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-5 text-white/80">
          <a href="/my-page" aria-label="account" className="hover:text-white">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.3">
              <circle cx="12" cy="8" r="4" /><path d="M4 21c1.5-4 5-6 8-6s6.5 2 8 6" />
            </svg>
          </a>
          <a href="/cart" aria-label="cart" className="hover:text-white">
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
    <section className="relative w-full overflow-hidden bg-[#0d0b08] min-h-[720px]">
      <TopNav />

      {/* background */}
      <div className="absolute inset-0">
        <img
          src={heroImg}
          alt="SERIN 아뜰리에"
          className="h-full w-full object-cover opacity-70 animate-[zoomOut_2s_ease-out_both]"
        />
        {/* layered gradients */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-[#0d0b08]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(201,168,106,0.18),_transparent_60%)]" />
        {/* gold seam */}
        <div className="absolute bottom-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-[#c9a86a]/60 to-transparent" />
      </div>

      {/* content */}
      <div className="relative z-10 mx-auto max-w-[1200px] px-6 pt-48 pb-40">
        <div className="max-w-3xl animate-[fadeUp_1s_ease-out_both]">
          <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full border border-[#c9a86a]/40 bg-white/5 backdrop-blur-sm">
            <Sparkles className="h-3.5 w-3.5 text-[#c9a86a]" strokeWidth={1.5} />
            <span className="text-[11px] tracking-[0.42em] text-[#e6d9bf]">CONTACT US</span>
          </div>

          <h1 className="mt-8 font-serif text-white leading-[1.02] tracking-[-0.02em] text-[72px] md:text-[96px]">
            당신에게 맞는
            <br />
            <span className="italic text-[#e6d9bf]">문의하기</span>
          </h1>

          <p className="mt-8 max-w-lg text-[15px] leading-[2] text-white/70">
            궁금한 점이 있으신가요? SERIN 컨시어지 팀이 카카오톡을 통해
            빠르고 친절하게 답변드립니다.
          </p>

          <div className="mt-10 flex items-center gap-6 text-[11px] tracking-[0.3em] text-white/50">
            <span>MON — FRI</span>
            <span className="h-px w-8 bg-[#c9a86a]/60" />
            <span>10:00 — 18:00 KST</span>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------- Single Channel ---------- */
function Channel() {
  const { ref, shown } = useReveal<HTMLDivElement>();

  return (
    <section className="relative bg-[#0d0b08] pb-32">
      <div
        ref={ref}
        className={`mx-auto max-w-[1100px] px-6 -mt-24 relative z-20 transition-all duration-1000 ${
          shown ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        <div className="group relative overflow-hidden rounded-sm bg-gradient-to-br from-[#1a1712] via-[#12100c] to-[#0d0b08] border border-[#c9a86a]/20 hover:border-[#c9a86a]/50 transition-all duration-700">
          {/* gold shine sweep */}
          <div className="pointer-events-none absolute -inset-x-1 -top-24 h-48 bg-gradient-to-r from-transparent via-[#c9a86a]/10 to-transparent rotate-3 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-[1600ms] ease-out" />

          {/* corners */}
          <span className="absolute top-6 left-6 h-8 w-8 border-t border-l border-[#c9a86a]/60" />
          <span className="absolute top-6 right-6 h-8 w-8 border-t border-r border-[#c9a86a]/60" />
          <span className="absolute bottom-6 left-6 h-8 w-8 border-b border-l border-[#c9a86a]/60" />
          <span className="absolute bottom-6 right-6 h-8 w-8 border-b border-r border-[#c9a86a]/60" />

          <div className="grid grid-cols-1 md:grid-cols-[1.1fr_1fr] gap-0">
            {/* Left: copy */}
            <div className="p-12 md:p-16">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#c9a86a]/10 border border-[#c9a86a]/30">
                <span className="h-1.5 w-1.5 rounded-full bg-[#c9a86a] animate-pulse" />
                <span className="text-[10px] tracking-[0.38em] text-[#e6d9bf]">1:1 카카오톡 상담</span>
              </div>

              <h2 className="mt-8 font-serif text-white text-[52px] md:text-[64px] leading-[1.05] tracking-[-0.01em]">
                카카오톡
              </h2>

              <p className="mt-6 text-[15px] leading-[2] text-white/60 max-w-md">
                궁금한 사항이 있으신가요? 카카오톡으로 1:1 맞춤 상담을 받아보세요.
                주문, 제작, 배송 등 모든 문의에 컨시어지 팀이 정성껏 답변드립니다.
              </p>

              <ul className="mt-8 space-y-3 text-[13px] text-white/70">
                {["주문 및 사진 확인", "맞춤 제작 상담", "배송 일정 안내", "A/S 및 리퍼비시먼트"].map((t) => (
                  <li key={t} className="flex items-center gap-3">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#c9a86a" strokeWidth="1.8">
                      <path d="M5 12l5 5 9-11" />
                    </svg>
                    {t}
                  </li>
                ))}
              </ul>

              <a
                href="#"
                className="mt-12 group/btn inline-flex items-center gap-4 px-8 py-5 bg-[#c9a86a] text-[#0d0b08] hover:bg-[#e6d9bf] transition-colors duration-300"
              >
                <span className="text-[12px] tracking-[0.38em] font-medium">카카오톡 열기</span>
                <span className="h-8 w-8 rounded-full bg-[#0d0b08] text-[#c9a86a] flex items-center justify-center transition-transform duration-300 group-hover/btn:rotate-45">
                  <ArrowUpRight className="h-4 w-4" strokeWidth={1.6} />
                </span>
              </a>
            </div>

            {/* Right: visual */}
            <div className="relative border-t md:border-t-0 md:border-l border-[#c9a86a]/15 bg-[#0a0806] flex items-center justify-center p-12 md:p-16 min-h-[400px]">
              {/* concentric circles */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="absolute h-[380px] w-[380px] rounded-full border border-[#c9a86a]/10 animate-[spinSlow_40s_linear_infinite]" />
                <div className="absolute h-[280px] w-[280px] rounded-full border border-[#c9a86a]/15 animate-[spinSlow_28s_linear_infinite_reverse]" />
                <div className="absolute h-[180px] w-[180px] rounded-full border border-[#c9a86a]/25" />
              </div>

              {/* central bubble */}
              <div className="relative">
                <div className="absolute inset-0 rounded-full bg-[#c9a86a]/30 blur-2xl animate-pulse" />
                <div className="relative h-32 w-32 rounded-full bg-gradient-to-br from-[#e6d9bf] to-[#c9a86a] flex items-center justify-center shadow-[0_20px_60px_-10px_rgba(201,168,106,0.4)]">
                  <MessageCircle className="h-12 w-12 text-[#0d0b08]" strokeWidth={1.3} />
                </div>
                {/* speech tail */}
                <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 h-4 w-4 rotate-45 bg-[#c9a86a]" />
              </div>

              {/* floating dots */}
              <span className="absolute top-12 right-14 h-1.5 w-1.5 rounded-full bg-[#c9a86a] animate-pulse" />
              <span className="absolute bottom-16 left-16 h-1 w-1 rounded-full bg-[#c9a86a]/70 animate-pulse" style={{ animationDelay: "0.6s" }} />
              <span className="absolute top-1/3 left-10 h-1 w-1 rounded-full bg-[#c9a86a]/50 animate-pulse" style={{ animationDelay: "1.2s" }} />
            </div>
          </div>
        </div>

        {/* footnote */}
        <div className="mt-10 flex flex-col md:flex-row items-center justify-between gap-4 text-[11px] tracking-[0.32em] text-white/40">
          <p>평일 24시간 이내 답변 · 주말 및 공휴일 휴무</p>
          <p>MAISON SERIN · CONCIERGE ATELIER</p>
        </div>
      </div>
    </section>
  );
}

/* ---------- Footer ---------- */
function Footer() {
  return (
    <footer className="border-t border-white/5 bg-[#0d0b08]">
      <div className="mx-auto max-w-[1440px] px-10 py-10 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-6">
          <span className="font-serif text-[18px] tracking-[0.42em] text-white">SERIN</span>
          <span className="h-4 w-px bg-[#c9a86a]/50" />
          <span className="text-[12px] text-white/50 tracking-[0.15em]">당신의 순간을, 순은에 새기다</span>
        </div>
        <p className="text-[11px] tracking-[0.2em] text-white/40">© SERIN. All rights reserved.</p>
      </div>
    </footer>
  );
}

/* ---------- Page ---------- */
function Contact2Page() {
  return (
    <main className="bg-[#0d0b08] font-sans">
      <style>{`
        @keyframes fadeUp { from { opacity:0; transform: translateY(28px);} to { opacity:1; transform:translateY(0);} }
        @keyframes zoomOut { from { opacity:0; transform: scale(1.12);} to { opacity:0.7; transform: scale(1);} }
        @keyframes spinSlow { to { transform: rotate(360deg);} }
      `}</style>
      <Hero />
      <Channel />
      <Footer />
    </main>
  );
}
