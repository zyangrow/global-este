import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import serviceReformas from "@/assets/service-reformas.jpg";
import serviceElectricidad from "@/assets/service-electricidad.jpg";
import serviceFontaneria from "@/assets/service-fontaneria.jpg";
import servicePintura from "@/assets/service-pintura.jpg";
import serviceAlbanileria from "@/assets/service-albañileria.jpg";
import serviceClimatizacion from "@/assets/service-climatizacion.jpg";

export const services = [
  { slug: "reformas", title: "Reformas Integrales", image: serviceReformas, desc: "Reformas completas de viviendas, cocinas, baños y locales." },
  { slug: "electricidad", title: "Instalaciones Eléctricas", image: serviceElectricidad, desc: "Instalación, reparación y mantenimiento eléctrico profesional." },
  { slug: "fontaneria", title: "Fontanería", image: serviceFontaneria, desc: "Instalación y reparación de tuberías, grifos y sanitarios." },
  { slug: "pintura", title: "Pintura y Decoración", image: servicePintura, desc: "Pintura interior y exterior con acabados profesionales." },
  { slug: "albanileria", title: "Albañilería", image: serviceAlbanileria, desc: "Obras de albañilería, alicatados, solados y más." },
  { slug: "climatizacion", title: "Climatización", image: serviceClimatizacion, desc: "Instalación de aire acondicionado y calefacción." },
];

const ServicesSection = () => (
  <section id="servicios" className="py-16 md:py-24 bg-secondary/50 relative">
    <div className="container">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-12"
      >
        <h2 className="font-heading font-black text-3xl md:text-4xl text-foreground mb-4">
          Nuestros <span className="text-primary">Servicios</span>
        </h2>
        <p className="text-muted-foreground max-w-xl mx-auto">
          Ofrecemos servicios integrales de construcción, electricidad y reformas para hogares y empresas.
        </p>
      </motion.div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((s, i) => (
          <motion.div
            key={s.slug}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.08 }}
          >
            <Link
              to={`/servicios/${s.slug}`}
              className="group block glass-card overflow-hidden hover:-translate-y-2 hover:shadow-xl transition-all duration-300"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={s.image}
                  alt={s.title}
                  loading="lazy"
                  width={600}
                  height={512}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <h3 className="font-heading font-bold text-lg text-foreground mb-1">{s.title}</h3>
                <p className="text-muted-foreground text-sm">{s.desc}</p>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default ServicesSection;
