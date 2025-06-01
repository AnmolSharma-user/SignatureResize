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
import { useTranslation } from '../contexts/TranslationContext';
import { 
  ListTodo, 
  ListCheck, 
  List, 
  ListOrdered, 
  ListPlus,
  NotebookTabs
} from 'lucide-react';

interface TabNavigationProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

const tabs = [
  { id: 'main', label: 'tab.main', path: '/', icon: ListTodo },
  { id: '10-20kb', label: 'tab.signature-resize-10-20kb', path: '/signature-resize-10-to-20-kb', icon: ListCheck },
  { id: '20kb', label: 'tab.signature-resize-20kb', path: '/signature-resize-20kb', icon: List },
  { id: 'ssc', label: 'tab.ssc-mts', path: '/ssc-mts-signature-resize', icon: ListOrdered },
  { id: 'pan', label: 'tab.pan-card', path: '/pan-card-photo-signature-resize-tool', icon: NotebookTabs },
  { id: '50kb', label: 'tab.signature-resize-50kb', path: '/signature-resize-50-kb', icon: ListPlus },
  { id: 'gate', label: 'tab.gate', path: '/gate-signature-resize', icon: ListCheck },
  { id: 'rrb', label: 'tab.rrb', path: '/rrb-signature-resize', icon: ListOrdered },
  { id: 'uti', label: 'tab.uti', path: '/uti-photo-signature-resize', icon: List },
];

// Only English and Hindi
const languages = [
  { code: 'en', name: 'English', flag: '🇺🇸' },
  { code: 'hi', name: 'हिंदी', flag: '🇮🇳' },
];

const TabNavigation: React.FC<TabNavigationProps> = ({ activeTab, setActiveTab }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const { language, setLanguage, translate } = useTranslation();

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
    setLanguage(languageCode);
    console.log('Language changed to:', languageCode);
  };

  return (
    <div className="bg-white dark:bg-slate-900 border-b border-gray-200 dark:border-slate-700">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          <div className="flex overflow-x-auto scrollbar-hide flex-1">
            <div className="flex min-w-max">
              {tabs.map((tab) => {
                const IconComponent = tab.icon;
                return (
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
                    {/* Icon component */}
                    <IconComponent className="w-4 h-4 hidden sm:inline" />
                    
                    <span className="truncate max-w-[120px] sm:max-w-none">
                      {translate(tab.label)}
                    </span>
                    
                    {/* Active indicator */}
                    {currentActiveTab === tab.id && (
                      <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-blue-600 dark:bg-blue-400 rounded-t-full" />
                    )}
                  </button>
                );
              })}
            </div>
          </div>
          
          {/* Language Selector */}
          <div className="ml-4 flex-shrink-0 flex items-center gap-2">
            <Select value={language} onValueChange={handleLanguageChange}>
              <SelectTrigger className="w-[140px] bg-white dark:bg-slate-800 border-gray-200 dark:border-slate-600">
                <SelectValue>
                  <div className="flex items-center gap-2">
                    <span>{languages.find(lang => lang.code === language)?.flag}</span>
                    <span className="hidden sm:inline">
                      {languages.find(lang => lang.code === language)?.name}
                    </span>
                    <span className="sm:hidden">
                      {languages.find(lang => lang.code === language)?.code.toUpperCase()}
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
