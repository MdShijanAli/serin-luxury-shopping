import { createFileRoute } from "@tanstack/react-router";
import { Plus } from "lucide-react";

export const Route = createFileRoute("/admin/accounts")({
  head: () => ({ meta: [{ title: "Admins — SERIN Admin" }] }),
  component: AccountsPage,
});

const admins = [
  { n: "김서린 (나)", e: "serin@serin.com", r: "Super Admin", s: "Active", l: "2024.05.12 15:20", c: "2024.03.01" },
  { n: "공장 관리자", e: "factory@serin.com", r: "Production", s: "Active", l: "2024.05.12 11:05", c: "2024.03.05" },
  { n: "디자인팀", e: "design@serin.com", r: "Production", s: "Active", l: "2024.05.11 17:30", c: "2024.03.10" },
  { n: "CS 담당", e: "cs@serin.com", r: "Production", s: "Inactive", l: "—", c: "2024.03.15" },
];

function AccountsPage() {
  return (
    <div className="space-y-5">
      <div className="flex items-end justify-between">
        <div>
          <p className="text-[11px] tracking-[0.28em] text-black/45">TEAM</p>
          <h1 className="mt-1 font-serif text-3xl">Admin accounts</h1>
        </div>
        <button className="flex h-10 items-center gap-2 rounded-xl bg-[#1a1410] px-4 text-[12.5px] font-medium text-white hover:bg-black">
          <Plus className="h-4 w-4" /> Invite admin
        </button>
      </div>
      <section className="overflow-hidden rounded-2xl border border-black/[0.06] bg-white">
        <table className="w-full text-[12.5px]">
          <thead>
            <tr className="border-b border-black/[0.05] bg-[#faf9f6] text-left text-[11px] tracking-wider text-black/45">
              {["NAME", "EMAIL", "ROLE", "STATUS", "LAST LOGIN", "CREATED", ""].map((h) => (
                <th key={h} className="px-5 py-3 font-medium">{h}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {admins.map((a) => (
              <tr key={a.e} className="border-b border-black/[0.04] last:border-0 hover:bg-[#faf9f6]">
                <td className="px-5 py-4 font-medium">{a.n}</td>
                <td className="px-5 py-4 text-black/60">{a.e}</td>
                <td className="px-5 py-4"><span className="rounded-full bg-[#f4ead0] px-2.5 py-1 text-[11px] font-medium text-[#5f4d2c]">{a.r}</span></td>
                <td className="px-5 py-4">
                  <span className={`inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-[11px] font-medium ring-1 ${a.s === "Active" ? "bg-emerald-50 text-emerald-700 ring-emerald-200/70" : "bg-slate-100 text-slate-600 ring-slate-200"}`}>
                    <span className={`h-1.5 w-1.5 rounded-full ${a.s === "Active" ? "bg-emerald-500" : "bg-slate-400"}`} />
                    {a.s}
                  </span>
                </td>
                <td className="px-5 py-4 tabular-nums text-black/60">{a.l}</td>
                <td className="px-5 py-4 tabular-nums text-black/60">{a.c}</td>
                <td className="px-5 py-4 text-right"><button className="rounded-lg border border-black/[0.08] bg-white px-3 py-1.5 text-[11.5px] hover:bg-black/[0.03]">Edit</button></td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>
    </div>
  );
}
