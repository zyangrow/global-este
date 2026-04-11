import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, Phone, CheckCircle, MapPin } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import MobileCTA from "@/components/MobileCTA";
import { areas } from "@/components/AreasSection";
import { services } from "@/components/ServicesSection";
import heroBg from "@/assets/hero-bg.jpg";

const AreaPage = () => {
  const { slug } = useParams<{ slug: string }>();
  const area = areas.find((a) => a.slug === slug);

  if (!area) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p>Área no encontrada</p>
      </div>
    );
  }

  return (
    <>
      <Navbar />
      <main>
        {/* Hero */}
        <section className="relative pt-24 pb-16 md:pt-32 md:pb-24 overflow-hidden">
          <div className="absolute inset-0">
            <img src={heroBg} alt={area.name} className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-r from-primary-dark/90 to-primary-dark/60" />
          </div>
          <div className="container relative z-10">
            <Link to="/#areas" className="inline-flex items-center gap-2 text-primary-foreground/70 hover:text-primary-foreground mb-6 transition-colors">
              <ArrowLeft className="w-4 h-4" /> Volver al inicio
            </Link>
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
              <div className="flex items-center gap-3 mb-4">
                <MapPin className="w-8 h-8 text-accent" />
                <h1 className="font-heading font-black text-4xl md:text-5xl text-primary-foreground">
                  Jardinería en {area.name}
                </h1>
              </div>
              <p className="text-primary-foreground/80 text-lg max-w-2xl">
                Servicio profesional de jardinería y paisajismo en {area.name} y alrededores.
                Presupuesto gratuito y sin compromiso.
              </p>
            </motion.div>
          </div>
          <div className="absolute bottom-0 left-0 w-full">
            <svg viewBox="0 0 1440 80" fill="none" className="w-full">
              <path d="M0,40 C360,90 1080,0 1440,40 L1440,80 L0,80 Z" fill="hsl(120,20%,98%)" />
            </svg>
          </div>
        </section>

        {/* Description */}
        <section className="py-16 bg-background">
          <div className="container max-w-3xl">
            <h2 className="font-heading font-black text-2xl md:text-3xl text-foreground mb-6">
              Servicios de jardinería en <span className="text-primary">{area.name}</span>
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-4">
              En Viveros Veraviv ofrecemos todos nuestros servicios de jardinería profesional
              en {area.name}. Con más de 30 años de experiencia, nuestro equipo se desplaza
              hasta tu ubicación para transformar y mantener tu jardín en perfecto estado.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Desde mantenimiento periódico hasta proyectos completos de diseño paisajístico,
              estamos preparados para cualquier reto. Solicita tu presupuesto gratuito y
              descubre por qué somos la opción preferida en {area.name}.
            </p>
          </div>
        </section>

        {/* Services available */}
        <section className="py-16 bg-primary text-primary-foreground">
          <div className="container max-w-3xl">
            <h2 className="font-heading font-black text-2xl md:text-3xl mb-8">
              Servicios disponibles en <span className="text-accent">{area.name}</span>
            </h2>
            <div className="grid sm:grid-cols-2 gap-4">
              {services.map((s, i) => (
                <motion.div
                  key={s.slug}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                >
                  <Link
                    to={`/servicios/${s.slug}`}
                    className="flex items-center gap-3 bg-primary-foreground/10 border border-primary-foreground/15 rounded-xl p-4 hover:bg-primary-foreground/20 transition-colors"
                  >
                    <CheckCircle className="w-5 h-5 text-accent flex-shrink-0" />
                    <span className="font-medium">{s.title}</span>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 bg-background text-center">
          <div className="container">
            <h2 className="font-heading font-black text-3xl text-foreground mb-6">
              ¿Necesitas un jardinero en <span className="text-primary">{area.name}</span>?
            </h2>
            <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
              Contacta con nosotros y recibe un presupuesto personalizado sin compromiso.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="/#contacto"
                className="inline-flex bg-accent text-accent-foreground font-heading font-bold text-base uppercase px-10 py-4 rounded-full hover:brightness-110 transition-all shadow-xl shadow-accent/40"
              >
                Pide Presupuesto Gratis
              </a>
              <a
                href="tel:+34603042314"
                className="inline-flex items-center gap-2 border-2 border-primary/30 text-primary font-heading font-semibold px-8 py-4 rounded-full hover:bg-primary/5 transition-all"
              >
                <Phone className="w-5 h-5" /> Llamar
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <WhatsAppButton />
      <MobileCTA />
    </>
  );
};

export default AreaPage;
