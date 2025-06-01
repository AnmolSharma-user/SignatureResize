
import React from 'react';

interface SignaturePreviewProps {
  processedImage: string | null;
  customWidth: string;
  customHeight: string;
  getEstimatedFileSize: () => string;
}

const SignaturePreview: React.FC<SignaturePreviewProps> = ({
  processedImage,
  customWidth,
  customHeight,
  getEstimatedFileSize
}) => {
  return (
    <div>
      <h3 className="font-medium mb-3">Live Preview</h3>
      <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg border-2 border-dashed border-gray-300 dark:border-gray-600">
        <div className="relative">
          {processedImage && (
            <img
              src={processedImage}
              alt="signature preview"
              className="max-w-full h-auto border border-gray-200"
              style={{
                width: `${customWidth}px`,
                height: `${customHeight}px`,
                objectFit: 'contain'
              }}
            />
          )}
          <div className="absolute inset-0 bg-gray-200 dark:bg-gray-700 opacity-30 pointer-events-none rounded"></div>
        </div>
        <p className="text-xs text-gray-500 mt-2">
          Document overlay preview • Size: {getEstimatedFileSize()}
        </p>
      </div>
    </div>
  );
};

export default SignaturePreview;
