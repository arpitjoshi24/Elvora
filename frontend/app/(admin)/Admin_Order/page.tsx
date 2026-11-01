"use client";
import React, { useState } from "react";
import Link from "next/link";
import AdminSideBar from "../../components/AdminSideBar";
interface OrderItem {
  id: string;
  name: string;
  size: string;
  color: string;
  qty: number;
  price: string;
}

interface Order {
  id: string;
  customer: string;
  email: string;
  price: string;
  payment: string;
  status: "Delivered" | "Shipped" | "Processing" | "Cancelled";
  date: string;
  items: OrderItem[];
  address: string;
}

const initialOrders: Order[] = [
  {
    id: "#ELV001",
    customer: "Aarav Sharma",
    email: "aarav@gmail.com",
    price: "₹2,499",
    payment: "UPI",
    status: "Delivered",
    date: "Oct 28, 2026",
    address: "B-402, Green Glen Layout, Bellandur, Bengaluru 560103",
    items: [
      { id: "1", name: "Oatmeal Relaxed Linen Shirt", size: "L", color: "Oatmeal", qty: 1, price: "₹2,499" },
    ],
  },
  {
    id: "#ELV002",
    customer: "Meera Patel",
    email: "meera.patel@outlook.com",
    price: "₹4,890",
    payment: "Credit Card",
    status: "Shipped",
    date: "Oct 29, 2026",
    address: "Flat 12A, Sea View Towers, Worli, Mumbai 400018",
    items: [
      { id: "2", name: "Pleated Terracotta Trouser", size: "M", color: "Terracotta", qty: 1, price: "₹2,890" },
      { id: "3", name: "Structured Minimalist Tee", size: "M", color: "Charcoal", qty: 2, price: "₹2,000" },
    ],
  },
  {
    id: "#ELV003",
    customer: "Rohan Verma",
    email: "rohan.v@gmail.com",
    price: "₹1,899",
    payment: "UPI",
    status: "Processing",
    date: "Oct 30, 2026",
    address: "74 Defence Colony, New Delhi 110024",
    items: [
      { id: "4", name: "Everyday Combed Knit Polo", size: "XL", color: "Forest Green", qty: 1, price: "₹1,899" },
    ],
  },
  {
    id: "#ELV004",
    customer: "Ananya Deshmukh",
    email: "ananya.d@gmail.com",
    price: "₹6,150",
    payment: "Net Banking",
    status: "Processing",
    date: "Oct 30, 2026",
    address: "Villa 9, Palm Meadows, Whitefield, Bengaluru 560066",
    items: [
      { id: "5", name: "Handcrafted Cotton Trench Coat", size: "S", color: "Bone Khaki", qty: 1, price: "₹4,250" },
      { id: "6", name: "Tailored Wide-Leg Chino", size: "S", color: "Ivory", qty: 1, price: "₹1,900" },
    ],
  },
  {
    id: "#ELV005",
    customer: "Kavita Rao",
    email: "kavita.rao@yahoo.com",
    price: "₹2,100",
    payment: "COD",
    status: "Delivered",
    date: "Oct 27, 2026",
    address: "42 Jubilee Hills, Road No. 10, Hyderabad 500033",
    items: [
      { id: "7", name: "Monochrome Studio Shirt", size: "M", color: "Crisp White", qty: 1, price: "₹2,100" },
    ],
  },
  {
    id: "#ELV006",
    customer: "Kabir Sengupta",
    email: "kabir.sen@gmail.com",
    price: "₹3,450",
    payment: "UPI",
    status: "Cancelled",
    date: "Oct 26, 2026",
    address: "18 Salt Lake Sector 1, Kolkata 700064",
    items: [
      { id: "8", name: "Artisanal Ribbed Cardigan", size: "L", color: "Warm Rust", qty: 1, price: "₹3,450" },
    ],
  },
];

export default function Page() {
  const [ordersList, setOrdersList] = useState<Order[]>(initialOrders);
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState<string>("All");
  const [selectedOrder, setSelectedOrder] = useState<Order | null>(null);
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);

  // Filter orders by search & status
  const filteredOrders = ordersList.filter((order) => {
    const matchesSearch =
      order.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
      order.customer.toLowerCase().includes(searchTerm.toLowerCase()) ||
      order.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
      order.payment.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesStatus =
      statusFilter === "All" ? true : order.status.toLowerCase() === statusFilter.toLowerCase();

    return matchesSearch && matchesStatus;
  });

  // Cycle status for demo interactivity
  const cycleStatus = (id: string, e: React.MouseEvent) => {
    e.stopPropagation();
    const nextStatuses: Record<Order["status"], Order["status"]> = {
      Processing: "Shipped",
      Shipped: "Delivered",
      Delivered: "Processing",
      Cancelled: "Processing",
    };

    setOrdersList((prev) =>
      prev.map((o) => (o.id === id ? { ...o, status: nextStatuses[o.status] } : o))
    );
  };

  const getStatusBadge = (status: Order["status"]) => {
    switch (status) {
      case "Delivered":
        return "bg-[#241A14]/10 text-[#241A14] border border-[#241A14]/30";
      case "Shipped":
        return "bg-[#845F42]/10 text-[#845F42] border border-[#845F42]/30";
      case "Processing":
        return "bg-amber-100/70 text-amber-900 border border-amber-300";
      case "Cancelled":
        return "bg-stone-200 text-stone-600 border border-stone-300";
    }
  };

  const exportCSV = () => {
    const csvContent =
      "data:text/csv;charset=utf-8," +
      ["Order ID,Customer,Email,Price,Payment,Status,Date"]
        .concat(
          filteredOrders.map(
            (o) => `"${o.id}","${o.customer}","${o.email}","${o.price}","${o.payment}","${o.status}","${o.date}"`
          )
        )
        .join("\n");
    const encodedUri = encodeURI(csvContent);
    const link = document.createElement("a");
    link.setAttribute("href", encodedUri);
    link.setAttribute("download", `elvora_orders_${Date.now()}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="min-h-screen bg-[#EDE5D8]">
      <div className="min-h-screen bg-[#F3EBD7]">

        {/* ASIDE / SIDEBAR */}
        {/* MAIN ORDERS CONTENT */}
        <main className="flex flex-col bg-[#EDE5D8] p-6 md:p-10">
          {/* Header Bar */}
          <div className="mb-6 flex flex-wrap items-center justify-between gap-4 border-b border-[#241A14]/15 pb-6">
            <div>
              <p className="text-[11px] font-medium tracking-[1.5px] text-[#845F42]">
                ORDER MANAGEMENT
              </p>
              <h1 className="mt-1 font-krona text-2xl md:text-3xl tracking-tight text-[#241A14]">
                Customer Orders
              </h1>
              <p className="mt-2 font-kulim text-sm text-[#6E5A4B]">
                View and manage customer orders, payments, and delivery status.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-3">
              <div className="relative">
                <input
                  type="text"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  placeholder="Search by ID, email, method..."
                  className="w-64 rounded-sm border border-[#241A14]/20 bg-[#F3EBD7]/50 px-3.5 py-2.5 text-xs text-[#241A14] placeholder-[#241A14]/50 outline-none focus:border-[#845F42] focus:bg-white transition"
                />
                {searchTerm && (
                  <button
                    onClick={() => setSearchTerm("")}
                    className="absolute right-3 top-2.5 text-xs text-[#241A14]/60 hover:text-[#241A14]"
                  >
                    ✕
                  </button>
                )}
              </div>

              <button
                onClick={exportCSV}
                className="flex items-center gap-1.5 rounded-sm border border-[#241A14]/25 bg-white px-4 py-2.5 text-xs font-medium text-[#241A14]  transition-colors hover:bg-[#241A14] hover:text-white"
              >
                <span>↓ Export CSV</span>
              </button>
            </div>
          </div>

          {/* Quick Metrics Bar */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
            <div className="border-l-2 border-[#845F42] bg-transparent py-2 pl-4 pr-3">
              <p className="text-[10px] tracking-wider text-[#241A14]/60 font-medium">TOTAL ORDERS</p>
              <p className="text-2xl font-semibold text-[#241A14] mt-1">{ordersList.length}</p>
            </div>
            <div className="border-l-2 border-[#845F42] bg-transparent py-2 pl-4 pr-3">
              <p className="text-[10px] tracking-wider text-[#241A14]/60 font-medium">PROCESSING</p>
              <p className="text-2xl font-semibold text-amber-800 mt-1">
                {ordersList.filter((o) => o.status === "Processing").length}
              </p>
            </div>
            <div className="border-l-2 border-[#845F42] bg-transparent py-2 pl-4 pr-3">
              <p className="text-[10px] tracking-wider text-[#241A14]/60 font-medium">IN TRANSIT</p>
              <p className="text-2xl font-semibold text-[#845F42] mt-1">
                {ordersList.filter((o) => o.status === "Shipped").length}
              </p>
            </div>
            <div className="border-l-2 border-[#845F42] bg-transparent py-2 pl-4 pr-3">
              <p className="text-[10px] tracking-wider text-[#241A14]/60 font-medium">DELIVERED</p>
              <p className="text-2xl font-semibold text-[#241A14] mt-1">
                {ordersList.filter((o) => o.status === "Delivered").length}
              </p>
            </div>
          </div>

          {/* Filter Status Tabs */}
          <div className="mb-4 flex flex-wrap items-center gap-2">
            {["All", "Processing", "Shipped", "Delivered", "Cancelled"].map((tab) => {
              const count =
                tab === "All"
                  ? ordersList.length
                  : ordersList.filter((o) => o.status.toLowerCase() === tab.toLowerCase()).length;
              const isActive = statusFilter.toLowerCase() === tab.toLowerCase();

              return (
                <button
                  key={tab}
                  onClick={() => setStatusFilter(tab)}
                  className={`flex items-center gap-1.5 border-b-2 border-transparent px-3.5 py-2 text-xs font-medium transition-colors ${
                    isActive
                      ? "border-[#241A14] text-[#241A14] "
                      : "border-transparent text-[#6E5A4B] hover:text-[#241A14]"
                  }`}
                >
                  <span>{tab}</span>
                  <span
                    className={`rounded px-1.5 py-0.2 text-[10px] ${
                      isActive ? "bg-[#241A14]/10 text-[#241A14]" : "bg-[#241A14]/5 text-[#6E5A4B]"
                    }`}
                  >
                    {count}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Orders Table Container */}
          <div className="flex-1 overflow-hidden border-y border-[#241A14]/20 bg-transparent">
            <div className="overflow-x-auto">
              <table className="w-full min-w-[700px] text-left text-sm">
                <thead className="bg-[#241A14] text-[#F3EBD7]">
                  <tr>
                    <th className="px-5 py-3.5 text-xs font-medium tracking-wider">Order ID</th>
                    <th className="px-5 py-3.5 text-xs font-medium tracking-wider">Customer</th>
                    <th className="px-5 py-3.5 text-xs font-medium tracking-wider">Date</th>
                    <th className="px-5 py-3.5 text-xs font-medium tracking-wider">Price</th>
                    <th className="px-5 py-3.5 text-xs font-medium tracking-wider">Payment</th>
                    <th className="px-5 py-3.5 text-xs font-medium tracking-wider">Status</th>
                    <th className="px-5 py-3.5 text-xs font-medium tracking-wider text-right">Actions</th>
                  </tr>
                </thead>

                <tbody className="divide-y divide-[#241A14]/10 text-[#3A3028]">
                  {filteredOrders.length > 0 ? (
                    filteredOrders.map((order) => (
                      <tr
                        key={order.id}
                        onClick={() => setSelectedOrder(order)}
                        className="cursor-pointer transition-colors hover:bg-[#EDE5D8]"
                      >
                        <td className="px-5 py-4 font-mono font-medium text-[#241A14]">
                          {order.id}
                        </td>
                        <td className="px-5 py-4">
                          <p className="font-medium text-[#241A14]">{order.customer}</p>
                          <p className="text-xs text-[#8B7A6B]">{order.email}</p>
                        </td>
                        <td className="px-5 py-4 text-xs text-[#8B7A6B]">
                          {order.date}
                        </td>
                        <td className="px-5 py-4 font-semibold text-[#241A14]">
                          {order.price}
                        </td>
                        <td className="px-5 py-4">
                          <span className="rounded bg-[#F3EBD7] px-2.5 py-1 text-xs font-medium text-[#241A14]">
                            {order.payment}
                          </span>
                        </td>
                        <td className="px-5 py-4">
                          <button
                            onClick={(e) => cycleStatus(order.id, e)}
                            title="Click to cycle order status"
                            className={`rounded-sm px-3 py-1 text-xs font-medium transition  ${getStatusBadge(
                              order.status
                            )}`}
                          >
                            {order.status}
                          </button>
                        </td>
                        <td className="px-5 py-4 text-right">
                          <button
                            onClick={(e) => {
                              e.stopPropagation();
                              setSelectedOrder(order);
                            }}
                            className="rounded border border-[#241A14]/20 px-3 py-1 text-xs font-medium text-[#241A14] hover:bg-[#241A14] hover:text-white transition"
                          >
                            View Details
                          </button>
                        </td>
                      </tr>
                    ))
                  ) : (
                    <tr>
                      <td colSpan={7} className="py-16 text-center text-sm text-[#241A14]/60">
                        No orders found matching "{searchTerm}".
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          </div>

          {/* Quick Notice on bottom */}
          <div className="mt-4 text-xs text-[#241A14]/60">
            Showing {filteredOrders.length} of {ordersList.length} orders
          </div>
        </main>
      </div>

      {/* Order Details Modal */}
      {selectedOrder && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/45 p-4 ">
          <div className="w-full max-w-lg border border-[#241A14]/25 bg-[#F3EBD7] p-6 ">
            <div className="flex items-center justify-between border-b border-[#241A14]/15 pb-4">
              <div>
                <span className="font-mono text-sm font-semibold text-[#241A14]">
                  {selectedOrder.id}
                </span>
                <p className="text-xs text-[#8B7A6B]">Placed on {selectedOrder.date}</p>
              </div>
              <button
                onClick={() => setSelectedOrder(null)}
                className="rounded-sm p-1 text-lg text-[#241A14]/60 hover:text-[#241A14]"
              >
                ✕
              </button>
            </div>

            <div className="mt-4 space-y-4">
              <div>
                <p className="text-xs font-semibold tracking-wider text-[#241A14]">CUSTOMER INFORMATION</p>
                <p className="text-sm font-medium text-[#241A14] mt-1">{selectedOrder.customer}</p>
                <p className="text-xs text-[#8B7A6B]">{selectedOrder.email}</p>
                <p className="mt-2 text-xs text-[#8B7A6B] leading-relaxed">
                  <span className="font-semibold text-[#241A14]">Delivery:</span> {selectedOrder.address}
                </p>
              </div>

              <div className="border-t border-[#241A14]/10 pt-4">
                <p className="text-xs font-semibold tracking-wider text-[#241A14] mb-2">ORDER ITEMS</p>
                <div className="space-y-2">
                  {selectedOrder.items.map((item) => (
                    <div
                      key={item.id}
                      className="flex items-center justify-between border-b border-[#241A14]/10 py-3 text-xs"
                    >
                      <div>
                        <p className="font-medium text-[#241A14]">{item.name}</p>
                        <p className="text-[#8B7A6B]">
                          Size: {item.size} • Color: {item.color} • Qty: {item.qty}
                        </p>
                      </div>
                      <span className="font-semibold text-[#241A14]">{item.price}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="border-t border-[#241A14]/10 pt-4 flex items-center justify-between">
                <div>
                  <p className="text-xs text-[#8B7A6B]">Payment Method</p>
                  <p className="text-sm font-semibold text-[#241A14]">{selectedOrder.payment}</p>
                </div>
                <div className="text-right">
                  <p className="text-xs text-[#8B7A6B]">Total Amount</p>
                  <p className="text-xl font-bold text-[#845F42]">{selectedOrder.price}</p>
                </div>
              </div>
            </div>

            <div className="mt-6 flex justify-end gap-3 border-t border-[#241A14]/15 pt-4">
              <button
                onClick={() => setSelectedOrder(null)}
                className="rounded-sm border border-[#241A14]/20 px-4 py-2 text-xs font-medium text-[#241A14] hover:bg-[#EDE5D8]"
              >
                Close
              </button>
              <button
                onClick={() => {
                  alert(`Invoice for ${selectedOrder.id} generated.`);
                }}
                className="rounded-sm bg-[#241A14] px-4 py-2 text-xs font-medium text-white hover:bg-[#845F42] transition"
              >
                Print Invoice
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
