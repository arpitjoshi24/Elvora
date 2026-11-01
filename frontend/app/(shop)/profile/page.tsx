"use client";

import React, { useState } from "react";
import Link from "next/link";
import UserSideBar, { type UserSection } from "../../components/UserSideBar";
export default function Page() {
  const [activeSection, setActiveSection] = useState<UserSection>("account");
  const [profile, setProfile] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    addressLine1: "",
    addressLine2: "",
    city: "",
    state: "",
    pincode: "",
    country: "India",
  });
  const [saved, setSaved] = useState(false);

  const updateProfile = (field: keyof typeof profile, value: string) => {
    setProfile((prev) => ({ ...prev, [field]: value }));
    setSaved(false);
  };

  return (
    <main className="min-h-screen bg-[#F3EBD7] text-[#241A14]">

      <section className="mx-auto w-full max-w-[1200px] px-5 py-8 sm:px-7 md:px-9 md:py-12">
        <div className="mb-8 border-b border-[#D7CEC2] pb-5">
          <p className="mb-2 font-kulim text-[11px] tracking-[3px] text-[#845F42]">
            MY ELVORA
          </p>
          <h1 className="font-krona text-2xl tracking-wide text-[#241A14] md:text-3xl">
            MY ACCOUNT
          </h1>
          <p className="mt-3 font-kulim text-sm text-[#6E5A4B]">
            Manage your account, orders and personal details.
          </p>
        </div>

        <div className="grid grid-cols-1 items-start gap-6 md:grid-cols-[220px_minmax(0,1fr)] lg:grid-cols-[240px_minmax(0,1fr)] lg:gap-6">
          <UserSideBar
            activeSection={activeSection}
            onSectionChange={setActiveSection}
            onLogout={() => {
              // Add your Firebase logout function here.
            }}
          />

          <section className="min-w-0 min-h-[480px] border border-[#D7CEC2] bg-[#EDE5D8] p-5 sm:p-6 md:p-7">
            {activeSection === "account" && (
              <div>
                <div className="mb-7 border-b border-[#D7CEC2] pb-5">
                  <p className="font-kulim text-[10px] tracking-[2px] text-[#845F42]">
                    PERSONAL INFORMATION
                  </p>
                  <h2 className="mt-2 font-krona text-xl text-[#241A14]">
                    Account Details
                  </h2>
                  <p className="mt-3 font-kulim text-sm text-[#6E5A4B]">
                    Update your personal information below.
                  </p>
                </div>

                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    setSaved(true);
                  }}
                  className="w-full"
                >
                  <div className="grid grid-cols-1 gap-x-5 gap-y-5 sm:grid-cols-2">
                    <div>
                      <label className="mb-2 block font-kulim text-xs tracking-wide text-[#6E4728]">
                        First Name
                      </label>
                      <input
                        value={profile.firstName}
                        onChange={(e) =>
                          updateProfile("firstName", e.target.value)
                        }
                        placeholder="Enter first name"
                        className="w-full border border-[#C8BBA9] bg-[#F3EBD7] px-4 py-3 font-kulim text-sm text-[#241A14] outline-none placeholder:text-[#A18D79] focus:border-[#6E4728]"
                      />
                    </div>

                    <div>
                      <label className="mb-2 block font-kulim text-xs tracking-wide text-[#6E4728]">
                        Last Name
                      </label>
                      <input
                        value={profile.lastName}
                        onChange={(e) =>
                          updateProfile("lastName", e.target.value)
                        }
                        placeholder="Enter last name"
                        className="w-full border border-[#C8BBA9] bg-[#F3EBD7] px-4 py-3 font-kulim text-sm text-[#241A14] outline-none placeholder:text-[#A18D79] focus:border-[#6E4728]"
                      />
                    </div>

                    <div>
                      <label className="mb-2 block font-kulim text-xs tracking-wide text-[#6E4728]">
                        Email Address
                      </label>
                      <input
                        type="email"
                        value={profile.email}
                        onChange={(e) => updateProfile("email", e.target.value)}
                        placeholder="Enter email address"
                        className="w-full border border-[#C8BBA9] bg-[#F3EBD7] px-4 py-3 font-kulim text-sm text-[#241A14] outline-none placeholder:text-[#A18D79] focus:border-[#6E4728]"
                      />
                    </div>

                    <div>
                      <label className="mb-2 block font-kulim text-xs tracking-wide text-[#6E4728]">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        value={profile.phone}
                        onChange={(e) => updateProfile("phone", e.target.value)}
                        placeholder="Enter phone number"
                        className="w-full border border-[#C8BBA9] bg-[#F3EBD7] px-4 py-3 font-kulim text-sm text-[#241A14] outline-none placeholder:text-[#A18D79] focus:border-[#6E4728]"
                      />
                    </div>

                    <div className="sm:col-span-2 mt-2">
                      <p className="mb-4 font-kulim text-xs font-semibold tracking-[1.5px] text-[#6E4728]">
                        DELIVERY ADDRESS
                      </p>

                      <div className="grid grid-cols-1 gap-x-5 gap-y-5 sm:grid-cols-2">
                        <div className="sm:col-span-2">
                          <label className="mb-2 block font-kulim text-xs text-[#6E4728]">
                            Address Line 1
                          </label>
                          <input
                            value={profile.addressLine1}
                            onChange={(e) =>
                              updateProfile("addressLine1", e.target.value)
                            }
                            placeholder="House no., building, street, area"
                            className="w-full border border-[#C8BBA9] bg-[#F3EBD7] px-4 py-3 font-kulim text-sm text-[#241A14] outline-none placeholder:text-[#A18D79] focus:border-[#6E4728]"
                          />
                        </div>

                        <div className="sm:col-span-2">
                          <label className="mb-2 block font-kulim text-xs text-[#6E4728]">
                            Address Line 2 (Optional)
                          </label>
                          <input
                            value={profile.addressLine2}
                            onChange={(e) =>
                              updateProfile("addressLine2", e.target.value)
                            }
                            placeholder="Landmark, apartment, floor, etc."
                            className="w-full border border-[#C8BBA9] bg-[#F3EBD7] px-4 py-3 font-kulim text-sm text-[#241A14] outline-none placeholder:text-[#A18D79] focus:border-[#6E4728]"
                          />
                        </div>

                        <div>
                          <label className="mb-2 block font-kulim text-xs text-[#6E4728]">
                            City
                          </label>
                          <input
                            value={profile.city}
                            onChange={(e) =>
                              updateProfile("city", e.target.value)
                            }
                            placeholder="Enter city"
                            className="w-full border border-[#C8BBA9] bg-[#F3EBD7] px-4 py-3 font-kulim text-sm text-[#241A14] outline-none placeholder:text-[#A18D79] focus:border-[#6E4728]"
                          />
                        </div>

                        <div>
                          <label className="mb-2 block font-kulim text-xs text-[#6E4728]">
                            State
                          </label>
                          <input
                            value={profile.state}
                            onChange={(e) =>
                              updateProfile("state", e.target.value)
                            }
                            placeholder="Enter state"
                            className="w-full border border-[#C8BBA9] bg-[#F3EBD7] px-4 py-3 font-kulim text-sm text-[#241A14] outline-none placeholder:text-[#A18D79] focus:border-[#6E4728]"
                          />
                        </div>

                        <div>
                          <label className="mb-2 block font-kulim text-xs text-[#6E4728]">
                            PIN Code
                          </label>
                          <input
                            type="text"
                            inputMode="numeric"
                            maxLength={6}
                            value={profile.pincode}
                            onChange={(e) =>
                              updateProfile(
                                "pincode",
                                e.target.value.replace(/\D/g, ""),
                              )
                            }
                            placeholder="6-digit PIN code"
                            className="w-full border border-[#C8BBA9] bg-[#F3EBD7] px-4 py-3 font-kulim text-sm text-[#241A14] outline-none placeholder:text-[#A18D79] focus:border-[#6E4728]"
                          />
                        </div>

                        <div>
                          <label className="mb-2 block font-kulim text-xs text-[#6E4728]">
                            Country
                          </label>
                          <input
                            value={profile.country}
                            onChange={(e) =>
                              updateProfile("country", e.target.value)
                            }
                            className="w-full border border-[#C8BBA9] bg-[#F3EBD7] px-4 py-3 font-kulim text-sm text-[#241A14] outline-none focus:border-[#6E4728]"
                          />
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="mt-7 flex flex-wrap items-center gap-5">
                    <button
                      type="submit"
                      className="bg-[#241A14] px-8 py-3 font-kulim text-xs tracking-[2px] text-[#F3EBD7] transition-colors hover:bg-[#6E4728]"
                    >
                      SAVE CHANGES
                    </button>
                    {saved && (
                      <span className="font-kulim text-sm text-[#6E4728]">
                        Changes saved locally.
                      </span>
                    )}
                  </div>
                </form>
              </div>
            )}

            {activeSection === "wishlist" && (
              <div>
                <div className="mb-7 border-b border-[#D7CEC2] pb-5">
                  <p className="font-kulim text-[10px] tracking-[2px] text-[#845F42]">
                    YOUR COLLECTION
                  </p>
                  <h2 className="mt-2 font-krona text-xl text-[#241A14]">
                    Wishlist
                  </h2>
                </div>

                <div className="flex min-h-[280px] flex-col items-center justify-center text-center">
                  <svg
                    viewBox="0 0 24 24"
                    className="mb-5 h-10 w-10 text-[#845F42]"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.2"
                  >
                    <path d="M20.8 8.8c0 5.1-8.8 10.2-8.8 10.2S3.2 13.9 3.2 8.8a4.5 4.5 0 0 1 8.8-1.3 4.5 4.5 0 0 1 8.8 1.3Z" />
                  </svg>
                  <h3 className="font-kulim text-lg text-[#241A14]">
                    Your wishlist is empty
                  </h3>
                  <p className="mt-2 max-w-sm font-kulim text-sm text-[#845F42]">
                    Save the pieces you love and find them here whenever you
                    return.
                  </p>
                  <Link
                    href="/product_page"
                    className="mt-7 border border-[#241A14] px-7 py-3 font-kulim text-xs tracking-[2px] text-[#241A14] transition-colors hover:bg-[#241A14] hover:text-[#F3EBD7]"
                  >
                    EXPLORE COLLECTION
                  </Link>
                </div>
              </div>
            )}

            {activeSection === "orders" && (
              <div>
                <div className="mb-7 border-b border-[#D7CEC2] pb-5">
                  <p className="font-kulim text-[10px] tracking-[2px] text-[#845F42]">
                    PURCHASE HISTORY
                  </p>
                  <h2 className="mt-2 font-krona text-xl text-[#241A14]">
                    My Orders
                  </h2>
                  <p className="mt-3 font-kulim text-sm text-[#6E5A4B]">
                    Track and manage your purchases.
                  </p>
                </div>

                <div className="flex min-h-[260px] flex-col items-center justify-center text-center">
                  <svg
                    viewBox="0 0 24 24"
                    className="mb-5 h-10 w-10 text-[#845F42]"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.2"
                  >
                    <path d="M4 7h16l-1.5 14h-13L4 7Z" />
                    <path d="M9 9V6a3 3 0 0 1 6 0v3" />
                  </svg>
                  <h3 className="font-kulim text-lg text-[#241A14]">
                    No orders to display
                  </h3>
                  <p className="mt-2 font-kulim text-sm text-[#845F42]">
                    Your order history will appear here.
                  </p>
                  <Link
                    href="/product_page"
                    className="mt-7 border border-[#241A14] px-7 py-3 font-kulim text-xs tracking-[2px] text-[#241A14] transition-colors hover:bg-[#241A14] hover:text-[#F3EBD7]"
                  >
                    START SHOPPING
                  </Link>
                </div>
              </div>
            )}
          </section>
        </div>
      </section>
    </main>
  );
}
