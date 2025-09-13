import type { Metadata } from "next";
import "./globals.css";
import { Header } from "@/components/Header";

export const metadata: Metadata = {
  title: "Flowers Delivery",
  description: "Application for ordering and delivering flowers",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="mx-auto">
        <Header />
        <main className="mx-auto max-w-[1200px] ">{children}</main>
      </body>
    </html>
  );
}
