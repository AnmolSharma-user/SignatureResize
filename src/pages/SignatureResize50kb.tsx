import React from 'react';
import { Helmet } from 'react-helmet-async';
import Header from '../components/Header';
import TabNavigation from '../components/TabNavigation';
import MainContent from '../components/MainContent';
import Sidebar from '../components/Sidebar';
import Footer from '../components/Footer';
import FeedbackButton from '../components/FeedbackButton';
import { TooltipProvider } from '@/components/ui/tooltip';

const SignatureResize50kb = () => {
  const [darkMode, setDarkMode] = React.useState(false);

  return (
    <TooltipProvider>
      <Helmet>
        <title>Signature Resize 50KB | Free Online Tool | SignatureResize.com</title>
        <meta name="description" content="Resize signature to exactly 50KB online for free. Perfect for GATE, government forms, and applications requiring larger signature files." />
        <meta name="keywords" content="signature resize 50 kb, signature resize 50kb, resize signature 50 kb, compress signature 50kb, signature 50kb size" />
        <link rel="canonical" href="https://signatureresize.com/signature-resize-50-kb" />
        
        <meta property="og:title" content="Signature Resize 50KB | Free Online Tool" />
        <meta property="og:description" content="Resize signature to exactly 50KB online for free. Perfect for GATE and government forms." />
        <meta property="og:url" content="https://signatureresize.com/signature-resize-50-kb" />
        
        <meta name="twitter:title" content="Signature Resize 50KB | Free Online Tool" />
        <meta name="twitter:description" content="Resize signature to exactly 50KB online for free." />
      </Helmet>
      
      <div className={`min-h-screen bg-white ${darkMode ? 'dark' : ''} font-inter`}>
        <Header darkMode={darkMode} setDarkMode={setDarkMode} />
        <TabNavigation activeTab="gate" setActiveTab={() => {}} />
        
        <div className="container mx-auto px-2 sm:px-4 py-4 sm:py-8">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-4 lg:gap-8">
            <div className="lg:col-span-3 order-1 lg:order-1">
              <MainContent activeTab="gate" />
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

export default SignatureResize50kb;
