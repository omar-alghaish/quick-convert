'use client';
import { FiClock, FiDownload } from 'react-icons/fi';

interface Conversion {
  originalName: string;
  fromFormat: string;
  toFormat: string;
  downloadUrl: string;
}

export default function ConversionHistory({ conversions }: { conversions: Array<Conversion> }) {
  return (
    <div className="conversion-history  p-4">
      <h3 className="history-title flex items-center py-4 text-xl"><FiClock className="mr-2" /> Recent Conversions</h3>
      <ul className="history-list space-y-2">
        {conversions.map((conv, index) => (
          <li key={index} className="history-item flex justify-between bg-card p-5 rounded-md">
            <span className="file-name">{conv.originalName}</span>
            <span className="conversion-details flex gap-2 items-center">
              {conv.fromFormat} → {conv.toFormat}
              <a href={conv.downloadUrl} download className="download-link">
                <FiDownload className="ml-2" />
              </a>
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}
