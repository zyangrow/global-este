import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import serviceMantenimiento from "@/assets/service-mantenimiento.jpg";
import serviceDiseno from "@/assets/service-diseno.jpg";
import servicePoda from "@/assets/service-poda.jpg";
import serviceRiego from "@/assets/service-riego.jpg";
import serviceCesped from "@/assets/service-cesped.jpg";
import serviceLimpieza from "@/assets/service-limpieza.jpg";

export const services = [
  { slug: "mantenimiento", title: "Mantenimiento de Jardines", image: serviceMantenimiento, desc: "Cuidado integral de jardines residenciales y comerciales." },
  { slug: "diseno", title: "Diseño de Jardines", image: serviceDiseno, desc: "Diseño personalizado de espacios verdes únicos." },
  { slug: "poda", title: "Poda de Árboles y Setos", image: servicePoda, desc: "Poda profesional para la salud de tus plantas." },
  { slug: "riego", title: "Sistemas de Riego", image: serviceRiego, desc: "Instalación de riego automático eficiente." },
  { slug: "cesped", title: "Césped Natural y Artificial", image: serviceCesped, desc: "Instalación de césped de máxima calidad." },
  { slug: "limpieza", title: "Limpieza de Exteriores", image: serviceLimpieza, desc: "Limpieza profesional de terrazas, patios y más." },
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
          Ofrecemos servicios integrales de jardinería y paisajismo para hogares y empresas.
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
