
"use client";

import { useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import Link from "next/link";

interface AdminSideBarProps {
  ordersCount?: number;
}

export default function AdminSideBar({
  ordersCount,
}: AdminSideBarProps) {
  const pathname = usePathname();
  const router = useRouter();
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);

  const menuItems = [
    {
      name: "Orders",
      href: "/Admin_Order",
      detail: ordersCount !== undefined ? ordersCount : null,
    },
    {
      name: "Products",
      href: "/Admin_Product",
      detail: "Catalogue",
    },
    {
      name: "Categories",
      href: "/Admin_Category",
      detail: "3 Active",
    },
    {
      name: "Users",
      href: "/Admin_Users",
      detail: "Clients",
    },
  ];

  return (
    <aside className="flex flex-col bg-[#241A14] p-6 text-[#F3EBD7] md:min-h-screen">

      {/* LOGO */}
      <div className="mb-8 flex items-center justify-between">
        <Link href="/landing" className="flex items-center gap-3">
          <img
            src="/images/Minimalist_Taupe_E-Swoosh_Logo-removebg-preview.png"
            alt="Elvora logo"
            className="h-10 w-10 object-contain"
          />

          <span className="font-kulim text-xl font-bold tracking-[3px]">
            ELVORA
          </span>
        </Link>

        {/* MOBILE MENU BUTTON */}
        <button
          onClick={() => setIsMobileNavOpen(!isMobileNavOpen)}
          className="text-xl text-[#F3EBD7] md:hidden"
          aria-label="Toggle navigation"
        >
          {isMobileNavOpen ? "✕" : "☰"}
        </button>
      </div>

      {/* NAVIGATION */}
      <div
        className={`${
          isMobileNavOpen ? "block" : "hidden"
        } flex-1 flex-col md:flex`}
      >
        <p className="mb-3 text-[11px] font-medium tracking-[2px] text-[#F3EBD7]/60">
          MANAGEMENT
        </p>

        <nav className="flex flex-col gap-2">
          {menuItems.map((item) => {
            const isActive = pathname === item.href;

            return (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setIsMobileNavOpen(false)}
                className={`flex items-center justify-between rounded-sm px-4 py-3 text-sm font-medium transition ${
                  isActive
                    ? "bg-[#845F42] text-white"
                    : "text-[#F3EBD7] hover:bg-white/10"
                }`}
              >
                <span>{item.name}</span>

                {item.detail !== null && (
                  <span
                    className={`text-xs ${
                      isActive
                        ? "rounded bg-white/20 px-2 py-0.5"
                        : "text-[#F3EBD7]/50"
                    }`}
                  >
                    {item.detail}
                  </span>
                )}
              </Link>
            );
          })}
        </nav>

        {/* LOGOUT */}
        <div className="mt-auto pt-6">
          <button
            onClick={() => router.push("/admin_login")}
            className="flex w-full items-center justify-center rounded-sm bg-[#F3EBD7]/10 px-4 py-3 text-sm font-medium text-[#F3EBD7] transition hover:bg-[#845F42] hover:text-white"
          >
            Logout
          </button>
        </div>
      </div>
    </aside>
  );
}
