import { createFileRoute } from "@tanstack/react-router";
import { Plus, Search, Pencil, Trash2, X, Eye, EyeOff } from "lucide-react";
import { useMemo, useState } from "react";

export const Route = createFileRoute("/admin/products")({
  head: () => ({ meta: [{ title: "Products — SERIN Admin" }] }),
  component: ProductsPage,
});

type Product = {
  id: string;
  n: string;
  c: string;
  p: string;
  ship: string;
  active: boolean;
};

const seed: Product[] = [
  { id: "p1", n: "Heritage Bar Prestige 1kg", c: "Heritage Bar", p: "Inquiry", ship: "Showroom only", active: true },
  { id: "p2", n: "Photo Bar 10g", c: "Photo Bar", p: "129,000", ship: "Ships", active: true },
  { id: "p3", n: "Photo Bar 100g", c: "Photo Bar", p: "329,000", ship: "Ships", active: true },
  { id: "p4", n: "Photo Bar 300g", c: "Photo Bar", p: "379,000", ship: "Ships", active: true },
  { id: "p5", n: "Photo Bar 500g", c: "Photo Bar", p: "599,000", ship: "Showroom only", active: false },
  { id: "p6", n: "Photo Bar 1000g", c: "Photo Bar", p: "999,000", ship: "Showroom only", active: true },
];

function ProductsPage() {
  const [items, setItems] = useState<Product[]>(seed);
  const [q, setQ] = useState("");
  const [editing, setEditing] = useState<Product | null>(null);
  const [open, setOpen] = useState(false);

  const filtered = useMemo(
    () => items.filter((i) => i.n.toLowerCase().includes(q.toLowerCase()) || i.c.toLowerCase().includes(q.toLowerCase())),
    [items, q]
  );

  const openNew = () => {
    setEditing({ id: crypto.randomUUID(), n: "", c: "Photo Bar", p: "", ship: "Ships", active: true });
    setOpen(true);
  };
  const openEdit = (p: Product) => {
    setEditing({ ...p });
    setOpen(true);
  };
  const save = () => {
    if (!editing) return;
    setItems((arr) => (arr.find((x) => x.id === editing.id) ? arr.map((x) => (x.id === editing.id ? editing : x)) : [editing, ...arr]));
    setOpen(false);
  };
  const remove = (id: string) => {
    if (confirm("Delete this product?")) setItems((arr) => arr.filter((x) => x.id !== id));
  };
  const toggle = (id: string) => setItems((arr) => arr.map((x) => (x.id === id ? { ...x, active: !x.active } : x)));

  return (
    <div className="space-y-5">
      <div className="flex items-end justify-between">
        <div>
          <p className="text-[11px] tracking-[0.28em] text-black/45">CATALOGUE</p>
          <h1 className="mt-1 font-serif text-3xl">Products</h1>
        </div>
        <button onClick={openNew} className="flex h-10 items-center gap-2 rounded-xl bg-[#1a1410] px-4 text-[12.5px] font-medium text-white hover:bg-black">
          <Plus className="h-4 w-4" /> New product
        </button>
      </div>

      <section className="rounded-2xl border border-black/[0.06] bg-white">
        <div className="flex items-center gap-3 border-b border-black/[0.05] p-4">
          <div className="relative flex-1">
            <Search className="pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-black/40" />
            <input
              value={q}
              onChange={(e) => setQ(e.target.value)}
              placeholder="Search products"
              className="h-10 w-full rounded-xl border border-black/[0.07] bg-[#faf9f6] pl-10 pr-3 text-[13px] focus:bg-white focus:outline-none"
            />
          </div>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-[12.5px]">
            <thead>
              <tr className="border-b border-black/[0.05] bg-[#faf9f6] text-left text-[11px] tracking-wider text-black/45">
                {["PRODUCT", "CATEGORY", "PRICE", "VISIBILITY", "SHIPPING", ""].map((h) => (
                  <th key={h} className="px-5 py-3 font-medium">{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {filtered.map((p) => (
                <tr key={p.id} className="border-b border-black/[0.04] transition-colors last:border-0 hover:bg-[#faf9f6]">
                  <td className="px-5 py-4">
                    <div className="flex items-center gap-3">
                      <div className="h-10 w-10 rounded-lg bg-gradient-to-br from-[#faf3e2] to-[#e6cf9e] ring-1 ring-[#e6cf9e]/40" />
                      <span className="font-medium">{p.n}</span>
                    </div>
                  </td>
                  <td className="px-5 py-4 text-black/60">{p.c}</td>
                  <td className="px-5 py-4 tabular-nums">{p.p === "Inquiry" ? <span className="text-black/45">Inquiry</span> : <>₩ {p.p}</>}</td>
                  <td className="px-5 py-4">
                    <button
                      onClick={() => toggle(p.id)}
                      className={`inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-[11px] font-medium ring-1 transition-colors ${
                        p.active
                          ? "bg-emerald-50 text-emerald-700 ring-emerald-200/70 hover:bg-emerald-100"
                          : "bg-slate-100 text-slate-600 ring-slate-200 hover:bg-slate-200"
                      }`}
                    >
                      {p.active ? <Eye className="h-3 w-3" /> : <EyeOff className="h-3 w-3" />}
                      {p.active ? "Active" : "Inactive"}
                    </button>
                  </td>
                  <td className="px-5 py-4 text-black/60">{p.ship}</td>
                  <td className="px-5 py-4">
                    <div className="flex justify-end gap-1.5">
                      <button onClick={() => openEdit(p)} className="grid h-8 w-8 place-items-center rounded-lg border border-black/[0.08] bg-white hover:bg-black/[0.04]" aria-label="Edit">
                        <Pencil className="h-3.5 w-3.5" />
                      </button>
                      <button onClick={() => remove(p.id)} className="grid h-8 w-8 place-items-center rounded-lg border border-rose-200 bg-white text-rose-600 hover:bg-rose-50" aria-label="Delete">
                        <Trash2 className="h-3.5 w-3.5" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
              {filtered.length === 0 && (
                <tr>
                  <td colSpan={6} className="px-5 py-16 text-center text-[12.5px] text-black/45">No products found</td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </section>

      {open && editing && (
        <div className="fixed inset-0 z-50 grid place-items-center bg-black/40 backdrop-blur-sm p-4" onClick={() => setOpen(false)}>
          <div onClick={(e) => e.stopPropagation()} className="w-full max-w-lg animate-scale-in rounded-2xl bg-white p-6 shadow-2xl">
            <div className="flex items-center justify-between">
              <h2 className="font-serif text-2xl">{items.find((x) => x.id === editing.id) ? "Edit product" : "New product"}</h2>
              <button onClick={() => setOpen(false)} className="grid h-9 w-9 place-items-center rounded-lg hover:bg-black/5"><X className="h-4 w-4" /></button>
            </div>
            <div className="mt-5 grid gap-4">
              <Field label="Name">
                <input value={editing.n} onChange={(e) => setEditing({ ...editing, n: e.target.value })} className={inp} />
              </Field>
              <div className="grid grid-cols-2 gap-4">
                <Field label="Category">
                  <select value={editing.c} onChange={(e) => setEditing({ ...editing, c: e.target.value })} className={inp}>
                    <option>Photo Bar</option><option>Heritage Bar</option><option>Custom</option>
                  </select>
                </Field>
                <Field label="Price (KRW)">
                  <input value={editing.p} onChange={(e) => setEditing({ ...editing, p: e.target.value })} placeholder="e.g. 129,000 or Inquiry" className={inp} />
                </Field>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <Field label="Shipping">
                  <select value={editing.ship} onChange={(e) => setEditing({ ...editing, ship: e.target.value })} className={inp}>
                    <option>Ships</option><option>Showroom only</option>
                  </select>
                </Field>
                <Field label="Visibility">
                  <label className="mt-1.5 flex h-11 items-center gap-2 rounded-xl border border-black/[0.07] bg-[#faf9f6] px-3.5 text-[13px]">
                    <input type="checkbox" checked={editing.active} onChange={(e) => setEditing({ ...editing, active: e.target.checked })} />
                    Active
                  </label>
                </Field>
              </div>
            </div>
            <div className="mt-6 flex justify-end gap-2">
              <button onClick={() => setOpen(false)} className="h-10 rounded-xl border border-black/[0.08] bg-white px-4 text-[12.5px]">Cancel</button>
              <button onClick={save} className="h-10 rounded-xl bg-gradient-to-br from-[#1a1410] to-[#0b0b0d] px-5 text-[12.5px] font-medium text-white">Save product</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

const inp =
  "mt-1.5 h-11 w-full rounded-xl border border-black/[0.07] bg-[#faf9f6] px-3.5 text-[13px] focus:border-black/20 focus:bg-white focus:outline-none focus:ring-4 focus:ring-black/[0.04]";

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <label className="block">
      <span className="text-[11.5px] font-medium tracking-wide text-black/60">{label}</span>
      {children}
    </label>
  );
}
