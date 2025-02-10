import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/common/AppSidebar";
import Script from "next/script";
import Logo from "@/components/common/Logo";
import ThemeToggle from "@/components/common/ThemeToggle";
// import AdSense from "@/components/common/AdSense";
// import Head from "next/head";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Convert 200+ File Formats Online Free | PDF, Video, Image Converter",
  description:
    "Instantly convert documents, images, videos, and audio between 200+ formats. Free online tool with no registration. Supports PDF, DOCX, MP4, MP3, and more.",
  keywords: [
    "file converter",
    "convert PDF to Word",
    "video converter",
    "free online converter",
  ],
  other: {
    "google-adsense-account": "ca-pub-4613977372487688", // Add this line
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <Script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-4613977372487688"
          crossOrigin="anonymous"
          strategy="afterInteractive"
        />
        <meta name="google-adsense-account" content="ca-pub-4613977372487688" />
        <link rel="icon" type="image/png" href="/logo2.jpg" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased `}
      >
        <SidebarProvider>
          <AppSidebar />
          <div className="flex-1  h-max ">
            <header className="border-b w-full">
              <div className="flex gap-4 items-center justify-between p-4">
                <div className="flex items-center gap-4">
                  <SidebarTrigger className=" top-0" />
                  <Logo />
                </div>
                <ThemeToggle />
              </div>
            </header>
            <div>
                       {children}
   
            </div>
          </div>
        </SidebarProvider>
      </body>
    </html>
  );
}
