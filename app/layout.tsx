import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Hero from "@/components/Hero";
import AboutUs from "@/components/AboutUs";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Dear Azure",
  description: "Dear Azure MHSSCE",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
        <Hero />
        <AboutUs />
      </body>
    </html>
  );
}
