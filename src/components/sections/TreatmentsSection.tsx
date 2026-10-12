import React from 'react';
import { Sparkles, Smile, ShieldCheck, Award } from 'lucide-react';
import { openWhatsApp } from '../../config/analytics';

export const TreatmentsSection: React.FC = () => {
  const treatments = [
    {
      title: "Limpieza Profunda & Profilaxis",
      description: "Eliminación ultrasónica de sarro y manchas sin dolor, preservando la salud de tus encías.",
      tag: "Prevención",
      icon: Sparkles
    },
    {
      title: "Blanqueamiento Dental LED",
      description: "Aclara hasta 4 tonos en una sola sesión con tecnología de mínima sensibilidad.",
      tag: "Estética",
      icon: Smile
    },
    {
      title: "Resinas Estéticas Biomiméticas",
      description: "Restauraciones invisibles que devuelven la anatomía y color natural a tus dientes.",
      tag: "Restauración",
      icon: ShieldCheck
    },
    {
      title: "Alineación & Ortodoncia Invisible",
      description: "Planificación digital personalizada para corregir tu mordida de forma estética y cómoda.",
      tag: "Ortodoncia",
      icon: Award
    }
  ];

  return (
    <section id="tratamientos" className="py-20 bg-white border-y border-slate-200">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-[#3D8CD5] font-semibold text-xs tracking-widest uppercase">Tratamientos Integrales en Zacatlán</span>
          <h2 className="text-3xl md:text-5xl font-normal text-slate-900 mt-3 tracking-tight">
            Cuidamos tu sonrisa en cada etapa
          </h2>
          <p className="text-slate-600 mt-4 text-base">
            Procedimientos personalizados con materiales de la más alta calidad para resultados funcionales y estéticamente naturales.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {treatments.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div 
                key={idx} 
                className="group p-6 rounded-3xl bg-slate-50 hover:bg-[#5F9AD1]/10 border border-slate-200 hover:border-[#5F9AD1]/40 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-white text-[#3D8CD5] border border-slate-200">
                      {item.tag}
                    </span>
                    <Icon className="w-6 h-6 text-[#5F9AD1] group-hover:scale-110 transition-transform" />
                  </div>
                  <h3 className="text-xl font-medium text-slate-900 mb-2">{item.title}</h3>
                  <p className="text-sm text-slate-600 leading-relaxed">{item.description}</p>
                </div>
                <div className="mt-6 pt-4 border-t border-slate-200/60">
                  <button 
                    onClick={() => {
                      openWhatsApp(
                        'treatment_card', 
                        `¡Hola Dra.! Me gustaría pedir informes sobre el tratamiento de: ${item.title} en Coccinella Dental Studio (Zacatlán).`,
                        item.title
                      );
                    }}
                    className="text-sm font-semibold text-[#3D8CD5] hover:text-[#1E3A5F] inline-flex items-center gap-1.5 cursor-pointer text-left"
                  >
                    <span>Consultar costo y fechas</span>
                    <span>&rarr;</span>
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
