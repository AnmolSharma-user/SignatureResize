import React from 'react';
import { Helmet } from 'react-helmet-async';
import Header from '../components/Header';
import TabNavigation from '../components/TabNavigation';
import MainContent from '../components/MainContent';
import Sidebar from '../components/Sidebar';
import Footer from '../components/Footer';
import FeedbackButton from '../components/FeedbackButton';
import { TooltipProvider } from '@/components/ui/tooltip';

const UtiPhotoSignatureResize = () => {
  const [darkMode, setDarkMode] = React.useState(false);

  return (
    <TooltipProvider>
      <Helmet>
        <title>UTI Photo Signature Resize Tool | Free Online | SignatureResize.com</title>
        <meta name="description" content="Resize photo and signature for UTI application online for free. Perfect size and format for UTI registration forms. Fast and secure." />
        <meta name="keywords" content="uti photo signature resize, uti signature resize, uti application signature, uti photo resize, uti registration signature" />
        <link rel="canonical" href="https://signatureresize.com/uti-photo-signature-resize" />
        
        <meta property="og:title" content="UTI Photo Signature Resize Tool | Free Online" />
        <meta property="og:description" content="Resize photo and signature for UTI application online for free. Perfect for UTI registration forms." />
        <meta property="og:url" content="https://signatureresize.com/uti-photo-signature-resize" />
        
        <meta name="twitter:title" content="UTI Photo Signature Resize Tool | Free Online" />
        <meta name="twitter:description" content="Resize photo and signature for UTI application online for free." />
      </Helmet>
      
      <div className={`min-h-screen bg-white ${darkMode ? 'dark' : ''} font-inter`}>
        <Header darkMode={darkMode} setDarkMode={setDarkMode} />
        <TabNavigation activeTab="uti" setActiveTab={() => {}} />
        
        <div className="container mx-auto px-2 sm:px-4 py-4 sm:py-8">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-4 lg:gap-8">
            <div className="lg:col-span-3 order-1 lg:order-1">
              <MainContent activeTab="uti" />
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

export default UtiPhotoSignatureResize;
