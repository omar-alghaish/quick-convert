export interface ConversionResult {
    originalName: string;
    convertedName: string;
    fromFormat: string;
    toFormat: string;
    downloadUrl: string;
    timestamp: number;
  }
  
  export interface FileConversion {
    file: File;
    targetFormat: string;
    status: 'pending' | 'converting' | 'completed' | 'error';
    progress: number;
    error?: string;
  }