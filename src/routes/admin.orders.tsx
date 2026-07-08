import { createFileRoute } from "@tanstack/react-router";
import { Search, Download, Filter, ChevronLeft, ChevronRight } from "lucide-react";

export const Route = createFileRoute("/admin/orders")({
  head: () => ({ meta: [{ title: "Orders — SERIN Admin" }] }),
  component: OrdersPage,
  validateSearch: (s: Record<string, unknown>) => ({ status: (s.status as string) || "all" }),
});

const rows = [
  ["02024-0512-0013", "2024.05.12 14:35", "김서린", "010-1234-5678", "Photo Bar 100g × 2", "550,000", "Pending", "amber"],
  ["02024-0512-0012", "2024.05.12 13:22", "이준호", "010-9876-5432", "Photo Bar 10g", "129,000", "Preparing", "blue"],
  ["02024-0511-0011", "2024.05.11 21:10", "강하늘", "010-1111-2222", "Photo Bar 300g", "379,000", "In Production", "violet"],
  ["02024-0511-0009", "2024.05.11 17:45", "박인지", "010-3333-4444", "Photo Bar 100g", "329,000", "In Production", "violet"],
  ["02024-0511-0008", "2024.05.11 11:02", "최영준", "010-5555-6666", "Heritage 1kg", "Inquiry", "Ready", "emerald"],
  ["02024-0510-0007", "2024.05.10 23:18", "이지은", "010-7777-8888", "Photo Bar 500g", "599,000", "Completed", "gray"],
  ["02024-0510-0005", "2024.05.10 19:33", "정다은", "010-9999-0000", "Photo Bar 100g × 1", "458,000", "Completed", "gray"],
];

const tone: Record<string, string> = {
  amber: "bg-amber-50 text-amber-700 ring-amber-200/70",
  blue: "bg-sky-50 text-sky-700 ring-sky-200/70",
  violet: "bg-violet-50 text-violet-700 ring-violet-200/70",
  emerald: "bg-emerald-50 text-emerald-700 ring-emerald-200/70",
  gray: "bg-slate-100 text-slate-600 ring-slate-200",
};

function OrdersPage() {
  return (
    <div className="space-y-5">
      <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="text-[11px] tracking-[0.28em] text-black/45">OPERATIONS</p>
          <h1 className="mt-1 font-serif text-3xl">Orders</h1>
        </div>
        <button className="flex h-10 items-center gap-2 self-start rounded-xl border border-black/[0.08] bg-white px-4 text-[12.5px] font-medium hover:bg-white/70 sm:self-auto">
          <Download className="h-4 w-4" /> Export CSV
        </button>
      </div>

      <section className="rounded-2xl border border-black/[0.06] bg-white">
        <div className="flex flex-wrap items-center gap-3 border-b border-black/[0.05] p-4">
          <div className="relative flex-1 min-w-[240px]">
            <Search className="pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-black/40" />
            <input
              placeholder="Order # / customer / phone"
              className="h-10 w-full rounded-xl border border-black/[0.07] bg-[#faf9f6] pl-10 pr-3 text-[13px] focus:border-black/20 focus:bg-white focus:outline-none"
            />
          </div>
          <button className="flex h-10 items-center gap-2 rounded-xl border border-black/[0.07] bg-white px-3 text-[12.5px]">
            <Filter className="h-4 w-4" /> All status
          </button>
          <div className="flex items-center gap-2 text-[12.5px]">
            <input type="date" className="h-10 rounded-xl border border-black/[0.07] bg-white px-3" defaultValue="2024-04-12" />
            <span className="text-black/40">—</span>
            <input type="date" className="h-10 rounded-xl border border-black/[0.07] bg-white px-3" defaultValue="2024-05-12" />
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-[12.5px]">
            <thead>
              <tr className="border-b border-black/[0.05] bg-[#faf9f6] text-left text-[11px] tracking-wider text-black/45">
                {["ORDER #", "DATE", "CUSTOMER", "PHONE", "ITEM", "AMOUNT", "STATUS"].map((h) => (
                  <th key={h} className="px-5 py-3 font-medium">{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {rows.map((r) => (
                <tr key={r[0]} className="border-b border-black/[0.04] transition-colors last:border-0 hover:bg-[#faf9f6]">
                  <td className="px-5 py-4 font-medium tabular-nums">{r[0]}</td>
                  <td className="px-5 py-4 tabular-nums text-black/60">{r[1]}</td>
                  <td className="px-5 py-4">{r[2]}</td>
                  <td className="px-5 py-4 tabular-nums text-black/60">{r[3]}</td>
                  <td className="px-5 py-4 text-black/70">{r[4]}</td>
                  <td className="px-5 py-4 tabular-nums">{r[5] === "Inquiry" ? <span className="text-black/45">Inquiry</span> : <>₩ {r[5]}</>}</td>
                  <td className="px-5 py-4">
                    <span className={`inline-flex rounded-full px-2.5 py-1 text-[11px] font-medium ring-1 ${tone[r[7]]}`}>{r[6]}</span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="flex items-center justify-between p-4 text-[12px] text-black/55">
          <span>Total {rows.length} orders</span>
          <div className="flex items-center gap-1">
            <button className="grid h-8 w-8 place-items-center rounded-lg hover:bg-black/[0.04]"><ChevronLeft className="h-4 w-4" /></button>
            {[1, 2, 3].map((p) => (
              <button key={p} className={`h-8 w-8 rounded-lg text-[12px] ${p === 1 ? "bg-[#1a1410] text-white" : "hover:bg-black/[0.04]"}`}>{p}</button>
            ))}
            <button className="grid h-8 w-8 place-items-center rounded-lg hover:bg-black/[0.04]"><ChevronRight className="h-4 w-4" /></button>
          </div>
        </div>
      </section>
    </div>
  );
}
