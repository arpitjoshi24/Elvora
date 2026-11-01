"use client";

import React from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function AdminLoginPage() {
  const router = useRouter();

  return (
    <div className="flex min-h-screen w-full items-center justify-center bg-[#F4EFE6] px-5 py-10">
      <div className="w-full max-w-md border border-[#D5C2A9] bg-[#F8F5F0] px-8 py-10 shadow-lg md:px-12">
        <h1 className="text-center font-serif text-3xl font-bold tracking-widest text-[#4A2A02]">
          ELVORA ADMIN
        </h1>

        <form
          className="mt-8 flex flex-col gap-4"
          onSubmit={(e) => {
            e.preventDefault();
            // TODO: authenticate admin, then continue.
            router.push("/admin_dashboard");
          }}
        >
          <input
            type="email"
            required
            placeholder="Admin email"
            className="w-full border border-[#D5C2A9] bg-white px-4 py-3 text-sm outline-none focus:border-[#8A7356]"
          />
          <input
            type="password"
            required
            placeholder="Password"
            className="w-full border border-[#D5C2A9] bg-white px-4 py-3 text-sm outline-none focus:border-[#8A7356]"
          />
          <button
            type="submit"
            className="mt-2 w-full bg-[#8A7356] py-3 text-sm font-bold tracking-widest text-white transition duration-300 hover:bg-[#4A2A02]"
          >
            LOG IN
          </button>
        </form>

        <p className="mt-7 text-center text-sm text-[#6B4423]">
          <Link href="/landing" className="font-bold text-[#8A7356] hover:underline">
            ← Back to store
          </Link>
        </p>
      </div>
    </div>
  );
}
