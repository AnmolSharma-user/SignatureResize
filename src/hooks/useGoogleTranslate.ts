
import { useState, useCallback } from 'react';
import { googleTranslateService } from '../services/googleTranslate';

export const useGoogleTranslate = () => {
  const [isTranslating, setIsTranslating] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const translateText = useCallback(async (text: string, targetLanguage: string, sourceLanguage: string = 'auto') => {
    setIsTranslating(true);
    setError(null);
    
    try {
      const translatedText = await googleTranslateService.translateText(text, targetLanguage, sourceLanguage);
      return translatedText;
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'Translation failed';
      setError(errorMessage);
      return text; // Return original text on error
    } finally {
      setIsTranslating(false);
    }
  }, []);

  const translateMultiple = useCallback(async (texts: string[], targetLanguage: string, sourceLanguage: string = 'auto') => {
    setIsTranslating(true);
    setError(null);
    
    try {
      const translatedTexts = await googleTranslateService.translateMultiple(texts, targetLanguage, sourceLanguage);
      return translatedTexts;
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'Translation failed';
      setError(errorMessage);
      return texts; // Return original texts on error
    } finally {
      setIsTranslating(false);
    }
  }, []);

  const setApiKey = useCallback((key: string) => {
    googleTranslateService.setApiKey(key);
    setError(null);
  }, []);

  const hasApiKey = useCallback(() => {
    return !!googleTranslateService.getApiKey();
  }, []);

  return {
    translateText,
    translateMultiple,
    setApiKey,
    hasApiKey,
    isTranslating,
    error
  };
};
