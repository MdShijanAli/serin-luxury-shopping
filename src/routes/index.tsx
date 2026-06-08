import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/site/Navbar";
import { Hero } from "@/components/site/Hero";
import { Collections } from "@/components/site/Collections";
import { Features } from "@/components/site/Features";
import { Footer } from "@/components/site/Footer";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "SERIN — 기억을 간직하는 순은" },
      {
        name: "description",
        content: "SERIN by Samdeok Gold & Silver — fine silver 999.9 bars and custom photo bars crafted in Korea.",
      },
      { property: "og:title", content: "SERIN — 기억을 간직하는 순은" },
      {
        property: "og:description",
        content: "Fine silver 999.9 collections and custom photo bars by Samdeok Gold & Silver.",
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background font-sans text-foreground">
      <Navbar />
      <main>
        <Hero />
        <Collections />
        <Features />
      </main>
      <Footer />
    </div>
  );
}
