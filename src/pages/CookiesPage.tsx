import LegalLayout from "@/components/LegalLayout";

const CookiesPage = () => (
  <LegalLayout title="Política de Cookies">
    <p>Esta web utiliza cookies propias y de terceros para mejorar tu experiencia de navegación y analizar el uso del sitio.</p>
    <h2 className="font-heading font-bold text-xl mt-6">¿Qué son las cookies?</h2>
    <p>Las cookies son pequeños archivos que se almacenan en tu dispositivo cuando visitas una web.</p>
    <h2 className="font-heading font-bold text-xl mt-6">Tipos de cookies que utilizamos</h2>
    <p>Cookies técnicas necesarias para el funcionamiento del sitio y cookies analíticas para entender cómo se usa la web.</p>
    <h2 className="font-heading font-bold text-xl mt-6">Configuración</h2>
    <p>Puedes configurar o rechazar las cookies desde tu navegador en cualquier momento.</p>
  </LegalLayout>
);

export default CookiesPage;
