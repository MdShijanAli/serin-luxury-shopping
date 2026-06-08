import { ArrowRight } from "lucide-react";
import hero from "@/assets/hero.jpg";

export function Hero() {
  return (
    <section className="relative h-[88vh] min-h-[640px] w-full overflow-hidden">
      <img
        src={hero}
        alt="SERIN silver bar in mother-of-pearl box"
        className="absolute inset-0 h-full w-full object-cover"
        width={1920}
        height={1080}
      />
      <div className="absolute inset-0 bg-gradient-to-r from-background/70 via-background/20 to-transparent" />

      <div className="relative mx-auto flex h-full max-w-[1400px] items-center px-10">
        <div className="max-w-xl text-foreground">
          <p className="font-sans text-sm tracking-[0.3em] text-foreground/70">
            기억을 간직하는 순은
          </p>
          <h1 className="mt-6 font-serif text-7xl tracking-[0.4em] md:text-8xl">
            SERIN
          </h1>
          <p className="mt-8 font-sans text-base tracking-[0.2em] text-foreground/80">
            소중한 순간을 은빛에 담다
          </p>
          <div className="mt-10 h-px w-16 bg-foreground/40" />
          <a
            href="#collections"
            className="mt-8 inline-flex items-center gap-3 text-sm tracking-[0.3em] text-foreground transition-opacity hover:opacity-70"
          >
            COLLECTIONS
            <ArrowRight className="h-4 w-4" strokeWidth={1.2} />
          </a>
        </div>
      </div>
    </section>
  );
}
