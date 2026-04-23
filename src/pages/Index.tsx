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
import Seo from "@/components/Seo";
import { localBusinessJsonLd } from "@/lib/seo";

const Index = () => (
  <>
    <Seo
      title="Climatización en Sevilla | Global ESTE — Aire, Calderas y Aerotermia"
      description="Climatización en Sevilla con Global ESTE: aire acondicionado, calderas, aerotermia, placas solares y fontanería. Presupuesto gratis en 24h. ☎ 607 11 29 27."
      jsonLd={localBusinessJsonLd}
    />
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
