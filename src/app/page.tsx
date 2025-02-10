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
    <div className="bg-background  w-full">
      <main className="flex gap-4 flex-wrap">
      <div className="w-[100vw] md:w-[300px] h-max  md:h-full md:md:min-h-screen">
      <AdUnit adSlot="1234567890" responsive={true} />
        </div>
        <div className="flex-1  border-l border-r  md:min-h-screen">
          <FileConverter />
        </div>

        <div className="w-[100vw] md:w-[300px] h-max md:h-full md:md:min-h-screen">
          <AdUnit adSlot="1234567890" responsive={true} />
        </div>
      </main>
    </div>
  );
}
