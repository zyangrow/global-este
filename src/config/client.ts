// src/config/client.ts
// ═══════════════════════════════════════════════════════════════════════
// ÚNICO ARCHIVO QUE CAMBIA POR CLIENTE
// Para un proyecto nuevo:
//   1. Edita las secciones marcadas con ← EDITAR
//   2. Configura las variables de entorno en Vercel (ver .env.example)
// ═══════════════════════════════════════════════════════════════════════

// ── Imágenes (sustituye por las del cliente) ← EDITAR ───────────────
import serviceCalderas    from "@/assets/service-calderas.jpg";
import serviceAire        from "@/assets/service-aire.jpg";
import serviceAerotermia  from "@/assets/service-aerotermia.jpg";
import serviceCalefaccion from "@/assets/service-calefaccion.jpg";
import serviceSuelo       from "@/assets/service-suelo.jpg";
import serviceSolar       from "@/assets/service-solar.jpg";
import serviceGas         from "@/assets/service-gas.jpg";
import serviceFontaneria  from "@/assets/service-fontaneria-new.jpg";
import serviceIntegral    from "@/assets/service-integral.jpg";
export { default as faqSideImg } from "@/assets/service-aire.jpg";

// ── 1. Empresa — viene de env vars en Vercel ─────────────────────────
export const COMPANY = {
  name:          import.meta.env.VITE_COMPANY_NAME     ?? "Global E.S.T.E.",
  phoneDisplay:  import.meta.env.VITE_PHONE_DISPLAY    ?? "607 11 29 27",
  phoneTel:      import.meta.env.VITE_PHONE_TEL        ?? "+34607112927",
  email:         import.meta.env.VITE_EMAIL            ?? "info@empresa.com",
  city:          import.meta.env.VITE_CITY             ?? "Sevilla",
  hours:         import.meta.env.VITE_HOURS            ?? "8:00 a 18:00",
  broadService:  import.meta.env.VITE_BROAD_SERVICE    ?? "Climatización",
  gmbReviewLink: import.meta.env.VITE_GMB_REVIEW_LINK ?? "#",
  mapEmbedSrc:   import.meta.env.VITE_MAP_EMBED_SRC   ?? "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3170.0265549293686!2d-5.923677787561991!3d37.38920427196882!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd126f380e2528f1%3A0x201117144c3fac!2sGlobal%20Este!5e0!3m2!1ses!2ses!4v1777354612098!5m2!1ses!2ses",
};

// ── 2. Agency server — mismo para todos los clientes ─────────────────
export const AGENCY = {
  server:     import.meta.env.VITE_AGENCY_SERVER   ?? "https://agencyserver-production.up.railway.app",
  secret:     import.meta.env.VITE_WEBHOOK_SECRET  ?? "",
  locationId: import.meta.env.VITE_LOCATION_ID     ?? "",
};

// ── 3. Hero ← EDITAR ─────────────────────────────────────────────────
export const HERO = {
  title:       "Confort total para tu hogar y tu negocio",
  description: "Especialistas en aire acondicionado, calderas, aerotermia y placas solares. Te asesoramos, instalamos y mantenemos tu sistema con garantía total.",
};

// ── 4. About ← EDITAR ────────────────────────────────────────────────
export const ABOUT = {
  title: `Tu empresa de climatización de confianza en ${import.meta.env.VITE_CITY ?? "Sevilla"}`,
  body1: `En ${import.meta.env.VITE_COMPANY_NAME ?? "Global E.S.T.E."} somos especialistas en climatización y eficiencia energética. Llevamos años ayudando a familias y empresas a vivir y trabajar con el mejor confort, ahorrando en su factura.`,
  body2: "Trabajamos con las marcas líderes del sector y ofrecemos garantía total en cada instalación. Asesoramiento personalizado, presupuesto cerrado y servicio postventa para que solo te preocupes de disfrutar.",
};

// ── 5. Footer y áreas ← EDITAR ───────────────────────────────────────
export const FOOTER_DESC = `Climatización integral, calderas, aerotermia y eficiencia energética en ${import.meta.env.VITE_CITY ?? "Sevilla"} y alrededores.`;
export const AREAS_DESCRIPTION = `Damos servicio en ${import.meta.env.VITE_CITY ?? "Sevilla"} y alrededores.`;

// ── 6. Servicios ← EDITAR ────────────────────────────────────────────
export interface Service {
  slug: string;
  title: string;
  short: string;
  long: string;
  benefits: string[];
  steps: string[];
  image: string;
}

export const services: Service[] = [
  {
    slug: "calderas",
    title: "Calderas",
    image: serviceCalderas,
    short: "Instalación, mantenimiento y reparación de calderas de gas y condensación.",
    long: "Trabajamos con las mejores marcas del mercado para ofrecerte calderas eficientes y seguras. Servicio técnico autorizado, mantenimiento anual y reparaciones urgentes en toda Sevilla.",
    benefits: ["Servicio técnico oficial", "Mantenimiento anual", "Marcas líderes", "Atención urgente"],
    steps: ["Visita y diagnóstico", "Presupuesto cerrado", "Instalación y puesta en marcha"],
  },
  {
    slug: "aire-acondicionado",
    title: "Aire Acondicionado",
    image: serviceAire,
    short: "Instalación de aire acondicionado split, multisplit y conductos.",
    long: "Diseñamos e instalamos sistemas de aire acondicionado a medida para tu hogar o negocio. Equipos inverter de bajo consumo y máxima eficiencia.",
    benefits: ["Equipos inverter A+++", "Instalación limpia y rápida", "Garantía oficial", "Mantenimiento anual"],
    steps: ["Estudio del espacio", "Selección del equipo", "Instalación y puesta en marcha"],
  },
  {
    slug: "aerotermia",
    title: "Aerotermia",
    image: serviceAerotermia,
    short: "Sistemas de aerotermia para calefacción, refrigeración y agua caliente.",
    long: "La aerotermia es la solución más eficiente y ecológica para climatizar tu hogar. Reducimos hasta un 70% tu factura energética con bombas de calor de última generación.",
    benefits: ["Hasta 70% de ahorro", "Frío, calor y ACS", "Ayudas y subvenciones", "Tecnología limpia"],
    steps: ["Estudio energético", "Diseño y presupuesto", "Instalación llave en mano"],
  },
  {
    slug: "calefaccion",
    title: "Calefacción",
    image: serviceCalefaccion,
    short: "Sistemas de calefacción por radiadores, gas natural y eléctrica.",
    long: "Calidez para tu hogar todo el invierno. Diseñamos e instalamos sistemas de calefacción adaptados a tus necesidades y presupuesto.",
    benefits: ["Soluciones a medida", "Ahorro energético", "Mantenimiento incluido", "Marcas premium"],
    steps: ["Cálculo de cargas térmicas", "Propuesta personalizada", "Instalación profesional"],
  },
  {
    slug: "suelo-radiante",
    title: "Suelo Radiante",
    image: serviceSuelo,
    short: "Confort homogéneo y máxima eficiencia con suelo radiante.",
    long: "El suelo radiante distribuye el calor (o frío) de forma uniforme. Sistema invisible, silencioso y compatible con aerotermia o caldera de condensación.",
    benefits: ["Confort total", "Ahorro energético", "Compatible con aerotermia", "Sin elementos visibles"],
    steps: ["Proyecto técnico", "Instalación de circuito", "Puesta en marcha"],
  },
  {
    slug: "placas-solares",
    title: "Placas Solares",
    image: serviceSolar,
    short: "Autoconsumo fotovoltaico para casa y empresa.",
    long: "Aprovecha el sol. Diseñamos instalaciones de placas solares fotovoltaicas con baterías opcionales y compensación de excedentes.",
    benefits: ["Reduce hasta el 80%", "Subvenciones disponibles", "Garantía 25 años", "Mantenimiento mínimo"],
    steps: ["Estudio de consumo", "Diseño e ingeniería", "Instalación y legalización"],
  },
  {
    slug: "tecnico-de-gas",
    title: "Técnico de Gas",
    image: serviceGas,
    short: "Instalaciones de gas, certificados y revisiones obligatorias.",
    long: "Técnicos autorizados para instalación, revisión y certificación de instalaciones de gas natural y propano. Inspecciones reglamentarias.",
    benefits: ["Técnicos autorizados", "Boletines oficiales", "Revisiones obligatorias", "Servicio rápido"],
    steps: ["Inspección inicial", "Trabajo y certificado", "Entrega de boletín"],
  },
  {
    slug: "fontaneria",
    title: "Fontanería",
    image: serviceFontaneria,
    short: "Reparaciones y nuevas instalaciones de fontanería.",
    long: "Detección de fugas, sustitución de tuberías, instalación de sanitarios y todo tipo de trabajos de fontanería con garantía.",
    benefits: ["Detección de fugas", "Reparación urgente", "Materiales de calidad", "Garantía"],
    steps: ["Diagnóstico", "Presupuesto", "Reparación inmediata"],
  },
  {
    slug: "climatizacion-integral",
    title: "Climatización Integral",
    image: serviceIntegral,
    short: "Soluciones integrales de climatización para hogar y empresa.",
    long: "Diseñamos sistemas combinados de aerotermia, suelo radiante, aire acondicionado y ACS para una eficiencia y confort máximos.",
    benefits: ["Solución llave en mano", "Eficiencia máxima", "Único interlocutor", "Garantía global"],
    steps: ["Estudio integral", "Proyecto a medida", "Instalación y mantenimiento"],
  },
];

// ── 7. Áreas ← EDITAR ────────────────────────────────────────────────
export interface Area {
  slug: string;
  name: string;
  description: string;
}

export const areas: Area[] = [
  { slug: "sevilla-centro",  name: "Sevilla Centro",  description: "Servicio de climatización en el casco histórico con respuesta rápida y mantenimiento." },
  { slug: "sevilla-este",    name: "Sevilla Este",    description: "Instalación y mantenimiento de aire acondicionado, calderas y aerotermia en Sevilla Este." },
  { slug: "los-remedios",    name: "Los Remedios",    description: "Climatización integral en el barrio de Los Remedios. Presupuesto sin compromiso." },
  { slug: "triana",          name: "Triana",          description: "Técnicos especialistas en Triana para todo tipo de instalaciones de gas, aire y calefacción." },
  { slug: "nervion",         name: "Nervión",         description: "Servicio profesional de climatización y eficiencia energética en Nervión." },
  { slug: "reina-mercedes",  name: "Reina Mercedes",  description: "Cobertura completa en Reina Mercedes para particulares y comunidades." },
  { slug: "huelva",          name: "Huelva",          description: "Instalación y mantenimiento de sistemas de climatización en la provincia de Huelva." },
];

// ── 8. FAQs ← EDITAR ─────────────────────────────────────────────────
export const faqs = [
  { q: "¿Cuánto tarda en darme un presupuesto?",   a: "Respondemos en menos de 24h. En la mayoría de casos podemos dar una estimación el mismo día tras una breve visita o llamada." },
  { q: "¿Trabajan con todas las marcas?",           a: "Sí, somos servicio técnico autorizado de las principales marcas del mercado: Daikin, Mitsubishi, Vaillant, Saunier Duval, entre otras." },
  { q: "¿Ofrecen mantenimiento anual?",             a: "Sí. Disponemos de planes de mantenimiento anual para calderas, aire acondicionado y aerotermia con descuentos en piezas y mano de obra." },
  { q: "¿Tramitan ayudas y subvenciones?",          a: "Te ayudamos a tramitar las subvenciones disponibles para aerotermia, placas solares y rehabilitación energética." },
  { q: "¿Hacen instalaciones para empresas?",       a: "Sí. Realizamos instalaciones para particulares, comunidades de vecinos, oficinas y locales comerciales." },
  { q: "¿Qué garantía dan en sus trabajos?",        a: "Todas nuestras instalaciones tienen 2 años de garantía en mano de obra, además de la garantía oficial del fabricante en el equipo." },
];
