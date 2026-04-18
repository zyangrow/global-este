import heroBg from "@/assets/hero-bg.jpg";

/**
 * Single source of truth for the site background.
 * Renders one fixed-position image + gradient overlay behind everything.
 * Uses position:fixed (no background-attachment quirks on iOS) and
 * is mounted once at the app root.
 */
const GlobalBackground = () => (
  <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none" aria-hidden="true">
    <img
      src={heroBg}
      alt=""
      className="w-full h-full object-cover"
      style={{ filter: "blur(2px) saturate(1.05)", transform: "scale(1.04)" }}
      fetchPriority="high"
    />
    {/* Smooth gradient overlay — premium teal, never muddy */}
    <div
      className="absolute inset-0"
      style={{
        background:
          "linear-gradient(180deg, hsla(189, 60%, 18%, 0.78) 0%, hsla(189, 53%, 28%, 0.70) 50%, hsla(189, 60%, 18%, 0.82) 100%)",
      }}
    />
  </div>
);

export default GlobalBackground;
