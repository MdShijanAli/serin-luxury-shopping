import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Camera, Check } from "lucide-react";

export const Route = createFileRoute("/admin/profile")({
  head: () => ({ meta: [{ title: "Profile — SERIN Admin" }] }),
  component: ProfilePage,
});

const inp =
  "mt-1.5 h-11 w-full rounded-xl border border-black/[0.07] bg-[#faf9f6] px-3.5 text-[13px] focus:border-black/20 focus:bg-white focus:outline-none focus:ring-4 focus:ring-black/[0.04]";

function ProfilePage() {
  const [saved, setSaved] = useState(false);
  const save = () => { setSaved(true); setTimeout(() => setSaved(false), 1800); };

  return (
    <div className="space-y-5">
      <div>
        <p className="text-[11px] tracking-[0.28em] text-black/45">ACCOUNT</p>
        <h1 className="mt-1 font-serif text-3xl">Profile</h1>
      </div>

      <section className="rounded-2xl border border-black/[0.06] bg-white p-6">
        <div className="flex items-center gap-5">
          <div className="relative">
            <div className="grid h-20 w-20 place-items-center rounded-2xl bg-gradient-to-br from-[#1a1410] to-[#3a2a1c] font-serif text-2xl text-white">SK</div>
            <button className="absolute -bottom-1 -right-1 grid h-8 w-8 place-items-center rounded-full border border-black/[0.08] bg-white shadow-sm hover:bg-black/[0.03]">
              <Camera className="h-3.5 w-3.5" />
            </button>
          </div>
          <div>
            <p className="font-serif text-xl">Seo-rin Kim</p>
            <p className="text-[12.5px] text-black/50">Super Admin · Joined 2024.03.01</p>
          </div>
        </div>

        <div className="mt-8 grid gap-5 md:grid-cols-2">
          {[
            { l: "Full name", v: "Seo-rin Kim" },
            { l: "Email", v: "serin@serin.com" },
            { l: "Phone", v: "010-1234-5678" },
            { l: "Role", v: "Super Admin" },
            { l: "Language", v: "한국어" },
            { l: "Location", v: "Seoul, Korea" },
          ].map((f) => (
            <label key={f.l} className="block">
              <span className="text-[11.5px] font-medium tracking-wide text-black/60">{f.l}</span>
              <input defaultValue={f.v} className={inp} />
            </label>
          ))}
        </div>

        <div className="mt-8 flex items-center justify-end gap-2 border-t border-black/[0.06] pt-5">
          {saved && <span className="mr-auto inline-flex items-center gap-1.5 text-[12px] text-emerald-600"><Check className="h-3.5 w-3.5" /> Saved</span>}
          <button className="h-10 rounded-xl border border-black/[0.08] bg-white px-4 text-[12.5px]">Cancel</button>
          <button onClick={save} className="h-10 rounded-xl bg-gradient-to-br from-[#1a1410] to-[#0b0b0d] px-5 text-[12.5px] font-medium text-white">Save profile</button>
        </div>
      </section>
    </div>
  );
}
