
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { CheckCircle } from 'lucide-react';
import { useTranslation } from '../../contexts/TranslationContext';

interface TipsCardProps {
  tips: string[];
}

export const TipsCard: React.FC<TipsCardProps> = ({ tips }) => {
  const { translate } = useTranslation();

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2 text-green-700 dark:text-green-400">
          <CheckCircle className="h-5 w-5" />
          {translate('tips.bestPractices')}
        </CardTitle>
      </CardHeader>
      <CardContent>
        <ul className="space-y-2">
          {tips.map((tip, index) => (
            <li key={index} className="flex items-start gap-2">
              <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
              <span className="text-sm text-gray-700 dark:text-gray-300">{tip}</span>
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
};
