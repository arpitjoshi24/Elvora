
"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";


export default function WishlistPage() {

  const initialItems = [
    {
      id: 1,
      name: "The Column Dress",
      color: "Emerald",
      price: 420,
      sizes: ["XS", "S", "M", "L"],
      image: "",
      fallback: "from-emerald-700 to-emerald-500",
    },
    {
      id: 2,
      name: "Structured Blazer",
      color: "Powder blue",
      price: 540,
      sizes: ["XS", "S", "M", "L"],
      image: "",
      fallback: "from-sky-200 to-sky-400",
    },
    {
      id: 3,
      name: "Leather Loafer",
      color: "Sable",
      price: 420,
      sizes: ["36", "37", "38", "39"],
      image: "",
      fallback: "from-[#CDB79A] to-[#8C7355]",
    },
    {
      id: 4,
      name: "Silk Scarf",
      color: "Rose",
      price: 120,
      sizes: ["S", "M", "L"],
      image: "",
      fallback: "from-rose-200 to-rose-300",
    },
  ];

  const [items, setItems] = useState(initialItems);
  const [sizes, setSizes] = useState<Record<number, string>>({});

  // Remove Product
  const remove = (id: number) => {
    setItems((prev) => prev.filter((item) => item.id !== id));
  };

  const count = items.length;
  const countLabel = count === 1 ? "1 item" : `${count} items`;

  return (
    <div className="min-h-screen bg-white text-[#1A1714] antialiased">

      {/* Main Content */}
      <main className="mx-auto max-w-6xl px-6 pb-24 pt-8">

        {/* Breadcrumb */}
        <nav
          className="text-xs text-[#1A1714]/50"
          aria-label="Breadcrumb"
        >

          <Link href="/product_page" className="hover:text-[#8C7355]">
            Home
          </Link>

          {" / "}

          <span className="text-[#1A1714]">
            Wishlist
          </span>

        </nav>

        {/* Wishlist Heading */}
        <div className="mt-3 flex items-end justify-between border-b border-[#CDB79A]/40 pb-5">

          <h1 className={`font-serif text-5xl font-semibold`}>
            Your Wishlist
          </h1>

          <p className="text-sm text-[#1A1714]/50">
            {countLabel}
          </p>

        </div>

        {/* Wishlist Products */}
        {count > 0 ? (

          <>

            <ul className="mt-8 grid grid-cols-2 gap-x-5 gap-y-10 lg:grid-cols-4">

              {items.map((item) => (

                <li key={item.id}>

                  {/* Product Image */}
                  <div className={`relative aspect-[3/4] overflow-hidden bg-gradient-to-br ${item.fallback}`}>

                    {item.image && (

                      <Image
                        src={item.image}
                        alt={item.name}
                        fill
                        className="object-cover"
                        sizes="(min-width: 1024px) 25vw, 50vw"
                      />

                    )}

                    {/* Remove Wishlist Button */}
                    <button
                      onClick={() => remove(item.id)}
                      aria-label={`Remove ${item.name} from wishlist`}
                      className="absolute right-3 top-3 grid h-9 w-9 place-items-center rounded-full bg-white/90 text-[#8C7355] shadow-sm transition hover:bg-white focus:outline-none focus-visible:ring-2 focus-visible:ring-[#8C7355]"
                    >

                      <svg
                        viewBox="0 0 24 24"
                        className="h-5 w-5 fill-current"
                        aria-hidden="true"
                      >

                        <path d="M12 21s-7.5-4.6-9.6-9.2C.8 8.2 3 4.5 6.7 4.5c2 0 3.5 1 5.3 3 1.8-2 3.3-3 5.3-3 3.7 0 5.9 3.7 4.3 7.3C19.5 16.4 12 21 12 21z" />

                      </svg>

                    </button>

                  </div>

                  {/* Product Details */}
                  <div className="mt-3">

                    <h2 className={`font-serif text-xl font-semibold leading-tight`}>
                      {item.name}
                    </h2>

                    <p className="text-xs text-[#1A1714]/50">
                      Color: {item.color}
                    </p>

                    <p className="mt-1 text-sm font-medium">
                      ${item.price.toFixed(2)}
                    </p>

                    {/* Size Selection */}
                    <div className="mt-3">

                      <label
                        htmlFor={`size-${item.id}`}
                        className="sr-only"
                      >
                        Select Size
                      </label>

                      <select
                        id={`size-${item.id}`}
                        value={sizes[item.id] || ""}
                        onChange={(e) =>
                          setSizes((prev) => ({
                            ...prev,
                            [item.id]: e.target.value,
                          }))
                        }
                        className="w-full border border-[#CDB79A]/60 bg-white px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#8C7355]"
                      >

                        <option value="">
                          Select size
                        </option>

                        {item.sizes.map((size) => (

                          <option key={size} value={size}>
                            {size}
                          </option>

                        ))}

                      </select>

                    </div>

                    {/* Move to Bag Button */}
                    <button
                      disabled={!sizes[item.id]}
                      onClick={() => remove(item.id)}
                      className="mt-2 w-full bg-[#1A1714] py-2.5 text-xs font-medium tracking-wide text-white transition hover:bg-[#8C7355] disabled:cursor-not-allowed disabled:opacity-40 disabled:hover:bg-[#1A1714]"
                    >
                      Move to bag
                    </button>

                  </div>

                </li>

              ))}

            </ul>

            {/* Continue Shopping */}
            <Link
              href="/product_page"
              className="mt-12 inline-block text-xs text-[#1A1714]/60 hover:text-[#8C7355]"
            >
              ← Continue shopping
            </Link>

          </>

        ) : (

          /* Empty Wishlist */
          <div className="py-24 text-center">

            <Image
              src="/images/logo.jpeg"
              alt="Elvora Logo"
              width={64}
              height={64}
              className="mx-auto h-16 w-16 rounded-full object-cover opacity-80"
            />

            <h2 className={`font-serif mt-4 text-3xl font-semibold`}>
              Your wishlist is empty
            </h2>

            <p className="mt-2 text-sm text-[#1A1714]/60">
              Tap the heart on any product to save it here.
            </p>

            <Link
              href="/product_page"
              className="mt-6 inline-block bg-[#1A1714] px-8 py-3 text-xs font-medium tracking-wide text-white transition hover:bg-[#8C7355]"
            >
              Browse new arrivals
            </Link>

          </div>

        )}

      </main>

    </div>
  );
}
