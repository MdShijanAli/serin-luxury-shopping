import { createFileRoute, Outlet } from "@tanstack/react-router";
import { SidebarProvider, useAdminSidebar } from "@/components/admin/SidebarContext";
import { AdminSidebar } from "@/components/admin/AdminSidebar";
import { AdminTopbar } from "@/components/admin/AdminTopbar";

export const Route = createFileRoute("/admin")({
  head: () => ({
    meta: [
      { title: "Admin — SERIN Atelier" },
      { name: "description", content: "Serin luxury commerce operations dashboard." },
      { name: "robots", content: "noindex" },
    ],
  }),
  component: AdminLayout,
});

function AdminLayout() {
  return (
    <SidebarProvider>
      <Shell />
    </SidebarProvider>
  );
}

function Shell() {
  const { collapsed } = useAdminSidebar();
  return (
    <div className="min-h-screen overflow-x-hidden bg-[#f4f2ee] font-sans text-[#1a1410]">
      <AdminSidebar />
      <div
        className={`min-h-screen transition-[padding] duration-300 ease-out ${
          collapsed ? "lg:pl-[76px]" : "lg:pl-[248px]"
        }`}
      >
        <AdminTopbar />
        <main className="min-w-0 px-5 pb-16 pt-6 lg:px-8">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
