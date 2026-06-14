import { createFileRoute } from "@tanstack/react-router";
import {
  ShoppingBag,
  User,
  ChevronDown,
  MapPin,
  LogOut,
  Phone,
  MessageCircle,
  Mail,
  ChevronRight,
  Award,
  ShieldCheck,
  Landmark,
  Sun,
} from "lucide-react";
import heroImg from "@/assets/mypage-hero.jpg";
import productImg from "@/assets/heritage-prestige.jpg";
import photoBarImg from "@/assets/photobar.jpg";
import showroomImg from "@/assets/showroom-interior.jpg";

export const Route = createFileRoute("/my-page")({
  component: MyPage,
  head: () => ({
    meta: [
      { title: "My Page | SERIN" },
      { name: "description", content: "SERIN과 함께하는 모든 여정을 한눈에 관리하실 수 있습니다." },
    ],
  }),
});

function TopNav() {
  return (
    <header className="border-b border-[#ece7df] bg-white">
      <div className="mx-auto flex max-w-[1400px] items-center justify-between px-10 py-6">
        <a href="/" className="font-serif text-3xl tracking-[0.35em] text-[#1a1410]">SERIN</a>
        <nav className="hidden items-center gap-14 md:flex">
          {["BRAND", "COLLECTIONS", "GALLERY", "SHOWROOM"].map((l) => (
            <a key={l} href="#" className="flex items-center gap-1 text-[12px] tracking-[0.28em] text-[#1a1410]/80 hover:text-[#1a1410]">
              {l}
              {l === "COLLECTIONS" && <ChevronDown className="h-3 w-3" />}
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-5 text-[#1a1410]/80">
          <ShoppingBag className="h-5 w-5" strokeWidth={1.3} />
          <User className="h-5 w-5" strokeWidth={1.3} />
        </div>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section className="relative h-[340px] w-full overflow-hidden">
      <img src={heroImg} alt="" className="absolute inset-0 h-full w-full object-cover" />
      <div className="absolute inset-0 bg-gradient-to-r from-white via-white/70 to-transparent" />
      <div className="relative mx-auto flex h-full max-w-[1400px] flex-col justify-center px-10">
        <h1 className="font-serif text-6xl tracking-wide text-[#1a1410]">MY PAGE</h1>
        <p className="mt-5 font-sans text-sm leading-7 text-[#1a1410]/70">
          SERIN과 함께하는 모든 여정을
          <br />
          한눈에 관리하실 수 있습니다.
        </p>
      </div>
    </section>
  );
}

function Sidebar() {
  const items = [
    { label: "주문 내역", icon: ShoppingBag, active: true },
    { label: "회원 정보", icon: User },
    { label: "쇼룸 안내", icon: MapPin },
  ];
  return (
    <aside className="w-[260px] flex-shrink-0">
      <div className="border-b border-[#ece7df] px-2 pb-8">
        <p className="font-sans text-xs tracking-[0.3em] text-[#1a1410]/60">WELCOME,</p>
        <p className="mt-3 font-serif text-2xl text-[#1a1410]">김세린 님</p>
        <p className="mt-3 font-sans text-xs text-[#1a1410]/60">serin.kim@example.com</p>
      </div>
      <nav className="mt-6 space-y-1">
        {items.map(({ label, icon: Icon, active }) => (
          <button
            key={label}
            className={`flex w-full items-center gap-3 px-3 py-3.5 text-left font-sans text-sm transition ${
              active ? "bg-[#f5f1ea] text-[#1a1410]" : "text-[#1a1410]/70 hover:bg-[#faf7f1]"
            }`}
          >
            <Icon className="h-4 w-4" strokeWidth={1.4} />
            {label}
          </button>
        ))}
      </nav>
      <div className="mt-10 border-t border-[#ece7df] pt-6">
        <button className="flex w-full items-center gap-3 px-3 py-3 text-left font-sans text-sm text-[#1a1410]/70 hover:text-[#1a1410]">
          <LogOut className="h-4 w-4" strokeWidth={1.4} />
          로그아웃
        </button>
      </div>
    </aside>
  );
}

type Status = "active" | "pending";
type Order = {
  date: string;
  badge: string;
  title: string;
  weight: string;
  purity: string;
  orderId: string;
  amount: string;
  payment: string;
  image: string;
  current: number;
};

const orders: Order[] = [
  {
    date: "2024.05.20",
    badge: "상담 진행중",
    title: "Prestige 1kg 한반도 순은 바",
    weight: "1000g",
    purity: "순은 999.9",
    orderId: "ORD-2024-0520-1001",
    amount: "KRW 문의 후 안내",
    payment: "신용카드",
    image: productImg,
    current: 0,
  },
  {
    date: "2024.04.12",
    badge: "제작중",
    title: "SERIN Photo Bar",
    weight: "100g",
    purity: "순은 999.9",
    orderId: "ORD-2024-0412-0824",
    amount: "550,000 KRW",
    payment: "신용카드",
    image: photoBarImg,
    current: 1,
  },
];

const stages = ["상담 진행중", "제작 준비중", "방문 안내 예정", "수령 완료"];

function OrderCard({ o }: { o: Order }) {
  return (
    <div className="border border-[#ece7df] bg-white">
      <div className="grid grid-cols-[200px_1fr_200px] gap-8 p-8">
        <div className="aspect-[3/4] overflow-hidden bg-[#0a0807]">
          <img src={o.image} alt={o.title} className="h-full w-full object-cover" loading="lazy" />
        </div>
        <div>
          <span className="inline-block bg-[#f3ece0] px-3 py-1 font-sans text-[11px] tracking-[0.15em] text-[#9a7b3e]">
            {o.badge}
          </span>
          <h3 className="mt-4 font-serif text-2xl text-[#1a1410]">{o.title}</h3>
          <div className="mt-3 flex items-center gap-3 font-sans text-sm text-[#1a1410]/70">
            <span>{o.weight}</span>
            <span className="text-[#1a1410]/30">|</span>
            <span>{o.purity}</span>
          </div>
          <div className="mt-6 space-y-2.5 font-sans text-sm">
            <div className="grid grid-cols-[90px_1fr]">
              <span className="text-[#1a1410]/60">주문번호</span>
              <span className="text-[#1a1410]">{o.orderId}</span>
            </div>
            <div className="grid grid-cols-[90px_1fr]">
              <span className="text-[#1a1410]/60">결제금액</span>
              <span className="text-[#1a1410]">{o.amount}</span>
            </div>
            <div className="grid grid-cols-[90px_1fr]">
              <span className="text-[#1a1410]/60">결제방법</span>
              <span className="text-[#1a1410]">{o.payment}</span>
            </div>
          </div>
        </div>
        <div>
          <div className="flex items-center justify-end gap-1 font-sans text-xs text-[#1a1410]/60">
            {o.date} 주문 <ChevronRight className="h-3 w-3" />
          </div>
          <div className="mt-6 relative">
            {stages.map((s, i) => {
              const active = i === o.current;
              const past = i < o.current;
              return (
                <div key={s} className="relative flex items-center gap-3 py-2.5">
                  {i < stages.length - 1 && (
                    <span className="absolute left-[5px] top-7 h-5 w-px bg-[#e6dfd4]" />
                  )}
                  <span
                    className={`h-2.5 w-2.5 rounded-full ${
                      active ? "bg-[#1a1410]" : past ? "bg-[#1a1410]/40" : "bg-[#d9d2c5]"
                    }`}
                  />
                  <span className={`font-sans text-sm ${active ? "text-[#1a1410]" : "text-[#1a1410]/40"}`}>
                    {s}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <div className="grid grid-cols-2 border-t border-[#ece7df]">
        <button className="py-4 font-sans text-sm text-[#1a1410] hover:bg-[#faf7f1]">주문 상세 보기</button>
        <button className="flex items-center justify-center gap-2 bg-[#1a1410] py-4 font-sans text-sm text-white hover:bg-[#1a1410]/90">
          <Phone className="h-4 w-4" strokeWidth={1.4} />
          문의 연락처 보기
        </button>
      </div>
    </div>
  );
}

function OrdersPanel() {
  return (
    <section className="flex-1">
      <div className="flex items-start justify-between">
        <div>
          <h2 className="font-serif text-2xl text-[#1a1410]">주문 내역</h2>
          <p className="mt-3 font-sans text-sm text-[#1a1410]/60">
            주문하신 상품의 진행 상태와 방문 안내를 확인하실 수 있습니다.
          </p>
        </div>
        <button className="flex items-center gap-3 border border-[#ece7df] bg-white px-5 py-2.5 font-sans text-sm text-[#1a1410]">
          전체 주문
          <ChevronDown className="h-3.5 w-3.5" />
        </button>
      </div>
      <div className="mt-8 space-y-8">
        {orders.map((o) => <OrderCard key={o.orderId} o={o} />)}
      </div>
    </section>
  );
}

function HelpSection() {
  return (
    <section className="border-t border-[#ece7df] bg-[#faf7f1]">
      <div className="mx-auto grid max-w-[1400px] grid-cols-[400px_1fr] gap-12 px-10 py-12">
        <div className="aspect-[4/3] overflow-hidden bg-[#0a0807]">
          <img src={showroomImg} alt="SERIN Showroom" className="h-full w-full object-cover" loading="lazy" />
        </div>
        <div>
          <h3 className="font-serif text-2xl text-[#1a1410]">도움이 필요하신가요?</h3>
          <p className="mt-3 font-sans text-sm text-[#1a1410]/70">
            주문, 수령, 제품 관련 문의는 아래 연락처로 문의해 주세요.
          </p>
          <div className="mt-10 grid grid-cols-3 gap-8">
            {[
              { Icon: Phone, label: "02-1234-5678", sub1: "평일 10:00 - 18:00", sub2: "(주말 및 공휴일 휴무)" },
              { Icon: MessageCircle, label: "카카오 채널", sub1: "SERIN 공식 채널", sub2: "실시간 상담 가능" },
              { Icon: Mail, label: "이메일 문의", sub1: "hello@serin.kr", sub2: "순차적으로 답변 드립니다." },
            ].map(({ Icon, label, sub1, sub2 }) => (
              <div key={label} className="flex items-start gap-4">
                <Icon className="mt-1 h-5 w-5 text-[#1a1410]/60" strokeWidth={1.3} />
                <div className="font-sans">
                  <p className="text-sm text-[#1a1410]">{label}</p>
                  <p className="mt-1.5 text-xs text-[#1a1410]/60">{sub1}</p>
                  <p className="text-xs text-[#1a1410]/60">{sub2}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Trust() {
  const items = [
    { Icon: Sun, title: "LBMA GOOD DELIVERY", desc: "런던 금속 시장 협회에서 인증한\n세계 최고 수준의 순은 999.9" },
    { Icon: Award, title: "HALLMARK KOREA", desc: "한국조폐공사 품질 인증 홀마크\n순은(Ag 999.9) 공식 보증" },
    { Icon: ShieldCheck, title: "AUTHENTIC GUARANTEE", desc: "SERIN 품질 보증서와 함께\n정품의 가치를 보증합니다." },
    { Icon: Landmark, title: "SHOWROOM PICKUP", desc: "서울 종로 쇼 SERIN 쇼룸에서\n직접 수령 가능합니다." },
  ];
  return (
    <section className="border-t border-[#ece7df] bg-white">
      <div className="mx-auto grid max-w-[1400px] grid-cols-4 gap-10 px-10 py-10">
        {items.map(({ Icon, title, desc }) => (
          <div key={title} className="flex items-start gap-4">
            <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center border border-[#e6dfd4]">
              <Icon className="h-5 w-5 text-[#1a1410]/70" strokeWidth={1.3} />
            </div>
            <div>
              <p className="font-sans text-xs tracking-[0.2em] text-[#1a1410]">{title}</p>
              <p className="mt-2 whitespace-pre-line font-sans text-xs leading-5 text-[#1a1410]/60">{desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-[#ece7df] bg-white">
      <div className="mx-auto flex max-w-[1400px] items-start justify-between px-10 py-10">
        <div className="space-y-3">
          <p className="font-serif text-2xl tracking-[0.35em] text-[#1a1410]">SERIN</p>
          <div className="flex items-center gap-6 font-sans text-xs text-[#1a1410]/70">
            <a href="#">이용약관</a>
            <a href="#">개인정보처리방침</a>
            <a href="#">고객센터</a>
          </div>
          <div className="space-y-1 pt-3 font-sans text-[11px] text-[#1a1410]/50">
            <p>(주)SERIN  |  대표자: 김세린  |  사업자등록번호: 123-45-67890</p>
            <p>서울특별시 종로구 삼일대로 32길 52  |  hello@serin.kr</p>
          </div>
        </div>
        <p className="font-sans text-xs tracking-[0.2em] text-[#1a1410]/50">© SERIN. ALL RIGHTS RESERVED.</p>
      </div>
    </footer>
  );
}

function MyPage() {
  return (
    <div className="min-h-screen bg-[#fdfbf7]">
      <TopNav />
      <Hero />
      <div className="mx-auto flex max-w-[1400px] gap-12 px-10 py-14">
        <Sidebar />
        <OrdersPanel />
      </div>
      <HelpSection />
      <Trust />
      <Footer />
    </div>
  );
}
