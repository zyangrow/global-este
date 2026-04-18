import { Phone } from "lucide-react";
import QuoteDialog from "./QuoteDialog";
import { COMPANY } from "@/data/contact";

const MobileCTA = () => (
  <div className="fixed bottom-0 left-0 w-full z-40 md:hidden bg-card/95 backdrop-blur-xl border-t border-border/50 p-3 flex gap-3">
    <QuoteDialog>
      <button className="flex-1 bg-accent text-accent-foreground font-heading font-bold text-sm uppercase py-3 rounded-full text-center shadow-lg">
        Presupuesto
      </button>
    </QuoteDialog>
    <a
      href={`tel:${COMPANY.phoneTel}`}
      className="w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center shadow-lg flex-shrink-0"
      aria-label="Llamar"
    >
      <Phone className="w-5 h-5" />
    </a>
  </div>
);

export default MobileCTA;
