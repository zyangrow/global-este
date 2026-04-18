import { ReactNode, useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger, DialogDescription } from "@/components/ui/dialog";
import LeadForm from "./LeadForm";

interface QuoteDialogProps {
  children: ReactNode;
}

const QuoteDialog = ({ children }: QuoteDialogProps) => {
  const [open, setOpen] = useState(false);
  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="bg-primary border-0 max-w-md p-0 overflow-hidden">
        <div className="bg-primary p-6 md:p-8">
          <DialogHeader>
            <DialogTitle className="font-heading font-extrabold text-2xl text-primary-foreground uppercase text-center">
              Pide Presupuesto Gratis
            </DialogTitle>
            <DialogDescription className="text-primary-foreground/80 text-center">
              Rellena el formulario y te respondemos en menos de 24h.
            </DialogDescription>
          </DialogHeader>
          <div className="mt-6">
            <LeadForm formType="presupuesto" variant="card" buttonLabel="Enviar" />
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default QuoteDialog;
