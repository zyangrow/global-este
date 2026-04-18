import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import MobileCTA from "@/components/MobileCTA";
import FloatingContactButton from "@/components/FloatingContactButton";
import CookieBanner from "@/components/CookieBanner";
import ReviewsSection from "@/components/ReviewsSection";
import AreasSection from "@/components/AreasSection";
import FinalCTA from "@/components/FinalCTA";
import gallery1 from "@/assets/gallery-1.jpg";
import gallery2 from "@/assets/gallery-2.jpg";
import gallery3 from "@/assets/gallery-3.jpg";
import gallery4 from "@/assets/gallery-4.jpg";
import gallery5 from "@/assets/gallery-5.jpg";
import gallery6 from "@/assets/gallery-6.jpg";
import sAire from "@/assets/service-aire.jpg";
import sCald from "@/assets/service-calderas.jpg";
import sAero from "@/assets/service-aerotermia.jpg";
import sSolar from "@/assets/service-solar.jpg";
import sSuelo from "@/assets/service-suelo.jpg";
import sIntegral from "@/assets/service-integral.jpg";

const allImages = [
  gallery1, gallery2, gallery3, gallery4, gallery5, gallery6,
  sAire, sCald, sAero, sSolar, sSuelo, sIntegral,
].map((src, i) => ({ src, alt: `Trabajo Global E.S.T.E. ${i + 1}` }));

const GalleryPage = () => {
  const [selected, setSelected] = useState<number | null>(null);

  return (
    <>
      <Navbar />
      <main>
        <section className="pt-32 md:pt-40 pb-12 bg-background">
          <div className="container text-center">
            <span className="inline-block bg-primary/10 text-primary rounded-full px-4 py-1 text-xs font-bold uppercase tracking-wider mb-3">
              Galería completa
            </span>
            <h1 className="font-heading font-extrabold text-4xl md:text-5xl text-foreground mb-4">
              Nuestros trabajos
            </h1>
            <p className="text-muted-foreground max-w-xl mx-auto">
              Una selección de instalaciones realizadas por nuestro equipo en Sevilla y alrededores.
            </p>
          </div>
        </section>

        <section className="pb-20 bg-background">
          <div className="container">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {allImages.map((img, i) => (
                <motion.button
                  type="button"
                  key={i}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: (i % 8) * 0.04 }}
                  className="overflow-hidden rounded-2xl cursor-pointer group aspect-square shadow-card"
                  style={{ boxShadow: "var(--shadow-card)" }}
                  onClick={() => setSelected(i)}
                >
                  <img
                    src={img.src}
                    alt={img.alt}
                    loading="lazy"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </motion.button>
              ))}
            </div>
          </div>
        </section>

        <AnimatePresence>
          {selected !== null && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-[60] bg-foreground/90 flex items-center justify-center p-4"
              onClick={() => setSelected(null)}
            >
              <motion.img
                initial={{ scale: 0.85 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0.85 }}
                src={allImages[selected].src}
                alt={allImages[selected].alt}
                className="max-w-full max-h-[85vh] rounded-2xl shadow-2xl"
              />
              <button
                onClick={() => setSelected(null)}
                className="absolute top-6 right-6 text-primary-foreground p-2"
                aria-label="Cerrar"
              >
                <X className="w-8 h-8" />
              </button>
            </motion.div>
          )}
        </AnimatePresence>

        <ReviewsSection />
        <AreasSection />
        <FinalCTA />
      </main>
      <Footer />
      <FloatingContactButton />
      <MobileCTA />
      <CookieBanner />
    </>
  );
};

export default GalleryPage;
