import AdUnit from "@/components/common/AdBanner";
import FileConverter from "@/components/common/FileConverter";

export const metadata = {
  title: "Convert 200+ File Formats Online Free | PDF, Video, Image Converter",
  description:
    "Instantly convert documents, images, videos, and audio between 200+ formats. Free online tool with no registration. Supports PDF, DOCX, MP4, MP3, and more.",
  keywords: [
    "file converter",
    "convert PDF to Word",
    "video converter",
    "free online converter",
  ],
  icons: {
    icon: ["/logo2.jpg"],
  },
  // openGraph: {
  //   images: "https://yourdomain.com/og-image.jpg",
  // },
  // alternates: {
  //   canonical: "https://yourdomain.com",
  // },
  robots: {
    index: true,
    follow: true,
  },
};

export default function Home() {
  return (
    <div className="bg-background w-full">
      <main className="grid grid-cols-1 xl:grid-cols-[300px_1fr_300px]">
        {/* Left Ad Unit */}
        <div className=" md:block h-max lg:min-h-screen sticky top-0">
          <AdUnit adSlot="1234567890" responsive={true} />
        </div>
        {/* Main Content */}
        <div className="h-max w-full border-l border-r lg:min-h-screen">
          <FileConverter />
        </div>

        {/* Right Ad Unit */}
        <div className=" md:block h-max lg:min-h-screen  sticky top-0">
          <AdUnit adSlot="1234567890" responsive={true} />
        </div>

      
      </main>
    </div>
  );
}