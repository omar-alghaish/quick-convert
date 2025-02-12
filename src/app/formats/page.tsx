import AdUnit from "@/components/common/AdBanner";
import { Badge } from "@/components/ui/badge";
import { SUPPORTED_FORMATS } from "@/lib/constants";
const page = () => {
  return (
    <div className="grid grid-cols-1 xl:grid-cols-[300px_1fr_300px] py-6">
      {/* Left Ad Unit */}
      <div className=" md:block h-max lg:min-h-screen sticky top-0">
        <AdUnit adSlot="1234567890" responsive={true} />
      </div>
      <div>
        <div className=" space-y-2 py-4">
          <h1 className="text-4xl md:text-4xl font-bold ">Supported Formats</h1>
          <p className="text-md max-w-2xl ">
            Explore all supported conversion formats across documents, images,
            media, and more.
          </p>
        </div>
        <div className="flex flex-col gap-2">
          {Object.entries(SUPPORTED_FORMATS).map(([key, value], index) => {
            return (
              <div key={index} className="border p-4 space-y-2">
                <h1 className="text-lg font-bold">{key}</h1>
                <div className="flex flex-wrap gap-2">
                  {value.map((item, index) => {
                    return (
                      <div key={index}>
                        <Badge  variant="secondary">{item}</Badge>
                      </div>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Left Ad Unit */}
      <div className=" md:block h-max lg:min-h-screen sticky top-0">
        <AdUnit adSlot="1234567890" responsive={true} />
      </div>
    </div>
  );
};

export default page;
