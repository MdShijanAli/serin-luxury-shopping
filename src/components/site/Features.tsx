import { ShieldCheck, Recycle, Package, Truck } from "lucide-react";

const features = [
  { icon: ShieldCheck, title: "정품 순은 999.9", sub: "한국금거래소 품질 보증" },
  { icon: Recycle, title: "한국의 미를 담은 디자인", sub: "전통과 현대의 조화" },
  { icon: Package, title: "프리미엄 패키지", sub: "자개장 & 품질 보증서" },
  { icon: Truck, title: "안심 배송", sub: "안전하고 신속하게" },
];

export function Features() {
  return (
    <section className="border-t border-border bg-background">
      <div className="mx-auto grid max-w-[1400px] grid-cols-1 gap-10 px-10 py-14 md:grid-cols-4">
        {features.map((f) => (
          <div key={f.title} className="flex items-center gap-5">
            <f.icon className="h-9 w-9 text-foreground/70" strokeWidth={1.1} />
            <div>
              <p className="font-sans text-sm text-foreground">{f.title}</p>
              <p className="mt-1 font-sans text-xs text-muted-foreground">{f.sub}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
