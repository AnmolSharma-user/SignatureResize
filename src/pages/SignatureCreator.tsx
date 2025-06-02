import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ContentArea from '../components/ContentArea';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { PenTool, Type, Download, Smartphone, Clock, Shield, Star, CheckCircle, Users, Zap, Heart } from 'lucide-react';
import DrawingSignature from '@/components/signature-creator/DrawingSignature';
import TypingSignature from '@/components/signature-creator/TypingSignature';
const SignatureCreator = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [creationMode, setCreationMode] = useState<'select' | 'draw' | 'type'>('select');
  const [mousePosition, setMousePosition] = useState({
    x: 0,
    y: 0
  });
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY
      });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);
  const resetToSelection = () => {
    setCreationMode('select');
  };
  const features = [{
    icon: PenTool,
    title: "Draw or Type Easily",
    description: "Create signatures by drawing with mouse/touch or typing with elegant fonts"
  }, {
    icon: Download,
    title: "PNG with Transparent Background",
    description: "Download your signature in high-quality PNG format with transparent background"
  }, {
    icon: Type,
    title: "Custom Fonts & Colors",
    description: "Choose from beautiful signature fonts and customize colors to match your style"
  }, {
    icon: Smartphone,
    title: "Mobile & Desktop Compatible",
    description: "Works perfectly on all devices - smartphone, tablet, or desktop computer"
  }, {
    icon: Shield,
    title: "No Login Required",
    description: "Start creating immediately without any registration or account setup"
  }, {
    icon: Heart,
    title: "100% Free to Use",
    description: "Complete access to all features without any hidden costs or premium plans"
  }];
  const benefits = [{
    icon: Clock,
    title: "Saves Time and Paper",
    description: "No more printing, signing, and scanning documents"
  }, {
    icon: Users,
    title: "Boosts Professionalism",
    description: "Present a professional image in all your digital communications"
  }, {
    icon: Zap,
    title: "Essential for Remote Work",
    description: "Perfect for online forms, contracts, and digital workflows"
  }, {
    icon: CheckCircle,
    title: "Legally Accepted",
    description: "Digital signatures are legally recognized in most jurisdictions"
  }];
  const testimonials = [{
    name: "Sarah Johnson",
    role: "Freelance Designer",
    content: "This tool saved me hours every week! No more printing contracts just to sign them.",
    rating: 5
  }, {
    name: "Mike Chen",
    role: "Business Owner",
    content: "Perfect for my remote team. Professional signatures in seconds, and it's completely free!",
    rating: 5
  }, {
    name: "Emily Rodriguez",
    role: "Student",
    content: "Finally, a signature tool that works on my phone. Super easy to use for school documents.",
    rating: 5
  }];
  const faqs = [{
    question: "Is this tool completely free?",
    answer: "Yes! Our signature creator is 100% free with no hidden costs, premium plans, or usage limits."
  }, {
    question: "Can I use it on my phone?",
    answer: "Absolutely! Our tool is fully responsive and works perfectly on smartphones, tablets, and desktop computers."
  }, {
    question: "Is my signature stored or saved?",
    answer: "No, we don't store any signatures. Everything happens locally in your browser for maximum privacy and security."
  }, {
    question: "What file formats can I download?",
    answer: "You can download your signature in PNG, JPG, or SVG formats, with or without background."
  }, {
    question: "Are digital signatures legally valid?",
    answer: "Yes, digital signatures are legally recognized in most countries and jurisdictions for many types of documents."
  }];
  if (creationMode !== 'select') {
    return <div className={`min-h-screen bg-background ${darkMode ? 'dark' : ''} font-inter`}>
        <Helmet>
          <title>Signature Creator - Draw or Type Your Signature | SignatureResize.com</title>
          <meta name="description" content="Create your digital signature by drawing or typing. Choose from various fonts and download in multiple formats. Free online signature creator tool." />
          <meta name="keywords" content="signature creator, draw signature, type signature, digital signature, signature fonts, online signature maker" />
          <link rel="canonical" href="https://signatureresize.com/signature-creator" />
        </Helmet>
        
        <Header darkMode={darkMode} setDarkMode={setDarkMode} />
        
        <div className="container mx-auto px-4 py-4 sm:py-8">
          {creationMode === 'draw' && <DrawingSignature onBack={resetToSelection} />}

          {creationMode === 'type' && <TypingSignature onBack={resetToSelection} />}
        </div>
        
        <Footer />
      </div>;
  }
  return <div className={`min-h-screen bg-background ${darkMode ? 'dark' : ''} font-inter relative overflow-hidden`}>
      <Helmet>
        <title>Online Signature Creator - Create Digital Signatures Free | SignatureResize.com</title>
        <meta name="description" content="Create professional digital signatures online for free. Draw or type your signature, customize fonts and colors, download as PNG with transparent background. No registration required!" />
        <meta name="keywords" content="online signature creator, digital signature maker, free signature tool, draw signature online, type signature, electronic signature" />
        <link rel="canonical" href="https://signatureresize.com/signature-creator" />
      </Helmet>
      
      {/* Subtle Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute w-96 h-96 bg-slate-100/30 dark:bg-slate-800/20 rounded-full blur-3xl opacity-40" style={{
        left: `${mousePosition.x * 0.01}px`,
        top: `${mousePosition.y * 0.01}px`,
        transition: 'all 0.8s ease-out'
      }} />
        <div className="absolute w-64 h-64 bg-gray-100/20 dark:bg-gray-700/15 rounded-full blur-3xl opacity-30" style={{
        right: `${(window.innerWidth - mousePosition.x) * 0.005}px`,
        bottom: `${(window.innerHeight - mousePosition.y) * 0.005}px`,
        transition: 'all 1s ease-out'
      }} />
      </div>

      <Header darkMode={darkMode} setDarkMode={setDarkMode} />
      
      {/* Hero Section */}
      <section className="relative py-12 sm:py-20 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-6 animate-fade-in">
              Create Professional 
              <span className="text-slate-600 dark:text-slate-300"> Digital Signatures</span>
            </h1>
            <p className="text-lg sm:text-xl lg:text-2xl text-gray-600 dark:text-gray-300 mb-8 leading-relaxed animate-fade-in">
              Draw or type your signature in seconds. Download as PNG with transparent background. 
              <span className="font-semibold text-slate-700 dark:text-slate-200"> No registration required!</span>
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto mb-12">
              <Card className="cursor-pointer hover:shadow-lg transition-all duration-300 transform hover:scale-[1.02] animate-scale-in border-slate-200 dark:border-slate-700" onClick={() => setCreationMode('draw')}>
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 bg-slate-100 dark:bg-slate-800 rounded-full flex items-center justify-center mx-auto mb-4">
                    <PenTool className="h-8 w-8 text-slate-600 dark:text-slate-300" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">Draw Signature</h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-6 text-sm">
                    Draw naturally with your mouse, trackpad, or touch screen for an authentic look
                  </p>
                  <Button className="w-full bg-slate-800 hover:bg-slate-700 dark:bg-slate-200 dark:text-slate-900 dark:hover:bg-slate-100">
                    Start Drawing
                  </Button>
                </CardContent>
              </Card>

              <Card className="cursor-pointer hover:shadow-lg transition-all duration-300 transform hover:scale-[1.02] animate-scale-in border-slate-200 dark:border-slate-700" onClick={() => setCreationMode('type')}>
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 bg-slate-100 dark:bg-slate-800 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Type className="h-8 w-8 text-slate-600 dark:text-slate-300" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">Type Signature</h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-6 text-sm">
                    Type your name and choose from beautiful, elegant signature fonts
                  </p>
                  <Button variant="outline" className="w-full border-slate-300 text-slate-700 hover:bg-slate-50 dark:border-slate-600 dark:text-slate-200 dark:hover:bg-slate-800">
                    Start Typing
                  </Button>
                </CardContent>
              </Card>
            </div>

            
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 sm:py-20 bg-slate-50/50 dark:bg-slate-900/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-gray-900 dark:text-white">Why Choose Our Signature Creator?</h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Everything you need to create professional digital signatures quickly and easily
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => <Card key={index} className="hover:shadow-lg transition-shadow duration-300 animate-fade-in border-slate-200 dark:border-slate-700" style={{
            animationDelay: `${index * 0.1}s`
          }}>
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-slate-100 dark:bg-slate-800 rounded-lg flex items-center justify-center mb-4">
                    <feature.icon className="h-6 w-6 text-slate-600 dark:text-slate-300" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2 text-gray-900 dark:text-white">{feature.title}</h3>
                  <p className="text-gray-600 dark:text-gray-300 text-sm">{feature.description}</p>
                </CardContent>
              </Card>)}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 sm:py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-gray-900 dark:text-white">Why Digital Signatures Help You</h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Discover how digital signatures can transform your workflow and boost productivity
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => <div key={index} className="text-center animate-fade-in" style={{
            animationDelay: `${index * 0.1}s`
          }}>
                <div className="w-16 h-16 bg-slate-100 dark:bg-slate-800 rounded-full flex items-center justify-center mx-auto mb-4">
                  <benefit.icon className="h-8 w-8 text-slate-600 dark:text-slate-300" />
                </div>
                <h3 className="text-lg font-semibold mb-2 text-gray-900 dark:text-white">{benefit.title}</h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm">{benefit.description}</p>
              </div>)}
          </div>
        </div>
      </section>

      {/* Interactive Demo Preview */}
      <section className="py-16 sm:py-20 bg-slate-50/50 dark:bg-slate-900/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-gray-900 dark:text-white">See It In Action</h2>
            <p className="text-lg text-gray-600 dark:text-gray-300">
              Watch how easy it is to create your signature
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <Card className="overflow-hidden border-slate-200 dark:border-slate-700">
              <CardContent className="p-0">
                <div className="aspect-video bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-800 dark:to-slate-900 flex items-center justify-center">
                <div className="text-center p-4 md:p-0">
                    <div className="w-24 h-24 bg-white dark:bg-slate-700 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                      <PenTool className="h-12 w-12 text-slate-600 dark:text-slate-300" />
                    </div>
                    <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">Interactive Demo</h3>
                    <p className="text-gray-600 dark:text-gray-300 mb-4">
                      Click on "Draw Signature" or "Type Signature" above to try it now!
                    </p>
                    <div className="flex justify-center space-x-4">
                      <Button onClick={() => setCreationMode('draw')} className="bg-slate-800 hover:bg-slate-700 dark:bg-slate-200 dark:text-slate-900 dark:hover:bg-slate-100">Try Drawing</Button>
                      <Button variant="outline" onClick={() => setCreationMode('type')} className="border-slate-300 text-slate-700 hover:bg-slate-50 dark:border-slate-600 dark:text-slate-200 dark:hover:bg-slate-800">Try Typing</Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 sm:py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-gray-900 dark:text-white">What Our Users Say</h2>
            <p className="text-lg text-gray-600 dark:text-gray-300">
              Join thousands of satisfied users who trust our signature creator
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => <Card key={index} className="hover:shadow-lg transition-shadow duration-300 animate-fade-in border-slate-200 dark:border-slate-700" style={{
            animationDelay: `${index * 0.2}s`
          }}>
                <CardContent className="p-6">
                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => <Star key={i} className="h-4 w-4 text-amber-400 fill-current" />)}
                  </div>
                  <p className="text-gray-600 dark:text-gray-300 mb-4 italic">
                    "{testimonial.content}"
                  </p>
                  <div>
                    <p className="font-semibold text-gray-900 dark:text-white">{testimonial.name}</p>
                    <p className="text-sm text-gray-500 dark:text-gray-400">{testimonial.role}</p>
                  </div>
                </CardContent>
              </Card>)}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 sm:py-20 bg-slate-50/50 dark:bg-slate-900/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-gray-900 dark:text-white">Frequently Asked Questions</h2>
            <p className="text-lg text-gray-600 dark:text-gray-300">
              Everything you need to know about our signature creator
            </p>
          </div>

          <div className="max-w-3xl mx-auto space-y-4">
            {faqs.map((faq, index) => <Card key={index} className="animate-fade-in border-slate-200 dark:border-slate-700" style={{
            animationDelay: `${index * 0.1}s`
          }}>
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold mb-2 text-gray-900 dark:text-white">{faq.question}</h3>
                  <p className="text-gray-600 dark:text-gray-300">{faq.answer}</p>
                </CardContent>
              </Card>)}
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-16 sm:py-20 bg-slate-900 dark:bg-slate-800">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Ready to Create Your Professional Signature?
          </h2>
          <p className="text-lg text-slate-300 mb-8 max-w-2xl mx-auto">
            Join thousands of professionals who use our free signature creator. 
            No sign-up needed, start creating in seconds!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-slate-900 hover:bg-slate-100 px-8 py-4 text-lg font-semibold" onClick={() => setCreationMode('draw')}>
              Draw My Signature
            </Button>
            <Button size="lg" variant="outline" onClick={() => setCreationMode('type')} className="border-white text-white hover:bg-white  px-8 py-4 text-lg font-semibold">
              Type My Signature
            </Button>
          </div>
        </div>
      </section>

      {/* Content Area */}
      
      
      <Footer />
    </div>;
};
export default SignatureCreator;
