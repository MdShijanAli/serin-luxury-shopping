import { createFileRoute, Link } from "@tanstack/react-router";
import { Building2, CreditCard, MapPin, BadgeCheck, Truck, MessageCircle } from "lucide-react";
import { Navbar } from "@/components/site/Navbar";
import pb10 from "@/assets/size-10g.jpg";
import pb100 from "@/assets/size-100g.jpg";
import pb300 from "@/assets/size-300g.jpg";
import pb500 from "@/assets/size-500g.jpg";
import pb1000 from "@/assets/size-1000g.jpg";
import heritage from "@/assets/heritage-prestige.jpg";

export const Route = createFileRoute("/checkout-showroom")({
  head: () => ({ meta: [{ title: "Checkout (Showroom) — SERIN" }] }),
  component: CheckoutShowroom,
});

const items = [
  { img: pb10, name: "Photo Bar 10g", ko: "포토바 10g 실버바" },
  { img: pb100, name: "Photo Bar 100g", ko: "포토바 100g 실버바" },
  { img: pb300, name: "Photo Bar 300g", ko: "포토바 300g 실버바" },
  { img: pb500, name: "Photo Bar 500g", ko: "포토바 500g 실버바" },
  { img: pb1000, name: "Photo Bar 1000g", ko: "포토바 1000g 실버바" },
  { img: heritage, name: "Korea Heritage Bar Prestige 1kg", ko: "한반도바 프레스티지 1kg" },
];

function CheckoutShowroom() {
  return (
    <div className="min-h-screen bg-[#f8f5f0] font-sans text-[#1a1410]">
      <div className="border-b border-black/5 bg-white"><Navbar /></div>

      <div className="mx-auto max-w-[1400px] px-10 pt-14 pb-24">
        <div className="flex items-start justify-between">
          <div>
            <h1 className="font-serif text-5xl">CHECKOUT</h1>
            <p className="mt-4 text-sm text-foreground/60">주문 정보를 확인하고 주문을 완료해주세요.</p>
          </div>
          <Stepper />
        </div>

        <div className="mt-12 grid grid-cols-1 gap-8 lg:grid-cols-[1fr_400px]">
          <div className="space-y-10">
            <div className="border border-black/10 bg-white/40 p-8">
              <h2 className="mb-6 text-sm font-medium">1. 주문 상품</h2>
              <div>
                {items.map((it, i) => (
                  <div key={i} className="grid grid-cols-[100px_1fr_120px] items-center gap-6 border-b border-black/10 py-5 last:border-b-0">
                    <img src={it.img} alt={it.name} className="aspect-square w-full object-cover" />
                    <div>
                      <p className="font-serif text-xl">{it.name}</p>
                      <p className="mt-1 text-sm text-foreground/60">{it.ko}</p>
                      <p className="mt-1 text-xs text-foreground/50">999.9 Fine Silver</p>
                    </div>
                    <div className="text-right text-sm text-foreground/65">수량 &nbsp; 1개</div>
                  </div>
                ))}
              </div>
            </div>

            <Section n="2" title="주문자 정보">
              <Field label="이름" placeholder="이름을 입력해주세요" />
              <Field label="연락처" placeholder="- 없이 숫자만 입력해주세요" />
              <Field label="이메일" placeholder="이메일을 입력해주세요" />
            </Section>

            <div className="border border-black/10 bg-white/40 p-8">
              <h2 className="mb-6 text-sm font-medium">3. 수령 안내</h2>
              <div className="bg-[#faf0e3] p-6">
                <div className="flex gap-4">
                  <Building2 className="mt-1 h-6 w-6" strokeWidth={1.2} />
                  <div>
                    <p className="text-sm font-medium">쇼룸 수령 전용 주문입니다.</p>
                    <p className="mt-2 text-xs text-foreground/70">300g 이상 제품 또는 Heritage Bar가 포함되어 있어 배송이 제공되지 않습니다.</p>
                    <p className="mt-1 text-xs text-foreground/70">제작이 완료되면 쇼룸 방문 안내 문자를 보내드립니다.</p>
                    <div className="mt-5 flex items-center gap-2 text-sm">
                      <MapPin className="h-4 w-4" strokeWidth={1.2} />
                      <span className="font-medium tracking-wider">SERIN SHOWROOM</span>
                    </div>
                    <p className="ml-6 text-xs text-foreground/60">서울 종로구 율곡로 30-1, SERIN SHOWROOM</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="border border-black/10 bg-white/40 p-8">
              <h2 className="mb-6 text-sm font-medium">4. 결제 안내</h2>
              <div className="grid grid-cols-[1fr_220px] gap-6 bg-[#faf0e3] p-6">
                <div className="flex gap-4">
                  <CreditCard className="mt-1 h-6 w-6" strokeWidth={1.2} />
                  <div>
                    <p className="text-sm font-medium">가상계좌 입금 (선입금 10%)</p>
                    <ul className="mt-3 space-y-1.5 text-xs text-foreground/70">
                      <li>• 선입금 확인 후 제작이 진행됩니다.</li>
                      <li>• 잔금은 상품 수령 후 7일 이내 결제 가능합니다.</li>
                    </ul>
                  </div>
                </div>
                <div className="border-l border-black/10 pl-6">
                  <p className="text-sm font-medium">입금 기한</p>
                  <p className="mt-2 text-xs text-foreground/65">주문 후 24시간 이내</p>
                </div>
              </div>
              <label className="mt-6 flex items-center gap-2 text-xs">
                <input type="checkbox" className="h-4 w-4" />
                주문 내용을 확인했으며, 결제에 동의합니다.
              </label>
              <Link to="/purchase-complete" className="mt-5 block w-full bg-[#1a1410] py-5 text-center text-sm tracking-[0.2em] text-white hover:bg-black">
                주문 접수하기 (가상계좌 발급)
              </Link>
              <p className="mt-3 text-center text-[11px] text-foreground/50">🔒 개인 정보는 안전하게 암호화되어 처리됩니다.</p>
            </div>
          </div>

          <aside className="space-y-6">
            <div className="border border-black/10 bg-white/50 p-7">
              <h3 className="font-serif text-2xl">주문 요약</h3>
              <div className="mt-6 aspect-[4/3] bg-[#e9e4d9]" />
              <div className="mt-6 flex items-center justify-between border-b border-black/10 pb-4 text-sm">
                <span className="flex items-center gap-2"><Building2 className="h-4 w-4" /> 쇼룸 수령 상품 (1개)</span>
                <span className="font-medium">2,200,000 <span className="text-xs">KRW</span></span>
              </div>
              <div className="mt-4 flex justify-between text-sm"><span className="text-foreground/65">상품 금액</span><span>2,200,000 KRW</span></div>
              <div className="mt-3 flex justify-between bg-[#faf0e3] px-3 py-2 text-sm"><span>선결제 금액 (10%)</span><span>220,000 KRW</span></div>
              <p className="mt-3 text-[11px] text-foreground/55">잔금 1,980,000 KRW는 쇼룸 수령 시 결제됩니다.</p>
              <div className="my-5 h-px bg-black/10" />
              <div className="flex items-center justify-between"><span className="text-sm">총 결제 예정 금액</span><span className="font-serif text-xl">595,000 <span className="text-xs">KRW</span></span></div>
              <div className="mt-5 h-40 bg-[#e9e4d9]" />
            </div>

            <div className="border border-black/10 bg-white/50 p-6">
              <p className="text-sm font-medium">안내 사항</p>
              <ul className="mt-4 space-y-2 text-xs text-foreground/70 leading-relaxed">
                <li>• 제작 완료 후 3-5일 이내 쇼룸 방문 안내 문자를 발송합니다.</li>
                <li>• 쇼룸 수령 시, 주문자 본인 확인 후 수령 가능합니다.</li>
                <li>• 잔금은 상품 수령 후 7일 이내 결제 가능합니다.</li>
                <li>• 주문 취소는 입금 전까지 가능합니다.</li>
                <li>• 기타 문의사항은 고객센터로 연락 부탁드립니다.</li>
              </ul>
            </div>
          </aside>
        </div>
      </div>

      <section className="border-t border-black/5 bg-white">
        <div className="mx-auto grid max-w-[1400px] grid-cols-2 gap-10 px-10 py-12 md:grid-cols-4">
          <Feat icon={<BadgeCheck className="h-7 w-7" strokeWidth={1} />} t="LBMA 인증 실버" d="999.9 FINE SILVER" />
          <Feat icon={<Truck className="h-7 w-7" strokeWidth={1} />} t="전국 배송 가능" d="10g / 100g 제품에 한함" />
          <Feat icon={<Building2 className="h-7 w-7" strokeWidth={1} />} t="쇼룸 수령" d="서울 종로 쇼룸 방문 수령" />
          <Feat icon={<MessageCircle className="h-7 w-7" strokeWidth={1} />} t="고객센터" d="카카오톡 채널 @SERIN" />
        </div>
      </section>
    </div>
  );
}

function Stepper() {
  const steps = [{ n: 1, l: "Cart" }, { n: 2, l: "Checkout" }, { n: 3, l: "Complete" }];
  return (
    <div className="flex items-center gap-4">
      {steps.map((s, i) => (
        <div key={s.n} className="flex items-center gap-4">
          <div className="flex flex-col items-center">
            <div className={`flex h-10 w-10 items-center justify-center rounded-full border ${s.n === 2 ? "border-[#1a1410] bg-[#1a1410] text-white" : "border-black/25 text-foreground/60"}`}>{s.n}</div>
            <span className="mt-2 text-[11px] text-foreground/60">{s.l}</span>
          </div>
          {i < 2 && <div className="h-px w-20 bg-black/15" />}
        </div>
      ))}
    </div>
  );
}

function Section({ n, title, children }: { n: string; title: string; children: React.ReactNode }) {
  return <div className="border border-black/10 bg-white/40 p-8"><h2 className="mb-6 text-sm font-medium">{n}. {title}</h2>{children}</div>;
}
function Field({ label, placeholder }: { label: string; placeholder: string }) {
  return (
    <div className="grid grid-cols-[120px_1fr] items-center gap-4 py-2">
      <label className="text-sm text-foreground/70">{label}</label>
      <input placeholder={placeholder} className="w-full border border-black/15 bg-white px-4 py-3 text-sm placeholder:text-foreground/40" />
    </div>
  );
}
function Feat({ icon, t, d }: { icon: React.ReactNode; t: string; d: string }) {
  return (
    <div className="flex items-center gap-4">
      <div className="text-[#1a1410]">{icon}</div>
      <div><p className="text-sm font-medium">{t}</p><p className="mt-1 text-xs text-foreground/60">{d}</p></div>
    </div>
  );
}
