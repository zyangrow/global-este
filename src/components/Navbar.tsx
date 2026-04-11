import { useState } from "react";
import { Menu, X, Phone } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { label: "Inicio", href: "#inicio" },
  { label: "Servicios", href: "#servicios" },
  { label: "Galería", href: "#galeria" },
  { label: "Áreas", href: "#areas" },
  { label: "Contacto", href: "#contacto" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-card/80 backdrop-blur-xl border-b border-border/50">
      <div className="container flex items-center justify-between h-16 md:h-20">
        <a href="#inicio" className="font-heading font-extrabold text-xl md:text-2xl text-primary tracking-tight">
          VIVEROS<br className="hidden" /><span className="text-accent"> VERAVIV</span>
        </a>

        <div className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="font-heading text-sm font-semibold uppercase tracking-wider text-foreground/80 hover:text-primary transition-colors"
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <a
            href="tel:+34603042314"
            className="hidden md:flex items-center gap-2 border border-primary rounded-full px-4 py-2 text-sm font-semibold text-primary hover:bg-primary hover:text-primary-foreground transition-all"
          >
            <Phone className="w-4 h-4" />
            603 04 23 14
          </a>
          <a
            href="#contacto"
            className="hidden md:inline-flex bg-accent text-accent-foreground font-heading font-bold text-sm uppercase px-6 py-2.5 rounded-full hover:brightness-110 transition-all shadow-lg shadow-accent/30"
          >
            Presupuesto
          </a>
          <button
            onClick={() => setOpen(!open)}
            className="lg:hidden p-2 text-foreground"
            aria-label="Toggle menu"
          >
            {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="lg:hidden bg-card/95 backdrop-blur-xl border-t border-border/50 overflow-hidden"
          >
            <div className="container py-6 flex flex-col gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="font-heading text-base font-semibold uppercase text-foreground/80 hover:text-primary transition-colors"
                >
                  {link.label}
                </a>
              ))}
              <a
                href="tel:+34603042314"
                className="flex items-center gap-2 text-primary font-semibold"
              >
                <Phone className="w-4 h-4" /> 603 04 23 14
              </a>
              <a
                href="#contacto"
                className="bg-accent text-accent-foreground font-heading font-bold text-sm uppercase px-6 py-3 rounded-full text-center"
              >
                Pide Presupuesto
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
