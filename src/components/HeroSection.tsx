import { motion } from "framer-motion";
import { Phone } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";
import QuoteForm from "./QuoteForm";

const HeroSection = () => {
  return (
    <section id="inicio" className="relative min-h-screen flex items-center overflow-hidden">
      <div className="absolute inset-0">
        <img
          src={heroBg}
          alt="Jardinería profesional"
          width={1920}
          height={1080}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-foreground/80 via-foreground/50 to-foreground/30" />
      </div>

      <div className="container relative z-10 pt-24 pb-16 md:pt-32 md:pb-24">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <h1 className="font-heading font-black text-4xl md:text-5xl lg:text-6xl text-primary-foreground leading-tight mb-6">
              Tu jardín perfecto{" "}
              <span className="text-accent">empieza aquí</span>
            </h1>
            <p className="text-primary-foreground/80 text-lg md:text-xl max-w-lg mb-8 leading-relaxed">
              Más de 30 años transformando espacios verdes. Mantenimiento, diseño,
              poda y mucho más con garantía de calidad profesional.
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href="#contacto"
                className="inline-flex bg-accent text-accent-foreground font-heading font-bold text-base uppercase px-8 py-4 rounded-full hover:brightness-110 transition-all shadow-xl shadow-accent/40"
              >
                Pide Presupuesto Gratis
              </a>
              <a
                href="tel:+34603042314"
                className="inline-flex items-center gap-2 border-2 border-primary-foreground/40 text-primary-foreground font-heading font-semibold text-base px-8 py-4 rounded-full hover:bg-primary-foreground/10 transition-all"
              >
                <Phone className="w-5 h-5" />
                Llamar ahora
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="hidden lg:block"
          >
            <QuoteForm />
          </motion.div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 w-full">
        <svg viewBox="0 0 1440 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
          <path d="M0,60 C360,120 1080,0 1440,60 L1440,100 L0,100 Z" fill="hsl(120,20%,98%)" />
        </svg>
      </div>
    </section>
  );
};

export default HeroSection;
