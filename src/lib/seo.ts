import { COMPANY } from "@/config/client";

export const localBusinessJsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: COMPANY.name,
  image: "https://www.globaleste.com/og.jpg",
  telephone: COMPANY.phoneTel,
  email: COMPANY.email,
  url: "https://www.globaleste.com",
  address: {
    "@type": "PostalAddress",
    streetAddress: "C. las Fuentesuelas, 3",
    addressLocality: "Sevilla",
    postalCode: "41020",
    addressCountry: "ES",
  },
  areaServed: [
    "Sevilla Centro",
    "Sevilla Este",
    "Los Remedios",
    "Triana",
    "Nervión",
    "Reina Mercedes",
    "Huelva",
  ],
  openingHours: "Mo-Fr 08:00-18:00",
  priceRange: "€€",
};
