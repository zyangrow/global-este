import { ReactNode } from "react";

/**
 * Opaque white/light section that "covers" the global background.
 * Use to alternate rhythm between transparent (background visible) and clean sections.
 */
interface Props {
  children: ReactNode;
  className?: string;
  id?: string;
  tone?: "white" | "muted";
}

const SolidSection = ({ children, className = "", id, tone = "white" }: Props) => (
  <section
    id={id}
    className={`relative ${tone === "white" ? "bg-accent/10" : "bg-accent/15"} ${className}`}
  >
    {children}
  </section>
);

export default SolidSection;
