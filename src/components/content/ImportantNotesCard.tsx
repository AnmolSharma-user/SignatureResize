
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { AlertCircle, Zap, FileImage } from 'lucide-react';
import { useTranslation } from '../../contexts/TranslationContext';

export const ImportantNotesCard: React.FC = () => {
  const { translate } = useTranslation();

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2 text-orange-700 dark:text-orange-400">
          <AlertCircle className="h-5 w-5" />
          {translate('tips.importantNotes')}
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-3">
        <div className="flex items-start gap-2">
          <AlertCircle className="h-4 w-4 text-orange-500 mt-0.5 flex-shrink-0" />
          <span className="text-sm text-gray-700 dark:text-gray-300">
            Always verify requirements with official guidelines before submission
          </span>
        </div>
        <div className="flex items-start gap-2">
          <Zap className="h-4 w-4 text-blue-500 mt-0.5 flex-shrink-0" />
          <span className="text-sm text-gray-700 dark:text-gray-300">
            Our tool automatically optimizes images for faster processing
          </span>
        </div>
        <div className="flex items-start gap-2">
          <FileImage className="h-4 w-4 text-purple-500 mt-0.5 flex-shrink-0" />
          <span className="text-sm text-gray-700 dark:text-gray-300">
            Supports multiple formats: PNG, JPG, SVG for maximum compatibility
          </span>
        </div>
      </CardContent>
    </Card>
  );
};
