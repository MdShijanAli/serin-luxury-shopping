import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Bell, CreditCard, Globe, Palette, Plug, Shield, Check } from "lucide-react";

export const Route = createFileRoute("/admin/settings")({
  head: () => ({ meta: [{ title: "Settings — SERIN Admin" }] }),
  component: SettingsPage,
});

const tabs = [
  { k: "general", l: "General", icon: Globe },
  { k: "branding", l: "Branding", icon: Palette },
  { k: "notifications", l: "Notifications", icon: Bell },
  { k: "payments", l: "Payments", icon: CreditCard },
  { k: "security", l: "Security", icon: Shield },
  { k: "integrations", l: "Integrations", icon: Plug },
] as const;

type TabKey = (typeof tabs)[number]["k"];

function SettingsPage() {
  const [tab, setTab] = useState<TabKey>("general");
  const [saved, setSaved] = useState(false);
  const onSave = () => {
    setSaved(true);
    setTimeout(() => setSaved(false), 2000);
  };

  return (
    <div className="space-y-5">
      <div>
        <p className="text-[11px] tracking-[0.28em] text-black/45">PREFERENCES</p>
        <h1 className="mt-1 font-serif text-3xl">Settings</h1>
      </div>

      <div className="grid gap-5 lg:grid-cols-[240px_1fr]">
        <nav className="h-fit rounded-2xl border border-black/[0.06] bg-white p-2 text-[13px]">
          {tabs.map((s) => {
            const Icon = s.icon;
            const active = tab === s.k;
            return (
              <button
                key={s.k}
                onClick={() => setTab(s.k)}
                className={`flex w-full items-center gap-2.5 rounded-lg px-3 py-2.5 text-left transition-colors ${
                  active ? "bg-[#1a1410] text-white" : "hover:bg-black/[0.04]"
                }`}
              >
                <Icon className="h-4 w-4" strokeWidth={1.6} />
                {s.l}
              </button>
            );
          })}
        </nav>

        <section className="rounded-2xl border border-black/[0.06] bg-white p-6">
          {tab === "general" && <GeneralPanel />}
          {tab === "branding" && <BrandingPanel />}
          {tab === "notifications" && <NotificationsPanel />}
          {tab === "payments" && <PaymentsPanel />}
          {tab === "security" && <SecurityPanel />}
          {tab === "integrations" && <IntegrationsPanel />}

          <div className="mt-8 flex items-center justify-end gap-2 border-t border-black/[0.06] pt-5">
            {saved && (
              <span className="mr-auto inline-flex items-center gap-1.5 text-[12px] text-emerald-600">
                <Check className="h-3.5 w-3.5" /> Saved
              </span>
            )}
            <button className="h-10 rounded-xl border border-black/[0.08] bg-white px-4 text-[12.5px]">Cancel</button>
            <button onClick={onSave} className="h-10 rounded-xl bg-gradient-to-br from-[#1a1410] to-[#0b0b0d] px-5 text-[12.5px] font-medium text-white hover:opacity-95">Save changes</button>
          </div>
        </section>
      </div>
    </div>
  );
}

const inp =
  "mt-1.5 h-11 w-full rounded-xl border border-black/[0.07] bg-[#faf9f6] px-3.5 text-[13px] focus:border-black/20 focus:bg-white focus:outline-none focus:ring-4 focus:ring-black/[0.04]";

function Header({ t, s }: { t: string; s: string }) {
  return (
    <div>
      <p className="font-serif text-xl">{t}</p>
      <p className="mt-1 text-[12.5px] text-black/50">{s}</p>
    </div>
  );
}

function Field({ l, children }: { l: string; children: React.ReactNode }) {
  return (
    <label className="block">
      <span className="text-[11.5px] font-medium tracking-wide text-black/60">{l}</span>
      {children}
    </label>
  );
}

function Toggle({ label, desc, defaultChecked = true }: { label: string; desc: string; defaultChecked?: boolean }) {
  const [on, setOn] = useState(defaultChecked);
  return (
    <div className="flex items-center justify-between border-b border-black/[0.04] py-3.5 last:border-0">
      <div>
        <p className="text-[13px] font-medium">{label}</p>
        <p className="text-[11.5px] text-black/50">{desc}</p>
      </div>
      <button
        onClick={() => setOn((v) => !v)}
        className={`relative h-6 w-11 rounded-full transition-colors ${on ? "bg-[#1a1410]" : "bg-black/15"}`}
        aria-pressed={on}
      >
        <span className={`absolute top-0.5 h-5 w-5 rounded-full bg-white shadow transition-all ${on ? "left-[22px]" : "left-0.5"}`} />
      </button>
    </div>
  );
}

function GeneralPanel() {
  return (
    <>
      <Header t="General" s="Atelier identity and locale." />
      <div className="mt-6 grid gap-5 md:grid-cols-2">
        {[
          { l: "Atelier name", v: "SERIN Atelier" },
          { l: "Support email", v: "concierge@serin.com" },
          { l: "Phone", v: "02-1234-5678" },
          { l: "Time zone", v: "Asia/Seoul (GMT+9)" },
        ].map((f) => (
          <Field key={f.l} l={f.l}><input defaultValue={f.v} className={inp} /></Field>
        ))}
      </div>
    </>
  );
}

function BrandingPanel() {
  return (
    <>
      <Header t="Branding" s="Visual identity across storefront and receipts." />
      <div className="mt-6 grid gap-5 md:grid-cols-2">
        <Field l="Primary color"><input defaultValue="#a17f43" className={inp} /></Field>
        <Field l="Accent color"><input defaultValue="#e6cf9e" className={inp} /></Field>
        <Field l="Display font"><input defaultValue="Playfair Display" className={inp} /></Field>
        <Field l="Body font"><input defaultValue="Inter" className={inp} /></Field>
      </div>
      <div className="mt-5 rounded-xl border border-dashed border-black/10 bg-[#faf9f6] p-6 text-center text-[12.5px] text-black/50">
        Drop logo files here — PNG or SVG, transparent background
      </div>
    </>
  );
}

function NotificationsPanel() {
  return (
    <>
      <Header t="Notifications" s="Choose which events reach your inbox." />
      <div className="mt-4">
        <Toggle label="New orders" desc="Email a summary when an order is placed." />
        <Toggle label="Payment received" desc="Alert when deposit is confirmed." />
        <Toggle label="Low stock" desc="Alert when a product drops below threshold." defaultChecked={false} />
        <Toggle label="Weekly digest" desc="Sunday roll-up of the week's performance." />
      </div>
    </>
  );
}

function PaymentsPanel() {
  return (
    <>
      <Header t="Payments" s="Bank details for atelier payouts." />
      <div className="mt-6 grid gap-5 md:grid-cols-2">
        <Field l="Bank"><input defaultValue="KEB Hana Bank" className={inp} /></Field>
        <Field l="Account holder"><input defaultValue="주식회사 서린" className={inp} /></Field>
        <Field l="Account number"><input defaultValue="123-456-789012" className={inp} /></Field>
        <Field l="Currency"><input defaultValue="KRW" className={inp} /></Field>
      </div>
    </>
  );
}

function SecurityPanel() {
  return (
    <>
      <Header t="Security" s="Sign-in and session policies." />
      <div className="mt-4">
        <Toggle label="Two-factor authentication" desc="Require a code from an authenticator app." />
        <Toggle label="Sign-out inactive sessions" desc="Auto-sign out after 30 min inactivity." />
        <Toggle label="Admin invitation approval" desc="Super Admin must approve new invites." />
      </div>
      <div className="mt-6 grid gap-5 md:grid-cols-2">
        <Field l="Current password"><input type="password" className={inp} /></Field>
        <Field l="New password"><input type="password" className={inp} /></Field>
      </div>
    </>
  );
}

function IntegrationsPanel() {
  const rows = [
    { n: "KakaoTalk Channel", d: "Broadcast alerts to subscribers.", c: true },
    { n: "Toss Payments", d: "Card and easy payment processing.", c: true },
    { n: "Naver Analytics", d: "Track storefront visitors.", c: false },
    { n: "Google Drive", d: "Backup order archives.", c: false },
  ];
  return (
    <>
      <Header t="Integrations" s="Connect the atelier to outside tools." />
      <ul className="mt-4 divide-y divide-black/[0.05]">
        {rows.map((r) => (
          <li key={r.n} className="flex items-center justify-between py-3.5">
            <div>
              <p className="text-[13px] font-medium">{r.n}</p>
              <p className="text-[11.5px] text-black/50">{r.d}</p>
            </div>
            <button className={`h-9 rounded-lg px-3.5 text-[12px] font-medium ${r.c ? "border border-black/[0.08] bg-white text-black/70" : "bg-[#1a1410] text-white"}`}>
              {r.c ? "Connected" : "Connect"}
            </button>
          </li>
        ))}
      </ul>
    </>
  );
}
