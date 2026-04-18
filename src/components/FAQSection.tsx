import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import faqImg from "@/assets/service-aire.jpg";

const faqs = [
  { q: "¿Cuánto tarda en darme un presupuesto?", a: "Respondemos en menos de 24h. En la mayoría de casos podemos dar una estimación el mismo día tras una breve visita o llamada." },
  { q: "¿Trabajan con todas las marcas?", a: "Sí, somos servicio técnico autorizado de las principales marcas del mercado: Daikin, Mitsubishi, Vaillant, Saunier Duval, entre otras." },
  { q: "¿Ofrecen mantenimiento anual?", a: "Sí. Disponemos de planes de mantenimiento anual para calderas, aire acondicionado y aerotermia con descuentos en piezas y mano de obra." },
  { q: "¿Tramitan ayudas y subvenciones?", a: "Te ayudamos a tramitar las subvenciones disponibles para aerotermia, placas solares y rehabilitación energética." },
  { q: "¿Hacen instalaciones para empresas?", a: "Sí. Realizamos instalaciones para particulares, comunidades de vecinos, oficinas y locales comerciales." },
  { q: "¿Qué garantía dan en sus trabajos?", a: "Todas nuestras instalaciones tienen 2 años de garantía en mano de obra, además de la garantía oficial del fabricante en el equipo." },
];

const FAQSection = () => (
  <section className="py-20 md:py-28 bg-primary-dark">
    <div className="container">
      <div className="grid md:grid-cols-2 gap-12 items-start">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="order-2 md:order-1"
        >
          <span className="inline-block bg-white/15 backdrop-blur-sm text-white border border-white/25 rounded-full px-4 py-1 text-xs font-bold uppercase tracking-wider mb-3">
            Resolvemos tus dudas
          </span>
          <h2 className="font-heading font-extrabold text-3xl md:text-4xl text-white mb-8 text-shadow-soft">
            Preguntas frecuentes
          </h2>
          <Accordion type="single" collapsible className="space-y-3">
            {faqs.map((faq, i) => (
              <AccordionItem
                key={i}
                value={`faq-${i}`}
                className="bg-card px-5 rounded-2xl border border-border/50 shadow-card"
                style={{ boxShadow: "var(--shadow-card)" }}
              >
                <AccordionTrigger className="font-heading font-semibold text-foreground text-left hover:no-underline">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="order-1 md:order-2 sticky top-28 rounded-3xl overflow-hidden aspect-[4/5] shadow-2xl"
        >
          <img src={faqImg} alt="Equipo Global E.S.T.E." loading="lazy" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-primary/40 to-transparent" />
        </motion.div>
      </div>
    </div>
  </section>
);

export default FAQSection;
