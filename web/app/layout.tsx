import type { Metadata } from "next";
import "./globals.css";

import { Work_Sans } from "next/font/google"; // or Inter, etc.
import "./globals.css";

const sansFont = Work_Sans({
  subsets: ["latin"],
  variable: "--font-sans", // <-- This passes the font as a CSS variable
});

export const metadata: Metadata = {
  title: "Gudam",
  description: "An inventory management app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${sansFont.variable} h-full antialiased`}>
      <body className="bg-surface text-on-surface antialiased">{children}</body>
    </html>
  );
}
