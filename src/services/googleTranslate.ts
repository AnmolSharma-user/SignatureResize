
interface TranslateResponse {
  data: {
    translations: Array<{
      translatedText: string;
      detectedSourceLanguage?: string;
    }>;
  };
}

class GoogleTranslateService {
  private apiKey: string | null = null;
  private baseUrl = 'https://translation.googleapis.com/language/translate/v2';

  setApiKey(key: string) {
    this.apiKey = key;
    localStorage.setItem('google_translate_api_key', key);
  }

  getApiKey(): string | null {
    if (!this.apiKey) {
      this.apiKey = localStorage.getItem('google_translate_api_key');
    }
    return this.apiKey;
  }

  async translateText(text: string, targetLanguage: string, sourceLanguage: string = 'auto'): Promise<string> {
    const apiKey = this.getApiKey();
    if (!apiKey) {
      throw new Error('Google Translate API key not provided');
    }

    // If source and target are the same, return original text
    if (sourceLanguage === targetLanguage) {
      return text;
    }

    try {
      const response = await fetch(`${this.baseUrl}?key=${apiKey}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          q: text,
          target: targetLanguage,
          source: sourceLanguage === 'auto' ? undefined : sourceLanguage,
          format: 'text'
        })
      });

      if (!response.ok) {
        throw new Error(`Translation failed: ${response.statusText}`);
      }

      const data: TranslateResponse = await response.json();
      return data.data.translations[0].translatedText;
    } catch (error) {
      console.error('Translation error:', error);
      return text; // Return original text if translation fails
    }
  }

  async translateMultiple(texts: string[], targetLanguage: string, sourceLanguage: string = 'auto'): Promise<string[]> {
    const apiKey = this.getApiKey();
    if (!apiKey) {
      throw new Error('Google Translate API key not provided');
    }

    if (sourceLanguage === targetLanguage) {
      return texts;
    }

    try {
      const response = await fetch(`${this.baseUrl}?key=${apiKey}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          q: texts,
          target: targetLanguage,
          source: sourceLanguage === 'auto' ? undefined : sourceLanguage,
          format: 'text'
        })
      });

      if (!response.ok) {
        throw new Error(`Translation failed: ${response.statusText}`);
      }

      const data: TranslateResponse = await response.json();
      return data.data.translations.map(t => t.translatedText);
    } catch (error) {
      console.error('Translation error:', error);
      return texts; // Return original texts if translation fails
    }
  }
}

export const googleTranslateService = new GoogleTranslateService();
