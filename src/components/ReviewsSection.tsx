import { motion } from "framer-motion";
import { Star } from "lucide-react";
import ParallaxSection from "./ParallaxSection";

const ReviewsSection = () => (
  <ParallaxSection className="py-20 md:py-28">
    <div className="container">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-12"
      >
        <span className="inline-block bg-white/15 backdrop-blur-sm text-white border border-white/25 rounded-full px-4 py-1 text-xs font-bold uppercase tracking-wider mb-3">
          Reseñas
        </span>
        <h2 className="font-heading font-extrabold text-3xl md:text-4xl text-white mb-4 [text-shadow:0_2px_8px_rgba(0,0,0,0.2)]">
          Nuestros clientes hablan por nosotros
        </h2>
        <div className="flex items-center justify-center gap-2 mb-2">
          {[...Array(5)].map((_, i) => (
            <Star key={i} className="w-7 h-7 fill-accent text-accent" />
          ))}
          <span className="font-heading font-bold text-2xl text-white ml-2">5.0</span>
        </div>
        <p className="text-white/85">Basado en reseñas verificadas de Google</p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="max-w-xl mx-auto bg-card rounded-3xl p-8 md:p-10 text-center shadow-2xl border border-border/50"
      >
        <div className="flex items-center justify-center gap-1 mb-4">
          {[...Array(5)].map((_, i) => (
            <Star key={i} className="w-6 h-6 fill-accent text-accent" />
          ))}
        </div>
        <h3 className="font-heading font-extrabold text-xl md:text-2xl text-foreground mb-2">
          Déjanos una reseña en Google
        </h3>
        <p className="text-muted-foreground mb-6">
          ¿Has trabajado con nosotros? Tu opinión nos ayuda a seguir mejorando.
        </p>
        <a
          href="https://g.page/r/global-este/review"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex bg-accent text-accent-foreground font-heading font-bold text-sm uppercase px-8 py-3.5 rounded-full hover:bg-accent-dark transition-colors shadow-lg shadow-accent/40 ring-1 ring-white/20"
        >
          Dejar una reseña
        </a>
      </motion.div>
    </div>
  </ParallaxSection>
);

export default ReviewsSection;
