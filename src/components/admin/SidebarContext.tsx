import { createContext, useContext, useEffect, useState } from "react";

type Ctx = {
  collapsed: boolean;
  toggle: () => void;
  mobileOpen: boolean;
  setMobileOpen: (v: boolean) => void;
};

const SidebarCtx = createContext<Ctx | null>(null);

export function SidebarProvider({ children }: { children: React.ReactNode }) {
  const [collapsed, setCollapsed] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    try {
      const v = localStorage.getItem("serin.admin.sidebar.collapsed");
      if (v === "1") setCollapsed(true);
    } catch {}
  }, []);

  const toggle = () => {
    setCollapsed((c) => {
      const next = !c;
      try { localStorage.setItem("serin.admin.sidebar.collapsed", next ? "1" : "0"); } catch {}
      return next;
    });
  };

  return (
    <SidebarCtx.Provider value={{ collapsed, toggle, mobileOpen, setMobileOpen }}>
      {children}
    </SidebarCtx.Provider>
  );
}

export function useAdminSidebar() {
  const c = useContext(SidebarCtx);
  if (!c) throw new Error("useAdminSidebar must be inside SidebarProvider");
  return c;
}
