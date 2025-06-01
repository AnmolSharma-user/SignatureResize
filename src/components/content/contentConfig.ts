
import { useTranslation } from '../../contexts/TranslationContext';

export interface ContentConfig {
  title: string;
  specs: Array<{ label: string; value: string }>;
  tips: string[];
}

export const useContentConfig = (activeTab: string): ContentConfig => {
  const { translate } = useTranslation();

  const getTabContent = (): ContentConfig => {
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

  return getTabContent();
};
