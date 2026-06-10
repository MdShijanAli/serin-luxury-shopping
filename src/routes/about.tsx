import { createFileRoute } from "@tanstack/react-router";
import { ChevronDown, ShoppingBag, User, Scale, Award, Hand, Gem } from "lucide-react";
import heroImg from "@/assets/about-hero.jpg";
import craftImg from "@/assets/about-craft.jpg";
import showroomImg from "@/assets/about-showroom.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — SAMDEOK 삼덕 금은거래소" },
      { name: "description", content: "1998년부터 이어온 삼덕 금은거래소의 귀금속 가치와 신뢰의 이야기." },
      { property: "og:title", content: "About — SAMDEOK" },
      { property: "og:description", content: "1998년부터 이어온 귀금속의 가치." },
      { property: "og:url", content: "/about" },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
  component: AboutPage,
});

function Navbar() {
  return (
    <header className="absolute top-0 left-0 right-0 z-30 bg-[#f5f1ea]">
      <div className="mx-auto flex max-w-[1400px] items-center justify-between px-10 py-6">
        <a href="/" className="leading-tight">
          <div className="font-serif text-[20px] tracking-[0.15em] text-[#1a1410]">삼덕 금은거래소</div>
          <div className="mt-0.5 text-[10px] tracking-[0.3em] text-[#1a1410]/70">SAMDEOK</div>
        </a>
        <nav className="hidden items-center gap-14 md:flex">
          <a href="#" className="text-[12px] tracking-[0.3em] text-[#1a1410]">BRAND</a>
          <a href="#" className="flex items-center gap-1 text-[12px] tracking-[0.3em] text-[#1a1410]">
            COLLECTION <ChevronDown className="h-3 w-3" />
          </a>
          <a href="#" className="text-[12px] tracking-[0.3em] text-[#1a1410]">RESERVATION</a>
        </nav>
        <div className="flex items-center gap-5 text-[#1a1410]">
          <ShoppingBag className="h-5 w-5" strokeWidth={1.2} />
          <User className="h-5 w-5" strokeWidth={1.2} />
        </div>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section className="relative h-[780px] w-full overflow-hidden bg-[#0e0a07]">
      <img src={heroImg} alt="Samdeok silver bar" className="absolute inset-0 h-full w-full object-cover opacity-90" />
      <div className="absolute inset-0 bg-gradient-to-r from-[#0e0a07]/95 via-[#0e0a07]/60 to-transparent" />
      <div className="relative mx-auto flex h-full max-w-[1400px] items-center px-10">
        <div className="max-w-xl text-[#e8dfd2]">
          <div className="mb-6 flex items-center gap-4">
            <span className="text-[11px] tracking-[0.4em] text-[#c9b896]">ABOUT SAMDEOK</span>
            <span className="h-px w-12 bg-[#c9b896]/60" />
          </div>
          <h1 className="font-serif text-5xl leading-[1.3] text-[#f0e6d6]">
            1998년부터 이어온<br />귀금속의 가치
          </h1>
          <p className="mt-10 text-[14px] leading-[2] text-[#d4c8b5]/80">
            삼덕 금은거래소는 1998년 종로에서 시작해<br />
            오랜 시간 금과 은을 다루며<br />
            정직한 품질과 신뢰를 지켜왔습니다.
          </p>
        </div>
      </div>
    </section>
  );
}

function Heritage() {
  const timeline = [
    { year: "1998", title: "삼덕 금은거래소 설립", desc: "종로 귀금속 시장에서 금·은 매입 및 거래 시작" },
    { year: "2000s", title: "다양한 귀금속 제품 제작 및 유통", desc: "기업·단체 기념품, 주문 제작 사업 확대" },
    { year: "2010s", title: "금·은 투자 및 실물 자산 컨설팅 강화", desc: "신뢰 기반의 거래 시스템 구축" },
    { year: "2020s", title: "변하지 않는 가치를 지키며", desc: "고객의 소중한 순간을 함께합니다" },
  ];
  const values = [
    { icon: Scale, title: "정직한 거래", desc: "투명한 시세와 정직한 거래로\n신뢰를 지켜갑니다." },
    { icon: Award, title: "최고의 품질", desc: "순도와 중량을 철저히 관리하여\n최고의 품질을 보장합니다." },
    { icon: Hand, title: "정교한 제작", desc: "숙련된 장인의 기술로\n세심하고 정교하게 만듭니다." },
    { icon: Gem, title: "오래도록 가치", desc: "시간이 지나도 변하지 않는\n가치를 전합니다." },
  ];
  return (
    <section className="bg-[#f5f1ea] px-10 py-28">
      <div className="mx-auto max-w-[1400px]">
        <div className="grid grid-cols-1 gap-20 md:grid-cols-2">
          <div>
            <div className="mb-8 flex items-center gap-4">
              <span className="text-[11px] tracking-[0.4em] text-[#7a6a52]">HERITAGE</span>
              <span className="h-px w-12 bg-[#7a6a52]/40" />
            </div>
            <h2 className="font-serif text-4xl leading-[1.4] text-[#1a1410]">
              종로에서 시작된<br />25년 이상의 경험
            </h2>
            <p className="mt-10 text-[14px] leading-[2] text-[#1a1410]/70">
              대한민국 귀금속 산업의 중심, 종로.<br />
              그곳에서 수많은 거래와 제작 경험을 쌓으며<br />
              고객의 신뢰를 가장 중요한 가치로 생각해왔습니다.
            </p>
          </div>
          <div className="relative">
            <div className="absolute left-[88px] top-2 bottom-2 w-px bg-[#c9b896]/40" />
            <div className="space-y-12">
              {timeline.map((t) => (
                <div key={t.year} className="flex gap-8">
                  <div className="w-16 pt-1 font-serif text-lg text-[#1a1410]">{t.year}</div>
                  <div className="relative pt-2">
                    <div className="absolute -left-[26px] top-3 h-2 w-2 rounded-full bg-[#a8916b]" />
                  </div>
                  <div>
                    <div className="text-[14px] text-[#1a1410]">{t.title}</div>
                    <div className="mt-2 text-[13px] text-[#1a1410]/60">{t.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-28">
          <div className="mb-12 flex items-center gap-4">
            <span className="text-[11px] tracking-[0.4em] text-[#7a6a52]">OUR VALUES</span>
            <span className="h-px w-12 bg-[#7a6a52]/40" />
          </div>
          <div className="grid grid-cols-2 gap-10 md:grid-cols-4">
            {values.map((v) => (
              <div key={v.title} className="text-center">
                <v.icon className="mx-auto h-10 w-10 text-[#a8916b]" strokeWidth={1} />
                <h3 className="mt-6 font-serif text-lg text-[#1a1410]">{v.title}</h3>
                <p className="mt-4 whitespace-pre-line text-[13px] leading-[1.9] text-[#1a1410]/60">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Craftsmanship() {
  return (
    <section className="grid grid-cols-1 md:grid-cols-2">
      <div className="relative h-[560px] bg-[#0e0a07]">
        <img src={craftImg} alt="Craftsman hands" loading="lazy" className="h-full w-full object-cover" />
      </div>
      <div className="flex items-center bg-[#efe9df] px-16 py-20">
        <div className="max-w-md">
          <div className="mb-8 flex items-center gap-4">
            <span className="text-[11px] tracking-[0.4em] text-[#7a6a52]">CRAFTSMANSHIP</span>
            <span className="h-px w-12 bg-[#7a6a52]/40" />
          </div>
          <h2 className="font-serif text-4xl leading-[1.4] text-[#1a1410]">
            보이지 않는 부분까지<br />책임지는 마음
          </h2>
          <p className="mt-10 text-[14px] leading-[2] text-[#1a1410]/70">
            좋은 제품은 겉모습만으로 완성되지 않습니다.<br />
            소재 선택부터 가공, 마감까지 모든 과정에<br />
            정성을 다합니다.<br />
            작은 부분 하나까지도 놓치지 않는 것이<br />
            삼덕이 지켜온 원칙입니다.
          </p>
        </div>
      </div>
    </section>
  );
}

function Promise() {
  return (
    <section className="grid grid-cols-1 md:grid-cols-2">
      <div className="flex items-center bg-[#1a1410] px-16 py-24">
        <div className="max-w-md text-[#e8dfd2]">
          <div className="mb-8 flex items-center gap-4">
            <span className="text-[11px] tracking-[0.4em] text-[#c9b896]">OUR PROMISE</span>
            <span className="h-px w-12 bg-[#c9b896]/40" />
          </div>
          <h2 className="font-serif text-4xl leading-[1.4] text-[#f0e6d6]">
            삼덕은 앞으로도<br />변하지 않는 가치를 지키겠습니다.
          </h2>
          <p className="mt-10 text-[14px] leading-[2] text-[#d4c8b5]/70">
            고객의 믿음이 있기에 오늘이 있습니다.<br />
            앞으로도 정직한 거래와 최고의 품질로<br />
            보답하겠습니다.
          </p>
        </div>
      </div>
      <div className="h-[500px] md:h-auto">
        <img src={showroomImg} alt="Samdeok showroom" loading="lazy" className="h-full w-full object-cover" />
      </div>
    </section>
  );
}

function AboutPage() {
  return (
    <main className="min-h-screen bg-[#f5f1ea] font-sans">
      <Navbar />
      <Hero />
      <Heritage />
      <Craftsmanship />
      <Promise />
    </main>
  );
}
