import serviceCalderas from "@/assets/service-calderas.jpg";
import serviceAire from "@/assets/service-aire.jpg";
import serviceAerotermia from "@/assets/service-aerotermia.jpg";
import serviceCalefaccion from "@/assets/service-calefaccion.jpg";
import serviceSuelo from "@/assets/service-suelo.jpg";
import serviceSolar from "@/assets/service-solar.jpg";
import serviceGas from "@/assets/service-gas.jpg";
import serviceFontaneria from "@/assets/service-fontaneria-new.jpg";
import serviceIntegral from "@/assets/service-integral.jpg";

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
    short: "Autoconsumo fotovoltaico para casa y empresa en Sevilla.",
    long: "Aprovecha el sol de Sevilla. Diseñamos instalaciones de placas solares fotovoltaicas con baterías opcionales y compensación de excedentes.",
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
