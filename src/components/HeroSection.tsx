import { motion } from "framer-motion";
import { Phone } from "lucide-react";
import QuoteForm from "./QuoteForm";
import { COMPANY, HERO } from "@/config/client";
import QuoteDialog from "./QuoteDialog";

const HeroSection = () => (
  <section id="inicio" className="relative min-h-screen w-full flex items-center pt-24 pb-16 md:pt-28 md:pb-20">
    <div className="container relative z-10">
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
        >
          <span className="inline-block bg-white/15 backdrop-blur-sm text-white border border-white/25 rounded-full px-4 py-1.5 text-xs font-bold uppercase tracking-wider mb-5">
            {COMPANY.broadService} en {COMPANY.city}
          </span>
          <h1 className="font-heading font-extrabold text-4xl md:text-5xl lg:text-6xl text-white leading-[1.05] mb-6 text-shadow-soft">
            {HERO.title}
          </h1>
          <p className="text-white/95 text-lg md:text-xl max-w-lg mb-8 leading-relaxed text-shadow-soft">
            {HERO.description}
          </p>
          <div className="flex flex-wrap gap-3">
            <QuoteDialog>
              <button className="bg-accent text-accent-foreground font-heading font-bold text-base uppercase px-8 py-4 rounded-full hover:bg-accent-dark transition-all btn-glow-accent">
                Pide Presupuesto
              </button>
            </QuoteDialog>
            <a
              href={`tel:${COMPANY.phoneTel}`}
              className="inline-flex items-center gap-2 border-2 border-white/50 text-white font-heading font-semibold px-7 py-4 rounded-full hover:bg-white/10 transition-all backdrop-blur-sm"
            >
              <Phone className="w-5 h-5" />
              {COMPANY.phoneDisplay}
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="lg:max-w-md lg:ml-auto w-full"
        >
          <QuoteForm />
        </motion.div>
      </div>
    </div>
  </section>
);

export default HeroSection;
