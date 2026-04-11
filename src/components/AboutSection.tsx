import { motion } from "framer-motion";
import teamImg from "@/assets/team.jpg";

const AboutSection = () => (
  <section className="py-16 md:py-24 bg-background">
    <div className="container">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="overflow-hidden rounded-2xl shadow-2xl"
        >
          <img src={teamImg} alt="Nuestro equipo" loading="lazy" width={800} height={600} className="w-full h-full object-cover" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="font-heading font-black text-3xl md:text-4xl text-foreground mb-6">
            Sobre <span className="text-primary">Nosotros</span>
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed mb-4">
            Somos un equipo de jardineros profesionales con más de 30 años de experiencia acumulada.
            Nos apasiona transformar espacios exteriores en lugares de ensueño.
          </p>
          <p className="text-muted-foreground leading-relaxed mb-6">
            Ofrecemos servicios integrales: mantenimiento de jardines residenciales y comerciales,
            diseño y acondicionamiento de zonas verdes, poda de árboles y setos, instalación de
            césped natural y artificial, así como sistemas de riego y limpieza de exteriores.
          </p>
          <a
            href="#contacto"
            className="inline-flex bg-primary text-primary-foreground font-heading font-bold text-sm uppercase px-8 py-3 rounded-full hover:bg-primary-dark transition-colors"
          >
            Conócenos
          </a>
        </motion.div>
      </div>
    </div>
  </section>
);

export default AboutSection;
