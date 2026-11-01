"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import AdminSideBar from "../components/AdminSideBar";

type Product = {
  id: number;
  name: string;
  category: string;
  price: number;
  originalPrice: number;
  rating: number;
  stock: number;
  image: string;
};

const initialProducts: Product[] = [
  {
    id: 1001,
    name: "Classic White T-Shirt",
    category: "Men",
    price: 1299,
    originalPrice: 1799,
    rating: 4.5,
    stock: 24,
    image: "/images/product.jpeg",
  },
  {
    id: 1002,
    name: "Minimal Comfort Tee",
    category: "Women",
    price: 1199,
    originalPrice: 1599,
    rating: 4.8,
    stock: 18,
    image: "/images/product3.png",
  },
  {
    id: 1003,
    name: "Premium Basic Tee",
    category: "Women",
    price: 1599,
    originalPrice: 1999,
    rating: 4.6,
    stock: 12,
    image: "/images/product4.png",
  },
  {
    id: 1004,
    name: "Everyday Essential",
    category: "Men",
    price: 1499,
    originalPrice: 1899,
    rating: 4.3,
    stock: 30,
    image: "/images/product5.png",
  },
  {
    id: 1005,
    name: "Classic Casual Shirt",
    category: "Men",
    price: 999,
    originalPrice: 1399,
    rating: 4.2,
    stock: 8,
    image: "/images/product6.png",
  },
  {
    id: 1006,
    name: "Premium Collection",
    category: "Women",
    price: 1799,
    originalPrice: 2199,
    rating: 4.7,
    stock: 15,
    image: "/images/download(25).jpg",
  },
];

export default function AdminProducts() {
  const [products, setProducts] = useState(initialProducts);
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  const [isAddProductOpen, setIsAddProductOpen] = useState(false);

  const [newProduct, setNewProduct] = useState({
    name: "",
    category: "Men",
    price: "",
    originalPrice: "",
    stock: "",
    rating: "4.5",
    image: "",
  });

  const filteredProducts = useMemo(() => {
    return products.filter((product) => {
      const matchesSearch =
        product.name.toLowerCase().includes(search.toLowerCase()) ||
        product.id.toString().includes(search);

      const matchesCategory =
        category === "All" || product.category === category;

      return matchesSearch && matchesCategory;
    });
  }, [products, search, category]);

  const deleteProduct = (id: number) => {
    setProducts((current) => current.filter((product) => product.id !== id));
  };
  const handleAddProduct = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const product: Product = {
      id: Date.now(),
      name: newProduct.name.trim(),
      category: newProduct.category,
      price: Number(newProduct.price),
      originalPrice: Number(newProduct.originalPrice),
      stock: Number(newProduct.stock),
      rating: Number(newProduct.rating),
      image: newProduct.image.trim(),
    };

    setProducts((prev) => [product, ...prev]);

    setNewProduct({
      name: "",
      category: "Men",
      price: "",
      originalPrice: "",
      stock: "",
      rating: "4.5",
      image: "",
    });

    setIsAddProductOpen(false);
  };

  return (
    <div className="grid min-h-screen grid-cols-1 bg-[#F3EBD7] text-[#241A14] md:grid-cols-[240px_minmax(0,1fr)]">
      {/* EXISTING SIDEBAR COMPONENT */}
      <AdminSideBar />

      {/* MAIN CONTENT */}
      <main className="min-w-0 px-5 py-8 md:px-10 md:py-10">
        {/* PAGE HEADER */}
        <div className="mb-9 flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
          <div>
            <p className="mb-2 font-kulim text-xs font-semibold tracking-[3px] text-[#845F42]">
              ELVORA / ADMIN
            </p>

            <h1 className="font-kulim text-3xl font-semibold tracking-wide md:text-4xl">
              Manage Products
            </h1>

            <p className="mt-2 font-kulim text-sm text-[#845F42]">
              Manage your product catalogue and inventory.
            </p>
          </div>

          <button
            type="button"
            onClick={() => setIsAddProductOpen(true)}
            className="w-fit bg-[#241A14] px-6 py-3 font-kulim text-sm font-semibold text-[#F3EBD7] transition-colors hover:bg-[#6E4728]"
          >
            + Add Product
          </button>
        </div>

        {/* OVERVIEW CARDS */}
        <div className="mb-8 grid grid-cols-1 gap-5 sm:grid-cols-3">
          <div className="border border-[#D7CEC2] bg-[#FAF7F0] p-5">
            <p className="font-kulim text-sm text-[#845F42]">Total Products</p>
            <h2 className="mt-2 font-kulim text-3xl font-semibold">
              {products.length}
            </h2>
          </div>

          <div className="border border-[#D7CEC2] bg-[#FAF7F0] p-5">
            <p className="font-kulim text-sm text-[#845F42]">
              Total Categories
            </p>
            <h2 className="mt-2 font-kulim text-3xl font-semibold">
              {new Set(products.map((product) => product.category)).size}
            </h2>
          </div>

          <div className="border border-[#D7CEC2] bg-[#FAF7F0] p-5">
            <p className="font-kulim text-sm text-[#845F42]">Total Stock</p>
            <h2 className="mt-2 font-kulim text-3xl font-semibold">
              {products.reduce((total, product) => total + product.stock, 0)}
            </h2>
          </div>
        </div>

        {/* SEARCH AND FILTER */}
        <section className="mb-7 flex flex-col gap-4 border border-[#D7CEC2] bg-[#FAF7F0] p-5 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h2 className="font-kulim text-lg font-semibold">
              Product Catalogue
            </h2>
            <p className="mt-1 font-kulim text-xs text-[#845F42]">
              Browse and manage your listed products.
            </p>
          </div>

          <div className="flex flex-col gap-3 sm:flex-row">
            <input
              type="search"
              placeholder="Search products..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full border border-[#D7CEC2] bg-[#F3EBD7] px-4 py-3 font-kulim text-sm outline-none placeholder:text-[#A99580] focus:border-[#845F42] sm:w-56"
            />

            <select
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="border border-[#D7CEC2] bg-[#F3EBD7] px-4 py-3 font-kulim text-sm outline-none focus:border-[#845F42]"
            >
              <option value="All">All Categories</option>
              <option value="Men">Men</option>
              <option value="Women">Women</option>
              <option value="Kids">Kids</option>
            </select>
          </div>
        </section>

        {/* PRODUCT GRID */}
        <section>
          <div className="mb-5 flex items-center justify-between">
            <h2 className="font-kulim text-lg font-semibold">All Products</h2>

            <p className="font-kulim text-xs text-[#845F42]">
              Showing {filteredProducts.length} products
            </p>
          </div>

          {filteredProducts.length > 0 ? (
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-3">
              {filteredProducts.map((product) => (
                <article
                  key={product.id}
                  className="group overflow-hidden border border-[#D7CEC2] bg-[#FAF7F0] transition-colors hover:border-[#845F42]"
                >
                  {/* PRODUCT IMAGE */}
                  <div className="relative flex h-[260px] items-center justify-center overflow-hidden bg-[#EDE5D8] p-5">
                    <Image
                      src={product.image}
                      alt={product.name}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1280px) 50vw, 33vw"
                      className="object-contain p-4 transition-transform duration-500 group-hover:scale-[1.04]"
                    />

                    <span className="absolute left-4 top-4 bg-[#241A14] px-3 py-1 font-kulim text-[10px] tracking-wider text-[#F3EBD7]">
                      {product.category.toUpperCase()}
                    </span>
                  </div>

                  {/* PRODUCT INFORMATION */}
                  <div className="p-5">
                    <div className="flex items-start justify-between gap-3">
                      <div>
                        <h3 className="font-kulim text-base font-semibold">
                          {product.name}
                        </h3>

                        <p className="mt-1 font-kulim text-xs text-[#A99580]">
                          ID: #{product.id}
                        </p>
                      </div>

                      <div className="text-right">
                        <p className="font-kulim text-base font-semibold text-[#6E4728]">
                          ₹{product.price.toLocaleString("en-IN")}
                        </p>
                        <p className="font-kulim text-xs text-[#A99580] line-through">
                          ₹{product.originalPrice.toLocaleString("en-IN")}
                        </p>
                      </div>
                    </div>

                    {/* RATING AND STOCK */}
                    <div className="mt-4 flex items-center justify-between border-t border-[#E5DDD1] pt-4">
                      <p className="font-kulim text-sm tracking-wider text-[#845F42]">
                        {"★".repeat(Math.floor(product.rating))}
                        <span className="ml-1 text-[#241A14]">
                          {product.rating}
                        </span>
                      </p>

                      <p className="font-kulim text-xs text-[#845F42]">
                        Stock:{" "}
                        <span
                          className={
                            product.stock < 10
                              ? "font-semibold text-[#A34D35]"
                              : "font-semibold text-[#241A14]"
                          }
                        >
                          {product.stock}
                        </span>
                      </p>
                    </div>

                    {/* ACTIONS */}
                    <div className="mt-5 flex gap-3">
                      <button
                        type="button"
                        onClick={() => setSelectedProduct(product)}
                        className="flex-1 bg-[#241A14] py-2.5 font-kulim text-xs font-semibold tracking-wide text-[#F3EBD7] transition-colors hover:bg-[#6E4728]"
                      >
                        Update
                      </button>

                      <button
                        type="button"
                        onClick={() => {
                          if (window.confirm(`Delete ${product.name}?`)) {
                            deleteProduct(product.id);
                          }
                        }}
                        className="border border-[#D7CEC2] px-4 py-2.5 font-kulim text-xs text-[#845F42] transition-colors hover:border-[#A34D35] hover:text-[#A34D35]"
                      >
                        Delete
                      </button>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          ) : (
            <div className="border border-[#D7CEC2] bg-[#FAF7F0] py-16 text-center">
              <p className="font-kulim text-sm text-[#845F42]">
                No products found.
              </p>
            </div>
          )}
        </section>

        {/* ADD PRODUCT MODAL */}
        {isAddProductOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-[#241A14]/60 p-5">
            <div className="max-h-[90vh] w-full max-w-xl overflow-y-auto border border-[#D7CEC2] bg-[#FAF7F0] p-7">
              <p className="font-kulim text-xs font-semibold tracking-[3px] text-[#845F42]">
                PRODUCT MANAGEMENT
              </p>

              <h2 className="mt-2 font-kulim text-2xl font-semibold">
                Add New Product
              </h2>

              <form onSubmit={handleAddProduct} className="mt-6 space-y-4">
                <div>
                  <label className="mb-2 block font-kulim text-xs text-[#6E4728]">
                    PRODUCT NAME
                  </label>
                  <input
                    required
                    type="text"
                    value={newProduct.name}
                    onChange={(e) =>
                      setNewProduct({ ...newProduct, name: e.target.value })
                    }
                    placeholder="Enter product name"
                    className="w-full border border-[#D7CEC2] bg-[#F3EBD7] px-4 py-3 font-kulim text-sm outline-none focus:border-[#845F42]"
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="mb-2 block font-kulim text-xs text-[#6E4728]">
                      CATEGORY
                    </label>
                    <select
                      value={newProduct.category}
                      onChange={(e) =>
                        setNewProduct({
                          ...newProduct,
                          category: e.target.value,
                        })
                      }
                      className="w-full border border-[#D7CEC2] bg-[#F3EBD7] px-3 py-3 font-kulim text-sm outline-none"
                    >
                      <option value="Men">Men</option>
                      <option value="Women">Women</option>
                      <option value="Kids">Kids</option>
                    </select>
                  </div>

                  <div>
                    <label className="mb-2 block font-kulim text-xs text-[#6E4728]">
                      STOCK QUANTITY
                    </label>
                    <input
                      required
                      min="0"
                      type="number"
                      value={newProduct.stock}
                      onChange={(e) =>
                        setNewProduct({ ...newProduct, stock: e.target.value })
                      }
                      className="w-full border border-[#D7CEC2] bg-[#F3EBD7] px-3 py-3 font-kulim text-sm outline-none"
                    />
                  </div>

                  <div>
                    <label className="mb-2 block font-kulim text-xs text-[#6E4728]">
                      SELLING PRICE (₹)
                    </label>
                    <input
                      required
                      min="1"
                      type="number"
                      value={newProduct.price}
                      onChange={(e) =>
                        setNewProduct({ ...newProduct, price: e.target.value })
                      }
                      className="w-full border border-[#D7CEC2] bg-[#F3EBD7] px-3 py-3 font-kulim text-sm outline-none"
                    />
                  </div>

                  <div>
                    <label className="mb-2 block font-kulim text-xs text-[#6E4728]">
                      ORIGINAL PRICE (₹)
                    </label>
                    <input
                      required
                      min="1"
                      type="number"
                      value={newProduct.originalPrice}
                      onChange={(e) =>
                        setNewProduct({
                          ...newProduct,
                          originalPrice: e.target.value,
                        })
                      }
                      className="w-full border border-[#D7CEC2] bg-[#F3EBD7] px-3 py-3 font-kulim text-sm outline-none"
                    />
                  </div>
                </div>

                <div>
                  <label className="mb-2 block font-kulim text-xs text-[#6E4728]">
                    RATING
                  </label>
                  <select
                    value={newProduct.rating}
                    onChange={(e) =>
                      setNewProduct({ ...newProduct, rating: e.target.value })
                    }
                    className="w-full border border-[#D7CEC2] bg-[#F3EBD7] px-4 py-3 font-kulim text-sm outline-none"
                  >
                    <option value="5">5</option>
                    <option value="4.5">4.5</option>
                    <option value="4">4</option>
                    <option value="3.5">3.5</option>
                  </select>
                </div>

                <div>
                  <label className="mb-2 block font-kulim text-xs text-[#6E4728]">
                    PRODUCT IMAGE PATH
                  </label>
                  <input
                    required
                    type="text"
                    value={newProduct.image}
                    onChange={(e) =>
                      setNewProduct({ ...newProduct, image: e.target.value })
                    }
                    placeholder="/images/product.jpeg"
                    className="w-full border border-[#D7CEC2] bg-[#F3EBD7] px-4 py-3 font-kulim text-sm outline-none focus:border-[#845F42]"
                  />
                </div>

                <div className="flex gap-3 pt-4">
                  <button
                    type="submit"
                    className="flex-1 bg-[#241A14] py-3 font-kulim text-sm font-semibold text-[#F3EBD7] hover:bg-[#6E4728]"
                  >
                    Add Product
                  </button>

                  <button
                    type="button"
                    onClick={() => setIsAddProductOpen(false)}
                    className="border border-[#D7CEC2] px-6 py-3 font-kulim text-sm text-[#845F42]"
                  >
                    Cancel
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}
        {/* UPDATE PRODUCT MODAL */}
        {selectedProduct && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-[#241A14]/60 p-5">
            <div className="w-full max-w-md border border-[#D7CEC2] bg-[#FAF7F0] p-7">
              <p className="font-kulim text-xs font-semibold tracking-[3px] text-[#845F42]">
                PRODUCT MANAGEMENT
              </p>

              <h2 className="mt-2 font-kulim text-2xl font-semibold">
                Update Product
              </h2>

              <p className="mt-2 font-kulim text-sm text-[#845F42]">
                {selectedProduct.name}
              </p>

              <div className="mt-6">
                <label className="mb-2 block font-kulim text-xs text-[#6E4728]">
                  PRODUCT PRICE
                </label>

                <input
                  type="number"
                  value={selectedProduct.price}
                  onChange={(e) =>
                    setSelectedProduct({
                      ...selectedProduct,
                      price: Number(e.target.value),
                    })
                  }
                  className="w-full border border-[#D7CEC2] bg-[#F3EBD7] px-4 py-3 font-kulim text-sm outline-none focus:border-[#845F42]"
                />

                <label className="mb-2 mt-5 block font-kulim text-xs text-[#6E4728]">
                  STOCK QUANTITY
                </label>

                <input
                  type="number"
                  value={selectedProduct.stock}
                  onChange={(e) =>
                    setSelectedProduct({
                      ...selectedProduct,
                      stock: Number(e.target.value),
                    })
                  }
                  className="w-full border border-[#D7CEC2] bg-[#F3EBD7] px-4 py-3 font-kulim text-sm outline-none focus:border-[#845F42]"
                />
              </div>

              <div className="mt-7 flex gap-3">
                <button
                  type="button"
                  onClick={() => {
                    setProducts((current) =>
                      current.map((product) =>
                        product.id === selectedProduct.id
                          ? selectedProduct
                          : product,
                      ),
                    );
                    setSelectedProduct(null);
                  }}
                  className="flex-1 bg-[#241A14] py-3 font-kulim text-sm text-[#F3EBD7] hover:bg-[#6E4728]"
                >
                  Save Changes
                </button>

                <button
                  type="button"
                  onClick={() => setSelectedProduct(null)}
                  className="border border-[#D7CEC2] px-5 py-3 font-kulim text-sm text-[#845F42]"
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}
