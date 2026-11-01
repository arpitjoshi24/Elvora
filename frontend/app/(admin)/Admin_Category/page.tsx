
import React from "react";

export default function page() {
  return (
    <>
      <div>
        <div>

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
