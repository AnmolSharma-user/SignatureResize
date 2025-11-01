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
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-4 lg:gap-8">
            {/* Main Tool Section */}
            <div className="lg:col-span-3 order-1 lg:order-1">
              <MainContent activeTab="gate" />
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1 order-2 lg:order-2">
              <Sidebar />
            </div>
          </div>

          {/* ✅ Custom Content Section (Now at the End) */}
          <section className="mt-12 text-center lg:text-left">
            <h2 className="text-2xl sm:text-3xl font-semibold text-gray-800 mb-3">
              GATE Signature Resize – Free Online Tool
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto mb-6">
              Resize your GATE exam signature to the exact format and dimensions required for GATE registration.
              Our tool ensures your signature image meets the official requirements for upload — no installation,
              no registration, and no watermark. It’s completely free and easy to use.
            </p>

            <h3 className="text-xl font-semibold mb-2 text-gray-800">How to Resize Your Signature for GATE</h3>
            <ol className="list-decimal list-inside text-gray-600 max-w-2xl mx-auto text-left space-y-2">
              <li>Upload your scanned signature (JPG, JPEG, or PNG format).</li>
              <li>Select the size or choose auto-resize for official GATE dimensions.</li>
              <li>Click “Resize” and instantly download your optimized signature.</li>
            </ol>

            <h3 className="text-xl font-semibold mt-8 mb-2 text-gray-800">Why Use This Tool?</h3>
            <ul className="list-disc list-inside text-gray-600 max-w-2xl mx-auto text-left space-y-2">
              <li>Meets the exact GATE exam upload requirements.</li>
              <li>No quality loss during compression.</li>
              <li>Completely free, secure, and browser-based.</li>
            </ul>

            <p className="mt-6 text-gray-600 max-w-3xl mx-auto">
              Many GATE applicants face upload rejections due to wrong file size or dimensions.
              Our smart signature resizer fixes that instantly, saving time during your application process.
            </p>
          </section>
        </div>

        <Footer />
        <FeedbackButton />
      </div>
    </TooltipProvider>
  );
};

export default GateSignatureResize;
