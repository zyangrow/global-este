import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import TrustSection from "@/components/TrustSection";
import ServicesSection from "@/components/ServicesSection";
import AboutSection from "@/components/AboutSection";
import GallerySection from "@/components/GallerySection";
import ReviewsSection from "@/components/ReviewsSection";
import AreasSection from "@/components/AreasSection";
import FAQSection from "@/components/FAQSection";
import FinalCTA from "@/components/FinalCTA";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import MobileCTA from "@/components/MobileCTA";

const Index = () => (
  <>
    <Navbar />
    <main>
      <HeroSection />
      <TrustSection />
      <ServicesSection />
      <AboutSection />
      <GallerySection />
      <ReviewsSection />
      <AreasSection />
      <FAQSection />
      <FinalCTA />
      <ContactSection />
    </main>
    <Footer />
    <WhatsAppButton />
    <MobileCTA />
  </>
);

export default Index;
