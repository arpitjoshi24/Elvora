"use client";
import { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import Header from "../components/Header";
import Footer from "../components/Footer";

/* ─── DATA ──────────────────────────────────────────── */

const slides = [
  {
    tag: "NEW ARRIVAL",
    headline: ["CREATE A", "FASHION", "VIBE"],
    sub: "Minimal Fashion Designed For Everyday Confidence",
    image:
      "/images/Men_s_Brown_Oversized_Sweatshirt___Minimalist_Casual_Streetwear___IBOWEAR-removebg-preview (1).png",
    cta1: "SHOP NOW",
    cta2: "EXPLORE NEW IN",
    type: "product",
  },
  {
    tag: "THIS SEASON",
    headline: ["LESS,", "BUT", "BETTER."],
    sub: "Timeless Silhouettes. Your Own Expression.",
    image:
      "/images/Spring_Summer_2023__Valentino_and_Retro_Super_Future_-removebg-preview.png",
    cta1: "SHOP NOW",
    cta2: "NEW COLLECTION",
    type: "model",
  },
  {
    tag: "THE EDIT",
    headline: ["WEAR", "YOUR", "STORY."],
    sub: "Curated Pieces. Understated Elegance.",
    image: "/images/download__23_-removebg-preview-removebg-preview.png",
    cta1: "SHOP NOW",
    cta2: "VIEW LOOKBOOK",
    type: "model",
  },
];

const categories = [
  { title: "Casual Wear", image: "/images/download (25).jpg.jpeg" },
  { title: "StreetWear", image: "/images/Long-Sleeved Sweatshirt.jpg.jpeg" },
  {
    title: "Sportswear",
    image: "/images/Custom Cotton Rugby Sweatshirt Concept.jpg.jpeg",
  },
];

const deals = [
  { title: "Under ₹999", image: "/images/c1.png" },
  { title: "Min. 70% Off", image: "/images/c2.png" },
  { title: "Special Offers", image: "/images/c3.png" },
];

/* ─── COMPONENT ─────────────────────────────────────── */

export default function Page() {
  const [slide, setSlide] = useState(0);
  const [fading, setFading] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQ, setSearchQ] = useState("");
  const [mobileNav, setMobileNav] = useState(false);
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  /* Interactive 3D mouse parallax tilt */
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5; // -0.5 to 0.5
    const y = (e.clientY - rect.top) / rect.height - 0.5; // -0.5 to 0.5
    setMousePos({ x, y });
  };

  const handleMouseLeave = () => {
    setMousePos({ x: 0, y: 0 });
  };

  /* slide transition */
  const goTo = useCallback(
    (next: number) => {
      if (fading) return;
      setFading(true);
      setTimeout(() => {
        setSlide(next);
        setFading(false);
      }, 280);
    },
    [fading],
  );

  const next = () => goTo((slide + 1) % slides.length);
  const prev = () => goTo((slide - 1 + slides.length) % slides.length);

  /* auto-advance */
  useEffect(() => {
    const id = setTimeout(next, 5000);
    return () => clearTimeout(id);
  }, [slide]); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <main className="min-h-screen bg-[#F3EBD7] text-[#1a1a1a]">
      {/* ── ANNOUNCEMENT ── */}
      <div className="bg-[#241A14] py-2.5 text-center font-kulim text-[10px] tracking-[3px] text-[#EDE5D8]">
        FREE SHIPPING ON ORDERS OVER ₹1,999
      </div>

      {/* ── HEADER ── */}
      <Header />

      {/* ── HERO CAROUSEL (Interactive 3D Stage with Parallax Depth) ── */}
      <section
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        className="relative overflow-hidden bg-[#EDE5D8]"
      >
        {/* Soft luxury studio radial backlight for 3D silhouette separation */}
        <div className="pointer-events-none absolute right-[5%] top-1/2 h-[520px] w-[520px] -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgba(255,255,255,0.42)_0%,rgba(255,255,255,0.16)_42%,transparent_72%)] blur-2xl" />

        {/* Main slide area - Perfectly proportioned 3D stage */}
        <div
          className={`relative mx-auto max-w-[1720px] px-6 sm:px-10 md:px-14 lg:px-16 transition-opacity duration-300 ${fading ? "opacity-0" : "opacity-100"}`}
        >
          <div className="grid grid-cols-1 md:grid-cols-12 min-h-[540px] md:min-h-[620px] lg:min-h-[690px] items-center">
            <div
              className="z-10 md:col-span-5 lg:col-span-5 py-6 md:py-10 md:translate-x-6 lg:translate-x-10 transition-transform duration-300 ease-out"
              style={{
                transform: `perspective(1000px) translate3d(${mousePos.x * -12 + 24}px, ${mousePos.y * -8}px, 20px)`,
              }}
            >
              <p className="mb-5 font-kulim text-sm md:text-base font-semibold tracking-[4px] text-[#845F42] uppercase">
                {slides[slide].tag}
              </p>

              {/* Headline using "Krona One" font */}
              <h1 className="font-krona uppercase leading-[1.02] tracking-tight text-[#845F42] text-[clamp(40px,5.6vw,84px)] drop-shadow-[0_4px_8px_rgba(100,60,30,0.10)]">
                {slides[slide].headline.map((line, i) => (
                  <span key={i} className="block">
                    {line}
                  </span>
                ))}
              </h1>

              {/* Subtitle using "Kulim Park" font */}
              <p className="mt-5 max-w-[380px] font-kulim text-sm md:text-base font-normal text-[#6E5A4B] leading-relaxed">
                {slides[slide].sub}
              </p>

              {/* CTA Buttons */}
              <div className="mt-7 flex w-fit flex-wrap items-center gap-4 bg-transparent font-kulim">
                <Link
                  href="/product_page"
                  className="inline-flex w-fit items-center justify-center bg-[#D7CEC2] px-8 py-3.5 text-xs font-medium tracking-[1.5px] text-[#2B231D] transition-colors hover:bg-[#C9BEAF]"
                >
                  {slides[slide].cta1}
                </Link>

                <Link
                  href="/product_page"
                  className="inline-flex w-fit items-center justify-center bg-[#D7CEC2] px-8 py-3.5 text-xs font-medium tracking-[1.5px] text-[#2B231D] transition-colors hover:bg-[#C9BEAF]"
                >
                  {slides[slide].cta2}
                </Link>
              </div>
            </div>
            {/* HERO VISUAL — right column (Full 3D Stage with Interactive Tilt & Hover Float) */}
            <div className="relative md:col-span-7 lg:col-span-7 flex justify-center md:justify-end xl:justify-center items-center h-full min-h-[460px] md:min-h-[560px] lg:min-h-[640px] select-none overflow-visible md:-translate-x-6 lg:-translate-x-10">
              {slides[slide].type === "product" ? (
                /* Product Image (Brown Sweatshirt) — Bold 3D Floating Presence */
                <div
                  className="relative flex items-center justify-center md:justify-end xl:justify-center w-full h-full py-3 transition-transform duration-150 ease-out"
                  style={{
                    transform: `perspective(1100px) rotateY(${mousePos.x * 20}deg) rotateX(${-mousePos.y * 16}deg) translateZ(48px)`,
                    transformStyle: "preserve-3d",
                  }}
                >
                  <img
                    key={slide}
                    src={slides[slide].image}
                    alt="Elvora Oversized Sweatshirt"
                    className="h-[580px] sm:h-[600px] md:h-[680px] lg:h-[720px] w-auto max-w-none object-contain scale-125 sm:scale-135 md:scale-140 lg:scale-150 mix-blend-multiply drop-shadow-[0_24px_38px_rgba(75,45,20,0.16)] animate-float"
                  />
                  <div
                    className="absolute bottom-5 left-1/2 md:left-[60%] xl:left-1/2 h-8 w-[62%] -translate-x-1/2 rounded-full bg-[#4E311A]/10 blur-3xl pointer-events-none animate-shadow"
                    style={{
                      transform: `translateX(-50%) translate(${mousePos.x * -32}px, ${mousePos.y * 16}px)`,
                      transition: "transform 0.15s ease-out",
                    }}
                  />
                </div>
              ) : (
                <div
                  className="relative flex items-end justify-center md:justify-end xl:justify-center w-full h-full pt-3 transition-transform duration-150 ease-out"
                  style={{
                    transform: `perspective(1200px) rotateY(${mousePos.x * 14}deg) rotateX(${-mousePos.y * 10}deg) translateY(-15px) translateZ(38px)`,
                    transformStyle: "preserve-3d",
                  }}
                >
                  <img
                    key={slide}
                    src={slides[slide].image}
                    alt="Elvora Collection"
                    className="h-[560px] sm:h-[620px] md:h-[700px] lg:h-[760px] w-auto max-w-full object-contain object-bottom origin-bottom mix-blend-multiply [mask-image:linear-gradient(to_bottom,black_0%,black_84%,transparent_100%)] duration-300"
                  />
                </div>
              )}
            </div>
          </div>
        </div>

        <div className="bg-[#6E4728] border-t border-[#6E4728]/20">
          <div className="mx-auto flex max-w-[1720px] items-center justify-between px-6 sm:px-10 md:px-14 lg:px-16 py-3">
            <span className="hidden text-[10px] tracking-[2.5px] text-[#EDE5D8]/70 font-medium sm:block">
              ELVORA — EVERYDAY LUXURY
            </span>
            <div className="flex items-center gap-5">
              <span className="font-mono text-[10px] tabular-nums text-[#EDE5D8]/60">
                {String(slide + 1).padStart(2, "0")} /{" "}
                {String(slides.length).padStart(2, "0")}
              </span>
              {/* dot indicators */}
              <div className="flex items-center gap-1.5">
                {slides.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => goTo(i)}
                    aria-label={`Slide ${i + 1}`}
                    className={`h-[2.5px] rounded-full transition-all duration-300 ${i === slide ? "w-8 bg-[#EDE5D8]" : "w-2.5 bg-[#EDE5D8]/30 hover:bg-[#EDE5D8]/60"}`}
                  />
                ))}
              </div>
              <div className="flex items-center gap-1">
                <button
                  onClick={prev}
                  aria-label="Previous"
                  className="px-2.5 py-1 text-sm text-[#EDE5D8]/60 transition-colors hover:text-[#EDE5D8]"
                >
                  ←
                </button>
                <button
                  onClick={next}
                  aria-label="Next"
                  className="px-2.5 py-1 text-sm text-[#EDE5D8]/60 transition-colors hover:text-[#EDE5D8]"
                >
                  →
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        id="categories"
        className="bg-[#F3EBD7] px-6 sm:px-10 md:px-14 lg:px-16 py-16 md:py-20 border-b border-[#d8cfc4]"
      >
        <div className="mx-auto max-w-[1720px]">
          <div className="mb-10 flex items-baseline justify-between">
            <h2 className="font-krona text-xl uppercase tracking-tight text-[#241A14] md:text-2xl">
              Shop by Category
            </h2>
            <Link
              href="/product_page"
              className="font-kulim text-[10px] font-bold tracking-[2.5px] text-[#6E4728] transition-colors hover:text-[#241A14]"
            >
              VIEW ALL →
            </Link>
          </div>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
            {categories.map((cat) => (
              <Link
                key={cat.title}
                href="/product_page"
                className="group block overflow-hidden rounded-2xl bg-[#EDE5D8] border border-[#6E4728]/15 shadow-sm hover:shadow-xl transition-all duration-500"
              >
                <div className="relative aspect-[3/4] overflow-hidden bg-[#DDD4C5]">
                  <img
                    src={cat.image}
                    alt={cat.title}
                    className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100 pointer-events-none" />
                </div>
                <div className="flex items-center justify-between px-5 py-4 bg-[#EDE5D8] border-t border-[#6E4728]/15">
                  <span className="font-kulim text-sm font-bold tracking-wider uppercase text-[#241A14]">
                    {cat.title}
                  </span>
                  <span className="font-kulim text-[11px] font-bold tracking-[1.5px] text-[#6E4728] transition-colors group-hover:text-[#241A14] flex items-center gap-1">
                    Shop{" "}
                    <span className="transition-transform duration-200 group-hover:translate-x-1">
                      →
                    </span>
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <div
        id="offers"
        className="bg-[#6E4728] px-6 sm:px-10 md:px-14 lg:px-16 py-3.5"
      >
        <div className="mx-auto flex max-w-[1720px] flex-wrap items-center justify-between gap-3">
          {deals.map((d) => (
            <Link
              key={d.title}
              href="/product_page"
              className="flex items-center gap-2 font-kulim text-[10px] font-semibold tracking-[2px] text-[#EDE5D8]/80 transition-colors hover:text-[#EDE5D8]"
            >
              <span className="h-px w-4 bg-[#EDE5D8]/30" />
              {d.title.toUpperCase()}
            </Link>
          ))}
          <Link
            href="/product_page"
            className="font-kulim text-[10px] font-bold tracking-[2px] text-[#EDE5D8] transition-opacity hover:opacity-80"
          >
            ALL OFFERS →
          </Link>
        </div>
      </div>

      {/* ── DEALS GRID (Current Offers — Section 1) ── */}
      <section className="bg-[#F3EBD7] px-6 sm:px-10 md:px-14 lg:px-16 py-16 md:py-20 border-b border-[#d8cfc4]">
        <div className="mx-auto max-w-[1720px]">
          <div className="mb-10 flex items-baseline justify-between">
            <h2 className="font-krona text-xl uppercase tracking-tight text-[#241A14] md:text-2xl">
              Current Offers
            </h2>
            <Link
              href="/product_page"
              className="font-kulim text-[10px] font-bold tracking-[2.5px] text-[#6E4728] transition-colors hover:text-[#241A14]"
            >
              SEE ALL →
            </Link>
          </div>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
            {deals.map((d) => (
              <Link
                key={d.title}
                href="/product_page"
                className="group block overflow-hidden rounded-2xl bg-[#EDE5D8] border border-[#6E4728]/15 shadow-sm hover:shadow-xl transition-all duration-500"
              >
                <div className="relative aspect-[4/3] overflow-hidden bg-[#DDD4C5]">
                  <img
                    src={d.image}
                    alt={d.title}
                    className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100 pointer-events-none" />
                </div>
                <div className="flex items-center justify-between px-5 py-4 bg-[#EDE5D8] border-t border-[#6E4728]/15">
                  <span className="font-kulim text-xs font-bold tracking-[1.5px] uppercase text-[#241A14]">
                    {d.title}
                  </span>
                  <span className="font-kulim text-xs font-bold text-[#6E4728] transition-transform duration-200 group-hover:translate-x-1.5">
                    →
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── FEATURE BANNER (The Collection — Section 2) ── */}
      <section className="bg-[#EDE5D8] px-6 sm:px-10 md:px-14 lg:px-16 py-16 md:py-20 border-b border-[#d8cfc4]">
        <div className="mx-auto max-w-[1720px]">
          <div className="grid grid-cols-1 md:grid-cols-12 items-center gap-10 lg:gap-16">
            {/* Left — Portrait photo with refined luxury frame */}
            <div className="md:col-span-6 lg:col-span-6 flex justify-center items-center">
              <div className="relative w-full max-w-[480px] overflow-hidden rounded-2xl bg-[#DDD4C5] shadow-2xl">
                <img
                  src="/images/Confident_Student_Volunteer_Thumbs-Up_Portrait-removebg-preview.png"
                  alt="Elvora Campaign"
                  className="h-full w-full object-cover aspect-[4/5] hover:scale-105 transition-transform duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/25 via-transparent to-transparent pointer-events-none" />
              </div>
            </div>

            {/* Right — Typography and Action */}
            <div className="md:col-span-6 lg:col-span-6 flex flex-col justify-center">
              <p className="mb-4 font-kulim text-[11px] font-semibold tracking-[4px] text-[#845F42] uppercase">
                The Collection
              </p>
              <h2 className="font-krona text-3xl uppercase leading-[1.1] text-[#6E4728] md:text-4xl lg:text-5xl">
                Wear What
                <br />
                Feels Like
                <br />
                You.
              </h2>
              <p className="mt-6 max-w-[380px] font-kulim text-xs leading-relaxed text-[#6E5A4B]">
                Built for the unhurried. Everyday shapes in fabrics that age
                well and fit better over time. Handpicked cuts designed for
                effortless everyday confidence.
              </p>
              <div className="mt-8 font-kulim flex flex-wrap items-center gap-4">
                <Link
                  href="/product_page"
                  className="bg-[#D7CEC2] px-8 py-3 text-[11px] font-medium tracking-[2px] text-[#2B231D] hover:bg-[#c9beaF] transition-colors shadow-xs"
                >
                  SHOP NOW
                </Link>
                <Link
                  href="/product_page"
                  className="text-[11px] font-bold tracking-[2px] text-[#6E4728]/80 hover:text-[#6E4728] transition-colors"
                >
                  EXPLORE LOOKBOOK →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── NEWSLETTER ── */}
      <section className="border-t border-[#d8cfc4] bg-[#EDE5D8] px-6 py-14 text-center md:px-14">
        <div className="mx-auto max-w-md">
          <h3 className="font-krona text-lg uppercase tracking-tight text-[#241A14]">
            Stay in the loop.
          </h3>
          <p className="mt-2 font-kulim text-xs leading-6 text-[#6E5A4B]">
            New arrivals, member access, early drops. No noise.
          </p>
          {subscribed ? (
            <p className="mt-6 font-kulim text-sm font-semibold text-[#6E4728]">
              You're in. Check your inbox.
            </p>
          ) : (
            <form
              onSubmit={(e) => {
                e.preventDefault();
                if (email.trim()) setSubscribed(true);
              }}
              className="mt-6 flex"
            >
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="your@email.com"
                className="flex-1 border border-r-0 border-[#c0b8ad] bg-[#F3EBD7]/60 px-4 py-2.5 font-kulim text-xs text-[#241A14] placeholder-[#888] outline-none focus:border-[#6E4728]"
              />
              <button
                type="submit"
                className="border border-[#241A14] bg-[#241A14] px-6 py-2.5 font-kulim text-[10px] font-bold tracking-[2px] text-[#EDE5D8] transition-colors hover:bg-[#6E4728] hover:border-[#6E4728]"
              >
                JOIN
              </button>
            </form>
          )}
        </div>
      </section>

      {/* ── FOOTER (Rich Dark Espresso Mocha — Harmonized with Palette) ── */}
      <Footer />
    </main>
  );
}
