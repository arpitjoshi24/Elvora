
"use client";

import React, { useState } from "react";
import Link from "next/link";

const SearchIcon = () => (
  <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.6">
    <circle cx="10.8" cy="10.8" r="6.8" />
    <path d="m16 16 5 5" />
  </svg>
);

const HeartIcon = () => (
  <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.6">
    <path d="M20.8 8.8c0 5.1-8.8 10.2-8.8 10.2S3.2 13.9 3.2 8.8a4.5 4.5 0 0 1 8.8-1.3 4.5 4.5 0 0 1 8.8 1.3Z" />
  </svg>
);

const BagIcon = () => (
  <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.6">
    <path d="M4 8h16l-1 13H5L4 8Z" />
    <path d="M9 9V6a3 3 0 0 1 6 0v3" />
  </svg>
);

const UserIcon = () => (
  <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.6">
    <circle cx="12" cy="8" r="3.5" />
    <path d="M5 20c.5-3.5 3.1-5.5 7-5.5s6.5 2 7 5.5" />
  </svg>
);

export default function Header() {
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQ, setSearchQ] = useState("");
  const [mobileNav, setMobileNav] = useState(false);

  const navigation = [
    { label: "WOMEN", href: "/product_page" },
    { label: "MEN", href: "/product_page" },
    { label: "KIDS", href: "/product_page" },
    { label: "NEW ARRIVAL", href: "/product_page" },
  ];

  return (
    <header className="sticky top-0 z-40 border-b border-[#D7CEC2] bg-[#F3EBD7]">

      {/* MAIN HEADER */}
      <div className="mx-auto flex h-[76px] max-w-[1500px] items-center justify-between gap-5 px-5 md:px-10">

        {/* BRAND */}
        <Link href="/landing" className="flex shrink-0 items-center gap-2">
          <img
            src="/images/Minimalist_Taupe_E-Swoosh_Logo-removebg-preview.png"
            alt="Elvora"
            className="h-9 w-9 object-contain"
          />
          <span className="font-kulim text-xl font-bold tracking-[3px] text-[#6E4728]">
            ELVORA
          </span>
        </Link>

        {/* DESKTOP NAVIGATION */}
        <nav className="hidden items-center gap-8 lg:flex">
          {navigation.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="border-b border-transparent py-2 font-kulim text-[11px] tracking-[2px] text-[#6E5A4B] transition-colors hover:border-[#6E4728] hover:text-[#241A14]"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* ACTIONS */}
        <div className="flex shrink-0 items-center gap-4 sm:gap-6">

          {/* SEARCH */}
          <button
            type="button"
            onClick={() => setSearchOpen((prev) => !prev)}
            aria-label="Search products"
            aria-expanded={searchOpen}
            className="text-[#241A14] transition-colors hover:text-[#845F42]"
          >
            <SearchIcon />
          </button>

          {/* WISHLIST */}
          <Link
            href="/wish_list"
            aria-label="Wishlist"
            className="text-[#241A14] transition-colors hover:text-[#845F42]"
          >
            <HeartIcon />
          </Link>

          {/* CART */}
          <Link
            href="/cart"
            aria-label="Shopping bag"
            className="text-[#241A14] transition-colors hover:text-[#845F42]"
          >
            <BagIcon />
          </Link>

          {/* PROFILE */}
          <Link
            href="/profile"
            aria-label="My account"
            className="text-[#241A14] transition-colors hover:text-[#845F42]"
          >
            <UserIcon />
          </Link>

          {/* MOBILE MENU */}
          <button
            type="button"
            onClick={() => setMobileNav((prev) => !prev)}
            aria-label="Toggle navigation"
            aria-expanded={mobileNav}
            className="text-lg text-[#241A14] lg:hidden"
          >
            {mobileNav ? "✕" : "☰"}
          </button>
        </div>
      </div>

      {/* SEARCH DRAWER */}
      {searchOpen && (
        <div className="border-t border-[#D7CEC2] bg-[#F3EBD7] px-5 py-4 md:px-10">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              if (searchQ.trim()) {
                window.location.href = `/product_page?q=${encodeURIComponent(searchQ.trim())}`;
              }
            }}
            className="mx-auto flex max-w-[1500px] items-center gap-4"
          >
            <input
              autoFocus
              type="text"
              value={searchQ}
              onChange={(e) => setSearchQ(e.target.value)}
              placeholder="Search shirts, trousers, dresses..."
              className="min-w-0 flex-1 border-b border-[#845F42] bg-transparent py-2 font-kulim text-sm text-[#241A14] outline-none placeholder:text-[#A18D79]"
            />

            <button
              type="submit"
              className="font-kulim text-[11px] font-semibold tracking-[2px] text-[#6E4728] hover:text-[#241A14]"
            >
              SEARCH →
            </button>

            <button
              type="button"
              onClick={() => setSearchOpen(false)}
              aria-label="Close search"
              className="text-sm text-[#845F42] hover:text-[#241A14]"
            >
              ✕
            </button>
          </form>
        </div>
      )}

      {/* MOBILE NAVIGATION */}
      {mobileNav && (
        <nav className="border-t border-[#D7CEC2] bg-[#F3EBD7] px-6 py-5 lg:hidden">
          <div className="flex flex-col gap-5 font-kulim text-[11px] font-semibold tracking-[2px] text-[#6E4728]">
            {navigation.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                onClick={() => setMobileNav(false)}
                className="hover:text-[#241A14]"
              >
                {item.label}
              </Link>
            ))}
          </div>
        </nav>
      )}

    </header>
  );
}
