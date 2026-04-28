import { useEffect } from "react";
import { motion } from "framer-motion";
import { Star } from "lucide-react";
import { COMPANY } from "@/config/client";

const WIDGET_SCRIPT_SRC = "https://reputationhub.site/reputation/assets/review-widget.js";

const ReviewsSection = () => {
  useEffect(() => {
    if (document.querySelector(`script[src="${WIDGET_SCRIPT_SRC}"]`)) return;
    const s = document.createElement("script");
    s.src = WIDGET_SCRIPT_SRC;
    s.async = true;
    document.body.appendChild(s);
  }, []);

  return (
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
          className="max-w-5xl mx-auto mb-10"
        >
          <iframe
            className="lc_reviews_widget"
            src="https://reputationhub.site/reputation/widgets/review_widget/XduES4QQwRpYdtKNAkWN?widgetId=69f046f3c51dee5e815e269c"
            frameBorder={0}
            scrolling="no"
            style={{ minWidth: "100%", width: "100%", background: "transparent" }}
            title="Reseñas de clientes"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <a
            href={COMPANY.gmbReviewLink}
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
};

export default ReviewsSection;
