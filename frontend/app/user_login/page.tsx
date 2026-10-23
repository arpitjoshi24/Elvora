
import React from "react";

export default function Page() {
  return (
    <div className="min-h-screen w-full flex flex-col md:flex-row bg-white">

      {/* LEFT SECTION - LOGIN FORM */}
      <div className="w-full md:w-1/2 flex justify-center items-center px-6 py-10 md:px-12">

        <div className="w-full max-w-md">

          {/* LOGO */}
          <div className="flex justify-center">
            <div className="w-20 h-20 rounded-full bg-gray-300 flex items-center justify-center text-lg text-gray-700">
              <img  className='rounded-3xl' src='./images/logo.jpeg'></img>
            </div>
          </div>

          {/* TAGLINE */}
          <div className="mt-4 flex justify-center">
            <div className="w-52 font-bold text-center py-2 text-3xl text-gray-700">
              ELVORA
            </div>
          </div>

          {/* HEADING */}
          <h1 className="mt-5 text-3xl text-center font-normal text-black">
            Welcome back !
          </h1>

          {/* LOGIN FORM */}
          <form className="mt-5">

            {/* EMAIL */}
            <div>
              <label
                htmlFor="email"
                className="block text-sm text-gray-800"
              >
                E-MAIL*
              </label>

              <input
                type="email"
                id="email"
                name="email"
                required
                className="mt-2 w-full bg-gray-200 px-3 py-2 outline-none focus:ring-2 focus:ring-gray-400"
              />
            </div>

            {/* PASSWORD */}
            <div className="mt-5">
              <label
                htmlFor="password"
                className="block text-sm text-gray-800"
              >
                PASSWORD*
              </label>

              <input
                type="password"
                id="password"
                name="password"
                required
                className="mt-2 w-full bg-gray-200 px-3 py-2 outline-none focus:ring-2 focus:ring-gray-400"
              />
            </div>

            {/* LOGIN BUTTON */}
            <button
              type="submit"
              className="mt-5 w-full bg-blue-400 py-2 text-sm text-black-800 hover:bg-blue-600 transition"
            >
              LOG IN
            </button>

          </form>

          

          {/* REGISTER LINK */}
          <p className="mt-5 text-center text-xs text-gray-700">
            Don't have an account?{" "}
            <a
              href="/register"
              className="text-blue-700 hover:underline"
            >
              Register Here
            </a>
          </p>

        </div>
      </div>

      {/* RIGHT SECTION - SHOPPING IMAGE */}
      <div className="relative hidden md:block md:w-1/2 min-h-screen overflow-hidden">

        {/* BACKGROUND IMAGE */}
        <img
          src="/images/image.jpg"
          alt="Online shopping cart on a laptop"
          className="absolute inset-0 h-full w-full object-cover"
        />

        {/* DARK OVERLAY */}
        <div className="absolute inset-0 bg-black/40"></div>

        
      </div>

    </div>
  );
}

