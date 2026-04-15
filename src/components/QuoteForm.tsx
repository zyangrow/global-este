import { useState } from "react";
import { Send, CheckCircle } from "lucide-react";

const QuoteForm = () => {
  const [form, setForm] = useState({ name: "", phone: "", message: "" });
  const [agreed, setAgreed] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name.trim() || !form.phone.trim() || !agreed) return;

    setLoading(true);
    try {
      await fetch("https://hooks.example.com/webhook", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: form.name.trim().slice(0, 100),
          phone: form.phone.trim().slice(0, 20),
          message: form.message.trim().slice(0, 500),
        }),
      }).catch(() => {});
      setSubmitted(true);
    } catch {
      setSubmitted(true);
    } finally {
      setLoading(false);
    }
  };

  if (submitted) {
    return (
      <div className="bg-primary/95 backdrop-blur-xl rounded-2xl p-8 text-center shadow-2xl">
        <CheckCircle className="w-16 h-16 text-accent mx-auto mb-4" />
        <h3 className="font-heading font-bold text-2xl text-primary-foreground mb-2">
          ¡Solicitud enviada!
        </h3>
        <p className="text-primary-foreground/80">
          Te contactaremos lo antes posible.
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-primary/95 backdrop-blur-xl rounded-2xl p-8 shadow-2xl"
    >
      <h3 className="font-heading font-bold text-xl md:text-2xl text-primary-foreground uppercase mb-6">
        Pide Presupuesto Gratis
      </h3>

      <div className="space-y-4">
        <div>
          <label className="block text-primary-foreground/90 font-heading font-semibold text-xs uppercase tracking-wider mb-1.5">
            Nombre completo *
          </label>
          <input
            type="text"
            required
            maxLength={100}
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            placeholder="Pablo Domingo"
            className="w-full px-4 py-3 rounded-lg bg-card text-foreground placeholder:text-muted-foreground focus:ring-2 focus:ring-accent outline-none transition-all"
          />
        </div>

        <div>
          <label className="block text-primary-foreground/90 font-heading font-semibold text-xs uppercase tracking-wider mb-1.5">
            Teléfono *
          </label>
          <input
            type="tel"
            required
            maxLength={20}
            value={form.phone}
            onChange={(e) => setForm({ ...form, phone: e.target.value })}
            placeholder="123 45 67 89"
            className="w-full px-4 py-3 rounded-lg bg-card text-foreground placeholder:text-muted-foreground focus:ring-2 focus:ring-accent outline-none transition-all"
          />
        </div>

        <div>
          <label className="block text-primary-foreground/90 font-heading font-semibold text-xs uppercase tracking-wider mb-1.5">
            Escribe un mensaje con tu problema *
          </label>
          <textarea
            maxLength={500}
            rows={3}
            value={form.message}
            onChange={(e) => setForm({ ...form, message: e.target.value })}
            placeholder="**Te responderé en cuanto pueda!!**"
            className="w-full px-4 py-3 rounded-lg bg-card text-foreground placeholder:text-muted-foreground focus:ring-2 focus:ring-accent outline-none transition-all resize-none"
          />
        </div>

        <label className="flex items-start gap-3 cursor-pointer">
          <input
            type="checkbox"
            checked={agreed}
            onChange={(e) => setAgreed(e.target.checked)}
            className="mt-1 w-4 h-4 accent-accent"
          />
          <span className="text-primary-foreground/80 text-xs leading-relaxed">
            Acepto los Términos y Condiciones. Al facilitar mi número de teléfono,
            acepto recibir mensajes de texto por su parte.
          </span>
        </label>

        <button
          type="submit"
          disabled={loading || !agreed}
          className="w-full bg-accent text-accent-foreground font-heading font-bold text-base uppercase py-4 rounded-full hover:brightness-110 transition-all shadow-lg shadow-accent/40 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
        >
          <Send className="w-5 h-5" />
          {loading ? "Enviando..." : "Enviar"}
        </button>
      </div>
    </form>
  );
};

export default QuoteForm;
