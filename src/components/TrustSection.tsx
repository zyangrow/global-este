import { motion } from "framer-motion";
import { Shield, Clock, Award, ThumbsUp } from "lucide-react";

const trustPoints = [
  { icon: Award, title: "+15 años", desc: "de experiencia acumulada" },
  { icon: Clock, title: "Rapidez", desc: "Respuesta en menos de 24h" },
  { icon: Shield, title: "Garantía", desc: "En todos nuestros trabajos" },
  { icon: ThumbsUp, title: "5 estrellas", desc: "Valoración de clientes" },
];

const TrustSection = () => (
  <section className="py-16 md:py-24 bg-primary text-primary-foreground relative">
    <div className="container">
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center text-primary-foreground/80 max-w-2xl mx-auto mb-12 text-lg"
      >
        Constructip es un equipo de profesionales de la construcción y electricidad con amplia experiencia
        y un firme compromiso con la calidad. Nos dedicamos a conseguir resultados
        excepcionales y a cuidar cada detalle de tu hogar.
      </motion.p>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {trustPoints.map((tp, i) => (
          <motion.div
            key={tp.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="bg-primary-foreground/10 backdrop-blur-sm border border-primary-foreground/15 rounded-2xl p-6 text-center hover:bg-primary-foreground/15 transition-colors"
          >
            <tp.icon className="w-10 h-10 text-accent mx-auto mb-3" />
            <h3 className="font-heading font-bold text-xl text-primary-foreground">{tp.title}</h3>
            <p className="text-primary-foreground/70 text-sm mt-1">{tp.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default TrustSection;
