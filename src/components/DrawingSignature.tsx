
import React, { useRef, useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Switch } from '@/components/ui/switch';
import { ArrowLeft, Download, RotateCcw } from 'lucide-react';
import { toast } from '@/hooks/use-toast';

interface DrawingSignatureProps {
  onBack: () => void;
}

const DrawingSignature: React.FC<DrawingSignatureProps> = ({ onBack }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [isDrawing, setIsDrawing] = useState(false);
  const [width, setWidth] = useState('400');
  const [height, setHeight] = useState('200');
  const [strokeColor, setStrokeColor] = useState('#000000');
  const [strokeWidth, setStrokeWidth] = useState(2);
  const [includeBackground, setIncludeBackground] = useState(true);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const containerWidth = containerRef.current?.clientWidth || 400;
    const maxWidth = Math.min(parseInt(width), containerWidth - 32);
    
    canvas.width = maxWidth;
    canvas.height = parseInt(height);
    
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    ctx.fillStyle = 'white';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    ctx.strokeStyle = strokeColor;
    ctx.lineWidth = strokeWidth;
    ctx.lineCap = 'round';
    ctx.lineJoin = 'round';
  }, [width, height, strokeColor, strokeWidth]);

  const getEventPos = (e: React.MouseEvent<HTMLCanvasElement> | React.TouchEvent<HTMLCanvasElement>) => {
    const canvas = canvasRef.current;
    if (!canvas) return { x: 0, y: 0 };

    const rect = canvas.getBoundingClientRect();
    
    if ('touches' in e) {
      return {
        x: e.touches[0].clientX - rect.left,
        y: e.touches[0].clientY - rect.top
      };
    } else {
      return {
        x: e.clientX - rect.left,
        y: e.clientY - rect.top
      };
    }
  };

  const startDrawing = (e: React.MouseEvent<HTMLCanvasElement> | React.TouchEvent<HTMLCanvasElement>) => {
    e.preventDefault();
    setIsDrawing(true);
    const canvas = canvasRef.current;
    if (!canvas) return;

    const { x, y } = getEventPos(e);
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    ctx.beginPath();
    ctx.moveTo(x, y);
  };

  const draw = (e: React.MouseEvent<HTMLCanvasElement> | React.TouchEvent<HTMLCanvasElement>) => {
    e.preventDefault();
    if (!isDrawing) return;

    const canvas = canvasRef.current;
    if (!canvas) return;

    const { x, y } = getEventPos(e);
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    ctx.lineTo(x, y);
    ctx.stroke();
  };

  const stopDrawing = () => {
    setIsDrawing(false);
  };

  const clearCanvas = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    ctx.fillStyle = 'white';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
  };

  const downloadSignature = (format: 'png' | 'jpg' | 'svg') => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const link = document.createElement('a');
    link.download = `signature_${width}x${height}.${format}`;

    if (format === 'svg') {
      const svgContent = `
        <svg width="${width}" height="${height}" xmlns="http://www.w3.org/2000/svg">
          ${includeBackground ? `<rect width="100%" height="100%" fill="white"/>` : ''}
          <image href="${canvas.toDataURL('image/png')}" width="${width}" height="${height}"/>
        </svg>
      `;
      const blob = new Blob([svgContent], { type: 'image/svg+xml' });
      link.href = URL.createObjectURL(blob);
    } else if (format === 'png') {
      if (!includeBackground) {
        const ctx = canvas.getContext('2d');
        const imageData = ctx?.getImageData(0, 0, canvas.width, canvas.height);
        if (ctx && imageData) {
          const data = imageData.data;
          for (let i = 0; i < data.length; i += 4) {
            const r = data[i];
            const g = data[i + 1];
            const b = data[i + 2];
            if (r > 240 && g > 240 && b > 240) {
              data[i + 3] = 0;
            }
          }
          const tempCanvas = document.createElement('canvas');
          tempCanvas.width = canvas.width;
          tempCanvas.height = canvas.height;
          const tempCtx = tempCanvas.getContext('2d');
          tempCtx?.putImageData(imageData, 0, 0);
          link.href = tempCanvas.toDataURL('image/png');
        }
      } else {
        link.href = canvas.toDataURL('image/png');
      }
    } else {
      link.href = canvas.toDataURL('image/jpeg', 0.9);
    }

    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    toast({
      title: "Download started",
      description: `Your signature in ${format.toUpperCase()} format has been downloaded.`,
    });
  };

  return (
    <div className="max-w-7xl mx-auto">
      <div className="mb-4 sm:mb-6">
        <Button variant="outline" onClick={onBack} className="mb-4">
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back to Selection
        </Button>
        <h2 className="text-xl sm:text-2xl font-bold">Draw Your Signature</h2>
        <p className="text-gray-600 dark:text-gray-300 text-sm sm:text-base">Draw your signature in the canvas below</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-4 sm:gap-6">
        <div className="lg:col-span-3">
          <Card>
            <CardHeader>
              <CardTitle className="text-lg sm:text-xl">Drawing Canvas</CardTitle>
            </CardHeader>
            <CardContent>
              <div ref={containerRef} className="border-2 border-dashed border-gray-300 p-2 sm:p-4 rounded-lg bg-gray-50 overflow-hidden">
                <canvas
                  ref={canvasRef}
                  className="border border-gray-300 cursor-crosshair bg-white max-w-full touch-none"
                  onMouseDown={startDrawing}
                  onMouseMove={draw}
                  onMouseUp={stopDrawing}
                  onMouseLeave={stopDrawing}
                  onTouchStart={startDrawing}
                  onTouchMove={draw}
                  onTouchEnd={stopDrawing}
                />
              </div>
              <div className="flex gap-2 mt-4">
                <Button onClick={clearCanvas} variant="outline" size="sm">
                  <RotateCcw className="h-4 w-4 mr-2" />
                  Clear
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="space-y-4 sm:space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="text-base sm:text-lg">Canvas Settings</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3 sm:space-y-4">
              <div>
                <Label htmlFor="width" className="text-sm">Width (px)</Label>
                <Input
                  id="width"
                  type="number"
                  value={width}
                  onChange={(e) => setWidth(e.target.value)}
                  min="100"
                  max="800"
                  className="text-sm"
                />
              </div>
              <div>
                <Label htmlFor="height" className="text-sm">Height (px)</Label>
                <Input
                  id="height"
                  type="number"
                  value={height}
                  onChange={(e) => setHeight(e.target.value)}
                  min="50"
                  max="400"
                  className="text-sm"
                />
              </div>
              <div>
                <Label htmlFor="strokeColor" className="text-sm">Stroke Color</Label>
                <div className="flex gap-2">
                  <Input
                    id="strokeColor"
                    type="color"
                    value={strokeColor}
                    onChange={(e) => setStrokeColor(e.target.value)}
                    className="w-12 h-8 sm:w-16 sm:h-10"
                  />
                  <Input
                    type="text"
                    value={strokeColor}
                    onChange={(e) => setStrokeColor(e.target.value)}
                    placeholder="#000000"
                    className="text-sm"
                  />
                </div>
              </div>
              <div>
                <Label htmlFor="strokeWidth" className="text-sm">Stroke Width: {strokeWidth}px</Label>
                <Input
                  id="strokeWidth"
                  type="range"
                  min="1"
                  max="10"
                  value={strokeWidth}
                  onChange={(e) => setStrokeWidth(parseInt(e.target.value))}
                />
              </div>
              <div className="flex items-center space-x-2">
                <Switch
                  id="background"
                  checked={includeBackground}
                  onCheckedChange={setIncludeBackground}
                />
                <Label htmlFor="background" className="text-sm">Include Background</Label>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-base sm:text-lg">Download Options</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2 sm:space-y-3">
              <Button onClick={() => downloadSignature('png')} className="w-full text-sm" size="sm">
                <Download className="h-4 w-4 mr-2" />
                Download PNG
              </Button>
              <Button onClick={() => downloadSignature('jpg')} variant="outline" className="w-full text-sm" size="sm">
                <Download className="h-4 w-4 mr-2" />
                Download JPG
              </Button>
              <Button onClick={() => downloadSignature('svg')} variant="outline" className="w-full text-sm" size="sm">
                <Download className="h-4 w-4 mr-2" />
                Download SVG
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default DrawingSignature;