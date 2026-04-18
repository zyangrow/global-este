export interface Area {
  slug: string;
  name: string;
  description: string;
}

export const areas: Area[] = [
  {
    slug: "sevilla-centro",
    name: "Sevilla Centro",
    description: "Servicio de climatización en el casco histórico de Sevilla con respuesta rápida y mantenimiento.",
  },
  {
    slug: "sevilla-este",
    name: "Sevilla Este",
    description: "Instalación y mantenimiento de aire acondicionado, calderas y aerotermia en Sevilla Este.",
  },
  {
    slug: "los-remedios",
    name: "Los Remedios",
    description: "Climatización integral en el barrio de Los Remedios. Presupuesto sin compromiso.",
  },
  {
    slug: "triana",
    name: "Triana",
    description: "Técnicos especialistas en Triana para todo tipo de instalaciones de gas, aire y calefacción.",
  },
  {
    slug: "nervion",
    name: "Nervión",
    description: "Servicio profesional de climatización y eficiencia energética en Nervión.",
  },
  {
    slug: "reina-mercedes",
    name: "Reina Mercedes",
    description: "Cobertura completa en Reina Mercedes para particulares y comunidades.",
  },
  {
    slug: "huelva",
    name: "Huelva",
    description: "Instalación y mantenimiento de sistemas de climatización en la provincia de Huelva.",
  },
];
