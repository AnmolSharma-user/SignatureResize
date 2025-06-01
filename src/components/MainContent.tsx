import React, { useState, useRef, useCallback, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Slider } from '@/components/ui/slider';
import { Input } from '@/components/ui/input';
import { Checkbox } from '@/components/ui/checkbox';
import { Label } from '@/components/ui/label';
import { Tooltip, TooltipContent, TooltipTrigger } from '@/components/ui/tooltip';
import { Upload, Download, Share, Lock, Unlock, Info, RotateCcw, RefreshCw } from 'lucide-react';
import { toast } from '@/hooks/use-toast';
import ContentArea from './ContentArea';

interface MainContentProps {
  activeTab: string;
}

const MainContent: React.FC<MainContentProps> = ({ activeTab }) => {
  const [uploadedImage, setUploadedImage] = useState<string | null>(null);
  const [processedImage, setProcessedImage] = useState<string | null>(null);
  const [removeBackground, setRemoveBackground] = useState(true);
  const [size, setSize] = useState([140]);
  const [customWidth, setCustomWidth] = useState('140');
  const [customHeight, setCustomHeight] = useState('60');
  const [lockAspectRatio, setLockAspectRatio] = useState(true);
  const [originalImageData, setOriginalImageData] = useState<{ width: number; height: number } | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const getPresetConfig = useCallback(() => {
    const path = window.location.pathname;
    
    if (path.includes('ssc-mts') || activeTab === 'ssc') {
      return { width: 140, height: 60, maxSize: '20KB', description: 'Meets SSC MTS signature requirements' };
    } else if (path.includes('pan-card') || activeTab === 'pan') {
      return { width: 132, height: 302, maxSize: '20KB', description: 'PAN Card compliant (35×80mm)' };
    } else if (path.includes('gate') || activeTab === 'gate') {
      return { width: 200, height: 100, maxSize: '50KB', description: 'Official GATE 2024 compliant' };
    } else if (path.includes('rrb')) {
      return { width: 200, height: 100, maxSize: '50KB', description: 'RRB examination compliant' };
    } else if (path.includes('uti') || activeTab === 'uti') {
      return { width: 150, height: 75, maxSize: '30KB', description: 'UTI/NPS form ready' };
    } else if (path.includes('20kb') || path.includes('10-to-20')) {
      return { width: 140, height: 60, maxSize: '20KB', description: 'Optimized for 20KB file size' };
    } else if (path.includes('50kb') || path.includes('50-kb')) {
      return { width: 200, height: 100, maxSize: '50KB', description: 'Optimized for 50KB file size' };
    } else if (activeTab === 'bank') {
      return { width: 160, height: 80, maxSize: '25KB', description: 'Bank form compatible' };
    }
    
    return { width: 140, height: 60, maxSize: 'Dynamic', description: 'Custom sizing available' };
  }, [activeTab]);

  const preset = getPresetConfig();

  // Auto-set dimensions based on preset when page loads or activeTab changes
  useEffect(() => {
    setCustomWidth(preset.width.toString());
    setCustomHeight(preset.height.toString());
    setSize([preset.width]);
  }, [preset.width, preset.height]);

  const loadImageToCanvas = useCallback((imageUrl: string, width: number, height: number) => {
    const canvas = canvasRef.current;
    if (!canvas) return null;

    const ctx = canvas.getContext('2d');
    if (!ctx) return null;

    const img = new Image();
    img.onload = () => {
      canvas.width = width;
      canvas.height = height;
      
      if (removeBackground) {
        // Create transparent background
        ctx.clearRect(0, 0, width, height);
        
        // Draw image with some basic background removal (simplified)
        ctx.globalCompositeOperation = 'source-over';
        ctx.drawImage(img, 0, 0, width, height);
        
        // Apply basic white background removal
        const imageData = ctx.getImageData(0, 0, width, height);
        const data = imageData.data;
        
        for (let i = 0; i < data.length; i += 4) {
          const r = data[i];
          const g = data[i + 1];
          const b = data[i + 2];
          
          // Remove white/light backgrounds (simple threshold)
          if (r > 240 && g > 240 && b > 240) {
            data[i + 3] = 0; // Make transparent
          }
        }
        
        ctx.putImageData(imageData, 0, 0);
      } else {
        // Keep background, draw normally
        ctx.fillStyle = 'white';
        ctx.fillRect(0, 0, width, height);
        ctx.drawImage(img, 0, 0, width, height);
      }
      
      // Update processed image
      setProcessedImage(canvas.toDataURL(removeBackground ? 'image/png' : 'image/jpeg', 0.9));
    };
    
    img.src = imageUrl;
  }, [removeBackground]);

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      processFile(file);
    }
  };

  const processFile = (file: File) => {
    if (!file.type.startsWith('image/')) {
      toast({
        title: "Invalid file type",
        description: "Please upload an image file (PNG, JPG, etc.)",
        variant: "destructive"
      });
      return;
    }

    const reader = new FileReader();
    reader.onload = (e) => {
      const imageUrl = e.target?.result as string;
      setUploadedImage(imageUrl);
      
      // Get original image dimensions
      const img = new Image();
      img.onload = () => {
        setOriginalImageData({ width: img.width, height: img.height });
        loadImageToCanvas(imageUrl, parseInt(customWidth), parseInt(customHeight));
      };
      img.src = imageUrl;
    };
    reader.readAsDataURL(file);
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

  // Reset function
  const handleReset = () => {
    setUploadedImage(null);
    setProcessedImage(null);
    setOriginalImageData(null);
    setCustomWidth(preset.width.toString());
    setCustomHeight(preset.height.toString());
    setSize([preset.width]);
    setRemoveBackground(true);
    setLockAspectRatio(true);
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
    toast({
      title: "Reset complete",
      description: "All settings have been reset to defaults.",
    });
  };

  // Re-upload function
  const handleReUpload = () => {
    fileInputRef.current?.click();
  };

  // Update processed image when dimensions or background settings change
  useEffect(() => {
    if (uploadedImage) {
      loadImageToCanvas(uploadedImage, parseInt(customWidth), parseInt(customHeight));
    }
  }, [uploadedImage, customWidth, customHeight, removeBackground, loadImageToCanvas]);

  // Handle dimension changes
  const handleWidthChange = (value: string) => {
    setCustomWidth(value);
    if (lockAspectRatio && originalImageData) {
      const aspectRatio = originalImageData.height / originalImageData.width;
      const newHeight = Math.round(parseInt(value) * aspectRatio);
      setCustomHeight(newHeight.toString());
    }
  };

  const handleHeightChange = (value: string) => {
    setCustomHeight(value);
    if (lockAspectRatio && originalImageData) {
      const aspectRatio = originalImageData.width / originalImageData.height;
      const newWidth = Math.round(parseInt(value) * aspectRatio);
      setCustomWidth(newWidth.toString());
    }
  };

  const handleSliderChange = (value: number[]) => {
    setSize(value);
    setCustomWidth(value[0].toString());
    if (lockAspectRatio && originalImageData) {
      const aspectRatio = originalImageData.height / originalImageData.width;
      const newHeight = Math.round(value[0] * aspectRatio);
      setCustomHeight(newHeight.toString());
    }
  };

  const downloadImage = (format: 'PNG' | 'JPG' | 'SVG') => {
    if (!processedImage) {
      toast({
        title: "No image processed",
        description: "Please upload and process a signature image first.",
        variant: "destructive"
      });
      return;
    }

    const canvas = canvasRef.current;
    if (!canvas) return;

    // Create download link
    const link = document.createElement('a');
    link.download = `signature_${parseInt(customWidth)}x${parseInt(customHeight)}.${format.toLowerCase()}`;
    
    if (format === 'SVG') {
      // Create SVG version
      const svgContent = `
        <svg width="${customWidth}" height="${customHeight}" xmlns="http://www.w3.org/2000/svg">
          <image href="${canvas.toDataURL('image/png', 1.0)}" width="${customWidth}" height="${customHeight}"/>
        </svg>
      `;
      const blob = new Blob([svgContent], { type: 'image/svg+xml' });
      link.href = URL.createObjectURL(blob);
    } else if (format === 'PNG') {
      link.href = canvas.toDataURL('image/png', 1.0);
    } else {
      link.href = canvas.toDataURL('image/jpeg', 0.9);
    }
    
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    toast({
      title: "Download started",
      description: `Your signature in ${format} format has been downloaded.`,
    });
  };

  const handleShare = () => {
    navigator.clipboard.writeText(window.location.href);
    toast({
      title: "Link copied!",
      description: "Share this tool with others.",
    });
  };

  const getEstimatedFileSize = () => {
    if (!processedImage) return 'N/A';
    
    // Rough estimation based on data URL length
    const sizeInBytes = processedImage.length * 0.75; // Base64 overhead
    const sizeInKB = Math.round(sizeInBytes / 1024);
    return `~${sizeInKB}KB`;
  };

  return (
    <div className="space-y-6">
      {/* Hidden canvas for processing */}
      <canvas ref={canvasRef} className="hidden" />
      
      {/* Preset Info Banner */}
      {activeTab !== 'main' && (
        <Card className="bg-blue-50 dark:bg-blue-900/20 border-blue-200 dark:border-blue-800">
          <CardContent className="p-4">
            <div className="flex items-center space-x-2">
              <Info className="h-5 w-5 text-blue-600" />
              <div>
                <p className="font-medium text-blue-900 dark:text-blue-100">
                  {preset.description}
                </p>
                <p className="text-sm text-blue-700 dark:text-blue-300">
                  Auto-configured: {preset.width}×{preset.height}px, Max size: {preset.maxSize}
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      )}

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center justify-between">
            <span>Dynamic Resizing Tool</span>
            <div className="flex gap-2">
              <Button variant="outline" size="sm" onClick={handleShare}>
                <Share className="h-4 w-4 mr-2" />
                Share Tool
              </Button>
              {uploadedImage && (
                <>
                  <Button variant="outline" size="sm" onClick={handleReUpload}>
                    <RefreshCw className="h-4 w-4 mr-2" />
                    Re-upload
                  </Button>
                  <Button variant="outline" size="sm" onClick={handleReset}>
                    <RotateCcw className="h-4 w-4 mr-2" />
                    Reset
                  </Button>
                </>
              )}
            </div>
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          {/* Upload Area */}
          <div
            className="border-2 border-dashed border-gray-300 dark:border-gray-600 rounded-lg p-8 text-center cursor-pointer hover:border-primary transition-colors"
            onDragOver={handleDragOver}
            onDrop={handleDrop}
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
              onChange={handleFileUpload}
              className="hidden"
            />
          </div>

          {/* Live Preview */}
          {uploadedImage && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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

              {/* Adjustment Panel */}
              <div>
                <h3 className="font-medium mb-3">Adjustment Panel</h3>
                <div className="space-y-4">
                  {/* Background Options */}
                  <div className="space-y-2">
                    <div className="flex items-center space-x-2">
                      <Checkbox
                        id="remove-bg"
                        checked={removeBackground}
                        onCheckedChange={(checked) => setRemoveBackground(checked === true)}
                      />
                      <Label htmlFor="remove-bg">Remove Background (PNG)</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox
                        id="keep-bg"
                        checked={!removeBackground}
                        onCheckedChange={(checked) => setRemoveBackground(checked !== true)}
                      />
                      <Label htmlFor="keep-bg">Keep Background (JPG)</Label>
                    </div>
                  </div>

                  {/* Size Slider */}
                  <div className="space-y-2">
                    <Label>Resize: {size[0]}px</Label>
                    <Slider
                      value={size}
                      onValueChange={handleSliderChange}
                      min={10}
                      max={500}
                      step={1}
                      className="w-full"
                    />
                  </div>

                  {/* Custom Dimensions */}
                  <div className="space-y-2">
                    <Label>Custom Dimensions</Label>
                    <div className="flex items-center space-x-2">
                      <Input
                        type="number"
                        placeholder="Width"
                        value={customWidth}
                        onChange={(e) => handleWidthChange(e.target.value)}
                        className="w-20"
                      />
                      <span className="text-sm text-gray-500">×</span>
                      <Input
                        type="number"
                        placeholder="Height"
                        value={customHeight}
                        onChange={(e) => handleHeightChange(e.target.value)}
                        className="w-20"
                      />
                      <span className="text-sm text-gray-500">px</span>
                    </div>
                  </div>

                  {/* Aspect Ratio Lock */}
                  <div className="flex items-center space-x-2">
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() => setLockAspectRatio(!lockAspectRatio)}
                        >
                          {lockAspectRatio ? <Lock className="h-4 w-4" /> : <Unlock className="h-4 w-4" />}
                        </Button>
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>{lockAspectRatio ? 'Unlock' : 'Lock'} Aspect Ratio</p>
                      </TooltipContent>
                    </Tooltip>
                    <Label>Lock Aspect Ratio</Label>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Download Buttons */}
          <div className="flex flex-wrap gap-3 pt-4 border-t">
            <Button onClick={() => downloadImage('PNG')} className="bg-green-600 hover:bg-green-700">
              <Download className="h-4 w-4 mr-2" />
              Download PNG
            </Button>
            <Button onClick={() => downloadImage('JPG')} variant="outline">
              <Download className="h-4 w-4 mr-2" />
              Download JPG
            </Button>
            <Button onClick={() => downloadImage('SVG')} variant="outline">
              <Download className="h-4 w-4 mr-2" />
              Download SVG
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Content Area - Moved below the main tool */}
      <ContentArea activeTab={activeTab} />
    </div>
  );
};

export default MainContent;
