import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import MobileCTA from "@/components/MobileCTA";
import FloatingContactButton from "@/components/FloatingContactButton";
import CookieBanner from "@/components/CookieBanner";
import FinalCTA from "@/components/FinalCTA";
import LeadForm from "@/components/LeadForm";
import { COMPANY, MAP_EMBED_SRC } from "@/data/contact";

const ContactPage = () => (
  <>
    <Navbar />
    <main>
      <section className="pt-32 md:pt-40 pb-12 bg-background">
        <div className="container text-center">
          <span className="inline-block bg-primary/10 text-primary rounded-full px-4 py-1 text-xs font-bold uppercase tracking-wider mb-3">
            Estamos para ayudarte
          </span>
          <h1 className="font-heading font-extrabold text-4xl md:text-5xl text-foreground mb-4">
            Contacto
          </h1>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Llámanos, escríbenos o rellena el formulario y te respondemos lo antes posible.
          </p>
        </div>
      </section>

      <section className="pb-20 md:pb-28 bg-background">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-10">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-4"
            >
              <a href={`tel:${COMPANY.phoneTel}`} className="flex items-center gap-4 bg-card rounded-2xl p-5 shadow-card hover:shadow-elevated transition-shadow group" style={{ boxShadow: "var(--shadow-card)" }}>
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <Phone className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="font-heading font-semibold text-foreground">Teléfono</p>
                  <p className="text-primary font-bold">{COMPANY.phoneDisplay}</p>
                </div>
              </a>
              <a href={`mailto:${COMPANY.email}`} className="flex items-center gap-4 bg-card rounded-2xl p-5 shadow-card hover:shadow-elevated transition-shadow group" style={{ boxShadow: "var(--shadow-card)" }}>
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <Mail className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="font-heading font-semibold text-foreground">Email</p>
                  <p className="text-primary font-bold">{COMPANY.email}</p>
                </div>
              </a>
              <div className="flex items-center gap-4 bg-card rounded-2xl p-5 shadow-card" style={{ boxShadow: "var(--shadow-card)" }}>
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <MapPin className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="font-heading font-semibold text-foreground">Ubicación</p>
                  <p className="text-muted-foreground">{COMPANY.city} y alrededores</p>
                </div>
              </div>
              <div className="flex items-center gap-4 bg-card rounded-2xl p-5 shadow-card" style={{ boxShadow: "var(--shadow-card)" }}>
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <Clock className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="font-heading font-semibold text-foreground">Horario</p>
                  <p className="text-muted-foreground">Lunes a Viernes, {COMPANY.hours}</p>
                </div>
              </div>
              <div className="rounded-2xl overflow-hidden shadow-2xl h-[300px]">
                <iframe
                  src={MAP_EMBED_SRC}
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Ubicación Global E.S.T.E."
                />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-primary rounded-3xl p-7 md:p-8 shadow-2xl h-fit"
            >
              <h2 className="font-heading font-extrabold text-2xl text-primary-foreground uppercase mb-2 text-center">
                Pide Presupuesto Gratis
              </h2>
              <p className="text-primary-foreground/80 text-center mb-6 text-sm">
                Te respondemos en menos de 24h
              </p>
              <LeadForm formType="presupuesto" variant="card" buttonLabel="Enviar" />
            </motion.div>
          </div>
        </div>
      </section>

      <FinalCTA />
    </main>
    <Footer />
    <FloatingContactButton />
    <MobileCTA />
    <CookieBanner />
  </>
);

export default ContactPage;
