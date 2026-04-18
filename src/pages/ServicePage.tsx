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
          <p>Servicio no encontrado</p>
        </div>
      </>
    );
  }

  return (
    <>
      <Navbar />
      <main>
        <section className="relative pt-28 pb-20 md:pt-36 md:pb-28 overflow-hidden">
          <div className="absolute inset-0">
            <img src={service.image} alt={service.title} className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-r from-primary-dark/90 via-primary-dark/70 to-primary-dark/40" />
          </div>
          <div className="container relative z-10">
            <Link to="/" className="inline-flex items-center gap-2 text-primary-foreground/70 hover:text-primary-foreground mb-6 transition-colors">
              <ArrowLeft className="w-4 h-4" /> Volver al inicio
            </Link>
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
              <h1 className="font-heading font-extrabold text-4xl md:text-5xl lg:text-6xl text-primary-foreground mb-5 max-w-3xl leading-tight">
                {service.title}
              </h1>
              <p className="text-primary-foreground/90 text-lg md:text-xl max-w-2xl mb-8 leading-relaxed">
                {service.short}
              </p>
              <div className="flex flex-wrap gap-3">
                <QuoteDialog>
                  <button className="bg-accent text-accent-foreground font-heading font-bold text-base uppercase px-8 py-4 rounded-full hover:bg-accent-dark transition-all shadow-xl shadow-accent/40">
                    Pide Presupuesto
                  </button>
                </QuoteDialog>
                <a href={`tel:${COMPANY.phoneTel}`} className="inline-flex items-center gap-2 border-2 border-primary-foreground/40 text-primary-foreground font-heading font-semibold px-7 py-4 rounded-full hover:bg-primary-foreground/10 transition-all">
                  <Phone className="w-5 h-5" /> {COMPANY.phoneDisplay}
                </a>
              </div>
            </motion.div>
          </div>
        </section>

        <section className="py-16 md:py-20 bg-background">
          <div className="container max-w-3xl">
            <p className="text-lg text-muted-foreground leading-relaxed">{service.long}</p>
          </div>
        </section>

        <section className="py-16 md:py-20 bg-secondary/40">
          <div className="container">
            <h2 className="font-heading font-extrabold text-2xl md:text-3xl text-foreground mb-8 text-center">
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
                  className="bg-card rounded-2xl p-5 flex items-start gap-3 shadow-card border border-border/50"
                  style={{ boxShadow: "var(--shadow-card)" }}
                >
                  <CheckCircle className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                  <span className="text-foreground font-medium">{b}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 md:py-20 bg-background">
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
