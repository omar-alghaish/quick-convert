'use client';
import { useState, useCallback, useMemo } from 'react';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { Label } from '@/components/ui/label';
import {  FiDownload, FiFile, FiXCircle } from 'react-icons/fi';
import { convertFile, downloadFile } from '@/lib/api';
import { 
  SUPPORTED_FORMATS, 
  MIME_TYPE_MAP, 
  // CONVERSION_MAP 
} from '@/lib/constants';
import FileDropzone from './FileDropzone';
import FormatSelector from './FormatSelector';
import ConversionHistory from './ConversionHistory';
import type { ConversionResult } from '@/types';

export default function FileConverter() {
  const [file, setFile] = useState<File | null>(null);
  const [targetFormat, setTargetFormat] = useState('');
  const [isConverting, setIsConverting] = useState(false);
  const [progress, setProgress] = useState(0);
  const [downloadInfo, setDownloadInfo] = useState<{ url: string; filename: string } | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [conversionHistory, setConversionHistory] = useState<ConversionResult[]>([]);

  // Handle file drop with validation
  const onDrop = useCallback((acceptedFiles: File[]) => {
    const newFile = acceptedFiles[0];
    if (!newFile) return;

    if (!MIME_TYPE_MAP[newFile.type]) {
      setError(`Unsupported file type: ${newFile.type}`);
      return;
    }

    setFile(newFile);
    setTargetFormat('');
    setError(null);
    setDownloadInfo(null);
  }, []);

  // Handle conversion process
  const handleConvert = async () => {
    if (!file || !targetFormat) return;

    try {
      setIsConverting(true);
      setError(null);
      setProgress(0);

      // Simulate progress updates
      const progressInterval = setInterval(() => {
        setProgress(prev => Math.min(prev + 10, 90));
      }, 500);

      // Perform actual conversion
      const result = await convertFile(file, targetFormat);
      clearInterval(progressInterval);
      setProgress(100);

      // Handle download
      const blob = await downloadFile(result.downloadUrl.split('/').pop()!);
      const downloadUrl = window.URL.createObjectURL(blob);
      const filename = `${file.name.replace(/\.[^/.]+$/, '')}_converted.${targetFormat}`;

      // Update state
      setDownloadInfo({ url: downloadUrl, filename });
      setConversionHistory(prev => [
        {
          originalName: file.name,
          convertedName: filename,
          fromFormat: MIME_TYPE_MAP[file.type],
          toFormat: targetFormat,
          downloadUrl,
          timestamp: Date.now()
        },
        ...prev.slice(0, 4) // Keep only last 5 conversions
      ]);

    } catch (err) {
      setError(err instanceof Error ? err.message : 'Conversion failed');
      setProgress(0);
    } finally {
      setIsConverting(false);
    }
  };

  // Get file category for display
  const fileCategory = useMemo(() => {
    if (!file) return '';
    const category = Object.entries(SUPPORTED_FORMATS).find(([, exts]) => 
      exts.includes(MIME_TYPE_MAP[file.type])
    )?.[0];
    return category ? `${category.charAt(0).toUpperCase()}${category.slice(1)}` : 'File';
  }, [file]);

  return (
    <div className=" p-6 space-y-8 border min-h-screen">
     <h1 className="text-3xl font-bold text-center mb-8">
          File Format Converter
        </h1>
      <FileDropzone onDrop={onDrop} />
      {file && (
        <div className="space-y-6">
          {/* File Info Section */}
          <div className="space-y-2">
            <Label className='text-xl'>Selected File</Label>
            <div className="flex flex-wrap gap-2 items-center justify-between p-4 bg-card rounded-lg border">
              <div className="flex items-center space-x-3">
                <FiFile className="h-5 w-5 text-muted-foreground" />
                <span className="font-medium truncate">{file.name}</span>
              </div>
              <div className="text-sm text-muted-foreground">
                <span className="mr-2">{fileCategory}</span>
                <span>{(file.size / 1024 / 1024).toFixed(2)} MB</span>
              </div>
            </div>
          </div>

          {/* Format Selection */}
          <div className="space-y-2">
            <Label className='text-xl'>Convert To</Label>
            <FormatSelector 
              fileType={file.type} 
              onSelect={setTargetFormat}
            />
          </div>

          {/* Conversion Progress */}
          {isConverting && (
            <div className="space-y-2">
              <Progress value={progress} className="h-2" />
              <p className="text-sm text-muted-foreground text-center">
                Converting... {Math.round(progress)}%
              </p>
            </div>
          )}

          {/* Error Display */}
          {error && (
            <div className="p-4 bg-destructive text-destructive-foreground rounded-lg flex items-center space-x-3">
              <FiXCircle className="h-5 w-5" />
              <p>{error}</p>
            </div>
          )}

        

          {/* Convert Button */}
          <Button
            onClick={handleConvert}
            disabled={isConverting || !targetFormat}
            className="w-full"
            size="lg"
          >
            {isConverting ? 'Converting...' : `Convert to ${targetFormat.toUpperCase()}`}
          </Button>

            {/* Download Section */}
            {downloadInfo && (
            <div className="p-4 bg-success/10 text-success-foreground rounded-lg text-center">
              <p className="mb-2">Conversion successful!</p>
              <a
                href={downloadInfo.url}
                download={downloadInfo.filename}
                className="inline-flex items-center gap-2 font-medium hover:underline"
              >
                <FiDownload className="h-5 w-5" />
                Download {downloadInfo.filename}
              </a>
            </div>
          )}

          {/* Conversion History */}
          <ConversionHistory conversions={conversionHistory} />
        </div>
      )}
    </div>
  );
}