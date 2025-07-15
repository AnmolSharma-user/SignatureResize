import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import Header from '../components/Header';
import TabNavigation from '../components/TabNavigation';
import MainContent from '../components/MainContent';
import Sidebar from '../components/Sidebar';
import Footer from '../components/Footer';
import FeedbackButton from '../components/FeedbackButton';
import ArticleSection from '../components/ArticleSection';
import { TooltipProvider } from '@/components/ui/tooltip';

const Index = () => {
  const [activeTab, setActiveTab] = useState('main');
  const [darkMode, setDarkMode] = useState(false);

  return (
    <TooltipProvider>
      <Helmet>
        <title>Free signature resize Tool - Resize Signature Online </title>
        <meta name="description" content="Free online signature resize tool. Resize signatures to any size for government forms, applications. Supports 10KB, 20KB, 50KB sizes. No registration required." />
        <meta name="keywords" content="signature resize, resize signature online, signature resizer tool, signature size reducer, free signature resize, online signature tool" />
        <link rel="canonical" href="https://signaturereform.com/" />
        
        {/* Open Graph */}
        <meta property="og:title" content="Free Signature Resize Tool - Resize Signature Online" />
        <meta property="og:description" content="Free online signature resize tool. Resize signatures to any size for government forms, applications. No registration required." />
        <meta property="og:url" content="https://signaturereform.com/" />
        <meta property="og:type" content="website" />
        
        {/* Twitter Card */}
        <meta name="twitter:title" content="Free Signature Resize Tool - Resize Signature Online" />
        <meta name="twitter:description" content="Free online signature resize tool. Resize signatures to any size for government forms, applications." />
        
        {/* Additional SEO */}
        <meta name="robots" content="index, follow" />
        <meta name="author" content="signaturereform.com" />
      </Helmet>
      
      <div className={`min-h-screen bg-white ${darkMode ? 'dark' : ''} font-inter`}>
        <Header darkMode={darkMode} setDarkMode={setDarkMode} />
        <TabNavigation activeTab={activeTab} setActiveTab={setActiveTab} />
        
        <div className="container mx-auto px-2 sm:px-4 py-4 sm:py-8">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-4 lg:gap-8">
            <div className="lg:col-span-3 order-1 lg:order-1">
              <MainContent activeTab={activeTab} />
            </div>
            <div className="lg:col-span-1 order-2 lg:order-2">
              <Sidebar />
            </div>
          </div>
        </div>
        
        <ArticleSection />
        
        <Footer />
        <FeedbackButton />
      </div>
    </TooltipProvider>
  );
};

export default Index;
