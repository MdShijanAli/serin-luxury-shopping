import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { ArrowLeft, Pencil, Trash2, Eye, EyeOff, Package, Tag, Truck, X, Check, ImagePlus } from "lucide-react";
import { useState } from "react";

export const Route = createFileRoute("/admin/products/$productId")({
  head: () => ({ meta: [{ title: "Product Detail — SERIN Admin" }] }),
  component: ProductDetailPage,
});

type Product = {
  id: string;
  name: string;
  category: string;
  price: string;
  ship: string;
  active: boolean;
  sku: string;
  desc: string;
  spec: string;
  lead: string;
  stock: number;
};

const catalog: Record<string, Product> = {
  p1: { id: "p1", name: "Heritage Bar Prestige 1kg", category: "Heritage Bar", price: "Inquiry", ship: "Showroom only", active: true, sku: "HB-PST-1000", desc: "한정판 프레스티지 1kg. 순은(999.9)을 정련한 마스터피스로, 서린 아뜰리에에서 수제 각인됩니다.", spec: "999.9 Fine Silver · 1000g", lead: "제작 문의 · 30일 소요", stock: 4 },
  p2: { id: "p2", name: "Photo Bar 10g", category: "Photo Bar", price: "129,000", ship: "Ships", active: true, sku: "PB-010", desc: "일상을 새기는 가장 가벼운 시작. 사진과 짧은 문구를 각인하는 10g 실버바.", spec: "999.9 Fine Silver · 10g · 1200×1200px", lead: "제작 만료 후 영업일 기준 7–10일", stock: 128 },
  p3: { id: "p3", name: "Photo Bar 100g", category: "Photo Bar", price: "329,000", ship: "Ships", active: true, sku: "PB-100", desc: "선물용으로 가장 사랑받는 사이즈. 초상화 각인 최적화.", spec: "999.9 Fine Silver · 100g", lead: "영업일 기준 7–10일", stock: 42 },
  p4: { id: "p4", name: "Photo Bar 300g", category: "Photo Bar", price: "379,000", ship: "Ships", active: true, sku: "PB-300", desc: "결혼·기념일 아카이빙에 어울리는 무게감 있는 300g 바.", spec: "999.9 Fine Silver · 300g", lead: "영업일 기준 10–14일", stock: 18 },
  p5: { id: "p5", name: "Photo Bar 500g", category: "Photo Bar", price: "599,000", ship: "Showroom only", active: false, sku: "PB-500", desc: "쇼룸 수령 전용의 프리미엄 500g 바.", spec: "999.9 Fine Silver · 500g", lead: "예약 후 14일 · 쇼룸 수령", stock: 6 },
  p6: { id: "p6", name: "Photo Bar 1000g", category: "Photo Bar", price: "999,000", ship: "Showroom only", active: true, sku: "PB-1000", desc: "가문의 이야기를 담는 1kg 바. 쇼룸에서만 인수 가능합니다.", spec: "999.9 Fine Silver · 1000g", lead: "예약 후 21일 · 쇼룸 수령", stock: 3 },
};

function ProductDetailPage() {
  const { productId } = Route.useParams();
  const navigate = useNavigate();
  const initial: Product = catalog[productId] ?? { ...catalog.p3, id: productId };
  const [p, setP] = useState<Product>(initial);
  const [editing, setEditing] = useState(false);
  const [draft, setDraft] = useState<Product>(initial);
  const [gallery, setGallery] = useState<number[]>([1, 2, 3, 4]);

  const saveEdit = () => { setP(draft); setEditing(false); };
  const cancelEdit = () => { setDraft(p); setEditing(false); };
  const remove = () => {
    if (confirm("Delete this product? This action cannot be undone.")) {
      navigate({ to: "/admin/products" });
    }
  };
  const toggleActive = () => setP({ ...p, active: !p.active });

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex items-center gap-4">
          <Link to="/admin/products" className="grid h-10 w-10 place-items-center rounded-xl border border-black/[0.08] bg-white hover:bg-black/[0.03]">
            <ArrowLeft className="h-4 w-4" />
          </Link>
          <div>
            <p className="text-[11px] tracking-[0.28em] text-black/45">PRODUCT · {p.sku}</p>
            <div className="mt-1 flex items-center gap-3">
              <h1 className="font-serif text-3xl">{p.name}</h1>
              <button
                onClick={toggleActive}
                className={`inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-[11px] font-medium ring-1 transition-colors ${
                  p.active
                    ? "bg-emerald-50 text-emerald-700 ring-emerald-200/70 hover:bg-emerald-100"
                    : "bg-slate-100 text-slate-600 ring-slate-200 hover:bg-slate-200"
                }`}
              >
                {p.active ? <Eye className="h-3 w-3" /> : <EyeOff className="h-3 w-3" />}
                {p.active ? "Active" : "Inactive"}
              </button>
            </div>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <button onClick={remove} className="flex h-10 items-center gap-2 rounded-xl border border-rose-200 bg-white px-4 text-[12.5px] font-medium text-rose-600 hover:bg-rose-50">
            <Trash2 className="h-4 w-4" /> Delete
          </button>
          {!editing ? (
            <button onClick={() => setEditing(true)} className="flex h-10 items-center gap-2 rounded-xl bg-[#1a1410] px-4 text-[12.5px] font-medium text-white hover:bg-black">
              <Pencil className="h-4 w-4" /> Edit product
            </button>
          ) : (
            <>
              <button onClick={cancelEdit} className="h-10 rounded-xl border border-black/[0.08] bg-white px-4 text-[12.5px] font-medium hover:bg-black/[0.03]">Cancel</button>
              <button onClick={saveEdit} className="flex h-10 items-center gap-2 rounded-xl bg-[#1a1410] px-4 text-[12.5px] font-medium text-white hover:bg-black">
                <Check className="h-4 w-4" /> Save changes
              </button>
            </>
          )}
        </div>
      </div>

      <div className="grid gap-5 lg:grid-cols-3">
        {/* Gallery */}
        <section className="space-y-4 lg:col-span-1">
          <div className="relative aspect-square overflow-hidden rounded-2xl bg-gradient-to-br from-[#faf3e2] via-[#e6cf9e] to-[#a17f43] ring-1 ring-[#c9a86a]/30">
            <div className="absolute inset-6 rounded-xl bg-gradient-to-br from-white/50 to-transparent" />
            <div className="absolute inset-0 grid place-items-center">
              <div className="text-center">
                <div className="font-serif text-3xl text-[#3a2e1a]">SERIN</div>
                <div className="mt-1 text-[10px] tracking-[0.4em] text-[#3a2e1a]/70">{p.spec.split("·")[0]}</div>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-4 gap-2">
            {gallery.map((g) => (
              <div key={g} className="aspect-square rounded-xl bg-gradient-to-br from-[#f4ead0] to-[#d9c39a] ring-1 ring-[#c9a86a]/30" />
            ))}
            <button onClick={() => setGallery([...gallery, gallery.length + 1])} className="grid aspect-square place-items-center rounded-xl border border-dashed border-black/15 text-black/40 hover:bg-black/[0.03]">
              <ImagePlus className="h-4 w-4" />
            </button>
          </div>
        </section>

        {/* Details */}
        <div className="space-y-5 lg:col-span-2">
          <section className="rounded-2xl border border-black/[0.06] bg-white p-6">
            <div className="flex items-center gap-2">
              <Package className="h-4 w-4 text-black/50" />
              <h2 className="text-[13px] font-medium tracking-wide">Basic info</h2>
            </div>
            {!editing ? (
              <dl className="mt-5 grid gap-x-6 gap-y-4 sm:grid-cols-2">
                <Info k="Product name" v={p.name} />
                <Info k="Category" v={p.category} />
                <Info k="Price" v={p.price === "Inquiry" ? "Inquiry" : `₩ ${p.price}`} />
                <Info k="SKU" v={p.sku} />
                <Info k="Spec" v={p.spec} />
                <Info k="Stock" v={`${p.stock} units`} />
                <div className="sm:col-span-2">
                  <p className="text-[10.5px] tracking-[0.24em] text-black/40">DESCRIPTION</p>
                  <p className="mt-1.5 text-[13px] leading-relaxed text-black/75">{p.desc}</p>
                </div>
              </dl>
            ) : (
              <div className="mt-5 grid gap-4">
                <div className="grid grid-cols-2 gap-4">
                  <Field label="Product name"><input value={draft.name} onChange={(e) => setDraft({ ...draft, name: e.target.value })} className={inp} /></Field>
                  <Field label="Category">
                    <select value={draft.category} onChange={(e) => setDraft({ ...draft, category: e.target.value })} className={inp}>
                      <option>Photo Bar</option><option>Heritage Bar</option><option>Custom</option>
                    </select>
                  </Field>
                  <Field label="Price (KRW)"><input value={draft.price} onChange={(e) => setDraft({ ...draft, price: e.target.value })} className={inp} /></Field>
                  <Field label="SKU"><input value={draft.sku} onChange={(e) => setDraft({ ...draft, sku: e.target.value })} className={inp} /></Field>
                  <Field label="Spec"><input value={draft.spec} onChange={(e) => setDraft({ ...draft, spec: e.target.value })} className={inp} /></Field>
                  <Field label="Stock"><input type="number" value={draft.stock} onChange={(e) => setDraft({ ...draft, stock: parseInt(e.target.value || "0", 10) })} className={inp} /></Field>
                </div>
                <Field label="Description">
                  <textarea rows={4} value={draft.desc} onChange={(e) => setDraft({ ...draft, desc: e.target.value })} className={`${inp} h-auto py-2.5`} />
                </Field>
              </div>
            )}
          </section>

          <div className="grid gap-5 sm:grid-cols-2">
            <section className="rounded-2xl border border-black/[0.06] bg-white p-6">
              <div className="flex items-center gap-2"><Truck className="h-4 w-4 text-black/50" /><h2 className="text-[13px] font-medium tracking-wide">Fulfillment</h2></div>
              {!editing ? (
                <dl className="mt-5 space-y-3.5">
                  <Info k="Shipping" v={p.ship} />
                  <Info k="Lead time" v={p.lead} />
                </dl>
              ) : (
                <div className="mt-5 space-y-4">
                  <Field label="Shipping">
                    <select value={draft.ship} onChange={(e) => setDraft({ ...draft, ship: e.target.value })} className={inp}>
                      <option>Ships</option><option>Showroom only</option>
                    </select>
                  </Field>
                  <Field label="Lead time"><input value={draft.lead} onChange={(e) => setDraft({ ...draft, lead: e.target.value })} className={inp} /></Field>
                </div>
              )}
            </section>

            <section className="rounded-2xl border border-black/[0.06] bg-white p-6">
              <div className="flex items-center gap-2"><Tag className="h-4 w-4 text-black/50" /><h2 className="text-[13px] font-medium tracking-wide">Status</h2></div>
              <div className="mt-5 space-y-4">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-[12.5px] font-medium">Visibility</p>
                    <p className="text-[11.5px] text-black/50">Toggle whether shoppers can see this product.</p>
                  </div>
                  <button
                    onClick={toggleActive}
                    className={`relative h-6 w-11 rounded-full transition-colors ${p.active ? "bg-emerald-500" : "bg-slate-300"}`}
                  >
                    <span className={`absolute top-0.5 h-5 w-5 rounded-full bg-white shadow transition-all ${p.active ? "left-[22px]" : "left-0.5"}`} />
                  </button>
                </div>
                <p className={`inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-[11px] font-medium ring-1 ${p.active ? "bg-emerald-50 text-emerald-700 ring-emerald-200/70" : "bg-slate-100 text-slate-600 ring-slate-200"}`}>
                  {p.active ? <Eye className="h-3 w-3" /> : <EyeOff className="h-3 w-3" />}
                  Currently {p.active ? "visible on storefront" : "hidden"}
                </p>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}

const inp = "mt-1.5 h-11 w-full rounded-xl border border-black/[0.07] bg-[#faf9f6] px-3.5 text-[13px] focus:border-black/20 focus:bg-white focus:outline-none focus:ring-4 focus:ring-black/[0.04]";

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return <label className="block"><span className="text-[11.5px] font-medium tracking-wide text-black/60">{label}</span>{children}</label>;
}

function Info({ k, v }: { k: string; v: string }) {
  return (
    <div>
      <p className="text-[10.5px] tracking-[0.24em] text-black/40">{k.toUpperCase()}</p>
      <p className="mt-1 text-[13px] text-black/80">{v}</p>
    </div>
  );
}
