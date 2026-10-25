import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Kopi Nusantara | Cerita Rasa Indonesia",
  description: "Jelajahi kopi pilihan dari berbagai daerah Indonesia bersama Kopi Nusantara.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="id"><body><Navbar /><main>{children}</main><Footer /></body></html>;
}
