import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";

export const Route = createFileRoute("/admin/preferences")({
  head: () => ({ meta: [{ title: "Preferences — SERIN Admin" }] }),
  component: PreferencesPage,
});

function Toggle({ l, d, def = true }: { l: string; d: string; def?: boolean }) {
  const [on, setOn] = useState(def);
  return (
    <div className="flex items-center justify-between border-b border-black/[0.04] py-4 last:border-0">
      <div>
        <p className="text-[13px] font-medium">{l}</p>
        <p className="text-[11.5px] text-black/50">{d}</p>
      </div>
      <button onClick={() => setOn((v) => !v)} className={`relative h-6 w-11 rounded-full transition-colors ${on ? "bg-[#1a1410]" : "bg-black/15"}`}>
        <span className={`absolute top-0.5 h-5 w-5 rounded-full bg-white shadow transition-all ${on ? "left-[22px]" : "left-0.5"}`} />
      </button>
    </div>
  );
}

function PreferencesPage() {
  const [theme, setTheme] = useState("light");
  const [density, setDensity] = useState("comfortable");

  return (
    <div className="space-y-5">
      <div>
        <p className="text-[11px] tracking-[0.28em] text-black/45">PERSONALIZE</p>
        <h1 className="mt-1 font-serif text-3xl">Preferences</h1>
      </div>

      <section className="rounded-2xl border border-black/[0.06] bg-white p-6">
        <p className="font-serif text-xl">Appearance</p>
        <p className="mt-1 text-[12.5px] text-black/50">How the workspace looks and feels.</p>

        <div className="mt-5 grid gap-5 md:grid-cols-2">
          <div>
            <span className="text-[11.5px] font-medium tracking-wide text-black/60">Theme</span>
            <div className="mt-2 grid grid-cols-3 gap-2">
              {["light", "dark", "auto"].map((t) => (
                <button key={t} onClick={() => setTheme(t)} className={`h-10 rounded-xl border text-[12.5px] capitalize ${theme === t ? "border-black bg-[#1a1410] text-white" : "border-black/[0.08] bg-white"}`}>
                  {t}
                </button>
              ))}
            </div>
          </div>
          <div>
            <span className="text-[11.5px] font-medium tracking-wide text-black/60">Density</span>
            <div className="mt-2 grid grid-cols-3 gap-2">
              {["compact", "comfortable", "spacious"].map((t) => (
                <button key={t} onClick={() => setDensity(t)} className={`h-10 rounded-xl border text-[12.5px] capitalize ${density === t ? "border-black bg-[#1a1410] text-white" : "border-black/[0.08] bg-white"}`}>
                  {t}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="rounded-2xl border border-black/[0.06] bg-white p-6">
        <p className="font-serif text-xl">Workflow</p>
        <div className="mt-3">
          <Toggle l="Auto-refresh orders" d="Poll new orders every 30 seconds." />
          <Toggle l="Show revenue on dashboard" d="Display today's revenue in the hero." />
          <Toggle l="Confirmation on delete" d="Ask before removing products or orders." />
          <Toggle l="Keyboard shortcuts" d="Enable ⌘K search and quick actions." />
        </div>
      </section>
    </div>
  );
}
