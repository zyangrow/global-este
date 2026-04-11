import { motion } from "framer-motion";
import heroBg from "@/assets/hero-bg.jpg";

const HeroSection = () => {
  return (
    <section id="inicio" className="relative h-screen w-full overflow-hidden">
      <div className="absolute inset-0">
        <img
          src={heroBg}
          alt="Jardinería profesional"
          width={1920}
          height={1080}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-foreground/40 via-transparent to-foreground/60" />
      </div>

      <div className="absolute bottom-0 left-0 w-full">
        <svg viewBox="0 0 1440 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
          <path d="M0,60 C360,120 1080,0 1440,60 L1440,100 L0,100 Z" fill="hsl(120,20%,98%)" />
        </svg>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 1 }}
        className="absolute bottom-32 left-0 w-full text-center"
      >
        <p className="text-primary-foreground/70 font-heading font-medium text-sm uppercase tracking-widest animate-bounce">
          Desliza hacia abajo
        </p>
      </motion.div>
    </section>
  );
};

export default HeroSection;
