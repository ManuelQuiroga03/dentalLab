import React from 'react';
import { HeartHandshake, Sparkles } from 'lucide-react';

export const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-20 md:py-28 px-6 md:px-12 lg:px-20 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        <div className="space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#5F9AD1]/15 text-[#3D8CD5] text-xs font-semibold tracking-wider uppercase">
            <span className="w-2 h-2 rounded-full bg-[#5F9AD1]"></span>
            Nueva Consulta & Consultorio Equipado
          </div>
          
          <h2 className="text-3xl md:text-5xl font-normal text-slate-900 tracking-tight leading-tight">
            Una nueva experiencia dental: <br className="hidden sm:inline" />
            <span className="text-[#3D8CD5] font-medium">calidez, tecnología y cero miedo.</span>
          </h2>

          <p className="text-slate-600 text-lg leading-relaxed">
            Sabemos que ir al dentista solía ser una experiencia estresante. En <strong>Coccinella Dental Studio</strong> combinamos el conocimiento clínico más actualizado con instalaciones nuevas de última generación y un ambiente diseñado para que te relajes desde el primer minuto.
          </p>

          <div className="grid grid-cols-2 gap-4 pt-4">
            <div className="p-4 bg-white rounded-2xl border border-slate-200 shadow-sm">
              <HeartHandshake className="w-8 h-8 text-[#5F9AD1] mb-2" />
              <h4 className="font-semibold text-slate-900 text-base">Atención 1 a 1</h4>
              <p className="text-xs text-slate-500 mt-1">Sesiones sin prisas dedicadas 100% a ti.</p>
            </div>
            <div className="p-4 bg-white rounded-2xl border border-slate-200 shadow-sm">
              <Sparkles className="w-8 h-8 text-[#5F9AD1] mb-2" />
              <h4 className="font-semibold text-slate-900 text-base">Técnicas Sin Dolor</h4>
              <p className="text-xs text-slate-500 mt-1">Anestesia guiada y mínima invasión.</p>
            </div>
          </div>
        </div>

        <div className="relative">
          <div className="relative mx-auto max-w-md lg:max-w-none rounded-3xl overflow-hidden shadow-2xl border-4 border-white bg-gradient-to-tr from-[#5F9AD1] to-[#3D8CD5] p-2">
            <img 
              src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=compress&cs=tinysrgb&w=900" 
              alt="Consultorio dental moderno" 
              className="rounded-2xl object-cover w-full h-[420px] md:h-[480px]"
            />
            <div className="absolute bottom-6 left-6 right-6 bg-white/95 backdrop-blur-md rounded-2xl p-5 shadow-lg border border-white">
              <p className="text-sm font-semibold text-slate-900">Consultorio 100% Terminado & Equipado</p>
              <p className="text-xs text-slate-500 mt-0.5">Listo para recibirte con el protocolo más riguroso de higiene y confort.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
