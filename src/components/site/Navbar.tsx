import { useState } from "react";
import { ChevronDown, ShoppingBag, User } from "lucide-react";

const navItems = [
  { label: "BRAND", href: "#brand" },
  {
    label: "COLLECTIONS",
    href: "#collections",
    children: [
      { label: "Korea Heritage Bar", href: "#heritage" },
      { label: "SERIN Photo Bar", href: "#photo" },
    ],
  },
  { label: "RESERVATION", href: "#reservation" },
];

export function Navbar() {
  const [open, setOpen] = useState<string | null>(null);

  return (
    <header className="absolute top-0 left-0 right-0 z-30">
      <div className="mx-auto flex max-w-[1400px] items-center justify-between px-10 py-7">
        <a href="#" className="font-serif text-3xl tracking-[0.35em] text-foreground">
          SERIN
        </a>

        <nav className="hidden items-center gap-14 md:flex">
          {navItems.map((item) => (
            <div
              key={item.label}
              className="relative"
              onMouseEnter={() => setOpen(item.label)}
              onMouseLeave={() => setOpen(null)}
            >
              <a
                href={item.href}
                className="flex items-center gap-1 text-[13px] tracking-[0.25em] text-foreground/80 transition-colors hover:text-foreground"
              >
                {item.label}
                {item.children && <ChevronDown className="h-3 w-3" />}
              </a>
              {item.children && open === item.label && (
                <div className="absolute left-1/2 top-full -translate-x-1/2 pt-3">
                  <div className="min-w-[200px] bg-popover px-5 py-4 shadow-sm">
                    {item.children.map((c) => (
                      <a
                        key={c.label}
                        href={c.href}
                        className="block py-2 text-sm text-foreground/80 transition-colors hover:text-foreground"
                      >
                        {c.label}
                      </a>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </nav>

        <div className="flex items-center gap-5 text-foreground/80">
          <button aria-label="Cart" className="transition-colors hover:text-foreground">
            <ShoppingBag className="h-5 w-5" strokeWidth={1.3} />
          </button>
          <button aria-label="Account" className="transition-colors hover:text-foreground">
            <User className="h-5 w-5" strokeWidth={1.3} />
          </button>
        </div>
      </div>
    </header>
  );
}
