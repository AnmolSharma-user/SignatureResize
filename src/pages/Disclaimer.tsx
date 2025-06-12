
import React, { useState } from 'react';
import Header from '../components/Header';
import TabNavigation from '../components/TabNavigation';
import Footer from '../components/Footer';
import FeedbackButton from '../components/FeedbackButton';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { TooltipProvider } from '@/components/ui/tooltip';

const Disclaimer = () => {
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
                  Disclaimer
                </CardTitle>
                <p className="text-center text-gray-600 dark:text-gray-300">
                  Important information about using signaturereform.com
                </p>
              </CardHeader>
              <CardContent className="space-y-6 text-gray-600 dark:text-gray-300">
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                    General Information
                  </h3>
                  <p>
                    The information and tools provided by signaturereform.com are for general informational and utility purposes only. While we strive to ensure the accuracy and reliability of our signature resizing service, we make no representations or warranties of any kind, express or implied, about the completeness, accuracy, reliability, suitability, or availability of the service.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                    Use at Your Own Risk
                  </h3>
                  <p>
                    Your use of signaturereform.com and any reliance you place on the resized signature images is strictly at your own risk. We recommend that you:
                  </p>
                  <ul className="space-y-2 mt-2">
                    <li>• Always keep backup copies of your original signature images</li>
                    <li>• Verify that resized signatures meet your specific requirements</li>
                    <li>• Test resized signatures before submitting important documents</li>
                    <li>• Check with relevant authorities about signature requirements</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                    No Professional Advice
                  </h3>
                  <p>
                    signaturereform.com does not provide professional, legal, or official advice. Our tool is purely for technical image resizing purposes. We do not guarantee that resized signatures will be accepted by any specific organization, government agency, or institution.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                    Limitation of Liability
                  </h3>
                  <p>
                    In no event will signaturereform.com be liable for any loss or damage including, without limitation, indirect or consequential loss or damage, or any loss or damage whatsoever arising from:
                  </p>
                  <ul className="space-y-2 mt-2">
                    <li>• Loss of data or signature images</li>
                    <li>• Rejection of resized signatures by authorities</li>
                    <li>• Technical issues or service interruptions</li>
                    <li>• Use of the service for inappropriate purposes</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                    Third-Party Requirements
                  </h3>
                  <p>
                    Different organizations may have specific requirements for signature dimensions, file sizes, and formats. While our tool helps you achieve common size requirements, you are responsible for verifying that your resized signatures meet the specific requirements of the intended recipient.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                    Technical Limitations
                  </h3>
                  <p>
                    Our signature resizing tool works within the technical limitations of web browsers and image processing. Results may vary based on:
                  </p>
                  <ul className="space-y-2 mt-2">
                    <li>• Original image quality and format</li>
                    <li>• Browser compatibility and performance</li>
                    <li>• Device capabilities and internet connection</li>
                    <li>• Complexity of the signature image</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                    External Links
                  </h3>
                  <p>
                    Through this website, you may be able to link to other websites that are not under our control. We have no control over the nature, content, and availability of those sites and are not responsible for their content or privacy practices.
                  </p>
                </div>

                <div className="bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded-lg border border-yellow-200 dark:border-yellow-700">
                  <p className="font-semibold text-yellow-800 dark:text-yellow-200">
                    Important: Always verify that your resized signatures meet the specific requirements of the organization or authority where you plan to submit them.
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

export default Disclaimer;
