
import React, { useState } from 'react';
import Header from '../components/Header';
import TabNavigation from '../components/TabNavigation';
import Footer from '../components/Footer';
import FeedbackButton from '../components/FeedbackButton';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { TooltipProvider } from '@/components/ui/tooltip';

const PrivacyPolicy = () => {
  const [activeTab, setActiveTab] = useState('main');
  const [darkMode, setDarkMode] = useState(false);

  return (
    <TooltipProvider>
      <div className={`min-h-screen bg-white ${darkMode ? 'dark' : ''} font-inter`}>
        <Header darkMode={darkMode} setDarkMode={setDarkMode} />
        <TabNavigation activeTab={activeTab} setActiveTab={setActiveTab} />
        
        <div className="container mx-auto px-2 sm:px-4 py-4 sm:py-8">
          <div className="max-w-4xl mx-auto">
            <Card>
              <CardHeader>
                <CardTitle className="text-3xl font-bold text-center">
                  Privacy Policy
                </CardTitle>
                <p className="text-center text-gray-600 dark:text-gray-300">
                  Last updated: December 2024
                </p>
              </CardHeader>
              <CardContent className="space-y-6 text-gray-600 dark:text-gray-300">
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                    Your Privacy is Our Priority
                  </h3>
                  <p>
                    At SignatureResize.com, we are committed to protecting your privacy. This policy explains how we handle your information when you use our signature resizing tool.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                    Information We DON'T Collect
                  </h3>
                  <ul className="space-y-2">
                    <li>• We do not collect, store, or process your signature images</li>
                    <li>• We do not require user registration or personal information</li>
                    <li>• We do not track your usage patterns or behavior</li>
                    <li>• We do not use cookies for tracking purposes</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                    How Our Tool Works
                  </h3>
                  <p>
                    All image processing happens locally in your web browser. When you upload a signature image:
                  </p>
                  <ul className="space-y-2 mt-2">
                    <li>• The image is processed entirely on your device</li>
                    <li>• No data is sent to our servers</li>
                    <li>• The processed image remains on your device</li>
                    <li>• You have complete control over when to download or delete the result</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                    Technical Information
                  </h3>
                  <p>
                    We may collect basic technical information for website maintenance:
                  </p>
                  <ul className="space-y-2 mt-2">
                    <li>• Basic analytics data (page views, general location)</li>
                    <li>• Browser type and version for compatibility</li>
                    <li>• Device type for responsive design optimization</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                    Third-Party Services
                  </h3>
                  <p>
                    We may use third-party services for basic website functionality:
                  </p>
                  <ul className="space-y-2 mt-2">
                    <li>• Analytics services (Google Analytics) for usage statistics</li>
                    <li>• Content delivery networks for faster loading</li>
                    <li>• These services have their own privacy policies</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                    Data Security
                  </h3>
                  <p>
                    Since we don't store your images or personal data, there's no risk of data breaches involving your signatures. Our website uses standard security measures including HTTPS encryption.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                    Contact Us
                  </h3>
                  <p>
                    If you have questions about this privacy policy, please contact us through our contact page or email us at signatureresize.com@gmail.com
                  </p>
                </div>

                <div className="bg-blue-50 dark:bg-slate-800 p-4 rounded-lg">
                  <p className="font-semibold">
                    In summary: Your signature images never leave your device. We prioritize your privacy above all else.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
        
        <Footer />
        <FeedbackButton />
      </div>
    </TooltipProvider>
  );
};

export default PrivacyPolicy;
