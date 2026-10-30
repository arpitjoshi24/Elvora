
"use client";

import React from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

interface AdminSideBarProps {
  onLogout?: () => void;
}

const adminLinks = [
  { label: "Dashboard", href: "/admin_dashboard" },
  { label: "Orders", href: "/Admin_Order" },
  { label: "Products", href: "/Admin_Product" },
  { label: "Categories", href: "/Admin_Category" },
  { label: "Users", href: "/Admin_Users" },
];

export default function AdminSideBar({ onLogout }: AdminSideBarProps) {
  const pathname = usePathname();
  const router = useRouter();

  const handleLogout = () => {
    if (onLogout) {
      onLogout();
    } else {
      router.push("/admin_login");
    }
  };

  return (
    <aside className="flex min-h-screen w-full flex-col border-r border-[#6E5A4B] bg-[#241A14] text-[#F3EBD7]">

      {/* BRAND */}
      <div className="border-b border-[#6E5A4B] px-6 py-7">
        <Link href="/admin_dashboard" className="flex items-center gap-3">
          <img
            src="/images/Minimalist_Taupe_E-Swoosh_Logo-removebg-preview.png"
            alt=""
            className="h-9 w-9 object-contain"
          />

          <div>
            <p className="font-kulim text-lg font-bold tracking-[3px]">
              ELVORA
            </p>
            <p className="mt-1 font-kulim text-[9px] tracking-[2px] text-[#A99580]">
              ADMINISTRATION
            </p>
          </div>
        </Link>
      </div>

      {/* NAVIGATION */}
      <div className="px-4 py-7">
        <p className="mb-4 px-3 font-kulim text-[10px] tracking-[2px] text-[#A99580]">
          MANAGEMENT
        </p>

        <nav className="flex flex-col">
          {adminLinks.map((item) => {
            const isActive = pathname === item.href ||
              pathname.startsWith(`${item.href}/`);

            return (
              <Link
                key={item.href}
                href={item.href}
                aria-current={isActive ? "page" : undefined}
                className={`flex items-center justify-between border-l-2 px-4 py-4 font-kulim text-sm transition-colors ${
                  isActive
                    ? "border-[#D7CEC2] bg-[#3A2B20] text-[#F3EBD7]"
                    : "border-transparent text-[#C8BBA9] hover:bg-[#302219] hover:text-[#F3EBD7]"
                }`}
              >
                <span>{item.label}</span>

                {isActive && (
                  <span className="text-xs text-[#D7CEC2]">—</span>
                )}
              </Link>
            );
          })}
        </nav>
      </div>

      {/* BOTTOM */}
      <div className="mt-auto border-t border-[#6E5A4B] p-4">
        <Link
          href="/landing"
          className="block px-4 py-3 font-kulim text-sm text-[#C8BBA9] transition-colors hover:text-[#F3EBD7]"
        >
          View Store
        </Link>

        <button
          type="button"
          onClick={handleLogout}
          className="mt-1 flex w-full items-center justify-between px-4 py-3 text-left font-kulim text-sm text-[#C8BBA9] transition-colors hover:bg-[#3A2B20] hover:text-[#F3EBD7]"
        >
          <span>Log Out</span>

          <svg
            viewBox="0 0 24 24"
            className="h-5 w-5"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
          >
            <path d="M10 17l5-5-5-5M15 12H3" />
            <path d="M12 3h8v18h-8" />
          </svg>
        </button>
      </div>
    </aside>
  );
}
