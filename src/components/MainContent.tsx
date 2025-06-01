
import React, { useState, useRef } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Slider } from '@/components/ui/slider';
import { Input } from '@/components/ui/input';
import { Checkbox } from '@/components/ui/checkbox';
import { Label } from '@/components/ui/label';
import { Tooltip, TooltipContent, TooltipTrigger } from '@/components/ui/tooltip';
import { Upload, Download, Share, Lock, Unlock, Info } from 'lucide-react';
import { toast } from '@/hooks/use-toast';

interface MainContentProps {
  activeTab: string;
}

const MainContent: React.FC<MainContentProps> = ({ activeTab }) => {
  const [uploadedImage, setUploadedImage] = useState<string | null>(null);
  const [removeBackground, setRemoveBackground] = useState(true);
  const [size, setSize] = useState([140]);
  const [customWidth, setCustomWidth] = useState('140');
  const [customHeight, setCustomHeight] = useState('60');
  const [lockAspectRatio, setLockAspectRatio] = useState(true);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setUploadedImage(e.target?.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    const file = e.dataTransfer.files[0];
    if (file && file.type.startsWith('image/')) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setUploadedImage(e.target?.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const getPresetConfig = () => {
    switch (activeTab) {
      case 'ssc':
        return { width: 140, height: 60, maxSize: '20KB', description: 'Meets SSC signature requirements' };
      case 'pan':
        return { width: 132, height: 302, maxSize: '20KB', description: 'PAN Card compliant (35×80mm)' };
      case 'gate':
        return { width: 200, height: 100, maxSize: '50KB', description: 'Official GATE 2024 compliant' };
      case 'uti':
        return { width: 150, height: 75, maxSize: '30KB', description: 'UTI/NPS form ready' };
      case 'bank':
        return { width: 160, height: 80, maxSize: '25KB', description: 'Bank form compatible' };
      default:
        return { width: 140, height: 60, maxSize: 'Dynamic', description: 'Custom sizing available' };
    }
  };

  const preset = getPresetConfig();

  const handleDownload = (format: string) => {
    if (!uploadedImage) {
      toast({
        title: "No image uploaded",
        description: "Please upload a signature image first.",
        variant: "destructive"
      });
      return;
    }
    
    toast({
      title: "Download started",
      description: `Your signature in ${format} format is being prepared.`,
    });
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
            <Button variant="outline" size="sm" onClick={handleShare}>
              <Share className="h-4 w-4 mr-2" />
              Share Tool
            </Button>
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
                    <img
                      src={uploadedImage}
                      alt="signature preview"
                      className="max-w-full h-auto"
                      style={{
                        width: `${customWidth}px`,
                        height: `${customHeight}px`,
                        filter: removeBackground ? 'brightness(1.1) contrast(1.1)' : 'none'
                      }}
                    />
                    <div className="absolute inset-0 bg-gray-200 dark:bg-gray-700 opacity-30 pointer-events-none rounded"></div>
                  </div>
                  <p className="text-xs text-gray-500 mt-2">Document overlay preview</p>
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
                      onValueChange={setSize}
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
                        onChange={(e) => setCustomWidth(e.target.value)}
                        className="w-20"
                      />
                      <span className="text-sm text-gray-500">×</span>
                      <Input
                        type="number"
                        placeholder="Height"
                        value={customHeight}
                        onChange={(e) => setCustomHeight(e.target.value)}
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
            <Button onClick={() => handleDownload('PNG')} className="bg-green-600 hover:bg-green-700">
              <Download className="h-4 w-4 mr-2" />
              Download PNG
            </Button>
            <Button onClick={() => handleDownload('JPG')} variant="outline">
              <Download className="h-4 w-4 mr-2" />
              Download JPG
            </Button>
            <Button onClick={() => handleDownload('SVG')} variant="outline" className="relative">
              <Download className="h-4 w-4 mr-2" />
              Download SVG
              <span className="absolute -top-2 -right-2 bg-orange-500 text-white text-xs px-1 rounded">Pro</span>
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default MainContent;
