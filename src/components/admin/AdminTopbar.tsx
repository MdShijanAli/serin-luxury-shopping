import { Menu, Search, Bell, Plus, Sun, ChevronDown } from "lucide-react";
import { useAdminSidebar } from "./SidebarContext";
import { useState } from "react";

export function AdminTopbar() {
  const { toggle, setMobileOpen } = useAdminSidebar();
  const [profileOpen, setProfileOpen] = useState(false);
  const [notifOpen, setNotifOpen] = useState(false);

  return (
    <header className="sticky top-0 z-30 border-b border-black/[0.06] bg-white/80 backdrop-blur-xl">
      <div className="flex h-[72px] items-center gap-3 px-5 lg:px-8">
        <button
          onClick={() => {
            if (window.innerWidth < 1024) setMobileOpen(true);
            else toggle();
          }}
          className="grid h-10 w-10 place-items-center rounded-xl text-[#1a1410] transition-colors hover:bg-black/5"
          aria-label="Toggle sidebar"
        >
          <Menu className="h-5 w-5" strokeWidth={1.6} />
        </button>

        {/* Search */}
        <div className="relative hidden max-w-[420px] flex-1 md:block">
          <Search className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-black/40" />
          <input
            placeholder="Search orders, products, customers…"
            className="h-11 w-full rounded-xl border border-black/[0.07] bg-[#f6f5f2] pl-11 pr-16 text-sm text-[#1a1410] placeholder:text-black/35 focus:border-black/20 focus:bg-white focus:outline-none focus:ring-4 focus:ring-black/[0.04] transition"
          />
          <kbd className="absolute right-3 top-1/2 -translate-y-1/2 rounded-md border border-black/10 bg-white px-1.5 py-0.5 text-[10px] font-medium text-black/50">
            ⌘K
          </kbd>
        </div>

        <div className="ml-auto flex items-center gap-2">
          <button className="hidden h-11 items-center gap-2 rounded-xl bg-gradient-to-br from-[#1a1410] to-[#0b0b0d] px-4 text-[12.5px] font-medium text-white shadow-[0_8px_24px_-10px_rgba(0,0,0,0.4)] transition-transform hover:-translate-y-0.5 sm:flex">
            <Plus className="h-4 w-4" strokeWidth={2} />
            New Order
          </button>

          <button className="grid h-10 w-10 place-items-center rounded-xl text-[#1a1410] transition-colors hover:bg-black/5">
            <Sun className="h-[18px] w-[18px]" strokeWidth={1.5} />
          </button>

          <div className="relative">
            <button
              onClick={() => { setNotifOpen((v) => !v); setProfileOpen(false); }}
              className="relative grid h-10 w-10 place-items-center rounded-xl text-[#1a1410] transition-colors hover:bg-black/5"
            >
              <Bell className="h-[18px] w-[18px]" strokeWidth={1.5} />
              <span className="absolute right-2 top-2 h-2 w-2 rounded-full bg-gradient-to-br from-[#e6cf9e] to-[#a17f43] ring-2 ring-white" />
            </button>
            {notifOpen && (
              <div className="absolute right-0 top-full z-40 mt-2 w-[340px] origin-top-right animate-scale-in rounded-2xl border border-black/[0.06] bg-white p-2 shadow-[0_20px_60px_-20px_rgba(0,0,0,0.2)]">
                <div className="flex items-center justify-between px-3 py-2">
                  <p className="text-sm font-medium">Notifications</p>
                  <span className="text-[11px] text-black/50">3 new</span>
                </div>
                {[
                  { t: "New order · SRN-2024-0520-1001", d: "김서린 · 2 min ago", dot: true },
                  { t: "Payment received", d: "129,000 KRW · 12 min ago", dot: true },
                  { t: "Low stock: Photo Bar 100g", d: "3 units left · 1 h ago", dot: false },
                ].map((n, i) => (
                  <div key={i} className="flex gap-3 rounded-xl px-3 py-2.5 hover:bg-black/[0.03]">
                    <span className={`mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full ${n.dot ? "bg-[#a17f43]" : "bg-black/20"}`} />
                    <div className="min-w-0">
                      <p className="truncate text-[13px] font-medium">{n.t}</p>
                      <p className="text-[11.5px] text-black/50">{n.d}</p>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          <div className="mx-1 h-8 w-px bg-black/[0.08]" />

          <div className="relative">
            <button
              onClick={() => { setProfileOpen((v) => !v); setNotifOpen(false); }}
              className="flex h-11 items-center gap-2.5 rounded-xl px-1.5 pr-3 transition-colors hover:bg-black/5"
            >
              <div className="grid h-8 w-8 place-items-center rounded-lg bg-gradient-to-br from-[#1a1410] to-[#3a2a1c] text-[11px] font-medium text-white">
                SK
              </div>
              <div className="hidden text-left leading-tight md:block">
                <p className="text-[12.5px] font-medium text-[#1a1410]">Seo-rin Kim</p>
                <p className="text-[10.5px] text-black/50">Super Admin</p>
              </div>
              <ChevronDown className="hidden h-4 w-4 text-black/40 md:block" />
            </button>
            {profileOpen && (
              <div className="absolute right-0 top-full z-40 mt-2 w-[220px] origin-top-right animate-scale-in rounded-2xl border border-black/[0.06] bg-white p-1.5 shadow-[0_20px_60px_-20px_rgba(0,0,0,0.2)]">
                {["Profile", "Preferences", "Activity log", "Sign out"].map((l) => (
                  <button key={l} className="block w-full rounded-lg px-3 py-2 text-left text-[13px] hover:bg-black/[0.04]">
                    {l}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
}
