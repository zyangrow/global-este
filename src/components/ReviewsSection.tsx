import { motion } from "framer-motion";
import { Star } from "lucide-react";

const ReviewsSection = () => (
  <section className="relative py-20 md:py-28">
    <div className="container relative z-10">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-12"
      >
        <span className="inline-block bg-white/15 backdrop-blur-sm text-white border border-white/25 rounded-full px-4 py-1 text-xs font-bold uppercase tracking-wider mb-3">
          Reseñas
        </span>
        <h2 className="font-heading font-extrabold text-3xl md:text-4xl text-white mb-4 text-shadow-soft">
          Nuestros clientes hablan por nosotros
        </h2>
        <div className="flex items-center justify-center gap-2 mb-2">
          {[...Array(5)].map((_, i) => (
            <Star key={i} className="w-7 h-7 fill-accent text-accent" />
          ))}
          <span className="font-heading font-bold text-2xl text-white ml-2 text-shadow-soft">5.0</span>
        </div>
        <p className="text-white/85 text-shadow-soft">Basado en reseñas verificadas de Google</p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="max-w-xl mx-auto bg-card rounded-3xl p-8 md:p-10 text-center shadow-2xl border border-white/20"
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
          className="inline-flex bg-accent text-accent-foreground font-heading font-bold text-sm uppercase px-8 py-3.5 rounded-full hover:bg-accent-dark transition-colors btn-glow-accent"
        >
          Dejar una reseña
        </a>
      </motion.div>
    </div>
  </section>
);

export default ReviewsSection;
