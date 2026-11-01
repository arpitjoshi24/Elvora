
"use client";

import { useMemo, useState } from "react";
import AdminSideBar from "../components/AdminSideBar";

type User = {
  id: number;
  name: string;
  email: string;
  role: string;
  status: "Active" | "Inactive";
  address: string;
  pincode: string;
  number: string;
};

const initialUsers: User[] = [
  { id: 1, name: "Gaurav Bora", email: "gaurav@example.com", role: "Customer", status: "Active", address: "Addr1", pincode: "263139", number: "1234567890" },
  { id: 2, name: "Chhavi Gupta", email: "chhavi@example.com", role: "Customer", status: "Active", address: "Addr2", pincode: "263136", number: "1234567890" },
  { id: 3, name: "Arpit Joshi", email: "arpit@example.com", role: "Customer", status: "Active", address: "Addr3", pincode: "212344", number: "1234567890" },
  { id: 4, name: "Yash Karki", email: "yash@example.com", role: "Customer", status: "Inactive", address: "Addr4", pincode: "123456", number: "1234567890" },
  { id: 5, name: "Ramu", email: "ramu@example.com", role: "Customer", status: "Active", address: "Addr5", pincode: "123456", number: "1234567890" },
];

export default function AdminUsers() {
  const [users, setUsers] = useState<User[]>(initialUsers);
  const [search, setSearch] = useState("");
  const [selectedUser, setSelectedUser] = useState<User | null>(null);

  const filteredUsers = useMemo(() => {
    const query = search.toLowerCase().trim();

    if (!query) return users;

    return users.filter((user) =>
      [user.id.toString(), user.name, user.email, user.role, user.status]
        .some((value) => value.toLowerCase().includes(query))
    );
  }, [search, users]);

  const activeUsers = users.filter(
    (user) => user.status === "Active"
  ).length;

  const deleteUser = (id: number) => {
    setUsers((prev) => prev.filter((user) => user.id !== id));
    if (selectedUser?.id === id) setSelectedUser(null);
  };

  return (
    <div className="grid min-h-screen grid-cols-1 bg-[#F3EBD7] text-[#241A14] md:grid-cols-[240px_minmax(0,1fr)]">

      <AdminSideBar />

      <main className="min-w-0 px-5 py-8 md:px-10 md:py-10">

        {/* PAGE HEADER */}
        <div className="mb-7">
          <p className="mb-2 font-kulim text-xs font-semibold tracking-[3px] text-[#845F42]">
            MANAGEMENT
          </p>

          <h1 className="font-kulim text-3xl font-semibold md:text-4xl">
            Manage Users
          </h1>

          <p className="mt-2 font-kulim text-sm text-[#845F42]">
            View and manage registered customers.
          </p>
        </div>

        {/* SUMMARY CARDS */}
        <section className="mb-6 grid grid-cols-1 gap-4 md:grid-cols-2">

          <div className="border border-[#D7CEC2] bg-[#FAF7F0] px-5 py-5">
            <p className="font-kulim text-sm text-[#845F42]">
              Total Users
            </p>

            <h2 className="mt-2 font-kulim text-3xl font-semibold">
              {users.length}
            </h2>
          </div>

          <div className="border border-[#D7CEC2] bg-[#FAF7F0] px-5 py-5">
            <p className="font-kulim text-sm text-[#845F42]">
              Active Users
            </p>

            <h2 className="mt-2 font-kulim text-3xl font-semibold">
              {activeUsers}
            </h2>
          </div>

        </section>

        {/* SEARCH BAR */}
        <div className="mb-5 w-full sm:max-w-[400px]">
          <input
            type="search"
            placeholder="Search by name, email, or role..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full border border-[#D7CEC2] bg-[#FAF7F0] px-4 py-3 font-kulim text-sm outline-none placeholder:text-[#A99580] focus:border-[#845F42]"
          />
        </div>

        {/* USERS TABLE */}
        <section className="overflow-hidden border border-[#D7CEC2] bg-[#FAF7F0]">

          <div className="overflow-x-auto">
            <table className="w-full min-w-[850px] border-collapse text-left">

              <thead>
                <tr className="bg-[#E5DDD1]">
                  {["ID", "User", "Email", "Role", "Status", "Actions"].map((heading) => (
                    <th
                      key={heading}
                      className="px-5 py-4 font-kulim text-xs font-semibold text-[#241A14]"
                    >
                      {heading}
                    </th>
                  ))}
                </tr>
              </thead>

              <tbody>
                {filteredUsers.length > 0 ? (
                  filteredUsers.map((user) => (
                    <tr
                      key={user.id}
                      className="border-b border-[#E5DDD1] transition-colors hover:bg-[#F3EBD7]"
                    >
                      {/* ID */}
                      <td className="px-5 py-4 font-kulim text-sm text-[#845F42]">
                        {user.id}
                      </td>

                      {/* USER WITH AVATAR */}
                      <td className="px-5 py-4">
                        <div className="flex items-center gap-3">
                          <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#D7CEC2] font-kulim text-sm font-semibold text-[#6E4728]">
                            {user.name.charAt(0).toUpperCase()}
                          </div>

                          <span className="font-kulim text-sm font-semibold text-[#241A14]">
                            {user.name}
                          </span>
                        </div>
                      </td>

                      {/* EMAIL */}
                      <td className="px-5 py-4 font-kulim text-sm text-[#6E4728]">
                        {user.email}
                      </td>

                      {/* ROLE */}
                      <td className="px-5 py-4 font-kulim text-sm text-[#6E4728]">
                        {user.role}
                      </td>

                      {/* STATUS */}
                      <td className="px-5 py-4">
                        <span
                          className={`inline-block rounded-full px-3 py-1 font-kulim text-xs font-semibold ${
                            user.status === "Active"
                              ? "bg-[#E1EBD9] text-[#526B46]"
                              : "bg-[#F0DFD9] text-[#A15D4C]"
                          }`}
                        >
                          {user.status}
                        </span>
                      </td>

                      {/* ACTIONS */}
                      <td className="px-5 py-4">
                        <div className="flex items-center gap-2">

                          <button
                            onClick={() => setSelectedUser(user)}
                            className="bg-[#845F42] px-4 py-2 font-kulim text-xs font-medium text-white transition hover:bg-[#6E4728]"
                          >
                            View
                          </button>

                          <button
                            onClick={() => {
                              if (window.confirm(`Delete ${user.name}?`)) {
                                deleteUser(user.id);
                              }
                            }}
                            className="border border-[#D7CEC2] px-4 py-2 font-kulim text-xs font-medium text-[#845F42] transition hover:border-[#A15D4C] hover:bg-[#F0DFD9] hover:text-[#A15D4C]"
                          >
                            Delete
                          </button>

                        </div>
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td
                      colSpan={6}
                      className="px-5 py-12 text-center font-kulim text-sm text-[#845F42]"
                    >
                      No users found.
                    </td>
                  </tr>
                )}
              </tbody>

            </table>
          </div>

          {/* TABLE FOOTER */}
          <div className="flex flex-col gap-2 border-t border-[#D7CEC2] px-5 py-4 sm:flex-row sm:items-center sm:justify-between">

            <p className="font-kulim text-xs text-[#845F42]">
              Showing {filteredUsers.length} of {users.length} users
            </p>

            <p className="font-kulim text-xs tracking-wide text-[#A99580]">
              ELVORA ADMINISTRATION
            </p>

          </div>
        </section>

        {/* USER DETAILS MODAL */}
        {selectedUser && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4"
            onClick={() => setSelectedUser(null)}
          >
            <div
              className="w-full max-w-md border border-[#D7CEC2] bg-[#FAF7F0] p-6"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="mb-6 flex items-center justify-between">
                <h2 className="font-kulim text-xl font-semibold">
                  User Details
                </h2>

                <button
                  onClick={() => setSelectedUser(null)}
                  className="text-xl text-[#845F42] hover:text-[#241A14]"
                >
                  &times;
                </button>
              </div>

              <div className="mb-5 flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#D7CEC2] font-kulim text-lg font-semibold text-[#6E4728]">
                  {selectedUser.name.charAt(0)}
                </div>

                <div>
                  <p className="font-kulim font-semibold">
                    {selectedUser.name}
                  </p>
                  <p className="font-kulim text-sm text-[#845F42]">
                    {selectedUser.email}
                  </p>
                </div>
              </div>

              <div className="space-y-3 font-kulim text-sm">
                <p><span className="text-[#845F42]">User ID:</span> {selectedUser.id}</p>
                <p><span className="text-[#845F42]">Role:</span> {selectedUser.role}</p>
                <p><span className="text-[#845F42]">Status:</span> {selectedUser.status}</p>
                <p><span className="text-[#845F42]">Address:</span> {selectedUser.address}</p>
                <p><span className="text-[#845F42]">Pincode:</span> {selectedUser.pincode}</p>
                <p><span className="text-[#845F42]">Phone:</span> {selectedUser.number}</p>
              </div>

              <button
                onClick={() => setSelectedUser(null)}
                className="mt-7 w-full bg-[#845F42] py-3 font-kulim text-sm text-white transition hover:bg-[#6E4728]"
              >
                Close
              </button>
            </div>
          </div>
        )}

      </main>
    </div>
  );
}
