
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Info } from 'lucide-react';

interface PresetInfoBannerProps {
  activeTab: string;
  preset: {
    description: string;
    width: number;
    height: number;
    maxSize: string;
  };
}

const PresetInfoBanner: React.FC<PresetInfoBannerProps> = ({ activeTab, preset }) => {
  if (activeTab === 'main') return null;

  return (
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
  );
};

export default PresetInfoBanner;
