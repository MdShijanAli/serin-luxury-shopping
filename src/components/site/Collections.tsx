import { ArrowRight } from "lucide-react";
import heritage from "@/assets/heritage.jpg";
import photobar from "@/assets/photobar.jpg";
import reservation from "@/assets/reservation.jpg";

type Card = {
  title: string;
  subtitle: string[];
  cta: string;
  image: string;
  href: string;
};

const cards: Card[] = [
  {
    title: "Korea Heritage Bar",
    subtitle: ["한반도의 가치와", "순은의 품격을 담은 컬렉션"],
    cta: "VIEW MORE",
    image: heritage,
    href: "#heritage",
  },
  {
    title: "SERIN Photo Bar",
    subtitle: ["당신의 순간을", "순은에 새기는 맞춤 컬렉션"],
    cta: "CUSTOMIZE",
    image: photobar,
    href: "#photo",
  },
  {
    title: "Reservation",
    subtitle: ["쇼룸 방문 및", "Prestige Collection 수령 예약"],
    cta: "RESERVE NOW",
    image: reservation,
    href: "#reservation",
  },
];

export function Collections() {
  return (
    <section id="collections" className="grid grid-cols-1 md:grid-cols-3">
      {cards.map((c) => (
        <article
          key={c.title}
          className="group relative h-[460px] overflow-hidden md:h-[520px]"
        >
          <img
            src={c.image}
            alt={c.title}
            loading="lazy"
            className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-foreground/55 via-foreground/25 to-transparent" />
          <div className="relative flex h-full flex-col justify-start p-10 text-background">
            <h3 className="font-serif text-3xl md:text-4xl">{c.title}</h3>
            <div className="mt-5 font-sans text-sm leading-7 text-background/90">
              {c.subtitle.map((s) => (
                <p key={s}>{s}</p>
              ))}
            </div>
            <a
              href={c.href}
              className="mt-6 inline-flex items-center gap-3 text-xs tracking-[0.3em] text-background transition-opacity hover:opacity-70"
            >
              {c.cta}
              <ArrowRight className="h-4 w-4" strokeWidth={1.2} />
            </a>
          </div>
        </article>
      ))}
    </section>
  );
}
