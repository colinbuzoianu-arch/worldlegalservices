import type { Metadata } from "next";
import "./globals.css";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "World Legal Services — Rethinking the Rules That Govern Us",
  description: "An independent platform examining law, artificial intelligence, and the future of governance — from a Central European perspective.",
  openGraph: {
    title: "World Legal Services",
    description: "Rethinking the Rules That Govern Us",
    url: "https://worldlegalservices.com",
    siteName: "World Legal Services",
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Nav />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
