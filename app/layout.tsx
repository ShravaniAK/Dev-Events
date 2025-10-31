import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import LightRays from '../components/LightRays';
import Navbar from "@/components/Navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Dev-Event",
  description: "Hub of every dev event!",
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
        <Navbar/>
        <div className="absolute inset-0 top-0 z-[-1] min-h-screen">
        <LightRays
    raysOrigin="top-center-offset"
    raysColor="#5dfeca"
    raysSpeed={0.5}
    lightSpread={0.9}
    rayLength={1.4}
    followMouse={true}
    mouseInfluence={0.02}
    noiseAmount={0.0}
    distortion={0.01}
    className="custom-rays"
  />
        </div>
       <main>
       {children}
       </main>
     
      </body>
    </html>
  );
}
