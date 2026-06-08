import { Clock, Phone, Mail, Instagram, MessageCircle, Youtube, ChevronUp } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-border bg-background">
      <div className="mx-auto max-w-[1400px] px-10 py-16">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-4">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center border border-foreground/70 font-serif text-lg">
                S
              </div>
              <div>
                <p className="font-serif text-xl">삼덕 금은거래소</p>
                <p className="font-sans text-[10px] tracking-[0.25em] text-muted-foreground">
                  SAMDEOK GOLD &amp; SILVER
                </p>
              </div>
            </div>
            <p className="mt-8 font-sans text-sm leading-7 text-foreground/80">
              기억을 간직하는 순간,
              <br />
              오래도록 가치로 남도록 제작합니다.
            </p>
            <div className="mt-8 h-px w-full bg-border" />
            <div className="mt-6 flex items-center gap-5">
              <div className="border border-foreground/60 px-3 py-1.5 text-[10px] leading-tight tracking-wider">
                HALLMARK
                <br />
                KOREA
              </div>
              <div className="flex items-center gap-2 text-[10px] leading-tight tracking-wider">
                <div className="h-7 w-7 rounded-full border border-foreground/60" />
                <div>
                  LBMA
                  <br />
                  GOOD DELIVERY
                  <br />
                  SILVER 999.9
                </div>
              </div>
            </div>
          </div>

          {/* Showroom */}
          <div>
            <h4 className="font-sans text-sm tracking-[0.25em] text-foreground">SHOWROOM</h4>
            <div className="mt-6 space-y-5 font-sans text-sm text-foreground/80">
              <p>
                서울특별시 종로구 수표로 123
                <br />
                삼덕 금은거래소 쇼룸
              </p>
              <p className="flex items-start gap-3">
                <Clock className="mt-0.5 h-4 w-4 text-foreground/60" strokeWidth={1.3} />
                <span>
                  Mon - Sat 11:00 - 19:00
                  <br />
                  (일요일 및 공휴일 휴무)
                </span>
              </p>
              <p className="flex items-center gap-3">
                <Phone className="h-4 w-4 text-foreground/60" strokeWidth={1.3} />
                +82 10-XXXX-XXXX
              </p>
              <p className="flex items-center gap-3">
                <Mail className="h-4 w-4 text-foreground/60" strokeWidth={1.3} />
                hello@samdeok.kr
              </p>
            </div>
          </div>

          {/* Follow */}
          <div>
            <h4 className="font-sans text-sm tracking-[0.25em] text-foreground">FOLLOW US</h4>
            <div className="mt-6 space-y-4 font-sans text-sm text-foreground/80">
              <a href="#" className="flex items-center gap-3 hover:text-foreground">
                <Instagram className="h-4 w-4" strokeWidth={1.3} /> Instagram
              </a>
              <a href="#" className="flex items-center gap-3 hover:text-foreground">
                <MessageCircle className="h-4 w-4" strokeWidth={1.3} /> Kakao Channel
              </a>
              <a href="#" className="flex items-center gap-3 hover:text-foreground">
                <Youtube className="h-4 w-4" strokeWidth={1.3} /> YouTube
              </a>
            </div>
          </div>

          {/* Information */}
          <div>
            <h4 className="font-sans text-sm tracking-[0.25em] text-foreground">INFORMATION</h4>
            <div className="mt-6 space-y-4 font-sans text-sm text-foreground/80">
              <a href="#" className="block hover:text-foreground">개인정보처리방침</a>
              <a href="#" className="block hover:text-foreground">이용약관</a>
              <a href="#" className="block hover:text-foreground">사업자정보확인</a>
              <a href="#" className="block hover:text-foreground">비회원 주문조회</a>
            </div>
          </div>
        </div>

        <div className="mt-14 flex items-center justify-between border-t border-border pt-6">
          <p className="font-sans text-xs text-muted-foreground">
            © SAMDEOK GOLD &amp; SILVER EXCHANGE. All Rights Reserved.
          </p>
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="flex items-center gap-2 font-sans text-xs tracking-[0.25em] text-foreground/80 hover:text-foreground"
          >
            <ChevronUp className="h-4 w-4" strokeWidth={1.3} />
            TOP
          </button>
        </div>
      </div>
    </footer>
  );
}
