export const CONVERSION_OPTIONS = {
    image: ['jpg', 'png', 'webp', 'pdf'],
    document: ['pdf', 'docx', 'txt', 'html'],
    audio: ['mp3', 'wav', 'ogg'],
    video: ['mp4', 'mov', 'avi'],
    archive: ['zip', 'rar'],
    spreadsheet: ['csv', 'xlsx'],
    presentation: ['pptx', 'pdf']
  };
  
  export const getCategoryFromMime = (mimeType: string): keyof typeof CONVERSION_OPTIONS => {
    if (mimeType.startsWith('image/')) return 'image';
    if (mimeType.startsWith('audio/')) return 'audio';
    if (mimeType.startsWith('video/')) return 'video';
    if (mimeType.includes('spreadsheet')) return 'spreadsheet';
    if (mimeType.includes('presentation')) return 'presentation';
    if (mimeType.includes('zip')) return 'archive';
    return 'document';
  };