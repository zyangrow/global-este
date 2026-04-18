import LeadForm from "./LeadForm";

const QuoteForm = () => (
  <div className="bg-primary/95 backdrop-blur-xl rounded-2xl p-7 md:p-8 shadow-2xl border border-primary-foreground/10">
    <h3 className="font-heading font-extrabold text-xl md:text-2xl text-primary-foreground uppercase mb-2 text-center">
      Pide Presupuesto Gratis
    </h3>
    <p className="text-primary-foreground/80 text-sm text-center mb-6">
      Te respondemos en menos de 24h
    </p>
    <LeadForm formType="presupuesto" variant="card" buttonLabel="Enviar" />
  </div>
);

export default QuoteForm;
