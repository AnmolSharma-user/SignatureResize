import React from 'react';
import { Helmet } from 'react-helmet-async';
import Header from '../components/Header';
import TabNavigation from '../components/TabNavigation';
import MainContent from '../components/MainContent';
import Sidebar from '../components/Sidebar';
import Footer from '../components/Footer';
import FeedbackButton from '../components/FeedbackButton';
import { TooltipProvider } from '@/components/ui/tooltip';

const GateSignatureResize = () => {
  const [darkMode, setDarkMode] = React.useState(false);

  return (
    <TooltipProvider>
      <Helmet>
        <title>GATE Signature Resize Tool | Free Online | signaturereform.com</title>
        <meta
          name="description"
          content="Resize signature for GATE exam application online for free. Perfect size and format for GATE registration. Fast, secure, and easy to use."
        />
        <meta
          name="keywords"
          content="gate signature resize, gate exam signature resize, gate application signature, gate photo signature resize, gate registration signature"
        />
        <link rel="canonical" href="https://signaturereform.com/gate-signature-resize" />

        <meta property="og:title" content="GATE Signature Resize Tool | Free Online" />
        <meta
          property="og:description"
          content="Resize signature for GATE exam application online for free. Perfect size and format for GATE registration."
        />
        <meta property="og:url" content="https://signaturereform.com/gate-signature-resize" />

        <meta name="twitter:title" content="GATE Signature Resize Tool | Free Online" />
        <meta name="twitter:description" content="Resize signature for GATE exam application online for free." />
      </Helmet>

      <div className={`min-h-screen bg-white ${darkMode ? 'dark' : ''} font-inter`}>
        <Header darkMode={darkMode} setDarkMode={setDarkMode} />
        <TabNavigation activeTab="gate" setActiveTab={() => {}} />

        <div className="container mx-auto px-2 sm:px-4 py-4 sm:py-8">
          {/* ✅ Page Heading & Description Section */}
          <section className="text-center mb-8">
            <h2 className="text-2xl sm:text-3xl font-semibold text-gray-800 mb-3">
              GATE Signature Resize – Free Online Tool
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Resize your GATE exam signature to the correct format and dimensions in seconds.
              Our free tool ensures your signature meets the official GATE application
              requirements — quick, accurate, and completely secure.
            </p>
          </section>

          {/* ✅ Main Layout Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-4 lg:gap-8">
            <div className="lg:col-span-3 order-1 lg:order-1">
              <MainContent activeTab="gate" />

              {/* ✅ Optional Extra Content Section */}
              <section className="mt-10">
                <h3 className="text-xl font-semibold mb-2 text-gray-800">
                  How to Resize Your Signature for GATE
                </h3>
                <ol className="list-decimal list-inside text-gray-600 space-y-2">
                  <li>Upload your signature image (JPG, JPEG, or PNG).</li>
                  <li>Select the required dimensions and file size.</li>
                  <li>Click “Resize” and download the optimized signature instantly.</li>
                </ol>

                <p className="mt-4 text-gray-600">
                  This tool is designed for GATE aspirants who face upload errors due to incorrect
                  signature sizes. It automatically adjusts your file to the required width, height,
                  and KB limit.
                </p>
              </section>
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

export default GateSignatureResize;
