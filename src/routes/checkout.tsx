import { createFileRoute, Link } from "@tanstack/react-router";
import { Truck, CreditCard, Award, ShieldCheck, Building2 } from "lucide-react";
import { Navbar } from "@/components/site/Navbar";
import pb10 from "@/assets/size-10g.jpg";

export const Route = createFileRoute("/checkout")({
  head: () => ({ meta: [{ title: "Checkout — SERIN" }] }),
  component: CheckoutPage,
});

function CheckoutPage() {
  return (
    <div className="min-h-screen bg-[#f8f5f0] font-sans text-[#1a1410]">
      <div className="border-b border-black/5 bg-white"><Navbar /></div>

      <div className="mx-auto max-w-[1400px] px-10 pt-14 pb-24">
        <div className="flex items-start justify-between">
          <div>
            <h1 className="font-serif text-5xl">CHECKOUT</h1>
            <p className="mt-4 text-sm text-foreground/60">주문 정보를 확인하고 주문을 완료해주세요.</p>
          </div>
          <Stepper active={2} />
        </div>

        <div className="mt-12 grid grid-cols-1 gap-8 lg:grid-cols-[1fr_400px]">
          <div className="space-y-10">
            <Section n="1" title="주문 상품">
              <div className="grid grid-cols-[260px_1fr] gap-8">
                <img src={pb10} alt="Photo Bar 10g" className="aspect-square w-full object-cover" />
                <div>
                  <p className="text-[11px] tracking-[0.25em] text-foreground/60">PHOTO BAR</p>
                  <div className="mt-2 flex items-center gap-3">
                    <h3 className="font-serif text-3xl">Photo Bar 10g</h3>
                    <span className="bg-[#f3ece1] px-3 py-1 text-[11px]">10개 세트</span>
                  </div>
                  <p className="mt-1 text-sm text-foreground/65">포토바 10g 실버바</p>
                  <p className="mt-1 text-xs text-foreground/55">999.9 Fine Silver</p>
                  <div className="my-5 h-px bg-black/10" />
                  <Row k="수량" v="10개" />
                  <Row k="중량" v="100g (10g × 10)" />
                  <Row k="상품 금액" v="문의 후 안내" />
                </div>
              </div>
            </Section>

            <Section n="2" title="주문자 정보">
              <Field label="이름" placeholder="이름을 입력해주세요" />
              <Field label="연락처" placeholder="- 없이 숫자만 입력해주세요" />
              <Field label="이메일" placeholder="이메일을 입력해주세요" />
            </Section>

            <Section n="3" title="배송지 정보를 입력해주세요.">
              <Field label="받는 분" placeholder="이름을 입력해주세요" />
              <Field label="연락처" placeholder="- 없이 숫자만 입력해주세요" />
              <div className="grid grid-cols-[120px_1fr] items-center gap-4 py-2">
                <label className="text-sm text-foreground/70">우편번호</label>
                <div className="flex gap-3">
                  <input placeholder="우편번호" className="flex-1 border border-black/15 bg-white px-4 py-3 text-sm" />
                  <button className="bg-[#1a1410] px-5 text-xs tracking-[0.2em] text-white">주소 검색</button>
                </div>
              </div>
              <Field label="주소" placeholder="기본주소" />
              <Field label="상세주소" placeholder="상세주소를 입력해주세요" />
            </Section>

            <Section n="4" title="결제 안내">
              <div className="grid grid-cols-[1fr_220px] gap-6 bg-[#faf0e3] p-6">
                <div className="flex gap-4">
                  <CreditCard className="mt-1 h-6 w-6" strokeWidth={1.2} />
                  <div>
                    <p className="text-sm font-medium">선입금 10% 후 제작이 진행됩니다.</p>
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
                <input type="checkbox" className="h-4 w-4 border-black/30" />
                주문 내용을 확인했으며, 결제에 동의합니다.
              </label>
              <Link to="/purchase-complete" className="mt-5 block w-full bg-[#1a1410] py-5 text-center text-sm tracking-[0.2em] text-white hover:bg-black">
                주문 접수하기 (가상계좌 발급)
              </Link>
              <p className="mt-3 text-center text-[11px] text-foreground/50">🔒 개인 정보는 안전하게 암호화되어 처리됩니다.</p>
            </Section>
          </div>

          <aside className="space-y-6">
            <div className="border border-black/10 bg-white/50 p-6">
              <p className="text-xs tracking-[0.25em] text-foreground/60">ORDER SUMMARY</p>
              <div className="mt-5 flex items-center justify-between border-b border-dashed border-black/20 pb-4 text-sm">
                <span className="flex items-center gap-2"><Truck className="h-4 w-4" /> 배송 상품 (2개)</span>
                <span className="font-medium">375,000 <span className="text-xs text-foreground/60">KRW</span></span>
              </div>
              <div className="mt-4 flex justify-between text-sm"><span className="text-foreground/65">상품 금액</span><span>375,000 KRW</span></div>
              <div className="mt-3 flex justify-between border-b border-dashed border-black/20 pb-4 text-sm"><span className="text-foreground/65">결제 금액 (100%)</span><span>375,000 KRW</span></div>
              <div className="mt-4 h-40 bg-[#e9e4d9]" />
            </div>

            <div className="border border-black/10 bg-white/50 p-6">
              <p className="text-sm font-medium">안내 사항</p>
              <ul className="mt-4 space-y-2 text-xs text-foreground/70 leading-relaxed">
                <li>• 일반적으로 제작 완료 후 3-5일 이내 발송됩니다.</li>
                <li>• 쇼룸 수령 선택 시, 완료 후 방문 안내 문자가 발송됩니다.</li>
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
          <Feat icon={<Award className="h-7 w-7" strokeWidth={1} />} t="LBMA 인증 실버" d="999.9 Fine Silver" />
          <Feat icon={<Truck className="h-7 w-7" strokeWidth={1} />} t="안전한 배송" d="전국 배송 가능" />
          <Feat icon={<ShieldCheck className="h-7 w-7" strokeWidth={1} />} t="정품 보증" d="SERIN 품질 보증서 제공" />
          <Feat icon={<Building2 className="h-7 w-7" strokeWidth={1} />} t="쇼룸 수령" d="서울 종로 쇼룸 방문 수령" />
        </div>
      </section>
    </div>
  );
}

function Stepper({ active }: { active: number }) {
  const steps = [{ n: 1, l: "Cart" }, { n: 2, l: "Checkout" }, { n: 3, l: "Complete" }];
  return (
    <div className="flex items-center gap-4">
      {steps.map((s, i) => (
        <div key={s.n} className="flex items-center gap-4">
          <div className="flex flex-col items-center">
            <div className={`flex h-10 w-10 items-center justify-center rounded-full border ${active === s.n ? "border-[#1a1410] bg-[#1a1410] text-white" : "border-black/25 text-foreground/60"}`}>{s.n}</div>
            <span className="mt-2 text-[11px] text-foreground/60">{s.l}</span>
          </div>
          {i < steps.length - 1 && <div className="h-px w-20 bg-black/15" />}
        </div>
      ))}
    </div>
  );
}

function Section({ n, title, children }: { n: string; title: string; children: React.ReactNode }) {
  return (
    <div className="border border-black/10 bg-white/40 p-8">
      <h2 className="mb-6 text-sm font-medium">{n}. {title}</h2>
      {children}
    </div>
  );
}

function Row({ k, v }: { k: string; v: string }) {
  return <div className="grid grid-cols-[80px_1fr] gap-4 py-1.5 text-sm"><span className="text-foreground/60">{k}</span><span>{v}</span></div>;
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
