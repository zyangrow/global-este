import LegalLayout from "@/components/LegalLayout";
import { COMPANY } from "@/data/contact";

const PrivacyPage = () => (
  <LegalLayout title="Política de Privacidad">
    <p>En Global E.S.T.E. respetamos tu privacidad y cumplimos con el Reglamento General de Protección de Datos (RGPD).</p>
    <h2 className="font-heading font-bold text-xl text-foreground mt-6">Responsable del tratamiento</h2>
    <p>{COMPANY.name} — Email: {COMPANY.email}</p>
    <h2 className="font-heading font-bold text-xl text-foreground mt-6">Finalidad</h2>
    <p>Los datos que nos facilites a través de los formularios de contacto serán utilizados exclusivamente para responder a tu solicitud de presupuesto o información.</p>
    <h2 className="font-heading font-bold text-xl text-foreground mt-6">Tus derechos</h2>
    <p>Puedes ejercer tus derechos de acceso, rectificación, supresión, oposición, limitación y portabilidad escribiéndonos a {COMPANY.email}.</p>
  </LegalLayout>
);

export default PrivacyPage;
