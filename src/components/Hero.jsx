import React from 'react';
import HeroForm from './HeroForm';

const Hero = () => {
  const features = [
    {
      title: "Educación de Calidad",
      description: "Programa académico riguroso con enfoque en excelencia y desarrollo integral"
    },
    {
      title: "Docentes Preparados",
      description: "Equipo profesional altamente capacitado con experiencia internacional"
    },
    {
      title: "Ambiente Seguro",
      description: "Instalaciones modernas y ambiente de confianza para el desarrollo de nuestros estudiantes"
    },
    {
      title: "Formación Integral",
      description: "Desarrollo académico, emocional y social desde edades tempranas"
    }
  ];

  return (
    /* Reducido pt-16 a pt-8 en móvil para subir todo el contenido */
    <section id="hero" className="relative bg-white overflow-hidden pt-8 md:pt-15 pb-16 md:pb-24 hero-form-section">
      {/* Fondos decorativos */}
      <div className="absolute top-0 right-0 w-96 h-96 rounded-full blur-3xl -z-10 opacity-60" style={{ backgroundColor: 'rgba(14, 41, 118, 0.1)' }}></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 rounded-full blur-3xl -z-10 opacity-40" style={{ backgroundColor: 'rgba(14, 41, 118, 0.05)' }}></div>

      {/* Contenedor Principal */}
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        {/* Ajustado gap-8 a gap-6 en móvil para separar el contenido y formulario */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-30 items-start">
          
          {/* COLUMNA IZQUIERDA: CONTENIDO HERO */}
          <div className="flex lg:col-span-6 space-y-5 flex-col justify-center">

            {/* Título Principal - Ajustado space-y-2 para mayor cercanía */}
            <div className="space-y-2">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-black text-gray-900 leading-tight">
                Educación Bilingüe de 
                <span className="block" style={{ background: 'linear-gradient(135deg, #0E2976 0%, #1a3a7a 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
                  Excelencia en Tuxtla Gutiérrez
                </span>
              </h1>
              
              <p className="text-sm md:text-base text-gray-600 leading-relaxed max-w-xl">
                Educación de excelencia con un enfoque integral en el desarrollo académico, emocional y social de nuestros estudiantes desde edades tempranas.
              </p>
            </div>

            {/* Features Grid - Se mantiene igual pero el gap global lo sube */}
            <div className="grid grid-cols-2 gap-3 md:gap-4">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="rounded-2xl p-4 md:p-5 backdrop-blur-xl"
                  style={{
                    background: "linear-gradient(25deg, rgba(14, 41, 118, 0.12) 0%, rgba(26, 58, 122, 0.08) 100%)",
                    backdropFilter: "blur(60px)",
                    border: "1.5px solid rgba(14, 41, 118, 0.25)",
                    boxShadow: "inset 0 2px 4px rgba(255, 255, 255, 0.4), 0 8px 32px rgba(14, 41, 118, 0.12), 0 1px 3px rgba(14, 41, 118, 0.15)"
                  }}
                >
                  <h3 className="font-semibold text-gray-800 text-xs md:text-sm mb-1 md:mb-2 leading-snug">
                    {feature.title}
                  </h3>
                  <p className="text-[10px] md:text-xs text-gray-700 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>

            {/* Estadísticas */}
            <div className="grid grid-cols-3 gap-2 pt-4 md:pt-6 border-t border-gray-200">
              <div className="text-center md:text-left">
                <p className="text-xl md:text-3xl font-bold" style={{ color: '#0E2976' }}>500+</p>
                <p className="text-[10px] md:text-sm text-gray-600 font-medium">Estudiantes</p>
                <p className="hidden md:block text-xs text-gray-400 mt-0.5">Educados con excelencia</p>
              </div>
              <div className="text-center md:text-left">
                <p className="text-xl md:text-3xl font-bold" style={{ color: '#0E2976' }}>3</p>
                <p className="text-[10px] md:text-sm text-gray-600 font-medium">Niveles</p>
                <p className="hidden md:block text-xs text-gray-400 mt-0.5">Maternal a Primaria</p>
              </div>
              <div className="text-center md:text-left">
                <p className="text-xl md:text-3xl font-bold" style={{ color: '#0E2976' }}>10</p>
                <p className="text-[10px] md:text-sm text-gray-600 font-medium">Años</p>
                <p className="hidden md:block text-xs text-gray-400 mt-0.5">Trayectoria</p>
              </div>
            </div>
          </div>

          {/* COLUMNA DERECHA: FORMULARIO */}
          <div className="w-full lg:col-span-6 mt-6 lg:mt-0">
            <div className="lg:sticky lg:top-32">
              <HeroForm />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;