"use client";

import React, { useState } from "react";
import Link from "next/link";

export default function ForgotPasswordPage() {
  const [email, setEmail] = useState("");
  const [sent, setSent] = useState(false);

  return (
    <div className="flex min-h-screen w-full items-center justify-center bg-[#F4EFE6] px-5 py-10">
      <div className="w-full max-w-md border border-[#D5C2A9] bg-[#F8F5F0] px-8 py-10 shadow-lg md:px-12">
        <h1 className="text-center font-serif text-3xl font-bold tracking-widest text-[#4A2A02]">
          RESET PASSWORD
        </h1>

        {sent ? (
          <p className="mt-6 text-center text-sm text-[#6B4423]">
            If an account exists for <b>{email}</b>, a reset link will be sent.
          </p>
        ) : (
          <form
            className="mt-8"
            onSubmit={(e) => {
              e.preventDefault();
              // TODO: call the password-reset API here.
              setSent(true);
            }}
          >
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email address"
              className="w-full border border-[#D5C2A9] bg-white px-4 py-3 text-sm outline-none focus:border-[#8A7356]"
            />
            <button
              type="submit"
              className="mt-6 w-full bg-[#8A7356] py-3 text-sm font-bold tracking-widest text-white transition duration-300 hover:bg-[#4A2A02]"
            >
              SEND RESET LINK
            </button>
          </form>
        )}

        <p className="mt-7 text-center text-sm text-[#6B4423]">
          <Link href="/user_login" className="font-bold text-[#8A7356] hover:underline">
            ← Back to login
          </Link>
        </p>
      </div>
    </div>
  );
}
