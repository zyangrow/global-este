import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import serviceMantenimiento from "@/assets/service-mantenimiento.jpg";
import serviceDiseno from "@/assets/service-diseno.jpg";
import servicePoda from "@/assets/service-poda.jpg";
import serviceRiego from "@/assets/service-riego.jpg";
import serviceCesped from "@/assets/service-cesped.jpg";
import serviceLimpieza from "@/assets/service-limpieza.jpg";

const images = [
  { src: serviceMantenimiento, alt: "Mantenimiento de jardines" },
  { src: serviceDiseno, alt: "Diseño de paisaje" },
  { src: servicePoda, alt: "Poda profesional" },
  { src: serviceRiego, alt: "Sistema de riego" },
  { src: serviceCesped, alt: "Césped artificial" },
  { src: serviceLimpieza, alt: "Limpieza exterior" },
];

const GallerySection = () => {
  const [selected, setSelected] = useState<number | null>(null);

  return (
    <section id="galeria" className="py-16 md:py-24 bg-secondary/50">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="font-heading font-black text-3xl md:text-4xl text-foreground mb-4">
            Nuestra <span className="text-primary">Galería</span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Descubre algunos de nuestros trabajos más recientes.
          </p>
        </motion.div>

        <div className="columns-2 md:columns-3 gap-4 space-y-4">
          {images.map((img, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="break-inside-avoid cursor-pointer overflow-hidden rounded-xl group"
              onClick={() => setSelected(i)}
            >
              <img
                src={img.src}
                alt={img.alt}
                loading="lazy"
                className="w-full object-cover group-hover:scale-105 transition-transform duration-500"
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
            className="fixed inset-0 z-[100] bg-foreground/90 flex items-center justify-center p-4"
            onClick={() => setSelected(null)}
          >
            <button className="absolute top-6 right-6 text-primary-foreground" onClick={() => setSelected(null)}>
              <X className="w-8 h-8" />
            </button>
            <motion.img
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              src={images[selected].src}
              alt={images[selected].alt}
              className="max-w-full max-h-[85vh] rounded-xl object-contain"
            />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default GallerySection;
