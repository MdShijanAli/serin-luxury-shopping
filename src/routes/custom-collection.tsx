import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/site/Navbar";
import { Footer } from "@/components/site/Footer";
import { ArrowRight, Image as ImageIcon, MessageSquare, Hammer, Package, Truck, Lock, Gift, Users, Baby, Award } from "lucide-react";
import heroImg from "@/assets/photobar-hero.jpg";
import detailsImg from "@/assets/photobar-details.jpg";
import packagingImg from "@/assets/photobar-packaging.jpg";
import giftImg from "@/assets/photobar-gift.jpg";
import mGolf from "@/assets/moment-golf.jpg";
import mGrad from "@/assets/moment-graduation.jpg";
import mMil from "@/assets/moment-military.jpg";
import mCouple from "@/assets/moment-couple.jpg";
import mTravel from "@/assets/moment-travel.jpg";
import mAnn from "@/assets/moment-anniversary.jpg";
import mFam from "@/assets/moment-family.jpg";
import mKeep from "@/assets/moment-keepsake.jpg";
import s10 from "@/assets/size-10g.jpg";
import s100 from "@/assets/size-100g.jpg";
import s300 from "@/assets/size-300g.jpg";
import s500 from "@/assets/size-500g.jpg";
import s1000 from "@/assets/size-1000g.jpg";

export const Route = createFileRoute("/custom-collection")({
  head: () => ({
    meta: [
      { title: "Custom Collection — 삼덕 포토바 | SERIN" },
      { name: "description", content: "당신의 순간을 순은에 새기다. SERIN 삼덕 포토바 커스텀 컬렉션 — 10g부터 1000g까지, 정성스럽게 제작됩니다." },
      { property: "og:title", content: "Custom Collection — 삼덕 포토바" },
      { property: "og:description", content: "사진 한 장이 오래도록 남을 가치가 됩니다." },
      { property: "og:url", content: "/custom-collection" },
      { property: "og:type", content: "product" },
      { property: "og:image", content: heroImg },
    ],
    links: [{ rel: "canonical", href: "/custom-collection" }],
  }),
  component: CustomCollectionPage,
});

function CustomCollectionPage() {
  return (
    <div className="min-h-screen bg-[#f5f1ea] font-sans text-foreground">
      <Navbar />
      <main>
        <Hero />
        <Moments />
        <Steps />
        <Sizes />
        <Details />
        <GiftSection />
      </main>
      <Footer />
    </div>
  );
}

/* ---------------- HERO ---------------- */
function Hero() {
  return (
    <section className="relative w-full h-[92vh] min-h-[640px] overflow-hidden bg-[#1a1410]">
      <img src={heroImg} alt="삼덕 포토바" className="absolute inset-0 w-full h-full object-cover opacity-95" />
      <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/40 to-transparent" />
      <div className="relative h-full max-w-[1400px] mx-auto px-8 lg:px-16 flex items-center">
        <div className="max-w-xl text-white pt-24">
          <p className="text-[11px] tracking-[0.32em] mb-6 text-white/70">CUSTOM COLLECTION</p>
          <div className="inline-block bg-[#e8e2d6] text-[#1a1410] px-6 py-4 mb-10">
            <p className="font-serif text-2xl">삼덕 포토바</p>
          </div>
          <p className="font-serif text-4xl lg:text-5xl leading-[1.15] mb-6 text-white">
            당신의 순간을<br />순은에 새기다
          </p>
          <p className="text-sm leading-relaxed text-white/70 mb-10">
            사진 한 장이<br />오래도록 남을 가치가 됩니다.
          </p>
          <button className="group inline-flex items-center gap-3 border border-white/70 text-white px-7 py-3.5 text-[11px] tracking-[0.28em] hover:bg-white hover:text-[#1a1410] transition">
            CREATE YOURS
            <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
          </button>
        </div>
      </div>
    </section>
  );
}

/* ---------------- MOMENTS ---------------- */
const moments = [
  { img: mGolf, name: "Golf", sub: "Hole-in-One Moment" },
  { img: mGrad, name: "Graduation", sub: "A New Beginning" },
  { img: mMil, name: "Military", sub: "Proud Moment" },
  { img: mCouple, name: "Couple", sub: "Together, Always" },
  { img: mTravel, name: "Travel", sub: "Memories from Korea" },
  { img: mAnn, name: "Anniversary", sub: "A Day to Remember" },
  { img: mFam, name: "Family", sub: "Precious Family" },
  { img: mKeep, name: "Keepsake", sub: "My Special Story" },
];

function Moments() {
  return (
    <section className="py-24 bg-[#f5f1ea]">
      <div className="max-w-[1400px] mx-auto px-8 lg:px-16">
        <p className="text-center text-[11px] tracking-[0.32em] text-foreground/60 mb-5">FOR YOUR MOMENTS</p>
        <h2 className="text-center font-serif text-3xl lg:text-4xl text-foreground mb-16">
          모든 순간은, 오래도록 기억될 가치가 있습니다.
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-4">
          {moments.map((m) => (
            <div key={m.name} className="text-center">
              <div className="aspect-[3/4] overflow-hidden mb-4 bg-[#e8e2d6]">
                <img src={m.img} alt={m.name} loading="lazy" className="w-full h-full object-cover hover:scale-105 transition duration-700" />
              </div>
              <h3 className="font-serif text-base text-foreground mb-1">{m.name}</h3>
              <p className="text-[11px] text-foreground/60 tracking-wide">{m.sub}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- STEPS ---------------- */
const steps = [
  { icon: ImageIcon, n: "01", title: "Upload Photo", sub: "원하는 사진을 업로드하세요." },
  { icon: MessageSquare, n: "02", title: "Add Message", sub: "메시지를 추가하세요." },
  { icon: Hammer, n: "03", title: "Crafted in Silver", sub: "정성스럽게 새겨집니다." },
  { icon: Package, n: "04", title: "Delivered", sub: "7일 이내 제작 및 배송됩니다." },
];

function Steps() {
  return (
    <section className="py-24 bg-[#efe9df]">
      <div className="max-w-[1200px] mx-auto px-8 lg:px-16">
        <p className="text-center text-[11px] tracking-[0.32em] text-foreground/60 mb-5">CREATE YOURS</p>
        <h2 className="text-center font-serif text-3xl lg:text-4xl text-foreground mb-20">
          쉽고 간단한 커스터마이징
        </h2>
        <div className="flex items-center justify-between gap-4 max-w-4xl mx-auto">
          {steps.map((s, i) => (
            <div key={s.n} className="flex items-center gap-4 flex-1">
              <div className="text-center flex-1">
                <s.icon className="w-10 h-10 mx-auto text-foreground/70 mb-3" strokeWidth={1.2} />
                <p className="text-[10px] tracking-[0.28em] text-foreground/50 mb-2">{s.n}</p>
                <h3 className="font-serif text-base mb-1.5">{s.title}</h3>
                <p className="text-[11px] text-foreground/60">{s.sub}</p>
              </div>
              {i < steps.length - 1 && (
                <ArrowRight className="w-4 h-4 text-foreground/30 shrink-0" strokeWidth={1} />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- SIZES ---------------- */
const sizes = [
  { w: "10g", img: s10, name: "Petite", desc: "작은 기념, 여행의 추억\n소중한 마음을 담아" },
  { w: "100g", img: s100, name: "Signature", desc: "가장 인기 있는 사이즈\n선물용으로 추천" },
  { w: "300g", img: s300, name: "Prestige", desc: "더 특별한 순간을 위한\n프리미엄 선택" },
  { w: "500g", img: s500, name: "Prestige", desc: "기념일, 감사의 마음을\n더 가치있게" },
  { w: "1000g", img: s1000, name: "Prestige", desc: "가장 큰 감동을 전하는\n최고의 선택" },
];

function Sizes() {
  return (
    <section className="py-24 bg-[#f5f1ea]">
      <div className="max-w-[1400px] mx-auto px-8 lg:px-16">
        <p className="text-center text-[11px] tracking-[0.32em] text-foreground/60 mb-5">COLLECTION SIZE</p>
        <h2 className="text-center font-serif text-3xl lg:text-4xl text-foreground mb-16">
          다양한 사이즈로, 당신의 순간에 맞게
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5 mb-10">
          {sizes.map((s) => (
            <div key={s.w} className="bg-[#efe9df] p-6 rounded-sm">
              <div className="relative aspect-[3/4] mb-5 overflow-hidden">
                <span className="absolute top-3 left-3 font-serif text-2xl text-foreground/80 z-10">{s.w}</span>
                <img src={s.img} alt={`${s.w} ${s.name}`} loading="lazy" className="w-full h-full object-cover" />
              </div>
              <h3 className="font-serif text-lg text-center mb-2">{s.name}</h3>
              <p className="text-[11px] text-foreground/60 text-center leading-relaxed whitespace-pre-line">{s.desc}</p>
            </div>
          ))}
        </div>
        <div className="bg-[#efe9df] px-10 py-7 flex flex-col md:flex-row items-center justify-center gap-12 rounded-sm">
          <div className="flex items-center gap-5">
            <Truck className="w-9 h-9 text-foreground/70" strokeWidth={1.2} />
            <div>
              <p className="font-serif text-base mb-1">10g – 100g</p>
              <p className="text-[11px] text-foreground/60 leading-relaxed">국내 배송 가능<br />7일 이내 제작 및 배송</p>
            </div>
          </div>
          <div className="hidden md:block w-px h-14 bg-foreground/15" />
          <div className="flex items-center gap-5">
            <Lock className="w-9 h-9 text-foreground/70" strokeWidth={1.2} />
            <div>
              <p className="font-serif text-base mb-1">300g – 1000g</p>
              <p className="text-[11px] text-foreground/60 leading-relaxed">Prestige Collection은 안전한 전달을 위해<br />직접 수령으로 제공됩니다.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------------- DETAILS + PACKAGING ---------------- */
function Details() {
  return (
    <section className="grid md:grid-cols-2 bg-[#1a1410] text-white">
      <div className="relative min-h-[460px] overflow-hidden bg-[#f5f1ea]">
        <img src={detailsImg} alt="품질 보증" loading="lazy" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-white/70 via-white/30 to-transparent" />
        <div className="relative p-12 lg:p-16 max-w-md text-[#1a1410]">
          <p className="text-[11px] tracking-[0.32em] text-foreground/60 mb-5">03</p>
          <h3 className="font-serif text-3xl lg:text-4xl leading-tight mb-6">품질 보증</h3>
          <p className="text-xs leading-relaxed text-foreground/70">
            SERIN Photo Bar는 순은 999 정품임을,<br />
            품질보증서와 함께 신뢰할 수 있는<br />
            가치로 보장합니다.
          </p>
          <div className="flex items-center gap-6 mt-8 text-[11px] tracking-[0.2em] text-foreground/60">
            <span>LBMA</span>
            <span>HALLMARK</span>
          </div>
        </div>
      </div>
      <div className="relative min-h-[460px] overflow-hidden">
        <img src={packagingImg} alt="패키지 경험" loading="lazy" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/20 to-transparent" />
        <div className="relative p-12 lg:p-16 max-w-md">
          <p className="text-[11px] tracking-[0.32em] text-white/60 mb-5">PACKAGING EXPERIENCE</p>
          <h3 className="font-serif text-3xl lg:text-4xl leading-tight mb-6">
            정성과 품격을 담은<br />패키지 경험
          </h3>
          <p className="text-xs leading-relaxed text-white/70">
            자개장 케이스의 보증서와 함께<br />소중히 전달됩니다.
          </p>
        </div>
      </div>
    </section>
  );
}

/* ---------------- GIFT CTA ---------------- */
function GiftSection() {
  return (
    <>
      <section className="relative h-[420px] overflow-hidden bg-[#0f0c0a]">
        <img src={giftImg} alt="A Gift That Lasts" loading="lazy" className="absolute inset-0 w-full h-full object-cover opacity-90" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent" />
        <div className="relative h-full max-w-[1400px] mx-auto px-8 lg:px-16 flex items-center">
          <div className="max-w-md text-white">
            <p className="text-[11px] tracking-[0.32em] text-white/60 mb-5">A GIFT THAT LASTS</p>
            <h3 className="font-serif text-3xl lg:text-4xl leading-tight mb-6">
              평범한 사진이 아닌,<br />오래도록 간직될 수 있는 가치로
            </h3>
            <p className="text-xs leading-relaxed text-white/70 mb-8">
              사랑하는 사람, 감사한 마음.<br />
              특별한 순간을 SERIN Photo Bar에 담아보세요.
            </p>
            <div className="flex items-center gap-7 text-[11px] tracking-[0.2em] text-white/80">
              <span className="flex items-center gap-2"><Gift className="w-4 h-4" strokeWidth={1.2} />기념 선물</span>
              <span className="flex items-center gap-2"><Users className="w-4 h-4" strokeWidth={1.2} />부모님 선물</span>
              <span className="flex items-center gap-2"><Baby className="w-4 h-4" strokeWidth={1.2} />자녀 선물</span>
              <span className="flex items-center gap-2"><Award className="w-4 h-4" strokeWidth={1.2} />감사·환갑 선물</span>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-[#e8e2d6] py-10">
        <div className="max-w-[1400px] mx-auto px-8 lg:px-16 flex flex-col md:flex-row items-center justify-center gap-8">
          <p className="font-serif text-xl text-foreground">당신의 순간을, 지금 바로 시작하세요.</p>
          <button className="group inline-flex items-center gap-3 bg-[#1a1410] text-white px-7 py-3.5 text-[11px] tracking-[0.28em] hover:bg-black transition">
            UPLOAD YOUR MOMENT
            <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
          </button>
        </div>
      </section>
    </>
  );
}
