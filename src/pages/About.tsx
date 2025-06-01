import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import Header from '../components/Header';
import TabNavigation from '../components/TabNavigation';
import Footer from '../components/Footer';
import FeedbackButton from '../components/FeedbackButton';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Shield, Zap, Users, Globe } from 'lucide-react';
import { TooltipProvider } from '@/components/ui/tooltip';

const About = () => {
  const [activeTab, setActiveTab] = useState('main');
  const [darkMode, setDarkMode] = useState(false);

  return (
    <TooltipProvider>
      <Helmet>
        <title>About Us | SignatureResize.pro | Free Online Signature Resizer</title>
        <meta name="description" content="Learn about SignatureResize.pro - the free online signature resizing tool. Our mission, features, and commitment to privacy and security." />
        <meta name="keywords" content="about signature resize, signature resizer tool, free signature tool, online signature resize, signature resize privacy" />
        <link rel="canonical" href="https://signatureresize.pro/about" />
        
        <meta property="og:title" content="About Us | SignatureResize.pro" />
        <meta property="og:description" content="Learn about SignatureResize.pro - the free online signature resizing tool." />
        <meta property="og:url" content="https://signatureresize.pro/about" />
        
        <meta name="twitter:title" content="About Us | SignatureResize.pro" />
        <meta name="twitter:description" content="Learn about SignatureResize.pro - the free online signature resizing tool." />
      </Helmet>
      
      <div className={`min-h-screen bg-white ${darkMode ? 'dark' : ''} font-inter`}>
        <Header darkMode={darkMode} setDarkMode={setDarkMode} />
        <TabNavigation activeTab={activeTab} setActiveTab={setActiveTab} />
        
        <div className="container mx-auto px-2 sm:px-4 py-4 sm:py-8">
          <div className="max-w-4xl mx-auto">
            <Card>
              <CardHeader>
                <CardTitle className="text-3xl font-bold text-center bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
                  About SignatureResize.com
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="text-center">
                  <p className="text-lg text-gray-600 dark:text-gray-300">
                    Your trusted free online signature resizing tool for perfect digital signatures
                  </p>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <div className="flex items-center space-x-3">
                      <Shield className="h-6 w-6 text-blue-600" />
                      <h3 className="text-xl font-semibold">Privacy First</h3>
                    </div>
                    <p className="text-gray-600 dark:text-gray-300">
                      All image processing happens locally in your browser. Your signatures never leave your device, ensuring complete privacy and security.
                    </p>
                  </div>

                  <div className="space-y-4">
                    <div className="flex items-center space-x-3">
                      <Zap className="h-6 w-6 text-blue-600" />
                      <h3 className="text-xl font-semibold">Lightning Fast</h3>
                    </div>
                    <p className="text-gray-600 dark:text-gray-300">
                      Resize your signatures in seconds with our optimized compression algorithms. No waiting, no delays - just instant results.
                    </p>
                  </div>

                  <div className="space-y-4">
                    <div className="flex items-center space-x-3">
                      <Users className="h-6 w-6 text-blue-600" />
                      <h3 className="text-xl font-semibold">User Friendly</h3>
                    </div>
                    <p className="text-gray-600 dark:text-gray-300">
                      Simple drag-and-drop interface designed for everyone. No technical knowledge required - just upload and resize.
                    </p>
                  </div>

                  <div className="space-y-4">
                    <div className="flex items-center space-x-3">
                      <Globe className="h-6 w-6 text-blue-600" />
                      <h3 className="text-xl font-semibold">Always Free</h3>
                    </div>
                    <p className="text-gray-600 dark:text-gray-300">
                      Completely free to use with no hidden costs, registration, or limitations. Resize as many signatures as you need.
                    </p>
                  </div>
                </div>

                <div className="bg-blue-50 dark:bg-slate-800 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold mb-3">Our Mission</h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    SignatureResize.com was created to solve a common problem faced by millions of people - getting signature images to the exact size required for government forms, job applications, and official documents. We believe in providing a simple, secure, and free solution that works for everyone.
                  </p>
                </div>

                <div className="bg-gray-50 dark:bg-slate-800 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold mb-3">Contact Us</h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-3">
                    Have questions or need support? We're here to help:
                  </p>
                  <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                    <li>• Email Support: signatureresize.com@gmail.com</li>
                    <li>• Privacy Concerns: signatureresize.com@gmail.com</li>
                    <li>• General Inquiries: signatureresize.com@gmail.com</li>
                  </ul>
                </div>

                <div className="bg-gray-50 dark:bg-slate-800 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold mb-3">Why Choose Us?</h3>
                  <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                    <li>• Supports all major image formats (JPG, PNG, WEBP, GIF)</li>
                    <li>• Precise size control down to the exact KB</li>
                    <li>• Maintains signature quality while reducing file size</li>
                    <li>• Works on all devices - desktop, tablet, and mobile</li>
                    <li>• No software installation required</li>
                    <li>• Completely offline processing for maximum security</li>
                  </ul>
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

export default About;
