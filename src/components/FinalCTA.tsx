import { motion } from "framer-motion";
import { Phone } from "lucide-react";
import ctaBg from "@/assets/cta-bg.jpg";

const FinalCTA = () => (
  <section className="relative py-24 md:py-32 overflow-hidden">
    <div className="absolute inset-0">
      <img src={ctaBg} alt="" loading="lazy" width={1920} height={800} className="w-full h-full object-cover" />
      <div className="absolute inset-0 bg-primary/85" />
    </div>

    <div className="container relative z-10 text-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <h2 className="font-heading font-black text-3xl md:text-5xl text-primary-foreground mb-6">
          ¿Listo para transformar tu jardín?
        </h2>
        <p className="text-primary-foreground/80 text-lg max-w-xl mx-auto mb-8">
          Solicita tu presupuesto gratuito y sin compromiso. Te respondemos en menos de 24 horas.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <a
            href="#contacto"
            className="inline-flex bg-accent text-accent-foreground font-heading font-bold text-base uppercase px-10 py-4 rounded-full hover:brightness-110 transition-all shadow-xl shadow-accent/40"
          >
            Pide Presupuesto Gratis
          </a>
          <a
            href="tel:+34603042314"
            className="inline-flex items-center gap-2 border-2 border-primary-foreground/40 text-primary-foreground font-heading font-semibold text-base px-8 py-4 rounded-full hover:bg-primary-foreground/10 transition-all"
          >
            <Phone className="w-5 h-5" /> Llamar ahora
          </a>
        </div>
      </motion.div>
    </div>
  </section>
);

export default FinalCTA;
