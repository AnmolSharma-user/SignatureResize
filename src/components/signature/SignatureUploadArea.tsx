
import React from 'react';
import { Upload } from 'lucide-react';

interface SignatureUploadAreaProps {
  fileInputRef: React.RefObject<HTMLInputElement>;
  onFileUpload: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onDrop: (e: React.DragEvent) => void;
  onDragOver: (e: React.DragEvent) => void;
}

const SignatureUploadArea: React.FC<SignatureUploadAreaProps> = ({
  fileInputRef,
  onFileUpload,
  onDrop,
  onDragOver
}) => {
  return (
    <div
      className="border-2 border-dashed border-gray-300 dark:border-gray-600 rounded-lg p-8 text-center cursor-pointer hover:border-primary transition-colors"
      onDragOver={onDragOver}
      onDrop={onDrop}
      onClick={() => fileInputRef.current?.click()}
    >
      <Upload className="h-12 w-12 text-gray-400 mx-auto mb-4" />
      <p className="text-lg font-medium text-gray-700 dark:text-gray-300 mb-2">
        Drag & drop signature or click to upload
      </p>
      <p className="text-sm text-gray-500 dark:text-gray-400">
        Supports PNG, JPG, SVG files up to 10MB
      </p>
      <input
        ref={fileInputRef}
        type="file"
        accept="image/*"
        onChange={onFileUpload}
        className="hidden"
      />
    </div>
  );
};

export default SignatureUploadArea;
