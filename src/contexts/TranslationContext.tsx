
import React, { createContext, useContext, useState, ReactNode } from 'react';

interface TranslationContextType {
  language: string;
  setLanguage: (lang: string) => void;
  translate: (key: string) => string;
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

// Hindi translations
const hindiTranslations = {
  'tab.main': 'मुख्य उपकरण',
  'tab.signature-resize-10-20kb': 'हस्ताक्षर रीसाइज़ 10 से 20 KB',
  'tab.signature-resize-20kb': 'हस्ताक्षर रीसाइज़ 20KB',
  'tab.ssc-mts': 'SSC MTS हस्ताक्षर रीसाइज़',
  'tab.pan-card': 'PAN कार्ड फोटो हस्ताक्षर रीसाइज़ टूल',
  'tab.signature-resize-50kb': 'हस्ताक्षर रीसाइज़ 50 KB',
  'tab.gate': 'GATE हस्ताक्षर रीसाइज़',
  'tab.rrb': 'RRB हस्ताक्षर रीसाइज़',
  'tab.uti': 'UTI फोटो हस्ताक्षर रीसाइज़',
  'content.ssc.title': 'SSC MTS हस्ताक्षर रीसाइज़ दिशानिर्देश',
  'content.pan.title': 'PAN कार्ड फोटो और हस्ताक्षर दिशानिर्देश',
  'content.gate.title': 'GATE हस्ताक्षर आवश्यकताएं',
  'content.rrb.title': 'RRB हस्ताक्षर विनिर्देश',
  'content.uti.title': 'UTI/NPS फॉर्म आवश्यकताएं',
  'content.10-20kb.title': '10-20KB हस्ताक्षर रीसाइज़ दिशानिर्देश',
  'content.20kb.title': '20KB हस्ताक्षर रीसाइज़ दिशानिर्देश',
  'content.50kb.title': '50KB हस्ताक्षर रीसाइज़ दिशानिर्देश',
  'spec.dimensions': 'आयाम',
  'spec.fileSize': 'फ़ाइल का आकार',
  'spec.format': 'प्रारूप',
  'spec.background': 'पृष्ठभूमि',
  'spec.aspectRatio': 'पक्ष अनुपात',
  'spec.resolution': 'रिज़ॉल्यूशन',
  'spec.quality': 'गुणवत्ता',
  'spec.compression': 'संपीड़न',
  'tips.bestPractices': 'सर्वोत्तम प्रथाएं',
  'tips.importantNotes': 'महत्वपूर्ण नोट्स'
};

interface TranslationProviderProps {
  children: ReactNode;
}

export const TranslationProvider: React.FC<TranslationProviderProps> = ({ children }) => {
  const [language, setLanguage] = useState('en');

  const translate = (key: string): string => {
    if (language === 'hi') {
      return hindiTranslations[key as keyof typeof hindiTranslations] || baseTranslations[key as keyof typeof baseTranslations] || key;
    }
    return baseTranslations[key as keyof typeof baseTranslations] || key;
  };

  return (
    <TranslationContext.Provider value={{ 
      language, 
      setLanguage, 
      translate
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
