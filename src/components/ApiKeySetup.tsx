
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { Key, ExternalLink } from 'lucide-react';

interface ApiKeySetupProps {
  onApiKeySet: (key: string) => void;
  hasApiKey: boolean;
}

const ApiKeySetup: React.FC<ApiKeySetupProps> = ({ onApiKeySet, hasApiKey }) => {
  const [apiKey, setApiKey] = useState('');
  const [showSetup, setShowSetup] = useState(!hasApiKey);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (apiKey.trim()) {
      onApiKeySet(apiKey.trim());
      setShowSetup(false);
      setApiKey('');
    }
  };

  if (hasApiKey && !showSetup) {
    return (
      <div className="flex items-center gap-2 text-sm text-green-600">
        <Key className="h-4 w-4" />
        <span>Google Translate API configured</span>
        <Button 
          variant="ghost" 
          size="sm" 
          onClick={() => setShowSetup(true)}
          className="text-blue-600 hover:text-blue-700"
        >
          Change
        </Button>
      </div>
    );
  }

  return (
    <Card className="border-blue-200 bg-blue-50">
      <CardHeader>
        <CardTitle className="flex items-center gap-2 text-blue-900">
          <Key className="h-5 w-5" />
          Setup Google Translate API
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <Alert>
          <AlertDescription>
            To enable accurate English-Hindi translations, please provide your Google Translate API key.
            <a 
              href="https://console.cloud.google.com/apis/credentials" 
              target="_blank" 
              rel="noopener noreferrer"
              className="ml-2 inline-flex items-center text-blue-600 hover:text-blue-700"
            >
              Get API Key <ExternalLink className="h-3 w-3 ml-1" />
            </a>
          </AlertDescription>
        </Alert>
        
        <form onSubmit={handleSubmit} className="space-y-3">
          <Input
            type="password"
            placeholder="Enter your Google Translate API key"
            value={apiKey}
            onChange={(e) => setApiKey(e.target.value)}
            className="font-mono text-sm"
          />
          <div className="flex gap-2">
            <Button type="submit" disabled={!apiKey.trim()}>
              Save API Key
            </Button>
            {hasApiKey && (
              <Button 
                type="button" 
                variant="outline" 
                onClick={() => setShowSetup(false)}
              >
                Cancel
              </Button>
            )}
          </div>
        </form>
        
        <p className="text-xs text-gray-600">
          Your API key is stored locally in your browser and never sent to our servers.
        </p>
      </CardContent>
    </Card>
  );
};

export default ApiKeySetup;
