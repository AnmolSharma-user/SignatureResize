
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Switch } from '@/components/ui/switch';
import { ArrowLeft, Download } from 'lucide-react';
import { toast } from '@/hooks/use-toast';

interface TypingSignatureProps {
  onBack: () => void;
}

const signatureFonts = [
  { name: 'Elegant Script', value: 'Dancing Script, cursive', preview: 'font-dancing' },
  { name: 'Classic Signature', value: 'Great Vibes, cursive', preview: 'font-great-vibes' },
  { name: 'Modern Script', value: 'Allura, cursive', preview: 'font-allura' },
  { name: 'Formal Script', value: 'Alex Brush, cursive', preview: 'font-alex-brush' },
  { name: 'Stylish Script', value: 'Satisfy, cursive', preview: 'font-satisfy' },
  { name: 'Handwritten', value: 'Kaushan Script, cursive', preview: 'font-kaushan' },
];

const TypingSignature: React.FC<TypingSignatureProps> = ({ onBack }) => {
  const [signatureText, setSignatureText] = useState('');
  const [selectedFont, setSelectedFont] = useState(signatureFonts[0]);
  const [fontSize, setFontSize] = useState(48);
  const [textColor, setTextColor] = useState('#000000');
  const [backgroundColor, setBgColor] = useState('#ffffff');
  const [includeBackground, setIncludeBackground] = useState(true);

  const downloadSignature = (format: 'png' | 'jpg' | 'svg') => {
    if (!signatureText.trim()) {
      toast({
        title: "Error",
        description: "Please enter your signature text first.",
        variant: "destructive"
      });
      return;
    }

    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    canvas.width = 600;
    canvas.height = 200;

    if (includeBackground) {
      ctx.fillStyle = backgroundColor;
      ctx.fillRect(0, 0, canvas.width, canvas.height);
    } else {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
    }

    ctx.fillStyle = textColor;
    ctx.font = `${fontSize}px ${selectedFont.value}`;
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillText(signatureText, canvas.width / 2, canvas.height / 2);

    const link = document.createElement('a');
    link.download = `signature_typed.${format}`;

    if (format === 'svg') {
      const svgContent = `
        <svg width="600" height="200" xmlns="http://www.w3.org/2000/svg">
          ${includeBackground ? `<rect width="100%" height="100%" fill="${backgroundColor}"/>` : ''}
          <text x="300" y="100" font-family="${selectedFont.value}" font-size="${fontSize}" 
                fill="${textColor}" text-anchor="middle" dominant-baseline="central">
            ${signatureText}
          </text>
        </svg>
      `;
      const blob = new Blob([svgContent], { type: 'image/svg+xml' });
      link.href = URL.createObjectURL(blob);
    } else if (format === 'png') {
      link.href = canvas.toDataURL('image/png');
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
        <h2 className="text-xl sm:text-2xl font-bold">Type Your Signature</h2>
        <p className="text-gray-600 dark:text-gray-300 text-sm sm:text-base">Enter your name and customize the font style</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-4 sm:gap-6">
        <div className="lg:col-span-3 space-y-4 sm:space-y-6">
          {/* Name Input - First */}
          <Card>
            <CardHeader>
              <CardTitle className="text-lg sm:text-xl">Enter Your Name</CardTitle>
            </CardHeader>
            <CardContent>
              <Input
                type="text"
                value={signatureText}
                onChange={(e) => setSignatureText(e.target.value)}
                placeholder="Enter your name"
                className="text-lg p-3 sm:p-4"
              />
            </CardContent>
          </Card>

          {/* Preview */}
          <Card>
            <CardHeader>
              <CardTitle className="text-lg sm:text-xl">Signature Preview</CardTitle>
            </CardHeader>
            <CardContent>
              <div 
                className="border-2 border-dashed border-gray-300 p-4 sm:p-8 rounded-lg text-center min-h-[150px] sm:min-h-[200px] flex items-center justify-center overflow-hidden"
                style={{ backgroundColor: includeBackground ? backgroundColor : 'transparent' }}
              >
                {signatureText ? (
                  <div 
                    style={{ 
                      fontFamily: selectedFont.value,
                      fontSize: `${Math.min(fontSize, window.innerWidth < 640 ? 32 : fontSize)}px`,
                      color: textColor,
                      lineHeight: '1.2',
                      wordBreak: 'break-word'
                    }}
                    className="max-w-full"
                  >
                    {signatureText}
                  </div>
                ) : (
                  <p className="text-gray-400">Enter your name to see the preview</p>
                )}
              </div>
            </CardContent>
          </Card>

          {/* Font Selection */}
          <Card>
            <CardHeader>
              <CardTitle className="text-lg sm:text-xl">Font Selection</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                {signatureFonts.map((font) => (
                  <div
                    key={font.name}
                    className={`p-3 sm:p-4 border-2 rounded-lg cursor-pointer transition-colors ${
                      selectedFont.name === font.name 
                        ? 'border-blue-500 bg-blue-50 dark:bg-blue-900/20' 
                        : 'border-gray-200 hover:border-gray-300'
                    }`}
                    onClick={() => setSelectedFont(font)}
                  >
                    <h4 className="font-medium mb-2 text-sm sm:text-base">{font.name}</h4>
                    <div 
                      className="text-lg sm:text-2xl truncate"
                      style={{ fontFamily: font.value }}
                    >
                      {signatureText || 'Your Name'}
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="space-y-4 sm:space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="text-base sm:text-lg">Settings</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3 sm:space-y-4">
              <div>
                <Label htmlFor="fontSize" className="text-sm">Font Size: {fontSize}px</Label>
                <Input
                  id="fontSize"
                  type="range"
                  min="24"
                  max="72"
                  value={fontSize}
                  onChange={(e) => setFontSize(parseInt(e.target.value))}
                />
              </div>
              <div>
                <Label htmlFor="textColor" className="text-sm">Text Color</Label>
                <div className="flex gap-2">
                  <Input
                    id="textColor"
                    type="color"
                    value={textColor}
                    onChange={(e) => setTextColor(e.target.value)}
                    className="w-12 h-8 sm:w-16 sm:h-10"
                  />
                  <Input
                    type="text"
                    value={textColor}
                    onChange={(e) => setTextColor(e.target.value)}
                    placeholder="#000000"
                    className="text-sm"
                  />
                </div>
              </div>
              <div>
                <Label htmlFor="backgroundColor" className="text-sm">Background Color</Label>
                <div className="flex gap-2">
                  <Input
                    id="backgroundColor"
                    type="color"
                    value={backgroundColor}
                    onChange={(e) => setBgColor(e.target.value)}
                    className="w-12 h-8 sm:w-16 sm:h-10"
                  />
                  <Input
                    type="text"
                    value={backgroundColor}
                    onChange={(e) => setBgColor(e.target.value)}
                    placeholder="#ffffff"
                    className="text-sm"
                  />
                </div>
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

export default TypingSignature;