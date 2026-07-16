import { createFileRoute, Link } from "@tanstack/react-router";
import { Plus, Search, Pencil, Trash2, X, Copy, Check, Tag, Calendar, Percent, TicketPercent, FlaskConical, CheckCircle2, XCircle, AlertCircle } from "lucide-react";
import { useEffect, useMemo, useState } from "react";

export const Route = createFileRoute("/admin/coupons")({
  head: () => ({ meta: [{ title: "Coupons — SERIN Admin" }] }),
  component: CouponsPage,
});

type Coupon = {
  id: string;
  code: string;
  description: string;
  type: "percent" | "fixed";
  value: number; // percent 0-100 or KRW amount
  minOrder: number;
  usageLimit: number; // 0 = unlimited
  used: number;
  startsAt: string; // yyyy-mm-dd
  endsAt: string; // yyyy-mm-dd
  active: boolean;
};

const STORAGE_KEY = "serin.admin.coupons";

const seed: Coupon[] = [
  { id: "c1", code: "WELCOME10", description: "First order — 10% off", type: "percent", value: 10, minOrder: 100000, usageLimit: 0, used: 42, startsAt: "2026-01-01", endsAt: "2026-12-31", active: true },
  { id: "c2", code: "SERIN50K", description: "50,000 KRW off Photo Bars", type: "fixed", value: 50000, minOrder: 300000, usageLimit: 200, used: 128, startsAt: "2026-06-01", endsAt: "2026-08-31", active: true },
  { id: "c3", code: "VIP15", description: "VIP concierge — 15% off", type: "percent", value: 15, minOrder: 500000, usageLimit: 100, used: 12, startsAt: "2026-05-01", endsAt: "2026-09-30", active: true },
  { id: "c4", code: "SPRING2026", description: "Spring atelier promo", type: "percent", value: 8, minOrder: 0, usageLimit: 500, used: 500, startsAt: "2026-03-01", endsAt: "2026-05-31", active: false },
];

function today() {
  return new Date().toISOString().slice(0, 10);
}

function statusOf(c: Coupon): { label: string; tone: string } {
  if (!c.active) return { label: "Inactive", tone: "bg-black/[0.05] text-black/60 ring-black/10" };
  const t = today();
  if (c.startsAt > t) return { label: "Scheduled", tone: "bg-sky-50 text-sky-700 ring-sky-200/70" };
  if (c.endsAt < t) return { label: "Expired", tone: "bg-rose-50 text-rose-700 ring-rose-200/70" };
  if (c.usageLimit > 0 && c.used >= c.usageLimit) return { label: "Exhausted", tone: "bg-amber-50 text-amber-700 ring-amber-200/70" };
  return { label: "Active", tone: "bg-emerald-50 text-emerald-700 ring-emerald-200/70" };
}

function fmtValue(c: Coupon) {
  return c.type === "percent" ? `${c.value}%` : `${c.value.toLocaleString()} KRW`;
}

function CouponsPage() {
  const [items, setItems] = useState<Coupon[]>(seed);
  const [q, setQ] = useState("");
  const [filter, setFilter] = useState<"all" | "active" | "scheduled" | "expired" | "inactive">("all");
  const [editing, setEditing] = useState<Coupon | null>(null);
  const [open, setOpen] = useState(false);
  const [confirmDelete, setConfirmDelete] = useState<Coupon | null>(null);
  const [copied, setCopied] = useState<string | null>(null);
  const [toast, setToast] = useState<string | null>(null);
  const [validatorOpen, setValidatorOpen] = useState(false);
  const [testCode, setTestCode] = useState("");
  const [testAmount, setTestAmount] = useState<number>(500000);
  const [testDate, setTestDate] = useState<string>(today());

  useEffect(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (raw) setItems(JSON.parse(raw));
    } catch {}
  }, []);
  useEffect(() => {
    try { localStorage.setItem(STORAGE_KEY, JSON.stringify(items)); } catch {}
  }, [items]);

  const showToast = (m: string) => { setToast(m); setTimeout(() => setToast(null), 2200); };

  const filtered = useMemo(() => {
    return items.filter((c) => {
      const matchQ = !q || c.code.toLowerCase().includes(q.toLowerCase()) || c.description.toLowerCase().includes(q.toLowerCase());
      if (!matchQ) return false;
      if (filter === "all") return true;
      const s = statusOf(c).label.toLowerCase();
      if (filter === "active") return s === "active";
      if (filter === "scheduled") return s === "scheduled";
      if (filter === "expired") return s === "expired" || s === "exhausted";
      if (filter === "inactive") return s === "inactive";
      return true;
    });
  }, [items, q, filter]);

  const stats = useMemo(() => {
    const active = items.filter((c) => statusOf(c).label === "Active").length;
    const redemptions = items.reduce((s, c) => s + c.used, 0);
    const scheduled = items.filter((c) => statusOf(c).label === "Scheduled").length;
    return { total: items.length, active, redemptions, scheduled };
  }, [items]);

  const openNew = () => {
    setEditing({
      id: crypto.randomUUID(),
      code: "",
      description: "",
      type: "percent",
      value: 10,
      minOrder: 0,
      usageLimit: 0,
      used: 0,
      startsAt: today(),
      endsAt: today(),
      active: true,
    });
    setOpen(true);
  };
  const openEdit = (c: Coupon) => { setEditing({ ...c }); setOpen(true); };
  const save = () => {
    if (!editing) return;
    const code = editing.code.trim().toUpperCase();
    if (!code) { showToast("Code is required"); return; }
    const dup = items.find((x) => x.code === code && x.id !== editing.id);
    if (dup) { showToast("A coupon with this code already exists"); return; }
    const next = { ...editing, code };
    setItems((arr) => (arr.find((x) => x.id === next.id) ? arr.map((x) => (x.id === next.id ? next : x)) : [next, ...arr]));
    setOpen(false);
    showToast("Coupon saved");
  };
  const toggleActive = (id: string) => {
    setItems((arr) => arr.map((x) => (x.id === id ? { ...x, active: !x.active } : x)));
    showToast("Status updated");
  };
  const remove = (id: string) => {
    setItems((arr) => arr.filter((x) => x.id !== id));
    setConfirmDelete(null);
    showToast("Coupon deleted");
  };
  const copyCode = (code: string) => {
    navigator.clipboard?.writeText(code);
    setCopied(code);
    setTimeout(() => setCopied(null), 1400);
  };
  const genCode = () => {
    const s = "ABCDEFGHJKLMNPQRSTUVWXYZ23456789";
    let out = "SERIN-";
    for (let i = 0; i < 6; i++) out += s[Math.floor(Math.random() * s.length)];
    if (editing) setEditing({ ...editing, code: out });
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-wrap items-end justify-between gap-4">
        <div>
          <p className="text-[11px] tracking-[0.28em] text-black/45">PROMOTIONS</p>
          <h1 className="mt-1 font-serif text-3xl">Coupon Management</h1>
          <p className="mt-1 text-[13px] text-black/55">Create, schedule and monitor discount codes for the atelier.</p>
        </div>
        <div className="flex items-center gap-2">
          <button
            onClick={() => setValidatorOpen(true)}
            className="inline-flex h-11 items-center gap-2 rounded-xl border border-black/[0.08] bg-white px-4 text-[12.5px] font-medium text-black/75 hover:bg-black/[0.04]"
          >
            <FlaskConical className="h-4 w-4" strokeWidth={1.8} /> Test Coupon
          </button>
          <button
            onClick={openNew}
            className="inline-flex h-11 items-center gap-2 rounded-xl bg-gradient-to-br from-[#1a1410] to-[#0b0b0d] px-4 text-[12.5px] font-medium text-white shadow-[0_8px_24px_-10px_rgba(0,0,0,0.4)] transition-transform hover:-translate-y-0.5"
          >
            <Plus className="h-4 w-4" strokeWidth={2} /> New Coupon
          </button>
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
        {[
          { l: "Total Coupons", v: stats.total, i: TicketPercent },
          { l: "Active Now", v: stats.active, i: Tag },
          { l: "Scheduled", v: stats.scheduled, i: Calendar },
          { l: "Total Redemptions", v: stats.redemptions.toLocaleString(), i: Percent },
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
              <p className="mt-3 font-serif text-3xl">{s.v}</p>
            </div>
          );
        })}
      </div>

      {/* Filters */}
      <div className="flex flex-wrap items-center gap-3">
        <div className="relative flex-1 min-w-[240px] max-w-md">
          <Search className="pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-black/40" />
          <input
            value={q}
            onChange={(e) => setQ(e.target.value)}
            placeholder="Search by code or description…"
            className="h-11 w-full rounded-xl border border-black/[0.07] bg-white pl-10 pr-4 text-sm focus:border-black/20 focus:outline-none focus:ring-4 focus:ring-black/[0.04]"
          />
        </div>
        <div className="flex gap-1.5 rounded-xl border border-black/[0.06] bg-white p-1">
          {(["all", "active", "scheduled", "expired", "inactive"] as const).map((f) => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className={`rounded-lg px-3 py-1.5 text-[12px] font-medium capitalize transition-colors ${
                filter === f ? "bg-[#1a1410] text-white" : "text-black/60 hover:bg-black/[0.04]"
              }`}
            >
              {f}
            </button>
          ))}
        </div>
      </div>

      {/* Table */}
      <section className="overflow-hidden rounded-2xl border border-black/[0.06] bg-white">
        <div className="overflow-x-auto">
          <table className="w-full text-[12.5px]">
            <thead>
              <tr className="border-b border-black/[0.05] bg-[#faf9f6] text-left text-[11px] tracking-wider text-black/45">
                {["CODE", "DESCRIPTION", "DISCOUNT", "MIN ORDER", "USAGE", "VALIDITY", "STATUS", "ACTIONS"].map((h) => (
                  <th key={h} className="px-5 py-3 font-medium">{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {filtered.length === 0 && (
                <tr>
                  <td colSpan={8} className="px-5 py-16 text-center text-black/50">
                    No coupons match your filters.
                  </td>
                </tr>
              )}
              {filtered.map((c) => {
                const st = statusOf(c);
                const pct = c.usageLimit > 0 ? Math.min(100, Math.round((c.used / c.usageLimit) * 100)) : 0;
                return (
                  <tr key={c.id} className="border-b border-black/[0.04] last:border-0 hover:bg-[#faf9f6]">
                    <td className="px-5 py-4">
                      <div className="inline-flex items-center gap-2">
                        <code className="rounded-md bg-[#faf6ec] px-2 py-1 font-mono text-[12px] font-semibold tracking-wider text-[#8b6f3f] ring-1 ring-[#e6cf9e]/40">
                          {c.code}
                        </code>
                        <button
                          onClick={() => copyCode(c.code)}
                          className="rounded-md p-1 text-black/40 hover:bg-black/[0.05] hover:text-black/70"
                          aria-label="Copy code"
                        >
                          {copied === c.code ? <Check className="h-3.5 w-3.5 text-emerald-600" /> : <Copy className="h-3.5 w-3.5" />}
                        </button>
                      </div>
                    </td>
                    <td className="px-5 py-4 text-black/70">{c.description || <span className="text-black/30">—</span>}</td>
                    <td className="px-5 py-4 font-medium tabular-nums">{fmtValue(c)}</td>
                    <td className="px-5 py-4 tabular-nums text-black/60">
                      {c.minOrder > 0 ? `${c.minOrder.toLocaleString()} KRW` : "None"}
                    </td>
                    <td className="px-5 py-4">
                      <div className="min-w-[110px]">
                        <p className="tabular-nums text-black/70">
                          {c.used.toLocaleString()} / {c.usageLimit > 0 ? c.usageLimit.toLocaleString() : "∞"}
                        </p>
                        {c.usageLimit > 0 && (
                          <div className="mt-1 h-1 w-full overflow-hidden rounded-full bg-black/[0.06]">
                            <div className="h-full bg-gradient-to-r from-[#e6cf9e] to-[#a17f43]" style={{ width: `${pct}%` }} />
                          </div>
                        )}
                      </div>
                    </td>
                    <td className="px-5 py-4 tabular-nums text-black/60">
                      <span className="whitespace-nowrap">{c.startsAt}</span>
                      <span className="mx-1 text-black/30">→</span>
                      <span className="whitespace-nowrap">{c.endsAt}</span>
                    </td>
                    <td className="px-5 py-4">
                      <span className={`inline-flex rounded-full px-2.5 py-1 text-[11px] font-medium ring-1 ${st.tone}`}>{st.label}</span>
                    </td>
                    <td className="px-5 py-4">
                      <div className="flex items-center gap-1">
                        <button
                          onClick={() => toggleActive(c.id)}
                          title={c.active ? "Deactivate" : "Activate"}
                          className={`rounded-lg px-2.5 py-1.5 text-[11px] font-medium ring-1 transition-colors ${
                            c.active
                              ? "bg-emerald-50 text-emerald-700 ring-emerald-200/70 hover:bg-emerald-100"
                              : "bg-black/[0.04] text-black/60 ring-black/10 hover:bg-black/[0.08]"
                          }`}
                        >
                          {c.active ? "Active" : "Inactive"}
                        </button>
                        <button
                          onClick={() => openEdit(c)}
                          className="rounded-lg p-2 text-black/60 hover:bg-black/[0.05] hover:text-black"
                          aria-label="Edit"
                        >
                          <Pencil className="h-3.5 w-3.5" />
                        </button>
                        <button
                          onClick={() => setConfirmDelete(c)}
                          className="rounded-lg p-2 text-rose-600 hover:bg-rose-50"
                          aria-label="Delete"
                        >
                          <Trash2 className="h-3.5 w-3.5" />
                        </button>
                      </div>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </section>

      {/* Editor modal */}
      {open && editing && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 p-4 backdrop-blur-sm">
          <div className="w-full max-w-2xl overflow-hidden rounded-2xl bg-white shadow-2xl">
            <div className="flex items-center justify-between border-b border-black/[0.06] px-6 py-4">
              <div>
                <p className="text-[11px] tracking-[0.24em] text-black/45">
                  {items.find((x) => x.id === editing.id) ? "EDIT" : "NEW"} COUPON
                </p>
                <h2 className="mt-0.5 font-serif text-xl">
                  {items.find((x) => x.id === editing.id) ? "Edit coupon" : "Create a new coupon"}
                </h2>
              </div>
              <button onClick={() => setOpen(false)} className="rounded-lg p-2 hover:bg-black/[0.05]">
                <X className="h-4 w-4" />
              </button>
            </div>

            <div className="grid grid-cols-1 gap-4 p-6 md:grid-cols-2">
              <Field label="Code" full>
                <div className="flex gap-2">
                  <input
                    value={editing.code}
                    onChange={(e) => setEditing({ ...editing, code: e.target.value.toUpperCase() })}
                    placeholder="e.g. WELCOME10"
                    className="h-11 flex-1 rounded-xl border border-black/[0.08] bg-white px-3 font-mono text-sm uppercase tracking-wider focus:border-black/25 focus:outline-none"
                  />
                  <button onClick={genCode} className="h-11 rounded-xl border border-black/[0.08] px-3 text-[12px] font-medium text-black/70 hover:bg-black/[0.04]">
                    Generate
                  </button>
                </div>
              </Field>
              <Field label="Description" full>
                <input
                  value={editing.description}
                  onChange={(e) => setEditing({ ...editing, description: e.target.value })}
                  placeholder="Internal note shown to customers"
                  className="h-11 w-full rounded-xl border border-black/[0.08] bg-white px-3 text-sm focus:border-black/25 focus:outline-none"
                />
              </Field>
              <Field label="Discount type">
                <select
                  value={editing.type}
                  onChange={(e) => setEditing({ ...editing, type: e.target.value as Coupon["type"] })}
                  className="h-11 w-full rounded-xl border border-black/[0.08] bg-white px-3 text-sm focus:border-black/25 focus:outline-none"
                >
                  <option value="percent">Percentage (%)</option>
                  <option value="fixed">Fixed amount (KRW)</option>
                </select>
              </Field>
              <Field label={editing.type === "percent" ? "Value (%)" : "Value (KRW)"}>
                <input
                  type="number"
                  min={0}
                  value={editing.value}
                  onChange={(e) => setEditing({ ...editing, value: Number(e.target.value) })}
                  className="h-11 w-full rounded-xl border border-black/[0.08] bg-white px-3 text-sm tabular-nums focus:border-black/25 focus:outline-none"
                />
              </Field>
              <Field label="Minimum order (KRW)">
                <input
                  type="number"
                  min={0}
                  value={editing.minOrder}
                  onChange={(e) => setEditing({ ...editing, minOrder: Number(e.target.value) })}
                  className="h-11 w-full rounded-xl border border-black/[0.08] bg-white px-3 text-sm tabular-nums focus:border-black/25 focus:outline-none"
                />
              </Field>
              <Field label="Usage limit (0 = unlimited)">
                <input
                  type="number"
                  min={0}
                  value={editing.usageLimit}
                  onChange={(e) => setEditing({ ...editing, usageLimit: Number(e.target.value) })}
                  className="h-11 w-full rounded-xl border border-black/[0.08] bg-white px-3 text-sm tabular-nums focus:border-black/25 focus:outline-none"
                />
              </Field>
              <Field label="Starts at">
                <input
                  type="date"
                  value={editing.startsAt}
                  onChange={(e) => setEditing({ ...editing, startsAt: e.target.value })}
                  className="h-11 w-full rounded-xl border border-black/[0.08] bg-white px-3 text-sm focus:border-black/25 focus:outline-none"
                />
              </Field>
              <Field label="Ends at">
                <input
                  type="date"
                  value={editing.endsAt}
                  onChange={(e) => setEditing({ ...editing, endsAt: e.target.value })}
                  className="h-11 w-full rounded-xl border border-black/[0.08] bg-white px-3 text-sm focus:border-black/25 focus:outline-none"
                />
              </Field>
              <div className="md:col-span-2">
                <label className="flex cursor-pointer items-center gap-3 rounded-xl border border-black/[0.08] bg-[#faf9f6] px-4 py-3">
                  <input
                    type="checkbox"
                    checked={editing.active}
                    onChange={(e) => setEditing({ ...editing, active: e.target.checked })}
                    className="h-4 w-4 accent-[#8b6f3f]"
                  />
                  <div>
                    <p className="text-[13px] font-medium">Coupon is active</p>
                    <p className="text-[11.5px] text-black/50">Customers can redeem this coupon during checkout.</p>
                  </div>
                </label>
              </div>
            </div>

            <div className="flex items-center justify-end gap-2 border-t border-black/[0.06] bg-[#faf9f6] px-6 py-4">
              <button onClick={() => setOpen(false)} className="h-10 rounded-xl px-4 text-[13px] font-medium text-black/60 hover:bg-black/[0.05]">
                Cancel
              </button>
              <button onClick={save} className="h-10 rounded-xl bg-gradient-to-br from-[#1a1410] to-[#0b0b0d] px-5 text-[13px] font-medium text-white hover:opacity-95">
                Save coupon
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Delete confirm */}
      {confirmDelete && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 p-4 backdrop-blur-sm">
          <div className="w-full max-w-md rounded-2xl bg-white p-6 shadow-2xl">
            <h3 className="font-serif text-lg">Delete this coupon?</h3>
            <p className="mt-1 text-[13px] text-black/60">
              <code className="rounded bg-black/[0.05] px-1.5 py-0.5 font-mono">{confirmDelete.code}</code> will be permanently removed. This action cannot be undone.
            </p>
            <div className="mt-5 flex justify-end gap-2">
              <button onClick={() => setConfirmDelete(null)} className="h-10 rounded-xl px-4 text-[13px] font-medium text-black/60 hover:bg-black/[0.05]">
                Cancel
              </button>
              <button onClick={() => remove(confirmDelete.id)} className="h-10 rounded-xl bg-rose-600 px-5 text-[13px] font-medium text-white hover:bg-rose-700">
                Delete
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Toast */}
      {toast && (
        <div className="fixed bottom-6 left-1/2 z-50 -translate-x-1/2 rounded-xl bg-[#1a1410] px-4 py-2.5 text-[12.5px] text-white shadow-lg">
          {toast}
        </div>
      )}
    </div>
  );
}

function Field({ label, full, children }: { label: string; full?: boolean; children: React.ReactNode }) {
  return (
    <div className={full ? "md:col-span-2" : ""}>
      <label className="mb-1.5 block text-[11px] font-medium uppercase tracking-wider text-black/50">{label}</label>
      {children}
    </div>
  );
}
