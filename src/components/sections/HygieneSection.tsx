import React from 'react';
import { CheckCircle2 } from 'lucide-react';

export const HygieneSection: React.FC = () => {
  const hygieneProtocols = [
    "Autoclave digital de grado hospitalario con monitoreo biológico en cada ciclo.",
    "Material 100% individual y esterilizado, abierto exclusivamente frente a tus ojos.",
    "Unidades dentales nuevas con sistemas de purificación y desinfección continua.",
    "Trato empático, pausado y sin prisas: nos tomamos el tiempo para que te sientas segura."
  ];

  return (
    <section id="higiene" className="py-20 md:py-28 px-6 md:px-12 lg:px-20 max-w-7xl mx-auto">
      <div className="bg-gradient-to-br from-[#1E3A5F] to-[#254B7B] rounded-3xl p-8 md:p-14 text-white shadow-xl">
        <div className="max-w-3xl">
          <span className="px-3 py-1 rounded-full bg-[#EBFA73] text-[#1E3A5F] text-xs font-bold uppercase tracking-wider">
            Seguridad Absoluta
          </span>
          <h2 className="text-3xl md:text-5xl font-normal mt-4 tracking-tight text-white">
            Garantía de Esterilización & Máxima Bioseguridad
          </h2>
          <p className="text-white/80 mt-4 text-base md:text-lg">
            Tu salud y tranquilidad son sagradas. Hemos implementado el estándar más riguroso en desinfección para que cada visita sea 100% segura.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8">
            {hygieneProtocols.map((protocol, i) => (
              <div key={i} className="flex items-start gap-3 bg-white/10 rounded-2xl p-4 border border-white/10">
                <CheckCircle2 className="w-5 h-5 text-[#EBFA73] shrink-0 mt-0.5" />
                <span className="text-sm text-white/90 leading-snug">{protocol}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
