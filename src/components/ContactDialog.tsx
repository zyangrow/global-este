import { ReactNode, useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger, DialogDescription } from "@/components/ui/dialog";
import LeadForm from "./LeadForm";

interface ContactDialogProps {
  children: ReactNode;
}

const ContactDialog = ({ children }: ContactDialogProps) => {
  const [open, setOpen] = useState(false);
  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="bg-card border-0 max-w-md p-0 overflow-hidden">
        <div className="p-6 md:p-8">
          <DialogHeader>
            <DialogTitle className="font-heading font-extrabold text-2xl text-foreground uppercase text-center">
              Contacta
            </DialogTitle>
            <DialogDescription className="text-muted-foreground text-center">
              Escríbenos y te respondemos lo antes posible.
            </DialogDescription>
          </DialogHeader>
          <div className="mt-6">
            <LeadForm
              formType="contacto"
              variant="plain"
              buttonLabel="Enviar"
              successText="Hemos recibido tu mensaje."
            />
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ContactDialog;
