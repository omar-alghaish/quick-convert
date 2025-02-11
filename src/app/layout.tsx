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
  title:
    "Quick Convert | Free Online File Converter | 100+ Formats Supported | Fast & Easy",
  description:
    "Free online file converter supporting 100+ format conversions. Convert PDF to Word, MP4 to MP3, JPG to PNG, and more with 1-click. No registration, unlimited conversions, and military-grade encryption.",
  keywords: [
    "quick convert",
    "file converter",
    "online file converter",
    "free file converter",
    "document converter",
    "image converter",
    "video converter",
    "audio converter",
    "ebook converter",
    "archive converter",
    "pdf converter",
    "word converter",
    "excel converter",
    "powerpoint converter",
    "image to pdf",
    "pdf to word",
    "word to pdf",
    "mp4 to mp3",
    "mp3 to wav",
    "jpg to png",
    "png to jpg",
    "video converter online",
    "audio converter online",
    "document conversion",
    "image conversion",
    "video conversion",
    "audio conversion",
    "file conversion",
    "convert files online",
    "free online conversion",
    "fast file converter",
    "easy file converter",
    "no registration file converter",
    "convert documents",
    "convert images",
    "convert videos",
    "convert audio",
    "200+ file formats",
    "pdf",
    "docx",
    "mp4",
    "mp3",
    "jpg",
    "png",
    "gif",
    "webp",
    "tiff",
    "avi",
    "mov",
    "flv",
    "webm",
    "ogg",
    "aac",
    "flac",
    "opus",
    "wma",
    "aiff",
    "zip",
    "rar",
    "7z",
    "tar",
    "epub",
    "mobi",
    "azw3",
    "csv",
    "xlsx",
    "ods",
    "pptx",
    "odp",
    "html",
    "txt",
    "rtf",
    "odt",
    "svg",
    "heif",
    "jp2",
    "pbm",
    "pgm",
    "ppm",
    "xpm",
    "tex",
    "ac3",
    "alac",
    "amr",
    "dts",
    "mp2",
    "ra",
    "speex",
    "midi",
  ],
  openGraph: {
    type: "website",
    url: "https://quick-convert-666.vercel.app",
    title:
      "Free Online File Converter - 100+ Format Support | Instant Conversion",
    description:
      "Convert documents, videos, images, and audio between 100+ formats instantly. Mobile-friendly, secure, and 100% free. Supports PDF, MP4, DOCX, PNG, MP3, and more!",
    images: [
      {
        url: "https://quick-convert-666.vercel.app/logo1.jpg",
        width: 1200,
        height: 630,
        alt: "Online File Conversion Interface",
      },
    ],
  },
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
            <div>{children}</div>
          </div>
        </SidebarProvider>
      </body>
    </html>
  );
}
