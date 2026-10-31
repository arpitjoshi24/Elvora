
import React from "react";

export default function page() {
  return (
    <>
      <div className="flex min-h-screen bg-[#F8F5F0]">

        {/* Sidebar */}
        <div className="w-1/4 max-w-64 bg-[#EDE3D5] border-r border-[#D5C2A9] flex flex-col items-center py-6 px-4">

          {/* Logo */}
          <div className="w-16 h-16 rounded-full bg-[#4A2A02] flex items-center justify-center text-xl font-serif font-bold text-[#F5EBDD] mb-5">
            E
          </div>

          {/* Navigation */}
          <div className="flex flex-col gap-4 w-full">

            <button className="w-full bg-[#F8F5F0] text-[#4A2A02] hover:bg-[#D5C2A9] rounded-md py-2 text-lg font-semibold">
              CATEGORY
            </button>

            <button className="w-full bg-[#F8F5F0] text-[#4A2A02] hover:bg-[#D5C2A9] rounded-md py-2 text-lg font-semibold">
              PRODUCTS
            </button>

            <button className="w-full bg-[#F8F5F0] text-[#4A2A02] hover:bg-[#D5C2A9] rounded-md py-2 text-lg font-semibold">
              USERS
            </button>

            <button className="w-full bg-[#F8F5F0] text-[#4A2A02] hover:bg-[#D5C2A9] rounded-md py-2 text-lg font-semibold">
              ORDERS
            </button>

          </div>

          {/* Logout */}
          <button className="mt-auto w-full bg-[#9B4B3D] hover:bg-[#823C31] text-white font-bold rounded-md py-2 text-lg">
            Logout
          </button>

        </div>

        {/* Main Content */}
        <div className="flex-1 p-8 md:p-10">

          <div className="flex justify-end mb-12">
            <button className="bg-[#6B4423] hover:bg-[#4A2A02] text-white px-6 py-2 rounded-md text-xl font-semibold">
              ADD Category
            </button>
          </div>

          {/* Category List */}
          <div className="max-w-2xl mx-auto space-y-5">

            <div className="flex items-center justify-between bg-[#EDE3D5] border border-[#D5C2A9] rounded-md px-4 py-3">
              <span className="text-xl text-[#4A2A02] font-medium">Boys</span>
              <button className="bg-[#8A7356] hover:bg-[#6B4423] text-white px-4 py-1 rounded-md">
                Update
              </button>
            </div>

            <div className="flex items-center justify-between bg-[#EDE3D5] border border-[#D5C2A9] rounded-md px-4 py-3">
              <span className="text-xl text-[#4A2A02] font-medium">Girls</span>
              <button className="bg-[#8A7356] hover:bg-[#6B4423] text-white px-4 py-1 rounded-md">
                Update
              </button>
            </div>

            <div className="flex items-center justify-between bg-[#EDE3D5] border border-[#D5C2A9] rounded-md px-4 py-3">
              <span className="text-xl text-[#4A2A02] font-medium">Women</span>
              <button className="bg-[#8A7356] hover:bg-[#6B4423] text-white px-4 py-1 rounded-md">
                Update
              </button>
            </div>

            <div className="flex items-center justify-between bg-[#EDE3D5] border border-[#D5C2A9] rounded-md px-4 py-3">
              <span className="text-xl text-[#4A2A02] font-medium">Men</span>
              <button className="bg-[#8A7356] hover:bg-[#6B4423] text-white px-4 py-1 rounded-md">
                Update
              </button>
            </div>

            <div className="flex items-center justify-between bg-[#EDE3D5] border border-[#D5C2A9] rounded-md px-4 py-3">
              <span className="text-xl text-[#4A2A02] font-medium">Boys</span>
              <button className="bg-[#8A7356] hover:bg-[#6B4423] text-white px-4 py-1 rounded-md">
                Update
              </button>
            </div>

            <div className="flex items-center justify-between bg-[#EDE3D5] border border-[#D5C2A9] rounded-md px-4 py-3">
              <span className="text-xl text-[#4A2A02] font-medium">Girls</span>
              <button className="bg-[#8A7356] hover:bg-[#6B4423] text-white px-4 py-1 rounded-md">
                Update
              </button>
            </div>

          </div>
        </div>

      </div>
    </>
  );
}
