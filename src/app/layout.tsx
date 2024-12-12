import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Loket.com: Buat Event Gratis, Atur Acara & Jual Eventmu Sendiri",
  description: "Sekarang kamu bisa buat event, atur acara, jual tiket event sendiri, bikin undangan event secara online dan berkesempatan dipromosikan afiliasi Loket.com.",
  icons: {
    icon: 'https://assets.loket.com/images/favicon/favicon.ico'
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
