import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight, Phone, MapPin } from "lucide-react";
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
import { areas } from "@/data/areas";
import { services } from "@/data/services";
import { COMPANY } from "@/data/contact";

const AreaPage = () => {
  const { slug } = useParams<{ slug: string }>();
  const area = areas.find((a) => a.slug === slug);

  if (!area) {
    return (
      <>
        <Navbar />
        <div className="min-h-screen flex items-center justify-center">
          <p className="text-white">Área no encontrada</p>
        </div>
      </>
    );
  }

  return (
    <>
      <Navbar />
      <main>
        <section className="relative pt-28 pb-20 md:pt-36 md:pb-28">
          <div className="container relative z-10">
            <Link to="/" className="inline-flex items-center gap-2 text-white/80 hover:text-white mb-6 transition-colors text-shadow-soft">
              <ArrowLeft className="w-4 h-4" /> Volver al inicio
            </Link>
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
              <div className="flex items-center gap-3 mb-4">
                <MapPin className="w-7 h-7 text-accent" />
                <span className="text-accent font-heading font-bold uppercase tracking-wider text-sm text-shadow-soft">Área de servicio</span>
              </div>
              <h1 className="font-heading font-extrabold text-4xl md:text-5xl lg:text-6xl text-white mb-5 max-w-3xl leading-tight text-shadow-soft">
                Climatización en {area.name}
              </h1>
              <p className="text-white/95 text-lg md:text-xl max-w-2xl mb-8 leading-relaxed text-shadow-soft">
                {area.description}
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

        <section className="py-16 md:py-20 bg-accent/10">
          <div className="container max-w-3xl">
            <p className="text-lg text-muted-foreground leading-relaxed mb-4">
              En Global E.S.T.E. ofrecemos todos nuestros servicios de climatización en {area.name}.
              Con técnicos especializados y equipos de las mejores marcas, nos desplazamos a tu domicilio
              para asesorarte e instalar el sistema más adecuado a tus necesidades.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Aire acondicionado, calderas, aerotermia, suelo radiante y placas solares: encuentra la
              solución perfecta para tu hogar o negocio en {area.name}.
            </p>
          </div>
        </section>

        <section className="relative py-16 md:py-20">
          <div className="container relative z-10">
            <h2 className="font-heading font-extrabold text-2xl md:text-3xl text-white mb-10 text-center text-shadow-soft">
              Servicios disponibles en <span className="text-accent">{area.name}</span>
            </h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-5xl mx-auto">
              {services.map((s, i) => (
                <motion.div
                  key={s.slug}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: (i % 6) * 0.06 }}
                >
                  <Link
                    to={`/servicios/${s.slug}`}
                    className="flex items-center justify-between gap-3 bg-card rounded-2xl p-5 hover:bg-accent hover:text-accent-foreground transition-colors group shadow-xl border border-white/20"
                  >
                    <span className="font-heading font-semibold">{s.title}</span>
                    <ArrowRight className="w-5 h-5 text-accent group-hover:text-accent-foreground flex-shrink-0" />
                  </Link>
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

export default AreaPage;
