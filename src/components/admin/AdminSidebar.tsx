import { Link, useRouterState } from "@tanstack/react-router";
import {
  LayoutDashboard,
  ShoppingBag,
  Package,
  Users,
  UserCog,
  Settings,
  ChevronDown,
  Sparkles,
  X,
} from "lucide-react";
import { useState } from "react";
import { useAdminSidebar } from "./SidebarContext";

type Item = {
  label: string;
  to?: string;
  icon: React.ComponentType<{ className?: string; strokeWidth?: number }>;
  badge?: string;
  children?: { label: string; to: string }[];
};

const items: Item[] = [
  { label: "Dashboard", to: "/admin", icon: LayoutDashboard },
  {
    label: "Orders",
    icon: ShoppingBag,
    badge: "12",
    children: [
      { label: "All Orders", to: "/admin/orders" },
      { label: "Pending", to: "/admin/orders?status=pending" },
      { label: "Completed", to: "/admin/orders?status=done" },
    ],
  },
  { label: "Products", to: "/admin/products", icon: Package },
  { label: "Customers", to: "/admin/customers", icon: Users },
  { label: "Admins", to: "/admin/accounts", icon: UserCog },
  { label: "Settings", to: "/admin/settings", icon: Settings },
];

export function AdminSidebar() {
  const { collapsed, mobileOpen, setMobileOpen } = useAdminSidebar();
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const [openGroup, setOpenGroup] = useState<string | null>("Orders");

  const width = collapsed ? "lg:w-[76px]" : "lg:w-[248px]";

  return (
    <>
      {/* Mobile scrim */}
      <div
        onClick={() => setMobileOpen(false)}
        className={`fixed inset-0 z-40 bg-black/40 backdrop-blur-sm transition-opacity duration-300 lg:hidden ${
          mobileOpen ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
      />

      <aside
        className={`fixed inset-y-0 left-0 z-50 flex flex-col overflow-x-hidden bg-[#0b0b0d] text-white transition-[width,transform] duration-300 ease-out
          w-[260px] ${width}
          ${mobileOpen ? "translate-x-0" : "-translate-x-full"} lg:translate-x-0`}
      >
        {/* Brand */}
        <div className="flex h-[72px] items-center justify-between px-5">
          <Link to="/admin" className="flex items-center gap-2.5 overflow-hidden">
            <div className="grid h-9 w-9 shrink-0 place-items-center rounded-xl bg-gradient-to-br from-[#d9c39a] to-[#8b6f3f] shadow-[0_6px_20px_-6px_rgba(217,195,154,0.6)]">
              <Sparkles className="h-4 w-4 text-black" strokeWidth={2.2} />
            </div>
            <div className={`flex flex-col leading-tight transition-opacity duration-200 ${collapsed ? "lg:opacity-0 lg:pointer-events-none" : "opacity-100"}`}>
              <span className="font-serif text-xl tracking-[0.28em]">SERIN</span>
              <span className="text-[10px] tracking-[0.32em] text-white/50">ADMIN</span>
            </div>
          </Link>
          <button
            onClick={() => setMobileOpen(false)}
            className="rounded-lg p-1.5 text-white/70 hover:bg-white/10 lg:hidden"
            aria-label="Close sidebar"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* Nav */}
        <nav className="flex-1 overflow-y-auto px-3 py-2">
          <p className={`px-3 pb-2 pt-2 text-[10px] tracking-[0.28em] text-white/35 transition-opacity duration-200 ${collapsed ? "lg:opacity-0" : ""}`}>
            MENU
          </p>
          <ul className="space-y-1">
            {items.map((item) => {
              const Icon = item.icon;
              const active =
                (item.to && (pathname === item.to || (item.to !== "/admin" && pathname.startsWith(item.to)))) ||
                (item.children?.some((c) => pathname.startsWith(c.to.split("?")[0])) ?? false);
              const isOpen = openGroup === item.label;

              const row = (
                <div
                  className={`group relative flex h-11 items-center gap-3 rounded-xl px-3 transition-all duration-200
                  ${active
                    ? "bg-gradient-to-r from-white/[0.14] to-white/[0.04] text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.08)]"
                    : "text-white/65 hover:bg-white/[0.06] hover:text-white"}`}
                >
                  {active && (
                    <span className="absolute left-0 top-1/2 h-6 w-[3px] -translate-y-1/2 rounded-r bg-gradient-to-b from-[#e6cf9e] to-[#a17f43]" />
                  )}
                  <Icon className="h-[18px] w-[18px] shrink-0" strokeWidth={1.6} />
                  <span
                    className={`flex-1 truncate text-[13.5px] transition-all duration-200 ${
                      collapsed ? "lg:opacity-0 lg:-translate-x-1" : "opacity-100"
                    }`}
                  >
                    {item.label}
                  </span>
                  {item.badge && !collapsed && (
                    <span className="rounded-full bg-[#d9c39a]/15 px-2 py-0.5 text-[10px] font-medium text-[#e6cf9e]">
                      {item.badge}
                    </span>
                  )}
                  {item.children && !collapsed && (
                    <ChevronDown
                      className={`h-4 w-4 text-white/40 transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`}
                    />
                  )}

                  {/* Tooltip when collapsed */}
                  {collapsed && (
                    <span className="pointer-events-none absolute left-full ml-3 hidden whitespace-nowrap rounded-md bg-black px-2.5 py-1.5 text-xs text-white opacity-0 shadow-lg ring-1 ring-white/10 transition-opacity group-hover:opacity-100 lg:block">
                      {item.label}
                    </span>
                  )}
                </div>
              );

              return (
                <li key={item.label}>
                  {item.to ? (
                    <Link to={item.to} onClick={() => setMobileOpen(false)}>{row}</Link>
                  ) : (
                    <button
                      className="w-full text-left"
                      onClick={() => setOpenGroup(isOpen ? null : item.label)}
                    >
                      {row}
                    </button>
                  )}

                  {item.children && (
                    <div
                      className={`grid overflow-hidden transition-[grid-template-rows] duration-300 ${
                        isOpen && !collapsed ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                      }`}
                    >
                      <ul className="min-h-0 space-y-0.5 pl-11 pt-1">
                        {item.children.map((c) => {
                          const cActive = pathname + (typeof window !== "undefined" ? window.location.search : "") === c.to;
                          return (
                            <li key={c.label}>
                              <Link
                                to={c.to.split("?")[0]}
                                search={
                                  c.to.includes("?")
                                    ? Object.fromEntries(new URLSearchParams(c.to.split("?")[1]))
                                    : undefined
                                }
                                onClick={() => setMobileOpen(false)}
                                className={`flex h-9 items-center rounded-lg px-3 text-[12.5px] transition-colors ${
                                  cActive ? "text-white" : "text-white/55 hover:text-white"
                                }`}
                              >
                                <span className="mr-2.5 h-1 w-1 rounded-full bg-current opacity-60" />
                                {c.label}
                              </Link>
                            </li>
                          );
                        })}
                      </ul>
                    </div>
                  )}
                </li>
              );
            })}
          </ul>
        </nav>

        {/* Footer card */}
        <div className={`p-3 transition-opacity duration-200 ${collapsed ? "lg:opacity-0 lg:pointer-events-none" : ""}`}>
          <div className="rounded-2xl border border-white/10 bg-gradient-to-br from-white/[0.06] to-transparent p-4">
            <p className="font-serif text-base">Serin Concierge</p>
            <p className="mt-1 text-[11px] leading-relaxed text-white/55">
              Priority support for atelier managers.
            </p>
            <button className="mt-3 w-full rounded-lg bg-gradient-to-r from-[#e6cf9e] to-[#a17f43] py-2 text-[11px] font-medium tracking-wider text-black hover:opacity-90">
              CONTACT
            </button>
          </div>
        </div>
      </aside>
    </>
  );
}
