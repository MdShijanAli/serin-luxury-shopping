import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/admin/customers")({
  head: () => ({ meta: [{ title: "Customers — SERIN Admin" }] }),
  component: CustomersPage,
});

const customers = [
  { n: "김서린", p: "010-1234-5678", e: "serin_kim@example.com", d: "2024.05.12", id: "02024-0512-0013", c: 3, i: "Photo Bar 100g × 2", s: "Pending", t: "amber" },
  { n: "이준호", p: "010-9876-5432", e: "junho@example.com", d: "2024.05.12", id: "02024-0512-0012", c: 1, i: "Photo Bar 10g", s: "Preparing", t: "blue" },
  { n: "강하늘", p: "010-1111-2222", e: "haneul@example.com", d: "2024.05.11", id: "02024-0511-0011", c: 2, i: "Photo Bar 300g", s: "In Production", t: "violet" },
  { n: "정다은", p: "010-9999-0000", e: "didae@example.com", d: "2024.05.10", id: "02024-0510-0008", c: 4, i: "Photo Bar 100g", s: "Ready", t: "emerald" },
];

const tone: Record<string, string> = {
  amber: "bg-amber-50 text-amber-700 ring-amber-200/70",
  blue: "bg-sky-50 text-sky-700 ring-sky-200/70",
  violet: "bg-violet-50 text-violet-700 ring-violet-200/70",
  emerald: "bg-emerald-50 text-emerald-700 ring-emerald-200/70",
};

function CustomersPage() {
  return (
    <div className="space-y-5">
      <div>
        <p className="text-[11px] tracking-[0.28em] text-black/45">DIRECTORY</p>
        <h1 className="mt-1 font-serif text-3xl">Customers</h1>
      </div>
      <section className="overflow-hidden rounded-2xl border border-black/[0.06] bg-white">
        <table className="w-full text-[12.5px]">
          <thead>
            <tr className="border-b border-black/[0.05] bg-[#faf9f6] text-left text-[11px] tracking-wider text-black/45">
              {["CUSTOMER", "PHONE", "EMAIL", "LAST ORDER", "ORDER #", "COUNT", "LAST ITEM", "STATUS"].map((h) => (
                <th key={h} className="px-5 py-3 font-medium">{h}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {customers.map((c) => (
              <tr key={c.id} className="border-b border-black/[0.04] transition-colors last:border-0 hover:bg-[#faf9f6]">
                <td className="px-5 py-4">
                  <div className="flex items-center gap-3">
                    <div className="grid h-8 w-8 place-items-center rounded-full bg-gradient-to-br from-[#1a1410] to-[#3a2a1c] text-[11px] font-medium text-white">{c.n[0]}</div>
                    <span className="font-medium">{c.n}</span>
                  </div>
                </td>
                <td className="px-5 py-4 tabular-nums text-black/60">{c.p}</td>
                <td className="px-5 py-4 text-black/60">{c.e}</td>
                <td className="px-5 py-4 tabular-nums text-black/60">{c.d}</td>
                <td className="px-5 py-4 tabular-nums">{c.id}</td>
                <td className="px-5 py-4 tabular-nums">{c.c}</td>
                <td className="px-5 py-4 text-black/60">{c.i}</td>
                <td className="px-5 py-4"><span className={`inline-flex rounded-full px-2.5 py-1 text-[11px] font-medium ring-1 ${tone[c.t]}`}>{c.s}</span></td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>
    </div>
  );
}
