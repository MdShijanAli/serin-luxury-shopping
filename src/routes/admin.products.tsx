import { createFileRoute } from "@tanstack/react-router";
import { Plus, Search } from "lucide-react";

export const Route = createFileRoute("/admin/products")({
  head: () => ({ meta: [{ title: "Products — SERIN Admin" }] }),
  component: ProductsPage,
});

const products = [
  { n: "Heritage Bar Prestige 1kg", c: "Heritage Bar", p: "Inquiry", ship: "Showroom only" },
  { n: "Photo Bar 10g", c: "Photo Bar", p: "129,000", ship: "Ships" },
  { n: "Photo Bar 100g", c: "Photo Bar", p: "329,000", ship: "Ships" },
  { n: "Photo Bar 300g", c: "Photo Bar", p: "379,000", ship: "Ships" },
  { n: "Photo Bar 500g", c: "Photo Bar", p: "599,000", ship: "Showroom only" },
  { n: "Photo Bar 1000g", c: "Photo Bar", p: "999,000", ship: "Showroom only" },
];

function ProductsPage() {
  return (
    <div className="space-y-5">
      <div className="flex items-end justify-between">
        <div>
          <p className="text-[11px] tracking-[0.28em] text-black/45">CATALOGUE</p>
          <h1 className="mt-1 font-serif text-3xl">Products</h1>
        </div>
        <button className="flex h-10 items-center gap-2 rounded-xl bg-[#1a1410] px-4 text-[12.5px] font-medium text-white hover:bg-black">
          <Plus className="h-4 w-4" /> New product
        </button>
      </div>

      <section className="rounded-2xl border border-black/[0.06] bg-white">
        <div className="flex items-center gap-3 border-b border-black/[0.05] p-4">
          <div className="relative flex-1">
            <Search className="pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-black/40" />
            <input placeholder="Search products" className="h-10 w-full rounded-xl border border-black/[0.07] bg-[#faf9f6] pl-10 pr-3 text-[13px] focus:bg-white focus:outline-none" />
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
              {products.map((p) => (
                <tr key={p.n} className="border-b border-black/[0.04] transition-colors last:border-0 hover:bg-[#faf9f6]">
                  <td className="px-5 py-4">
                    <div className="flex items-center gap-3">
                      <div className="h-10 w-10 rounded-lg bg-gradient-to-br from-[#faf3e2] to-[#e6cf9e] ring-1 ring-[#e6cf9e]/40" />
                      <span className="font-medium">{p.n}</span>
                    </div>
                  </td>
                  <td className="px-5 py-4 text-black/60">{p.c}</td>
                  <td className="px-5 py-4 tabular-nums">{p.p === "Inquiry" ? <span className="text-black/45">Inquiry</span> : <>₩ {p.p}</>}</td>
                  <td className="px-5 py-4"><span className="rounded-full bg-emerald-50 px-2.5 py-1 text-[11px] font-medium text-emerald-700 ring-1 ring-emerald-200/70">Public</span></td>
                  <td className="px-5 py-4 text-black/60">{p.ship}</td>
                  <td className="px-5 py-4 text-right"><button className="rounded-lg border border-black/[0.08] bg-white px-3 py-1.5 text-[11.5px] hover:bg-black/[0.03]">Edit</button></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
}
