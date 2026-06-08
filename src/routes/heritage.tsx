import { createFileRoute, Link } from "@tanstack/react-router";
import { Navbar } from "@/components/site/Navbar";
import { Footer } from "@/components/site/Footer";
import { ArrowRight, Sun, ShieldCheck, BadgeCheck } from "lucide-react";
import heroImg from "@/assets/heritage-hero.jpg";
import detail1 from "@/assets/detail-1.jpg";
import detail2 from "@/assets/detail-2.jpg";
import detail3 from "@/assets/detail-3.jpg";
import detail4 from "@/assets/detail-4.jpg";
import prestigeImg from "@/assets/heritage-prestige.jpg";
import packagingImg from "@/assets/heritage-packaging.jpg";
import ctaImg from "@/assets/heritage-cta.jpg";

export const Route = createFileRoute("/heritage")({
  head: () => ({
    meta: [
      { title: "Korea Heritage Bar — SERIN" },
      { name: "description", content: "SERIN Korea Heritage Bar — fine silver 999.9, engraved with the Korean peninsula and Shipjangsaeng motifs." },
      { property: "og:title", content: "Korea Heritage Bar — SERIN" },
      { property: "og:description", content: "Timeless heritage, precious silver 999.9. Hand-finished 1kg prestige bar." },
      { property: "og:url", content: "/heritage" },
      { property: "og:type", content: "product" },
      { property: "og:image", content: heroImg },
    ],
    links: [{ rel: "canonical", href: "/heritage" }],
  }),
  component: HeritagePage,
});

function HeritagePage() {
  return (
    <div className="min-h-screen bg-background font-sans text-foreground">
      <Navbar />
      <main>
        <HeritageHero />
        <HeritageStory />
        <HeritageDetails />
        <HeritageSpecs />
        <HeritagePackaging />
        <HeritageTrust />
        <HeritageCTA />
      </main>
      <Footer />
    </div>
  );
}

/* ---------------- HERO ---------------- */
function HeritageHero() {
  return (
    <section className="relative h-[760px] w-full overflow-hidden">
      <img
        src={heroImg}
        alt="Korea Heritage Bar in lacquered jewelry box"
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-background/85 via-background/30 to-transparent" />
      <div className="relative mx-auto flex h-full max-w-[1400px] items-center px-10">
        <div className="max-w-xl">
          <p className="font-sans text-[11px] tracking-[0.35em] text-foreground/70">
            SIGNATURE COLLECTION
          </p>
          <h1 className="mt-6 font-serif text-6xl leading-[1.05] text-foreground md:text-7xl">
            Korea
            <br />
            Heritage Bar
          </h1>
          <p className="mt-8 font-serif text-lg italic text-foreground/80">
            Timeless Heritage,
            <br />
            Precious Silver 999.9
          </p>
          <div className="mt-10 flex items-center gap-4">
            <button className="bg-foreground px-7 py-3.5 text-[11px] tracking-[0.3em] text-background transition-colors hover:bg-foreground/85">
              EXPLORE COLLECTION
            </button>
            <button className="px-2 py-3.5 text-[11px] tracking-[0.3em] text-foreground/80 transition-colors hover:text-foreground">
              PURCHASE
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------------- STORY ---------------- */
function HeritageStory() {
  return (
    <section className="bg-[#f5f1ea]">
      <div className="mx-auto grid max-w-[1400px] grid-cols-1 gap-16 px-10 py-24 md:grid-cols-3">
        <div>
          <p className="font-sans text-[11px] tracking-[0.35em] text-foreground/60">
            HERITAGE STORY
          </p>
          <h2 className="mt-6 font-serif text-3xl leading-snug text-foreground">
            한반도와 십장생,
            <br />
            한국의 아름다움을 담다
          </h2>
          <p className="mt-6 font-sans text-sm leading-7 text-foreground/70">
            한반도의 형태와 십장생의 상징을 새겨
            <br />
            한국의 정체성과 전통의 가치를
            <br />
            순은에 담아냈습니다.
          </p>
        </div>

        <StoryIcon
          title="한반도"
          icon={
            <svg viewBox="0 0 60 80" className="h-16 w-12" fill="none" stroke="currentColor" strokeWidth="1.2">
              <path d="M30 6 C 38 14, 36 22, 32 28 C 40 30, 42 38, 36 44 C 44 48, 42 58, 34 62 C 38 70, 30 76, 24 72 C 18 76, 12 68, 18 60 C 10 56, 14 46, 22 44 C 14 38, 18 28, 26 28 C 22 20, 24 12, 30 6 Z" />
            </svg>
          }
          body={`하나 된 땅, 하나 된 마음\n우리의 역사와 미래를 잇는\n상징입니다.`}
        />

        <StoryIcon
          title="십장생"
          icon={
            <svg viewBox="0 0 60 60" className="h-14 w-14" fill="none" stroke="currentColor" strokeWidth="1.2">
              <circle cx="30" cy="30" r="20" />
              <path d="M30 10 L34 26 L50 30 L34 34 L30 50 L26 34 L10 30 L26 26 Z" />
            </svg>
          }
          body={`장수와 번영, 평안과 풍요를\n기원하는 한국의 전통적\n상징입니다.`}
        />
      </div>
    </section>
  );
}

function StoryIcon({ title, icon, body }: { title: string; icon: React.ReactNode; body: string }) {
  return (
    <div className="flex gap-6">
      <div className="shrink-0 text-foreground/70">{icon}</div>
      <div>
        <h3 className="font-serif text-xl text-foreground">{title}</h3>
        <p className="mt-3 whitespace-pre-line font-sans text-sm leading-7 text-foreground/70">
          {body}
        </p>
      </div>
    </div>
  );
}

/* ---------------- DETAILS ---------------- */
function HeritageDetails() {
  const items = [
    { src: detail1, label: "한반도 각인" },
    { src: detail2, label: "십장생 디자인" },
    { src: detail3, label: "순은 999.9" },
    { src: detail4, label: "홀마크 인증" },
  ];
  return (
    <section className="bg-[#efe9df]">
      <div className="mx-auto grid max-w-[1400px] grid-cols-1 gap-12 px-10 py-24 md:grid-cols-[1fr_2.4fr]">
        <div>
          <p className="font-sans text-[11px] tracking-[0.35em] text-foreground/60">DETAILS</p>
          <h2 className="mt-6 font-serif text-3xl leading-snug text-foreground">
            섬세한 디테일,
            <br />
            변치 않는 가치
          </h2>
          <p className="mt-6 font-sans text-sm leading-7 text-foreground/70">
            정교한 각인과 순은의 빛이 만나
            <br />
            시간이 지나도 변하지 않는
            <br />
            가치를 완성합니다.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-5 md:grid-cols-4">
          {items.map((i) => (
            <figure key={i.label}>
              <div className="aspect-square overflow-hidden bg-muted">
                <img
                  src={i.src}
                  alt={i.label}
                  loading="lazy"
                  className="h-full w-full object-cover"
                />
              </div>
              <figcaption className="mt-4 text-center font-sans text-xs tracking-[0.2em] text-foreground/70">
                {i.label}
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- SPECS ---------------- */
function HeritageSpecs() {
  return (
    <section className="bg-[#e8e2d6]">
      <div className="mx-auto grid max-w-[1400px] grid-cols-1 items-stretch md:grid-cols-2">
        <div className="relative min-h-[520px]">
          <img
            src={prestigeImg}
            alt="Korea Heritage Bar Prestige 1kg"
            loading="lazy"
            className="absolute inset-0 h-full w-full object-cover"
          />
        </div>
        <div className="flex items-center bg-[#f3eee5] px-10 py-20 md:px-16">
          <div className="w-full max-w-md">
            <p className="font-sans text-[11px] tracking-[0.35em] text-foreground/60">
              COLLECTION SIZE
            </p>
            <h2 className="mt-6 font-serif text-5xl text-foreground">Prestige 1kg</h2>
            <div className="mt-8 h-px w-12 bg-foreground/40" />
            <dl className="mt-10 divide-y divide-foreground/15 border-y border-foreground/15 font-sans text-sm">
              <SpecRow term="소재" desc="LBMA Good Delivery Silver 999.9" />
              <SpecRow term="중량" desc="1,000g" />
              <SpecRow term="크기" desc="110 × 60 × 17 mm (±1mm)" />
            </dl>
            <p className="mt-6 font-sans text-xs text-foreground/55">
              * 제품 특성상 중량과 크기는 약간의 오차가 있을 수 있습니다.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function SpecRow({ term, desc }: { term: string; desc: string }) {
  return (
    <div className="grid grid-cols-[100px_1fr] py-4">
      <dt className="text-foreground/60">{term}</dt>
      <dd className="text-foreground">{desc}</dd>
    </div>
  );
}

/* ---------------- PACKAGING ---------------- */
function HeritagePackaging() {
  return (
    <section className="relative h-[520px] w-full overflow-hidden">
      <img
        src={packagingImg}
        alt="Heritage Bar packaging experience"
        loading="lazy"
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-[#f5f1ea]/95 via-[#f5f1ea]/55 to-transparent" />
      <div className="relative mx-auto flex h-full max-w-[1400px] items-center px-10">
        <div className="max-w-sm">
          <p className="font-sans text-[11px] tracking-[0.35em] text-foreground/60">
            PACKAGING EXPERIENCE
          </p>
          <h2 className="mt-6 font-serif text-3xl leading-snug text-foreground">
            오래도록 간직할
            <br />
            소중한 경험
          </h2>
          <p className="mt-6 font-sans text-sm leading-7 text-foreground/70">
            전통의 아름다움과 현대의 품격이
            <br />
            어우러진 패키지에
            <br />
            정성스럽게 담아드립니다.
          </p>
        </div>
      </div>
    </section>
  );
}

/* ---------------- TRUST ---------------- */
function HeritageTrust() {
  return (
    <section className="bg-[#efe9df]">
      <div className="mx-auto grid max-w-[1400px] grid-cols-1 gap-12 px-10 py-20 md:grid-cols-[1.2fr_2.4fr]">
        <div>
          <p className="font-sans text-[11px] tracking-[0.35em] text-foreground/60">
            AUTHENTICITY &amp; TRUST
          </p>
          <h2 className="mt-6 font-serif text-2xl text-foreground">
            신뢰할 수 있는 순은의 가치
          </h2>
        </div>
        <div className="grid grid-cols-1 gap-10 md:grid-cols-3">
          <TrustItem
            icon={<Sun className="h-7 w-7" strokeWidth={1.2} />}
            title="LBMA"
            body={`LBMA Good Delivery\nSilver 999.9`}
          />
          <TrustItem
            icon={<BadgeCheck className="h-7 w-7" strokeWidth={1.2} />}
            title="HALLMARK KOREA"
            body={`검인소 홀마크 인증\n(귀금속법에 의한 인증)`}
          />
          <TrustItem
            icon={<ShieldCheck className="h-7 w-7" strokeWidth={1.2} />}
            title="HIGH PURITY"
            body={`순은 999.9\n프리미엄 품질 보증`}
          />
        </div>
      </div>
    </section>
  );
}

function TrustItem({ icon, title, body }: { icon: React.ReactNode; title: string; body: string }) {
  return (
    <div className="flex gap-5">
      <div className="shrink-0 text-foreground/70">{icon}</div>
      <div>
        <h3 className="font-sans text-sm tracking-[0.25em] text-foreground">{title}</h3>
        <p className="mt-3 whitespace-pre-line font-sans text-sm leading-7 text-foreground/65">
          {body}
        </p>
      </div>
    </div>
  );
}

/* ---------------- CTA ---------------- */
function HeritageCTA() {
  return (
    <section className="relative h-[280px] w-full overflow-hidden">
      <img
        src={ctaImg}
        alt="Korea Heritage Bar"
        loading="lazy"
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-foreground/85 via-foreground/55 to-foreground/10" />
      <div className="relative mx-auto flex h-full max-w-[1400px] items-center justify-between gap-10 px-10">
        <div className="text-background">
          <h3 className="font-serif text-2xl leading-tight">
            Korea Heritage Bar
            <br />
            Prestige 1kg
          </h3>
        </div>
        <div className="flex items-center gap-8">
          <p className="hidden font-sans text-sm text-background/85 md:block">
            시간이 흘러도 변하지 않는 가치, SERIN이 만듭니다.
          </p>
          <button className="flex items-center gap-3 border border-background/70 bg-transparent px-7 py-3.5 text-[11px] tracking-[0.3em] text-background transition-colors hover:bg-background hover:text-foreground">
            PURCHASE NOW
            <ArrowRight className="h-3.5 w-3.5" />
          </button>
        </div>
      </div>
    </section>
  );
}

// satisfy unused import warning during dev: keep Link import if later used
void Link;
