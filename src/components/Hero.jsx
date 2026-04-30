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
    }
  ];

  return (
    <section id="hero" className="relative bg-white overflow-hidden pt-8 md:pt-15 pb-16 md:pb-24 hero-form-section">
      {/* Fondos decorativos */}
      <div className="absolute top-0 right-0 w-96 h-96 rounded-full blur-3xl -z-10 opacity-60" style={{ backgroundColor: 'rgba(14, 41, 118, 0.1)' }}></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 rounded-full blur-3xl -z-10 opacity-40" style={{ backgroundColor: 'rgba(14, 41, 118, 0.05)' }}></div>

      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-30 items-start">
          
          {/* COLUMNA IZQUIERDA: CONTENIDO HERO */}
          <div className="flex lg:col-span-6 space-y-6 md:space-y-5 flex-col justify-center">

            {/* Título Principal */}
            <div className="space-y-3 text-center lg:text-left">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-black text-gray-900 leading-tight">
                Educación Bilingüe de 
                <span className="block" style={{ background: 'linear-gradient(135deg, #0E2976 0%, #1a3a7a 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
                  Excelencia en Tuxtla Gutiérrez
                </span>
              </h1>
              
              <p className="text-sm md:text-base text-gray-600 leading-relaxed max-w-xl mx-auto lg:mx-0">
                Educación de excelencia con un enfoque integral en el desarrollo académico, emocional y social de nuestros estudiantes desde edades tempranas.
              </p>
            </div>

            {/* Features: Diseño Unificado con espacio extra en Desktop */}
            <div className="grid grid-cols-1 md:grid-cols-1 gap-4 mb-10">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="flex items-start p-4 lg:p-6 rounded-2xl border transition-all duration-200 hover:shadow-xl group"
                  style={{
                    background: "rgba(255, 255, 255, 0.7)",
                    backdropFilter: "blur(10px)",
                    WebkitBackdropFilter: "blur(10px)",
                    borderColor: "rgba(14, 41, 118, 0.1)",
                  }}
                >
                  {/* Círculo Azul: mr-4 en móvil, mr-6 en desktop */}
                  <div className="h-4 w-4 rounded-full bg-blue-50 flex items-center justify-center mr-4 lg:mr-4 shrink-0 shadow-sm border border-white/50">
                    <div className="h-2 w-2 rounded-full bg-blue-600 shadow-[0_0_8px_rgba(37,99,235,0.4)]"></div>
                  </div>

                  <div className="flex flex-col">
                    <h3 className="font-bold text-gray-900 text-sm leading-tight">
                      {feature.title}
                    </h3>
                    <p className="text-[11px] md:text-xs text-gray-500 mt-1.5 leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* 
            <div className="flex overflow-x-auto pb-4 gap-4 snap-x no-scrollbar md:grid md:grid-cols-2 md:overflow-visible md:pb-0 md:gap-4">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="min-w-[250px] md:min-w-0 snap-center rounded-2xl p-5 md:p-5 backdrop-blur-xl"
                  style={{
                    background: "linear-gradient(25deg, rgba(14, 41, 118, 0.12) 0%, rgba(26, 58, 122, 0.08) 100%)",
                    backdropFilter: "blur(60px)",
                    border: "1.5px solid rgba(14, 41, 118, 0.25)",
                    boxShadow: "inset 0 2px 4px rgba(255, 255, 255, 0.4), 0 8px 32px rgba(14, 41, 118, 0.12), 0 1px 3px rgba(14, 41, 118, 0.15)"
                  }}
                >
                  <h3 className="font-semibold text-gray-800 text-sm md:text-sm mb-1 md:mb-2 leading-snug">
                    {feature.title}
                  </h3>
                  <p className="text-[11px] md:text-xs text-gray-700 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>*/}

            {/* Estadísticas */}
            <div className="grid grid-cols-3 gap-1 pt-6 md:pt-6 border-t border-gray-200">
              <div className="text-center md:text-left">
                <p className="text-2xl md:text-3xl font-bold" style={{ color: '#0E2976' }}>500+</p>
                <p className="text-[10px] md:text-sm text-gray-600 font-medium">Estudiantes</p>
                <p className="hidden md:block text-xs text-gray-400 mt-0.5">Educados con excelencia</p>
              </div>
              <div className="text-center md:text-left">
                <p className="text-2xl md:text-3xl font-bold" style={{ color: '#0E2976' }}>3</p>
                <p className="text-[10px] md:text-sm text-gray-600 font-medium">Niveles</p>
                <p className="hidden md:block text-xs text-gray-400 mt-0.5">Maternal a Primaria</p>
              </div>
              <div className="text-center md:text-left">
                <p className="text-2xl md:text-3xl font-bold" style={{ color: '#0E2976' }}>10</p>
                <p className="text-[10px] md:text-sm text-gray-600 font-medium">Años</p>
                <p className="hidden md:block text-xs text-gray-400 mt-0.5">Trayectoria</p>
              </div>
            </div>
          </div>

          {/* COLUMNA DERECHA: FORMULARIO CON EFECTO DE DOBLE CARD */}
          <div className="w-full lg:col-span-6 mt-4 lg:mt-0 relative">
            <div className="lg:sticky lg:top-32">
              {/* Card de fondo desplazado (Efecto de la imagen) */}
              <div 
                className="absolute inset-0 transform rotate-3 rounded-[2rem] -z-10 hidden lg:block"
                style={{ backgroundColor: 'rgba(14, 41, 118, 0.05)', border: '1px solid rgba(232, 234, 241)' }}
              ></div>
              
              {/* Contenedor del Formulario */}
              <div className="bg-white shadow-2xl md:shadow-xl rounded-[2rem] overflow-hidden">
                <HeroForm />
              </div>
            </div>
          </div>

        </div>
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        .no-scrollbar::-webkit-scrollbar { display: none; }
        .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
      `}} />
    </section>
  );
};

export default Hero;