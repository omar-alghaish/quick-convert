export const SUPPORTED_FORMATS = {
  IMAGE: ['jpg','jpeg','png','webp','gif','bmp','tiff','svg','ico','heic'],
  DOCUMENT: ['pdf','docx','doc','odt','rtf','txt','html','md','tex','epub','xlsx','pptx'],
  AUDIO: ['mp3','wav','ogg','aac','flac','m4a','wma','aiff'],
  VIDEO: ['mp4','mov','avi','mkv','webm','flv','wmv','mpeg','3gp','m4v'],
  ARCHIVE: ['zip','rar','7z','tar','gz','bz2'],
  SPREADSHEET: ['csv','xlsx','ods','tsv'],
  PRESENTATION: ['pptx','odp','ppt','key'],
  EBOOK: ['epub','mobi','azw3']
};

export const MIME_TYPE_MAP: Record<string, string> = {
  // Images
  'image/jpeg': 'jpg',
  'image/png': 'png',
  'image/webp': 'webp',
  'image/gif': 'gif',
  'image/bmp': 'bmp',
  'image/tiff': 'tiff',
  'image/svg+xml': 'svg',
  'image/x-icon': 'ico',
  'image/heic': 'heic',
  
  // Documents
  'application/pdf': 'pdf',
  'application/vnd.openxmlformats-officedocument.wordprocessingml.document': 'docx',
  'application/msword': 'doc',
  'application/vnd.oasis.opendocument.text': 'odt',
  'application/rtf': 'rtf',
  'text/plain': 'txt',
  'text/html': 'html',
  'text/markdown': 'md',
  'application/x-tex': 'tex',
  'application/epub+zip': 'epub',

  // Audio
  'audio/mpeg': 'mp3',
  'audio/wav': 'wav',
  'audio/ogg': 'ogg',
  'audio/aac': 'aac',
  'audio/flac': 'flac',
  'audio/x-m4a': 'm4a',
  'audio/x-ms-wma': 'wma',
  'audio/aiff': 'aiff',

  // Video
  'video/mp4': 'mp4',
  'video/quicktime': 'mov',
  'video/x-msvideo': 'avi',
  'video/x-matroska': 'mkv',
  'video/webm': 'webm',
  'video/x-flv': 'flv',
  'video/x-ms-wmv': 'wmv',
  'video/mpeg': 'mpeg',
  'video/3gpp': '3gp',
  'video/mp2t': 'm4v',

  // Archives
  'application/zip': 'zip',
  'application/x-rar-compressed': 'rar',
  'application/x-7z-compressed': '7z',
  'application/x-tar': 'tar',
  'application/gzip': 'gz',
  'application/x-bzip2': 'bz2',

  // Spreadsheets
  'text/csv': 'csv',
  'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet': 'xlsx',
  'application/vnd.oasis.opendocument.spreadsheet': 'ods',
  'text/tab-separated-values': 'tsv',

  // Presentations
  'application/vnd.openxmlformats-officedocument.presentationml.presentation': 'pptx',
  'application/vnd.oasis.opendocument.presentation': 'odp',
  'application/vnd.ms-powerpoint': 'ppt',
  'application/vnd.apple.keynote': 'key',

  // Ebooks
  // 'application/epub+zip': 'epub',
  'application/x-mobipocket-ebook': 'mobi',
  'application/vnd.amazon.ebook': 'azw3'
};

export const CONVERSION_MAP: Record<string, string[]> = {
  // Image Conversions
  'image/jpeg': ['png', 'webp', 'bmp', 'tiff', 'gif', 'jp2', 'pbm', 'pgm', 'ppm', 'xpm'],
  'image/png': ['jpeg', 'webp', 'bmp', 'tiff', 'gif', 'jp2', 'pbm', 'pgm', 'ppm', 'xpm'],
  'image/webp': ['jpeg', 'png', 'bmp', 'tiff', 'gif', 'jp2', 'pbm', 'pgm', 'ppm', 'xpm'],
  'image/bmp': ['jpeg', 'png', 'webp', 'tiff', 'gif', 'jp2', 'pbm', 'pgm', 'ppm', 'xpm'],
  'image/tiff': ['jpeg', 'png', 'webp', 'bmp', 'gif', 'jp2', 'pbm', 'pgm', 'ppm', 'xpm'],
  'image/gif': ['jpeg', 'png', 'webp', 'bmp', 'tiff', 'jp2', 'pbm', 'pgm', 'ppm', 'xpm'],
  'image/x-icon': ['jpeg', 'png', 'webp', 'bmp', 'tiff', 'gif', 'jp2', 'pbm', 'pgm', 'ppm', 'xpm'],
  'image/heif': ['jpeg', 'png', 'webp', 'bmp', 'tiff', 'gif', 'jp2', 'pbm', 'pgm', 'ppm', 'xpm'],
  'image/svg+xml': ['png', 'jpeg', 'webp', 'bmp', 'tiff', 'gif', 'jp2', 'pbm', 'pgm', 'ppm', 'xpm'],
  'image/jp2': ['jpeg', 'png', 'webp', 'bmp', 'tiff', 'gif', 'pbm', 'pgm', 'ppm', 'xpm'],
  'image/x-portable-bitmap': ['jpeg', 'png', 'webp', 'bmp', 'tiff', 'gif', 'jp2', 'pgm', 'ppm', 'xpm'],
  'image/x-portable-graymap': ['jpeg', 'png', 'webp', 'bmp', 'tiff', 'gif', 'jp2', 'pbm', 'ppm', 'xpm'],
  'image/x-portable-pixmap': ['jpeg', 'png', 'webp', 'bmp', 'tiff', 'gif', 'jp2', 'pbm', 'pgm', 'xpm'],
  'image/x-xpixmap': ['jpeg', 'png', 'webp', 'bmp', 'tiff', 'gif', 'jp2', 'pbm', 'pgm', 'ppm'],

  // Document Conversions
  'application/pdf': ['docx', 'txt', 'html', 'jpg', 'png', 'pptx', 'odt', 'rtf', 'epub'],
  'application/vnd.openxmlformats-officedocument.wordprocessingml.document': ['pdf', 'odt', 'rtf', 'txt', 'html', 'epub'],
  'application/msword': ['pdf', 'docx', 'odt', 'rtf'],
  'application/vnd.oasis.opendocument.text': ['pdf', 'docx', 'rtf', 'txt'],
  'application/rtf': ['pdf', 'docx', 'odt', 'txt'],
  'text/plain': ['pdf', 'docx', 'html', 'md'],
  'text/html': ['pdf', 'docx', 'txt', 'md'],
  'text/markdown': ['pdf', 'html', 'txt'],
  'application/x-tex': ['pdf', 'docx'],
  'application/epub+zip': ['pdf', 'mobi', 'azw3'],

  // Audio Conversions
 
    'audio/mpeg': ['wav', 'ogg', 'aac', 'flac', 'm4a', 'opus', 'wma', 'aiff', 'ac3', 'alac'],
    'audio/wav': [
      'mp3',
      'wav',
      'aac',
      'ogg',
      'flac',
      'alac',
      'opus',
      'wma',
      'aiff',
      'amr',
      'ac3',
      'dts',
      'mp2',
      'm4a',
      'ra',
      'speex',
      'midi',
    ],
    'audio/ogg': ['mp3', 'wav', 'aac', 'flac', 'm4a', 'opus', 'wma', 'aiff', 'ac3', 'alac'],
    'audio/aac': ['mp3', 'wav', 'ogg', 'flac', 'm4a', 'opus', 'wma', 'aiff', 'ac3', 'alac'],
    'audio/flac': ['mp3', 'wav', 'aac', 'm4a', 'ogg', 'opus', 'wma', 'aiff', 'ac3', 'alac'],
    'audio/x-m4a': ['mp3', 'wav', 'ogg', 'aac', 'flac', 'opus', 'wma', 'aiff', 'ac3', 'alac'],
    'audio/x-ms-wma': ['mp3', 'wav', 'ogg', 'aac', 'flac', 'm4a', 'opus', 'aiff', 'ac3', 'alac'],
    'audio/aiff': ['mp3', 'wav', 'ogg', 'aac', 'flac', 'm4a', 'opus', 'wma', 'ac3', 'alac'],
    'audio/opus': ['mp3', 'wav', 'ogg', 'aac', 'flac', 'm4a', 'wma', 'aiff', 'ac3', 'alac'],
    'audio/ac3': ['mp3', 'wav', 'ogg', 'aac', 'flac', 'm4a', 'opus', 'wma', 'aiff', 'alac'],
    'audio/alac': ['mp3', 'wav', 'ogg', 'aac', 'flac', 'm4a', 'opus', 'wma', 'aiff', 'ac3'],
    'audio/amr': ['mp3', 'wav', 'ogg', 'aac', 'flac', 'm4a', 'opus', 'wma', 'aiff', 'ac3', 'alac'],
    'audio/dts': ['mp3', 'wav', 'ogg', 'aac', 'flac', 'm4a', 'opus', 'wma', 'aiff', 'ac3', 'alac'],
    'audio/mp2': ['mp3', 'wav', 'ogg', 'aac', 'flac', 'm4a', 'opus', 'wma', 'aiff', 'ac3', 'alac'],
 
  

  // Video Conversions
  'video/mp4': ['mov', 'avi', 'gif', 'webm', 'mkv', 'mp3'],
  'video/quicktime': ['mp4', 'avi', 'webm'],
  'video/x-msvideo': ['mp4', 'mov', 'webm'],
  'video/x-matroska': ['mp4', 'mov', 'avi'],
  'video/webm': ['mp4', 'mov', 'avi'],
  'video/x-flv': ['mp4', 'mov'],
  'video/x-ms-wmv': ['mp4', 'avi'],
  'video/mpeg': ['mp4', 'mov'],
  'video/3gpp': ['mp4', 'mov'],
  'video/mp2t': ['mp4', 'mov'],

  // Archive Conversions
  'application/zip': ['tar', 'gz', '7z', 'rar'],
  'application/x-rar-compressed': ['zip', 'tar', '7z'],
  'application/x-7z-compressed': ['zip', 'tar', 'rar'],
  'application/x-tar': ['zip', 'gz', '7z'],
  'application/gzip': ['zip', 'tar'],
  'application/x-bzip2': ['zip', 'tar'],

  // Spreadsheet Conversions
  'text/csv': ['xlsx', 'ods', 'pdf', 'html'],
  'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet': ['csv', 'ods', 'pdf', 'html'],
  'application/vnd.oasis.opendocument.spreadsheet': ['xlsx', 'csv', 'pdf'],
  'text/tab-separated-values': ['csv', 'xlsx', 'ods'],

  // Presentation Conversions
  'application/vnd.openxmlformats-officedocument.presentationml.presentation': ['pdf', 'odp', 'ppt', 'jpg', 'png'],
  'application/vnd.oasis.opendocument.presentation': ['pptx', 'pdf', 'ppt'],
  'application/vnd.ms-powerpoint': ['pptx', 'pdf', 'odp'],
  'application/vnd.apple.keynote': ['pptx', 'pdf', 'png'],

  // Ebook Conversions
  // 'application/epub+zip': ['pdf', 'mobi', 'azw3'],
  'application/x-mobipocket-ebook': ['epub', 'pdf', 'azw3'],
  'application/vnd.amazon.ebook': ['epub', 'pdf', 'mobi'],


};