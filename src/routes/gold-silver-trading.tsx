import { createFileRoute, Link } from "@tanstack/react-router";
import {
  Search,
  Scale,
  FileCheck,
  Handshake,
  Coins,
  Gem,
  Diamond,
  CircleDot,
  ShieldCheck,
  Sparkles,
  Gift,
  UserRound,
  TrendingUp,
  MessageCircle,
  Phone,
  ChevronRight,
} from "lucide-react";
import heroImg from "@/assets/trading-hero.jpg";
import goldImg from "@/assets/trading-gold.jpg";
import silverImg from "@/assets/trading-silver.jpg";
import jewelryImg from "@/assets/trading-jewelry.jpg";
import otherImg from "@/assets/trading-other.jpg";
import trustImg from "@/assets/trading-trust.jpg";
import showroomImg from "@/assets/trading-showroom.jpg";

export const Route = createFileRoute("/gold-silver-trading")({
  head: () => ({
    meta: [
      { title: "금은 거래 소개 — 삼덕 금은거래소" },
      {
        name: "description",
        content:
          "1998년부터 종로에서 이어온 신뢰. 순금, 골드바, 실버바 및 귀금속 제품의 정직한 매입과 판매를 진행합니다.",
      },
      { property: "og:title", content: "금은 거래 소개 — 삼덕 금은거래소" },
      {
        property: "og:description",
        content: "투명한 안내와 정직한 거래를 원칙으로, 고객의 자산을 신중하게 다룹니다.",
      },
      { property: "og:image", content: heroImg },
    ],
  }),
  component: TradingPage,
});

function TopNav() {
  return (
    <header className="absolute top-0 left-0 right-0 z-30">
      <div className="mx-auto max-w-[1280px] px-10 py-7 flex items-center justify-between">
        <Link to="/" className="flex flex-col leading-tight">
          <span className="font-serif text-[20px] tracking-[0.18em] text-white">
            삼덕 금은거래소
          </span>
          <span className="text-[10px] tracking-[0.4em] text-[#c9a86a] mt-0.5">
            SINCE 1998
          </span>
        </Link>
        <nav className="hidden md:flex items-center gap-10 text-[13px] text-white/85">
          <a href="#about" className="hover:text-[#c9a86a] transition-colors">회사 소개</a>
          <a href="#items" className="text-[#c9a86a]">금은 거래 소개</a>
          <Link to="/photo-bar" className="hover:text-[#c9a86a] transition-colors">포토바</Link>
          <Link to="/showroom" className="hover:text-[#c9a86a] transition-colors">쇼룸</Link>
          <Link to="/contact" className="hover:text-[#c9a86a] transition-colors">문의</Link>
        </nav>
        <Link
          to="/contact"
          className="hidden md:inline-flex items-center border border-white/30 px-5 py-2.5 text-[12px] tracking-[0.2em] text-white hover:bg-white hover:text-[#1a1410] transition-colors"
        >
          상담 문의하기
        </Link>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section className="relative bg-[#0d0a07] text-white overflow-hidden">
      <TopNav />
      <div className="absolute inset-0">
        <img
          src={heroImg}
          alt="Master jeweler hands working with gold"
          width={1920}
          height={1080}
          className="w-full h-full object-cover opacity-70"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0d0a07] via-[#0d0a07]/85 to-transparent" />
      </div>
      <div className="relative mx-auto max-w-[1280px] px-10 pt-40 pb-28 min-h-[640px] flex flex-col justify-center">
        <span className="text-[11px] tracking-[0.5em] text-[#c9a86a] mb-6">
          GOLD &amp; SILVER TRADING
        </span>
        <h1 className="font-serif text-[56px] leading-[1.15] font-light max-w-[640px]">
          금과 은,
          <br />
          신뢰할 수 있는 거래
        </h1>
        <p className="mt-8 text-[14px] leading-[1.9] text-white/75 max-w-[480px]">
          1998년부터 종로에서 이어온 경험을 바탕으로
          <br />
          순금, 골드바, 실버바 및 귀금속 제품의 매입과 판매를 진행합니다.
        </p>
        <p className="mt-6 text-[14px] leading-[1.9] text-white/75 max-w-[480px]">
          투명한 안내와 정직한 거래를 원칙으로
          <br />
          고객의 자산을 신중하게 다룹니다.
        </p>
        <div className="mt-10">
          <Link
            to="/contact"
            className="inline-flex items-center gap-3 bg-[#c9a86a] hover:bg-[#b89758] text-[#0d0a07] px-8 py-4 text-[13px] tracking-[0.2em] transition-colors"
          >
            상담 문의하기
            <ChevronRight size={16} />
          </Link>
        </div>
      </div>
    </section>
  );
}

const items = [
  {
    img: goldImg,
    icon: Coins,
    title: "순금 · 골드바",
    desc: "투자용 골드바, 순금 제품,\n돌반지 등 다양한 순금 제품 거래",
  },
  {
    img: silverImg,
    icon: Gem,
    title: "실버바 · 은제품",
    desc: "실버바 및 다양한\n은제품 거래",
  },
  {
    img: jewelryImg,
    icon: CircleDot,
    title: "14K · 18K 주얼리",
    desc: "반지, 목걸이, 팔찌 등\n귀금속 주얼리 거래",
  },
  {
    img: otherImg,
    icon: Diamond,
    title: "기타 귀금속",
    desc: "백금 및\n기타 귀금속 상담 가능",
  },
];

function TradingItems() {
  return (
    <section id="items" className="bg-[#faf6ef] py-32">
      <div className="mx-auto max-w-[1280px] px-10">
        <div className="text-center mb-20">
          <span className="text-[11px] tracking-[0.5em] text-[#c9a86a]">TRADING ITEMS</span>
          <h2 className="font-serif text-[42px] font-light text-[#1a1410] mt-5">
            무엇을 거래할 수 있나요?
          </h2>
          <p className="text-[14px] text-[#6b5d4d] mt-5 tracking-wide">
            고객의 목적에 맞는 다양한 귀금속 거래를 지원합니다.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-7">
          {items.map((it) => (
            <article
              key={it.title}
              className="group bg-white border border-[#ede5d4] hover:border-[#c9a86a] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_40px_-20px_rgba(201,168,106,0.35)]"
            >
              <div className="aspect-[4/3] overflow-hidden bg-[#f5efe2]">
                <img
                  src={it.img}
                  alt={it.title}
                  loading="lazy"
                  width={800}
                  height={640}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>
              <div className="p-7">
                <it.icon size={26} strokeWidth={1.5} className="text-[#c9a86a]" />
                <h3 className="font-serif text-[18px] text-[#1a1410] mt-5">{it.title}</h3>
                <p className="text-[13px] text-[#6b5d4d] leading-[1.8] mt-3 whitespace-pre-line">
                  {it.desc}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

const steps = [
  { n: "01", icon: Search, title: "제품 확인", desc: "거래를 원하는\n제품을 확인합니다." },
  { n: "02", icon: Scale, title: "중량 및 상태 확인", desc: "제품 종류와\n중량을 확인합니다." },
  { n: "03", icon: FileCheck, title: "거래 금액 안내", desc: "확인된 내용을 바탕으로\n거래 금액을 안내합니다." },
  { n: "04", icon: Handshake, title: "거래 진행", desc: "안내된 금액 확인 후\n거래를 진행합니다." },
];

function Process() {
  return (
    <section className="bg-[#f5efe2] py-32">
      <div className="mx-auto max-w-[1280px] px-10">
        <div className="text-center mb-20">
          <span className="text-[11px] tracking-[0.5em] text-[#c9a86a]">PROCESS</span>
          <h2 className="font-serif text-[42px] font-light text-[#1a1410] mt-5">
            거래는 어떻게 진행되나요?
          </h2>
          <p className="text-[14px] text-[#6b5d4d] mt-5 tracking-wide">
            복잡한 절차 없이 간단하고 투명하게 진행됩니다.
          </p>
          <div className="w-12 h-px bg-[#c9a86a] mx-auto mt-8" />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-0 relative">
          {steps.map((s, i) => (
            <div key={s.n} className="relative flex flex-col items-center text-center px-4">
              <div className="text-[11px] tracking-[0.3em] text-[#c9a86a] mb-5">{s.n}</div>
              <div className="w-24 h-24 rounded-full border border-[#d9c89a] bg-white flex items-center justify-center mb-7 relative">
                <s.icon size={32} strokeWidth={1.4} className="text-[#1a1410]" />
              </div>
              <h3 className="font-serif text-[17px] text-[#1a1410] mb-4">{s.title}</h3>
              <p className="text-[13px] text-[#6b5d4d] leading-[1.8] whitespace-pre-line">
                {s.desc}
              </p>
              {i < steps.length - 1 && (
                <ChevronRight
                  size={20}
                  className="hidden md:block absolute top-[68px] -right-2.5 text-[#c9a86a]"
                />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Trust() {
  return (
    <section className="bg-[#0d0a07] text-white relative overflow-hidden">
      <div className="grid grid-cols-1 lg:grid-cols-2">
        <div className="px-10 lg:px-20 py-28 max-w-[640px] mx-auto lg:mx-0 lg:ml-auto">
          <span className="text-[11px] tracking-[0.5em] text-[#c9a86a]">TRUST</span>
          <h2 className="font-serif text-[40px] font-light mt-5 leading-[1.3]">
            1998년부터 이어온 신뢰
          </h2>
          <p className="mt-8 text-[14px] leading-[1.9] text-white/70">
            오랜 경험은 단순한 시간이 아닌 신뢰의 기반이라고 생각합니다.
          </p>
          <p className="mt-4 text-[14px] leading-[1.9] text-white/70">
            삼덕 금은거래소는 고객 한 분 한 분의 자산을 소중히 여기며
            <br />
            정확한 안내와 정직한 거래를 위해 노력하고 있습니다.
          </p>
          <div className="grid grid-cols-3 gap-6 mt-14 pt-10 border-t border-white/15">
            <div>
              <div className="font-serif text-[40px] text-[#c9a86a] leading-none">1998</div>
              <div className="text-[11px] tracking-[0.25em] text-white/60 mt-3">Since</div>
            </div>
            <div>
              <div className="font-serif text-[40px] text-[#c9a86a] leading-none">25+</div>
              <div className="text-[11px] tracking-[0.25em] text-white/60 mt-3">
                Years of Experience
              </div>
            </div>
            <div>
              <div className="font-serif text-[28px] text-[#c9a86a] leading-none pt-2.5">
                Thousands
              </div>
              <div className="text-[11px] tracking-[0.25em] text-white/60 mt-3">
                of Transactions
              </div>
            </div>
          </div>
        </div>
        <div className="relative min-h-[420px] lg:min-h-full">
          <img
            src={trustImg}
            alt="Showroom signage"
            loading="lazy"
            width={1200}
            height={900}
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-l from-transparent to-[#0d0a07]/60" />
        </div>
      </div>
    </section>
  );
}

const visitors = [
  { icon: TrendingUp, title: "투자용 골드바를\n구매하려는 고객" },
  { icon: ShieldCheck, title: "실버바를\n구매하려는 고객" },
  { icon: Sparkles, title: "보유 중인 귀금속을\n판매하려는 고객" },
  { icon: Gift, title: "선물용 순금 제품을\n찾는 고객" },
  { icon: UserRound, title: "귀금속 거래가\n처음인 고객" },
];

function WhoVisits() {
  return (
    <section className="bg-[#faf6ef] py-32">
      <div className="mx-auto max-w-[1280px] px-10">
        <div className="text-center mb-20">
          <span className="text-[11px] tracking-[0.5em] text-[#c9a86a]">WHO VISITS US</span>
          <h2 className="font-serif text-[42px] font-light text-[#1a1410] mt-5">
            이런 분들이 많이 찾습니다
          </h2>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
          {visitors.map((v) => (
            <div
              key={v.title}
              className="flex flex-col items-center text-center p-8 border border-[#ede5d4] bg-white/40 hover:bg-white hover:border-[#c9a86a] transition-colors"
            >
              <v.icon size={40} strokeWidth={1.2} className="text-[#c9a86a]" />
              <p className="mt-6 text-[13px] text-[#1a1410] leading-[1.8] whitespace-pre-line">
                {v.title}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function CTA() {
  return (
    <section className="bg-[#f5efe2] pb-32 pt-8">
      <div className="mx-auto max-w-[1180px] px-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 bg-white border border-[#ede5d4]">
          <div className="aspect-[4/3] lg:aspect-auto">
            <img
              src={showroomImg}
              alt="Showroom interior"
              loading="lazy"
              width={1000}
              height={700}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="p-12 lg:p-16 flex flex-col justify-center">
            <h3 className="font-serif text-[30px] font-light text-[#1a1410] leading-[1.4]">
              방문 전 상담이 필요하신가요?
            </h3>
            <p className="mt-6 text-[14px] text-[#6b5d4d] leading-[1.9]">
              제품 종류와 간단한 정보를 알려주시면
              <br />
              상담을 도와드립니다.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 mt-10">
              <a
                href="#"
                className="inline-flex items-center justify-center gap-2 bg-[#c9a86a] hover:bg-[#b89758] text-[#0d0a07] px-6 py-4 text-[13px] tracking-[0.15em] transition-colors"
              >
                <MessageCircle size={16} />
                카카오톡 상담하기
              </a>
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 border border-[#1a1410] text-[#1a1410] hover:bg-[#1a1410] hover:text-white px-6 py-4 text-[13px] tracking-[0.15em] transition-colors"
              >
                <Phone size={16} />
                문의하기
              </Link>
            </div>
          </div>
        </div>
        <p className="text-center text-[12px] text-[#6b5d4d] mt-12 leading-[1.9]">
          ※ 거래 관련 법규에 따라 신분증 확인이 진행될 수 있습니다.
          <br />
          모든 거래는 관련 법규를 준수하여 투명하게 이루어집니다.
        </p>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="bg-[#0d0a07] text-white/60 py-14">
      <div className="mx-auto max-w-[1280px] px-10 text-center">
        <div className="font-serif text-[18px] tracking-[0.18em] text-white">
          삼덕 금은거래소
        </div>
        <div className="text-[10px] tracking-[0.4em] text-[#c9a86a] mt-2">SINCE 1998</div>
        <p className="text-[12px] mt-8">
          © 2026 SAMDEOK Gold &amp; Silver Exchange. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

function TradingPage() {
  return (
    <main className="bg-[#faf6ef] font-sans">
      <Hero />
      <TradingItems />
      <Process />
      <Trust />
      <WhoVisits />
      <CTA />
      <Footer />
    </main>
  );
}
