import React from 'react';
import { Helmet } from 'react-helmet-async';
import Header from '../components/Header';
import TabNavigation from '../components/TabNavigation';
import MainContent from '../components/MainContent';
import Sidebar from '../components/Sidebar';
import Footer from '../components/Footer';
import FeedbackButton from '../components/FeedbackButton';
import { TooltipProvider } from '@/components/ui/tooltip';

const PanCardPhotoSignatureResize = () => {
  const [darkMode, setDarkMode] = React.useState(false);

  return (
    <TooltipProvider>
      <Helmet>
        <title>PAN Card Photo Signature Resize Tool- signaturereform.com</title>
        <meta name="description" content="Resize photo and signature for PAN card application online for free. Perfect size and format for PAN card registration. Secure and fast." />
        <meta name="keywords" content="pan card photo signature resize tool, pan card signature resize, pan signature resize, pan photo resize, pan card application signature" />
        <link rel="canonical" href="https://signaturereform.com/pan-card-photo-signature-resize-tool" />
        
        <meta property="og:title" content="PAN Card Photo Signature Resize Tool - Free Online" />
        <meta property="og:description" content="Resize photo and signature for PAN card application online for free." />
        <meta property="og:url" content="https://signaturereform.com/pan-card-photo-signature-resize-tool" />
        
        <meta name="twitter:title" content="PAN Card Photo Signature Resize Tool - Free Online" />
        <meta name="twitter:description" content="Resize photo and signature for PAN card application online for free." />
      </Helmet>
      
      <div className={`min-h-screen bg-white ${darkMode ? 'dark' : ''} font-inter`}>
        <Header darkMode={darkMode} setDarkMode={setDarkMode} />
        <TabNavigation activeTab="pan" setActiveTab={() => {}} />
        
        <div className="container mx-auto px-2 sm:px-4 py-4 sm:py-8">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-4 lg:gap-8">
            <div className="lg:col-span-3 order-1 lg:order-1">
              <MainContent activeTab="pan" />
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

export default PanCardPhotoSignatureResize;
