import { createFileRoute } from "@tanstack/react-router";
import {
  Copy,
  Package2,
  Headphones,
  MapPin,
  Phone,
  MessageCircle,
  Mail,
  ShoppingBag,
  FileText,
  ChevronDown,
  Instagram,
  Youtube,
  Clock,
} from "lucide-react";
import heroImg from "@/assets/order-hero.jpg";
import productImg from "@/assets/heritage-prestige.jpg";
import showroomImg from "@/assets/showroom-interior.jpg";
import mapImg from "@/assets/order-map.jpg";

export const Route = createFileRoute("/order-details")({
  component: OrderDetailsPage,
  head: () => ({
    meta: [
      { title: "Order Details | SERIN" },
      { name: "description", content: "주문 상세 정보 — SERIN 주문 진행 현황과 상세 내역을 확인하세요." },
    ],
  }),
});

function TopNav() {
  return (
    <header className="border-b border-[#ece7df] bg-white">
      <div className="mx-auto flex max-w-[1400px] items-center justify-between px-10 py-6">
        <a href="/" className="font-serif text-3xl tracking-[0.35em] text-[#1a1410]">
          SERIN
        </a>
        <nav className="hidden items-center gap-12 md:flex">
          {["BRAND", "COLLECTIONS", "GALLERY", "TRADE", "SHOWROOM"].map((l) => (
            <a key={l} href="#" className="flex items-center gap-1 text-[12px] tracking-[0.28em] text-[#1a1410]/80 hover:text-[#1a1410]">
              {l}
              {l === "COLLECTIONS" && <ChevronDown className="h-3 w-3" />}
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-8 text-[10px] tracking-[0.25em] text-[#1a1410]/70">
          <button className="flex flex-col items-center gap-1">
            <ShoppingBag className="h-5 w-5" strokeWidth={1.2} />
            CART
          </button>
          <button className="flex flex-col items-center gap-1">
            <FileText className="h-5 w-5" strokeWidth={1.2} />
            ORDER LOOKUP
          </button>
        </div>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section className="relative h-[320px] w-full overflow-hidden bg-[#0a0807]">
      <img src={heroImg} alt="Order Details" className="absolute inset-0 h-full w-full object-cover opacity-90" />
      <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/40 to-transparent" />
      <div className="relative mx-auto flex h-full max-w-[1400px] flex-col justify-center px-10 text-white">
        <h1 className="font-serif text-6xl tracking-wide">ORDER DETAILS</h1>
        <p className="mt-4 font-sans text-sm tracking-[0.3em] text-white/70">주문 상세 정보</p>
      </div>
    </section>
  );
}

function OrderHeader() {
  return (
    <div className="flex items-start justify-between border-b border-[#ece7df] pb-8">
      <div>
        <div className="flex items-center gap-2">
          <span className="font-sans text-sm tracking-[0.2em] text-[#1a1410]/70">주문번호</span>
          <span className="font-serif text-xl text-[#1a1410]">ORD-2024-0502-1001</span>
          <Copy className="h-4 w-4 cursor-pointer text-[#1a1410]/50 hover:text-[#1a1410]" strokeWidth={1.4} />
        </div>
        <p className="mt-3 font-sans text-xs tracking-[0.2em] text-[#1a1410]/60">
          주문일 2024.05.02 14:35
        </p>
      </div>
      <button className="border border-[#1a1410]/30 px-6 py-3 font-sans text-xs tracking-[0.25em] text-[#1a1410] hover:bg-[#1a1410] hover:text-white">
        목록으로 돌아가기
      </button>
    </div>
  );
}

function ProductCard() {
  return (
    <div className="mt-10 border border-[#ece7df] bg-white p-8">
      <div className="flex gap-10">
        <div className="h-44 w-44 flex-shrink-0 overflow-hidden bg-[#0a0807]">
          <img src={productImg} alt="Korea Heritage Bar" className="h-full w-full object-cover" loading="lazy" />
        </div>
        <div className="flex flex-1 flex-col justify-center">
          <span className="inline-block w-fit bg-[#f3ece0] px-3 py-1 font-sans text-[11px] tracking-[0.2em] text-[#9a7b3e]">
            상담 진행중
          </span>
          <h3 className="mt-4 font-serif text-2xl leading-tight text-[#1a1410]">
            Korea Heritage Bar
            <br />
            Prestige 1kg
          </h3>
          <div className="mt-3 flex items-center gap-3 font-sans text-sm text-[#1a1410]/70">
            <span>순문 999.9%</span>
            <span className="text-[#1a1410]/30">|</span>
            <span>1000g</span>
          </div>
          <div className="mt-4 flex items-center gap-2 font-sans text-xs text-[#1a1410]/60">
            <Package2 className="h-4 w-4" strokeWidth={1.3} />
            프리미엄 패키지 포함
          </div>
        </div>
        <div className="flex flex-col items-end justify-center">
          <p className="font-serif text-2xl text-[#1a1410]">2,200,000 KRW</p>
          <p className="mt-3 font-sans text-xs tracking-[0.2em] text-[#1a1410]/60">수량 1개</p>
        </div>
      </div>
    </div>
  );
}

function Progress() {
  const steps = [
    { n: 1, label: "상담 진행중", date: "2024.05.02", active: true },
    { n: 2, label: "제작중" },
    { n: 3, label: "방문 안내 완료" },
    { n: 4, label: "수령 완료" },
  ];
  return (
    <div className="mt-8 border border-[#ece7df] bg-white p-10">
      <h3 className="font-sans text-sm tracking-[0.25em] text-[#1a1410]">주문 진행 현황</h3>
      <div className="mt-10 px-6">
        <div className="relative flex items-start justify-between">
          <div className="absolute left-[5%] right-[5%] top-5 h-px bg-[#e6dfd4]" />
          <div className="absolute left-[5%] top-5 h-px w-[25%] bg-[#9a7b3e]" />
          {steps.map((s) => (
            <div key={s.n} className="relative flex w-1/4 flex-col items-center">
              <div
                className={`flex h-10 w-10 items-center justify-center rounded-full text-xs ${
                  s.active
                    ? "bg-[#9a7b3e] text-white"
                    : "border border-[#d9d2c5] bg-white text-[#1a1410]/50"
                }`}
              >
                {s.active ? "✓" : s.n}
              </div>
              <p
                className={`mt-4 font-sans text-sm ${
                  s.active ? "text-[#1a1410]" : "text-[#1a1410]/50"
                }`}
              >
                {s.label}
              </p>
              {s.date && (
                <p className="mt-1 font-sans text-xs text-[#1a1410]/40">{s.date}</p>
              )}
            </div>
          ))}
        </div>
      </div>
      <div className="mt-12 flex items-start gap-5 bg-[#faf6ee] p-6">
        <Headphones className="mt-1 h-6 w-6 text-[#9a7b3e]" strokeWidth={1.3} />
        <div>
          <p className="font-sans text-sm font-medium text-[#1a1410]">상담이 진행중입니다.</p>
          <p className="mt-2 font-sans text-sm text-[#1a1410]/70">
            담당자가 고객님께 순차적으로 연락드릴 예정입니다.
          </p>
        </div>
      </div>
    </div>
  );
}

function OrderInfo() {
  const left: [string, React.ReactNode][] = [
    ["주문번호", "ORD-2024-0502-1001"],
    ["주문일", "2024.05.02 14:35"],
    ["주문자", "홍길동"],
    ["연락처", "010-1234-5678"],
    ["이메일", "honggildong@example.com"],
  ];
  const right: [string, React.ReactNode][] = [
    ["결제 방법", "신용카드"],
    ["결제 금액", "2,200,000 KRW"],
    ["결제 상태", "결제 완료"],
    ["영수증", (
      <button className="border border-[#1a1410]/30 px-4 py-1.5 text-xs hover:bg-[#1a1410] hover:text-white">
        영수증 다운로드
      </button>
    )],
  ];
  return (
    <div className="mt-8 border border-[#ece7df] bg-white p-10">
      <h3 className="font-sans text-sm tracking-[0.25em] text-[#1a1410]">주문 정보</h3>
      <div className="mt-8 grid grid-cols-2 gap-x-16">
        <div className="space-y-5">
          {left.map(([k, v]) => (
            <div key={k} className="grid grid-cols-[110px_1fr] items-center font-sans text-sm">
              <span className="text-[#1a1410]/60">{k}</span>
              <span className="text-[#1a1410]">{v}</span>
            </div>
          ))}
        </div>
        <div className="space-y-5">
          {right.map(([k, v]) => (
            <div key={k} className="grid grid-cols-[110px_1fr] items-center font-sans text-sm">
              <span className="text-[#1a1410]/60">{k}</span>
              <span className="text-[#1a1410]">{v}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function VisitGuide() {
  return (
    <div className="mt-8 border border-[#ece7df] bg-white p-10">
      <h3 className="font-sans text-sm tracking-[0.25em] text-[#1a1410]">방문 안내</h3>
      <div className="mt-8 grid grid-cols-[280px_1fr_320px] gap-8">
        <div className="aspect-[4/3] overflow-hidden bg-[#0a0807]">
          <img src={showroomImg} alt="SERIN Showroom" className="h-full w-full object-cover" loading="lazy" />
        </div>
        <div className="space-y-4 font-sans text-sm">
          <p className="font-serif text-lg text-[#1a1410]">SERIN 쇼룸</p>
          <p className="text-[#1a1410]/80">서울특별시 종로구 율곡로 10길 XXX</p>
          <div className="flex gap-3 pt-2">
            <span className="text-[#1a1410]/60">운영시간</span>
            <span className="text-[#1a1410]/80">Mon - Sat 11:00 - 19:00 (일요일, 공휴일 휴무)</span>
          </div>
          <div className="flex gap-3">
            <span className="text-[#1a1410]/60">연락처</span>
            <span className="text-[#1a1410]/80">02-1234-5678</span>
          </div>
        </div>
        <div className="relative aspect-[4/3] overflow-hidden bg-[#f5efe4]">
          <img src={mapImg} alt="Map" className="h-full w-full object-cover" loading="lazy" />
          <div className="absolute left-1/2 top-1/2 flex -translate-x-1/2 -translate-y-1/2 items-center gap-1.5 bg-[#1a1410] px-3 py-1.5 text-[10px] tracking-[0.2em] text-white">
            <MapPin className="h-3 w-3" strokeWidth={1.5} />
            SERIN SHOWROOM
          </div>
        </div>
      </div>
      <div className="mt-8 grid grid-cols-2 gap-4">
        <button className="flex items-center justify-center gap-2 border border-[#1a1410]/30 py-4 font-sans text-sm tracking-[0.2em] text-[#1a1410] hover:bg-[#1a1410]/5">
          <MapPin className="h-4 w-4" strokeWidth={1.4} />
          지도에서 보기
        </button>
        <button className="flex items-center justify-center gap-2 bg-[#1a1410] py-4 font-sans text-sm tracking-[0.2em] text-white hover:bg-[#1a1410]/90">
          <Phone className="h-4 w-4" strokeWidth={1.4} />
          쇼룸에 문의하기
        </button>
      </div>
    </div>
  );
}

function Contact() {
  const items = [
    { Icon: Phone, label: "전화 문의", main: "02-1234-5678", sub: "Mon - Sat 11:00 - 19:00" },
    { Icon: MessageCircle, label: "카카오 채널", main: "SERIN 공식 채널", sub: "실시간 상담 가능" },
    { Icon: Mail, label: "이메일 문의", main: "hello@serin.kr", sub: "순차적으로 답변 드립니다." },
  ];
  return (
    <div className="mt-8 border border-[#ece7df] bg-white p-10">
      <h3 className="font-sans text-sm tracking-[0.25em] text-[#1a1410]">문의 안내</h3>
      <div className="mt-8 grid grid-cols-3 gap-8">
        {items.map(({ Icon, label, main, sub }) => (
          <div key={label} className="flex items-start gap-5">
            <div className="flex h-12 w-12 items-center justify-center rounded-full border border-[#e6dfd4]">
              <Icon className="h-5 w-5 text-[#9a7b3e]" strokeWidth={1.3} />
            </div>
            <div className="font-sans">
              <p className="text-sm tracking-[0.2em] text-[#1a1410]/70">{label}</p>
              <p className="mt-2 text-base text-[#1a1410]">{main}</p>
              <p className="mt-1 text-xs text-[#1a1410]/50">{sub}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function Footer() {
  return (
    <footer className="mt-16 border-t border-[#ece7df] bg-[#f5f1ea]">
      <div className="mx-auto grid max-w-[1400px] grid-cols-4 gap-10 px-10 py-10">
        <div>
          <p className="font-serif text-2xl tracking-[0.35em] text-[#1a1410]">SERIN</p>
          <p className="mt-4 font-sans text-xs leading-6 text-[#1a1410]/70">
            기억을 간직하는 순은
            <br />
            소중한 순간을 은빛에 담아
            <br />
            오래도록 간직할 수 있도록 제작합니다.
          </p>
        </div>
        <div className="space-y-3 font-sans text-xs text-[#1a1410]/70">
          <p className="flex items-center gap-2"><MapPin className="h-3.5 w-3.5" strokeWidth={1.3} /> 서울특별시 종로구 율곡로 10길 XXX</p>
          <p className="flex items-center gap-2"><Clock className="h-3.5 w-3.5" strokeWidth={1.3} /> Mon - Sat 11:00 - 19:00</p>
          <p className="flex items-center gap-2"><Phone className="h-3.5 w-3.5" strokeWidth={1.3} /> 02-1234-5678</p>
          <p className="flex items-center gap-2"><Mail className="h-3.5 w-3.5" strokeWidth={1.3} /> hello@serin.kr</p>
        </div>
        <div className="space-y-3 font-sans text-xs text-[#1a1410]/70">
          <p className="flex items-center gap-2"><Instagram className="h-3.5 w-3.5" strokeWidth={1.3} /> Instagram</p>
          <p className="flex items-center gap-2"><MessageCircle className="h-3.5 w-3.5" strokeWidth={1.3} /> Kakao Channel</p>
          <p className="flex items-center gap-2"><Youtube className="h-3.5 w-3.5" strokeWidth={1.3} /> YouTube</p>
        </div>
        <div className="flex items-start justify-end gap-6 font-sans text-xs text-[#1a1410]/70">
          <a href="#">이용약관</a>
          <a href="#">개인정보처리방침</a>
          <a href="#">사업자정보확인</a>
        </div>
      </div>
      <div className="border-t border-[#e6dfd4]">
        <div className="mx-auto max-w-[1400px] px-10 py-5 text-right font-sans text-xs text-[#1a1410]/50">
          © SERIN. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
}

function OrderDetailsPage() {
  return (
    <div className="min-h-screen bg-[#f8f5f0]">
      <TopNav />
      <Hero />
      <main className="mx-auto max-w-[1200px] px-10 py-14">
        <OrderHeader />
        <ProductCard />
        <Progress />
        <OrderInfo />
        <VisitGuide />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
