import { useEffect, useState } from "react";

const STORAGE_KEY = "globaleste_cookie_consent";

const CookieBanner = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (!localStorage.getItem(STORAGE_KEY)) setVisible(true);
  }, []);

  if (!visible) return null;

  const accept = () => {
    localStorage.setItem(STORAGE_KEY, "1");
    setVisible(false);
  };

  return (
    <div className="fixed inset-x-3 bottom-3 md:inset-x-auto md:right-6 md:left-6 md:bottom-6 z-[60] glass-card p-5 md:p-6 max-w-2xl mx-auto shadow-2xl">
      <div className="flex flex-col md:flex-row items-start md:items-center gap-4">
        <p className="text-sm text-foreground flex-1">
          Usamos cookies propias y de terceros para mejorar tu experiencia. Consulta nuestra{" "}
          <a href="/cookies" className="text-primary underline font-medium">política de cookies</a>.
        </p>
        <button
          onClick={accept}
          className="bg-accent text-accent-foreground font-heading font-bold text-sm uppercase px-6 py-2.5 rounded-full hover:bg-accent-dark transition-colors shrink-0"
        >
          Aceptar
        </button>
      </div>
    </div>
  );
};

export default CookieBanner;
