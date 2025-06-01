import React from 'react';
import { Helmet } from 'react-helmet-async';
import Header from '../components/Header';
import TabNavigation from '../components/TabNavigation';
import MainContent from '../components/MainContent';
import Sidebar from '../components/Sidebar';
import Footer from '../components/Footer';
import FeedbackButton from '../components/FeedbackButton';
import { TooltipProvider } from '@/components/ui/tooltip';

const SignatureResize10to20kb = () => {
  const [darkMode, setDarkMode] = React.useState(false);

  return (
    <TooltipProvider>
      <Helmet>
        <title>Signature Resize 10 to 20 KB | Free Online Tool | SignatureResize.pro</title>
        <meta name="description" content="Resize signature from 10KB to 20KB online for free. Perfect for government forms, job applications. Fast, secure, and easy to use signature resizer." />
        <meta name="keywords" content="signature resize 10 to 20 kb, signature resize 10kb to 20kb, resize signature 10-20kb, signature size converter" />
        <link rel="canonical" href="https://signatureresize.pro/signature-resize-10-to-20-kb" />
        
        <meta property="og:title" content="Signature Resize 10 to 20 KB | Free Online Tool" />
        <meta property="og:description" content="Resize signature from 10KB to 20KB online for free. Perfect for government forms, job applications." />
        <meta property="og:url" content="https://signatureresize.pro/signature-resize-10-to-20-kb" />
        
        <meta name="twitter:title" content="Signature Resize 10 to 20 KB | Free Online Tool" />
        <meta name="twitter:description" content="Resize signature from 10KB to 20KB online for free." />
      </Helmet>
      
      <div className={`min-h-screen bg-white ${darkMode ? 'dark' : ''} font-inter`}>
        <Header darkMode={darkMode} setDarkMode={setDarkMode} />
        <TabNavigation activeTab="main" setActiveTab={() => {}} />
        
        <div className="container mx-auto px-2 sm:px-4 py-4 sm:py-8">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-4 lg:gap-8">
            <div className="lg:col-span-3 order-1 lg:order-1">
              <MainContent activeTab="main" />
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

export default SignatureResize10to20kb;
