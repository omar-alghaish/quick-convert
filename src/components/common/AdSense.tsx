import Script from "next/script";

type AdSenseTypes = {
  pId: string;
};

const AdSense = ({ pId }: AdSenseTypes) => {
  return (
    <>
      <Script
        async
        strategy="beforeInteractive"
        src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${pId}`}
        crossOrigin="anonymous"
      />
    </>
  );
};

export default AdSense;
