import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/admin/settings")({
  head: () => ({ meta: [{ title: "Settings — SERIN Admin" }] }),
  component: SettingsPage,
});

function SettingsPage() {
  return (
    <div className="space-y-5">
      <div>
        <p className="text-[11px] tracking-[0.28em] text-black/45">PREFERENCES</p>
        <h1 className="mt-1 font-serif text-3xl">Settings</h1>
      </div>

      <div className="grid gap-5 lg:grid-cols-[240px_1fr]">
        <nav className="rounded-2xl border border-black/[0.06] bg-white p-2 text-[13px]">
          {["General", "Branding", "Notifications", "Payments", "Security", "Integrations"].map((s, i) => (
            <button key={s} className={`block w-full rounded-lg px-3 py-2.5 text-left ${i === 0 ? "bg-[#1a1410] text-white" : "hover:bg-black/[0.04]"}`}>
              {s}
            </button>
          ))}
        </nav>

        <section className="rounded-2xl border border-black/[0.06] bg-white p-6">
          <p className="font-serif text-xl">General</p>
          <p className="mt-1 text-[12.5px] text-black/50">Atelier identity and locale.</p>

          <div className="mt-6 grid gap-5 md:grid-cols-2">
            {[
              { l: "Atelier name", v: "SERIN Atelier" },
              { l: "Support email", v: "concierge@serin.com" },
              { l: "Phone", v: "02-1234-5678" },
              { l: "Time zone", v: "Asia/Seoul (GMT+9)" },
            ].map((f) => (
              <label key={f.l} className="block">
                <span className="text-[11.5px] font-medium tracking-wide text-black/60">{f.l}</span>
                <input defaultValue={f.v} className="mt-1.5 h-11 w-full rounded-xl border border-black/[0.07] bg-[#faf9f6] px-3.5 text-[13px] focus:border-black/20 focus:bg-white focus:outline-none focus:ring-4 focus:ring-black/[0.04]" />
              </label>
            ))}
          </div>

          <div className="mt-8 flex justify-end gap-2">
            <button className="h-10 rounded-xl border border-black/[0.08] bg-white px-4 text-[12.5px]">Cancel</button>
            <button className="h-10 rounded-xl bg-gradient-to-br from-[#1a1410] to-[#0b0b0d] px-5 text-[12.5px] font-medium text-white hover:opacity-95">Save changes</button>
          </div>
        </section>
      </div>
    </div>
  );
}
