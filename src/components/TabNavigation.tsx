
import React from 'react';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';

interface TabNavigationProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

const tabs = [
  { id: 'main', label: 'Main Tool', path: '/' },
  { id: 'ssc', label: 'SSC MTS', path: '/ssc-mts-signature-resize' },
  { id: 'pan', label: 'PAN Card', path: '/pan-card-photo-signature-resize-tool' },
  { id: 'gate', label: 'GATE/RRB', path: '/gate-signature-resize' },
  { id: 'uti', label: 'UTI/NPS', path: '/uti-photo-signature-resize' },
  { id: 'bank', label: 'Bank Forms', path: '/' },
];

const TabNavigation: React.FC<TabNavigationProps> = ({ activeTab, setActiveTab }) => {
  const navigate = useNavigate();

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
              variant={activeTab === tab.id ? 'default' : 'ghost'}
              className={`whitespace-nowrap px-4 py-2 rounded-lg transition-colors ${
                activeTab === tab.id 
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
