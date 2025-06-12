import React from 'react';
import { Helmet } from 'react-helmet-async';
import Header from '../components/Header';
import TabNavigation from '../components/TabNavigation';
import MainContent from '../components/MainContent';
import Sidebar from '../components/Sidebar';
import Footer from '../components/Footer';
import FeedbackButton from '../components/FeedbackButton';
import { TooltipProvider } from '@/components/ui/tooltip';

const RrbSignatureResize = () => {
  const [darkMode, setDarkMode] = React.useState(false);

  return (
    <TooltipProvider>
      <Helmet>
        <title>RRB Signature Resize Tool | Free Online | signaturereform.com</title>
        <meta name="description" content="Resize signature for RRB exam application online for free. Perfect size and format for Railway Recruitment Board registration. Secure and fast." />
        <meta name="keywords" content="rrb signature resize, rrb exam signature resize, railway signature resize, rrb application signature, rrb photo signature resize" />
        <link rel="canonical" href="https://signaturereform.com/rrb-signature-resize" />
        
        <meta property="og:title" content="RRB Signature Resize Tool | Free Online" />
        <meta property="og:description" content="Resize signature for RRB exam application online for free. Perfect for Railway Recruitment Board registration." />
        <meta property="og:url" content="https://signaturereform.com/rrb-signature-resize" />
        
        <meta name="twitter:title" content="RRB Signature Resize Tool | Free Online" />
        <meta name="twitter:description" content="Resize signature for RRB exam application online for free." />
      </Helmet>
      
      <div className={`min-h-screen bg-white ${darkMode ? 'dark' : ''} font-inter`}>
        <Header darkMode={darkMode} setDarkMode={setDarkMode} />
        <TabNavigation activeTab="rrb" setActiveTab={() => {}} />
        
        <div className="container mx-auto px-2 sm:px-4 py-4 sm:py-8">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-4 lg:gap-8">
            <div className="lg:col-span-3 order-1 lg:order-1">
              <MainContent activeTab="rrb" />
            </div>
            <div className="lg:col-span-1 order-2 lg:order-2">
              <Sidebar />
            </div>
          </div>
        </div>
        
        <Footer />
        <FeedbackButton />
      </div>
    </TooltipProvider>
  );
};

export default RrbSignatureResize;
