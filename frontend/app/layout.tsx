import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Elvora",
  description: "Thoughtfully selected styles for everyday living.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="h-full antialiased">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Krona+One&family=Kulim+Park:ital,wght@0,200;0,300;0,400;0,600;0,700;1,300;1,400&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-full flex flex-col font-kulim" suppressHydrationWarning>{children}</body>
    </html>
  );
}
