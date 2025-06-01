
import React from 'react';
import { Button } from '@/components/ui/button';
import { useNavigate, useLocation } from 'react-router-dom';

interface TabNavigationProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

const tabs = [
  { id: 'main', label: 'Main Tool', path: '/' },
  { id: 'ssc', label: 'SSC CGL/MTS', path: '/ssc-mts-signature-resize' },
  { id: 'pan', label: 'PAN Card', path: '/pan-card-photo-signature-resize-tool' },
  { id: 'gate', label: 'GATE/RRB', path: '/gate-signature-resize' },
  { id: 'rrb', label: 'UTI/NPS', path: '/rrb-signature-resize' },
  { id: 'uti', label: 'Bank Forms', path: '/uti-photo-signature-resize' },
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
    <div className="bg-slate-900 dark:bg-slate-950 border-b border-slate-700 dark:border-slate-800">
      <div className="container mx-auto px-4">
        <div className="flex overflow-x-auto scrollbar-hide">
          <div className="flex min-w-max">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => handleTabClick(tab)}
                className={`
                  relative px-6 py-4 text-sm font-medium transition-all duration-200 ease-in-out
                  border-b-2 whitespace-nowrap flex items-center gap-2
                  ${currentActiveTab === tab.id 
                    ? 'text-blue-400 border-blue-400 bg-slate-800/50 dark:bg-slate-900/50' 
                    : 'text-slate-300 dark:text-slate-400 border-transparent hover:text-white hover:bg-slate-800/30 dark:hover:bg-slate-900/30'
                  }
                `}
              >
                {/* Icon based on tab type */}
                <span className="text-base">
                  {tab.id === 'main' && '🔧'}
                  {tab.id === 'ssc' && '📋'}
                  {tab.id === 'pan' && '💳'}
                  {tab.id === 'gate' && '🎓'}
                  {tab.id === 'rrb' && '🏦'}
                  {tab.id === 'uti' && '📄'}
                </span>
                
                <span>{tab.label}</span>
                
                {/* Active indicator */}
                {currentActiveTab === tab.id && (
                  <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-blue-400 rounded-t-full" />
                )}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TabNavigation;
