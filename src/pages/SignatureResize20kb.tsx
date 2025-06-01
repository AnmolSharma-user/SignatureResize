import React from 'react';
import { Helmet } from 'react-helmet-async';
import Header from '../components/Header';
import TabNavigation from '../components/TabNavigation';
import MainContent from '../components/MainContent';
import Sidebar from '../components/Sidebar';
import Footer from '../components/Footer';
import FeedbackButton from '../components/FeedbackButton';
import { TooltipProvider } from '@/components/ui/tooltip';

const SignatureResize20kb = () => {
  const [darkMode, setDarkMode] = React.useState(false);

  return (
    <TooltipProvider>
      <Helmet>
        <title>Signature Resize 20KB | Free Online Signature Resizer | SignatureResize.pro</title>
        <meta name="description" content="Resize signature to exactly 20KB online for free. Perfect for SSC, bank forms, government applications. No registration required." />
        <meta name="keywords" content="signature resize 20kb, resize signature 20 kb, signature 20kb, signature resizer 20kb, compress signature 20kb" />
        <link rel="canonical" href="https://signatureresize.pro/signature-resize-20kb" />
        
        <meta property="og:title" content="Signature Resize 20KB | Free Online Signature Resizer" />
        <meta property="og:description" content="Resize signature to exactly 20KB online for free. Perfect for government applications." />
        <meta property="og:url" content="https://signatureresize.pro/signature-resize-20kb" />
        
        <meta name="twitter:title" content="Signature Resize 20KB | Free Online Signature Resizer" />
        <meta name="twitter:description" content="Resize signature to exactly 20KB online for free." />
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

export default SignatureResize20kb;
