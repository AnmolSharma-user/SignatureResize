
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
    <div className="bg-gray-50 dark:bg-gray-800 border-b overflow-x-auto">
      <div className="container mx-auto px-4">
        <div className="flex space-x-1 py-2 min-w-max">
          {tabs.map((tab) => (
            <Button
              key={tab.id}
              variant={currentActiveTab === tab.id ? 'default' : 'ghost'}
              className={`whitespace-nowrap px-4 py-2 rounded-lg transition-colors ${
                currentActiveTab === tab.id 
                  ? 'bg-primary text-white' 
                  : 'text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
              }`}
              onClick={() => handleTabClick(tab)}
            >
              {tab.label}
            </Button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TabNavigation;
