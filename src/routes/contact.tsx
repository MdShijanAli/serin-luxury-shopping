import { createFileRoute } from "@tanstack/react-router";
import { ArrowRight, Mail, Clock } from "lucide-react";
import contactHero from "@/assets/contact-hero.jpg";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact Us — SERIN" },
      { name: "description", content: "SERIN 고객 문의 — 카카오톡 및 이메일로 빠르게 답변드립니다." },
    ],
  }),
  component: ContactPage,
});

function TopNav() {
  return (
    <header className="absolute top-0 left-0 right-0 z-30">
      <div className="mx-auto flex max-w-[1400px] items-center justify-between px-10 py-7">
        <a href="/" className="font-serif text-3xl tracking-[0.3em] text-white">SERIN</a>
        <nav className="hidden md:flex items-center gap-12 text-[13px] tracking-[0.25em] text-white/85">
          <a href="/photo-bar">포토바</a>
          <a href="/custom-collection">컬렉션</a>
          <a href="#">갤러리</a>
          <a href="/about">이용 안내</a>
          <a href="/contact" className="text-white border-b border-white/70 pb-0.5">고객센터</a>
        </nav>
        <div className="flex items-center gap-5 text-white/85">
          <a href="/my-page" aria-label="account"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.3"><circle cx="12" cy="8" r="4"/><path d="M4 21c1.5-4 5-6 8-6s6.5 2 8 6"/></svg></a>
          <a href="#" aria-label="cart"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.3"><path d="M6 7h12l-1.5 12h-9zM9 7a3 3 0 016 0"/></svg></a>
        </div>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section className="relative h-[560px] w-full overflow-hidden bg-[#1a1410]">
      <img src={contactHero} alt="Contact" width={1920} height={1024} className="absolute inset-0 h-full w-full object-cover opacity-95" />
      <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/40 to-transparent" />
      <TopNav />
      <div className="relative mx-auto max-w-[1400px] px-10 pt-48">
        <h1 className="font-serif text-[68px] leading-none text-white">문의하기</h1>
        <p className="mt-5 text-[13px] tracking-[0.4em] text-white/80">CONTACT US</p>
        <p className="mt-16 text-[13px] text-white/75">궁금한 점이 있으신가요?</p>
        <p className="mt-3 text-[13px] text-white/75">
          <span className="bg-white/85 text-[#1a1410] px-2 py-0.5 mr-1">빠르고</span> 친절하게 답변드리겠습니다.
        </p>
      </div>
    </section>
  );
}

function Intro() {
  return (
    <section className="bg-[#f5f1ea] pt-24 pb-12 text-center">
      <h2 className="font-serif text-[26px] text-[#1a1410]">문의는 아래 채널을 통해 편리하게 연락해주세요.</h2>
      <div className="mt-10 space-y-2 text-[14px] leading-8 text-[#5b524a]">
        <p>제품, 제작, 배송 관련 문의는</p>
        <p>아래 채널을 통해 문의해 주시면</p>
        <p>평일 기준 24시간 이내에 답변드리겠습니다.</p>
      </div>
    </section>
  );
}

function ChannelCards() {
  return (
    <section className="bg-[#f5f1ea] pb-10">
      <div className="mx-auto max-w-[1100px] px-10 grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Kakao */}
        <div className="bg-[#ece6dc] rounded-sm px-12 py-16 text-center">
          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-[#1a1410] text-white font-bold text-[13px] tracking-wider relative">
            TALK
            <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-3 h-3 bg-[#1a1410] rotate-45"></span>
          </div>
          <h3 className="mt-8 font-serif text-[22px] text-[#1a1410]">카카오톡 문의하기</h3>
          <div className="mt-8 bg-[#f5f1ea]/60 border border-[#dcd4c7] px-8 py-6 text-left text-[13px] text-[#5b524a] space-y-2.5">
            <p className="text-center text-[#1a1410] mb-3">가장 빠르고 편리한 상담</p>
            <p>✓ 주문 및 사진 확인</p>
            <p>✓ 제작 가능 여부</p>
            <p>✓ 배송 일정 문의</p>
          </div>
          <button className="mt-8 w-full bg-[#1a1410] text-white text-[13px] tracking-[0.2em] py-4 flex items-center justify-center gap-3 hover:bg-black">
            카카오톡 문의하기 <ArrowRight className="h-4 w-4" strokeWidth={1.3} />
          </button>
        </div>

        {/* Email */}
        <div className="bg-[#ece6dc] rounded-sm px-12 py-16 text-center">
          <Mail className="mx-auto h-14 w-14 text-[#1a1410]" strokeWidth={1.1} />
          <h3 className="mt-8 font-serif text-[22px] text-[#1a1410]">이메일 문의하기</h3>
          <div className="mt-8 text-left text-[13px] text-[#5b524a] space-y-2.5 max-w-[260px] mx-auto">
            <p>✓ 주문 관련 자료 전달</p>
            <p>✓ 기업 및 제휴 문의</p>
          </div>
          <p className="mt-8 text-[18px] text-[#1a1410] tracking-wide">help@serin.co.kr</p>
          <button className="mt-8 w-full border border-[#1a1410]/40 text-[#1a1410] text-[13px] tracking-[0.2em] py-4 flex items-center justify-center gap-3 hover:bg-white">
            이메일 보내기 <ArrowRight className="h-4 w-4" strokeWidth={1.3} />
          </button>
        </div>
      </div>
    </section>
  );
}

function Hours() {
  return (
    <section className="bg-[#f5f1ea] pb-24">
      <div className="mx-auto max-w-[1100px] px-10">
        <div className="bg-[#ece6dc] rounded-sm px-12 py-10 flex items-center gap-10">
          <div className="flex h-16 w-16 items-center justify-center rounded-full border border-[#1a1410]/40">
            <Clock className="h-7 w-7 text-[#1a1410]" strokeWidth={1.1} />
          </div>
          <div className="text-[14px] text-[#1a1410]">
            <p className="mb-3">운영시간 안내</p>
            <p className="text-[#5b524a]">월 - 금 &nbsp; | &nbsp; 10:00 - 18:00</p>
            <p className="mt-1.5 text-[#5b524a]">주말 및 공휴일은 휴무입니다.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="bg-[#f5f1ea] border-t border-[#e6dfd4]">
      <div className="mx-auto max-w-[1400px] px-10 py-8 flex items-center justify-between text-[12px] text-[#5b524a]">
        <div className="flex items-center gap-6">
          <span className="font-serif text-2xl tracking-[0.3em] text-[#1a1410]">SERIN</span>
          <span className="text-[#cfc6b7]">|</span>
          <span>당신의 순간을, 순은에 새기다</span>
        </div>
        <p>© SERIN. All rights reserved.</p>
      </div>
    </footer>
  );
}

function ContactPage() {
  return (
    <div className="min-h-screen bg-[#f5f1ea] font-sans">
      <Hero />
      <Intro />
      <ChannelCards />
      <Hours />
      <Footer />
    </div>
  );
}
