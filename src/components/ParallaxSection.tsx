import { ReactNode } from "react";
import heroBg from "@/assets/hero-bg.jpg";

interface Props {
  id?: string;
  className?: string;
  children: ReactNode;
}

/**
 * Reusable parallax section: shared bg image + premium gradient teal overlay.
 * Real CSS background-attachment: fixed on desktop, scroll on mobile (perf).
 * Subtle blur (2px) keeps image crisp; gradient overlay adds depth.
 * All text inside should be white for legibility.
 */
const ParallaxSection = ({ id, className = "", children }: Props) => (
  <section id={id} className={`relative overflow-hidden isolate ${className}`}>
    {/* Layer 1: blurred background image, fixed on desktop */}
    <div
      aria-hidden
      className="absolute inset-0 bg-center bg-cover bg-scroll md:bg-fixed"
      style={{
        backgroundImage: `url(${heroBg})`,
        filter: "blur(2px)",
        transform: "scale(1.04)",
      }}
    />
    {/* Layer 2: premium gradient overlay (teal) */}
    <div
      aria-hidden
      className="absolute inset-0"
      style={{
        background:
          "linear-gradient(135deg, rgba(50,147,165,0.90) 0%, rgba(50,147,165,0.85) 50%, rgba(40,120,135,0.92) 100%)",
      }}
    />
    {/* Layer 3: content */}
    <div className="relative z-10">{children}</div>
  </section>
);

export default ParallaxSection;
