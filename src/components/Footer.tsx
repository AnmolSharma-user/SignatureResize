
import React from 'react';
import { Button } from '@/components/ui/button';
import { Facebook, Twitter, Mail, ExternalLink } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white mt-16">
      {/* Bottom Ad */}
      <div className="bg-gray-800 py-4">
        <div className="container mx-auto px-4 text-center">
          <div className="bg-gray-700 rounded-lg p-4 text-gray-400 text-sm">
            Advertisement Space (728x90 responsive)
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div>
            <h3 className="text-xl font-bold bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent mb-4">
              SignatureResize.com
            </h3>
            <p className="text-gray-300 text-sm mb-4">
              The most trusted free online signature resizing tool. Perfect your digital signatures for government forms, emails, and professional documents.
            </p>
            <div className="flex space-x-2">
              <Button variant="outline" size="sm" className="border-gray-600 text-gray-300 hover:bg-gray-800">
                <Facebook className="h-4 w-4" />
              </Button>
              <Button variant="outline" size="sm" className="border-gray-600 text-gray-300 hover:bg-gray-800">
                <Twitter className="h-4 w-4" />
              </Button>
              <Button variant="outline" size="sm" className="border-gray-600 text-gray-300 hover:bg-gray-800">
                <Mail className="h-4 w-4" />
              </Button>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="/about" className="text-gray-300 hover:text-white transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="/privacy-policy" className="text-gray-300 hover:text-white transition-colors">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="/terms-of-service" className="text-gray-300 hover:text-white transition-colors">
                  Terms of Service
                </a>
              </li>
              <li>
                <a href="/disclaimer" className="text-gray-300 hover:text-white transition-colors">
                  Disclaimer
                </a>
              </li>
              <li>
                <a href="/contact-us" className="text-gray-300 hover:text-white transition-colors">
                  Contact Us
                </a>
              </li>
              <li>
                <a href="/faq" className="text-gray-300 hover:text-white transition-colors">
                  FAQ
                </a>
              </li>
            </ul>
          </div>

          {/* Popular Tools */}
          <div>
            <h4 className="font-semibold mb-4">Popular Resizing</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="/signature-resize-10-to-20-kb" className="text-gray-300 hover:text-white transition-colors">
                  Signature Resize 10 to 20 KB
                </a>
              </li>
              <li>
                <a href="/signature-resize-20kb" className="text-gray-300 hover:text-white transition-colors">
                  Signature Resize 20KB
                </a>
              </li>
              <li>
                <a href="/ssc-mts-signature-resize" className="text-gray-300 hover:text-white transition-colors">
                  SSC MTS Signature Resize
                </a>
              </li>
              <li>
                <a href="/pan-card-photo-signature-resize-tool" className="text-gray-300 hover:text-white transition-colors">
                  PAN Card Photo Signature Resize Tool
                </a>
              </li>
              <li>
                <a href="/signature-resize-50-kb" className="text-gray-300 hover:text-white transition-colors">
                  Signature Resize 50 KB
                </a>
              </li>
            </ul>
          </div>

          {/* More Tools */}
          <div>
            <h4 className="font-semibold mb-4">More Tools</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="/gate-signature-resize" className="text-gray-300 hover:text-white transition-colors">
                  GATE Signature Resize
                </a>
              </li>
              <li>
                <a href="/rrb-signature-resize" className="text-gray-300 hover:text-white transition-colors">
                  RRB Signature Resize
                </a>
              </li>
              <li>
                <a href="/uti-photo-signature-resize" className="text-gray-300 hover:text-white transition-colors">
                  UTI Photo Signature Resize
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center">
          <p className="text-gray-400 text-sm">
            © 2024 SignatureResize.com - Free Online Tool. All rights reserved.
          </p>
          <p className="text-gray-500 text-xs mt-2">
            Process images locally in your browser. No data sent to servers.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
