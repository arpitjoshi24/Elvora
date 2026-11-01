// Login / register pages: no store header or admin sidebar.
export default function AuthLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
