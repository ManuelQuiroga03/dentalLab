import React from 'react';
import { ExternalLink, Navigation, Star, MapPin } from 'lucide-react';
import { clinicConfig } from '../../config/clinic';

export const InteractiveMapCard: React.FC = () => {
  return (
    <div className="relative w-full h-[400px] md:h-[430px] rounded-3xl overflow-hidden shadow-xl border border-slate-200 group bg-slate-100">
      {/* 1. Iframe interactivo de Google Maps */}
      <iframe
        title="Ubicación Coccinella Dental Studio"
        src={clinicConfig.address.embedMapUrl}
        className="w-full h-full border-0 filter saturate-[1.1] contrast-[1.05]"
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        aria-label="Mapa interactivo de Google Maps de Zacatlán"
      />

      {/* 2. Tarjeta flotante superpuesta estilo Google Maps Widget (idéntica a la imagen de referencia) */}
      <div className="absolute top-4 left-4 z-10 max-w-[280px] sm:max-w-[310px] bg-white rounded-2xl p-4 shadow-2xl border border-slate-100/80 backdrop-blur-sm transition-all duration-300">
        <div className="flex items-start gap-2.5">
          <div className="w-8 h-8 rounded-xl bg-[#5F9AD1]/15 flex items-center justify-center text-[#3D8CD5] shrink-0 mt-0.5">
            <MapPin className="w-4 h-4" />
          </div>
          <div>
            <h4 className="text-sm font-semibold text-slate-900 leading-tight">
              {clinicConfig.name} {clinicConfig.tagline}
            </h4>
            <p className="text-[11px] text-slate-500 mt-1 leading-snug">
              {clinicConfig.address.fullAddress}
            </p>
          </div>
        </div>

        {/* Rating / Valoraciones de confianza */}
        <div className="flex items-center gap-1.5 mt-2.5 pt-2 border-t border-slate-100 text-xs">
          <span className="font-bold text-slate-800 text-[13px]">5.0</span>
          <div className="flex items-center text-amber-400">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-3.5 h-3.5 fill-amber-400 stroke-none" />
            ))}
          </div>
          <span className="text-[11px] text-slate-400 font-medium">(Consultorio Nuevo)</span>
        </div>

        {/* Botones de acción: Abrir en Maps + Cómo llegar */}
        <div className="flex items-center gap-2 mt-3 pt-1">
          <a
            href={clinicConfig.address.mapQueryUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 inline-flex items-center justify-center gap-1.5 bg-[#1a73e8] hover:bg-[#1557b0] text-white text-xs font-medium py-2 px-3 rounded-full shadow-sm hover:shadow transition-all"
          >
            <ExternalLink className="w-3.5 h-3.5" />
            <span>Abrir en Maps</span>
          </a>

          <a
            href={`https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(clinicConfig.address.fullAddress)}`}
            target="_blank"
            rel="noopener noreferrer"
            title="Cómo llegar con GPS"
            className="w-8 h-8 rounded-full bg-[#1a73e8]/10 hover:bg-[#1a73e8]/20 flex items-center justify-center text-[#1a73e8] transition-colors shrink-0"
          >
            <Navigation className="w-4 h-4 fill-[#1a73e8]" />
          </a>
        </div>
      </div>

      {/* Pin badge flotante decorativo en esquina inferior */}
      <div className="absolute bottom-3 right-3 z-10 bg-white/90 backdrop-blur-md px-3 py-1 rounded-full border border-slate-200/80 text-[11px] font-medium text-slate-600 shadow-sm pointer-events-none">
        📍 Zacatlán, Pue.
      </div>
    </div>
  );
};
