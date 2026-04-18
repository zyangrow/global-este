import heroBg from "@/assets/hero-bg.jpg";

/**
 * GlobalBackground: a single, viewport-fixed background layer that sits behind
 * every page. Because it uses position: fixed at the document root (outside any
 * transformed/scrolled ancestor), it cannot move with scroll — guaranteeing a
 * true, continuous parallax effect across all sections.
 *
 * Two layers:
 *  1. Image (subtle blur + slight scale to hide blur edges)
 *  2. Premium teal gradient overlay (slightly lighter for a clean, non-muddy look)
 *
 * Sections that should reveal this background simply omit a background color.
 * Sections that should appear "white" use bg-background and paint over it.
 */
const GlobalBackground = () => (
  <div aria-hidden className="pointer-events-none">
    <div
      className="fixed inset-0 bg-center bg-cover"
      style={{
        zIndex: -10,
        backgroundImage: `url(${heroBg})`,
        filter: "blur(2px)",
        transform: "scale(1.04)",
      }}
    />
    <div
      className="fixed inset-0"
      style={{
        zIndex: -9,
        background:
          "linear-gradient(135deg, rgba(50,147,165,0.82) 0%, rgba(50,147,165,0.78) 50%, rgba(40,120,135,0.85) 100%)",
      }}
    />
  </div>
);

export default GlobalBackground;
