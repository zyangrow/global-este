import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, CheckCircle, Phone } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import MobileCTA from "@/components/MobileCTA";
import { services } from "@/components/ServicesSection";

const serviceDetails: Record<string, { benefits: string[]; steps: string[]; longDesc: string }> = {
  reformas: {
    longDesc: "Nuestro servicio de reformas integrales incluye cocinas, baños, salones y locales comerciales. Nos encargamos de todo: diseño, obra, instalaciones y acabados para que no tengas que preocuparte de nada.",
    benefits: ["Reforma llave en mano", "Diseño personalizado", "Materiales de primera calidad", "Cumplimiento de plazos"],
    steps: ["Visita gratuita y presupuesto detallado", "Diseño y planificación de la obra", "Ejecución y entrega impecable"],
  },
  electricidad: {
    longDesc: "Realizamos todo tipo de instalaciones eléctricas: cuadros eléctricos, cableado, iluminación, automatización y certificados. Electricistas autorizados con garantía total.",
    benefits: ["Electricistas certificados", "Cumplimiento normativa vigente", "Ahorro energético garantizado", "Servicio de urgencias 24h"],
    steps: ["Diagnóstico y evaluación eléctrica", "Propuesta técnica y presupuesto", "Instalación y certificación"],
  },
  fontaneria: {
    longDesc: "Servicio completo de fontanería: reparación de fugas, instalación de sanitarios, tuberías, calentadores y sistemas de agua. Respuesta rápida y trabajo limpio.",
    benefits: ["Reparaciones urgentes", "Instalación de sanitarios", "Detección de fugas", "Garantía en todos los trabajos"],
    steps: ["Diagnóstico del problema", "Presupuesto sin compromiso", "Reparación o instalación profesional"],
  },
  pintura: {
    longDesc: "Pintura interior y exterior con acabados profesionales. Usamos pinturas de máxima calidad para un resultado duradero y estético que transforma tu espacio.",
    benefits: ["Acabados impecables", "Pinturas ecológicas disponibles", "Preparación de superficies incluida", "Limpieza total al finalizar"],
    steps: ["Preparación y protección del espacio", "Aplicación profesional de pintura", "Revisión final y limpieza"],
  },
  albanileria: {
    longDesc: "Obras de albañilería profesional: alicatados, solados, tabiques, reformas estructurales y trabajos de mampostería con la mejor calidad.",
    benefits: ["Trabajo preciso y limpio", "Materiales de calidad", "Experiencia en todo tipo de obras", "Presupuesto cerrado"],
    steps: ["Evaluación de la obra necesaria", "Planificación y materiales", "Ejecución profesional"],
  },
  climatizacion: {
    longDesc: "Instalación y mantenimiento de sistemas de climatización: aire acondicionado, calefacción, bombas de calor y suelo radiante para el máximo confort en tu hogar.",
    benefits: ["Eficiencia energética", "Marcas líderes del mercado", "Mantenimiento incluido", "Instalación rápida y limpia"],
    steps: ["Estudio de necesidades climáticas", "Selección del equipo adecuado", "Instalación y puesta en marcha"],
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
              <path d="M0,40 C360,90 1080,0 1440,40 L1440,80 L0,80 Z" fill="hsl(210,20%,98%)" />
            </svg>
          </div>
        </section>

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
                href="tel:+34612345678"
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
