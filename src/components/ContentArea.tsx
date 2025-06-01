
import React from 'react';
import { SpecificationCard } from './content/SpecificationCard';
import { TipsCard } from './content/TipsCard';
import { ImportantNotesCard } from './content/ImportantNotesCard';
import { ProTipCard } from './content/ProTipCard';
import { useContentConfig } from './content/contentConfig';

interface ContentAreaProps {
  activeTab: string;
}

const ContentArea: React.FC<ContentAreaProps> = ({ activeTab }) => {
  const content = useContentConfig(activeTab);

  return (
    <div className="space-y-6 mt-8">
      <SpecificationCard title={content.title} specs={content.specs} />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <TipsCard tips={content.tips} />
        <ImportantNotesCard />
      </div>

      <ProTipCard />
    </div>
  );
};

export default ContentArea;
