import { Phone, Mail, MapPin } from "lucide-react";

const Footer = () => (
  <footer className="bg-foreground text-primary-foreground/80 py-12">
    <div className="container">
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
        <div>
          <h3 className="font-heading font-extrabold text-xl text-primary-foreground mb-4">
            VIVEROS <span className="text-accent">VERAVIV</span>
          </h3>
          <p className="text-sm leading-relaxed">
            Jardineros profesionales con más de 30 años de experiencia. Tu jardín en las mejores manos.
          </p>
        </div>

        <div>
          <h4 className="font-heading font-bold text-primary-foreground mb-4">Servicios</h4>
          <ul className="space-y-2 text-sm">
            <li><a href="/servicios/mantenimiento" className="hover:text-accent transition-colors">Mantenimiento</a></li>
            <li><a href="/servicios/diseno" className="hover:text-accent transition-colors">Diseño</a></li>
            <li><a href="/servicios/poda" className="hover:text-accent transition-colors">Poda</a></li>
            <li><a href="/servicios/riego" className="hover:text-accent transition-colors">Riego</a></li>
            <li><a href="/servicios/cesped" className="hover:text-accent transition-colors">Césped</a></li>
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
            <a href="tel:+34603042314" className="flex items-center gap-2 hover:text-accent transition-colors">
              <Phone className="w-4 h-4" /> 603 04 23 14
            </a>
            <a href="mailto:info@viverosveraviv.es" className="flex items-center gap-2 hover:text-accent transition-colors">
              <Mail className="w-4 h-4" /> info@viverosveraviv.es
            </a>
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4" /> Madrid y alrededores
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-primary-foreground/10 pt-6 text-center text-xs">
        <p>© {new Date().getFullYear()} Viveros Veraviv. Todos los derechos reservados.</p>
      </div>
    </div>
  </footer>
);

export default Footer;
