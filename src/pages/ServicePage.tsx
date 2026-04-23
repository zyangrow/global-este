import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, CheckCircle, Phone } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import MobileCTA from "@/components/MobileCTA";
import FloatingContactButton from "@/components/FloatingContactButton";
import CookieBanner from "@/components/CookieBanner";
import GallerySection from "@/components/GallerySection";
import ReviewsSection from "@/components/ReviewsSection";
import AreasSection from "@/components/AreasSection";
import FinalCTA from "@/components/FinalCTA";
import QuoteDialog from "@/components/QuoteDialog";
import { services } from "@/data/services";
import { COMPANY } from "@/data/contact";

const ServicePage = () => {
  const { slug } = useParams<{ slug: string }>();
  const service = services.find((s) => s.slug === slug);

  if (!service) {
    return (
      <>
        <Navbar />
        <div className="min-h-screen flex items-center justify-center">
          <p className="text-white">Servicio no encontrado</p>
        </div>
      </>
    );
  }

  return (
    <>
      <Seo
        title={`${service.title} en Sevilla | ${COMPANY.name}`}
        description={`${service.title} en Sevilla con ${COMPANY.name}. ${service.short} Presupuesto gratis en 24h.`}
        jsonLd={localBusinessJsonLd}
      />
      <Navbar />
      <main>
        <section className="relative pt-28 pb-20 md:pt-36 md:pb-28">
          <div className="container relative z-10">
            <Link to="/" className="inline-flex items-center gap-2 text-white/80 hover:text-white mb-6 transition-colors text-shadow-soft">
              <ArrowLeft className="w-4 h-4" /> Volver al inicio
            </Link>
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
              <h1 className="font-heading font-extrabold text-4xl md:text-5xl lg:text-6xl text-white mb-5 max-w-3xl leading-tight text-shadow-soft">
                {service.title} en Sevilla
              </h1>
              <p className="text-white/95 text-lg md:text-xl max-w-2xl mb-8 leading-relaxed text-shadow-soft">
                {service.short}
              </p>
              <div className="flex flex-wrap gap-3">
                <QuoteDialog>
                  <button className="bg-accent text-accent-foreground font-heading font-bold text-base uppercase px-8 py-4 rounded-full hover:bg-accent-dark transition-all btn-glow-accent">
                    Pide Presupuesto
                  </button>
                </QuoteDialog>
                <a href={`tel:${COMPANY.phoneTel}`} className="inline-flex items-center gap-2 border-2 border-white/50 text-white font-heading font-semibold px-7 py-4 rounded-full hover:bg-white/10 transition-all backdrop-blur-sm">
                  <Phone className="w-5 h-5" /> {COMPANY.phoneDisplay}
                </a>
              </div>
            </motion.div>
          </div>
        </section>

        <section className="py-16 md:py-20 bg-primary-dark">
          <div className="container max-w-3xl">
            <img src={service.image} alt={service.title} className="w-full h-72 md:h-96 object-cover rounded-3xl shadow-2xl mb-8" />
            <p className="text-lg text-muted-foreground leading-relaxed">{service.long}</p>
          </div>
        </section>

        <section className="relative py-16 md:py-20">
          <div className="container relative z-10">
            <h2 className="font-heading font-extrabold text-2xl md:text-3xl text-white mb-8 text-center text-shadow-soft">
              Beneficios
            </h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-5xl mx-auto">
              {service.benefits.map((b, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                  className="bg-card rounded-2xl p-5 flex items-start gap-3 shadow-xl border border-white/20"
                >
                  <CheckCircle className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                  <span className="text-foreground font-medium">{b}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 md:py-20 bg-primary-dark">
          <div className="container max-w-3xl">
            <h2 className="font-heading font-extrabold text-2xl md:text-3xl text-foreground mb-10 text-center">
              Nuestro proceso
            </h2>
            <div className="space-y-5">
              {service.steps.map((step, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="flex items-start gap-4 bg-card rounded-2xl p-5 shadow-card"
                  style={{ boxShadow: "var(--shadow-card)" }}
                >
                  <div className="w-12 h-12 rounded-full bg-primary text-primary-foreground font-heading font-extrabold text-lg flex items-center justify-center flex-shrink-0">
                    {i + 1}
                  </div>
                  <p className="text-foreground text-lg pt-2.5">{step}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <GallerySection />
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

export default ServicePage;
