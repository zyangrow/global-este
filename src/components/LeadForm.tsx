import { useState } from "react";
import { Send, CheckCircle, Loader2 } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { leadSchema, submitLead, type FormType } from "@/lib/submitLead";

interface LeadFormProps {
  formType: FormType;
  variant?: "card" | "plain";
  successText?: string;
  buttonLabel?: string;
}

const LeadForm = ({
  formType,
  variant = "plain",
  successText = "Te contactaremos lo antes posible.",
  buttonLabel = "Enviar",
}: LeadFormProps) => {
  const [form, setForm] = useState({ name: "", phone: "", message: "" });
  const [agreed, setAgreed] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const parsed = leadSchema.safeParse({ ...form, agreed });
    if (!parsed.success) {
      const next: Record<string, string> = {};
      for (const issue of parsed.error.issues) {
        next[issue.path[0] as string] = issue.message;
      }
      setErrors(next);
      return;
    }
    setErrors({});
    setLoading(true);
    try {
      await submitLead(form, formType);
      setSubmitted(true);
      setForm({ name: "", phone: "", message: "" });
      setAgreed(false);
    } finally {
      setLoading(false);
    }
  };

  if (submitted) {
    return (
      <div className="text-center py-6">
        <CheckCircle className="w-14 h-14 text-accent mx-auto mb-4" />
        <h3 className={`font-heading font-bold text-xl mb-1 ${variant === "card" ? "text-primary-foreground" : "text-foreground"}`}>
          ¡Solicitud enviada!
        </h3>
        <p className={variant === "card" ? "text-primary-foreground/80" : "text-muted-foreground"}>
          Gracias, hemos recibido tu solicitud. Te contactaremos en breve.
        </p>
      </div>
    );
  }

  const labelCls =
    variant === "card"
      ? "text-primary-foreground/90 font-heading font-semibold text-xs uppercase tracking-wider mb-1.5 block"
      : "text-foreground font-heading font-semibold text-xs uppercase tracking-wider mb-1.5 block";
  const inputCls = "h-12 bg-card border-0 text-foreground placeholder:text-muted-foreground/70";

  return (
    <form onSubmit={handleSubmit} className="space-y-4" noValidate>
      <div>
        <label className={labelCls}>Nombre completo *</label>
        <Input
          type="text"
          required
          maxLength={100}
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
          placeholder="Pablo Domingo"
          className={inputCls}
          aria-invalid={!!errors.name}
        />
        {errors.name && <p className="text-destructive text-xs mt-1">{errors.name}</p>}
      </div>

      <div>
        <label className={labelCls}>Teléfono *</label>
        <Input
          type="tel"
          required
          maxLength={20}
          value={form.phone}
          onChange={(e) => setForm({ ...form, phone: e.target.value })}
          placeholder="612 34 56 78"
          className={inputCls}
          aria-invalid={!!errors.phone}
        />
        {errors.phone && <p className="text-destructive text-xs mt-1">{errors.phone}</p>}
      </div>

      <div>
        <label className={labelCls}>Mensaje</label>
        <Textarea
          maxLength={1000}
          rows={3}
          value={form.message}
          onChange={(e) => setForm({ ...form, message: e.target.value })}
          placeholder="Cuéntanos qué necesitas"
          className="bg-card border-0 text-foreground placeholder:text-muted-foreground/70 resize-none"
        />
      </div>

      <label className="flex items-start gap-3 cursor-pointer">
        <Checkbox
          checked={agreed}
          onCheckedChange={(v) => setAgreed(v === true)}
          className={variant === "card" ? "mt-0.5 border-primary-foreground/60 data-[state=checked]:bg-accent data-[state=checked]:border-accent" : "mt-0.5"}
        />
        <span className={`text-xs leading-relaxed ${variant === "card" ? "text-primary-foreground/80" : "text-muted-foreground"}`}>
          He leído y acepto la <a href="/privacy" className="underline">Política de Privacidad</a>. Al facilitar mi número de teléfono acepto recibir mensajes de texto por su parte.
        </span>
      </label>
      {errors.agreed && <p className="text-destructive text-xs">{errors.agreed}</p>}

      <button
        type="submit"
        disabled={loading}
        className="w-full bg-accent text-accent-foreground font-heading font-bold text-base uppercase py-4 rounded-full hover:bg-accent-dark transition-all shadow-lg shadow-accent/40 disabled:opacity-60 flex items-center justify-center gap-2"
      >
        {loading ? <Loader2 className="w-5 h-5 animate-spin" /> : <Send className="w-5 h-5" />}
        {loading ? "Enviando..." : buttonLabel}
      </button>
    </form>
  );
};

export default LeadForm;
