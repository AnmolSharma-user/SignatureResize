
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { FileImage } from 'lucide-react';
import { useTranslation } from '../../contexts/TranslationContext';

interface SpecificationCardProps {
  title: string;
  specs: Array<{ label: string; value: string }>;
}

export const SpecificationCard: React.FC<SpecificationCardProps> = ({ title, specs }) => {
  const { translate } = useTranslation();

  return (
    <Card className="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 border-blue-200 dark:border-blue-800">
      <CardHeader>
        <CardTitle className="flex items-center gap-2 text-blue-900 dark:text-blue-100">
          <FileImage className="h-5 w-5" />
          {title}
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
          {specs.map((spec, index) => (
            <div key={index} className="text-center">
              <div className="bg-white dark:bg-slate-800 rounded-lg p-3 border border-blue-200 dark:border-blue-700">
                <p className="text-xs text-gray-600 dark:text-gray-400 mb-1">{spec.label}</p>
                <p className="font-semibold text-blue-900 dark:text-blue-100">{spec.value}</p>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};
