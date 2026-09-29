import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Navbar from "@/component/Navbar";
import Footer from "@/component/Footer";

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
  title: "QuickBot | 24/7 AI Booking & WhatsApp Automation Manager",
  description: "Put your business bookings on autopilot. QuickBot automatically chats with your clients on WhatsApp and Instagram, shares prices, and syncs appointments directly to your live calendar dashboard.",
  keywords: ["AI Booking Bot", "WhatsApp Automation", "SaaS Dashboard", "Appointment Scheduler", "QuickBot AI"],
  openGraph: {
    title: "QuickBot | Put Your Business Bookings On Autopilot",
    description: "Link your WhatsApp in 2 minutes. Let AI manage your customers, share packages, and fill your live calendar dashboard 24/7.",
    type: "website",
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
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
