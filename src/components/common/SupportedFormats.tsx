import { SUPPORTED_FORMATS } from '@/lib/constants'
import React from 'react'

const SupportedFormats = () => {
  return (
    <div>
         <div className="text-xs text-muted-foreground ">
          <p className="font-medium mb-1">Supported formats:</p>
          {Object.entries(SUPPORTED_FORMATS).map(([category, exts]) => (
            <div key={category} className="flex gap-2 ">
              <span className="text-gray-400">{category}:</span>
              <span>{exts.join(", ")}</span>
            </div>
          ))}
        </div>
    </div>
  )
}

export default SupportedFormats
