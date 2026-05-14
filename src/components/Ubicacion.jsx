import { MapPin, Navigation, ShieldCheck, Clock, School, ExternalLink } from "lucide-react";
import colegioImage from '../assets/images/Colegio.png'

export default function UbicacionColegio() {
  return (
    <section className="scroll-mt-35 w-full py-20 bg-white" id="ubicacion">
      <div className="max-w-7xl mx-auto px-6">

        {/* Título y Subtítulo Proporcionados */}
        <div className="text-center mb-8">
          <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-blue-600 mb-2 block">
            Ubicación Estratégica
          </span>
          <h2 className="text-3xl font-black text-slate-900 sm:text-4xl">
            Ubicación Privilegiada y Confiable
          </h2>
          <p className="text-slate-500 mt-4 text-base max-w-2xl mx-auto leading-relaxed">
            Nuestras instalaciones se encuentran en una zona segura y de fácil acceso en Tuxtla Gutiérrez, 
            diseñadas para la tranquilidad de tu familia.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">

          {/* Imagen con Badge de Ubicación Real */}
          <div className="relative">
            <img
              src={colegioImage}
              alt="Instalaciones Centro Educativo Europeo"
              className="rounded-[2.5rem] shadow-2xl shadow-slate-200 object-cover w-full h-95 border-4 border-white"
            />

            {/* Badge Flotante Compacto */}
            <div className="absolute bottom-6 left-6 bg-white/95 backdrop-blur-sm p-4 rounded-2xl shadow-xl flex items-center gap-3 border border-slate-100">
              <div className="bg-red-50 p-2 rounded-lg">
                <MapPin size={20} className="text-[#c51c1c]" />
              </div>
              <div>
                <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Localización</p>
                <p className="text-xs font-bold text-slate-800">Tuxtla Gutiérrez, Chiapas</p>
              </div>
            </div>
          </div>

          {/* Información Detallada basada en la imagen de referencia */}
          <div className="flex flex-col h-full justify-center">
            <h3 className="text-xl font-bold text-slate-900 mb-4 flex items-center gap-2">
              <School className="text-blue-600" size={24} />
              Entorno Seguro y Cercano
            </h3>

            <p className="text-sm text-slate-600 mb-8 leading-relaxed">
              Ubicados en la <strong>Colonia Xamaipak</strong>, nos encontramos a espaldas de las clínicas del ISSSTE, 
              en una zona residencial tranquila que facilita la llegada y salida de nuestros alumnos.
            </p>

            {/* Grid de Puntos Relevantes del Colegio */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">

              <div className="flex items-center gap-3 bg-slate-50 p-4 rounded-2xl border border-slate-100/50 hover:bg-white hover:shadow-md transition-all">
                <div className="bg-blue-100 p-2 rounded-xl text-blue-600">
                  <Navigation size={18} />
                </div>
                <div>
                  <p className="text-xs font-bold text-slate-900">Fácil Acceso</p>
                  <p className="text-[11px] text-slate-500">8a. Sur Poniente No. 1617</p>
                </div>
              </div>

              <div className="flex items-center gap-3 bg-slate-50 p-4 rounded-2xl border border-slate-100/50 hover:bg-white hover:shadow-md transition-all">
                <div className="bg-emerald-100 p-2 rounded-xl text-emerald-600">
                  <ShieldCheck size={18} />
                </div>
                <div>
                  <p className="text-xs font-bold text-slate-900">Zona Segura</p>
                  <p className="text-[11px] text-slate-500">CCTV 24/7</p>
                </div>
              </div>

              <div className="flex items-center gap-3 bg-slate-50 p-4 rounded-2xl border border-slate-100/50 hover:bg-white hover:shadow-md transition-all">
                <div className="bg-orange-100 p-2 rounded-xl text-orange-600">
                  <Clock size={18} />
                </div>
                <div>
                  <p className="text-xs font-bold text-slate-900">Horario Extendido</p>
                  <p className="text-[11px] text-slate-500">Hasta las 4:30 PM</p>
                </div>
              </div>

              <div className="flex items-center gap-3 bg-slate-50 p-4 rounded-2xl border border-slate-100/50 hover:bg-white hover:shadow-md transition-all">
                <div className="bg-purple-100 p-2 rounded-xl text-purple-600">
                  <MapPin size={18} />
                </div>
                <div>
                  <p className="text-xs font-bold text-slate-900">Referencia</p>
                  <p className="text-[11px] text-slate-500">A espaldas de las clínicas del ISSSTE</p>
                </div>
              </div>

            </div>

            {/* Botón de Google Maps con efecto Glowing Gradient Border */}
            <div className="mt-8">
              <div className="relative inline-block group cursor-pointer">
                {/* Capa de resplandor difuminado (Glow Effect) */}
                <div className="absolute -inset-1 bg-gradient-to-r from-red-600 to-blue-600 rounded-xl blur opacity-25 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
                
                {/* Botón Principal (Se mantiene con tu diseño original, pero relativo para estar por encima del resplandor) */}
                <a
                  href="https://maps.google.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative inline-flex items-center gap-2 bg-[#0E2976] text-white px-6 py-3.5 rounded-xl text-xs font-bold transition-all shadow-lg active:scale-95"
                >
                  <MapPin size={16} className="text-red-500" />
                  VER EN GOOGLE MAPS
                  <ExternalLink size={14} className="opacity-40" />
                </a>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}