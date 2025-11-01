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
              
            </p>
          </section>

          {/* ✅ Main Layout Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-4 lg:gap-8">
            <div className="lg:col-span-3 order-1 lg:order-1">
              <MainContent activeTab="gate" />

              {/* ✅ Optional Extra Content Section */}
              {/* ✅ Informational Content Section */}
<section className="mt-12 px-4 sm:px-6 lg:px-8 text-gray-700">
  {/* Header */}
  <h2 className="text-3xl font-semibold text-gray-800 text-center mb-6">
    GATE Signature Resize – Everything You Need to Know
  </h2>

  {/* Introduction */}
  <p className="max-w-3xl mx-auto text-center mb-8">
    The GATE (Graduate Aptitude Test in Engineering) application requires a signature image 
    that matches strict size and format specifications. Uploading an incorrect signature can 
    lead to application rejection or repeated upload errors. Our free online tool simplifies 
    this by helping you resize and optimize your signature instantly.
  </p>

  {/* Why We Need GATE Signature Resize */}
  <div className="max-w-4xl mx-auto mb-12">
    <h3 className="text-2xl font-semibold text-gray-800 mb-3">
      Why Do You Need to Resize Your GATE Signature?
    </h3>
    <p className="text-gray-700 mb-4">
      The GATE portal only accepts signature images that match its upload criteria for width, height, 
      and file size. If your signature is too large or too small, the system rejects it. 
      Resizing ensures your file meets those requirements, preventing upload failures 
      and saving time during your registration.
    </p>
    <ul className="list-disc list-inside space-y-2">
      <li>Maintains the correct aspect ratio and quality.</li>
      <li>Ensures the image file size stays under the GATE upload limit.</li>
      <li>Prevents application form rejection due to incorrect signature dimensions.</li>
    </ul>
  </div>

  {/* How to Resize Section */}
  <div className="max-w-4xl mx-auto">
    <h3 className="text-2xl font-semibold text-gray-800 mb-3">
      How to Resize Your Signature for GATE
    </h3>
    <p className="text-gray-700 mb-4">
      Follow these simple steps to resize your signature using our GATE Signature Resize Tool:
    </p>
    <ol className="list-decimal list-inside space-y-3 text-gray-700">
      <li>
        <strong>Step 1:</strong> Upload your signature image (JPG, JPEG, or PNG format).
        <div className="my-3">
          <img
            src="/upload.png"
            alt="Upload signature in GATE Signature Resize Tool"
            className="rounded-xl shadow-md border mx-auto"
          />
        </div>
      </li>
      <li>
        <strong>Step 2:</strong> Select the required dimensions and file size (or use auto-resize).
        <div className="my-3">
          <img
            src="/capture.png"
            alt="Select dimensions in GATE Signature Resize Tool"
            className="rounded-xl shadow-md border mx-auto"
          />
        </div>
      </li>
      <li>
        <strong>Step 3:</strong> Click “Resize” and download the optimized signature instantly.
        <div className="my-3">
          <img
            src="/download.png"
            alt="Download resized signature in GATE tool"
            className="rounded-xl shadow-md border mx-auto"
          />
        </div>
      </li>
    </ol>

    <p className="mt-6 text-gray-700">
      Our tool automatically adjusts your image to the official GATE requirements for width, height, 
      and file size — ensuring 100% compliance without losing clarity.
    </p>
  </div>
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
