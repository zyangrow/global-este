import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Phone, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import logo from "@/assets/logo.png";
import { COMPANY } from "@/data/contact";
import { services } from "@/data/services";
import { areas } from "@/data/areas";
import QuoteDialog from "./QuoteDialog";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [openMenu, setOpenMenu] = useState<"servicios" | "areas" | null>(null);
  const location = useLocation();
  const isHome = location.pathname === "/";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Solid by default; transparent on home until scrolled
  const transparent = isHome && !scrolled;

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        transparent
          ? "bg-transparent"
          : "bg-primary-dark/95 backdrop-blur-xl shadow-lg"
      }`}
    >
      <div className="container flex items-center justify-between h-16 md:h-20">
        <Link to="/" className="flex items-center gap-2 shrink-0">
          <span className="inline-flex items-center bg-white rounded-full px-3 py-1.5 shadow-md">
            <img src={logo} alt={COMPANY.name} className="h-7 md:h-9 w-auto" />
          </span>
        </Link>

        <div className="hidden lg:flex items-center gap-7">
          <Link to="/" className="font-heading text-sm font-semibold text-primary-foreground hover:text-accent transition-colors">
            Inicio
          </Link>

          <div
            className="relative"
            onMouseEnter={() => setOpenMenu("servicios")}
            onMouseLeave={() => setOpenMenu(null)}
          >
            <button className="flex items-center gap-1 font-heading text-sm font-semibold text-primary-foreground hover:text-accent transition-colors">
              Servicios <ChevronDown className="w-3.5 h-3.5" />
            </button>
            <AnimatePresence>
              {openMenu === "servicios" && (
                <motion.div
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 8 }}
                  className="absolute top-full left-1/2 -translate-x-1/2 pt-3"
                >
                  <div className="bg-card rounded-xl shadow-2xl p-2 w-64 border border-border/50">
                    {services.map((s) => (
                      <Link
                        key={s.slug}
                        to={`/servicios/${s.slug}`}
                        className="block px-4 py-2 text-sm text-foreground hover:bg-primary/10 hover:text-primary rounded-lg transition-colors"
                      >
                        {s.title}
                      </Link>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <Link to="/galeria" className="font-heading text-sm font-semibold text-primary-foreground hover:text-accent transition-colors">
            Galería
          </Link>

          <div
            className="relative"
            onMouseEnter={() => setOpenMenu("areas")}
            onMouseLeave={() => setOpenMenu(null)}
          >
            <button className="flex items-center gap-1 font-heading text-sm font-semibold text-primary-foreground hover:text-accent transition-colors">
              Áreas de Servicio <ChevronDown className="w-3.5 h-3.5" />
            </button>
            <AnimatePresence>
              {openMenu === "areas" && (
                <motion.div
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 8 }}
                  className="absolute top-full left-1/2 -translate-x-1/2 pt-3"
                >
                  <div className="bg-card rounded-xl shadow-2xl p-2 w-60 border border-border/50">
                    {areas.map((a) => (
                      <Link
                        key={a.slug}
                        to={`/areas/${a.slug}`}
                        className="block px-4 py-2 text-sm text-foreground hover:bg-primary/10 hover:text-primary rounded-lg transition-colors"
                      >
                        {a.name}
                      </Link>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <Link to="/contacto" className="font-heading text-sm font-semibold text-primary-foreground hover:text-accent transition-colors">
            Contacto
          </Link>
        </div>

        <div className="flex items-center gap-2 md:gap-3">
          <a
            href={`tel:${COMPANY.phoneTel}`}
            className="hidden md:flex items-center gap-2 bg-card text-primary rounded-full px-4 py-2 text-sm font-bold hover:brightness-95 transition-all shadow-md"
          >
            <Phone className="w-4 h-4" />
            {COMPANY.phoneDisplay}
          </a>

          <a
            href={`tel:${COMPANY.phoneTel}`}
            className="md:hidden w-10 h-10 bg-card text-primary rounded-full flex items-center justify-center shadow-md"
            aria-label="Llamar"
          >
            <Phone className="w-4 h-4" />
          </a>

          <QuoteDialog>
            <button className="hidden sm:inline-flex bg-accent text-accent-foreground font-heading font-bold text-sm uppercase px-5 py-2.5 rounded-full hover:bg-accent-dark transition-all shadow-lg shadow-accent/30">
              Presupuesto
            </button>
          </QuoteDialog>

          <button
            onClick={() => setOpen(!open)}
            className="lg:hidden p-2 text-primary-foreground"
            aria-label="Menú"
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
            className="lg:hidden bg-primary-dark/95 backdrop-blur-xl border-t border-primary-foreground/10 overflow-hidden"
          >
            <div className="container py-5 flex flex-col gap-2">
              <Link onClick={() => setOpen(false)} to="/" className="font-heading text-base font-semibold text-primary-foreground py-2">
                Inicio
              </Link>
              <details className="group">
                <summary className="font-heading text-base font-semibold text-primary-foreground py-2 list-none flex items-center justify-between cursor-pointer">
                  Servicios <ChevronDown className="w-4 h-4 group-open:rotate-180 transition-transform" />
                </summary>
                <div className="pl-4 flex flex-col gap-1 pb-2">
                  {services.map((s) => (
                    <Link key={s.slug} onClick={() => setOpen(false)} to={`/servicios/${s.slug}`} className="text-primary-foreground/80 text-sm py-1.5">
                      {s.title}
                    </Link>
                  ))}
                </div>
              </details>
              <Link onClick={() => setOpen(false)} to="/galeria" className="font-heading text-base font-semibold text-primary-foreground py-2">
                Galería
              </Link>
              <details className="group">
                <summary className="font-heading text-base font-semibold text-primary-foreground py-2 list-none flex items-center justify-between cursor-pointer">
                  Áreas de Servicio <ChevronDown className="w-4 h-4 group-open:rotate-180 transition-transform" />
                </summary>
                <div className="pl-4 flex flex-col gap-1 pb-2">
                  {areas.map((a) => (
                    <Link key={a.slug} onClick={() => setOpen(false)} to={`/areas/${a.slug}`} className="text-primary-foreground/80 text-sm py-1.5">
                      {a.name}
                    </Link>
                  ))}
                </div>
              </details>
              <Link onClick={() => setOpen(false)} to="/contacto" className="font-heading text-base font-semibold text-primary-foreground py-2">
                Contacto
              </Link>
              <a href={`tel:${COMPANY.phoneTel}`} className="flex items-center gap-2 text-accent font-semibold py-2">
                <Phone className="w-4 h-4" /> {COMPANY.phoneDisplay}
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
