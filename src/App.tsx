
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import { TranslationProvider } from "./contexts/TranslationContext";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import SignatureResize10to20kb from "./pages/SignatureResize10to20kb";
import SignatureResize20kb from "./pages/SignatureResize20kb";
import SscMtsSignatureResize from "./pages/SscMtsSignatureResize";
import PanCardPhotoSignatureResize from "./pages/PanCardPhotoSignatureResize";
import SignatureResize50kb from "./pages/SignatureResize50kb";
import GateSignatureResize from "./pages/GateSignatureResize";
import RrbSignatureResize from "./pages/RrbSignatureResize";
import UtiPhotoSignatureResize from "./pages/UtiPhotoSignatureResize";
import About from "./pages/About";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsOfService from "./pages/TermsOfService";
import Disclaimer from "./pages/Disclaimer";
import ContactUs from "./pages/ContactUs";
import FAQ from "./pages/FAQ";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <HelmetProvider>
      <TranslationProvider>
        <TooltipProvider>
          <Toaster />
          <Sonner />
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/signature-resize-10-to-20-kb" element={<SignatureResize10to20kb />} />
              <Route path="/signature-resize-20kb" element={<SignatureResize20kb />} />
              <Route path="/ssc-mts-signature-resize" element={<SscMtsSignatureResize />} />
              <Route path="/pan-card-photo-signature-resize-tool" element={<PanCardPhotoSignatureResize />} />
              <Route path="/signature-resize-50-kb" element={<SignatureResize50kb />} />
              <Route path="/gate-signature-resize" element={<GateSignatureResize />} />
              <Route path="/rrb-signature-resize" element={<RrbSignatureResize />} />
              <Route path="/uti-photo-signature-resize" element={<UtiPhotoSignatureResize />} />
              <Route path="/about" element={<About />} />
              <Route path="/privacy-policy" element={<PrivacyPolicy />} />
              <Route path="/terms-of-service" element={<TermsOfService />} />
              <Route path="/disclaimer" element={<Disclaimer />} />
              <Route path="/contact-us" element={<ContactUs />} />
              <Route path="/faq" element={<FAQ />} />
              {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </BrowserRouter>
        </TooltipProvider>
      </TranslationProvider>
    </HelmetProvider>
  </QueryClientProvider>
);

export default App;
