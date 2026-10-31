
import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function Page() {
  const products = [
    { id: 1, name: "Classic Casual Shirt", price: "$45", category: "Men", color: "Beige" },
    { id: 2, name: "Women's Summer Top", price: "$38", category: "Women", color: "Blue" },
    { id: 3, name: "Premium Denim Jacket", price: "$75", category: "Men", color: "Brown" },
    { id: 4, name: "Elegant Floral Dress", price: "$62", category: "Women", color: "Pink" },
    { id: 5, name: "Kids Casual Outfit", price: "$30", category: "Kids", color: "Yellow" },
    { id: 6, name: "Everyday Sneakers", price: "$55", category: "Men", color: "White" },
  ];

  return (
    <div className="min-h-screen bg-[#F4EFE6] text-[#4A2A02]">

      {/* Navbar */}
      <nav className="flex items-center justify-between px-8 md:px-12 h-16 border-b border-[#8A7356]/30">

        {/* Website Name + Logo */}
        <Link href="/" className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-[#8A7356] bg-black">
            <Image
              src="/images/logo.jpeg"
              alt="Elvora Logo"
              width={48}
              height={48}
              className="w-full h-full object-cover rounded-full"
              priority
            />
          </div>

          <span className="text-3xl font-serif font-bold tracking-wide text-[#4A2A02]">
            ELVORA
          </span>
        </Link>

        {/* Navigation Links */}
        <div className="flex items-center gap-10 text-sm font-semibold">
          <Link href="#" className="hover:text-[#8A7356]">WOMEN</Link>
          <Link href="#" className="hover:text-[#8A7356]">MEN</Link>
          <Link href="#" className="hover:text-[#8A7356]">KIDS</Link>
          <Link href="#" className="hover:text-[#8A7356]">NEW ARRIVALS</Link>
        </div>

        {/* Icons */}
        <div className="flex items-center gap-6 text-xl">
          <button aria-label="Search">⌕</button>
          <button aria-label="Wishlist">♡</button>
          <button aria-label="Home">⌂</button>
        </div>

      </nav>

      {/* Main Content */}
      <div className="flex flex-col lg:flex-row gap-8 px-6 md:px-10 py-10">

        {/* Left Sidebar */}
        <aside className="w-full lg:w-64 shrink-0 bg-white/70 p-6 rounded-sm h-fit">

          <h2 className="bg-[#8A7356] text-white text-center py-3 text-lg font-bold">
            Category
          </h2>

          <div className="flex flex-col gap-3 mt-5 text-lg font-semibold">
            <a href="#" className="hover:text-[#8A7356]">All</a>
            <a href="#" className="hover:text-[#8A7356]">Female</a>
            <a href="#" className="hover:text-[#8A7356]">Male</a>
            <a href="#" className="hover:text-[#8A7356]">Kids</a>
          </div>

          {/* Filters */}
          <h2 className="bg-[#8A7356] text-white text-center py-2 mt-8 font-bold text-lg">
            Filter By
          </h2>

          {/* Price */}
          <div className="mt-5">
            <h3 className="font-bold mb-3">Price</h3>

            {["$0 - $100", "$100 - $200", "$200 - $300", "$300 - $400", "Over $400"].map((price) => (
              <label key={price} className="flex items-center gap-3 mb-3 text-sm cursor-pointer">
                <input
                  type="checkbox"
                  className="accent-[#8A7356] w-4 h-4"
                />
                {price}
              </label>
            ))}
          </div>

          {/* Size */}
          <div className="mt-7">
            <h3 className="bg-[#8A7356] text-white px-3 py-2 font-bold">
              Size
            </h3>

            <div className="flex flex-wrap gap-2 mt-3">
              {["XS", "S", "M", "L", "XL", "XXL"].map((size) => (
                <button
                  key={size}
                  className="border border-[#8A7356] px-3 py-1 text-sm hover:bg-[#8A7356] hover:text-white"
                >
                  {size}
                </button>
              ))}
            </div>
          </div>

        </aside>

        {/* Products Section */}
        <main className="flex-1 min-w-0">

          {/* Tabs */}
          <div className="flex flex-wrap items-center justify-between gap-4 mb-8">

            <h2 className="text-2xl font-bold">
              Our Collection
            </h2>

            <div className="flex flex-wrap gap-5 text-sm font-semibold">
              <button className="border-b-2 border-[#8A7356] pb-2">
                New Arrival
              </button>

              <button className="hover:border-b-2 hover:border-[#8A7356] pb-2">
                Trendy
              </button>

              <button className="hover:border-b-2 hover:border-[#8A7356] pb-2">
                Popular
              </button>

              <button className="hover:border-b-2 hover:border-[#8A7356] pb-2">
                Recommended
              </button>
            </div>

          </div>

          {/* Product Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">

            {products.map((product) => (
              <div key={product.id} className="bg-white p-3 group">

                {/* Product Image */}
                <div className="h-64 bg-[#E5DED3] flex items-center justify-center relative overflow-hidden">

                  <span className="text-[#8A7356] text-sm">
                    Product Image
                  </span>

                  <button
                    aria-label="Add to wishlist"
                    className="absolute top-3 right-3 bg-white rounded-full w-9 h-9 text-xl hover:bg-[#8A7356] hover:text-white"
                  >
                    ♡
                  </button>

                  <span className="absolute top-3 left-3 bg-[#8A7356] text-white text-xs px-3 py-1">
                    NEW
                  </span>

                </div>

                {/* Product Details */}
                <div className="pt-4">

                  <p className="text-xs text-[#8A7356] mb-1">
                    {product.category}
                  </p>

                  <h3 className="font-bold text-lg">
                    {product.name}
                  </h3>

                  <p className="text-sm text-gray-500 mt-1">
                    Color: {product.color}
                  </p>

                  <div className="flex items-center justify-between mt-4">

                    <span className="text-xl font-bold">
                      {product.price}
                    </span>

                    <button className="bg-[#8A7356] text-white px-4 py-2 text-sm hover:bg-[#4A2A02] transition">
                      Add to Cart
                    </button>

                  </div>

                </div>

              </div>
            ))}

          </div>

        </main>

      </div>

      {/* Footer */}
      <footer className="bg-[#8A7356] text-[#F4EFE6] text-center py-6 mt-10">

        <p className="text-sm tracking-wider">
          © 2026 ELVORA. ALL RIGHTS RESERVED.
        </p>

      </footer>

    </div>
  );
}
