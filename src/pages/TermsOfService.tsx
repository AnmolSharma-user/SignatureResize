
import React, { useState } from 'react';
import Header from '../components/Header';
import TabNavigation from '../components/TabNavigation';
import Footer from '../components/Footer';
import FeedbackButton from '../components/FeedbackButton';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { TooltipProvider } from '@/components/ui/tooltip';

const TermsOfService = () => {
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
                  Terms of Service
                </CardTitle>
                <p className="text-center text-gray-600 dark:text-gray-300">
                  Last updated: December 2024
                </p>
              </CardHeader>
              <CardContent className="space-y-6 text-gray-600 dark:text-gray-300">
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                    Acceptance of Terms
                  </h3>
                  <p>
                    By accessing and using SignatureResize.com, you accept and agree to be bound by the terms and provision of this agreement.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                    Use License
                  </h3>
                  <p>
                    Permission is granted to temporarily use SignatureResize.com for personal and commercial signature resizing purposes. This license includes:
                  </p>
                  <ul className="space-y-2 mt-2">
                    <li>• Free use of all signature resizing tools</li>
                    <li>• Processing unlimited number of signature images</li>
                    <li>• Using resized signatures for any legal purpose</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                    Restrictions
                  </h3>
                  <p>You are restricted from:</p>
                  <ul className="space-y-2 mt-2">
                    <li>• Using the service for illegal activities</li>
                    <li>• Attempting to reverse engineer the website</li>
                    <li>• Uploading copyrighted material without permission</li>
                    <li>• Using automated tools to overload our servers</li>
                    <li>• Reselling or redistributing our service</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                    Disclaimer
                  </h3>
                  <p>
                    The materials on SignatureResize.com are provided on an 'as is' basis. We make no warranties, expressed or implied, and hereby disclaim all warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                    Limitations
                  </h3>
                  <p>
                    In no event shall SignatureResize.com or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on SignatureResize.com, even if SignatureResize.com or an authorized representative has been notified orally or in writing of the possibility of such damage.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                    Accuracy of Materials
                  </h3>
                  <p>
                    The materials appearing on SignatureResize.com could include technical, typographical, or photographic errors. We do not warrant that any of the materials on its website are accurate, complete, or current.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                    Modifications
                  </h3>
                  <p>
                    SignatureResize.com may revise these terms of service at any time without notice. By using this website, you are agreeing to be bound by the then current version of these terms of service.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                    Governing Law
                  </h3>
                  <p>
                    These terms and conditions are governed by and construed in accordance with applicable laws and you irrevocably submit to the exclusive jurisdiction of the courts in that state or location.
                  </p>
                </div>

                <div className="bg-blue-50 dark:bg-slate-800 p-4 rounded-lg">
                  <p className="font-semibold">
                    Questions about these terms? Contact us at signatureresize.com@gmail.com
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

export default TermsOfService;
