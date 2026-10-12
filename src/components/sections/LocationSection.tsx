import React from 'react';
import { Clock, MapPin, Phone, MessageCircle } from 'lucide-react';
import { clinicConfig, getWhatsAppUrl } from '../../config/clinic';

export const LocationSection: React.FC = () => {
  return (
    <section id="ubicacion" className="py-20 bg-white border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <span className="text-[#3D8CD5] font-semibold text-xs tracking-widest uppercase">Agenda Fácil</span>
            <h2 className="text-3xl md:text-5xl font-normal text-slate-900 mt-2 tracking-tight">
              ¿Lista para sonreír con confianza?
            </h2>
            <p className="text-slate-600 mt-4 text-base">
              Escríbenos directamente por WhatsApp. Te respondemos de inmediato con disponibilidad, dudas sobre tu tratamiento y presupuesto estimado.
            </p>

            <div className="space-y-4 mt-8">
              {/* Horarios */}
              <div className="flex items-center gap-4 p-4 rounded-2xl bg-slate-50 border border-slate-200">
                <div className="w-10 h-10 rounded-full bg-[#5F9AD1]/20 flex items-center justify-center text-[#3D8CD5] shrink-0">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <h5 className="font-semibold text-slate-900 text-sm">Horarios de Atención</h5>
                  <p className="text-xs text-slate-500">{clinicConfig.schedule.weekdays} | {clinicConfig.schedule.saturday}</p>
                </div>
              </div>

              {/* Ubicación */}
              <div className="flex items-center gap-4 p-4 rounded-2xl bg-slate-50 border border-slate-200">
                <div className="w-10 h-10 rounded-full bg-[#5F9AD1]/20 flex items-center justify-center text-[#3D8CD5] shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h5 className="font-semibold text-slate-900 text-sm">Ubicación del Consultorio</h5>
                  <p className="text-xs text-slate-500">{clinicConfig.address.zone} ({clinicConfig.address.city}) - {clinicConfig.address.reference}</p>
                </div>
              </div>

              {/* Atención 1 a 1 */}
              <div className="flex items-center gap-4 p-4 rounded-2xl bg-slate-50 border border-slate-200">
                <div className="w-10 h-10 rounded-full bg-[#EBFA73] flex items-center justify-center text-slate-900 shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <h5 className="font-semibold text-slate-900 text-sm">Atención Personalizada</h5>
                  <p className="text-xs text-slate-500">Citas programadas para evitar salas de espera llenas</p>
                </div>
              </div>
            </div>

            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <a
                href={getWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#20ba5a] text-white font-semibold px-6 py-4 rounded-full shadow-lg hover:shadow-xl transition-all"
              >
                <MessageCircle className="w-5 h-5" />
                <span>Agendar por WhatsApp</span>
              </a>
            </div>
          </div>

          {/* Tarjeta Visual de Mapa / Ubicación Interactiva */}
          <div className="bg-slate-100 rounded-3xl p-6 border border-slate-200 shadow-inner h-96 flex flex-col items-center justify-center text-center">
            <MapPin className="w-12 h-12 text-[#5F9AD1] mb-3 animate-bounce" />
            <h4 className="text-lg font-medium text-slate-800">Ubicación Lista para Vincular</h4>
            <p className="text-xs text-slate-500 max-w-sm mt-1">
              Aquí vinculamos el mapa interactivo de Google Maps de su nuevo consultorio para que sus pacientes abran la ruta con un toque.
            </p>
            <a 
              href={clinicConfig.address.mapQueryUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              className="mt-4 px-4 py-1.5 bg-white rounded-full text-xs font-semibold text-[#3D8CD5] shadow-sm hover:shadow hover:bg-slate-50 transition-all"
            >
              Abrir en Google Maps &rarr;
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
