import { track } from '@vercel/analytics';
import { clinicConfig, getWhatsAppUrl } from './clinic';

export type WhatsAppSource = 
  | 'navbar_desktop'
  | 'mobile_menu'
  | 'mobile_hero_badge'
  | 'treatment_card'
  | 'location_section'
  | 'floating_cta';

/**
 * Handles WhatsApp redirection while logging a structured conversion event in Vercel Analytics
 */
export const openWhatsApp = (source: WhatsAppSource, customMessage?: string, treatmentName?: string) => {
  // 1. Registrar analítica del clic y su origen
  try {
    track('whatsapp_click', {
      source,
      treatment: treatmentName || 'general',
      city: clinicConfig.address.city,
    });
  } catch (err) {
    console.debug('Analytics track error or running in dev:', err);
  }

  // 2. Abrir WhatsApp con el mensaje adecuado
  const targetUrl = getWhatsAppUrl(customMessage);
  window.open(targetUrl, '_blank', 'noopener,noreferrer');
};
