import Script from "next/script";
import React from "react";

type AdSenseTypes = {
  pId: string;
};

const AdSense = ({ pId }: AdSenseTypes) => {
    console.log(pId)
  return (
    <Script
      async
      src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-4613977372487688`}
      crossOrigin="anonymous"
      strategy="afterInteractive"
    />
  );
};

export default AdSense;
