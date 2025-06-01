
import { useState, useRef, useCallback, useEffect } from 'react';
import { toast } from '@/hooks/use-toast';

interface OriginalImageData {
  width: number;
  height: number;
}

export const useSignatureProcessing = (activeTab: string) => {
  const [uploadedImage, setUploadedImage] = useState<string | null>(null);
  const [processedImage, setProcessedImage] = useState<string | null>(null);
  const [removeBackground, setRemoveBackground] = useState(true);
  const [size, setSize] = useState([140]);
  const [customWidth, setCustomWidth] = useState('140');
  const [customHeight, setCustomHeight] = useState('60');
  const [lockAspectRatio, setLockAspectRatio] = useState(true);
  const [originalImageData, setOriginalImageData] = useState<OriginalImageData | null>(null);
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
        ctx.clearRect(0, 0, width, height);
        ctx.globalCompositeOperation = 'source-over';
        ctx.drawImage(img, 0, 0, width, height);
        
        const imageData = ctx.getImageData(0, 0, width, height);
        const data = imageData.data;
        
        for (let i = 0; i < data.length; i += 4) {
          const r = data[i];
          const g = data[i + 1];
          const b = data[i + 2];
          
          if (r > 240 && g > 240 && b > 240) {
            data[i + 3] = 0;
          }
        }
        
        ctx.putImageData(imageData, 0, 0);
      } else {
        ctx.fillStyle = 'white';
        ctx.fillRect(0, 0, width, height);
        ctx.drawImage(img, 0, 0, width, height);
      }
      
      setProcessedImage(canvas.toDataURL(removeBackground ? 'image/png' : 'image/jpeg', 0.9));
    };
    
    img.src = imageUrl;
  }, [removeBackground]);

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
      
      const img = new Image();
      img.onload = () => {
        setOriginalImageData({ width: img.width, height: img.height });
        loadImageToCanvas(imageUrl, parseInt(customWidth), parseInt(customHeight));
      };
      img.src = imageUrl;
    };
    reader.readAsDataURL(file);
  };

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

  const handleReUpload = () => {
    fileInputRef.current?.click();
  };

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

  const getEstimatedFileSize = () => {
    if (!processedImage) return 'N/A';
    
    const sizeInBytes = processedImage.length * 0.75;
    const sizeInKB = Math.round(sizeInBytes / 1024);
    return `~${sizeInKB}KB`;
  };

  useEffect(() => {
    setCustomWidth(preset.width.toString());
    setCustomHeight(preset.height.toString());
    setSize([preset.width]);
  }, [preset.width, preset.height]);

  useEffect(() => {
    if (uploadedImage) {
      loadImageToCanvas(uploadedImage, parseInt(customWidth), parseInt(customHeight));
    }
  }, [uploadedImage, customWidth, customHeight, removeBackground, loadImageToCanvas]);

  return {
    uploadedImage,
    processedImage,
    removeBackground,
    setRemoveBackground,
    size,
    customWidth,
    customHeight,
    lockAspectRatio,
    setLockAspectRatio,
    originalImageData,
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
  };
};
