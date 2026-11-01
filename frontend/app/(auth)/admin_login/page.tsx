
"use client";
import { useRouter } from "next/navigation";

import { useState } from "react";
export default function AdminLogin() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const router = useRouter();

  const handleLogin = (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault();

  if (username === "admin" && password === "admin123") {
    router.push("/Admin_Order");
  } else {
    alert("Invalid username or password");
  }
};

  return (
    <main className="flex min-h-screen items-center justify-center bg-[#EDE5D8] px-5 py-10">

      <div className="w-full max-w-[420px] border border-[#D7CEC2] bg-[#FAF7F0] px-7 py-10 shadow-[0_12px_35px_rgba(36,26,20,0.07)] sm:px-10">

        {/* LOGO */}
        <div className="mb-8 flex justify-center">
          <img
            src="/images/Minimalist_Taupe_E-Swoosh_Logo-removebg-preview.png"
            alt="Elvora"
            className="h-16 w-auto object-contain"
          />
        </div>

        {/* HEADING */}
        <div className="mb-8 text-center">
          <p className="mb-3 font-kulim text-[11px] font-semibold tracking-[4px] text-[#845F42]">
            ELVORA
          </p>

          <h1 className="font-kulim text-3xl font-semibold tracking-wide text-[#241A14]">
            Admin Login
          </h1>

          <p className="mt-3 font-kulim text-sm text-[#845F42]">
            Sign in to access your administration panel.
          </p>
        </div>

        {/* LOGIN FORM */}
        <form onSubmit={handleLogin} className="space-y-5">

          <div>
            <label
              htmlFor="username"
              className="mb-2 block font-kulim text-xs font-semibold tracking-wide text-[#6E4728]"
            >
              ADMIN USERNAME
            </label>

            <input
              id="username"
              type="text"
              placeholder="Enter your username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
              className="w-full border border-[#D7CEC2] bg-[#F3EBD7] px-4 py-3.5 font-kulim text-sm text-[#241A14] outline-none transition-colors placeholder:text-[#A99580] focus:border-[#845F42]"
            />
          </div>

          <div>
            <label
              htmlFor="password"
              className="mb-2 block font-kulim text-xs font-semibold tracking-wide text-[#6E4728]"
            >
              PASSWORD
            </label>

            <div className="relative">
              <input
                id="password"
                type={showPassword ? "text" : "password"}
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="w-full border border-[#D7CEC2] bg-[#F3EBD7] px-4 py-3.5 pr-20 font-kulim text-sm text-[#241A14] outline-none transition-colors placeholder:text-[#A99580] focus:border-[#845F42]"
              />

              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-4 top-1/2 -translate-y-1/2 font-kulim text-xs text-[#845F42] hover:text-[#241A14]"
              >
                {showPassword ? "Hide" : "Show"}
              </button>
            </div>
          </div>

          <button
            type="submit"
            className="mt-3 w-full bg-[#241A14] py-3.5 font-kulim text-sm font-semibold tracking-wide text-[#F3EBD7] transition-colors duration-200 hover:bg-[#6E4728]"
          >
            Sign In
          </button>

        </form>

        {/* FOOTER */}
        <div className="mt-8 border-t border-[#D7CEC2] pt-5 text-center">
          <p className="font-kulim text-[10px] tracking-[2px] text-[#A99580]">
            ELVORA ADMINISTRATION
          </p>
        </div>

      </div>
    </main>
  );
}