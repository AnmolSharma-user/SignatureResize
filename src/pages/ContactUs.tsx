
import React, { useState } from 'react';
import Header from '../components/Header';
import TabNavigation from '../components/TabNavigation';
import Footer from '../components/Footer';
import FeedbackButton from '../components/FeedbackButton';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Mail, Shield, HelpCircle } from 'lucide-react';
import { TooltipProvider } from '@/components/ui/tooltip';

const ContactUs = () => {
  const [activeTab, setActiveTab] = useState('main');
  const [darkMode, setDarkMode] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission (would typically send to backend)
    console.log('Form submitted:', formData);
    alert('Thank you for your message! We will get back to you soon.');
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

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
                  Contact Us
                </CardTitle>
                <p className="text-center text-gray-600 dark:text-gray-300">
                  We'd love to hear from you. Send us a message and we'll respond as soon as possible.
                </p>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-8">
                  {/* Contact Information */}
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-xl font-semibold mb-4">Get in Touch</h3>
                      <div className="space-y-4">
                        <div className="flex items-center space-x-3">
                          <Mail className="h-5 w-5 text-blue-600" />
                          <div>
                            <p className="font-medium">Email Support</p>
                            <p className="text-gray-600 dark:text-gray-300">support@signatureresize.com</p>
                          </div>
                        </div>
                        
                        <div className="flex items-center space-x-3">
                          <Shield className="h-5 w-5 text-blue-600" />
                          <div>
                            <p className="font-medium">Privacy Concerns</p>
                            <p className="text-gray-600 dark:text-gray-300">privacy@signatureresize.com</p>
                          </div>
                        </div>
                        
                        <div className="flex items-center space-x-3">
                          <HelpCircle className="h-5 w-5 text-blue-600" />
                          <div>
                            <p className="font-medium">General Inquiries</p>
                            <p className="text-gray-600 dark:text-gray-300">info@signatureresize.com</p>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="bg-blue-50 dark:bg-slate-800 p-4 rounded-lg">
                      <h4 className="font-semibold mb-2">Frequently Asked Questions</h4>
                      <p className="text-sm text-gray-600 dark:text-gray-300">
                        Before contacting us, check out our FAQ page for quick answers to common questions about signature resizing.
                      </p>
                    </div>

                    <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg">
                      <h4 className="font-semibold mb-2">Response Time</h4>
                      <p className="text-sm text-gray-600 dark:text-gray-300">
                        We typically respond to all inquiries within 24-48 hours during business days.
                      </p>
                    </div>
                  </div>

                  {/* Contact Form */}
                  <div>
                    <h3 className="text-xl font-semibold mb-4">Send us a Message</h3>
                    <form onSubmit={handleSubmit} className="space-y-4">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium mb-1">
                          Your Name
                        </label>
                        <Input
                          type="text"
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          required
                          placeholder="Enter your full name"
                        />
                      </div>

                      <div>
                        <label htmlFor="email" className="block text-sm font-medium mb-1">
                          Email Address
                        </label>
                        <Input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          required
                          placeholder="Enter your email address"
                        />
                      </div>

                      <div>
                        <label htmlFor="subject" className="block text-sm font-medium mb-1">
                          Subject
                        </label>
                        <Input
                          type="text"
                          id="subject"
                          name="subject"
                          value={formData.subject}
                          onChange={handleInputChange}
                          required
                          placeholder="What is this regarding?"
                        />
                      </div>

                      <div>
                        <label htmlFor="message" className="block text-sm font-medium mb-1">
                          Message
                        </label>
                        <Textarea
                          id="message"
                          name="message"
                          value={formData.message}
                          onChange={handleInputChange}
                          required
                          rows={6}
                          placeholder="Please describe your question or concern in detail..."
                        />
                      </div>

                      <Button type="submit" className="w-full">
                        Send Message
                      </Button>
                    </form>
                  </div>
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

export default ContactUs;
