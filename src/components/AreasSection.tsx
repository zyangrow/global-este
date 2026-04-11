import { motion } from "framer-motion";
import { MapPin } from "lucide-react";

const areas = [
  "Madrid Centro", "Alcobendas", "Pozuelo de Alarcón", "Las Rozas",
  "Majadahonda", "Boadilla del Monte", "Tres Cantos", "San Sebastián de los Reyes",
  "Torrelodones", "Villanueva de la Cañada", "Brunete", "Villanueva del Pardillo",
];

const AreasSection = () => (
  <section id="areas" className="py-16 md:py-24 bg-secondary/50">
    <div className="container">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-12"
      >
        <h2 className="font-heading font-black text-3xl md:text-4xl text-foreground mb-4">
          Áreas de <span className="text-primary">Servicio</span>
        </h2>
        <p className="text-muted-foreground max-w-xl mx-auto">
          Damos servicio en Madrid y alrededores. Consulta si llegamos a tu zona.
        </p>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-8 items-start">
        <div className="grid grid-cols-2 gap-3">
          {areas.map((area, i) => (
            <motion.div
              key={area}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.04 }}
              className="flex items-center gap-2 glass-card px-4 py-3"
            >
              <MapPin className="w-4 h-4 text-primary flex-shrink-0" />
              <span className="text-foreground text-sm font-medium">{area}</span>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="rounded-2xl overflow-hidden shadow-xl h-[400px]"
        >
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d194347.38440752!2d-3.8196196!3d40.4378698!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd422997800a3c81%3A0xc436dec1357d42a0!2sMadrid%2C%20Spain!5e0!3m2!1ses!2ses!4v1"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Mapa de áreas de servicio"
          />
        </motion.div>
      </div>
    </div>
  </section>
);

export default AreasSection;
