import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import { Link } from "react-router-dom";
import gallery1 from "@/assets/gallery-1.jpg";
import gallery2 from "@/assets/gallery-2.jpg";
import gallery3 from "@/assets/gallery-3.jpg";
import gallery4 from "@/assets/gallery-4.jpg";

const images = [
  { src: gallery1, alt: "Instalación de aire acondicionado" },
  { src: gallery2, alt: "Caldera instalada" },
  { src: gallery3, alt: "Suelo radiante" },
  { src: gallery4, alt: "Placas solares en cubierta" },
];

interface Props {
  showCta?: boolean;
}

const GallerySection = ({ showCta = true }: Props) => {
  const [selected, setSelected] = useState<number | null>(null);

  return (
    <section id="galeria" className="py-20 md:py-28 bg-primary-dark">
      <div className="container">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="inline-block bg-primary/10 text-primary rounded-full px-4 py-1 text-xs font-bold uppercase tracking-wider mb-3">
              Galería
            </span>
            <h2 className="font-heading font-extrabold text-3xl md:text-4xl text-foreground">
              Algunos de nuestros trabajos
            </h2>
          </motion.div>
          {showCta && (
            <Link
              to="/galeria"
              className="inline-flex bg-primary-dark text-accent-foreground font-heading font-bold text-sm uppercase px-6 py-3 rounded-full hover:bg-primary-dark-dark transition-colors shadow-lg shadow-accent/30 self-start md:self-auto"
            >
              Ver todas las fotos
            </Link>
          )}
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {images.map((img, i) => (
            <motion.button
              type="button"
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.06 }}
              className="overflow-hidden rounded-2xl cursor-pointer group aspect-square shadow-card"
              style={{ boxShadow: "var(--shadow-card)" }}
              onClick={() => setSelected(i)}
            >
              <img
                src={img.src}
                alt={img.alt}
                loading="lazy"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
            </motion.button>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selected !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] bg-foreground/90 flex items-center justify-center p-4"
            onClick={() => setSelected(null)}
          >
            <motion.img
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              src={images[selected].src}
              alt={images[selected].alt}
              className="max-w-full max-h-[85vh] rounded-2xl shadow-2xl"
            />
            <button
              onClick={() => setSelected(null)}
              className="absolute top-6 right-6 text-primary-foreground p-2"
              aria-label="Cerrar"
            >
              <X className="w-8 h-8" />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default GallerySection;
