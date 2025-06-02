
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Share, RefreshCw, RotateCcw } from 'lucide-react';
import { toast } from '@/hooks/use-toast';
import ContentArea from './ContentArea';
import PresetInfoBanner from './signature/PresetInfoBanner';
import SignatureUploadArea from './signature/SignatureUploadArea';
import SignaturePreview from './signature/SignaturePreview';
import SignatureAdjustmentPanel from './signature/SignatureAdjustmentPanel';
import SignatureDownloadButtons from './signature/SignatureDownloadButtons';
import { useSignatureProcessing } from '@/hooks/useSignatureProcessing';

interface MainContentProps {
  activeTab: string;
}

const MainContent: React.FC<MainContentProps> = ({ activeTab }) => {
  const {
    uploadedImage,
    processedImage,
    removeBackground,
    setRemoveBackground,
    size,
    customWidth,
    customHeight,
    lockAspectRatio,
    setLockAspectRatio,
    fileInputRef,
    canvasRef,
    preset,
    processFile,
    handleReset,
    handleReUpload,
    handleWidthChange,
    handleHeightChange,
    handleSliderChange,
    getEstimatedFileSize
  } = useSignatureProcessing(activeTab);

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      processFile(file);
    }
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    const file = e.dataTransfer.files[0];
    if (file) {
      processFile(file);
    }
  };

  const handleShare = () => {
    navigator.clipboard.writeText(window.location.href);
    toast({
      title: "Link copied!",
      description: "Share this tool with others.",
    });
  };

  return (
    <div className="space-y-6">
      {/* Hidden canvas for processing */}
      <canvas ref={canvasRef} className="hidden" />
      
      {/* Preset Info Banner */}
      <PresetInfoBanner activeTab={activeTab} preset={preset} />

      <Card>
        <CardHeader>
          <CardTitle className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
            <span>Signature Resize</span>
            <div className="flex flex-col sm:flex-row gap-2">
              <Button variant="outline" size="sm" onClick={handleShare} className="w-full sm:w-auto">
                <Share className="h-4 w-4 mr-2" />
                Share Tool
              </Button>
              {uploadedImage && (
                <div className="flex flex-col sm:flex-row gap-2">
                  <Button variant="outline" size="sm" onClick={handleReUpload} className="w-full sm:w-auto">
                    <RefreshCw className="h-4 w-4 mr-2" />
                    Re-upload
                  </Button>
                  <Button variant="outline" size="sm" onClick={handleReset} className="w-full sm:w-auto">
                    <RotateCcw className="h-4 w-4 mr-2" />
                    Reset
                  </Button>
                </div>
              )}
            </div>
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          {/* Upload Area */}
          <SignatureUploadArea
            fileInputRef={fileInputRef}
            onFileUpload={handleFileUpload}
            onDrop={handleDrop}
            onDragOver={handleDragOver}
          />

          {/* Live Preview */}
          {uploadedImage && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <SignaturePreview
                processedImage={processedImage}
                customWidth={customWidth}
                customHeight={customHeight}
                getEstimatedFileSize={getEstimatedFileSize}
              />

              {/* Adjustment Panel */}
              <SignatureAdjustmentPanel
                removeBackground={removeBackground}
                setRemoveBackground={setRemoveBackground}
                size={size}
                handleSliderChange={handleSliderChange}
                customWidth={customWidth}
                customHeight={customHeight}
                handleWidthChange={handleWidthChange}
                handleHeightChange={handleHeightChange}
                lockAspectRatio={lockAspectRatio}
                setLockAspectRatio={setLockAspectRatio}
              />
            </div>
          )}

          {/* Download Buttons */}
          <SignatureDownloadButtons
            processedImage={processedImage}
            canvasRef={canvasRef}
            customWidth={customWidth}
            customHeight={customHeight}
          />
        </CardContent>
      </Card>

      {/* Content Area - Moved below the main tool */}
      <ContentArea activeTab={activeTab} />
    </div>
  );
};

export default MainContent;
