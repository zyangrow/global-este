import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { areas } from "@/data/areas";
import { MAP_EMBED_SRC } from "@/data/contact";

const AreasSection = () => (
  <section id="areas" className="relative py-20 md:py-28">
    <div className="container relative z-10">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-12"
      >
        <span className="inline-block bg-white/15 backdrop-blur-sm text-white border border-white/25 rounded-full px-4 py-1 text-xs font-bold uppercase tracking-wider mb-3">
          Cobertura
        </span>
        <h2 className="font-heading font-extrabold text-3xl md:text-4xl text-white mb-3 text-shadow-soft">
          Áreas de servicio
        </h2>
        <p className="text-white/85 max-w-xl mx-auto text-shadow-soft">
          Damos servicio en Sevilla, Huelva y alrededores.
        </p>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-8 items-stretch">
        <motion.div
          initial={{ opacity: 0, scale: 0.97 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="rounded-3xl overflow-hidden shadow-2xl h-[420px] order-2 md:order-1 ring-1 ring-white/20"
        >
          <iframe
            src={MAP_EMBED_SRC}
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Mapa áreas de servicio"
          />
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 order-1 md:order-2 self-center">
          {areas.map((area, i) => (
            <motion.div
              key={area.slug}
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.04 }}
            >
              <Link
                to={`/areas/${area.slug}`}
                className="flex items-center gap-3 bg-card rounded-2xl px-5 py-4 hover:bg-accent hover:text-accent-foreground transition-colors group shadow-xl"
              >
                <ArrowRight className="w-4 h-4 text-accent group-hover:text-accent-foreground flex-shrink-0" />
                <span className="font-heading font-semibold">{area.name}</span>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default AreasSection;
