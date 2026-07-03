import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ResumeButton } from "@/components/ResumeButton";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Bala Vignesh R | Full Stack Developer",
  description: "Portfolio of Bala Vignesh R, a Full Stack Developer specializing in Go, Java, Python, React, and System Design.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-zinc-950 text-zinc-50 relative selection:bg-amber-500/30 selection:text-amber-200">
        
        {/* Global Ambient Background */}
        <div className="fixed inset-0 z-[-1] pointer-events-none">
          {/* Faint Grid Pattern */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:32px_32px] [mask-image:radial-gradient(ellipse_80%_80%_at_50%_0%,#000_70%,transparent_110%)]"></div>
          
          {/* Glowing Orbs */}
          <div className="absolute left-0 right-0 top-[-10%] m-auto h-[400px] w-[400px] rounded-full bg-amber-500/20 blur-[120px]"></div>
          <div className="absolute bottom-[-10%] left-[-10%] h-[500px] w-[500px] rounded-full bg-blue-900/20 blur-[120px]"></div>
        </div>

        <Navbar />
        <main className="flex-1 pt-14">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
