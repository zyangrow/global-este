
## Plan adjustments

Two changes from previous plan:

### 1. Remove WhatsApp button entirely
- Delete `src/components/WhatsAppButton.tsx` and remove all imports/usages from every page (`Index`, `ServicePage`, `AreaPage`, plus new `GalleryPage`, `ContactPage`, legal pages).
- Floating conversion elements on desktop: none. On mobile: keep `MobileCTA` sticky bar with **Call** + **Presupuesto** only.

### 2. Two distinct forms (popups)

**Form A — "PIDE PRESUPUESTO GRATIS"** (existing intent)
- Component: `QuoteDialog` wrapping `QuoteForm`.
- Triggered by: every "PRESUPUESTO" button (Navbar, MobileCTA, FinalCTA, hero card on desktop is inline not popup).
- Fields: Nombre, Teléfono, Mensaje, legal checkbox → ENVIAR (green).
- Posts to `WEBHOOK_URL` constant with `formType: "presupuesto"`.

**Form B — "CONTACTA"** (new, separate)
- Component: `ContactDialog` wrapping a new `ContactForm`.
- Triggered by: a floating **chat-style button** (bottom-right, replaces the removed WhatsApp button) and the Footer "Contáctanos" button.
- Fields: Nombre, Teléfono, Mensaje, legal checkbox → ENVIAR (green).
- Posts to same `WEBHOOK_URL` with `formType: "contacto"` so the CRM can route differently.
- Visually distinct header: title "CONTACTA" + subtitle "Escríbenos y te respondemos lo antes posible."

Both dialogs are self-contained (local `useState` per trigger, no global context), share the same zod schema and webhook helper (`src/lib/submitLead.ts`) to avoid duplication.

### Files to add/change vs prior plan
- **Remove**: `src/components/WhatsAppButton.tsx` (and all references).
- **Add**: `src/components/ContactDialog.tsx`, `src/components/ContactForm.tsx`, `src/components/FloatingContactButton.tsx` (chat-bubble icon, opens `ContactDialog`), `src/lib/submitLead.ts` (shared webhook POST + zod schema).
- **Keep**: `QuoteDialog`, `QuoteForm`, `CookieBanner`, `MobileCTA`, `ParallaxSection`, all pages and structural changes from the previously approved plan.

Everything else from the approved plan proceeds unchanged.
