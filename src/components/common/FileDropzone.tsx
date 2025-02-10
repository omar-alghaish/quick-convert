"use client";
import { useDropzone } from "react-dropzone";
import { FiUploadCloud } from "react-icons/fi";
import { SUPPORTED_FORMATS, MIME_TYPE_MAP } from "@/lib/constants";

export default function FileDropzone({
  onDrop,
}: {
  onDrop: (files: File[]) => void;
}) {
  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: Object.keys(MIME_TYPE_MAP).reduce(
      (acc: Record<string, string[]>, mime) => {
        const ext = MIME_TYPE_MAP[mime];
        const category = Object.entries(SUPPORTED_FORMATS).find(([, exts]) =>
          exts.includes(ext)
        )?.[0];

        if (category) {
          acc[mime] = [`.${ext}`];
        }
        return acc;
      },
      {}
    ),
    maxSize: 100 * 1024 * 1024,
    multiple: false,
    validator: (file) => {
      if (!MIME_TYPE_MAP[file.type]) {
        return {
          message: "Unsupported file type",
          code: "unsupported-file-type",
        }; // Include the code property
      }
      return null;
    },
  });

  return (
    <div {...getRootProps()} className="dropzone-container p-4">
      <input {...getInputProps()} />
      <div className="dropzone-content flex flex-col items-center ">
        <FiUploadCloud className="h-12 w-12 text-muted-foreground" />
        <p className="text-sm text-muted-foreground">
          {isDragActive ? "Drop file here" : "Drag & drop or click to select"}
        </p>
        {/* <div className="text-xs text-muted-foreground">
          <p className="font-medium mb-1">Supported formats:</p>
          {Object.entries(SUPPORTED_FORMATS).map(([category, exts]) => (
            <div key={category} className="flex gap-2">
              <span className="text-gray-400">{category}:</span>
              <span>{exts.join(", ")}</span>
            </div>
          ))}
        </div> */}
      </div>
    </div>
  );
}
