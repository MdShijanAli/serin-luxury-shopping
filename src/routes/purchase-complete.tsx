import { createFileRoute, Link } from "@tanstack/react-router";
import { Check, Building2, ClipboardCheck, CreditCard, Home, Award, ShieldCheck } from "lucide-react";
import { Navbar } from "@/components/site/Navbar";
import heritage from "@/assets/heritage-prestige.jpg";

export const Route = createFileRoute("/purchase-complete")({
  head: () => ({ meta: [{ title: "예약 확인 — SERIN" }] }),
  component: PurchaseComplete,
});

function PurchaseComplete() {
  return (
    <div className="min-h-screen bg-[#f8f5f0] font-sans text-[#1a1410]">
      <div className="border-b border-black/5 bg-white"><Navbar /></div>

      <div className="mx-auto max-w-[1400px] px-10 pt-14 pb-20">
        <div className="flex items-end justify-between border-b border-black/10 pb-6">
          <h1 className="font-serif text-5xl">PURCHASE</h1>
          <div className="flex items-center gap-8 text-sm">
            <span className="text-foreground/40">1. 주문 정보</span>
            <span className="text-foreground/20">|</span>
            <span className="text-foreground/40">2. 결제</span>
            <span className="text-foreground/20">|</span>
            <span className="border-b-2 border-[#1a1410] pb-1 font-medium">3. 예약 확인</span>
          </div>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-8 lg:grid-cols-[1fr_420px]">
          <div className="border border-black/10 bg-white/40 p-12">
            <div className="text-center">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full border border-[#1a1410]">
                <Check className="h-7 w-7" strokeWidth={1.5} />
              </div>
              <h2 className="mt-6 font-serif text-3xl">예약이 완료되었습니다.</h2>
              <p className="mt-3 text-sm text-foreground/60">소중한 가치를 SERIN과 함께해 주셔서 감사합니다.</p>
            </div>

            <div className="mt-10 border border-black/10 p-8">
              <Info k="예약 번호" v="SRN-2024-0520-1001" big />
              <div className="mt-6 grid gap-6">
                <Info k="예약일시" v="2024. 05. 20 (월) 14:30" />
                <Info k="예약상품" v="Prestige 1kg 한반도 순은 바" />
                <Info k="수량 / 중량" v="1개 / 1000g" />
                <Info k="결제금액" v="KRW 문의 후 안내" />
              </div>
            </div>

            <div className="mt-12">
              <p className="text-sm font-medium">다음 단계 안내</p>
              <div className="mt-8 grid grid-cols-3 gap-8">
                <Step icon={<Building2 className="h-9 w-9" strokeWidth={0.9} />} n="1. 쇼룸 방문" d="예약하신 일정에 맞춰 SERIN 쇼룸을 방문해 주세요." />
                <Step icon={<ClipboardCheck className="h-9 w-9" strokeWidth={0.9} />} n="2. 상품 실물 확인" d="직접 상품을 확인하신 후 결제가 최종 진행됩니다." />
                <Step icon={<CreditCard className="h-9 w-9" strokeWidth={0.9} />} n="3. 결제 완료 및 수령" d="결제 완료 후 즉시 상품을 수령하실 수 있습니다." />
              </div>
            </div>

            <div className="mt-10 flex items-center justify-between border border-black/10 bg-white/60 p-5">
              <div className="flex items-center gap-4">
                <Home className="h-6 w-6" strokeWidth={1.1} />
                <div className="text-sm">
                  <p className="font-medium">방문이 어려우신가요?</p>
                  <p className="mt-1 text-xs text-foreground/60">일정을 변경하거나 문의사항이 있으시면 언제든지 연락 주세요.</p>
                </div>
              </div>
              <button className="bg-[#ece7df] px-5 py-3 text-xs text-foreground/75">고객센터 문의하기</button>
            </div>

            <button className="mt-5 w-full bg-[#1a1410] py-5 text-sm tracking-[0.2em] text-white hover:bg-black">쇼룸 위치 및 안내 보기</button>
            <p className="mt-3 text-center text-[11px] text-foreground/50">예약 확인서가 등록된 이메일로 발송되었습니다.</p>
          </div>

          <aside className="h-fit border border-black/10 bg-white/50 p-7">
            <p className="text-xs tracking-[0.25em] text-foreground/60">ORDER SUMMARY</p>
            <div className="mt-6 grid grid-cols-[100px_1fr_auto] items-start gap-4">
              <img src={heritage} alt="Prestige" className="aspect-square w-full object-cover" />
              <div className="text-sm">
                <p className="font-serif text-lg">Prestige 1kg</p>
                <p className="mt-1 text-xs text-foreground/60">한반도 순은 바</p>
                <p className="mt-3 text-xs text-foreground/60">1000g &nbsp;|&nbsp; 1개</p>
              </div>
              <div className="text-right text-xs"><p className="text-foreground/55">KRW</p><p className="mt-1 font-medium">문의 후 안내</p></div>
            </div>

            <div className="my-6 h-px bg-black/10" />
            <Row k="상품 금액" v="문의 후 안내" />
            <Row k="세금 (VAT 포함)" v="포함" />
            <div className="my-6 h-px bg-black/10" />
            <div className="flex items-center justify-between"><span className="text-sm font-medium">합계</span><span className="font-serif text-lg">KRW 문의 후 안내</span></div>

            <div className="my-6 h-px bg-black/10" />
            <p className="text-sm font-medium">방문 정보</p>
            <div className="mt-4 space-y-3 text-sm">
              <div className="flex justify-between"><span className="text-foreground/60">방문 일정</span><span>2024. 05. 20 (월) 14:30</span></div>
              <div className="flex justify-between"><span className="text-foreground/60">매장</span><span className="text-right">SERIN 쇼룸 (순라길)<br /><span className="text-xs text-foreground/55">서울 종로구 삼일대로 32길 52</span></span></div>
              <div className="flex justify-between"><span className="text-foreground/60">연락처</span><span>02-1234-5678</span></div>
            </div>

            <div className="mt-6 flex items-start gap-3 border border-black/10 bg-white/60 p-4 text-xs text-foreground/70">
              <Home className="mt-0.5 h-5 w-5 shrink-0" strokeWidth={1.1} />
              <p>본 상품은 안전한 전달을 위해 쇼룸에서만 직접 수령 가능합니다.<br />양해해 주셔서 감사합니다.</p>
            </div>
          </aside>
        </div>

        <div className="mt-6 text-right">
          <Link to="/" className="text-xs text-foreground/60">← 홈으로 돌아가기</Link>
        </div>
      </div>

      <section className="border-t border-black/5 bg-white">
        <div className="mx-auto grid max-w-[1400px] grid-cols-2 gap-10 px-10 py-12 md:grid-cols-4">
          <Feat icon={<Award className="h-8 w-8" strokeWidth={0.9} />} t="LBMA GOOD DELIVERY" d="런던 금속 시장 협회에서 인증한 세계 최고 수준의 순은 999.9" />
          <Feat icon={<ShieldCheck className="h-8 w-8" strokeWidth={0.9} />} t="HALLMARK KOREA" d="한국조폐공사 품질 인증 홀마크 순은(Ag 999.9) 공식 보증" />
          <Feat icon={<ShieldCheck className="h-8 w-8" strokeWidth={0.9} />} t="AUTHENTIC GUARANTEE" d="SERIN 품질 보증서와 함께 정품의 가치를 보증합니다." />
          <Feat icon={<Home className="h-8 w-8" strokeWidth={0.9} />} t="SHOWROOM PICKUP" d="서울 종로 순라길 SERIN 쇼룸에서 직접 수령 가능합니다." />
        </div>
      </section>
    </div>
  );
}

function Info({ k, v, big }: { k: string; v: string; big?: boolean }) {
  return (
    <div>
      <p className="text-xs text-foreground/55">{k}</p>
      <p className={`mt-1.5 ${big ? "font-serif text-2xl" : "text-sm"}`}>{v}</p>
    </div>
  );
}
function Step({ icon, n, d }: { icon: React.ReactNode; n: string; d: string }) {
  return (
    <div className="flex flex-col items-center text-center">
      <div className="text-[#1a1410]">{icon}</div>
      <p className="mt-4 text-sm font-medium">{n}</p>
      <p className="mt-2 text-xs text-foreground/60 leading-relaxed">{d}</p>
    </div>
  );
}
function Row({ k, v }: { k: string; v: string }) {
  return <div className="flex justify-between py-1.5 text-sm"><span className="text-foreground/60">{k}</span><span>{v}</span></div>;
}
function Feat({ icon, t, d }: { icon: React.ReactNode; t: string; d: string }) {
  return (
    <div className="flex items-start gap-4">
      <div className="text-[#1a1410]">{icon}</div>
      <div><p className="text-xs font-medium tracking-wider">{t}</p><p className="mt-2 text-[11px] text-foreground/60 leading-relaxed">{d}</p></div>
    </div>
  );
}
