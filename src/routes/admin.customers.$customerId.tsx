import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft, Mail, Phone, MapPin, Plus, Pencil, Trash2, Star, ShoppingBag, Wallet, Calendar, Check, X } from "lucide-react";
import { useMemo, useState } from "react";

export const Route = createFileRoute("/admin/customers/$customerId")({
  head: () => ({ meta: [{ title: "Customer Detail — SERIN Admin" }] }),
  component: CustomerDetailPage,
});

type Addr = { id: string; label: string; recipient: string; phone: string; line: string; primary: boolean };

const directory: Record<string, { name: string; phone: string; email: string; joined: string; tier: string; note: string }> = {
  "01012345678": { name: "김서린", phone: "010-1234-5678", email: "serin_kim@example.com", joined: "2023.11.02", tier: "Prestige", note: "VIP · prefers engraving in serif." },
  "01098765432": { name: "이준호", phone: "010-9876-5432", email: "junho@example.com", joined: "2024.01.14", tier: "Signature", note: "Photo Bar 10g repeat buyer." },
  "01011112222": { name: "강하늘", phone: "010-1111-2222", email: "haneul@example.com", joined: "2024.02.20", tier: "Signature", note: "Ships to office address." },
  "01099990000": { name: "정다은", phone: "010-9999-0000", email: "didae@example.com", joined: "2023.08.09", tier: "Prestige", note: "Corporate gifting client." },
};

const historyByCustomer: Record<string, { id: string; date: string; item: string; amount: string; status: string; tone: string }[]> = {
  "01012345678": [
    { id: "02024-0512-0013", date: "2024.05.12", item: "Photo Bar 100g × 2", amount: "550,000", status: "Pending", tone: "amber" },
    { id: "02024-0402-0091", date: "2024.04.02", item: "Photo Bar 300g", amount: "379,000", status: "Completed", tone: "slate" },
    { id: "02024-0118-0044", date: "2024.01.18", item: "Heritage Bar 1kg", amount: "Inquiry", status: "Completed", tone: "slate" },
  ],
  "01098765432": [
    { id: "02024-0512-0012", date: "2024.05.12", item: "Photo Bar 10g", amount: "129,000", status: "Preparing", tone: "sky" },
  ],
  "01011112222": [
    { id: "02024-0511-0011", date: "2024.05.11", item: "Photo Bar 300g", amount: "379,000", status: "In Production", tone: "violet" },
    { id: "02024-0328-0022", date: "2024.03.28", item: "Photo Bar 100g", amount: "329,000", status: "Completed", tone: "slate" },
  ],
  "01099990000": [
    { id: "02024-0510-0008", date: "2024.05.10", item: "Photo Bar 100g", amount: "329,000", status: "Ready", tone: "emerald" },
  ],
};

const tone: Record<string, string> = {
  amber: "bg-amber-50 text-amber-700 ring-amber-200/70",
  sky: "bg-sky-50 text-sky-700 ring-sky-200/70",
  violet: "bg-violet-50 text-violet-700 ring-violet-200/70",
  emerald: "bg-emerald-50 text-emerald-700 ring-emerald-200/70",
  slate: "bg-slate-100 text-slate-600 ring-slate-200",
};

function CustomerDetailPage() {
  const { customerId } = Route.useParams();
  const c = directory[customerId] ?? {
    name: "Customer", phone: "—", email: "—", joined: "—", tier: "Signature", note: "",
  };
  const history = historyByCustomer[customerId] ?? [];

  const [addrs, setAddrs] = useState<Addr[]>([
    { id: "a1", label: "Home", recipient: c.name, phone: c.phone, line: "서울 강남구 청담동 · 123-45, 302호", primary: true },
    { id: "a2", label: "Office", recipient: c.name, phone: c.phone, line: "서울 성수동 SERIN 아뜰리에 12층", primary: false },
  ]);
  const [editing, setEditing] = useState<Addr | null>(null);
  const [open, setOpen] = useState(false);

  const stats = useMemo(() => {
    const paid = history.filter((h) => h.amount !== "Inquiry");
    const total = paid.reduce((s, h) => s + parseInt(h.amount.replace(/,/g, ""), 10), 0);
    return {
      count: history.length,
      total: total.toLocaleString(),
      avg: paid.length ? Math.round(total / paid.length).toLocaleString() : "0",
      last: history[0]?.date ?? "—",
    };
  }, [history]);

  const openNew = () => { setEditing({ id: crypto.randomUUID(), label: "", recipient: c.name, phone: c.phone, line: "", primary: false }); setOpen(true); };
  const openEdit = (a: Addr) => { setEditing({ ...a }); setOpen(true); };
  const save = () => {
    if (!editing) return;
    setAddrs((arr) => {
      const exists = arr.find((x) => x.id === editing.id);
      let next = exists ? arr.map((x) => (x.id === editing.id ? editing : x)) : [...arr, editing];
      if (editing.primary) next = next.map((x) => ({ ...x, primary: x.id === editing.id }));
      return next;
    });
    setOpen(false);
  };
  const remove = (id: string) => setAddrs((arr) => arr.filter((x) => x.id !== id));
  const setPrimary = (id: string) => setAddrs((arr) => arr.map((x) => ({ ...x, primary: x.id === id })));

  return (
    <div className="space-y-6">
      <div className="flex items-center gap-4">
        <Link to="/admin/customers" className="grid h-10 w-10 place-items-center rounded-xl border border-black/[0.08] bg-white hover:bg-black/[0.03]">
          <ArrowLeft className="h-4 w-4" />
        </Link>
        <div>
          <p className="text-[11px] tracking-[0.28em] text-black/45">CUSTOMER</p>
          <h1 className="mt-1 font-serif text-3xl">{c.name}</h1>
        </div>
      </div>

      <div className="grid gap-5 lg:grid-cols-3">
        {/* Left profile */}
        <section className="rounded-2xl border border-black/[0.06] bg-white p-6 lg:col-span-1">
          <div className="flex items-center gap-4">
            <div className="grid h-16 w-16 place-items-center rounded-2xl bg-gradient-to-br from-[#1a1410] to-[#3a2a1c] font-serif text-2xl text-white">
              {c.name[0]}
            </div>
            <div>
              <p className="font-serif text-xl">{c.name}</p>
              <span className="mt-1 inline-flex items-center gap-1.5 rounded-full bg-[#faf5e6] px-2.5 py-1 text-[11px] font-medium text-[#8b6f3f]">
                <Star className="h-3 w-3" /> {c.tier}
              </span>
            </div>
          </div>

          <dl className="mt-6 space-y-3.5 text-[12.5px]">
            <Row icon={Phone} k="Phone" v={c.phone} />
            <Row icon={Mail} k="Email" v={c.email} />
            <Row icon={Calendar} k="Joined" v={c.joined} />
          </dl>

          {c.note && (
            <div className="mt-5 rounded-xl border border-black/[0.06] bg-[#faf9f6] p-4 text-[12px] leading-relaxed text-black/70">
              <p className="mb-1 text-[10px] tracking-[0.28em] text-black/40">NOTE</p>
              {c.note}
            </div>
          )}

          <div className="mt-5 grid grid-cols-3 gap-3">
            <Stat icon={ShoppingBag} v={String(stats.count)} k="Orders" />
            <Stat icon={Wallet} v={`₩${stats.total}`} k="Total" />
            <Stat icon={Calendar} v={stats.last} k="Last" />
          </div>
        </section>

        {/* Right column */}
        <div className="space-y-5 lg:col-span-2">
          {/* Addresses */}
          <section className="overflow-hidden rounded-2xl border border-black/[0.06] bg-white">
            <div className="flex items-center justify-between border-b border-black/[0.05] px-5 py-4">
              <div className="flex items-center gap-2">
                <MapPin className="h-4 w-4 text-black/50" />
                <h2 className="text-[13px] font-medium tracking-wide">Addresses</h2>
              </div>
              <button onClick={openNew} className="flex h-8 items-center gap-1.5 rounded-lg bg-[#1a1410] px-3 text-[11.5px] font-medium text-white hover:bg-black">
                <Plus className="h-3.5 w-3.5" /> Add address
              </button>
            </div>
            <ul className="divide-y divide-black/[0.05]">
              {addrs.map((a) => (
                <li key={a.id} className="flex items-start justify-between gap-4 p-5">
                  <div className="min-w-0 flex-1">
                    <div className="flex items-center gap-2">
                      <p className="text-[13px] font-medium">{a.label}</p>
                      {a.primary && (
                        <span className="inline-flex items-center gap-1 rounded-full bg-emerald-50 px-2 py-0.5 text-[10.5px] font-medium text-emerald-700 ring-1 ring-emerald-200/70">
                          <Check className="h-2.5 w-2.5" /> Primary
                        </span>
                      )}
                    </div>
                    <p className="mt-1 text-[12.5px] text-black/70">{a.line}</p>
                    <p className="mt-0.5 text-[11.5px] text-black/50">{a.recipient} · {a.phone}</p>
                  </div>
                  <div className="flex shrink-0 items-center gap-1.5">
                    {!a.primary && (
                      <button onClick={() => setPrimary(a.id)} className="h-8 rounded-lg border border-black/[0.08] bg-white px-2.5 text-[11.5px] hover:bg-black/[0.03]">
                        Set primary
                      </button>
                    )}
                    <button onClick={() => openEdit(a)} className="grid h-8 w-8 place-items-center rounded-lg border border-black/[0.08] bg-white hover:bg-black/[0.04]">
                      <Pencil className="h-3.5 w-3.5" />
                    </button>
                    <button onClick={() => remove(a.id)} className="grid h-8 w-8 place-items-center rounded-lg border border-rose-200 bg-white text-rose-600 hover:bg-rose-50">
                      <Trash2 className="h-3.5 w-3.5" />
                    </button>
                  </div>
                </li>
              ))}
              {addrs.length === 0 && <li className="p-8 text-center text-[12.5px] text-black/45">No addresses on file</li>}
            </ul>
          </section>

          {/* Order history */}
          <section className="overflow-hidden rounded-2xl border border-black/[0.06] bg-white">
            <div className="flex items-center justify-between border-b border-black/[0.05] px-5 py-4">
              <div className="flex items-center gap-2">
                <ShoppingBag className="h-4 w-4 text-black/50" />
                <h2 className="text-[13px] font-medium tracking-wide">Order history</h2>
              </div>
              <span className="text-[11.5px] text-black/50">{history.length} orders</span>
            </div>
            <table className="w-full text-[12.5px]">
              <thead>
                <tr className="border-b border-black/[0.05] bg-[#faf9f6] text-left text-[11px] tracking-wider text-black/45">
                  {["ORDER #", "DATE", "ITEM", "AMOUNT", "STATUS", ""].map((h) => (
                    <th key={h} className="px-5 py-3 font-medium">{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {history.map((h) => (
                  <tr key={h.id} className="border-b border-black/[0.04] last:border-0 hover:bg-[#faf9f6]">
                    <td className="px-5 py-4 font-medium tabular-nums">
                      <Link to="/admin/orders/$orderId" params={{ orderId: h.id }} className="hover:underline">{h.id}</Link>
                    </td>
                    <td className="px-5 py-4 tabular-nums text-black/60">{h.date}</td>
                    <td className="px-5 py-4 text-black/70">{h.item}</td>
                    <td className="px-5 py-4 tabular-nums">{h.amount === "Inquiry" ? <span className="text-black/45">Inquiry</span> : <>₩ {h.amount}</>}</td>
                    <td className="px-5 py-4">
                      <span className={`inline-flex rounded-full px-2.5 py-1 text-[11px] font-medium ring-1 ${tone[h.tone]}`}>{h.status}</span>
                    </td>
                    <td className="px-5 py-4 text-right">
                      <Link to="/admin/orders/$orderId" params={{ orderId: h.id }} className="rounded-lg border border-black/[0.08] bg-white px-3 py-1.5 text-[11.5px] hover:bg-black/[0.03]">
                        View
                      </Link>
                    </td>
                  </tr>
                ))}
                {history.length === 0 && (
                  <tr><td colSpan={6} className="px-5 py-16 text-center text-[12.5px] text-black/45">No orders yet</td></tr>
                )}
              </tbody>
            </table>
          </section>
        </div>
      </div>

      {/* Address modal */}
      {open && editing && (
        <div className="fixed inset-0 z-50 grid place-items-center bg-black/40 backdrop-blur-sm p-4" onClick={() => setOpen(false)}>
          <div onClick={(e) => e.stopPropagation()} className="w-full max-w-lg animate-scale-in rounded-2xl bg-white p-6 shadow-2xl">
            <div className="flex items-center justify-between">
              <h2 className="font-serif text-2xl">{addrs.find((x) => x.id === editing.id) ? "Edit address" : "New address"}</h2>
              <button onClick={() => setOpen(false)} className="grid h-9 w-9 place-items-center rounded-lg hover:bg-black/5"><X className="h-4 w-4" /></button>
            </div>
            <div className="mt-5 grid gap-4">
              <Field label="Label"><input value={editing.label} onChange={(e) => setEditing({ ...editing, label: e.target.value })} placeholder="Home, Office…" className={inp} /></Field>
              <div className="grid grid-cols-2 gap-4">
                <Field label="Recipient"><input value={editing.recipient} onChange={(e) => setEditing({ ...editing, recipient: e.target.value })} className={inp} /></Field>
                <Field label="Phone"><input value={editing.phone} onChange={(e) => setEditing({ ...editing, phone: e.target.value })} className={inp} /></Field>
              </div>
              <Field label="Address"><input value={editing.line} onChange={(e) => setEditing({ ...editing, line: e.target.value })} className={inp} /></Field>
              <label className="flex items-center gap-2 text-[12.5px]">
                <input type="checkbox" checked={editing.primary} onChange={(e) => setEditing({ ...editing, primary: e.target.checked })} />
                Set as primary
              </label>
            </div>
            <div className="mt-6 flex justify-end gap-2">
              <button onClick={() => setOpen(false)} className="h-10 rounded-xl border border-black/[0.08] bg-white px-4 text-[12.5px]">Cancel</button>
              <button onClick={save} className="h-10 rounded-xl bg-gradient-to-br from-[#1a1410] to-[#0b0b0d] px-5 text-[12.5px] font-medium text-white">Save address</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

const inp = "mt-1.5 h-11 w-full rounded-xl border border-black/[0.07] bg-[#faf9f6] px-3.5 text-[13px] focus:border-black/20 focus:bg-white focus:outline-none focus:ring-4 focus:ring-black/[0.04]";

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return <label className="block"><span className="text-[11.5px] font-medium tracking-wide text-black/60">{label}</span>{children}</label>;
}

function Row({ icon: Icon, k, v }: { icon: React.ComponentType<{ className?: string }>; k: string; v: string }) {
  return (
    <div className="flex items-center gap-3">
      <div className="grid h-8 w-8 place-items-center rounded-lg bg-[#faf9f6] text-black/60"><Icon className="h-3.5 w-3.5" /></div>
      <div>
        <p className="text-[10.5px] tracking-[0.24em] text-black/40">{k.toUpperCase()}</p>
        <p className="text-[12.5px]">{v}</p>
      </div>
    </div>
  );
}

function Stat({ icon: Icon, v, k }: { icon: React.ComponentType<{ className?: string }>; v: string; k: string }) {
  return (
    <div className="rounded-xl border border-black/[0.06] bg-[#faf9f6] p-3">
      <Icon className="h-3.5 w-3.5 text-black/40" />
      <p className="mt-1.5 font-serif text-base tabular-nums">{v}</p>
      <p className="text-[10.5px] tracking-wide text-black/45">{k}</p>
    </div>
  );
}
