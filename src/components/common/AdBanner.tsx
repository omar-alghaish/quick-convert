'use client';
import { useEffect } from 'react';

declare global {
  interface Window {
    adsbygoogle: Array<Record<string, unknown>>;
  }
}

type AdUnitProps = {
  adSlot: string;
  layout?: string;
  layoutKey?: string;
  format?: string;
  responsive?: boolean;
};

export default function AdUnit({
  adSlot,
  layout,
  layoutKey,
  format = 'auto',
  responsive = false,
}: AdUnitProps) {
  useEffect(() => {
    // Initialize array if undefined
    window.adsbygoogle = window.adsbygoogle || [];
    // Push empty ad config (triggers ad load)
    window.adsbygoogle.push({});
  }, []);

  return (
    <div className="ad-container" style={{ minHeight: '100px', textAlign: 'center' }}>
      <ins
        className="adsbygoogle"
        style={{ display: 'block' }}
        data-ad-client="ca-pub-4613977372487688"
        data-ad-slot={adSlot}
        data-ad-layout={layout}
        data-ad-layout-key={layoutKey}
        data-ad-format={format}
        data-full-width-responsive={responsive.toString()}
      ></ins>
    </div>
  );
}