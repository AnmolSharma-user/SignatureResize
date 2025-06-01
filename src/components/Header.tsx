
import React from 'react';
import { Button } from '@/components/ui/button';
import { Moon, Sun } from 'lucide-react';

interface HeaderProps {
  darkMode: boolean;
  setDarkMode: (dark: boolean) => void;
}

const Header: React.FC<HeaderProps> = ({ darkMode, setDarkMode }) => {
  return (
    <header className="bg-white dark:bg-gray-900 shadow-sm border-b">
      {/* Top Ad Banner */}
      <div className="bg-gray-100 dark:bg-gray-800 py-2">
        <div className="container mx-auto px-4 text-center">
          <div className="bg-gray-200 dark:bg-gray-700 rounded-lg p-4 text-gray-500 dark:text-gray-400 text-sm">
            Advertisement Space (728x90)
          </div>
        </div>
      </div>
      
      <div className="container mx-auto px-4 py-6">
        <div className="flex items-center justify-between">
          <div className="text-center lg:text-left">
            <h1 className="text-3xl lg:text-4xl font-bold bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
              SignatureResize.pro
            </h1>
            <p className="text-gray-600 dark:text-gray-300 mt-2 text-lg">
              Free Online Tool to Perfect Your Digital Signature in Seconds
            </p>
          </div>
          
          <Button
            variant="outline"
            size="icon"
            onClick={() => setDarkMode(!darkMode)}
            className="ml-4"
          >
            {darkMode ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
