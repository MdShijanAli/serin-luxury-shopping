import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { ShoppingBag, User, Package, CreditCard, Settings as Cog } from "lucide-react";

export const Route = createFileRoute("/admin/activity")({
  head: () => ({ meta: [{ title: "Activity log — SERIN Admin" }] }),
  component: ActivityPage,
});

const events = [
  { t: "2024.05.12 14:35", cat: "order", i: ShoppingBag, l: "Order SRN-2024-0512-0013 placed", by: "김서린" },
  { t: "2024.05.12 13:22", cat: "payment", i: CreditCard, l: "Deposit confirmed · ₩129,000", by: "System" },
  { t: "2024.05.12 11:05", cat: "product", i: Package, l: "Photo Bar 300g updated", by: "Seo-rin Kim" },
  { t: "2024.05.12 09:14", cat: "customer", i: User, l: "New customer signed up · @jieun", by: "System" },
  { t: "2024.05.11 22:40", cat: "settings", i: Cog, l: "Notification preferences changed", by: "Seo-rin Kim" },
  { t: "2024.05.11 17:45", cat: "order", i: ShoppingBag, l: "Order SRN-2024-0511-0009 marked In Production", by: "공장 관리자" },
  { t: "2024.05.11 12:18", cat: "product", i: Package, l: "Photo Bar 500g toggled inactive", by: "Seo-rin Kim" },
];

const filters = ["all", "order", "payment", "product", "customer", "settings"] as const;

function ActivityPage() {
  const [f, setF] = useState<(typeof filters)[number]>("all");
  const rows = events.filter((e) => f === "all" || e.cat === f);

  return (
    <div className="space-y-5">
      <div>
        <p className="text-[11px] tracking-[0.28em] text-black/45">HISTORY</p>
        <h1 className="mt-1 font-serif text-3xl">Activity log</h1>
      </div>

      <div className="flex flex-wrap items-center gap-2">
        {filters.map((k) => (
          <button
            key={k}
            onClick={() => setF(k)}
            className={`h-9 rounded-full border px-3.5 text-[12px] capitalize transition-colors ${
              f === k ? "border-black bg-[#1a1410] text-white" : "border-black/[0.08] bg-white text-black/70 hover:bg-black/[0.03]"
            }`}
          >
            {k}
          </button>
        ))}
      </div>

      <section className="rounded-2xl border border-black/[0.06] bg-white">
        <ol className="divide-y divide-black/[0.04]">
          {rows.map((e, i) => {
            const Icon = e.i;
            return (
              <li key={i} className="flex items-center gap-4 px-6 py-4">
                <div className="grid h-10 w-10 place-items-center rounded-xl bg-[#faf9f6] text-[#8b6f3f] ring-1 ring-black/[0.04]">
                  <Icon className="h-[18px] w-[18px]" strokeWidth={1.6} />
                </div>
                <div className="min-w-0 flex-1">
                  <p className="truncate text-[13px] font-medium">{e.l}</p>
                  <p className="text-[11.5px] text-black/50">by {e.by}</p>
                </div>
                <span className="whitespace-nowrap text-[11.5px] tabular-nums text-black/45">{e.t}</span>
              </li>
            );
          })}
          {rows.length === 0 && <li className="px-6 py-16 text-center text-[12.5px] text-black/45">No events</li>}
        </ol>
      </section>
    </div>
  );
}
