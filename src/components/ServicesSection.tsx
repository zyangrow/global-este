import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { services } from "@/data/services";

const ServicesSection = () => (
  <section id="servicios" className="py-20 md:py-28 bg-accent/10">
    <div className="container">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-14"
      >
        <span className="inline-block bg-primary/10 text-primary rounded-full px-4 py-1 text-xs font-bold uppercase tracking-wider mb-3">
          Lo que hacemos
        </span>
        <h2 className="font-heading font-extrabold text-3xl md:text-4xl text-foreground mb-3">
          Nuestros servicios
        </h2>
        <p className="text-muted-foreground max-w-xl mx-auto">
          Soluciones integrales de climatización, eficiencia energética y
          fontanería para tu hogar o negocio.
        </p>
      </motion.div>

      <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
        {services.map((s, i) => (
          <motion.div
            key={s.slug}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: (i % 6) * 0.06 }}
          >
            <Link
              to={`/servicios/${s.slug}`}
              className="group relative block aspect-[4/5] overflow-hidden rounded-2xl shadow-card hover:shadow-elevated transition-all duration-300"
              style={{ boxShadow: "var(--shadow-card)" }}
            >
              <img
                src={s.image}
                alt={s.title}
                loading="lazy"
                width={600}
                height={750}
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary-dark/90 via-primary-dark/30 to-transparent" />
              <div className="absolute inset-0 p-4 md:p-5 flex items-end">
                <div className="inline-flex items-center gap-2 bg-accent text-accent-foreground rounded-full px-4 py-2 text-xs md:text-sm font-heading font-bold uppercase shadow-lg shadow-accent/40 group-hover:bg-accent-dark transition-colors">
                  {s.title} <ArrowRight className="w-3.5 h-3.5" />
                </div>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default ServicesSection;
