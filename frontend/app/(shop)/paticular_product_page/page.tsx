import Link from "next/link";

export default function ProductDetailPage() {
  return (
    <main className="mx-auto max-w-4xl px-6 py-24 text-center text-[#241A14]">
      <h1 className="font-krona text-2xl uppercase">Product details</h1>
      <p className="mt-3 text-sm text-[#6E5A4B]">This page is coming soon.</p>
      <Link href="/product_page" className="mt-8 inline-block bg-[#241A14] px-8 py-3 text-xs font-semibold tracking-[2px] text-[#EDE5D8] hover:bg-[#6E4728]">
        BACK TO PRODUCTS
      </Link>
    </main>
  );
}
