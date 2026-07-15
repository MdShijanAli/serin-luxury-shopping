import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft, ChevronDown, MessageSquare, XCircle, Printer, Copy, Check, Package, CreditCard, Truck, User, MapPin, Clock } from "lucide-react";
import { useState } from "react";

export const Route = createFileRoute("/admin/orders/$orderId")({
  head: () => ({ meta: [{ title: "Order Detail — SERIN Admin" }] }),
  component: OrderDetailPage,
});

type Status = "Pending" | "Preparing" | "In Production" | "Ready" | "Completed" | "Cancelled";
const statuses: Status[] = ["Pending", "Preparing", "In Production", "Ready", "Completed", "Cancelled"];

const tone: Record<Status, string> = {
  Pending: "bg-amber-50 text-amber-700 ring-amber-200/70",
  Preparing: "bg-sky-50 text-sky-700 ring-sky-200/70",
  "In Production": "bg-violet-50 text-violet-700 ring-violet-200/70",
  Ready: "bg-emerald-50 text-emerald-700 ring-emerald-200/70",
  Completed: "bg-slate-100 text-slate-600 ring-slate-200",
  Cancelled: "bg-rose-50 text-rose-700 ring-rose-200/70",
};

const items = [
  { name: "Photo Bar 100g", spec: "100g · 실버바", qty: 1, price: 329000, img: "🪙" },
  { name: "Photo Bar 10g", spec: "10g · 실버바", qty: 2, price: 40000, img: "🥈" },
  { name: "Heritage Bar Prestige 1kg", spec: "한정판 프레스티지 1kg", qty: 1, price: 180000, img: "🏆" },
];

const logs = [
  { t: "2024.05.12 14:35", e: "Order received", d: "Customer submitted order via web" },
  { t: "2024.05.12 14:35", e: "Virtual account issued", d: "Bank: KEB Hana · Due within 24h" },
  { t: "2024.05.12 14:40", e: "Awaiting payment", d: "Deposit pending confirmation" },
];

function OrderDetailPage() {
  const { orderId } = Route.useParams();
  const [status, setStatus] = useState<Status>("Pending");
  const [menuOpen, setMenuOpen] = useState(false);
  const [copied, setCopied] = useState(false);

  const subtotal = items.reduce((s, i) => s + i.qty * i.price, 0);
  const shipping: number = 0;
  const total = subtotal + shipping;

  const copy = () => {
    navigator.clipboard.writeText(orderId);
    setCopied(true);
    setTimeout(() => setCopied(false), 1200);
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex items-center gap-4">
          <Link
            to="/admin/orders"
            className="grid h-10 w-10 place-items-center rounded-xl border border-black/[0.08] bg-white hover:bg-black/[0.03]"
          >
            <ArrowLeft className="h-4 w-4" />
          </Link>
          <div>
            <p className="text-[11px] tracking-[0.28em] text-black/45">ORDER DETAIL</p>
            <div className="mt-1 flex items-center gap-3">
              <h1 className="font-serif text-3xl tabular-nums">{orderId}</h1>
              <button onClick={copy} className="grid h-7 w-7 place-items-center rounded-lg text-black/40 hover:bg-black/[0.04] hover:text-black">
                {copied ? <Check className="h-3.5 w-3.5 text-emerald-600" /> : <Copy className="h-3.5 w-3.5" />}
              </button>
              <span className={`inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-[11px] font-medium ring-1 ${tone[status]}`}>
                <span className="h-1.5 w-1.5 rounded-full bg-current" />
                {status}
              </span>
            </div>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <button className="flex h-10 items-center gap-2 rounded-xl border border-black/[0.08] bg-white px-4 text-[12.5px] font-medium hover:bg-black/[0.03]">
            <Printer className="h-4 w-4" /> Print
          </button>
          <div className="relative">
            <button
              onClick={() => setMenuOpen((v) => !v)}
              className="flex h-10 items-center gap-2 rounded-xl bg-[#1a1410] px-4 text-[12.5px] font-medium text-white hover:bg-black"
            >
              Change status <ChevronDown className="h-4 w-4" />
            </button>
            {menuOpen && (
              <>
                <div className="fixed inset-0 z-30" onClick={() => setMenuOpen(false)} />
                <div className="absolute right-0 top-full z-40 mt-1 w-[190px] rounded-xl border border-black/[0.06] bg-white p-1 shadow-lg">
                  {statuses.map((s) => (
                    <button
                      key={s}
                      onClick={() => { setStatus(s); setMenuOpen(false); }}
                      className={`block w-full rounded-lg px-3 py-2 text-left text-[12.5px] ${status === s ? "bg-black/[0.04] font-medium" : "hover:bg-black/[0.04]"}`}
                    >
                      {s}
                    </button>
                  ))}
                </div>
              </>
            )}
          </div>
        </div>
      </div>

      {/* Grid */}
      <div className="grid gap-5 lg:grid-cols-3">
        {/* LEFT — main */}
        <div className="space-y-5 lg:col-span-2">
          {/* Info cards row */}
          <div className="grid gap-5 sm:grid-cols-2">
            <Card icon={Package} title="Order Info">
              <Row k="Order #" v={orderId} />
              <Row k="Date" v="2024.05.12 14:35" />
              <Row k="Fulfillment" v="배송 (Delivery)" />
              <Row k="Due" v="2024.05.13 14:35 (24h)" />
            </Card>
            <Card icon={CreditCard} title="Payment">
              <Row k="Method" v="가상계좌 (선입금 10%)" />
              <Row k="Bank" v="KEB Hana · 123-4567-890" />
              <Row k="Deposit" v="₩ 55,000" />
              <Row k="Balance" v="₩ 495,000" />
            </Card>
            <Card icon={User} title="Customer">
              <Row k="Name" v="김서린" />
              <Row k="Phone" v="010-1234-5678" />
              <Row k="Email" v="serin_kim@example.com" />
              <Row k="Requests" v="문구는 깔끔하게 부탁드립니다." />
            </Card>
            <Card icon={MapPin} title="Shipping">
              <Row k="Address" v="서울 강남구 청담동 · 123-45" />
              <Row k="Recipient" v="김서린 · 010-1234-5678" />
              <Row k="Carrier" v="CJ Logistics" />
              <Row k="Tracking" v="Not yet assigned" />
            </Card>
          </div>

          {/* Items */}
          <section className="overflow-hidden rounded-2xl border border-black/[0.06] bg-white">
            <div className="flex items-center justify-between border-b border-black/[0.05] px-5 py-4">
              <h2 className="text-[13px] font-medium tracking-wide">Order items</h2>
              <span className="text-[11.5px] text-black/50">{items.length} items</span>
            </div>
            <table className="w-full text-[12.5px]">
              <thead>
                <tr className="border-b border-black/[0.05] bg-[#faf9f6] text-left text-[11px] tracking-wider text-black/45">
                  <th className="px-5 py-3 font-medium">PRODUCT</th>
                  <th className="px-5 py-3 font-medium">QTY</th>
                  <th className="px-5 py-3 font-medium">UNIT</th>
                  <th className="px-5 py-3 text-right font-medium">AMOUNT</th>
                </tr>
              </thead>
              <tbody>
                {items.map((it, i) => (
                  <tr key={i} className="border-b border-black/[0.04] last:border-0">
                    <td className="px-5 py-4">
                      <div className="flex items-center gap-3">
                        <div className="grid h-11 w-11 place-items-center rounded-xl bg-gradient-to-br from-[#f4ead0] to-[#e8dab0] text-lg">
                          {it.img}
                        </div>
                        <div>
                          <p className="font-medium">{it.name}</p>
                          <p className="text-[11.5px] text-black/50">{it.spec}</p>
                        </div>
                      </div>
                    </td>
                    <td className="px-5 py-4 tabular-nums">{it.qty}</td>
                    <td className="px-5 py-4 tabular-nums text-black/60">₩ {it.price.toLocaleString()}</td>
                    <td className="px-5 py-4 text-right font-medium tabular-nums">₩ {(it.qty * it.price).toLocaleString()}</td>
                  </tr>
                ))}
              </tbody>
              <tfoot className="bg-[#faf9f6]">
                <tr>
                  <td colSpan={3} className="px-5 py-2.5 text-right text-[12px] text-black/55">Subtotal</td>
                  <td className="px-5 py-2.5 text-right tabular-nums">₩ {subtotal.toLocaleString()}</td>
                </tr>
                <tr>
                  <td colSpan={3} className="px-5 py-2.5 text-right text-[12px] text-black/55">Shipping</td>
                  <td className="px-5 py-2.5 text-right tabular-nums">{shipping ? `₩ ${shipping.toLocaleString()}` : "Free"}</td>
                </tr>
                <tr className="border-t border-black/[0.06]">
                  <td colSpan={3} className="px-5 py-3.5 text-right text-[12.5px] font-medium">Total</td>
                  <td className="px-5 py-3.5 text-right font-serif text-lg tabular-nums">₩ {total.toLocaleString()}</td>
                </tr>
              </tfoot>
            </table>
          </section>

          {/* Actions */}
          <div className="grid gap-3 sm:grid-cols-3">
            <button className="flex h-11 items-center justify-center gap-2 rounded-xl border border-black/[0.08] bg-white text-[12.5px] font-medium hover:bg-black/[0.03]">
              <XCircle className="h-4 w-4" /> Cancel order
            </button>
            <button className="flex h-11 items-center justify-center gap-2 rounded-xl border border-black/[0.08] bg-white text-[12.5px] font-medium hover:bg-black/[0.03]">
              <MessageSquare className="h-4 w-4" /> Send SMS
            </button>
            <button
              onClick={() => setMenuOpen(true)}
              className="flex h-11 items-center justify-center gap-2 rounded-xl bg-[#1a1410] text-[12.5px] font-medium text-white hover:bg-black"
            >
              <Truck className="h-4 w-4" /> Change status
            </button>
          </div>
        </div>

        {/* RIGHT — sidebar */}
        <div className="space-y-5">
          {/* Engraving preview */}
          <section className="overflow-hidden rounded-2xl border border-black/[0.06] bg-white">
            <div className="border-b border-black/[0.05] px-5 py-4">
              <h2 className="text-[13px] font-medium tracking-wide">Engraving message</h2>
            </div>
            <div className="p-5">
              <div className="relative aspect-square overflow-hidden rounded-xl bg-gradient-to-br from-[#e8dab0] via-[#f4ead0] to-[#d9c39a] ring-1 ring-[#c9a86a]/30">
                <div className="absolute inset-0 grid place-items-center">
                  <div className="text-center">
                    <p className="font-serif text-2xl tracking-wide text-[#3a2e1a]">Together,</p>
                    <p className="font-serif text-2xl tracking-wide text-[#3a2e1a]">Always <span className="text-rose-500">♥</span></p>
                    <p className="mt-3 text-[10px] tracking-[0.4em] text-[#3a2e1a]/70">SERIN</p>
                  </div>
                </div>
              </div>
              <p className="mt-3 text-[11.5px] text-black/50">Rendered on Photo Bar 100g face</p>
            </div>
          </section>

          {/* Upload */}
          <section className="overflow-hidden rounded-2xl border border-black/[0.06] bg-white">
            <div className="border-b border-black/[0.05] px-5 py-4">
              <h2 className="text-[13px] font-medium tracking-wide">Uploaded photo</h2>
            </div>
            <div className="p-5">
              <div className="aspect-[4/3] overflow-hidden rounded-xl bg-gradient-to-br from-slate-200 to-slate-300 ring-1 ring-black/5">
                <div className="grid h-full place-items-center text-slate-500">
                  <div className="text-center">
                    <div className="mx-auto grid h-14 w-14 place-items-center rounded-full bg-white/60">👥</div>
                    <p className="mt-2 text-[11.5px]">Family portrait · 2.4 MB</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Timeline */}
          <section className="overflow-hidden rounded-2xl border border-black/[0.06] bg-white">
            <div className="flex items-center gap-2 border-b border-black/[0.05] px-5 py-4">
              <Clock className="h-4 w-4 text-black/50" />
              <h2 className="text-[13px] font-medium tracking-wide">Activity log</h2>
            </div>
            <ol className="relative p-5">
              <span className="absolute left-[26px] top-6 bottom-6 w-px bg-black/10" />
              {logs.map((l, i) => (
                <li key={i} className="relative flex gap-4 pb-5 last:pb-0">
                  <span className="relative z-10 mt-1 h-2.5 w-2.5 shrink-0 rounded-full bg-gradient-to-br from-[#e6cf9e] to-[#a17f43] ring-4 ring-white" />
                  <div>
                    <p className="text-[12.5px] font-medium">{l.e}</p>
                    <p className="text-[11.5px] text-black/50">{l.d}</p>
                    <p className="mt-0.5 text-[10.5px] tabular-nums text-black/40">{l.t}</p>
                  </div>
                </li>
              ))}
            </ol>
          </section>
        </div>
      </div>
    </div>
  );
}

function Card({ icon: Icon, title, children }: { icon: React.ComponentType<{ className?: string }>; title: string; children: React.ReactNode }) {
  return (
    <section className="rounded-2xl border border-black/[0.06] bg-white p-5">
      <div className="mb-3 flex items-center gap-2">
        <div className="grid h-7 w-7 place-items-center rounded-lg bg-[#faf5e6] text-[#8b6f3f]">
          <Icon className="h-3.5 w-3.5" />
        </div>
        <h2 className="text-[13px] font-medium tracking-wide">{title}</h2>
      </div>
      <dl className="space-y-2">{children}</dl>
    </section>
  );
}

function Row({ k, v }: { k: string; v: string }) {
  return (
    <div className="flex justify-between gap-4 text-[12.5px]">
      <dt className="shrink-0 text-black/50">{k}</dt>
      <dd className="text-right text-black/85">{v}</dd>
    </div>
  );
}
