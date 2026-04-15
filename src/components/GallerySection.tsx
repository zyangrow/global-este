import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import gallery1 from "@/assets/gallery-1.jpg";
import gallery2 from "@/assets/gallery-2.jpg";
import gallery3 from "@/assets/gallery-3.jpg";
import gallery4 from "@/assets/gallery-4.jpg";
import gallery5 from "@/assets/gallery-5.jpg";
import gallery6 from "@/assets/gallery-6.jpg";

const images = [
  { src: gallery1, alt: "Reforma de baño" },
  { src: gallery2, alt: "Instalación eléctrica" },
  { src: gallery3, alt: "Reforma de cocina" },
  { src: gallery4, alt: "Reforma de salón" },
  { src: gallery5, alt: "Terraza exterior" },
  { src: gallery6, alt: "Pintura decorativa" },
];

const GallerySection = () => {
  const [selected, setSelected] = useState<number | null>(null);

  return (
    <section id="galeria" className="py-16 md:py-24 bg-primary text-primary-foreground">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="font-heading font-black text-3xl md:text-4xl text-primary-foreground mb-4">
            Nuestra <span className="text-accent">Galería</span>
          </h2>
          <p className="text-primary-foreground/70 max-w-xl mx-auto">
            Algunos de nuestros trabajos recientes de construcción y electricidad.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {images.map((img, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="overflow-hidden rounded-xl cursor-pointer group"
              onClick={() => setSelected(i)}
            >
              <img
                src={img.src}
                alt={img.alt}
                loading="lazy"
                className="w-full h-48 md:h-64 object-cover group-hover:scale-110 transition-transform duration-500"
              />
            </motion.div>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selected !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-foreground/90 flex items-center justify-center p-4"
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
