import { createFileRoute } from "@tanstack/react-router";
import { Train, Car, Clock, MessageCircle, Check, Award, ShieldCheck, Truck, Building2 } from "lucide-react";
import { Navbar } from "@/components/site/Navbar";
import { Footer } from "@/components/site/Footer";
import heroImg from "@/assets/showroom-hero.jpg";
import interiorImg from "@/assets/showroom-interior.jpg";

export const Route = createFileRoute("/showroom")({
  head: () => ({
    meta: [
      { title: "Showroom — SERIN Fine Silver" },
      { name: "description", content: "Visit the SERIN showroom in Samcheong, Seoul for a private silver bar consultation." },
      { property: "og:title", content: "Showroom — SERIN Fine Silver" },
      { property: "og:description", content: "Visit the SERIN showroom in Samcheong, Seoul for a private silver bar consultation." },
      { property: "og:url", content: "/showroom" },
    ],
    links: [{ rel: "canonical", href: "/showroom" }],
  }),
  component: ShowroomPage,
});

function ShowroomPage() {
  return (
    <div className="min-h-screen bg-[#f8f5f0] font-sans text-[#1a1410]">
      <div className="border-b border-black/5 bg-white">
        <Navbar />
      </div>

      {/* Hero */}
      <section className="mx-auto grid max-w-[1400px] grid-cols-1 gap-12 px-10 py-20 lg:grid-cols-2 lg:items-center">
        <div>
          <div className="mb-10 flex items-center gap-2 text-[11px] tracking-[0.25em] text-foreground/50">
            <span>HOME</span><span>›</span><span>SHOWROOM</span>
          </div>
          <p className="mb-4 text-[11px] tracking-[0.35em] text-foreground/60">SHOWROOM</p>
          <h1 className="font-serif text-5xl leading-tight text-[#1a1410] lg:text-6xl">쇼룸 위치 및 안내</h1>
          <p className="mt-8 max-w-md text-sm leading-relaxed text-foreground/70">
            SERIN 쇼룸은 은괴와 가치를 직접 경험할 수 있는 공간입니다.<br />
            방문 전 제품 수령 및 상담을 위해 안내 사항을 확인해주세요.
          </p>
        </div>
        <div className="relative aspect-[4/3] overflow-hidden">
          <img src={heroImg} alt="SERIN showroom storefront" className="h-full w-full object-cover" />
        </div>
      </section>

      {/* Map + Info */}
      <section className="border-t border-black/5">
        <div className="mx-auto grid max-w-[1400px] grid-cols-1 gap-12 px-10 py-20 lg:grid-cols-2">
          <MapPlaceholder />
          <div className="flex flex-col">
            <p className="text-[11px] tracking-[0.3em] text-foreground/60">SERIN SHOWROOM</p>
            <h2 className="mt-3 font-serif text-3xl text-[#1a1410] lg:text-4xl">서울 종로구 삼일대로 32길 52</h2>
            <p className="mt-2 text-sm text-foreground/60">SERIN 쇼룸 (삼청점)</p>
            <div className="my-8 h-px bg-black/10" />

            <InfoRow icon={<Train className="h-5 w-5" strokeWidth={1.3} />} title="지하철 이용 시">
              <p>3호선 안국역 3번 출구 도보 7분</p>
              <p>5호선 광화문역 2번 출구 도보 12분</p>
            </InfoRow>

            <InfoRow icon={<Car className="h-5 w-5" strokeWidth={1.3} />} title="주차 안내">
              <p>쇼룸 전용 주차 공간은 제공되지 않습니다.</p>
              <p>인근 공영 주차장을 이용해 부탁드립니다.</p>
            </InfoRow>

            <InfoRow icon={<Clock className="h-5 w-5" strokeWidth={1.3} />} title="운영 시간">
              <p>Mon - Sat 10:00 - 19:00 (일요일 및 공휴일 휴무)</p>
              <p>방문 전 연락을 권장드립니다.</p>
            </InfoRow>

            <button className="mt-4 flex w-full items-center justify-center gap-3 bg-[#1a1410] py-5 text-sm tracking-[0.2em] text-white hover:bg-black">
              <MessageCircle className="h-4 w-4" />
              카카오 채널 문의하기
            </button>
          </div>
        </div>
      </section>

      {/* Showroom Guide */}
      <section className="border-t border-black/5 py-24">
        <div className="mx-auto max-w-[1200px] px-10 text-center">
          <h2 className="font-serif text-3xl text-[#1a1410] lg:text-4xl">쇼룸 안내</h2>
          <p className="mx-auto mt-6 max-w-xl text-sm leading-relaxed text-foreground/70">
            SERIN 쇼룸은 프라이빗한 상담을 위한 공간으로,<br />
            방문 고객 여러분만을 위한 서비스입니다.
          </p>

          <div className="mt-16 grid grid-cols-1 gap-12 md:grid-cols-4">
            <GuideItem icon={<DisplayIcon />} title="제품 전시" desc={<>SERIN의 모든 실버바와<br />제품을 직접 보실 수 있습니다.</>} />
            <GuideItem icon={<ConsultIcon />} title="프라이빗 상담" desc={<>전문 상담원과 1:1 상담을 통해<br />맞춤 안내를 받아보세요.</>} />
            <GuideItem icon={<TeaIcon />} title="편안한 공간" desc={<>여유롭고 조용한 분위기에서<br />소중한 가치를 경험하세요.</>} />
            <GuideItem icon={<BagIcon />} title="제품 수령" desc={<>고객님의 주문 제품은<br />사전 연락 후 수령 가능합니다.</>} />
          </div>
        </div>
      </section>

      {/* Visit info */}
      <section className="pb-24">
        <div className="mx-auto max-w-[1400px] px-10">
          <div className="grid grid-cols-1 gap-0 bg-[#efeae0] lg:grid-cols-2">
            <div className="aspect-[4/3] overflow-hidden">
              <img src={interiorImg} alt="SERIN showroom interior" className="h-full w-full object-cover" loading="lazy" />
            </div>
            <div className="flex flex-col justify-center p-12 lg:p-16">
              <h3 className="font-serif text-2xl text-[#1a1410] lg:text-3xl">방문 안내사항</h3>
              <ul className="mt-8 space-y-4 text-sm text-foreground/75">
                {["방문은 제품 수령 및 상담 고객만을 위해 운영됩니다.", "예약 없이 방문 시 대기 시간이 발생할 수 있습니다.", "단체 방문 및 비즈니스 문의는 별도 문의 바랍니다."].map((t) => (
                  <li key={t} className="flex items-start gap-3">
                    <span className="mt-0.5 flex h-4 w-4 items-center justify-center rounded-full border border-foreground/50">
                      <Check className="h-2.5 w-2.5" strokeWidth={2} />
                    </span>
                    {t}
                  </li>
                ))}
              </ul>
              <button className="mt-10 flex w-full max-w-md items-center justify-center gap-3 border border-[#1a1410] py-4 text-sm tracking-[0.2em] text-[#1a1410] hover:bg-[#1a1410] hover:text-white">
                <MessageCircle className="h-4 w-4" />
                카카오 채널 문의하기
              </button>
              <p className="mt-6 text-xs text-foreground/55">쇼룸 방문은 제품 수령 및 상담 고객 대상으로 운영됩니다.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom features */}
      <section className="border-t border-black/5 bg-white">
        <div className="mx-auto grid max-w-[1400px] grid-cols-2 gap-10 px-10 py-14 md:grid-cols-4">
          <Feature icon={<Award className="h-7 w-7" strokeWidth={1} />} title="LBMA 인증 실버" desc="999.9 Fine Silver" />
          <Feature icon={<ShieldCheck className="h-7 w-7" strokeWidth={1} />} title="정품 보증" desc="SERIN 품질 보증서 제공" />
          <Feature icon={<Truck className="h-7 w-7" strokeWidth={1} />} title="안전한 배송" desc="전국 배송 가능 (10g / 100g)" />
          <Feature icon={<Building2 className="h-7 w-7" strokeWidth={1} />} title="쇼룸 수령" desc={<>300g 이상 제품 및<br />Heritage Bar 전용</>} />
        </div>
      </section>

      <Footer />
    </div>
  );
}

function InfoRow({ icon, title, children }: { icon: React.ReactNode; title: string; children: React.ReactNode }) {
  return (
    <div className="mb-6 flex gap-5">
      <div className="mt-1 text-foreground/70">{icon}</div>
      <div className="text-sm leading-relaxed">
        <p className="mb-1.5 font-medium text-[#1a1410]">{title}</p>
        <div className="text-foreground/65">{children}</div>
      </div>
    </div>
  );
}

function GuideItem({ icon, title, desc }: { icon: React.ReactNode; title: string; desc: React.ReactNode }) {
  return (
    <div className="flex flex-col items-center">
      <div className="mb-6 text-[#1a1410]">{icon}</div>
      <h3 className="mb-3 text-sm font-medium tracking-wider text-[#1a1410]">{title}</h3>
      <p className="text-xs leading-relaxed text-foreground/65">{desc}</p>
    </div>
  );
}

function Feature({ icon, title, desc }: { icon: React.ReactNode; title: string; desc: React.ReactNode }) {
  return (
    <div className="flex items-center gap-4">
      <div className="text-[#1a1410]">{icon}</div>
      <div>
        <p className="text-sm font-medium text-[#1a1410]">{title}</p>
        <p className="mt-1 text-xs text-foreground/60">{desc}</p>
      </div>
    </div>
  );
}

function MapPlaceholder() {
  return (
    <div className="relative aspect-square overflow-hidden bg-[#ecebe7]">
      <svg viewBox="0 0 400 400" className="absolute inset-0 h-full w-full">
        <rect width="400" height="400" fill="#ecebe7" />
        {/* roads */}
        <path d="M 0 120 Q 150 110 400 140" stroke="#fff" strokeWidth="10" fill="none" />
        <path d="M 0 260 L 400 240" stroke="#fff" strokeWidth="14" fill="none" />
        <path d="M 80 0 L 100 400" stroke="#fff" strokeWidth="8" fill="none" />
        <path d="M 220 0 L 240 400" stroke="#fff" strokeWidth="10" fill="none" />
        <path d="M 320 0 L 340 400" stroke="#fff" strokeWidth="6" fill="none" />
        <path d="M 0 60 L 400 80" stroke="#fff" strokeWidth="4" fill="none" />
        {/* labels */}
        <g fill="#9a958c" fontSize="10" fontFamily="sans-serif">
          <text x="100" y="50">효자동공원</text>
          <text x="200" y="55">국립현대미술관</text>
          <text x="290" y="135">북촌 한옥마을</text>
          <text x="65" y="200">효자동사거리</text>
          <text x="255" y="170">계동길</text>
          <text x="265" y="290">서울공예박물관</text>
          <text x="60" y="280">안국역</text>
          <text x="60" y="294">3번 출구</text>
        </g>
      </svg>
      {/* Pin */}
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-full">
        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#1a1410] font-serif text-[10px] tracking-widest text-white">SERIN</div>
        <div className="mx-auto h-3 w-3 -translate-y-1 rotate-45 bg-[#1a1410]" />
      </div>
    </div>
  );
}

const DisplayIcon = () => (
  <svg width="40" height="40" viewBox="0 0 40 40" fill="none" stroke="currentColor" strokeWidth="1"><rect x="6" y="10" width="28" height="22" /><path d="M6 16h28M14 22h4M22 22h4M14 26h4M22 26h4" /></svg>
);
const ConsultIcon = () => (
  <svg width="40" height="40" viewBox="0 0 40 40" fill="none" stroke="currentColor" strokeWidth="1"><circle cx="14" cy="14" r="4" /><circle cx="26" cy="14" r="4" /><path d="M6 30c0-4 4-7 8-7s8 3 8 7M18 30c0-4 4-7 8-7s8 3 8 7" /></svg>
);
const TeaIcon = () => (
  <svg width="40" height="40" viewBox="0 0 40 40" fill="none" stroke="currentColor" strokeWidth="1"><path d="M10 16h18v10a6 6 0 0 1-6 6h-6a6 6 0 0 1-6-6V16zM28 18h3a3 3 0 0 1 0 6h-3M16 8c0 2-2 2-2 4M22 8c0 2-2 2-2 4" /></svg>
);
const BagIcon = () => (
  <svg width="40" height="40" viewBox="0 0 40 40" fill="none" stroke="currentColor" strokeWidth="1"><path d="M10 14h20l-2 20H12L10 14zM15 14a5 5 0 0 1 10 0M20 22v6M18 24l4 2" /></svg>
);
