import { motion } from "framer-motion";
import { Star } from "lucide-react";

const reviews = [
  { name: "María García", rating: 5, text: "Excelente trabajo en la reforma de mi cocina. Muy profesionales y puntuales. Todo quedó perfecto.", date: "Hace 2 semanas" },
  { name: "Carlos López", rating: 5, text: "Instalaron toda la electricidad de mi piso nuevo. Trabajo limpio e impecable. 100% recomendados.", date: "Hace 1 mes" },
  { name: "Ana Martínez", rating: 5, text: "Repararon una fuga de agua urgente en fin de semana. Rapidísimos y muy profesionales.", date: "Hace 2 meses" },
  { name: "Pedro Sánchez", rating: 4, text: "Muy buen servicio de pintura. Dejaron todo limpio y recogido. Repetiré seguro.", date: "Hace 3 meses" },
];

const ReviewsSection = () => (
  <section className="py-16 md:py-24 bg-background">
    <div className="container">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-12"
      >
        <h2 className="font-heading font-black text-3xl md:text-4xl text-foreground mb-4">
          Lo que dicen nuestros <span className="text-primary">clientes</span>
        </h2>
        <div className="flex items-center justify-center gap-2 mb-2">
          {[...Array(5)].map((_, i) => (
            <Star key={i} className="w-6 h-6 fill-accent text-accent" />
          ))}
          <span className="font-heading font-bold text-xl text-foreground ml-2">4.9/5</span>
        </div>
        <p className="text-muted-foreground">Basado en +80 reseñas de Google</p>
      </motion.div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {reviews.map((r, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="glass-card p-6 hover:shadow-xl transition-shadow"
          >
            <div className="flex gap-1 mb-3">
              {[...Array(r.rating)].map((_, j) => (
                <Star key={j} className="w-4 h-4 fill-accent text-accent" />
              ))}
            </div>
            <p className="text-foreground text-sm mb-4 leading-relaxed">"{r.text}"</p>
            <div className="flex items-center justify-between">
              <span className="font-heading font-semibold text-sm text-foreground">{r.name}</span>
              <span className="text-muted-foreground text-xs">{r.date}</span>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="text-center mt-8">
        <a
          href="https://g.page/review"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex bg-primary text-primary-foreground font-heading font-bold text-sm uppercase px-8 py-3 rounded-full hover:bg-primary-dark transition-colors"
        >
          Dejar una reseña
        </a>
      </div>
    </div>
  </section>
);

export default ReviewsSection;
