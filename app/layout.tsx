import type { Metadata } from "next";
import { Geist } from "next/font/google";
import Header from "@/components/header";
import "./globals.css";

const geistSans = Geist({
  display: "swap",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Puskesmas Alun Alun",
  description: "Website Profil Puskesmas Alun Alun Gresik",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id">
      <body
        className={`${geistSans.className} antialiased`}
      >
        <Header />
        {children}
      </body>
    </html>
  );
}
