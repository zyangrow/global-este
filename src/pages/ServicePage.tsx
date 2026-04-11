import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, CheckCircle, Phone } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import MobileCTA from "@/components/MobileCTA";
import { services } from "@/components/ServicesSection";

const serviceDetails: Record<string, { benefits: string[]; steps: string[]; longDesc: string }> = {
  mantenimiento: {
    longDesc: "Nuestro servicio de mantenimiento de jardines incluye corte de césped, limpieza de parterres, fertilización, control de plagas y todo lo necesario para mantener tu jardín en perfecto estado durante todo el año.",
    benefits: ["Jardín impecable todo el año", "Ahorro de tiempo y esfuerzo", "Aumento del valor de tu propiedad", "Planes personalizados según necesidades"],
    steps: ["Visita gratuita y evaluación del jardín", "Plan de mantenimiento personalizado", "Ejecución periódica y seguimiento"],
  },
  diseno: {
    longDesc: "Creamos jardines únicos que reflejan tu estilo. Desde la planificación hasta la ejecución, diseñamos espacios verdes funcionales y estéticamente impresionantes.",
    benefits: ["Diseño personalizado y único", "Plantas adaptadas al clima local", "Optimización del espacio disponible", "Visualización 3D del proyecto"],
    steps: ["Consulta y análisis del espacio", "Propuesta de diseño con visualización", "Ejecución del proyecto completo"],
  },
  poda: {
    longDesc: "Realizamos podas profesionales de árboles y setos con técnicas especializadas para garantizar la salud y estética de tus plantas.",
    benefits: ["Mejora la salud de los árboles", "Prevención de riesgos", "Estética y forma perfecta", "Recogida y limpieza incluida"],
    steps: ["Inspección y diagnóstico", "Poda con técnicas profesionales", "Limpieza total del área"],
  },
  riego: {
    longDesc: "Instalamos sistemas de riego automático eficientes que ahorran agua y mantienen tu jardín perfectamente hidratado sin esfuerzo.",
    benefits: ["Ahorro de hasta un 40% de agua", "Riego uniforme y programable", "Menor mantenimiento diario", "Compatible con domótica"],
    steps: ["Estudio del terreno y necesidades", "Diseño del sistema de riego", "Instalación y programación"],
  },
  cesped: {
    longDesc: "Instalamos césped natural de la mejor calidad y césped artificial de última generación para que disfrutes de un jardín verde todo el año.",
    benefits: ["Verde perfecto todo el año", "Bajo mantenimiento (artificial)", "Resistente al uso intensivo", "Instalación rápida y profesional"],
    steps: ["Preparación del terreno", "Selección del tipo de césped", "Instalación profesional"],
  },
  limpieza: {
    longDesc: "Servicio profesional de limpieza de exteriores: terrazas, patios, fachadas, caminos y más. Devolvemos el brillo original a tus superficies.",
    benefits: ["Superficies como nuevas", "Eliminación de manchas y musgo", "Tratamiento antiresbalante", "Protección duradera"],
    steps: ["Evaluación de superficies", "Limpieza con equipos profesionales", "Tratamiento protector"],
  },
};

const ServicePage = () => {
  const { slug } = useParams<{ slug: string }>();
  const service = services.find((s) => s.slug === slug);
  const details = slug ? serviceDetails[slug] : null;

  if (!service || !details) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p>Servicio no encontrado</p>
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
            <img src={service.image} alt={service.title} className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-r from-foreground/85 to-foreground/50" />
          </div>
          <div className="container relative z-10">
            <Link to="/" className="inline-flex items-center gap-2 text-primary-foreground/70 hover:text-primary-foreground mb-6 transition-colors">
              <ArrowLeft className="w-4 h-4" /> Volver al inicio
            </Link>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="font-heading font-black text-4xl md:text-5xl text-primary-foreground mb-4"
            >
              {service.title}
            </motion.h1>
            <p className="text-primary-foreground/80 text-lg max-w-2xl">{service.desc}</p>
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
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-lg text-muted-foreground leading-relaxed"
            >
              {details.longDesc}
            </motion.p>
          </div>
        </section>

        {/* Benefits */}
        <section className="py-16 bg-secondary/50">
          <div className="container max-w-3xl">
            <h2 className="font-heading font-black text-2xl md:text-3xl text-foreground mb-8">
              <span className="text-primary">Beneficios</span>
            </h2>
            <div className="grid sm:grid-cols-2 gap-4">
              {details.benefits.map((b, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="flex items-center gap-3 glass-card p-4"
                >
                  <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                  <span className="text-foreground font-medium">{b}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Process */}
        <section className="py-16 bg-background">
          <div className="container max-w-3xl">
            <h2 className="font-heading font-black text-2xl md:text-3xl text-foreground mb-8">
              Nuestro <span className="text-primary">Proceso</span>
            </h2>
            <div className="space-y-6">
              {details.steps.map((step, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.15 }}
                  className="flex items-start gap-4"
                >
                  <div className="w-10 h-10 rounded-full bg-primary text-primary-foreground font-heading font-bold flex items-center justify-center flex-shrink-0">
                    {i + 1}
                  </div>
                  <p className="text-foreground text-lg pt-1.5">{step}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 bg-primary text-center">
          <div className="container">
            <h2 className="font-heading font-black text-3xl text-primary-foreground mb-6">
              ¿Te interesa este servicio?
            </h2>
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="/#contacto"
                className="inline-flex bg-accent text-accent-foreground font-heading font-bold text-base uppercase px-10 py-4 rounded-full hover:brightness-110 transition-all shadow-xl shadow-accent/40"
              >
                Pide Presupuesto Gratis
              </a>
              <a
                href="tel:+34603042314"
                className="inline-flex items-center gap-2 border-2 border-primary-foreground/40 text-primary-foreground font-heading font-semibold px-8 py-4 rounded-full hover:bg-primary-foreground/10 transition-all"
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

export default ServicePage;
