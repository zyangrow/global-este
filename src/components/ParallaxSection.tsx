import { ReactNode } from "react";

interface Props {
  id?: string;
  className?: string;
  children: ReactNode;
}

/**
 * Transparent section wrapper. The fixed GlobalBackground (mounted in App.tsx)
 * shows through automatically because this section has no background color.
 * All text inside should be white for legibility over the teal overlay.
 */
const ParallaxSection = ({ id, className = "", children }: Props) => (
  <section id={id} className={`relative ${className}`}>
    <div className="relative z-10">{children}</div>
  </section>
);

export default ParallaxSection;
