export interface ClinicConfig {
  name: string;
  tagline: string;
  doctorName: string;
  whatsappPhone: string; // Formato internacional sin símbolos
  whatsappWelcomeMessage: string;
  address: {
    city: string;
    zone: string;
    reference: string;
    mapQueryUrl: string;
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
  doctorName: "Dra. Odontología Integral & Estética",
  whatsappPhone: "5215500000000",
  whatsappWelcomeMessage: "¡Hola Dra.! Me gustaría agendar una valoración en Coccinella Dental Studio.",
  address: {
    city: "Ciudad de México",
    zone: "Zona Céntrica / Accesible",
    reference: "Consultorio nuevo con estacionamiento cercano",
    mapQueryUrl: "https://maps.google.com/?q=Consultorio+Dental",
  },
  schedule: {
    weekdays: "Lunes a Viernes: 10:00 am - 7:00 pm",
    saturday: "Sábados: 9:00 am - 2:00 pm",
    sunday: "Domingos: Previa cita de urgencia",
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
