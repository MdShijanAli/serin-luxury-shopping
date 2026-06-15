import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { Minus, Plus, Truck, Building2, Info, FileCheck, BadgeCheck, ShieldCheck, Home } from "lucide-react";
import { Navbar } from "@/components/site/Navbar";
import heritageImg from "@/assets/heritage-prestige.jpg";
import pb100 from "@/assets/size-100g.jpg";
import pb10 from "@/assets/size-10g.jpg";

export const Route = createFileRoute("/cart")({
  head: () => ({
    meta: [
      { title: "장바구니 — SERIN" },
      { name: "description", content: "선택한 SERIN 컬렉션을 확인하세요." },
    ],
  }),
  component: CartPage,
});

type Item = {
  id: string;
  name: string;
  ko: string;
  purity: string;
  weight: string;
  price: number;
  qty: number;
  img: string;
  pickup: "showroom" | "ship";
};

function CartPage() {
  const [items, setItems] = useState<Item[]>([
    { id: "1", name: "Korea Heritage Bar 1kg", ko: "코리아 헤리티지 바 1kg", purity: "순은 999.9", weight: "1000g", price: 2200000, qty: 1, img: heritageImg, pickup: "showroom" },
    { id: "2", name: "Photo Bar 100g", ko: "포토 바 100g", purity: "순은 999.9", weight: "100g", price: 330000, qty: 1, img: pb100, pickup: "ship" },
    { id: "3", name: "Photo Bar 10g", ko: "포토 바 10g", purity: "순은 999.9", weight: "10g", price: 45000, qty: 1, img: pb10, pickup: "ship" },
  ]);

  const set = (id: string, qty: number) => setItems((p) => p.map((i) => (i.id === id ? { ...i, qty: Math.max(1, qty) } : i)));
  const remove = (id: string) => setItems((p) => p.filter((i) => i.id !== id));

  const pickup = items.filter((i) => i.pickup === "showroom");
  const pickupTotal = pickup.reduce((s, i) => s + i.price * i.qty, 0);
  const shipTotal = items.filter((i) => i.pickup === "ship").reduce((s, i) => s + i.price * i.qty, 0);
  const preDeposit = Math.round(pickupTotal * 0.1);
  const grandTotal = preDeposit + shipTotal;

  return (
    <div className="min-h-screen bg-[#f8f5f0] font-sans text-[#1a1410]">
      <div className="border-b border-black/5 bg-white"><Navbar /></div>

      <div className="mx-auto max-w-[1400px] px-10 pt-16 pb-24">
        <h1 className="font-serif text-5xl">장바구니</h1>
        <p className="mt-4 text-sm text-foreground/60">선택한 컬렉션을 확인하세요.</p>

        <div className="mt-12 grid grid-cols-1 gap-10 lg:grid-cols-[1fr_360px]">
          <div>
            <div className="grid grid-cols-[1fr_140px_140px_140px] border-b border-black/10 pb-3 text-xs text-foreground/60">
              <span>상품 정보</span><span className="text-center">가격</span><span className="text-center">수량</span><span className="text-right">금액</span>
            </div>
            {items.map((it) => (
              <div key={it.id} className="grid grid-cols-[1fr_140px_140px_140px] items-center gap-4 border-b border-black/10 py-8">
                <div className="flex gap-6">
                  <img src={it.img} alt={it.name} className="h-32 w-32 object-cover" />
                  <div className="text-sm">
                    <p className="font-serif text-xl">{it.name}</p>
                    <p className="mt-1 text-foreground/60">{it.ko}</p>
                    <p className="mt-3 text-xs text-foreground/60">{it.purity} &nbsp;|&nbsp; {it.weight}</p>
                    <p className="mt-3 flex items-center gap-2 text-xs text-foreground/70">
                      {it.pickup === "showroom" ? <Building2 className="h-4 w-4" strokeWidth={1.2} /> : <Truck className="h-4 w-4" strokeWidth={1.2} />}
                      {it.pickup === "showroom" ? "쇼룸 방문 수령 상품" : "배송 가능 상품"}
                    </p>
                    <p className="mt-1 text-[11px] text-foreground/50">
                      {it.pickup === "showroom" ? "주문 시 10% 선결제 후 제작이 진행됩니다." : "결제 완료 후 배송이 진행됩니다."}
                    </p>
                  </div>
                </div>
                <div className="text-center text-sm">{it.price.toLocaleString()} KRW</div>
                <div className="flex flex-col items-center gap-2">
                  <div className="flex items-center border border-black/15">
                    <button onClick={() => set(it.id, it.qty - 1)} className="px-3 py-2"><Minus className="h-3 w-3" /></button>
                    <span className="w-8 text-center text-sm">{it.qty}</span>
                    <button onClick={() => set(it.id, it.qty + 1)} className="px-3 py-2"><Plus className="h-3 w-3" /></button>
                  </div>
                  <button onClick={() => remove(it.id)} className="text-xs text-foreground/50 underline underline-offset-2">삭제</button>
                </div>
                <div className="text-right text-sm">{(it.price * it.qty).toLocaleString()} KRW</div>
              </div>
            ))}

            <div className="mt-8 border border-black/10 bg-white/40 p-6">
              <div className="flex items-start gap-3 text-xs text-foreground/70">
                <Info className="mt-0.5 h-4 w-4" strokeWidth={1.2} />
                <div>
                  <p className="mb-2 font-medium text-[#1a1410]">안내 사항</p>
                  <ul className="space-y-1.5 leading-relaxed">
                    <li>· 300g 이상 고중량 컬렉션은 안전한 전달을 위해 쇼룸 방문 수령으로 진행됩니다.</li>
                    <li>· 쇼룸 방문 수령 상품은 주문 시 10%를 선결제 하며, 잔금은 상품 수령 시 쇼룸에서 결제해 주세요.</li>
                    <li>· 배송 상품은 결제 완료 후 영업일 기준 1~3일 이내 출고됩니다.</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <aside className="h-fit border border-black/10 bg-white/50 p-7">
            <h3 className="font-serif text-2xl">주문 요약</h3>
            <div className="mt-6 aspect-[4/3] bg-[#eae5db]" />
            <div className="mt-6 flex items-center justify-between border-b border-black/10 pb-4 text-sm">
              <span className="flex items-center gap-2"><Building2 className="h-4 w-4" strokeWidth={1.2} /> 쇼룸 수령 상품 ({pickup.length}개)</span>
              <span className="font-medium">{pickupTotal.toLocaleString()} <span className="text-xs text-foreground/60">KRW</span></span>
            </div>
            <div className="mt-4 flex justify-between text-sm"><span className="text-foreground/65">상품 금액</span><span>{pickupTotal.toLocaleString()} KRW</span></div>
            <div className="mt-3 flex justify-between border-b border-dashed border-black/15 pb-4 text-sm"><span className="text-foreground/65">선결제 금액 (10%)</span><span>{preDeposit.toLocaleString()} KRW</span></div>
            <p className="mt-3 text-[11px] text-foreground/55">잔금 {(pickupTotal - preDeposit).toLocaleString()} KRW는 쇼룸 수령 시 결제됩니다.</p>
            <div className="mt-6 flex items-center justify-between">
              <span className="text-sm">총 결제 예정 금액</span>
              <span className="font-serif text-xl">{grandTotal.toLocaleString()} <span className="text-xs text-foreground/60">KRW</span></span>
            </div>
            <Link to="/checkout" className="mt-8 block w-full bg-[#1a1410] py-4 text-center text-sm tracking-[0.2em] text-white hover:bg-black">주문하기</Link>
            <Link to="/" className="mt-4 block text-center text-xs text-foreground/60">쇼핑 계속하기 →</Link>
          </aside>
        </div>
      </div>

      <section className="border-t border-black/5 bg-white">
        <div className="mx-auto grid max-w-[1400px] grid-cols-2 gap-10 px-10 py-12 md:grid-cols-4">
          <Feat icon={<FileCheck className="h-6 w-6" strokeWidth={1} />} t="품질보증서 포함" d="모든 제품에 품질보증서가 포함됩니다." />
          <Feat icon={<BadgeCheck className="h-6 w-6" strokeWidth={1} />} t="순은 999.9" d="삼덕은 정직한 순은만을 취급합니다." />
          <Feat icon={<ShieldCheck className="h-6 w-6" strokeWidth={1} />} t="안전한 보관 & 제작" d="체계적인 보관과 섬세한 제작으로 최상의 가치를 만듭니다." />
          <Feat icon={<Home className="h-6 w-6" strokeWidth={1} />} t="쇼룸 안내" d="서울특별시 종로구 율곡로 102길 XXX" />
        </div>
      </section>
    </div>
  );
}

function Feat({ icon, t, d }: { icon: React.ReactNode; t: string; d: string }) {
  return (
    <div className="flex items-start gap-4">
      <div className="text-[#1a1410]">{icon}</div>
      <div><p className="text-sm font-medium">{t}</p><p className="mt-1 text-xs text-foreground/60 leading-relaxed">{d}</p></div>
    </div>
  );
}
