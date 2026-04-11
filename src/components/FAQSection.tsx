import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  { q: "¿Cuánto cuesta el mantenimiento de un jardín?", a: "El precio depende del tamaño del jardín y los servicios necesarios. Ofrecemos presupuestos personalizados sin compromiso. Contáctanos para una valoración gratuita." },
  { q: "¿Trabajan en fin de semana?", a: "Sí, nos adaptamos a tu horario. Podemos realizar trabajos en fines de semana y festivos según disponibilidad." },
  { q: "¿Ofrecen servicio de urgencias?", a: "Sí, contamos con servicio de atención urgente para situaciones como caída de árboles o daños por tormentas." },
  { q: "¿Qué garantía ofrecen en sus trabajos?", a: "Todos nuestros trabajos cuentan con garantía de calidad. Si no estás satisfecho, lo solucionamos sin coste adicional." },
  { q: "¿Hacen trabajos para comunidades de vecinos?", a: "Sí, realizamos mantenimiento y diseño de jardines para comunidades, empresas y particulares." },
  { q: "¿Cuánto tardan en dar un presupuesto?", a: "Respondemos en menos de 24 horas. En la mayoría de casos, podemos dar una estimación el mismo día." },
];

const FAQSection = () => (
  <section className="py-16 md:py-24 bg-background">
    <div className="container max-w-3xl">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-12"
      >
        <h2 className="font-heading font-black text-3xl md:text-4xl text-foreground mb-4">
          Preguntas <span className="text-primary">Frecuentes</span>
        </h2>
      </motion.div>

      <Accordion type="single" collapsible className="space-y-3">
        {faqs.map((faq, i) => (
          <AccordionItem key={i} value={`faq-${i}`} className="glass-card px-6 border-none">
            <AccordionTrigger className="font-heading font-semibold text-foreground text-left hover:no-underline">
              {faq.q}
            </AccordionTrigger>
            <AccordionContent className="text-muted-foreground leading-relaxed">
              {faq.a}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  </section>
);

export default FAQSection;
