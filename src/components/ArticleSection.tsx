import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { FileText, Mail, Smartphone, CheckCircle, AlertTriangle, Download } from 'lucide-react';

const ArticleSection = () => {
  return (
    <section className="py-16 sm:py-20 bg-slate-50/50 dark:bg-slate-900/30">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-gray-900 dark:text-white">
              Signature Resize: The Key to Professional Email and Document Branding
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Learn how proper signature sizing can transform your professional image and avoid common pitfalls
            </p>
          </div>

          <div className="prose prose-lg max-w-none dark:prose-invert">
            <Card className="mb-8">
              <CardContent className="p-8">
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
                  A signature can say a lot about you before readers even see your name. An oversized, grainy, or poorly-placed signature in an email or document looks cluttered and unprofessional. Worse, it can confuse your contacts, break your branding, or even stop your emails from getting through. If you've ever received an email with a signature that dwarfs the message or appears as a tiny, unreadable squiggle, you know the impact.
                </p>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                  Many struggle with signature resize because different devices show images differently. The file may be too large for mobile or too small for desktop. File format also affects how crisp your signature appears. Online signature tools like signaturereform.com cut through these headaches, letting anyone resize signatures quickly, with zero technical know-how.
                </p>
              </CardContent>
            </Card>

            <Card className="mb-8">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-xl font-bold text-gray-900 dark:text-white">
                  <Mail className="h-6 w-6 text-blue-600" />
                  The Essentials of Signature Resize for Email and Documents
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                  Signatures are the digital handshake of business communication. A scannable, properly-sized signature boosts your credibility and protects your brand. But when your signature isn't optimized, you risk pixelation, distortion, or emails marked as spam.
                </p>
                
                <h4 className="font-semibold text-gray-900 dark:text-white mb-3">When do you need to resize?</h4>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700 dark:text-gray-300">Adding a handwritten signature scan to PDFs, letters, or contracts.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700 dark:text-gray-300">Creating branded email signatures with logos or banners.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700 dark:text-gray-300">Updating existing signatures for different devices.</span>
                  </li>
                </ul>

                <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-2">The right signature size depends on context:</h4>
                  <ul className="space-y-1 text-sm">
                    <li className="text-gray-700 dark:text-gray-300">• <strong>Desktop emails:</strong> 600 pixels wide, 150-200 pixels high.</li>
                    <li className="text-gray-700 dark:text-gray-300">• <strong>Mobile devices:</strong> 320 pixels wide max, height between 90-150 pixels.</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            <Card className="mb-8">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-xl font-bold text-gray-900 dark:text-white">
                  <Smartphone className="h-6 w-6 text-blue-600" />
                  Optimal Email Signature Dimensions and Formats
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                  The best email signatures aren't too big, too small, or a jumble of mismatched graphics. For top results, follow these guidelines:
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                  <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
                    <h5 className="font-semibold text-gray-900 dark:text-white mb-2">Dimensions</h5>
                    <ul className="space-y-1 text-sm text-gray-700 dark:text-gray-300">
                      <li>• Width: 300-600px (desktop), 320px (mobile)</li>
                      <li>• Height: 90-200 pixels</li>
                      <li>• DPI: 72 for modern clients, 96 for Outlook</li>
                    </ul>
                  </div>
                  <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
                    <h5 className="font-semibold text-gray-900 dark:text-white mb-2">File Specs</h5>
                    <ul className="space-y-1 text-sm text-gray-700 dark:text-gray-300">
                      <li>• Size: Under 50KB (max 150KB total)</li>
                      <li>• PNG: For logos and transparency</li>
                      <li>• JPEG: For photos and smaller files</li>
                    </ul>
                  </div>
                </div>

                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                  Good specs avoid fuzzy logos and prevent your signature from ballooning on someone else's screen. signaturereform.com makes it easy to enter your preferred dimensions and instantly see a preview, so you always get the right result.
                </p>
              </CardContent>
            </Card>

            <Card className="mb-8">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-xl font-bold text-gray-900 dark:text-white">
                  <AlertTriangle className="h-6 w-6 text-orange-600" />
                  Mistakes to Avoid When Resizing Signatures
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                  Many stumble with signature resize due to a few repeat errors:
                </p>
                
                <div className="space-y-3">
                  <div className="flex items-start gap-3 p-3 bg-red-50 dark:bg-red-900/20 rounded-lg">
                    <AlertTriangle className="h-5 w-5 text-red-600 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700 dark:text-gray-300 text-sm">Distorted logos from manually stretching the image.</span>
                  </div>
                  <div className="flex items-start gap-3 p-3 bg-red-50 dark:bg-red-900/20 rounded-lg">
                    <AlertTriangle className="h-5 w-5 text-red-600 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700 dark:text-gray-300 text-sm">Blurred or pixelated signatures caused by resizing a small photo up instead of starting large and shrinking down.</span>
                  </div>
                  <div className="flex items-start gap-3 p-3 bg-red-50 dark:bg-red-900/20 rounded-lg">
                    <AlertTriangle className="h-5 w-5 text-red-600 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700 dark:text-gray-300 text-sm">Poor cropping that leaves white edges, busy backgrounds, or cuts off vital content.</span>
                  </div>
                  <div className="flex items-start gap-3 p-3 bg-red-50 dark:bg-red-900/20 rounded-lg">
                    <AlertTriangle className="h-5 w-5 text-red-600 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700 dark:text-gray-300 text-sm">Oversized files that choke up loading or get blocked.</span>
                  </div>
                </div>

                <p className="text-gray-700 dark:text-gray-300 leading-relaxed mt-4">
                  Using signaturereform.com solves these problems by guiding you through the process—from uploading your image in the right format to automated batch resizing and export options.
                </p>
              </CardContent>
            </Card>

            <Card className="mb-8">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-xl font-bold text-gray-900 dark:text-white">
                  <FileText className="h-6 w-6 text-blue-600" />
                  Step-By-Step Guide: How to Resize Your Signature Online
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <div className="space-y-6">
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-3">1. Preparing Your Signature for Upload</h4>
                    <p className="text-gray-700 dark:text-gray-300 mb-3">Start with a clean, clear image:</p>
                    <ul className="space-y-2">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-4 w-4 text-green-600 mt-1 flex-shrink-0" />
                        <span className="text-gray-700 dark:text-gray-300 text-sm">Snap a high-resolution photo or scan a physical signature.</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-4 w-4 text-green-600 mt-1 flex-shrink-0" />
                        <span className="text-gray-700 dark:text-gray-300 text-sm">Use good lighting and a plain background (white or transparent works best).</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-4 w-4 text-green-600 mt-1 flex-shrink-0" />
                        <span className="text-gray-700 dark:text-gray-300 text-sm">Edit out any smudges or shadows using your favorite photo app.</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-4 w-4 text-green-600 mt-1 flex-shrink-0" />
                        <span className="text-gray-700 dark:text-gray-300 text-sm">Save your file as PNG (for transparency) or JPEG (smaller file size).</span>
                      </li>
                    </ul>
                  </div>

                  <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg">
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Create Professional Digital Signatures</h4>
                    <p className="text-gray-700 dark:text-gray-300 text-sm mb-3">
                      If you don't have a digital signature yet, make one easily:
                    </p>
                    <ul className="space-y-1 text-sm text-gray-700 dark:text-gray-300">
                      <li>• Visit the <a href="/signature-creator" className="text-blue-600 hover:text-blue-800 underline">Signature Creator tool</a></li>
                      <li>• Draw your signature with your mouse, stylus, or finger</li>
                      <li>• Download it as a crisp PNG ready for resizing</li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-3">2. Using signaturereform.com to Resize Your Signature</h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <div className="flex items-center gap-2">
                          <span className="bg-blue-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold">1</span>
                          <span className="text-gray-700 dark:text-gray-300 text-sm">Go to signaturereform.com</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <span className="bg-blue-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold">2</span>
                          <span className="text-gray-700 dark:text-gray-300 text-sm">Upload via drag-and-drop</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <span className="bg-blue-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold">3</span>
                          <span className="text-gray-700 dark:text-gray-300 text-sm">Enter target dimensions</span>
                        </div>
                      </div>
                      <div className="space-y-2">
                        <div className="flex items-center gap-2">
                          <span className="bg-blue-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold">4</span>
                          <span className="text-gray-700 dark:text-gray-300 text-sm">Choose output format</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <span className="bg-blue-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold">5</span>
                          <span className="text-gray-700 dark:text-gray-300 text-sm">Preview your result</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <span className="bg-blue-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold">6</span>
                          <span className="text-gray-700 dark:text-gray-300 text-sm">Download optimized signature</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-3">3. Saving and Inserting Your Resized Signature</h4>
                    <p className="text-gray-700 dark:text-gray-300 text-sm mb-3">
                      Once resized, downloading and using your new signature takes just a few clicks:
                    </p>
                    <ul className="space-y-2">
                      <li className="flex items-start gap-2">
                        <Download className="h-4 w-4 text-blue-600 mt-1 flex-shrink-0" />
                        <span className="text-gray-700 dark:text-gray-300 text-sm">Download with suggested naming scheme</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Download className="h-4 w-4 text-blue-600 mt-1 flex-shrink-0" />
                        <span className="text-gray-700 dark:text-gray-300 text-sm">Insert into email client or document</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Download className="h-4 w-4 text-blue-600 mt-1 flex-shrink-0" />
                        <span className="text-gray-700 dark:text-gray-300 text-sm">Test by sending yourself an email</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Download className="h-4 w-4 text-blue-600 mt-1 flex-shrink-0" />
                        <span className="text-gray-700 dark:text-gray-300 text-sm">Store backup in safe location</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-8">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Conclusion</h3>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                  Resizing your signature is more than just shrinking an image. It's about sharpness, recognition, and making a polished impression with every email or signed document. Sending unoptimized signatures can wreck your message before it's even read.
                </p>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                  With online tools like signaturereform.com, you never need to guess dimensions or risk a fuzzy, oversized signature. The process is fast, easy, and yields professional, scalable results every time.
                </p>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed font-semibold">
                  Optimize your signature once, and you'll look sharp in every inbox, every time. Let your signature work for you—simple, clear, and unmistakably yours.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ArticleSection;