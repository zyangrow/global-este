import LegalLayout from "@/components/LegalLayout";

const TermsPage = () => (
  <LegalLayout title="Términos y Condiciones">
    <p>Bienvenido a Global E.S.T.E. Al utilizar nuestra web aceptas las siguientes condiciones de uso.</p>
    <h2 className="font-heading font-bold text-xl mt-6">1. Objeto</h2>
    <p>El presente sitio web tiene por objeto presentar los servicios de climatización ofrecidos por Global E.S.T.E. en Sevilla y alrededores.</p>
    <h2 className="font-heading font-bold text-xl mt-6">2. Uso adecuado</h2>
    <p>El usuario se compromete a hacer un uso lícito de la web, sin ofender ni atentar contra terceros.</p>
    <h2 className="font-heading font-bold text-xl mt-6">3. Propiedad intelectual</h2>
    <p>Todos los contenidos son propiedad de Global E.S.T.E. salvo indicación contraria.</p>
  </LegalLayout>
);

export default TermsPage;
