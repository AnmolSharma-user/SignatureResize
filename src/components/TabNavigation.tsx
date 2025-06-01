
import React from 'react';
import { Button } from '@/components/ui/button';
import { useNavigate, useLocation } from 'react-router-dom';

interface TabNavigationProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

const tabs = [
  { id: 'main', label: 'Main Tool', path: '/' },
  { id: 'ssc', label: 'SSC MTS', path: '/ssc-mts-signature-resize' },
  { id: 'pan', label: 'PAN Card', path: '/pan-card-photo-signature-resize-tool' },
  { id: 'gate', label: 'GATE', path: '/gate-signature-resize' },
  { id: 'rrb', label: 'RRB', path: '/rrb-signature-resize' },
  { id: 'uti', label: 'UTI/NPS', path: '/uti-photo-signature-resize' },
  { id: '20kb', label: '20KB', path: '/signature-resize-20kb' },
  { id: '50kb', label: '50KB', path: '/signature-resize-50-kb' },
];

const TabNavigation: React.FC<TabNavigationProps> = ({ activeTab, setActiveTab }) => {
  const navigate = useNavigate();
  const location = useLocation();

  const getActiveTabFromPath = () => {
    const path = location.pathname;
    if (path.includes('ssc-mts')) return 'ssc';
    if (path.includes('pan-card')) return 'pan';
    if (path.includes('gate')) return 'gate';
    if (path.includes('rrb')) return 'rrb';
    if (path.includes('uti')) return 'uti';
    if (path.includes('20kb') || path.includes('10-to-20')) return '20kb';
    if (path.includes('50kb') || path.includes('50-kb')) return '50kb';
    return 'main';
  };

  const currentActiveTab = getActiveTabFromPath();

  const handleTabClick = (tab: any) => {
    setActiveTab(tab.id);
    navigate(tab.path);
  };

  return (
    <div className="bg-gradient-to-r from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-900 border-b border-gray-200 dark:border-gray-700 shadow-sm">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="flex overflow-x-auto scrollbar-hide py-3 sm:py-4">
          <div className="flex space-x-2 sm:space-x-3 min-w-max mx-auto">
            {tabs.map((tab, index) => (
              <Button
                key={tab.id}
                variant="ghost"
                className={`relative px-4 sm:px-6 py-2.5 sm:py-3 rounded-xl font-medium text-sm sm:text-base transition-all duration-300 ease-in-out transform hover:scale-105 ${
                  currentActiveTab === tab.id 
                    ? 'bg-white dark:bg-gray-700 text-primary shadow-lg shadow-gray-200/50 dark:shadow-gray-900/50 border border-gray-200 dark:border-gray-600' 
                    : 'text-gray-600 dark:text-gray-300 hover:bg-white/70 dark:hover:bg-gray-700/70 hover:text-gray-900 dark:hover:text-white hover:shadow-md'
                } ${index === 0 ? 'ml-0' : ''}`}
                onClick={() => handleTabClick(tab)}
              >
                <span className="relative z-10">{tab.label}</span>
                {currentActiveTab === tab.id && (
                  <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-primary/10 rounded-xl" />
                )}
              </Button>
            ))}
          </div>
        </div>
      </div>
      
      {/* Active tab indicator line */}
      <div className="relative">
        <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
      </div>
    </div>
  );
};

export default TabNavigation;
