import { Phone } from "lucide-react";

const MobileCTA = () => (
  <div className="fixed bottom-0 left-0 w-full z-50 md:hidden bg-card/95 backdrop-blur-xl border-t border-border/50 p-3 flex gap-3">
    <a
      href="#contacto"
      className="flex-1 bg-accent text-accent-foreground font-heading font-bold text-sm uppercase py-3 rounded-full text-center shadow-lg"
    >
      Presupuesto Gratis
    </a>
    <a
      href="tel:+34603042314"
      className="w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center shadow-lg flex-shrink-0"
    >
      <Phone className="w-5 h-5" />
    </a>
  </div>
);

export default MobileCTA;
