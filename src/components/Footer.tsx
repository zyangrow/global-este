import { Link } from "react-router-dom";
import { Phone, Mail, Clock } from "lucide-react";
import logo from "@/assets/logo.png";
import { COMPANY, FOOTER_DESC } from "@/config/client";
import { services } from "@/data/services";
import { areas } from "@/data/areas";
import ContactDialog from "./ContactDialog";

const Footer = () => (
  <footer className="bg-primary-dark text-primary-foreground/80 pt-16 pb-8">
    <div className="container">
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-10">
        <div>
          <img src={logo} alt={COMPANY.name} className="h-10 w-auto mb-4 brightness-0 invert" />
          <p className="text-sm leading-relaxed mb-4">{FOOTER_DESC}</p>
          <ContactDialog>
            <button className="bg-accent text-accent-foreground font-heading font-bold text-xs uppercase px-5 py-2.5 rounded-full hover:bg-accent-dark transition-colors">
              Contáctanos
            </button>
          </ContactDialog>
        </div>

        <div>
          <h4 className="font-heading font-bold text-primary-foreground mb-4 uppercase text-sm tracking-wide">Nuestros Servicios</h4>
          <ul className="space-y-2 text-sm">
            {services.slice(0, 6).map((s) => (
              <li key={s.slug}>
                <Link to={`/servicios/${s.slug}`} className="hover:text-accent transition-colors">
                  {s.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-heading font-bold text-primary-foreground mb-4 uppercase text-sm tracking-wide">Áreas</h4>
          <ul className="space-y-2 text-sm">
            {areas.map((a) => (
              <li key={a.slug}>
                <Link to={`/areas/${a.slug}`} className="hover:text-accent transition-colors">
                  {a.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-heading font-bold text-primary-foreground mb-4 uppercase text-sm tracking-wide">Horario de atención</h4>
          <div className="space-y-2 text-sm mb-5">
            {["Lunes", "Martes", "Miércoles", "Jueves", "Viernes"].map((d) => (
              <div key={d} className="flex justify-between">
                <span>{d}</span>
                <span className="text-primary-foreground/60">{COMPANY.hours}</span>
              </div>
            ))}
          </div>
          <div className="space-y-2 text-sm">
            <a href={`tel:${COMPANY.phoneTel}`} className="flex items-center gap-2 hover:text-accent transition-colors">
              <Phone className="w-4 h-4 text-accent" /> {COMPANY.phoneDisplay}
            </a>
            <a href={`mailto:${COMPANY.email}`} className="flex items-center gap-2 hover:text-accent transition-colors">
              <Mail className="w-4 h-4 text-accent" /> {COMPANY.email}
            </a>
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4 text-accent" /> {COMPANY.hours}
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-primary-foreground/10 pt-6 flex flex-col md:flex-row items-center justify-between gap-4 text-xs">
        <p>© {new Date().getFullYear()} {COMPANY.name}. Todos los derechos reservados.</p>
        <div className="flex gap-5">
          <Link to="/terms" className="hover:text-accent transition-colors">Términos y condiciones</Link>
          <Link to="/privacy" className="hover:text-accent transition-colors">Política de privacidad</Link>
          <Link to="/cookies" className="hover:text-accent transition-colors">Cookies</Link>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
