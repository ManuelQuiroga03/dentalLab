export interface ClinicConfig {
  name: string;
  tagline: string;
  doctorName: string;
  whatsappPhone: string; // Formato internacional sin símbolos
  whatsappWelcomeMessage: string;
  address: {
    street: string;
    neighborhood: string;
    postalCode: string;
    city: string;
    state: string;
    fullAddress: string;
    reference: string;
    mapQueryUrl: string;
    embedMapUrl: string;
  };
  schedule: {
    weekdays: string;
    saturday: string;
    sunday: string;
  };
}

export const clinicConfig: ClinicConfig = {
  name: "Coccinella",
  tagline: "Dental Studio",
  doctorName: "Dra. Mary — Odontología Integral & Estética",
  whatsappPhone: "5215500000000",
  whatsappWelcomeMessage: "¡Hola Dra.! Me gustaría agendar una valoración en Coccinella Dental Studio en Zacatlán.",
  address: {
    street: "N. Bravo LB",
    neighborhood: "Col. El Brinco",
    postalCode: "73310",
    city: "Zacatlán",
    state: "Puebla",
    fullAddress: "N. Bravo LB, Col. El Brinco, 73310 Zacatlán, Pue. (Cerca de Palacio Municipal)",
    reference: "Zona céntrica de fácil acceso con estacionamiento cercano",
    mapQueryUrl: "https://www.google.com/maps/search/?api=1&query=Palacio+Municipal+Zacatlan+Puebla",
    embedMapUrl: "https://maps.google.com/maps?q=Palacio+Municipal+Zacatlan+Puebla&t=&z=16&ie=UTF8&iwloc=&output=embed",
  },
  schedule: {
    weekdays: "Lunes a Viernes: 10:00 am - 7:00 pm",
    saturday: "Sábados: 9:00 am - 2:00 pm",
    sunday: "Previa cita de urgencia",
  },
};

export const getWhatsAppUrl = (customMessage?: string): string => {
  const message = customMessage || clinicConfig.whatsappWelcomeMessage;
  return `https://wa.me/${clinicConfig.whatsappPhone}?text=${encodeURIComponent(message)}`;
};

export interface NavLink {
  name: string;
  href: string;
}

export const navLinks: NavLink[] = [
  { name: "Sobre la Dra.", href: "#about" },
  { name: "Tratamientos", href: "#tratamientos" },
  { name: "Esterilización", href: "#higiene" },
  { name: "Ubicación & Horarios", href: "#ubicacion" },
];
