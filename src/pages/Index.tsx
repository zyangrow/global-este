import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ServicesSection from "@/components/ServicesSection";
import ReviewsSection from "@/components/ReviewsSection";
import GallerySection from "@/components/GallerySection";
import FAQSection from "@/components/FAQSection";
import AreasSection from "@/components/AreasSection";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";
import MobileCTA from "@/components/MobileCTA";
import FloatingContactButton from "@/components/FloatingContactButton";
import CookieBanner from "@/components/CookieBanner";

const Index = () => (
  <>
    <Navbar />
    <main>
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <ReviewsSection />
      <GallerySection />
      <FAQSection />
      <AreasSection />
      <FinalCTA />
    </main>
    <Footer />
    <FloatingContactButton />
    <MobileCTA />
    <CookieBanner />
  </>
);

export default Index;
