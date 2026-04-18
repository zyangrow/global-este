import { MessageCircle } from "lucide-react";
import ContactDialog from "./ContactDialog";

const FloatingContactButton = () => (
  <ContactDialog>
    <button
      type="button"
      aria-label="Contactar"
      className="fixed bottom-24 md:bottom-6 right-6 z-40 w-14 h-14 bg-accent text-accent-foreground rounded-full flex items-center justify-center shadow-xl shadow-accent/40 hover:scale-110 transition-transform"
    >
      <MessageCircle className="w-7 h-7" />
    </button>
  </ContactDialog>
);

export default FloatingContactButton;
