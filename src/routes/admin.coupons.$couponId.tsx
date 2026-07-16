import { createFileRoute, Link, useParams } from "@tanstack/react-router";
import { ArrowLeft, Download, Search, TicketPercent, TrendingUp, Users, Calendar } from "lucide-react";
import { useEffect, useMemo, useState } from "react";

export const Route = createFileRoute("/admin/coupons/$couponId")({
  head: () => ({ meta: [{ title: "Coupon Usage — SERIN Admin" }] }),
  component: CouponUsagePage,
});

type Coupon = {
  id: string;
  code: string;
  description: string;
  type: "percent" | "fixed";
  value: number;
  minOrder: number;
  usageLimit: number;
  used: number;
  startsAt: string;
  endsAt: string;
  active: boolean;
};

type Redemption = {
  id: string;
  orderId: string;
  customer: string;
  email: string;
  orderTotal: number;
  discount: number;
  redeemedAt: string; // ISO
  channel: "Web" | "Showroom" | "Concierge";
};

const COUPONS_KEY = "serin.admin.coupons";
const USAGE_KEY = "serin.admin.coupons.usage";

function seedFor(couponId: string, used: number, avgDiscount: number): Redemption[] {
  const names = [
    ["Ji-woo Park", "ji.park@example.com"],
    ["Min-jun Lee", "minjun.lee@example.com"],
    ["Seo-yeon Kim", "seoyeon.kim@example.com"],
    ["Ha-eun Choi", "haeun.choi@example.com"],
    ["Do-yun Jung", "doyun.jung@example.com"],
    ["Yuna Han", "yuna.han@example.com"],
    ["Ethan Wright", "ethan.w@example.com"],
    ["Amelia Chen", "amelia.chen@example.com"],
  ];
  const channels: Redemption["channel"][] = ["Web", "Showroom", "Concierge"];
  const arr: Redemption[] = [];
  const count = Math.min(used, 24);
  const now = Date.now();
  for (let i = 0; i < count; i++) {
    const [n, e] = names[i % names.length];
    const days = Math.floor(Math.random() * 90);
    const total = Math.round((300000 + Math.random() * 900000) / 1000) * 1000;
    const disc = Math.round((avgDiscount * (0.7 + Math.random() * 0.6)) / 1000) * 1000;
    arr.push({
      id: `${couponId}-r${i + 1}`,
      orderId: `SR-${(24000 + Math.floor(Math.random() * 999)).toString()}`,
      customer: n,
      email: e,
      orderTotal: total,
      discount: disc,
      redeemedAt: new Date(now - days * 86400000).toISOString(),
      channel: channels[i % channels.length],
    });
  }
  return arr.sort((a, b) => (a.redeemedAt < b.redeemedAt ? 1 : -1));
}

function CouponUsagePage() {
  const { couponId } = useParams({ from: "/admin/coupons/$couponId" });
  const [coupon, setCoupon] = useState<Coupon | null>(null);
  const [rows, setRows] = useState<Redemption[]>([]);
  const [q, setQ] = useState("");

  useEffect(() => {
    try {
      const raw = localStorage.getItem(COUPONS_KEY);
      if (raw) {
        const list: Coupon[] = JSON.parse(raw);
        const found = list.find((c) => c.id === couponId) || null;
        setCoupon(found);
        if (found) {
          const usageRaw = localStorage.getItem(USAGE_KEY);
          const map: Record<string, Redemption[]> = usageRaw ? JSON.parse(usageRaw) : {};
          if (!map[found.id]) {
            const avg =
              found.type === "percent"
                ? Math.round((found.minOrder || 500000) * (found.value / 100))
                : found.value;
            map[found.id] = seedFor(found.id, found.used, avg || 50000);
            localStorage.setItem(USAGE_KEY, JSON.stringify(map));
          }
          setRows(map[found.id]);
        }
      }
    } catch {}
  }, [couponId]);

  const filtered = useMemo(() => {
    if (!q) return rows;
    const s = q.toLowerCase();
    return rows.filter(
      (r) =>
        r.orderId.toLowerCase().includes(s) ||
        r.customer.toLowerCase().includes(s) ||
        r.email.toLowerCase().includes(s),
    );
  }, [rows, q]);

  const stats = useMemo(() => {
    const totalDiscount = rows.reduce((s, r) => s + r.discount, 0);
    const totalOrders = rows.reduce((s, r) => s + r.orderTotal, 0);
    const unique = new Set(rows.map((r) => r.email)).size;
    return { totalDiscount, totalOrders, unique, count: rows.length };
  }, [rows]);

  const exportCsv = () => {
    const header = "Order,Customer,Email,Channel,Order Total (KRW),Discount (KRW),Redeemed At\n";
    const body = rows
      .map((r) =>
        [r.orderId, r.customer, r.email, r.channel, r.orderTotal, r.discount, r.redeemedAt].join(","),
      )
      .join("\n");
    const blob = new Blob([header + body], { type: "text/csv" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `${coupon?.code || "coupon"}-usage.csv`;
    a.click();
    URL.revokeObjectURL(url);
  };

  if (!coupon) {
    return (
      <div className="space-y-4">
        <Link to="/admin/coupons" className="inline-flex items-center gap-2 text-[13px] text-black/60 hover:text-black">
          <ArrowLeft className="h-4 w-4" /> Back to coupons
        </Link>
        <div className="rounded-2xl border border-black/[0.06] bg-white p-12 text-center text-black/50">
          Coupon not found.
        </div>
      </div>
    );
  }

  const pct = coupon.usageLimit > 0 ? Math.min(100, Math.round((coupon.used / coupon.usageLimit) * 100)) : 0;

  return (
    <div className="space-y-6">
      <div>
        <Link to="/admin/coupons" className="inline-flex items-center gap-2 text-[12.5px] text-black/55 hover:text-black">
          <ArrowLeft className="h-4 w-4" /> Back to coupons
        </Link>
      </div>

      <div className="flex flex-wrap items-end justify-between gap-4">
        <div>
          <p className="text-[11px] tracking-[0.28em] text-black/45">COUPON USAGE</p>
          <div className="mt-1 flex items-center gap-3">
            <code className="rounded-md bg-[#faf6ec] px-2.5 py-1.5 font-mono text-[14px] font-semibold tracking-wider text-[#8b6f3f] ring-1 ring-[#e6cf9e]/40">
              {coupon.code}
            </code>
            <span className="text-[13px] text-black/55">{coupon.description}</span>
          </div>
        </div>
        <button
          onClick={exportCsv}
          className="inline-flex h-10 items-center gap-2 rounded-xl border border-black/[0.08] bg-white px-4 text-[12.5px] font-medium text-black/70 hover:bg-black/[0.04]"
        >
          <Download className="h-4 w-4" /> Export CSV
        </button>
      </div>

      <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
        {[
          { l: "Redemptions", v: stats.count.toLocaleString(), i: TicketPercent },
          { l: "Unique Customers", v: stats.unique.toLocaleString(), i: Users },
          { l: "Total Discount", v: `${stats.totalDiscount.toLocaleString()} KRW`, i: TrendingUp },
          { l: "Gross Revenue", v: `${stats.totalOrders.toLocaleString()} KRW`, i: Calendar },
        ].map((s) => {
          const Icon = s.i;
          return (
            <div key={s.l} className="rounded-2xl border border-black/[0.06] bg-white p-5">
              <div className="flex items-center justify-between">
                <p className="text-[11px] tracking-[0.22em] text-black/45">{s.l.toUpperCase()}</p>
                <div className="grid h-9 w-9 place-items-center rounded-xl bg-gradient-to-br from-[#faf6ec] to-[#f0e6cf] text-[#8b6f3f]">
                  <Icon className="h-4 w-4" strokeWidth={1.6} />
                </div>
              </div>
              <p className="mt-3 font-serif text-2xl">{s.v}</p>
            </div>
          );
        })}
      </div>

      <div className="rounded-2xl border border-black/[0.06] bg-white p-5">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div>
            <p className="text-[11px] tracking-[0.22em] text-black/45">USAGE PROGRESS</p>
            <p className="mt-1 text-[13px] text-black/70">
              <span className="font-medium tabular-nums">{coupon.used.toLocaleString()}</span> of{" "}
              <span className="tabular-nums">
                {coupon.usageLimit > 0 ? coupon.usageLimit.toLocaleString() : "∞"}
              </span>{" "}
              redemptions
            </p>
          </div>
          <p className="tabular-nums font-serif text-2xl text-[#8b6f3f]">{coupon.usageLimit > 0 ? `${pct}%` : "—"}</p>
        </div>
        {coupon.usageLimit > 0 && (
          <div className="mt-4 h-2 w-full overflow-hidden rounded-full bg-black/[0.06]">
            <div
              className="h-full rounded-full bg-gradient-to-r from-[#e6cf9e] to-[#a17f43] transition-all"
              style={{ width: `${pct}%` }}
            />
          </div>
        )}
      </div>

      <div className="flex items-center gap-3">
        <div className="relative max-w-md flex-1">
          <Search className="pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-black/40" />
          <input
            value={q}
            onChange={(e) => setQ(e.target.value)}
            placeholder="Search order, customer or email…"
            className="h-11 w-full rounded-xl border border-black/[0.07] bg-white pl-10 pr-4 text-sm focus:border-black/20 focus:outline-none focus:ring-4 focus:ring-black/[0.04]"
          />
        </div>
      </div>

      <section className="overflow-hidden rounded-2xl border border-black/[0.06] bg-white">
        <div className="overflow-x-auto">
          <table className="w-full text-[12.5px]">
            <thead>
              <tr className="border-b border-black/[0.05] bg-[#faf9f6] text-left text-[11px] tracking-wider text-black/45">
                {["ORDER", "CUSTOMER", "CHANNEL", "ORDER TOTAL", "DISCOUNT", "REDEEMED"].map((h) => (
                  <th key={h} className="px-5 py-3 font-medium">{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {filtered.length === 0 && (
                <tr>
                  <td colSpan={6} className="px-5 py-16 text-center text-black/50">
                    No redemptions yet.
                  </td>
                </tr>
              )}
              {filtered.map((r) => (
                <tr key={r.id} className="border-b border-black/[0.04] last:border-0 hover:bg-[#faf9f6]">
                  <td className="px-5 py-4">
                    <Link
                      to="/admin/orders/$orderId"
                      params={{ orderId: r.orderId }}
                      className="font-medium text-[#8b6f3f] hover:underline"
                    >
                      {r.orderId}
                    </Link>
                  </td>
                  <td className="px-5 py-4">
                    <p className="font-medium text-black/80">{r.customer}</p>
                    <p className="text-[11.5px] text-black/45">{r.email}</p>
                  </td>
                  <td className="px-5 py-4">
                    <span className="inline-flex rounded-full bg-black/[0.04] px-2.5 py-1 text-[11px] font-medium text-black/60 ring-1 ring-black/10">
                      {r.channel}
                    </span>
                  </td>
                  <td className="px-5 py-4 tabular-nums text-black/70">{r.orderTotal.toLocaleString()} KRW</td>
                  <td className="px-5 py-4 tabular-nums font-medium text-emerald-700">
                    − {r.discount.toLocaleString()} KRW
                  </td>
                  <td className="px-5 py-4 tabular-nums text-black/55">
                    {new Date(r.redeemedAt).toLocaleDateString()}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
}
