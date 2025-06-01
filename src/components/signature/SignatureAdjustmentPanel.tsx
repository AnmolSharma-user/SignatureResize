
import React from 'react';
import { Checkbox } from '@/components/ui/checkbox';
import { Label } from '@/components/ui/label';
import { Slider } from '@/components/ui/slider';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Tooltip, TooltipContent, TooltipTrigger } from '@/components/ui/tooltip';
import { Lock, Unlock } from 'lucide-react';

interface SignatureAdjustmentPanelProps {
  removeBackground: boolean;
  setRemoveBackground: (value: boolean) => void;
  size: number[];
  handleSliderChange: (value: number[]) => void;
  customWidth: string;
  customHeight: string;
  handleWidthChange: (value: string) => void;
  handleHeightChange: (value: string) => void;
  lockAspectRatio: boolean;
  setLockAspectRatio: (value: boolean) => void;
}

const SignatureAdjustmentPanel: React.FC<SignatureAdjustmentPanelProps> = ({
  removeBackground,
  setRemoveBackground,
  size,
  handleSliderChange,
  customWidth,
  customHeight,
  handleWidthChange,
  handleHeightChange,
  lockAspectRatio,
  setLockAspectRatio
}) => {
  return (
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
  );
};

export default SignatureAdjustmentPanel;
