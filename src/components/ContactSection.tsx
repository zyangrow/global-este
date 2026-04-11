import { motion } from "framer-motion";
import { Phone, Mail, MapPin } from "lucide-react";
import QuoteForm from "./QuoteForm";

const ContactSection = () => (
  <section id="contacto" className="py-16 md:py-24 bg-secondary/50">
    <div className="container">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-12"
      >
        <h2 className="font-heading font-black text-3xl md:text-4xl text-foreground mb-4">
          <span className="text-primary">Contacto</span>
        </h2>
        <p className="text-muted-foreground max-w-xl mx-auto">
          Estamos aquí para ayudarte. Llámanos o envíanos un mensaje.
        </p>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-12">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="space-y-6"
        >
          <a href="tel:+34603042314" className="flex items-center gap-4 glass-card p-5 hover:shadow-xl transition-shadow group">
            <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
              <Phone className="w-5 h-5 text-primary" />
            </div>
            <div>
              <p className="font-heading font-semibold text-foreground">Teléfono</p>
              <p className="text-primary font-semibold">603 04 23 14</p>
            </div>
          </a>

          <a href="mailto:info@viverosveraviv.es" className="flex items-center gap-4 glass-card p-5 hover:shadow-xl transition-shadow group">
            <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
              <Mail className="w-5 h-5 text-primary" />
            </div>
            <div>
              <p className="font-heading font-semibold text-foreground">Email</p>
              <p className="text-primary font-semibold">info@viverosveraviv.es</p>
            </div>
          </a>

          <div className="flex items-center gap-4 glass-card p-5">
            <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
              <MapPin className="w-5 h-5 text-primary" />
            </div>
            <div>
              <p className="font-heading font-semibold text-foreground">Ubicación</p>
              <p className="text-muted-foreground">Madrid y alrededores</p>
            </div>
          </div>

          <div className="rounded-2xl overflow-hidden shadow-lg h-[250px]">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d194347.38440752!2d-3.8196196!3d40.4378698!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd422997800a3c81%3A0xc436dec1357d42a0!2sMadrid%2C%20Spain!5e0!3m2!1ses!2ses!4v1"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              title="Ubicación"
            />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <QuoteForm />
        </motion.div>
      </div>
    </div>
  </section>
);

export default ContactSection;
