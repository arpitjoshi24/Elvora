import Header from "../components/Header";
import Footer from "../components/Footer";

// Shared layout for every storefront page: announcement bar, header, footer.
export default function ShopLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <div className="bg-[#241A14] py-2.5 text-center font-kulim text-[10px] tracking-[3px] text-[#EDE5D8]">
        FREE SHIPPING ON ORDERS OVER ₹1,999
      </div>
      <Header />
      <div className="flex-1">{children}</div>
      <Footer />
    </>
  );
}
