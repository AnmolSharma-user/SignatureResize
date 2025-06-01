
import React, { createContext, useContext, useState, ReactNode, useEffect } from 'react';
import { useGoogleTranslate } from '../hooks/useGoogleTranslate';

interface TranslationContextType {
  language: string;
  setLanguage: (lang: string) => void;
  translate: (key: string) => string;
  isTranslating: boolean;
  translationError: string | null;
  setApiKey: (key: string) => void;
  hasApiKey: boolean;
}

const TranslationContext = createContext<TranslationContextType | undefined>(undefined);

// Base English translations
const baseTranslations = {
  'tab.main': 'Main Tool',
  'tab.signature-resize-10-20kb': 'Signature Resize 10 to 20 KB',
  'tab.signature-resize-20kb': 'Signature Resize 20KB',
  'tab.ssc-mts': 'SSC MTS Signature Resize',
  'tab.pan-card': 'PAN Card Photo Signature Resize Tool',
  'tab.signature-resize-50kb': 'Signature Resize 50 KB',
  'tab.gate': 'GATE Signature Resize',
  'tab.rrb': 'RRB Signature Resize',
  'tab.uti': 'UTI Photo Signature Resize',
  'content.ssc.title': 'SSC MTS Signature Resize Guidelines',
  'content.pan.title': 'PAN Card Photo & Signature Guidelines',
  'content.gate.title': 'GATE Signature Requirements',
  'content.rrb.title': 'RRB Signature Specifications',
  'content.uti.title': 'UTI/NPS Form Requirements',
  'content.10-20kb.title': '10-20KB Signature Resize Guidelines',
  'content.20kb.title': '20KB Signature Resize Guidelines',
  'content.50kb.title': '50KB Signature Resize Guidelines',
  'spec.dimensions': 'Dimensions',
  'spec.fileSize': 'File Size',
  'spec.format': 'Format',
  'spec.background': 'Background',
  'spec.aspectRatio': 'Aspect Ratio',
  'spec.resolution': 'Resolution',
  'spec.quality': 'Quality',
  'spec.compression': 'Compression',
  'tips.bestPractices': 'Best Practices',
  'tips.importantNotes': 'Important Notes'
};

interface TranslationProviderProps {
  children: ReactNode;
}

export const TranslationProvider: React.FC<TranslationProviderProps> = ({ children }) => {
  const [language, setLanguage] = useState('en');
  const [translatedTexts, setTranslatedTexts] = useState<Record<string, string>>({});
  const { translateMultiple, setApiKey, hasApiKey, isTranslating, error } = useGoogleTranslate();

  // Translate all texts when language changes to Hindi
  useEffect(() => {
    const translateAllTexts = async () => {
      if (language === 'hi' && hasApiKey()) {
        const keys = Object.keys(baseTranslations);
        const englishTexts = Object.values(baseTranslations);
        
        try {
          const hindiTexts = await translateMultiple(englishTexts, 'hi', 'en');
          const translated: Record<string, string> = {};
          
          keys.forEach((key, index) => {
            translated[key] = hindiTexts[index];
          });
          
          setTranslatedTexts(translated);
        } catch (error) {
          console.error('Failed to translate texts:', error);
        }
      } else if (language === 'en') {
        setTranslatedTexts({});
      }
    };

    translateAllTexts();
  }, [language, hasApiKey, translateMultiple]);

  const translate = (key: string): string => {
    // If English or no API key, return base translation
    if (language === 'en' || !hasApiKey()) {
      return baseTranslations[key as keyof typeof baseTranslations] || key;
    }
    
    // If Hindi and we have translated text, return it
    if (language === 'hi' && translatedTexts[key]) {
      return translatedTexts[key];
    }
    
    // Fallback to base translation
    return baseTranslations[key as keyof typeof baseTranslations] || key;
  };

  return (
    <TranslationContext.Provider value={{ 
      language, 
      setLanguage, 
      translate, 
      isTranslating,
      translationError: error,
      setApiKey,
      hasApiKey: hasApiKey()
    }}>
      {children}
    </TranslationContext.Provider>
  );
};

export const useTranslation = () => {
  const context = useContext(TranslationContext);
  if (context === undefined) {
    throw new Error('useTranslation must be used within a TranslationProvider');
  }
  return context;
};
