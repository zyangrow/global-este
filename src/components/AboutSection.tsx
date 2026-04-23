import { motion } from "framer-motion";
import teamImg from "@/assets/team.jpg";
import { ABOUT } from "@/config/client";
import QuoteDialog from "./QuoteDialog";

const AboutSection = () => (
  <section className="relative py-20 md:py-28">
    <div
      className="absolute inset-0 pointer-events-none"
      aria-hidden="true"
      style={{
        background:
          "linear-gradient(180deg, hsla(189, 70%, 10%, 0.78) 0%, hsla(189, 65%, 14%, 0.72) 100%)",
      }}
    />
    <div className="container relative z-10">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="overflow-hidden rounded-3xl shadow-2xl aspect-[4/5] max-w-md mx-auto md:mx-0"
        >
          <img src={teamImg} alt="Nuestro equipo" loading="lazy" width={768} height={960} className="w-full h-full object-cover" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <span className="inline-block bg-white/15 backdrop-blur-sm text-white border border-white/25 rounded-full px-4 py-1 text-xs font-bold uppercase tracking-wider mb-4">
            Sobre nosotros
          </span>
          <h2 className="font-heading font-extrabold text-3xl md:text-4xl text-white mb-6 leading-tight text-shadow-soft">
            {ABOUT.title}
          </h2>
          <p className="text-white/90 text-lg leading-relaxed mb-4 text-shadow-soft">
            {ABOUT.body1}
          </p>
          <p className="text-white/85 leading-relaxed mb-8 text-shadow-soft">
            {ABOUT.body2}
          </p>
          <QuoteDialog>
            <button className="bg-accent text-accent-foreground font-heading font-bold text-sm uppercase px-8 py-3.5 rounded-full hover:bg-accent-dark transition-colors btn-glow-accent">
              Pide Presupuesto
            </button>
          </QuoteDialog>
        </motion.div>
      </div>
    </div>
  </section>
);

export default AboutSection;
