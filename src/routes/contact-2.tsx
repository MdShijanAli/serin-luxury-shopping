import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import { ArrowRight, Clock, MessageCircle, Mail, Instagram, Phone, MapPin } from "lucide-react";
import heroImg from "@/assets/contact-hero.jpg";

export const Route = createFileRoute("/contact-2")({
  head: () => ({
    meta: [
      { title: "문의하기 — SERIN" },
      { name: "description", content: "SERIN 고객센터. 카카오톡, 이메일, 인스타그램으로 편리하게 문의해주세요. 평일 24시간 이내 답변드립니다." },
      { property: "og:title", content: "문의하기 — SERIN" },
      { property: "og:description", content: "SERIN 고객센터 — 카카오톡, 이메일, 인스타그램 문의." },
      { property: "og:type", content: "website" },
    ],
  }),
  component: Contact2Page,
});

/* ---------- Fade-in on scroll hook ---------- */
function useReveal<T extends HTMLElement>() {
  const ref = useRef<T | null>(null);
  const [shown, setShown] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            setShown(true);
            io.disconnect();
          }
        });
      },
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
    <header className="absolute top-0 inset-x-0 z-30 bg-transparent">
      <div className="mx-auto flex max-w-[1440px] items-center justify-between px-10 py-7">
        <a href="/" className="font-serif text-[22px] tracking-[0.42em] text-[#2a2622]">SERIN</a>
        <nav className="hidden md:flex items-center gap-10 text-[12px] tracking-[0.24em] text-[#3a332d]">
          {items.map((i) => (
            <a
              key={i.label}
              href={i.href}
              className={`transition hover:text-black ${i.active ? "underline underline-offset-[10px] decoration-[#c9a86a]" : ""}`}
            >
              {i.label}
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-5 text-[#3a332d]">
          <a href="/my-page" aria-label="account" className="hover:text-black">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.3">
              <circle cx="12" cy="8" r="4" /><path d="M4 21c1.5-4 5-6 8-6s6.5 2 8 6" />
            </svg>
          </a>
          <a href="/cart" aria-label="cart" className="hover:text-black">
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
    <section className="relative w-full bg-[#f3efe8] overflow-hidden">
      <TopNav />
      <div className="relative grid grid-cols-1 md:grid-cols-2 min-h-[560px]">
        {/* Left copy */}
        <div className="flex items-center px-10 md:px-20 pt-32 md:pt-24 pb-16">
          <div className="max-w-md animate-[fadeUp_.9s_ease-out_both]">
            <h1 className="font-serif text-[64px] md:text-[72px] leading-[1.05] text-[#2a2622] tracking-[-0.01em]">
              문의하기
            </h1>
            <p className="mt-4 text-[12px] tracking-[0.45em] text-[#8a7f70]">CONTACT US</p>

            <div className="mt-14 space-y-3">
              <p className="text-[15px] text-[#3a332d]">궁금한 점이 있으신가요?</p>
              <p className="text-[14px] text-[#6a6156] leading-relaxed">
                <span className="inline-block px-3 py-1 mr-2 bg-[#e6dfd2] text-[#3a332d] text-[12px] tracking-[0.3em]">
                  빠르고
                </span>
                친절하게 답변드리겠습니다.
              </p>
            </div>
          </div>
        </div>

        {/* Right image */}
        <div className="relative h-[420px] md:h-auto overflow-hidden">
          <img
            src={heroImg}
            alt="SERIN 포토바 패키지"
            className="h-full w-full object-cover animate-[zoomIn_1.4s_ease-out_both]"
          />
          {/* soft left fade to blend */}
          <div className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-[#f3efe8] to-transparent" />
        </div>
      </div>

      {/* gold hairline */}
      <div className="pointer-events-none absolute bottom-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-[#c9a86a]/50 to-transparent" />
    </section>
  );
}

/* ---------- Intro copy ---------- */
function Intro() {
  const { ref, shown } = useReveal<HTMLDivElement>();
  return (
    <section className="bg-[#f3efe8] pt-24 pb-16">
      <div
        ref={ref}
        className={`mx-auto max-w-[900px] px-6 text-center transition-all duration-1000 ${
          shown ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
        }`}
      >
        <h2 className="font-serif text-[28px] md:text-[32px] text-[#2a2622] leading-relaxed">
          문의는 아래 채널을 통해 편리하게 연락해주세요.
        </h2>
        <div className="mt-8 text-[14px] leading-[2.1] text-[#6a6156]">
          <p>제품, 제작, 배송 관련 문의는</p>
          <p>아래 채널을 통해 문의해 주시면</p>
          <p>평일 기준 24시간 이내에 답변드리겠습니다.</p>
        </div>
      </div>
    </section>
  );
}

/* ---------- Channel Card ---------- */
type ChannelProps = {
  badge: React.ReactNode;
  title: string;
  subtitle: string;
  bullets: string[];
  cta: string;
  href: string;
  delay?: number;
  variant?: "kakao" | "email" | "instagram";
};

function ChannelCard({ badge, title, subtitle, bullets, cta, href, delay = 0, variant = "kakao" }: ChannelProps) {
  const { ref, shown } = useReveal<HTMLDivElement>();
  const btn =
    variant === "kakao"
      ? "bg-[#2a2622] text-white hover:bg-black"
      : variant === "email"
      ? "bg-[#c9a86a] text-[#2a2622] hover:bg-[#d8ba80]"
      : "bg-white text-[#2a2622] border border-[#2a2622] hover:bg-[#2a2622] hover:text-white";

  return (
    <div
      ref={ref}
      style={{ transitionDelay: `${delay}ms` }}
      className={`group relative rounded-sm bg-[#efe9de] p-10 md:p-12 shadow-[0_1px_0_0_rgba(0,0,0,0.03)] hover:shadow-[0_30px_60px_-30px_rgba(60,45,20,0.25)] hover:-translate-y-1 transition-all duration-700 ${
        shown ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      }`}
    >
      {/* corner ornament */}
      <span className="absolute top-4 right-4 h-6 w-6 border-t border-r border-[#c9a86a]/60 opacity-0 group-hover:opacity-100 transition" />
      <span className="absolute bottom-4 left-4 h-6 w-6 border-b border-l border-[#c9a86a]/60 opacity-0 group-hover:opacity-100 transition" />

      <div className="flex flex-col items-center text-center">
        <div className="mb-8 transition-transform duration-500 group-hover:-translate-y-1">{badge}</div>
        <h3 className="font-serif text-[24px] text-[#2a2622]">{title}</h3>

        <div className="mt-8 w-full border-t border-[#d9d1c1]/70 pt-6">
          <p className="text-[12px] tracking-[0.28em] text-[#8a7f70] mb-4">{subtitle}</p>
          <ul className="space-y-2 text-[13px] text-[#3a332d]">
            {bullets.map((b) => (
              <li key={b} className="flex items-center justify-center gap-2">
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#c9a86a" strokeWidth="2">
                  <path d="M5 12l5 5 9-11" />
                </svg>
                {b}
              </li>
            ))}
          </ul>
        </div>

        <a
          href={href}
          className={`mt-10 inline-flex items-center justify-center gap-3 w-full max-w-[300px] px-6 py-4 text-[12px] tracking-[0.32em] transition ${btn}`}
        >
          {cta}
          <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" strokeWidth={1.5} />
        </a>
      </div>
    </div>
  );
}

/* ---------- Channels grid ---------- */
function Channels() {
  return (
    <section className="bg-[#f3efe8] pb-24">
      <div className="mx-auto max-w-[1200px] px-6 grid grid-cols-1 md:grid-cols-2 gap-8">
        <ChannelCard
          delay={0}
          variant="kakao"
          badge={
            <div className="relative">
              <div className="h-16 w-16 rounded-full bg-[#2a2622] flex items-center justify-center">
                <span className="font-serif text-white text-[13px] tracking-[0.18em]">TALK</span>
              </div>
              <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-3 h-3 rotate-45 bg-[#2a2622]" />
            </div>
          }
          title="카카오톡 문의하기"
          subtitle="가장 빠르고 편리한 상담"
          bullets={["주문 및 사진 확인", "제작 가능 여부", "배송 일정 문의"]}
          cta="카카오톡 문의하기"
          href="#"
        />
        <ChannelCard
          delay={120}
          variant="email"
          badge={
            <div className="h-16 w-16 rounded-full bg-[#c9a86a]/15 border border-[#c9a86a]/50 flex items-center justify-center">
              <Mail className="h-6 w-6 text-[#c9a86a]" strokeWidth={1.4} />
            </div>
          }
          title="이메일 문의"
          subtitle="정중한 서면 상담"
          bullets={["맞춤 제작 견적", "기업 · 단체 주문", "협업 및 제휴 제안"]}
          cta="contact@serin.co.kr"
          href="mailto:contact@serin.co.kr"
        />
      </div>
    </section>
  );
}

/* ---------- Operating hours strip ---------- */
function Hours() {
  const { ref, shown } = useReveal<HTMLDivElement>();
  return (
    <section className="bg-[#f3efe8] pb-28">
      <div
        ref={ref}
        className={`mx-auto max-w-[1200px] px-6 transition-all duration-1000 ${
          shown ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
        }`}
      >
        <div className="rounded-sm bg-[#eae3d5] px-10 py-10 md:px-14 md:py-12 flex flex-col md:flex-row items-start md:items-center gap-8">
          <div className="h-16 w-16 rounded-full border border-[#c9a86a]/60 flex items-center justify-center shrink-0 animate-[spinSlow_18s_linear_infinite]">
            <Clock className="h-6 w-6 text-[#8a7f70]" strokeWidth={1.4} />
          </div>
          <div className="flex-1">
            <p className="text-[12px] tracking-[0.42em] text-[#8a7f70] mb-3">운영시간 안내</p>
            <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-[15px] text-[#2a2622]">
              <span>월 - 금</span>
              <span className="h-3 w-px bg-[#c9a86a]/50" />
              <span className="font-serif text-[20px]">10:00 - 18:00</span>
              <span className="ml-2 inline-block h-1 w-6 bg-[#c9a86a]/60" />
            </div>
            <p className="mt-3 text-[13px] text-[#6a6156]">주말 및 공휴일은 휴무입니다.</p>
          </div>
          <div className="hidden md:flex items-center gap-6 text-[12px] tracking-[0.3em] text-[#8a7f70]">
            <div className="flex items-center gap-2"><Phone className="h-4 w-4 text-[#c9a86a]" strokeWidth={1.4} /> 02-000-0000</div>
            <div className="flex items-center gap-2"><MapPin className="h-4 w-4 text-[#c9a86a]" strokeWidth={1.4} /> Seoul</div>
            <a href="#" className="flex items-center gap-2 hover:text-[#2a2622]"><Instagram className="h-4 w-4 text-[#c9a86a]" strokeWidth={1.4} /> @serin</a>
            <a href="#" className="flex items-center gap-2 hover:text-[#2a2622]"><MessageCircle className="h-4 w-4 text-[#c9a86a]" strokeWidth={1.4} /> KakaoTalk</a>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------- Footer ---------- */
function Footer() {
  return (
    <footer className="border-t border-[#e2dccd] bg-[#f3efe8]">
      <div className="mx-auto max-w-[1440px] px-10 py-8 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-6">
          <span className="font-serif text-[18px] tracking-[0.42em] text-[#2a2622]">SERIN</span>
          <span className="h-4 w-px bg-[#c9a86a]/50" />
          <span className="text-[12px] text-[#8a7f70] tracking-[0.15em]">당신의 순간을, 순은에 새기다</span>
        </div>
        <p className="text-[11px] tracking-[0.2em] text-[#8a7f70]">© SERIN. All rights reserved.</p>
      </div>
    </footer>
  );
}

/* ---------- Page ---------- */
function Contact2Page() {
  return (
    <main className="bg-[#f3efe8] font-sans">
      {/* keyframes */}
      <style>{`
        @keyframes fadeUp { from { opacity:0; transform: translateY(24px);} to { opacity:1; transform:translateY(0);} }
        @keyframes zoomIn { from { opacity:0; transform: scale(1.06);} to { opacity:1; transform: scale(1);} }
        @keyframes spinSlow { to { transform: rotate(360deg);} }
      `}</style>
      <Hero />
      <Intro />
      <Channels />
      <Hours />
      <Footer />
    </main>
  );
}
