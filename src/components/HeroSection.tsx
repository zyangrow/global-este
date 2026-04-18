import { motion } from "framer-motion";
import { Phone } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";
import QuoteForm from "./QuoteForm";
import { COMPANY } from "@/data/contact";
import QuoteDialog from "./QuoteDialog";

const HeroSection = () => {
  return (
    <section id="inicio" className="relative min-h-screen w-full overflow-hidden flex items-center pt-24 pb-16 md:pt-28 md:pb-20">
      <div className="absolute inset-0">
        <img
          src={heroBg}
          alt="Climatización profesional Global E.S.T.E."
          width={1920}
          height={1080}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary-dark/85 via-primary-dark/65 to-primary-dark/30" />
      </div>

      <div className="container relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
          >
            <span className="inline-block bg-accent/20 text-accent border border-accent/30 rounded-full px-4 py-1.5 text-xs font-bold uppercase tracking-wider mb-5">
              Climatización integral en {COMPANY.city}
            </span>
            <h1 className="font-heading font-extrabold text-4xl md:text-5xl lg:text-6xl text-primary-foreground leading-[1.05] mb-6">
              Confort total para tu hogar y tu negocio
            </h1>
            <p className="text-primary-foreground/90 text-lg md:text-xl max-w-lg mb-8 leading-relaxed">
              Especialistas en aire acondicionado, calderas, aerotermia y placas
              solares. Te asesoramos, instalamos y mantenemos tu sistema con
              garantía total.
            </p>
            <div className="flex flex-wrap gap-3">
              <QuoteDialog>
                <button className="bg-accent text-accent-foreground font-heading font-bold text-base uppercase px-8 py-4 rounded-full hover:bg-accent-dark transition-all shadow-xl shadow-accent/40">
                  Pide Presupuesto
                </button>
              </QuoteDialog>
              <a
                href={`tel:${COMPANY.phoneTel}`}
                className="inline-flex items-center gap-2 border-2 border-primary-foreground/40 text-primary-foreground font-heading font-semibold px-7 py-4 rounded-full hover:bg-primary-foreground/10 transition-all"
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
};

export default HeroSection;
