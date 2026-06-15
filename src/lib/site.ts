// Casa Arouquesa — dados reais do restaurante
export const SITE = {
  name: "Casa Arouquesa",
  tagline: "A arte da brasa, a nobreza da raça.",
  address: {
    street: "Empreendimento Bellavista, Lote 0",
    locality: "Repeses",
    postalCode: "3500-680",
    region: "Viseu",
    country: "PT",
  },
  phone: "+351 232 416 174",
  phoneE164: "+351232416174",
  // TODO: substituir pelo número real de WhatsApp
  whatsapp: "351000000000",
  whatsappDisplay: "[atualizar nº]",
  email: "geral@casaarouquesa.pt",
  facebook: "https://www.facebook.com/",
  // Repeses, Viseu — coordenadas aproximadas
  geo: { latitude: 40.6398, longitude: -7.9275 },
  hours: [
    { days: "Seg – Sex", lunch: "12:15 – 15:00", dinner: "19:15 – 22:00" },
    { days: "Sábado",    lunch: "12:15 – 15:00", dinner: "19:15 – 22:30" },
    { days: "Domingo",   lunch: "Encerrado",     dinner: "" },
  ],
  priceRange: "€€€",
};

export const waLink = (msg = "Olá! Gostaria de fazer uma reserva na Casa Arouquesa.") =>
  `https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent(msg)}`;

export const telLink = `tel:${SITE.phoneE164}`;
export const mailLink = `mailto:${SITE.email}`;
