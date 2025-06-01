import React from 'react';
import { Button } from '@/components/ui/button';
import { useNavigate, useLocation } from 'react-router-dom';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface TabNavigationProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

const tabs = [
  { id: 'main', label: 'Main Tool', path: '/' },
  { id: '10-20kb', label: 'Signature Resize 10 to 20 KB', path: '/signature-resize-10-to-20-kb' },
  { id: '20kb', label: 'Signature Resize 20KB', path: '/signature-resize-20kb' },
  { id: 'ssc', label: 'SSC MTS Signature Resize', path: '/ssc-mts-signature-resize' },
  { id: 'pan', label: 'PAN Card Photo Signature Resize Tool', path: '/pan-card-photo-signature-resize-tool' },
  { id: '50kb', label: 'Signature Resize 50 KB', path: '/signature-resize-50-kb' },
  { id: 'gate', label: 'GATE Signature Resize', path: '/gate-signature-resize' },
  { id: 'rrb', label: 'RRB Signature Resize', path: '/rrb-signature-resize' },
  { id: 'uti', label: 'UTI Photo Signature Resize', path: '/uti-photo-signature-resize' },
];

const languages = [
  { code: 'en', name: 'English', flag: '🇺🇸' },
  { code: 'hi', name: 'हिंदी', flag: '🇮🇳' },
  { code: 'es', name: 'Español', flag: '🇪🇸' },
  { code: 'fr', name: 'Français', flag: '🇫🇷' },
  { code: 'de', name: 'Deutsch', flag: '🇩🇪' },
  { code: 'zh', name: '中文', flag: '🇨🇳' },
  { code: 'ja', name: '日本語', flag: '🇯🇵' },
  { code: 'ko', name: '한국어', flag: '🇰🇷' },
  { code: 'ar', name: 'العربية', flag: '🇸🇦' },
  { code: 'pt', name: 'Português', flag: '🇧🇷' },
];

const TabNavigation: React.FC<TabNavigationProps> = ({ activeTab, setActiveTab }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const [selectedLanguage, setSelectedLanguage] = React.useState('en');

  const getActiveTabFromPath = () => {
    const path = location.pathname;
    if (path.includes('signature-resize-10-to-20-kb')) return '10-20kb';
    if (path === '/signature-resize-20kb') return '20kb';
    if (path.includes('ssc-mts')) return 'ssc';
    if (path.includes('pan-card')) return 'pan';
    if (path.includes('signature-resize-50-kb')) return '50kb';
    if (path.includes('gate')) return 'gate';
    if (path.includes('rrb')) return 'rrb';
    if (path.includes('uti')) return 'uti';
    return 'main';
  };

  const currentActiveTab = getActiveTabFromPath();

  const handleTabClick = (tab: any) => {
    setActiveTab(tab.id);
    navigate(tab.path);
  };

  const handleLanguageChange = (languageCode: string) => {
    setSelectedLanguage(languageCode);
    // Here you would implement the actual translation logic
    console.log('Language changed to:', languageCode);
  };

  return (
    <div className="bg-white dark:bg-slate-900 border-b border-gray-200 dark:border-slate-700">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          <div className="flex overflow-x-auto scrollbar-hide flex-1">
            <div className="flex min-w-max">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => handleTabClick(tab)}
                  className={`
                    relative px-4 sm:px-6 py-3 sm:py-4 text-xs sm:text-sm font-medium transition-all duration-200 ease-in-out
                    border-b-2 whitespace-nowrap flex items-center gap-2
                    ${currentActiveTab === tab.id 
                      ? 'text-blue-600 dark:text-blue-400 border-blue-600 dark:border-blue-400 bg-blue-50 dark:bg-slate-800/50' 
                      : 'text-gray-600 dark:text-slate-300 border-transparent hover:text-blue-600 dark:hover:text-blue-400 hover:bg-gray-50 dark:hover:bg-slate-800/30'
                    }
                  `}
                >
                  {/* Icon based on tab type */}
                  <span className="text-base hidden sm:inline">
                    {tab.id === 'main' && '🔧'}
                    {(tab.id === '10-20kb' || tab.id === '20kb' || tab.id === '50kb') && '📏'}
                    {tab.id === 'ssc' && '📋'}
                    {tab.id === 'pan' && '💳'}
                    {tab.id === 'gate' && '🎓'}
                    {tab.id === 'rrb' && '🚂'}
                    {tab.id === 'uti' && '📄'}
                  </span>
                  
                  <span className="truncate max-w-[120px] sm:max-w-none">{tab.label}</span>
                  
                  {/* Active indicator */}
                  {currentActiveTab === tab.id && (
                    <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-blue-600 dark:bg-blue-400 rounded-t-full" />
                  )}
                </button>
              ))}
            </div>
          </div>
          
          {/* Language Selector */}
          <div className="ml-4 flex-shrink-0">
            <Select value={selectedLanguage} onValueChange={handleLanguageChange}>
              <SelectTrigger className="w-[140px] bg-white dark:bg-slate-800 border-gray-200 dark:border-slate-600">
                <SelectValue>
                  <div className="flex items-center gap-2">
                    <span>{languages.find(lang => lang.code === selectedLanguage)?.flag}</span>
                    <span className="hidden sm:inline">
                      {languages.find(lang => lang.code === selectedLanguage)?.name}
                    </span>
                    <span className="sm:hidden">
                      {languages.find(lang => lang.code === selectedLanguage)?.code.toUpperCase()}
                    </span>
                  </div>
                </SelectValue>
              </SelectTrigger>
              <SelectContent className="bg-white dark:bg-slate-800 border-gray-200 dark:border-slate-600">
                {languages.map((language) => (
                  <SelectItem 
                    key={language.code} 
                    value={language.code}
                    className="hover:bg-gray-50 dark:hover:bg-slate-700"
                  >
                    <div className="flex items-center gap-2">
                      <span>{language.flag}</span>
                      <span>{language.name}</span>
                    </div>
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TabNavigation;
