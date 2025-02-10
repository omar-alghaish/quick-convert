// // app/supported-formats/page.tsx
// import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
// import { Badge } from "@/components/ui/badge";
// import {
//   ImageIcon,
//   FileTextIcon,
//   MusicIcon,
//   FilmIcon,
//   ArchiveIcon,
//   TableIcon,
//   PresentationIcon,
//   BookIcon
// } from "lucide-react";
// import { CONVERSION_MAP } from "@/lib/constants";



// type ConversionCategory = {
//   title: string;
//   icon: JSX.Element;
//   items: [string, string[]][];
// };

// const categoryConfig: Record<string, { title: string; icon: JSX.Element }> = {
//   image: {
//     title: "Image Formats",
//     icon: <ImageIcon className="w-5 h-5" />,
//   },
//   document: {
//     title: "Document Formats",
//     icon: <FileTextIcon className="w-5 h-5" />,
//   },
//   audio: {
//     title: "Audio Formats",
//     icon: <MusicIcon className="w-5 h-5" />,
//   },
//   video: {
//     title: "Video Formats",
//     icon: <FilmIcon className="w-5 h-5" />,
//   },
//   archive: {
//     title: "Archive Formats",
//     icon: <ArchiveIcon className="w-5 h-5" />,
//   },
//   spreadsheet: {
//     title: "Spreadsheet Formats",
//     icon: <TableIcon className="w-5 h-5" />,
//   },
//   presentation: {
//     title: "Presentation Formats",
//     icon: <PresentationIcon className="w-5 h-5" />,
//   },
//   ebook: {
//     title: "Ebook Formats",
//     icon: <BookIcon className="w-5 h-5" />,
//   },
// };

// const groupConversions = () => {
//   const groups: Record<string, [string, string[]][]> = {};

//   Object.entries(CONVERSION_MAP).forEach(([mimeType, targets]) => {
//     const categoryKey = mimeType.split('/')[0];
//     const category = categoryConfig[categoryKey] || categoryConfig.document;
//     const formatName = mimeType.split('/').pop()?.toUpperCase() || mimeType;
    
//     if (!groups[categoryKey]) {
//       groups[categoryKey] = [];
//     }
//     groups[categoryKey].push([formatName, targets]);
//   });

//   return Object.entries(groups).map(([key, items]) => ({
//     ...categoryConfig[key],
//     items,
//   }));
// };

// export default function SupportedFormats() {
//   const categories = groupConversions();

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100/50 p-8">
//       <div className="max-w-7xl mx-auto space-y-12">
//         <div className="text-center space-y-4">
//           <h1 className="text-4xl md:text-5xl font-bold text-slate-900">
//             Supported Formats
//           </h1>
//           <p className="text-slate-600 text-lg max-w-2xl mx-auto">
//             Explore all supported conversion formats across documents, images, media, and more.
//           </p>
//         </div>

//         <div className="flex flex-col gap-6">
//           {categories.map((category) => (
//             <Card
//               key={category.title}
//               className="relative group bg-white/90 backdrop-blur-sm hover:shadow-xl transition-all duration-300 border border-slate-200 hover:border-slate-300"
//             >
//               <CardHeader className="flex flex-row items-center space-x-4 pb-3 border-b border-slate-100">
//                 <div className="p-2 rounded-lg bg-indigo-50 text-indigo-600">
//                   {category.icon}
//                 </div>
//                 <CardTitle className="text-xl font-semibold text-slate-900">
//                   {category.title}
//                 </CardTitle>
//               </CardHeader>

//               <CardContent className=" flex flex-wrap gap-4">
//                 {category.items.map(([format, targets]) => (
//                   <div key={format} className=" flex flex-wrap w-full">
//                     <div className="flex items-center gap-2">
//                       <span className="font-medium text-slate-900">{format}</span>
//                       <span className="text-slate-400">→</span>
//                     </div>
//                     <div className="flex flex-wrap gap-2 flex-1">
//                       {targets.map((target) => (
//                         <Badge
//                           key={target}
//                           variant="outline"
//                           className="px-2.5 flex-1 py-1 rounded-md bg-white border-slate-200 text-slate-700 hover:bg-slate-50 font-mono text-xs"
//                         >
//                           {target.toUpperCase()}
//                         </Badge>
//                       ))}
//                     </div>
//                   </div>
//                 ))}
//               </CardContent>
//             </Card>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// }


const page = () => {
  return (
    <div>
      test
    </div>
  )
}

export default page
