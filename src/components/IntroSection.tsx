import { motion } from "framer-motion";
import { Phone } from "lucide-react";
import QuoteForm from "./QuoteForm";

const IntroSection = () => (
  <section className="py-16 md:py-24 bg-background">
    <div className="container">
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="font-heading font-black text-4xl md:text-5xl lg:text-6xl text-foreground leading-tight mb-6">
            Tu jardín perfecto{" "}
            <span className="text-primary">empieza aquí</span>
          </h1>
          <p className="text-muted-foreground text-lg md:text-xl max-w-lg mb-8 leading-relaxed">
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
              className="inline-flex items-center gap-2 border-2 border-primary/30 text-primary font-heading font-semibold text-base px-8 py-4 rounded-full hover:bg-primary/5 transition-all"
            >
              <Phone className="w-5 h-5" />
              Llamar ahora
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <QuoteForm />
        </motion.div>
      </div>
    </div>
  </section>
);

export default IntroSection;
