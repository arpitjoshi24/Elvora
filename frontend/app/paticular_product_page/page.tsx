"use client";

import React, { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function Page() {
  const [selectedSize, setSelectedSize] = useState("S");
  const [selectedColor, setSelectedColor] = useState("white");
  const [selectedImage, setSelectedImage] = useState(0);
  const [isWishlisted, setIsWishlisted] = useState(false);

  // Existing public image paths retained
  const productImages: Record<string, string[]> = {
    black: ["/images/product4.png"],
    white: ["/images/product5.png"],
    brown: ["/images/product6.png"],
  };

  const currentImages = productImages[selectedColor] || productImages.white;
  const mainImage = currentImages[selectedImage] || currentImages[0];

  const sizes = ["S", "M", "L", "XL"];

  const colors = [
    { name: "black", swatch: "bg-[#241A14]" },
    { name: "white", swatch: "bg-white" },
    { name: "brown", swatch: "bg-[#845F42]" },
  ];

  function handleColorChange(color: string) {
    setSelectedColor(color);
    setSelectedImage(0);
  }

  return (
    <div className="min-h-screen bg-[#F3EBD7] text-[#241A14]">
      {/* REUSABLE HEADER */}
      <Header />

      {/* PRODUCT SECTION */}
      <main className="mx-auto max-w-[1280px] px-5 py-7 sm:px-8 md:px-10 md:py-9">
        <section className="grid grid-cols-1 gap-8 md:grid-cols-[1fr_0.9fr] md:gap-10 lg:gap-14">
          {/* PRODUCT GALLERY */}
          <div>
            {/* MAIN IMAGE */}
            <div className="flex aspect-[4/4.5] max-h-[560px] w-full items-center justify-center bg-[#EDE5D8] p-8 sm:p-10">
              <img
                src={mainImage}
                alt={`Classic ${selectedColor} T-shirt`}
                className="h-full w-full object-contain"
              />
            </div>

            {/* THUMBNAILS */}
            <div className="mt-5 flex gap-3">
              {currentImages.map((image, index) => (
                <button
                  key={`${selectedColor}-${index}`}
                  type="button"
                  onClick={() => setSelectedImage(index)}
                  aria-label={`View product image ${index + 1}`}
                  className={`h-20 w-20 shrink-0 border p-1 transition-colors sm:h-24 sm:w-24 ${
                    selectedImage === index
                      ? "border-[#845F42]"
                      : "border-[#D7CEC2] hover:border-[#845F42]"
                  }`}
                >
                  <img
                    src={image}
                    alt={`Product view ${index + 1}`}
                    className="h-full w-full object-contain"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* PRODUCT INFORMATION */}
          <div className="pt-2 md:pt-4">
            <p className="mb-3 font-kulim text-xs font-semibold tracking-[3px] text-[#845F42]">
              ELVORA COLLECTION
            </p>

            <h1 className="font-kulim text-3xl font-semibold leading-tight tracking-wide text-[#241A14] sm:text-4xl">
              Classic{" "}
              {selectedColor.charAt(0).toUpperCase() + selectedColor.slice(1)}{" "}
              T-Shirt
            </h1>

            {/* RATING */}
            <div className="mt-4 flex flex-wrap items-center gap-3">
              <span className="text-lg tracking-[2px] text-[#845F42]">
                ★★★★★
              </span>

              <span className="font-kulim text-xs text-[#845F42]">
                4.5 (120 reviews)
              </span>
            </div>

            {/* PRICE */}
            <div className="mt-5 flex flex-wrap items-center gap-3">
              <p className="font-kulim text-2xl font-semibold text-[#845F42]">
                ₹1,299
              </p>

              <p className="font-kulim text-sm text-[#A99580] line-through">
                ₹1,799
              </p>

              <span className="font-kulim text-xs font-semibold text-[#6E4728]">
                28% OFF
              </span>
            </div>

            <p className="mt-2 font-kulim text-xs text-[#845F42]">
              Inclusive of all taxes
            </p>

            <div className="my-7 border-t border-[#D7CEC2]" />

            {/* SIZE SELECTION */}
            <div>
              <div className="flex items-center justify-between">
                <h3 className="font-kulim text-sm font-semibold">
                  Select Size
                </h3>

                <button
                  type="button"
                  onClick={() =>
                    alert(
                      "Please check the size chart before selecting your size.",
                    )
                  }
                  className="font-kulim text-xs text-[#845F42] underline underline-offset-4 hover:text-[#241A14]"
                >
                  Size Guide
                </button>
              </div>

              <div className="mt-4 flex gap-3">
                {sizes.map((size) => (
                  <button
                    key={size}
                    type="button"
                    onClick={() => setSelectedSize(size)}
                    className={`h-11 w-12 border font-kulim text-sm transition-colors ${
                      selectedSize === size
                        ? "border-[#241A14] bg-[#241A14] text-[#F3EBD7]"
                        : "border-[#D7CEC2] bg-[#FAF7F0] text-[#241A14] hover:border-[#845F42]"
                    }`}
                  >
                    {size}
                  </button>
                ))}
              </div>

              <p className="mt-2 font-kulim text-xs text-[#845F42]">
                Selected size: {selectedSize}
              </p>
            </div>

            {/* COLOR SELECTION */}
            <div className="mt-7">
              <h3 className="font-kulim text-sm font-semibold">Select Color</h3>

              <div className="mt-4 flex gap-4">
                {colors.map((color) => (
                  <button
                    key={color.name}
                    type="button"
                    aria-label={color.name}
                    title={color.name}
                    onClick={() => handleColorChange(color.name)}
                    className={`h-9 w-9 rounded-full border ${color.swatch} ${
                      selectedColor === color.name
                        ? "border-[#845F42] ring-2 ring-[#D7CEC2] ring-offset-2 ring-offset-[#F3EBD7]"
                        : "border-[#D7CEC2]"
                    }`}
                  />
                ))}
              </div>

              <p className="mt-3 font-kulim text-xs text-[#845F42]">
                Selected color: {selectedColor}
              </p>
            </div>

            {/* ACTION BUTTONS */}
            <div className="mt-8 flex gap-3">
              <button
                type="button"
                onClick={() =>
                  alert(
                    `Added to cart: ${selectedColor} T-shirt, Size ${selectedSize}`,
                  )
                }
                className="flex-1 bg-[#241A14] py-4 font-kulim text-xs font-semibold tracking-[1.5px] text-[#F3EBD7] transition-colors hover:bg-[#6E4728]"
              >
                ADD TO CART
              </button>

              <button
                type="button"
                onClick={() =>
                  alert(
                    `Selected: ${selectedColor} T-shirt, Size ${selectedSize}`,
                  )
                }
                className="flex-1 border border-[#241A14] bg-transparent py-4 font-kulim text-xs font-semibold tracking-[1.5px] text-[#241A14] transition-colors hover:bg-[#EDE5D8]"
              >
                BUY NOW
              </button>

              <button
                type="button"
                onClick={() => setIsWishlisted(!isWishlisted)}
                aria-label="Toggle wishlist"
                className={`flex h-[52px] w-[52px] shrink-0 items-center justify-center border border-[#D7CEC2] text-xl transition-colors ${
                  isWishlisted
                    ? "bg-[#845F42] text-[#F3EBD7]"
                    : "bg-[#FAF7F0] text-[#241A14] hover:border-[#845F42]"
                }`}
              >
                {isWishlisted ? "♥" : "♡"}
              </button>
            </div>

            {/* DELIVERY INFORMATION */}
            <div className="mt-7 border-y border-[#D7CEC2] py-5">
              <h3 className="font-kulim text-sm font-semibold">
                Delivery & Returns
              </h3>

              <p className="mt-2 font-kulim text-sm leading-6 text-[#845F42]">
                Free delivery on eligible orders.
              </p>

              <p className="font-kulim text-sm leading-6 text-[#845F42]">
                Easy returns according to our return policy.
              </p>
            </div>

            {/* PRODUCT DETAILS */}
            <div className="mt-7">
              <h3 className="font-kulim text-base font-semibold">
                Product Details
              </h3>

              <ul className="mt-4 space-y-2 font-kulim text-sm leading-6 text-[#845F42]">
                <li>100% cotton, soft and breathable fabric</li>
                <li>Comfortable fit for everyday wear</li>
                <li>Machine washable</li>
                <li>Available in multiple sizes</li>
                <li>Designed for effortless everyday style</li>
              </ul>
            </div>
          </div>
        </section>

        {/* CUSTOMER REVIEWS */}
        <section className="mt-20 border-t border-[#D7CEC2] pt-10">
          <div className="mb-7 flex items-center justify-between">
            <h2 className="font-kulim text-xl font-semibold tracking-wide">
              Customer Reviews
            </h2>

            <span className="font-kulim text-xs text-[#845F42]">4.5 / 5</span>
          </div>

          <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
            {[
              {
                name: "Priya S.",
                review:
                  "The fabric is soft, and the fit is perfect for daily wear.",
                rating: "★★★★★",
              },
              {
                name: "Ananya R.",
                review: "Simple, elegant, and comfortable. I love the quality.",
                rating: "★★★★★",
              },
              {
                name: "Meera K.",
                review:
                  "A great basic T-shirt that goes with almost everything.",
                rating: "★★★★☆",
              },
            ].map((review) => (
              <div
                key={review.name}
                className="border border-[#D7CEC2] bg-[#FAF7F0] p-6"
              >
                <p className="tracking-[2px] text-[#845F42]">{review.rating}</p>

                <p className="mt-4 font-kulim text-sm leading-6 text-[#6E4728]">
                  "{review.review}"
                </p>

                <p className="mt-5 font-kulim text-xs font-semibold tracking-wide text-[#241A14]">
                  {review.name}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* RECOMMENDED PRODUCTS */}
        <section className="mt-20 border-t border-[#D7CEC2] pt-10">
          <h2 className="mb-7 font-kulim text-xl font-semibold tracking-wide">
            You May Also Like
          </h2>

          <div className="grid grid-cols-2 gap-4 sm:grid-cols-2 md:grid-cols-4 md:gap-6">
            {[
              {
                name: "Relaxed Brown Look",
                price: "₹1,499",
                image: "/images/product.jpeg",
              },
              {
                name: "Striped Summer Shirt",
                price: "₹1,199",
                image: "/images/product3.png",
              },
              {
                name: "Everyday Black Tee",
                price: "₹1,599",
                image: "/images/product4.png",
              },
              {
                name: "Classic Brown Sweatshirt",
                price: "₹1,299",
                image: "/images/product6.png",
              },
            ].map((product) => (
              <div key={product.name} className="group cursor-pointer">
                <div className="aspect-[4/5] overflow-hidden bg-[#EDE5D8]">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                  />
                </div>

                <h3 className="mt-3 font-kulim text-sm font-semibold text-[#241A14]">
                  {product.name}
                </h3>

                <p className="mt-1 font-kulim text-sm font-semibold text-[#845F42]">
                  {product.price}
                </p>
              </div>
            ))}
          </div>
        </section>
      </main>

      {/* REUSABLE FOOTER */}
      <Footer />
    </div>
  );
}
