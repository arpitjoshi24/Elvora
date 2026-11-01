import AdminSideBar from "../components/AdminSideBar";

// Shared layout for every admin page: sidebar + content area.
export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-screen bg-[#F8F5F0]">
      <div className="w-64 shrink-0">
        <div className="sticky top-0 h-screen">
          <AdminSideBar />
        </div>
      </div>
      <div className="min-w-0 flex-1 p-8 md:p-10">{children}</div>
    </div>
  );
}
