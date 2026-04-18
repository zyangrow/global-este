import { z } from "zod";
import { WEBHOOK_URL_PRESUPUESTO, WEBHOOK_URL_CONTACTO } from "@/data/contact";

export const leadSchema = z.object({
  name: z
    .string()
    .trim()
    .min(2, { message: "Indica tu nombre" })
    .max(100, { message: "Máximo 100 caracteres" }),
  phone: z
    .string()
    .trim()
    .min(6, { message: "Teléfono no válido" })
    .max(20, { message: "Teléfono no válido" })
    .regex(/^[+()\d\s-]+$/, { message: "Teléfono no válido" }),
  message: z
    .string()
    .trim()
    .max(1000, { message: "Máximo 1000 caracteres" })
    .optional()
    .or(z.literal("")),
  agreed: z.literal(true, {
    errorMap: () => ({ message: "Debes aceptar la política" }),
  }),
});

export type LeadInput = z.infer<typeof leadSchema>;

export type FormType = "presupuesto" | "contacto";

export async function submitLead(
  data: Omit<LeadInput, "agreed">,
  formType: FormType,
): Promise<void> {
  const endpoint =
    formType === "contacto" ? WEBHOOK_URL_CONTACTO : WEBHOOK_URL_PRESUPUESTO;
  await fetch(endpoint, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    mode: "no-cors",
    body: JSON.stringify({
      name: data.name.trim().slice(0, 100),
      phone: data.phone.trim().slice(0, 20),
      message: (data.message || "").trim().slice(0, 1000),
      formType,
      source: typeof window !== "undefined" ? window.location.href : "",
      timestamp: new Date().toISOString(),
    }),
  }).catch(() => {
    /* swallow network errors so the user always sees a confirmation */
  });
}
