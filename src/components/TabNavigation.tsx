
import React from 'react';
import { Button } from '@/components/ui/button';

interface TabNavigationProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

const tabs = [
  { id: 'main', label: 'Main Tool' },
  { id: 'ssc', label: 'SSC CGL/MTS' },
  { id: 'pan', label: 'PAN Card' },
  { id: 'gate', label: 'GATE/RRB' },
  { id: 'uti', label: 'UTI/NPS' },
  { id: 'bank', label: 'Bank Forms' },
];

const TabNavigation: React.FC<TabNavigationProps> = ({ activeTab, setActiveTab }) => {
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
              onClick={() => setActiveTab(tab.id)}
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
