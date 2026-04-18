import { motion } from "framer-motion";
import { Phone } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";
import { COMPANY } from "@/data/contact";
import QuoteDialog from "./QuoteDialog";

const FinalCTA = () => (
  <section
    className="relative py-24 md:py-32 overflow-hidden parallax-bg"
    style={{ backgroundImage: `url(${heroBg})` }}
  >
    <div className="absolute inset-0 bg-primary/90" />
    <div className="container relative z-10 text-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <h2 className="font-heading font-extrabold text-3xl md:text-5xl text-primary-foreground mb-5 max-w-3xl mx-auto leading-tight">
          ¿Estás listo para dar el siguiente paso?
        </h2>
        <p className="text-primary-foreground/85 text-lg md:text-xl max-w-2xl mx-auto mb-10">
          ¡Pide tu presupuesto gratuito hoy mismo y empieza a disfrutar del confort que mereces!
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <QuoteDialog>
            <button className="bg-accent text-accent-foreground font-heading font-bold text-base uppercase px-10 py-4 rounded-full hover:bg-accent-dark transition-all shadow-xl shadow-accent/40">
              Pide Presupuesto
            </button>
          </QuoteDialog>
          <a
            href={`tel:${COMPANY.phoneTel}`}
            className="inline-flex items-center gap-2 border-2 border-primary-foreground/40 text-primary-foreground font-heading font-semibold px-8 py-4 rounded-full hover:bg-primary-foreground/10 transition-all"
          >
            <Phone className="w-5 h-5" /> {COMPANY.phoneDisplay}
          </a>
        </div>
      </motion.div>
    </div>
  </section>
);

export default FinalCTA;
