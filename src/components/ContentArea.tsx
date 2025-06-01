
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { CheckCircle, AlertCircle, FileImage, Zap } from 'lucide-react';
import { useTranslation } from '../contexts/TranslationContext';

interface ContentAreaProps {
  activeTab: string;
}

const ContentArea: React.FC<ContentAreaProps> = ({ activeTab }) => {
  const { translate } = useTranslation();

  const getTabContent = () => {
    switch (activeTab) {
      case 'ssc':
        return {
          title: translate('content.ssc.title'),
          specs: [
            { label: translate('spec.dimensions'), value: '140 x 60 pixels' },
            { label: translate('spec.fileSize'), value: 'Maximum 20KB' },
            { label: translate('spec.format'), value: 'JPG/PNG' },
            { label: translate('spec.background'), value: 'White preferred' }
          ],
          tips: [
            'Keep signature clear and bold',
            'Avoid complex backgrounds',
            'Ensure good contrast',
            'Test readability at small sizes'
          ]
        };
      case 'pan':
        return {
          title: translate('content.pan.title'),
          specs: [
            { label: translate('spec.dimensions'), value: '132 x 302 pixels' },
            { label: translate('spec.fileSize'), value: 'Maximum 20KB' },
            { label: translate('spec.format'), value: 'JPG/PNG' },
            { label: translate('spec.aspectRatio'), value: '35:80mm' }
          ],
          tips: [
            'Use recent photograph',
            'Signature must match documents',
            'Clear white background',
            'Professional appearance required'
          ]
        };
      case 'gate':
        return {
          title: translate('content.gate.title'),
          specs: [
            { label: translate('spec.dimensions'), value: '200 x 100 pixels' },
            { label: translate('spec.fileSize'), value: 'Maximum 50KB' },
            { label: translate('spec.format'), value: 'JPG/PNG' },
            { label: translate('spec.resolution'), value: 'High quality' }
          ],
          tips: [
            'Signature must be recent',
            'Use black or blue ink style',
            'Avoid artistic signatures',
            'Keep it simple and readable'
          ]
        };
      case 'rrb':
        return {
          title: translate('content.rrb.title'),
          specs: [
            { label: translate('spec.dimensions'), value: '200 x 100 pixels' },
            { label: translate('spec.fileSize'), value: 'Maximum 50KB' },
            { label: translate('spec.format'), value: 'JPG/PNG' },
            { label: translate('spec.quality'), value: 'Clear and sharp' }
          ],
          tips: [
            'Follow RRB guidelines strictly',
            'Use consistent signature style',
            'Ensure proper lighting in scan',
            'Avoid shadows or distortions'
          ]
        };
      case 'uti':
        return {
          title: translate('content.uti.title'),
          specs: [
            { label: translate('spec.dimensions'), value: '150 x 75 pixels' },
            { label: translate('spec.fileSize'), value: 'Maximum 30KB' },
            { label: translate('spec.format'), value: 'JPG/PNG' },
            { label: translate('spec.background'), value: 'White/Transparent' }
          ],
          tips: [
            'Signature for financial documents',
            'Must match bank records',
            'Professional quality required',
            'Consistent with other forms'
          ]
        };
      case '10-20kb':
        return {
          title: translate('content.10-20kb.title'),
          specs: [
            { label: translate('spec.dimensions'), value: '140 x 60 pixels' },
            { label: translate('spec.fileSize'), value: '10-20KB range' },
            { label: translate('spec.format'), value: 'JPG/PNG' },
            { label: translate('spec.compression'), value: 'Optimized' }
          ],
          tips: [
            'Perfect for most government forms',
            'Balanced quality and file size',
            'Widely accepted format',
            'Good for online applications'
          ]
        };
      case '20kb':
        return {
          title: translate('content.20kb.title'),
          specs: [
            { label: translate('spec.dimensions'), value: '140 x 60 pixels' },
            { label: translate('spec.fileSize'), value: 'Maximum 20KB' },
            { label: translate('spec.format'), value: 'JPG/PNG' },
            { label: translate('spec.quality'), value: 'Standard' }
          ],
          tips: [
            'Standard size for most applications',
            'Good balance of quality and size',
            'Compatible with most systems',
            'Recommended for online forms'
          ]
        };
      case '50kb':
        return {
          title: translate('content.50kb.title'),
          specs: [
            { label: translate('spec.dimensions'), value: '200 x 100 pixels' },
            { label: translate('spec.fileSize'), value: 'Maximum 50KB' },
            { label: translate('spec.format'), value: 'JPG/PNG' },
            { label: translate('spec.quality'), value: 'High' }
          ],
          tips: [
            'Higher quality for detailed signatures',
            'Good for professional applications',
            'Larger file size allows more detail',
            'Suitable for print applications'
          ]
        };
      default:
        return {
          title: 'General Signature Resize Guidelines',
          specs: [
            { label: translate('spec.dimensions'), value: 'Variable' },
            { label: translate('spec.fileSize'), value: 'Optimized' },
            { label: translate('spec.format'), value: 'JPG/PNG/SVG' },
            { label: translate('spec.quality'), value: 'High resolution' }
          ],
          tips: [
            'Choose appropriate dimensions',
            'Maintain aspect ratio',
            'Optimize file size',
            'Test across devices'
          ]
        };
    }
  };

  const content = getTabContent();

  return (
    <div className="space-y-6 mt-8">
      <Card className="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 border-blue-200 dark:border-blue-800">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-blue-900 dark:text-blue-100">
            <FileImage className="h-5 w-5" />
            {content.title}
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
            {content.specs.map((spec, index) => (
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

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-green-700 dark:text-green-400">
              <CheckCircle className="h-5 w-5" />
              {translate('tips.bestPractices')}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2">
              {content.tips.map((tip, index) => (
                <li key={index} className="flex items-start gap-2">
                  <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                  <span className="text-sm text-gray-700 dark:text-gray-300">{tip}</span>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>

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
      </div>

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
    </div>
  );
};

export default ContentArea;
