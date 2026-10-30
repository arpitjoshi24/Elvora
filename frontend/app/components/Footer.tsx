
import React from "react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#241A14] text-[#F3EBD7]">

      <div className="mx-auto max-w-[1500px] px-6 py-14 md:px-10">

        <div className="grid grid-cols-1 gap-12 border-b border-[#6E5A4B] pb-12 sm:grid-cols-2 lg:grid-cols-4">

          {/* BRAND */}
          <div className="lg:col-span-1">
            <Link href="/landing" className="inline-flex items-center gap-2">
              <img
                src="/images/Minimalist_Taupe_E-Swoosh_Logo-removebg-preview.png"
                alt=""
                className="h-9 w-9 object-contain"
              />
              <span className="font-kulim text-xl font-bold tracking-[3px]">
                ELVORA
              </span>
            </Link>

            <p className="mt-5 max-w-[260px] font-kulim text-sm leading-7 text-[#C8BBA9]">
              Thoughtfully selected styles for everyday living. Discover
              pieces that feel as good as they look.
            </p>
          </div>

          {/* SHOP */}
          <div>
            <h3 className="mb-5 font-kulim text-xs font-semibold tracking-[2px]">
              SHOP
            </h3>

            <div className="flex flex-col gap-3 font-kulim text-sm text-[#C8BBA9]">
              <Link href="/product_page" className="hover:text-[#F3EBD7]">
                Women
              </Link>
              <Link href="/product_page" className="hover:text-[#F3EBD7]">
                Men
              </Link>
              <Link href="/product_page" className="hover:text-[#F3EBD7]">
                Kids
              </Link>
              <Link href="/product_page" className="hover:text-[#F3EBD7]">
                New Arrivals
              </Link>
            </div>
          </div>

          {/* ACCOUNT */}
          <div>
            <h3 className="mb-5 font-kulim text-xs font-semibold tracking-[2px]">
              YOUR ACCOUNT
            </h3>

            <div className="flex flex-col gap-3 font-kulim text-sm text-[#C8BBA9]">
              <Link href="/profile" className="hover:text-[#F3EBD7]">
                My Account
              </Link>
              <Link href="/wish_list" className="hover:text-[#F3EBD7]">
                Wishlist
              </Link>
              <Link href="/cart" className="hover:text-[#F3EBD7]">
                Shopping Bag
              </Link>
              <Link href="/profile" className="hover:text-[#F3EBD7]">
                My Orders
              </Link>
            </div>
          </div>

          {/* HELP */}
          <div>
            <h3 className="mb-5 font-kulim text-xs font-semibold tracking-[2px]">
              CUSTOMER CARE
            </h3>

            <div className="flex flex-col gap-3 font-kulim text-sm text-[#C8BBA9]">
              <Link href="/profile" className="hover:text-[#F3EBD7]">
                Contact Us
              </Link>
              <Link href="/profile" className="hover:text-[#F3EBD7]">
                Shipping Information
              </Link>
              <Link href="/profile" className="hover:text-[#F3EBD7]">
                Returns & Exchanges
              </Link>
              <Link href="/profile" className="hover:text-[#F3EBD7]">
                FAQs
              </Link>
            </div>
          </div>
        </div>

        {/* BOTTOM */}
        <div className="flex flex-col gap-3 pt-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="font-kulim text-xs tracking-wide text-[#A99580]">
            © {new Date().getFullYear()} ELVORA. ALL RIGHTS RESERVED.
          </p>

          <p className="font-kulim text-xs tracking-[2px] text-[#A99580]">
            MADE FOR EVERYDAY ELEGANCE
          </p>
        </div>
      </div>
    </footer>
  );
}
