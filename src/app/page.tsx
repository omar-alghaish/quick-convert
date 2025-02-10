import AdBanner from "@/components/common/AdBanner";
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
    <div className=" bg-background  w-full">
      <main className="flex flex-wrap">
        <div className="flex-1 min-w-[70%]">
          <FileConverter />
        </div>

        <div className="w-[300px]">
          <AdBanner
            dataAdSlot={"333333333"}
            dataAdFormat={"auto"}
            dataFullWidthResponsive={true}
          />
        </div>
      </main>
    </div>
  );
}
