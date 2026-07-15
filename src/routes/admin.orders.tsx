import { createFileRoute, Link } from "@tanstack/react-router";
import { Search, Download, Filter, ChevronLeft, ChevronRight, ChevronDown } from "lucide-react";
import { useMemo, useState } from "react";

export const Route = createFileRoute("/admin/orders")({
  head: () => ({ meta: [{ title: "Orders — SERIN Admin" }] }),
  component: OrdersPage,
  validateSearch: (s: Record<string, unknown>) => ({ status: (s.status as string) || "all" }),
});

type Row = { id: string; date: string; name: string; phone: string; item: string; amount: string; status: Status };
type Status = "Pending" | "Preparing" | "In Production" | "Ready" | "Completed" | "Cancelled";

const seed: Row[] = [
  { id: "02024-0512-0013", date: "2024.05.12 14:35", name: "김서린", phone: "010-1234-5678", item: "Photo Bar 100g × 2", amount: "550,000", status: "Pending" },
  { id: "02024-0512-0012", date: "2024.05.12 13:22", name: "이준호", phone: "010-9876-5432", item: "Photo Bar 10g", amount: "129,000", status: "Preparing" },
  { id: "02024-0511-0011", date: "2024.05.11 21:10", name: "강하늘", phone: "010-1111-2222", item: "Photo Bar 300g", amount: "379,000", status: "In Production" },
  { id: "02024-0511-0009", date: "2024.05.11 17:45", name: "박인지", phone: "010-3333-4444", item: "Photo Bar 100g", amount: "329,000", status: "In Production" },
  { id: "02024-0511-0008", date: "2024.05.11 11:02", name: "최영준", phone: "010-5555-6666", item: "Heritage 1kg", amount: "Inquiry", status: "Ready" },
  { id: "02024-0510-0007", date: "2024.05.10 23:18", name: "이지은", phone: "010-7777-8888", item: "Photo Bar 500g", amount: "599,000", status: "Completed" },
  { id: "02024-0510-0005", date: "2024.05.10 19:33", name: "정다은", phone: "010-9999-0000", item: "Photo Bar 100g × 1", amount: "458,000", status: "Completed" },
];

const statuses: Status[] = ["Pending", "Preparing", "In Production", "Ready", "Completed", "Cancelled"];

const tone: Record<Status, string> = {
  Pending: "bg-amber-50 text-amber-700 ring-amber-200/70",
  Preparing: "bg-sky-50 text-sky-700 ring-sky-200/70",
  "In Production": "bg-violet-50 text-violet-700 ring-violet-200/70",
  Ready: "bg-emerald-50 text-emerald-700 ring-emerald-200/70",
  Completed: "bg-slate-100 text-slate-600 ring-slate-200",
  Cancelled: "bg-rose-50 text-rose-700 ring-rose-200/70",
};

function OrdersPage() {
  const [items, setItems] = useState<Row[]>(seed);
  const [q, setQ] = useState("");
  const [filter, setFilter] = useState<"all" | Status>("all");
  const [openMenu, setOpenMenu] = useState<string | null>(null);

  const filtered = useMemo(
    () =>
      items.filter((r) => {
        const matchQ = !q || [r.id, r.name, r.phone, r.item].some((v) => v.toLowerCase().includes(q.toLowerCase()));
        const matchS = filter === "all" || r.status === filter;
        return matchQ && matchS;
      }),
    [items, q, filter]
  );

  const setStatus = (id: string, s: Status) => {
    setItems((arr) => arr.map((r) => (r.id === id ? { ...r, status: s } : r)));
    setOpenMenu(null);
  };

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
              value={q}
              onChange={(e) => setQ(e.target.value)}
              placeholder="Order # / customer / phone"
              className="h-10 w-full rounded-xl border border-black/[0.07] bg-[#faf9f6] pl-10 pr-3 text-[13px] focus:border-black/20 focus:bg-white focus:outline-none"
            />
          </div>
          <div className="flex items-center gap-2 rounded-xl border border-black/[0.07] bg-white pl-3">
            <Filter className="h-4 w-4 text-black/40" />
            <select
              value={filter}
              onChange={(e) => setFilter(e.target.value as typeof filter)}
              className="h-10 bg-transparent pr-3 text-[12.5px] focus:outline-none"
            >
              <option value="all">All status</option>
              {statuses.map((s) => (
                <option key={s} value={s}>{s}</option>
              ))}
            </select>
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
              {filtered.map((r) => (
                <tr key={r.id} className="border-b border-black/[0.04] transition-colors last:border-0 hover:bg-[#faf9f6]">
                  <td className="px-5 py-4 font-medium tabular-nums">{r.id}</td>
                  <td className="px-5 py-4 tabular-nums text-black/60">{r.date}</td>
                  <td className="px-5 py-4">{r.name}</td>
                  <td className="px-5 py-4 tabular-nums text-black/60">{r.phone}</td>
                  <td className="px-5 py-4 text-black/70">{r.item}</td>
                  <td className="px-5 py-4 tabular-nums">{r.amount === "Inquiry" ? <span className="text-black/45">Inquiry</span> : <>₩ {r.amount}</>}</td>
                  <td className="px-5 py-4">
                    <div className="relative inline-block">
                      <button
                        onClick={() => setOpenMenu(openMenu === r.id ? null : r.id)}
                        className={`inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-[11px] font-medium ring-1 ${tone[r.status]}`}
                      >
                        {r.status}
                        <ChevronDown className="h-3 w-3 opacity-70" />
                      </button>
                      {openMenu === r.id && (
                        <>
                          <div className="fixed inset-0 z-30" onClick={() => setOpenMenu(null)} />
                          <div className="absolute right-0 top-full z-40 mt-1 w-[170px] animate-scale-in rounded-xl border border-black/[0.06] bg-white p-1 shadow-lg">
                            {statuses.map((s) => (
                              <button
                                key={s}
                                onClick={() => setStatus(r.id, s)}
                                className={`block w-full rounded-lg px-3 py-1.5 text-left text-[12px] ${r.status === s ? "bg-black/[0.04] font-medium" : "hover:bg-black/[0.04]"}`}
                              >
                                {s}
                              </button>
                            ))}
                          </div>
                        </>
                      )}
                    </div>
                  </td>
                </tr>
              ))}
              {filtered.length === 0 && (
                <tr>
                  <td colSpan={7} className="px-5 py-16 text-center text-[12.5px] text-black/45">No orders match</td>
                </tr>
              )}
            </tbody>
          </table>
        </div>

        <div className="flex items-center justify-between p-4 text-[12px] text-black/55">
          <span>Total {filtered.length} orders</span>
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
