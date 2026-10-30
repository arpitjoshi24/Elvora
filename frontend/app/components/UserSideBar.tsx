
import React from "react";

export type UserSection = "account" | "wishlist" | "orders";

interface UserSideBarProps {
  activeSection: UserSection;
  onSectionChange: (section: UserSection) => void;
  onLogout?: () => void;
}

export default function UserSideBar({
  activeSection,
  onSectionChange,
  onLogout,
}: UserSideBarProps) {
  const navItems: { id: UserSection; label: string }[] = [
    { id: "account", label: "Account Details" },
    { id: "wishlist", label: "Wishlist" },
    { id: "orders", label: "My Orders" },
  ];

  return (
    <aside className="w-full">

      {/* PROFILE INTRO */}
      <div className="border border-[#D7CEC2] bg-[#EDE5D8] px-5 py-6">
        <p className="font-kulim text-[10px] tracking-[2px] text-[#845F42]">
          MY ELVORA
        </p>

        <h2 className="mt-2 font-kulim text-xl font-semibold text-[#241A14]">
          My Account
        </h2>

        <p className="mt-1 font-kulim text-xs text-[#845F42]">
          Manage your personal details
        </p>
      </div>

      {/* NAVIGATION */}
      <nav className="mt-5 border-y border-[#D7CEC2]">
        {navItems.map((item, index) => {
          const isActive = activeSection === item.id;

          return (
            <button
              key={item.id}
              type="button"
              onClick={() => onSectionChange(item.id)}
              aria-current={isActive ? "page" : undefined}
              className={`flex w-full items-center justify-between border-b border-[#D7CEC2] px-5 py-5 text-left font-kulim text-sm transition-colors last:border-0 ${
                isActive
                  ? "bg-[#241A14] text-[#F3EBD7]"
                  : "bg-transparent text-[#6E4728] hover:bg-[#EDE5D8]"
              }`}
            >
              <span>{item.label}</span>

              <span className="text-lg leading-none">
                {isActive ? "—" : "›"}
              </span>
            </button>
          );
        })}
      </nav>

      {/* LOGOUT */}
      <button
        type="button"
        onClick={onLogout}
        disabled={!onLogout}
        className="mt-5 flex w-full items-center justify-between border border-[#845F42] px-5 py-4 font-kulim text-sm text-[#6E4728] transition-colors hover:bg-[#241A14] hover:text-[#F3EBD7] disabled:cursor-not-allowed disabled:opacity-50"
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
    </aside>
  );
}
