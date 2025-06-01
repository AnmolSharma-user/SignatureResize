
import React, { createContext, useContext, useState, ReactNode } from 'react';

interface TranslationContextType {
  language: string;
  setLanguage: (lang: string) => void;
  translate: (key: string) => string;
}

const TranslationContext = createContext<TranslationContextType | undefined>(undefined);

// Translation data
const translations = {
  en: {
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
  },
  hi: {
    'tab.main': 'मुख्य उपकरण',
    'tab.signature-resize-10-20kb': 'हस्ताक्षर आकार 10 से 20 KB',
    'tab.signature-resize-20kb': 'हस्ताक्षर आकार 20KB',
    'tab.ssc-mts': 'SSC MTS हस्ताक्षर आकार',
    'tab.pan-card': 'पैन कार्ड फोटो हस्ताक्षर आकार उपकरण',
    'tab.signature-resize-50kb': 'हस्ताक्षर आकार 50 KB',
    'tab.gate': 'GATE हस्ताक्षर आकार',
    'tab.rrb': 'RRB हस्ताक्षर आकार',
    'tab.uti': 'UTI फोटो हस्ताक्षर आकार',
    'content.ssc.title': 'SSC MTS हस्ताक्षर आकार दिशानिर्देश',
    'content.pan.title': 'पैन कार्ड फोटो और हस्ताक्षर दिशानिर्देश',
    'content.gate.title': 'GATE हस्ताक्षर आवश्यकताएं',
    'content.rrb.title': 'RRB हस्ताक्षर विनिर्देश',
    'content.uti.title': 'UTI/NPS फॉर्म आवश्यकताएं',
    'content.10-20kb.title': '10-20KB हस्ताक्षर आकार दिशानिर्देश',
    'content.20kb.title': '20KB हस्ताक्षर आकार दिशानिर्देश',
    'content.50kb.title': '50KB हस्ताक्षर आकार दिशानिर्देश',
    'spec.dimensions': 'आयाम',
    'spec.fileSize': 'फ़ाइल आकार',
    'spec.format': 'प्रारूप',
    'spec.background': 'पृष्ठभूमि',
    'spec.aspectRatio': 'अनुपात',
    'spec.resolution': 'रिज़ॉल्यूशन',
    'spec.quality': 'गुणवत्ता',
    'spec.compression': 'संपीड़न',
    'tips.bestPractices': 'सर्वोत्तम प्रथाएं',
    'tips.importantNotes': 'महत्वपूर्ण नोट्स'
  },
  es: {
    'tab.main': 'Herramienta Principal',
    'tab.signature-resize-10-20kb': 'Redimensionar Firma 10 a 20 KB',
    'tab.signature-resize-20kb': 'Redimensionar Firma 20KB',
    'tab.ssc-mts': 'Redimensionar Firma SSC MTS',
    'tab.pan-card': 'Herramienta de Redimensión de Foto y Firma de Tarjeta PAN',
    'tab.signature-resize-50kb': 'Redimensionar Firma 50 KB',
    'tab.gate': 'Redimensionar Firma GATE',
    'tab.rrb': 'Redimensionar Firma RRB',
    'tab.uti': 'Redimensionar Foto y Firma UTI',
    'content.ssc.title': 'Directrices de Redimensión de Firma SSC MTS',
    'content.pan.title': 'Directrices de Foto y Firma de Tarjeta PAN',
    'content.gate.title': 'Requisitos de Firma GATE',
    'content.rrb.title': 'Especificaciones de Firma RRB',
    'content.uti.title': 'Requisitos de Formulario UTI/NPS',
    'content.10-20kb.title': 'Directrices de Redimensión de Firma 10-20KB',
    'content.20kb.title': 'Directrices de Redimensión de Firma 20KB',
    'content.50kb.title': 'Directrices de Redimensión de Firma 50KB',
    'spec.dimensions': 'Dimensiones',
    'spec.fileSize': 'Tamaño de Archivo',
    'spec.format': 'Formato',
    'spec.background': 'Fondo',
    'spec.aspectRatio': 'Relación de Aspecto',
    'spec.resolution': 'Resolución',
    'spec.quality': 'Calidad',
    'spec.compression': 'Compresión',
    'tips.bestPractices': 'Mejores Prácticas',
    'tips.importantNotes': 'Notas Importantes'
  }
};

interface TranslationProviderProps {
  children: ReactNode;
}

export const TranslationProvider: React.FC<TranslationProviderProps> = ({ children }) => {
  const [language, setLanguage] = useState('en');

  const translate = (key: string): string => {
    const currentTranslations = translations[language as keyof typeof translations] || translations.en;
    return currentTranslations[key as keyof typeof currentTranslations] || key;
  };

  return (
    <TranslationContext.Provider value={{ language, setLanguage, translate }}>
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
