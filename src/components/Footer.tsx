import { Phone, Mail, MapPin } from "lucide-react";

const Footer = () => (
  <footer className="bg-foreground text-primary-foreground/80 py-12">
    <div className="container">
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
        <div>
          <h3 className="font-heading font-extrabold text-xl text-primary-foreground mb-4">
            CONSTRUCT<span className="text-accent">IP</span>
          </h3>
          <p className="text-sm leading-relaxed">
            Profesionales de la construcción y electricidad con más de 15 años de experiencia. Tu hogar en las mejores manos.
          </p>
        </div>

        <div>
          <h4 className="font-heading font-bold text-primary-foreground mb-4">Servicios</h4>
          <ul className="space-y-2 text-sm">
            <li><a href="/servicios/reformas" className="hover:text-accent transition-colors">Reformas</a></li>
            <li><a href="/servicios/electricidad" className="hover:text-accent transition-colors">Electricidad</a></li>
            <li><a href="/servicios/fontaneria" className="hover:text-accent transition-colors">Fontanería</a></li>
            <li><a href="/servicios/pintura" className="hover:text-accent transition-colors">Pintura</a></li>
            <li><a href="/servicios/albanileria" className="hover:text-accent transition-colors">Albañilería</a></li>
          </ul>
        </div>

        <div>
          <h4 className="font-heading font-bold text-primary-foreground mb-4">Enlaces</h4>
          <ul className="space-y-2 text-sm">
            <li><a href="#inicio" className="hover:text-accent transition-colors">Inicio</a></li>
            <li><a href="#servicios" className="hover:text-accent transition-colors">Servicios</a></li>
            <li><a href="#galeria" className="hover:text-accent transition-colors">Galería</a></li>
            <li><a href="#contacto" className="hover:text-accent transition-colors">Contacto</a></li>
          </ul>
        </div>

        <div>
          <h4 className="font-heading font-bold text-primary-foreground mb-4">Contacto</h4>
          <div className="space-y-3 text-sm">
            <a href="tel:+34612345678" className="flex items-center gap-2 hover:text-accent transition-colors">
              <Phone className="w-4 h-4" /> 612 34 56 78
            </a>
            <a href="mailto:info@constructip.es" className="flex items-center gap-2 hover:text-accent transition-colors">
              <Mail className="w-4 h-4" /> info@constructip.es
            </a>
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4" /> Madrid y alrededores
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-primary-foreground/10 pt-6 text-center text-xs">
        <p>© {new Date().getFullYear()} Constructip. Todos los derechos reservados.</p>
      </div>
    </div>
  </footer>
);

export default Footer;
