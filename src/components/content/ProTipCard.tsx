
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

export const ProTipCard: React.FC = () => {
  return (
    <Card className="bg-yellow-50 dark:bg-yellow-900/20 border-yellow-200 dark:border-yellow-800">
      <CardContent className="p-4">
        <div className="flex items-center gap-2 mb-2">
          <Badge variant="outline" className="bg-yellow-100 dark:bg-yellow-900 text-yellow-800 dark:text-yellow-200">
            Pro Tip
          </Badge>
        </div>
        <p className="text-sm text-yellow-800 dark:text-yellow-200">
          For best results, scan your signature at high resolution (300 DPI) and then resize using our tool. 
          This ensures maximum quality and clarity in the final output.
        </p>
      </CardContent>
    </Card>
  );
};
