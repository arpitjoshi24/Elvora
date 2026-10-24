import React from "react";

export default function page() {
  return (
    <div className="h-screen grid grid-cols-2 gap-4 bg-[#F3EBD7]">
      <div>
        <img
          src="./images/side_img.jpg"
          alt="side img"
          className="h-screen w-full object-cover"
        />
      </div>

      {/* Right Side */}
      <div className="flex flex-col justify-center">

        {/* Logo and Heading */}
        <div>
          <div className="flex justify-center">
            <img
              src="./images/WhatsApp Image 2026-10-23 at 11.35.02 PM (1).jpeg"
              alt="Elvora logo"
              className="block h-20 w-20 object-contain"
            />
          </div>

          <h1 className="text-center text-4xl font-semibold text-[#123D32]">
            Elvora
          </h1>

          <p className="text-center text-[#123D32]/70 mt-2">
            Register and Explore
          </p>
        </div>

        {/* Form Card */}
        <div className="bg-[#F3EBD7] rounded-3xl pt-6 pb-4 shadow-2xl mt-12 mr-16 ml-16 border border-[#123D32]/10">

          <form className="flex flex-col items-center">

            {/* Name */}
            <div className="pt-2 pb-3 w-3/4">
              <label
                htmlFor="Name"
                className="font-semibold text-[#123D32]"
              >
                Name
              </label>

              <input
                type="text"
                id="Name"
                name="Name"
                placeholder="Enter your name"
                className="block w-full mt-2 rounded-lg border border-[#123D32]/30 bg-white/40 px-3 py-2 outline-none focus:border-[#D94A32] focus:ring-1 focus:ring-[#D94A32]"
              />
            </div>

            {/* Email */}
            <div className="pt-2 pb-3 w-3/4">
              <label
                htmlFor="Email"
                className="font-semibold text-[#123D32]"
              >
                Email
              </label>

              <input
                type="email"
                id="Email"
                name="Email"
                placeholder="Enter your email"
                className="block w-full mt-2 rounded-lg border border-[#123D32]/30 bg-white/40 px-3 py-2 outline-none focus:border-[#D94A32] focus:ring-1 focus:ring-[#D94A32]"
              />
            </div>

            {/* Password */}
            <div className="pt-2 pb-3 w-3/4">
              <label
                htmlFor="Password1"
                className="font-semibold text-[#123D32]"
              >
                Create Password
              </label>

              <input
                type="password"
                id="Password1"
                name="Password1"
                placeholder="Create a password"
                className="block w-full mt-2 rounded-lg border border-[#123D32]/30 bg-white/40 px-3 py-2 outline-none focus:border-[#D94A32] focus:ring-1 focus:ring-[#D94A32]"
              />
            </div>

            {/* Confirm Password */}
            <div className="pt-2 pb-3 w-3/4">
              <label
                htmlFor="Password2"
                className="font-semibold text-[#123D32]"
              >
                Re-Enter Password
              </label>

              <input
                type="password"
                id="Password2"
                name="Password2"
                placeholder="Confirm your password"
                className="block w-full mt-2 rounded-lg border border-[#123D32]/30 bg-white/40 px-3 py-2 outline-none focus:border-[#D94A32] focus:ring-1 focus:ring-[#D94A32]"
              />
            </div>

            {/* Register Button */}
            <div className="flex justify-center pt-4 pb-2 w-3/4">
              <button
                type="submit"
                className="w-full rounded-lg bg-[#123D32] text-[#F3EBD7] py-3 font-semibold transition duration-300 hover:bg-[#D94A32] hover:shadow-lg"
              >
                Register
              </button>
            </div>

          </form>
        </div>

      </div>
    </div>
  );
}
