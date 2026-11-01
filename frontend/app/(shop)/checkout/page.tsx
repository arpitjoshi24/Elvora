"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function Page() {
  const [products, setProducts] = useState([
    {
      id: 1,
      name: "Classic Casual Shirt",
      category: "Men",
      color: "Beige",
      size: "M",
      price: 1499,
      quantity: 1,
    },
    {
      id: 2,
      name: "Women's Summer Top",
      category: "Women",
      color: "Blue",
      size: "S",
      price: 1199,
      quantity: 1,
    },
    {
      id: 3,
      name: "Premium Denim Jacket",
      category: "Men",
      color: "Brown",
      size: "L",
      price: 2499,
      quantity: 1,
    },
  ]);

  // Indian Currency Formatter
  const formatPrice = (price: number) => {
    return new Intl.NumberFormat("en-IN", {
      style: "currency",
      currency: "INR",
      minimumFractionDigits: 2,
    }).format(price);
  };

  // Increase Quantity
  const increaseQuantity = (id: number) => {
    setProducts(
      products.map((product) =>
        product.id === id
          ? { ...product, quantity: product.quantity + 1 }
          : product
      )
    );
  };

  // Decrease Quantity
  const decreaseQuantity = (id: number) => {
    setProducts(
      products.map((product) =>
        product.id === id
          ? { ...product, quantity: Math.max(1, product.quantity - 1) }
          : product
      )
    );
  };

  // Remove Product
  const removeProduct = (id: number) => {
    setProducts(products.filter((product) => product.id !== id));
  };

  // Price Calculations
  const subtotal = products.reduce(
    (total, product) => total + product.price * product.quantity,
    0
  );

  const tax = subtotal * 0.08;
  const total = subtotal + tax;

  return (
    <div className="min-h-screen bg-[#F4EFE6] text-[#4A2A02]">

      {/* Main Content */}
      <main className="px-6 md:px-12 py-10">

        {/* Page Heading */}
        <div className="flex justify-between items-end mb-10">

          <div>
            <p className="text-sm text-[#8A7356] mb-2">
              Home / Cart
            </p>

            <h1 className="text-4xl font-serif font-bold">
              Your Cart
            </h1>

            <p className="text-sm text-[#8A7356] mt-2">
              {products.length} Items
            </p>
          </div>

          {/* Continue Shopping */}
          <Link
            href="/product_page"
            className="text-sm font-semibold hover:text-[#8A7356] transition"
          >
            ← Continue Shopping
          </Link>

        </div>

        {/* Cart Layout */}
        <div className="flex flex-col lg:flex-row gap-8">

          {/* LEFT SECTION - PRODUCTS */}
          <div className="w-full lg:w-2/3">

            <div className="flex justify-between items-center border-b border-[#8A7356]/30 pb-4 mb-5">

              <h2 className="text-xl font-bold">
                Shopping Bag
              </h2>

              <p className="text-sm text-[#8A7356]">
                {products.length} Products
              </p>

            </div>

            {/* Product Cards */}
            <div className="flex flex-col gap-5">

              {products.map((product) => (
                <div
                  key={product.id}
                  className="bg-white p-4 border border-[#8A7356]/20 flex flex-col sm:flex-row items-center gap-5"
                >

                  {/* Product Image */}
                  <div className="w-32 h-32 bg-[#E5DED3] flex items-center justify-center shrink-0">

                    <span className="text-xs text-[#8A7356]">
                      Product Image
                    </span>

                  </div>

                  {/* Product Details */}
                  <div className="flex-1 text-center sm:text-left">

                    <p className="text-xs text-[#8A7356] mb-1">
                      {product.category}
                    </p>

                    <h3 className="text-lg font-bold">
                      {product.name}
                    </h3>

                    <p className="text-sm text-gray-500 mt-2">
                      Color: {product.color} | Size: {product.size}
                    </p>

                    <button
                      onClick={() => removeProduct(product.id)}
                      className="text-xs text-[#8A7356] underline mt-3 hover:text-red-600"
                    >
                      Remove
                    </button>

                  </div>

                  {/* Quantity */}
                  <div className="flex items-center border border-[#8A7356]/30">

                    <button
                      onClick={() => decreaseQuantity(product.id)}
                      className="px-3 py-2 hover:bg-[#F4EFE6]"
                    >
                      -
                    </button>

                    <span className="px-3 text-sm">
                      {product.quantity}
                    </span>

                    <button
                      onClick={() => increaseQuantity(product.id)}
                      className="px-3 py-2 hover:bg-[#F4EFE6]"
                    >
                      +
                    </button>

                  </div>

                  {/* Price */}
                  <div className="font-bold text-lg w-28 text-center sm:text-right">
                    {formatPrice(product.price * product.quantity)}
                  </div>

                </div>
              ))}

              {/* Empty Cart */}
              {products.length === 0 && (
                <div className="bg-white p-10 text-center">

                  <h2 className="text-xl font-bold">
                    Your cart is empty
                  </h2>

                  <Link
                    href="/product_page"
                    className="text-[#8A7356] underline mt-3 inline-block"
                  >
                    Continue Shopping
                  </Link>

                </div>
              )}

            </div>

          </div>

          {/* RIGHT SECTION - ORDER SUMMARY */}
          <div className="w-full lg:w-1/3">

            <div className="bg-white p-7 border border-[#8A7356]/20">

              <h2 className="text-xl font-bold mb-7">
                Order Summary
              </h2>

              {/* Subtotal */}
              <div className="flex justify-between mb-5 text-sm">

                <span className="text-gray-600">
                  Subtotal
                </span>

                <span className="font-semibold">
                  {formatPrice(subtotal)}
                </span>

              </div>

              {/* Shipping */}
              <div className="flex justify-between mb-5 text-sm">

                <span className="text-gray-600">
                  Shipping
                </span>

                <span className="text-[#8A7356]">
                  Calculated at checkout
                </span>

              </div>

              {/* Tax */}
              <div className="flex justify-between mb-5 text-sm">

                <span className="text-gray-600">
                  Estimated Tax (8%)
                </span>

                <span className="font-semibold">
                  {formatPrice(tax)}
                </span>

              </div>

              <div className="border-t border-[#8A7356]/30 my-6"></div>

              {/* Total */}
              <div className="flex justify-between text-lg font-bold mb-7">

                <span>Total</span>

                <span>
                  {formatPrice(total)}
                </span>

              </div>

              {/* Promo Code */}
              <div className="mb-7">

                <p className="text-sm font-semibold mb-3">
                  Promo Code
                </p>

                <div className="flex gap-2">

                  <input
                    type="text"
                    placeholder="Enter promo code"
                    className="w-full min-w-0 border border-[#8A7356]/40 px-3 py-3 text-sm outline-none focus:border-[#8A7356]"
                  />

                  <button className="border border-[#8A7356] px-5 text-sm font-semibold hover:bg-[#8A7356] hover:text-white transition">
                    Apply
                  </button>

                </div>

              </div>

              {/* Checkout Button */}
              <button
                disabled={products.length === 0}
                className="w-full bg-[#4A2A02] text-white py-4 text-sm font-semibold tracking-wider hover:bg-[#8A7356] transition disabled:opacity-50"
              >
                PROCEED TO CHECKOUT
              </button>

            </div>

            {/* Additional Information */}
            <div className="mt-6 flex flex-col gap-3 text-sm text-[#8A7356]">

              <p>✓ Free returns within 30 days</p>
              <p>✓ Secure checkout, encrypted end to end</p>
              <p>✓ Premium quality products</p>

            </div>

          </div>

        </div>

      </main>

    </div>
  );
}

