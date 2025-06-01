
import React from 'react';
import { Button } from '@/components/ui/button';
import { Download } from 'lucide-react';
import { toast } from '@/hooks/use-toast';

interface SignatureDownloadButtonsProps {
  processedImage: string | null;
  canvasRef: React.RefObject<HTMLCanvasElement>;
  customWidth: string;
  customHeight: string;
}

const SignatureDownloadButtons: React.FC<SignatureDownloadButtonsProps> = ({
  processedImage,
  canvasRef,
  customWidth,
  customHeight
}) => {
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

    const link = document.createElement('a');
    link.download = `signature_${parseInt(customWidth)}x${parseInt(customHeight)}.${format.toLowerCase()}`;
    
    if (format === 'SVG') {
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

  return (
    <div className="flex flex-col sm:flex-row flex-wrap gap-3 pt-4 border-t">
      <Button onClick={() => downloadImage('PNG')} className="bg-green-600 hover:bg-green-700 w-full sm:w-auto">
        <Download className="h-4 w-4 mr-2" />
        Download PNG
      </Button>
      <Button onClick={() => downloadImage('JPG')} variant="outline" className="w-full sm:w-auto">
        <Download className="h-4 w-4 mr-2" />
        Download JPG
      </Button>
      <Button onClick={() => downloadImage('SVG')} variant="outline" className="w-full sm:w-auto">
        <Download className="h-4 w-4 mr-2" />
        Download SVG
      </Button>
    </div>
  );
};

export default SignatureDownloadButtons;
