import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Upload, Heart, ArrowRight, ShoppingBag, User, ChevronDown, MapPin, Clock, Phone, Mail, Instagram, MessageCircle, Youtube } from "lucide-react";
import photoHero from "@/assets/photobar-hero.jpg";
import photoBar from "@/assets/photobar.jpg";
import packaging from "@/assets/photobar-packaging.jpg";
import gift from "@/assets/photobar-gift.jpg";
import details from "@/assets/photobar-details.jpg";
import couple from "@/assets/moment-couple.jpg";
import golf from "@/assets/moment-golf.jpg";
import graduation from "@/assets/moment-graduation.jpg";
import family from "@/assets/moment-family.jpg";

export const Route = createFileRoute("/customize-your-story")({
  head: () => ({
    meta: [
      { title: "Customize Your Story — SERIN Photo Bar" },
      { name: "description", content: "당신의 순간을 세상에 하나뿐인 포토바로 간직하세요. 사진과 문구를 새기면 나만의 실버 바가 완성됩니다." },
      { property: "og:title", content: "Customize Your Story — SERIN" },
      { property: "og:description", content: "사진과 문구를 새겨 나만의 SERIN 포토바를 제작하세요." },
      { property: "og:url", content: "/customize-your-story" },
    ],
    links: [{ rel: "canonical", href: "/customize-your-story" }],
  }),
  component: CustomizePage,
});

const sizes = [
  { label: "10g", price: "88,000 KRW" },
  { label: "100g", price: "420,000 KRW" },
  { label: "300g", price: "1,180,000 KRW" },
  { label: "500g", price: "1,600,000 KRW" },
  { label: "1000g", price: "3,880,000 KRW" },
];

const steps = [
  { n: 1, label: "Customize", active: true },
  { n: 2, label: "Cart" },
  { n: 3, label: "Checkout" },
  { n: 4, label: "Order Complete" },
];

const gallery = [
  { img: couple, label: "COUPLE", sub: "사랑하는 순간" },
  { img: golf, label: "GOLF", sub: "나의 스윙, 나의 기록" },
  { img: graduation, label: "GRADUATION", sub: "새로운 시작을 응원하며" },
  { img: family, label: "BABY", sub: "소중한 우리 아이" },
];

const thumbs = [photoBar, details, packaging, gift];

function TopNav() {
  return (
    <header className="bg-[#f8f5f0] border-b border-[#e8e2d6]">
      <div className="mx-auto flex max-w-[1400px] items-center justify-between px-10 py-6">
        <a href="/" className="font-serif text-2xl tracking-[0.35em] text-[#1a1410]">SERIN</a>
        <nav className="hidden md:flex items-center gap-12 text-[12px] tracking-[0.25em] text-[#1a1410]/80">
          <a href="/about">BRAND</a>
          <a href="/" className="flex items-center gap-1">COLLECTIONS <ChevronDown className="h-3 w-3" /></a>
          <a href="#">GALLERY</a>
          <a href="#">TRACE</a>
          <a href="/showroom">SHOWROOM</a>
        </nav>
        <div className="flex items-center gap-6 text-[10px] tracking-[0.25em] text-[#1a1410]/70">
          <button className="flex flex-col items-center gap-1"><ShoppingBag className="h-5 w-5" strokeWidth={1.2} />CART</button>
          <button className="flex flex-col items-center gap-1"><User className="h-5 w-5" strokeWidth={1.2} />MY ACCOUNT</button>
        </div>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section className="relative bg-[#1a1410] text-[#efe9df] overflow-hidden">
      <div className="mx-auto grid max-w-[1400px] grid-cols-1 md:grid-cols-2 gap-10 px-10 py-20">
        <div>
          <div className="text-[11px] tracking-[0.4em] text-[#efe9df]/70 mb-8">SERIN PHOTO BAR</div>
          <h1 className="font-serif text-6xl md:text-7xl leading-[1.05] mb-8">CUSTOMIZE<br />YOUR STORY</h1>
          <p className="text-[13px] leading-[1.9] text-[#efe9df]/75 max-w-md">
            당신의 순간을, 세상에 하나뿐인 포토바로 간직하세요.<br />
            사진과 문구를 새기면 나만의 실버 바가 완성됩니다.
          </p>
        </div>
        <div className="relative">
          <img src={photoHero} alt="Photo bar in box" className="w-full h-full object-cover rounded-sm" />
        </div>
      </div>
    </section>
  );
}

function Stepper() {
  return (
    <div className="mx-auto max-w-[1100px] px-10 py-12">
      <div className="flex items-center justify-between gap-4">
        {steps.map((s, i) => (
          <div key={s.n} className="flex items-center flex-1 last:flex-none">
            <div className="flex items-center gap-3">
              <div className={`h-9 w-9 rounded-full flex items-center justify-center text-sm ${s.active ? "bg-[#1a1410] text-[#efe9df]" : "border border-[#cfc6b6] text-[#1a1410]/40"}`}>
                {s.n}
              </div>
              <span className={`text-[13px] ${s.active ? "text-[#1a1410] font-medium" : "text-[#1a1410]/40"}`}>{s.label}</span>
            </div>
            {i < steps.length - 1 && <div className="flex-1 h-px bg-[#e0d8c8] mx-6" />}
          </div>
        ))}
      </div>
    </div>
  );
}

function PreviewPane() {
  const [active, setActive] = useState(0);
  return (
    <div>
      <div className="relative bg-[#0e0a07] aspect-[4/5] flex items-center justify-center overflow-hidden">
        <img src={thumbs[active]} alt="Preview" className="max-h-[85%] object-contain" />
        <p className="absolute bottom-6 left-0 right-0 text-center text-[11px] tracking-[0.2em] text-[#efe9df]/50">
          이미지를 드래그하거나 클릭하여 크게 볼 수 있습니다.
        </p>
      </div>
      <div className="grid grid-cols-4 gap-3 mt-3">
        {thumbs.map((t, i) => (
          <button
            key={i}
            onClick={() => setActive(i)}
            className={`bg-[#0e0a07] aspect-square overflow-hidden border ${active === i ? "border-[#1a1410]" : "border-transparent"}`}
          >
            <img src={t} alt="" className="w-full h-full object-cover opacity-90" />
          </button>
        ))}
      </div>
    </div>
  );
}

function ConfigPanel() {
  const [size, setSize] = useState(1);
  const [msg, setMsg] = useState("");

  return (
    <div className="bg-[#faf7f1] border border-[#ece5d5] p-10 space-y-10">
      <div>
        <h3 className="text-[14px] font-semibold tracking-wider mb-5 text-[#1a1410]">1. SIZE 선택</h3>
        <div className="grid grid-cols-5 gap-3">
          {sizes.map((s, i) => (
            <button
              key={s.label}
              onClick={() => setSize(i)}
              className={`py-4 px-2 text-center rounded-sm border transition-colors ${
                size === i ? "border-[#1a1410] bg-[#f0e9d9]" : "border-[#e0d8c8] bg-white hover:border-[#cfc6b6]"
              }`}
            >
              <div className="text-base font-medium text-[#1a1410]">{s.label}</div>
              <div className="text-[11px] text-[#1a1410]/60 mt-1">{s.price}</div>
            </button>
          ))}
        </div>
        <p className="text-[11px] text-[#1a1410]/60 mt-3">※ 300g 이상 제품은 쇼룸 방문 수령만 가능합니다.</p>
      </div>

      <div>
        <h3 className="text-[14px] font-semibold tracking-wider mb-5 text-[#1a1410]">2. PHOTO 업로드</h3>
        <div className="grid grid-cols-2 gap-8">
          <label className="border border-dashed border-[#cfc6b6] bg-white rounded-sm p-10 text-center cursor-pointer hover:border-[#1a1410] transition-colors">
            <Upload className="h-7 w-7 mx-auto text-[#1a1410]/60" strokeWidth={1.2} />
            <div className="mt-4 text-sm text-[#1a1410]">사진을 업로드해주세요</div>
            <div className="mt-1 text-[11px] text-[#1a1410]/50">JPG, PNG 파일 (최대 10MB)</div>
            <span className="inline-block mt-5 px-5 py-2 text-[12px] border border-[#1a1410]/30 text-[#1a1410]">파일 선택</span>
            <input type="file" className="hidden" accept="image/*" />
          </label>
          <div>
            <div className="text-sm font-medium text-[#1a1410] mb-3">가이드</div>
            <ul className="space-y-3 text-[13px] text-[#1a1410]/75 leading-relaxed">
              <li>• 고화질의 사진을 권장합니다.</li>
              <li>• 인물과 얼굴이 선명한 사진이 좋아요.</li>
              <li>• 밝고 선명한 사진일수록<br />&nbsp;&nbsp;&nbsp;더 좋은 결과물을 제공합니다.</li>
            </ul>
          </div>
        </div>
      </div>

      <div>
        <h3 className="text-[14px] font-semibold tracking-wider mb-5 text-[#1a1410]">3. MESSAGE (선택)</h3>
        <div className="relative">
          <input
            value={msg}
            onChange={(e) => setMsg(e.target.value.slice(0, 30))}
            placeholder="각인하고 싶은 문구를 입력하세요"
            className="w-full bg-white border border-[#e0d8c8] rounded-sm px-4 py-3 text-sm focus:outline-none focus:border-[#1a1410]"
          />
          <span className="absolute right-4 top-1/2 -translate-y-1/2 text-[11px] text-[#1a1410]/50">{msg.length} / 30</span>
        </div>
        <p className="text-[11px] text-[#1a1410]/60 mt-2">영문, 숫자, 일부 특수문자만 입력 가능합니다.</p>
      </div>

      <div>
        <h3 className="text-[14px] font-semibold tracking-wider mb-4 text-[#1a1410]">4. IMPORTANT NOTICE</h3>
        <div className="bg-[#f5ecd9] border border-[#e6d9b7] rounded-sm p-5 text-[12px] text-[#5a4a2e] space-y-2 leading-relaxed">
          <p>• 주문 후 제작이 진행되며, 제작 완료 후 순차 안내 및 출고가 진행됩니다.</p>
          <p>• 사진 / 문구 변경은 제작 진까지만 가능합니다.</p>
          <p>• 주문제작 상품 특성상 교환 및 환불이 불가합니다.</p>
          <p>• 제품은 실제 색상과 차이가 있을 수 있습니다.</p>
        </div>
      </div>

      <div className="flex items-stretch gap-3">
        <button className="flex-1 bg-[#1a1410] text-[#efe9df] py-4 text-sm tracking-[0.3em] hover:bg-[#2a2018] transition-colors">
          장바구니 담기
        </button>
        <button className="w-14 border border-[#e0d8c8] bg-white flex items-center justify-center hover:border-[#1a1410]">
          <Heart className="h-5 w-5 text-[#1a1410]/70" strokeWidth={1.4} />
        </button>
      </div>
    </div>
  );
}

function Builder() {
  return (
    <section className="bg-[#f5f1ea]">
      <Stepper />
      <div className="mx-auto max-w-[1400px] px-10 pb-24 grid grid-cols-1 lg:grid-cols-2 gap-10">
        <PreviewPane />
        <ConfigPanel />
      </div>
    </section>
  );
}

function Gallery() {
  return (
    <section className="bg-[#efe9df] py-20">
      <div className="mx-auto max-w-[1400px] px-10">
        <div className="flex items-end justify-between mb-10">
          <div>
            <h2 className="text-xl tracking-[0.3em] text-[#1a1410] font-medium">SAMPLE GALLERY</h2>
            <p className="text-[13px] text-[#1a1410]/70 mt-3">다양한 순간을 SERIN Photo Bar에 담아보세요.</p>
          </div>
          <a href="#" className="text-[12px] tracking-[0.2em] text-[#1a1410] flex items-center gap-2">더 많은 예시 보기 <ArrowRight className="h-4 w-4" /></a>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {gallery.map((g) => (
            <div key={g.label}>
              <div className="bg-[#c9b89a] aspect-[4/5] overflow-hidden">
                <img src={g.img} alt={g.label} className="w-full h-full object-cover" />
              </div>
              <div className="text-center mt-5">
                <div className="text-[13px] tracking-[0.3em] text-[#1a1410] font-medium">{g.label}</div>
                <div className="text-[12px] text-[#1a1410]/65 mt-2">{g.sub}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="bg-[#f5f1ea] border-t border-[#e0d8c8]">
      <div className="mx-auto max-w-[1400px] px-10 py-14 grid grid-cols-1 md:grid-cols-4 gap-10 text-[13px] text-[#1a1410]/75">
        <div>
          <div className="font-serif text-2xl tracking-[0.35em] text-[#1a1410]">SERIN</div>
          <p className="mt-5 leading-relaxed">기억을 간직하는 단 하나의 방법,<br />세린의 실버 포토바.</p>
        </div>
        <div className="space-y-3">
          <p className="flex items-start gap-2"><MapPin className="h-4 w-4 mt-0.5" strokeWidth={1.4} />서울 중구로 돈화문로 11가길 52, 1F SERIN</p>
          <p className="flex items-start gap-2"><Clock className="h-4 w-4 mt-0.5" strokeWidth={1.4} />Mon - Sat 11:00 - 19:00<br /><span className="ml-6 text-[#1a1410]/55">(일요일 및 공휴일 휴무)</span></p>
          <p className="flex items-center gap-2"><Phone className="h-4 w-4" strokeWidth={1.4} />02-1234-5678</p>
          <p className="flex items-center gap-2"><Mail className="h-4 w-4" strokeWidth={1.4} />hello@serin.com</p>
        </div>
        <div className="space-y-3">
          <p className="flex items-center gap-2"><Instagram className="h-4 w-4" strokeWidth={1.4} />Instagram</p>
          <p className="flex items-center gap-2"><MessageCircle className="h-4 w-4" strokeWidth={1.4} />Kakao Channel</p>
          <p className="flex items-center gap-2"><Youtube className="h-4 w-4" strokeWidth={1.4} />YouTube</p>
        </div>
        <div className="space-y-3 md:text-right">
          <p>이용약관</p>
          <p>개인정보처리방침</p>
          <p>사업자정보확인</p>
        </div>
      </div>
      <div className="border-t border-[#e0d8c8] py-5 text-center text-[11px] text-[#1a1410]/50">© SERIN. All Rights Reserved.</div>
    </footer>
  );
}

function CustomizePage() {
  return (
    <main className="bg-[#f8f5f0] min-h-screen">
      <TopNav />
      <Hero />
      <Builder />
      <Gallery />
      <Footer />
    </main>
  );
}
