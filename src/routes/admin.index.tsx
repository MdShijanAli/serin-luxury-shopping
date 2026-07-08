import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ShoppingBag,
  Wallet,
  Users,
  Package,
  ArrowUpRight,
  ArrowDownRight,
  MoreHorizontal,
  Sparkles,
  ChevronRight,
  Send,
  FileText,
  CheckCircle2,
  Clock,
} from "lucide-react";

export const Route = createFileRoute("/admin/")({
  head: () => ({
    meta: [{ title: "Dashboard — SERIN Admin" }],
  }),
  component: AdminDashboard,
});

const stats = [
  { label: "Today's Orders", value: "12", delta: "+3", up: true, sub: "vs yesterday", icon: ShoppingBag, tone: "gold" },
  { label: "Revenue (KRW)", value: "8.4M", delta: "+12.4%", up: true, sub: "this week", icon: Wallet, tone: "dark" },
  { label: "New Customers", value: "48", delta: "+8", up: true, sub: "this week", icon: Users, tone: "light" },
  { label: "In Production", value: "13", delta: "-2", up: false, sub: "vs last week", icon: Package, tone: "light" },
];

const orders = [
  { id: "02024-0512-0013", name: "김서린", item: "Photo Bar 100g × 2", amount: "550,000", status: "Pending", tone: "amber" },
  { id: "02024-0512-0012", name: "이준호", item: "Photo Bar 10g", amount: "129,000", status: "Preparing", tone: "blue" },
  { id: "02024-0511-0011", name: "강하늘", item: "Photo Bar 300g", amount: "379,000", status: "In Production", tone: "violet" },
  { id: "02024-0511-0009", name: "박인지", item: "Photo Bar 100g", amount: "329,000", status: "In Production", tone: "violet" },
  { id: "02024-0510-0008", name: "최영준", item: "Heritage Bar 1kg", amount: "Inquiry", status: "Ready", tone: "emerald" },
  { id: "02024-0510-0007", name: "이지은", item: "Photo Bar 500g", amount: "599,000", status: "Completed", tone: "gray" },
];

const toneMap: Record<string, string> = {
  amber: "bg-amber-50 text-amber-700 ring-amber-200/70",
  blue: "bg-sky-50 text-sky-700 ring-sky-200/70",
  violet: "bg-violet-50 text-violet-700 ring-violet-200/70",
  emerald: "bg-emerald-50 text-emerald-700 ring-emerald-200/70",
  gray: "bg-slate-100 text-slate-600 ring-slate-200",
};

function Spark({ up = true }: { up?: boolean }) {
  const stroke = up ? "#a17f43" : "#94a3b8";
  return (
    <svg viewBox="0 0 120 40" className="h-10 w-24">
      <defs>
        <linearGradient id={`g-${up}`} x1="0" x2="0" y1="0" y2="1">
          <stop offset="0%" stopColor={stroke} stopOpacity="0.35" />
          <stop offset="100%" stopColor={stroke} stopOpacity="0" />
        </linearGradient>
      </defs>
      <path d="M0 30 L15 24 L30 27 L45 18 L60 22 L75 12 L90 16 L105 6 L120 10 L120 40 L0 40 Z" fill={`url(#g-${up})`} />
      <path d="M0 30 L15 24 L30 27 L45 18 L60 22 L75 12 L90 16 L105 6 L120 10" fill="none" stroke={stroke} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function RevenueChart() {
  const data = [42, 55, 48, 62, 58, 74, 68, 82, 76, 90, 84, 96];
  const max = 100;
  const w = 100 / (data.length - 1);
  const pts = data.map((v, i) => `${i * w},${100 - v}`).join(" ");
  return (
    <div className="relative h-[260px] w-full">
      <svg viewBox="0 0 100 100" preserveAspectRatio="none" className="absolute inset-0 h-full w-full">
        <defs>
          <linearGradient id="rev" x1="0" x2="0" y1="0" y2="1">
            <stop offset="0%" stopColor="#e6cf9e" stopOpacity="0.55" />
            <stop offset="100%" stopColor="#e6cf9e" stopOpacity="0" />
          </linearGradient>
        </defs>
        {[20, 40, 60, 80].map((y) => (
          <line key={y} x1="0" x2="100" y1={y} y2={y} stroke="#000" strokeOpacity="0.04" strokeWidth="0.2" />
        ))}
        <polygon points={`0,100 ${pts} 100,100`} fill="url(#rev)" />
        <polyline points={pts} fill="none" stroke="#a17f43" strokeWidth="0.8" strokeLinecap="round" strokeLinejoin="round" vectorEffect="non-scaling-stroke" />
        {data.map((v, i) => (
          <circle key={i} cx={i * w} cy={100 - v} r="0.9" fill="#a17f43" vectorEffect="non-scaling-stroke" />
        ))}
      </svg>
    </div>
  );
}

function AdminDashboard() {
  return (
    <div className="space-y-6">
      {/* Hero row */}
      <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="text-[11px] tracking-[0.28em] text-black/45">MONDAY · 2024.05.12</p>
          <h1 className="mt-1.5 font-serif text-[34px] leading-none">Good afternoon, Seo-rin.</h1>
          <p className="mt-2 text-sm text-black/55">Here's what's moving through the atelier today.</p>
        </div>
        <div className="flex items-center gap-2">
          <button className="h-10 rounded-xl border border-black/[0.08] bg-white px-4 text-[12.5px] font-medium hover:bg-white/70">
            Export report
          </button>
          <button className="flex h-10 items-center gap-2 rounded-xl bg-[#1a1410] px-4 text-[12.5px] font-medium text-white hover:bg-black">
            <Sparkles className="h-4 w-4" strokeWidth={1.6} /> Insights
          </button>
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
        {stats.map((s) => {
          const Icon = s.icon;
          const dark = s.tone === "dark";
          const gold = s.tone === "gold";
          return (
            <div
              key={s.label}
              className={`group relative overflow-hidden rounded-2xl border p-5 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_20px_50px_-30px_rgba(0,0,0,0.35)] ${
                dark
                  ? "border-white/5 bg-gradient-to-br from-[#1a1410] to-[#0b0b0d] text-white"
                  : gold
                  ? "border-[#e6cf9e]/40 bg-gradient-to-br from-[#faf3e2] to-[#f4ead0]"
                  : "border-black/[0.06] bg-white"
              }`}
            >
              <div className="flex items-start justify-between">
                <div
                  className={`grid h-10 w-10 place-items-center rounded-xl ${
                    dark
                      ? "bg-white/10 text-white"
                      : gold
                      ? "bg-white/70 text-[#8b6f3f]"
                      : "bg-[#f4f2ee] text-[#1a1410]"
                  }`}
                >
                  <Icon className="h-[18px] w-[18px]" strokeWidth={1.6} />
                </div>
                <button className={`rounded-lg p-1 opacity-0 transition-opacity group-hover:opacity-100 ${dark ? "text-white/60" : "text-black/40"}`}>
                  <MoreHorizontal className="h-4 w-4" />
                </button>
              </div>
              <p className={`mt-6 text-[11.5px] tracking-wide ${dark ? "text-white/55" : "text-black/50"}`}>{s.label}</p>
              <div className="mt-1 flex items-end justify-between">
                <p className={`font-serif text-4xl leading-none ${dark ? "text-white" : "text-[#1a1410]"}`}>{s.value}</p>
                <Spark up={s.up} />
              </div>
              <div className="mt-3 flex items-center gap-2 text-[11.5px]">
                <span
                  className={`inline-flex items-center gap-1 rounded-full px-2 py-0.5 ${
                    s.up
                      ? "bg-emerald-500/15 text-emerald-600"
                      : "bg-rose-500/15 text-rose-600"
                  }`}
                >
                  {s.up ? <ArrowUpRight className="h-3 w-3" /> : <ArrowDownRight className="h-3 w-3" />}
                  {s.delta}
                </span>
                <span className={dark ? "text-white/45" : "text-black/45"}>{s.sub}</span>
              </div>
            </div>
          );
        })}
      </div>

      {/* Middle grid */}
      <div className="grid grid-cols-1 gap-5 xl:grid-cols-[1fr_380px]">
        {/* Revenue */}
        <section className="rounded-2xl border border-black/[0.06] bg-white p-6">
          <div className="flex items-start justify-between">
            <div>
              <p className="text-[11px] tracking-[0.24em] text-black/45">REVENUE</p>
              <div className="mt-1.5 flex items-baseline gap-3">
                <p className="font-serif text-[32px] leading-none">₩ 42.8M</p>
                <span className="inline-flex items-center gap-1 rounded-full bg-emerald-500/15 px-2 py-0.5 text-[11px] text-emerald-600">
                  <ArrowUpRight className="h-3 w-3" /> 18.2%
                </span>
              </div>
              <p className="mt-1.5 text-xs text-black/50">Compared to previous 12 weeks</p>
            </div>
            <div className="flex items-center gap-1 rounded-xl bg-[#f4f2ee] p-1 text-[11.5px]">
              {["Week", "Month", "Quarter"].map((r, i) => (
                <button key={r} className={`rounded-lg px-3 py-1.5 transition-colors ${i === 1 ? "bg-white text-[#1a1410] shadow-sm" : "text-black/50 hover:text-black"}`}>
                  {r}
                </button>
              ))}
            </div>
          </div>
          <div className="mt-4">
            <RevenueChart />
          </div>
          <div className="mt-4 grid grid-cols-3 gap-4 border-t border-black/[0.06] pt-4">
            {[
              { k: "Photo Bar", v: "₩ 22.4M", p: "52%" },
              { k: "Heritage Bar", v: "₩ 14.1M", p: "33%" },
              { k: "Custom", v: "₩ 6.3M", p: "15%" },
            ].map((c) => (
              <div key={c.k}>
                <p className="text-[11px] text-black/45">{c.k}</p>
                <p className="mt-0.5 font-serif text-xl">{c.v}</p>
                <div className="mt-2 h-1 overflow-hidden rounded-full bg-black/[0.05]">
                  <div className="h-full rounded-full bg-gradient-to-r from-[#e6cf9e] to-[#a17f43]" style={{ width: c.p }} />
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Order status donut + quick actions */}
        <section className="rounded-2xl border border-black/[0.06] bg-white p-6">
          <p className="text-[11px] tracking-[0.24em] text-black/45">ORDER STATUS</p>
          <div className="mt-4 flex items-center gap-5">
            <div className="relative h-[140px] w-[140px] shrink-0">
              <svg viewBox="0 0 42 42" className="h-full w-full -rotate-90">
                <circle cx="21" cy="21" r="15.9" fill="none" stroke="#f4f2ee" strokeWidth="5" />
                {[
                  { c: "#f59e0b", v: 16 },
                  { c: "#3b82f6", v: 12 },
                  { c: "#8b5cf6", v: 20 },
                  { c: "#10b981", v: 42 },
                  { c: "#94a3b8", v: 10 },
                ].reduce<{ acc: number; els: React.ReactNode[] }>(
                  (a, s) => {
                    a.els.push(
                      <circle
                        key={a.acc}
                        cx="21"
                        cy="21"
                        r="15.9"
                        fill="none"
                        stroke={s.c}
                        strokeWidth="5"
                        strokeDasharray={`${s.v} ${100 - s.v}`}
                        strokeDashoffset={-a.acc}
                        strokeLinecap="butt"
                      />
                    );
                    a.acc += s.v;
                    return a;
                  },
                  { acc: 0, els: [] as React.ReactNode[] }
                ).els}
              </svg>
              <div className="absolute inset-0 grid place-items-center text-center">
                <div>
                  <p className="font-serif text-3xl leading-none">43</p>
                  <p className="mt-1 text-[10px] tracking-wider text-black/45">TOTAL</p>
                </div>
              </div>
            </div>
            <ul className="flex-1 space-y-2 text-[12.5px]">
              {[
                { c: "bg-amber-500", l: "Pending", v: 7 },
                { c: "bg-sky-500", l: "Preparing", v: 5 },
                { c: "bg-violet-500", l: "In production", v: 8 },
                { c: "bg-emerald-500", l: "Ready", v: 16 },
                { c: "bg-slate-400", l: "Cancelled", v: 2 },
              ].map((r) => (
                <li key={r.l} className="flex items-center justify-between">
                  <span className="flex items-center gap-2 text-black/70">
                    <span className={`h-2 w-2 rounded-full ${r.c}`} />
                    {r.l}
                  </span>
                  <span className="tabular-nums text-black/55">{r.v}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-5 border-t border-black/[0.06] pt-4">
            <p className="text-[11px] tracking-[0.24em] text-black/45">QUICK ACTIONS</p>
            <div className="mt-3 grid grid-cols-2 gap-2">
              {[
                { i: CheckCircle2, l: "Confirm deposit" },
                { i: Package, l: "Mark in production" },
                { i: Send, l: "Send SMS notice" },
                { i: FileText, l: "Search order" },
              ].map((a) => (
                <button
                  key={a.l}
                  className="flex items-center gap-2 rounded-xl border border-black/[0.06] bg-[#f8f7f4] px-3 py-2.5 text-left text-[12px] transition hover:-translate-y-0.5 hover:bg-white hover:shadow-sm"
                >
                  <a.i className="h-4 w-4 text-[#8b6f3f]" strokeWidth={1.6} />
                  {a.l}
                </button>
              ))}
            </div>
          </div>
        </section>
      </div>

      {/* Recent orders + customers */}
      <div className="grid grid-cols-1 gap-5 xl:grid-cols-[1fr_380px]">
        <section className="rounded-2xl border border-black/[0.06] bg-white">
          <div className="flex items-center justify-between px-6 py-5">
            <div>
              <p className="text-[11px] tracking-[0.24em] text-black/45">RECENT ORDERS</p>
              <p className="mt-0.5 font-serif text-xl">Today's atelier queue</p>
            </div>
            <Link to="/admin/orders" className="flex items-center gap-1 text-[12px] font-medium text-[#8b6f3f] hover:text-[#5f4d2c]">
              View all <ChevronRight className="h-3.5 w-3.5" />
            </Link>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-[12.5px]">
              <thead>
                <tr className="border-y border-black/[0.05] bg-[#faf9f6] text-left text-[11px] tracking-wider text-black/45">
                  <th className="px-6 py-3 font-medium">ORDER</th>
                  <th className="px-3 py-3 font-medium">CUSTOMER</th>
                  <th className="px-3 py-3 font-medium">ITEM</th>
                  <th className="px-3 py-3 text-right font-medium">AMOUNT</th>
                  <th className="px-6 py-3 font-medium">STATUS</th>
                </tr>
              </thead>
              <tbody>
                {orders.map((o) => (
                  <tr key={o.id} className="border-b border-black/[0.04] transition-colors last:border-0 hover:bg-[#faf9f6]">
                    <td className="px-6 py-4 font-medium tabular-nums text-[#1a1410]">{o.id}</td>
                    <td className="px-3 py-4">
                      <div className="flex items-center gap-2.5">
                        <div className="grid h-7 w-7 place-items-center rounded-full bg-gradient-to-br from-[#f4ead0] to-[#e6cf9e] text-[10px] font-medium text-[#5f4d2c]">
                          {o.name.slice(0, 1)}
                        </div>
                        {o.name}
                      </div>
                    </td>
                    <td className="px-3 py-4 text-black/60">{o.item}</td>
                    <td className="px-3 py-4 text-right tabular-nums">
                      {o.amount === "Inquiry" ? <span className="text-black/45">Inquiry</span> : <>₩ {o.amount}</>}
                    </td>
                    <td className="px-6 py-4">
                      <span className={`inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-[11px] font-medium ring-1 ${toneMap[o.tone]}`}>
                        <Clock className="h-3 w-3" strokeWidth={2} />
                        {o.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Latest customers + activity */}
        <div className="space-y-5">
          <section className="rounded-2xl border border-black/[0.06] bg-white p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-[11px] tracking-[0.24em] text-black/45">LATEST CLIENTS</p>
                <p className="mt-0.5 font-serif text-lg">Newly onboarded</p>
              </div>
              <button className="text-[11.5px] text-[#8b6f3f]">See all</button>
            </div>
            <ul className="mt-4 space-y-3">
              {[
                { n: "정다은", d: "Photo Bar 100g", t: "2m" },
                { n: "조성인", d: "Photo Bar 10g", t: "18m" },
                { n: "박인지", d: "Heritage 1kg inquiry", t: "1h" },
                { n: "이지은", d: "Photo Bar 500g", t: "3h" },
              ].map((c) => (
                <li key={c.n} className="flex items-center gap-3">
                  <div className="grid h-9 w-9 place-items-center rounded-full bg-gradient-to-br from-[#1a1410] to-[#3a2a1c] text-[11px] font-medium text-white">
                    {c.n.slice(0, 1)}
                  </div>
                  <div className="min-w-0 flex-1">
                    <p className="truncate text-[13px] font-medium">{c.n}</p>
                    <p className="truncate text-[11px] text-black/50">{c.d}</p>
                  </div>
                  <span className="text-[10.5px] text-black/40">{c.t}</span>
                </li>
              ))}
            </ul>
          </section>

          <section className="rounded-2xl border border-black/[0.06] bg-white p-6">
            <p className="text-[11px] tracking-[0.24em] text-black/45">ACTIVITY</p>
            <ol className="relative mt-4 space-y-4 border-l border-black/[0.06] pl-5">
              {[
                { t: "Deposit confirmed", d: "SRN-…0013 · 14:35", c: "bg-emerald-500" },
                { t: "Order moved to production", d: "SRN-…0011 · 13:20", c: "bg-violet-500" },
                { t: "New inquiry received", d: "Heritage 1kg · 11:02", c: "bg-amber-500" },
                { t: "Customer signed up", d: "@jieun · 09:14", c: "bg-sky-500" },
              ].map((a, i) => (
                <li key={i} className="relative">
                  <span className={`absolute -left-[26px] top-1 h-2.5 w-2.5 rounded-full ring-4 ring-white ${a.c}`} />
                  <p className="text-[12.5px] font-medium">{a.t}</p>
                  <p className="text-[11px] text-black/50">{a.d}</p>
                </li>
              ))}
            </ol>
          </section>
        </div>
      </div>
    </div>
  );
}
