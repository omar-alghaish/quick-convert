'use client';
import { Button } from '@/components/ui/button';
import { CONVERSION_MAP } from '@/lib/constants';
import { useState } from 'react';
import { Input } from '../ui/input';

export default function FormatSelector({ 
  fileType, 
  onSelect 
}: {
  fileType: string;
  onSelect: (value: string) => void;
}) {
  const [selectedFormat, setSelectedFormat] = useState<string>('');
  const [searchQuery, setSearchQuery] = useState<string>('');
  
  const conversionOptions = CONVERSION_MAP[fileType] || [];
  
  // Filter options based on search query
  const filteredConversionOptions = conversionOptions.filter(format =>
    format.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };

  const handleSelect = (format: string) => {
    setSelectedFormat(format);
    onSelect(format);
  };

  return (
    <div className="flex flex-col gap-4">
      <Input 
        placeholder='Search for format'
        value={searchQuery}
        onChange={handleSearch}
      />
      <div className="flex flex-wrap gap-2">
        {filteredConversionOptions.map(format => (
          <Button
            key={format}
            variant={selectedFormat === format ? 'default' : 'outline'}
            onClick={() => handleSelect(format)}
            className="transition-all"
          >
            {format.toUpperCase()}
          </Button>
        ))}
        {filteredConversionOptions.length === 0 && (
          <div className="text-muted-foreground text-sm w-full text-center">
            No formats found matching &quot;{searchQuery}&quot;
          </div>
        )}
      </div>
    </div>
  );
}