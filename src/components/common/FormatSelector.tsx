'use client';
import { Button } from '@/components/ui/button';
import { CONVERSION_MAP } from '@/lib/constants';
import { useState } from 'react';

export default function FormatSelector({ 
  fileType, 
  onSelect 
}: {
  fileType: string;
  onSelect: (value: string) => void;
}) {
  const [selectedFormat, setSelectedFormat] = useState<string>('');
  const conversionOptions = CONVERSION_MAP[fileType] || [];

  const handleSelect = (format: string) => {
    setSelectedFormat(format);
    onSelect(format);
  };

  return (
    <div className="flex flex-wrap gap-2">
      {conversionOptions.map(format => (
        <Button
          key={format}
          variant={selectedFormat === format ? 'default' : 'outline'}
          onClick={() => handleSelect(format)}
          className="  transition-all"
        >
          {format.toUpperCase()}
        </Button>
      ))}
    </div>
  );
}