import { motion } from "framer-motion";
import teamImg from "@/assets/team.jpg";
import heroBg from "@/assets/hero-bg.jpg";
import QuoteDialog from "./QuoteDialog";

const AboutSection = () => (
  <section
    className="relative py-20 md:py-28 parallax-bg"
    style={{ backgroundImage: `url(${heroBg})` }}
  >
    <div className="absolute inset-0 bg-primary/90" />
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
          <span className="inline-block bg-accent/20 text-accent border border-accent/40 rounded-full px-4 py-1 text-xs font-bold uppercase tracking-wider mb-4">
            Sobre nosotros
          </span>
          <h2 className="font-heading font-extrabold text-3xl md:text-4xl text-primary-foreground mb-6 leading-tight">
            Tu empresa de climatización de confianza en Sevilla
          </h2>
          <p className="text-primary-foreground/85 text-lg leading-relaxed mb-4">
            En Global E.S.T.E. somos especialistas en climatización y eficiencia
            energética. Llevamos años ayudando a familias y empresas a vivir y
            trabajar con el mejor confort, ahorrando en su factura.
          </p>
          <p className="text-primary-foreground/75 leading-relaxed mb-8">
            Trabajamos con las marcas líderes del sector y ofrecemos garantía
            total en cada instalación. Asesoramiento personalizado, presupuesto
            cerrado y servicio postventa para que solo te preocupes de disfrutar.
          </p>
          <QuoteDialog>
            <button className="bg-accent text-accent-foreground font-heading font-bold text-sm uppercase px-8 py-3.5 rounded-full hover:bg-accent-dark transition-colors shadow-lg shadow-accent/30">
              Pide Presupuesto
            </button>
          </QuoteDialog>
        </motion.div>
      </div>
    </div>
  </section>
);

export default AboutSection;
