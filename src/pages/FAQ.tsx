
import React, { useState } from 'react';
import Header from '../components/Header';
import TabNavigation from '../components/TabNavigation';
import Footer from '../components/Footer';
import FeedbackButton from '../components/FeedbackButton';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { TooltipProvider } from '@/components/ui/tooltip';

const FAQ = () => {
  const [activeTab, setActiveTab] = useState('main');
  const [darkMode, setDarkMode] = useState(false);

  const faqs = [
    {
      question: "How does signaturereform.com work?",
      answer: "Our tool processes your signature images entirely in your web browser. Upload your signature image, select the desired size (10KB, 20KB, 50KB, etc.), and our algorithm will compress and resize it while maintaining quality. No data is sent to our servers - everything happens locally on your device."
    },
    {
      question: "Is my signature image safe and private?",
      answer: "Absolutely! Your signature images never leave your device. All processing happens locally in your browser using JavaScript. We don't upload, store, or access your images in any way. This ensures complete privacy and security of your sensitive signature data."
    },
    {
      question: "What image formats are supported?",
      answer: "We support all major image formats including JPG, JPEG, PNG, WEBP, and GIF. The output is typically provided in JPG format for optimal file size, but you can choose your preferred format based on your requirements."
    },
    {
      question: "Why do I need to resize my signature?",
      answer: "Many government forms, job applications, and official documents have specific file size requirements for signature images (commonly 10KB, 20KB, or 50KB). Our tool helps you meet these exact requirements without losing image quality."
    },
    {
      question: "Is there a limit to how many signatures I can resize?",
      answer: "No, there are no limits! You can resize as many signature images as you need, completely free of charge. There's no registration required and no daily or monthly limits."
    },
    {
      question: "What if my signature is too small in file size?",
      answer: "If your signature is already smaller than the target size, our tool will optimize it to meet the exact requirement while maintaining quality. We can also slightly increase file size if needed while preserving the image integrity."
    },
    {
      question: "Can I use this tool on my mobile phone?",
      answer: "Yes! signaturereform.com works on all devices including smartphones, tablets, and computers. The interface is fully responsive and optimized for mobile use."
    },
    {
      question: "Do I need to install any software?",
      answer: "No installation required! Our tool works entirely in your web browser. Just visit our website and start resizing your signatures immediately."
    },
    {
      question: "What if the resized signature is rejected by the authority?",
      answer: "While our tool meets standard size requirements, different organizations may have specific criteria. We recommend checking with the relevant authority about their exact requirements. You can always adjust the settings and try different compression levels."
    },
    {
      question: "How do I know if my signature meets the requirements?",
      answer: "Our tool displays the exact file size after processing. You can verify that it matches the requirement (e.g., exactly 20KB). We also show image dimensions to help you confirm it meets all criteria."
    },
    {
      question: "Can I resize signatures for multiple people?",
      answer: "Yes, you can resize signature images for family members, colleagues, or anyone who needs help with this process. Each image is processed independently and privately."
    },
    {
      question: "What browsers are supported?",
      answer: "Our tool works on all modern browsers including Chrome, Firefox, Safari, Edge, and others. We recommend using the latest version of your browser for the best experience."
    },
    {
      question: "Is this service really free?",
      answer: "Yes, signaturereform.com is completely free to use with no hidden costs, subscriptions, or premium features. We believe signature resizing should be accessible to everyone."
    },
    {
      question: "How can I contact support?",
      answer: "You can reach us through our Contact Us page or email us directly at support@signaturereform.com. We typically respond within 24-48 hours."
    },
    {
      question: "Can I use the resized signatures for commercial purposes?",
      answer: "Yes, you can use your resized signatures for any legal purpose including business documents, contracts, and commercial applications. The signatures remain your property."
    }
  ];

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
                  Frequently Asked Questions
                </CardTitle>
                <p className="text-center text-gray-600 dark:text-gray-300">
                  Find answers to common questions about signature resizing
                </p>
              </CardHeader>
              <CardContent>
                <Accordion type="single" collapsible className="w-full">
                  {faqs.map((faq, index) => (
                    <AccordionItem key={index} value={`item-${index}`}>
                      <AccordionTrigger className="text-left hover:text-blue-600">
                        {faq.question}
                      </AccordionTrigger>
                      <AccordionContent className="text-gray-600 dark:text-gray-300">
                        {faq.answer}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>

                <div className="mt-8 bg-blue-50 dark:bg-slate-800 p-6 rounded-lg">
                  <h3 className="text-lg font-semibold mb-2">Still have questions?</h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">
                    Can't find the answer you're looking for? Don't hesitate to reach out to our support team.
                  </p>
                  <a 
                    href="/contact-us" 
                    className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                  >
                    Contact Support
                  </a>
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

export default FAQ;
