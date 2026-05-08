import React from 'react';
import HeroForm from './HeroForm';

// SVG Icons as components
const AcademicIcon = () => (
  <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M12 2L2 7v4c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V7l-10-5z" />
    <path d="M9 13l2 2 4-4" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const TeachersIcon = () => (
  <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
    <circle cx="9" cy="7" r="4" />
    <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
    <path d="M16 3.13a4 4 0 0 1 0 7.75" />
  </svg>
);

const SafetyIcon = () => (
  <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
    <path d="M9 12l2 2 4-4" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const Hero = () => {
  const features = [
    {
      icon: AcademicIcon,
      title: "Educación de Excelencia",
      description: "Programa académico riguroso con enfoque integral en desarrollo cognitivo y formación de valores",
      accent: "from-blue-500 to-blue-600"
    },
    {
      icon: TeachersIcon,
      title: "Docentes Profesionales",
      description: "Equipo altamente capacitado con formación internacional y experiencia en pedagogía moderna",
      accent: "from-indigo-500 to-indigo-600"
    },
    {
      icon: SafetyIcon,
      title: "Ambiente Seguro",
      description: "Instalaciones modernas, seguridad 24/7 y ambiente de confianza para el desarrollo integral",
      accent: "from-green-500 to-green-600"
    }
  ];

  const stats = [
    { number: "500+", label: "Estudiantes", sublabel: "de 3 a 12 años" },
    { number: "25+", label: "Docentes", sublabel: "especializados" },
    { number: "10+", label: "Años", sublabel: "de excelencia" }
  ];

  return (
    <section id="hero" className="relative bg-gradient-to-br from-white via-blue-50/30 to-white overflow-hidden pt-16 md:pt-12 pb-12 md:pb-20 hero-form-section">
      {/* Elementos decorativos premium */}
      <div className="absolute inset-0 -z-10">
        {/* Fondo superior derecho */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full blur-3xl opacity-30" 
             style={{ background: 'radial-gradient(circle, rgba(14, 41, 118, 0.15), transparent)' }}></div>
        
        {/* Fondo inferior izquierdo */}
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full blur-3xl opacity-20" 
             style={{ background: 'radial-gradient(circle, rgba(14, 41, 118, 0.1), transparent)' }}></div>
        
        {/* Líneas decorativas sutiles */}
        <div className="absolute top-20 left-1/2 w-96 h-px bg-gradient-to-r from-transparent via-blue-200/40 to-transparent"></div>
        <div className="absolute bottom-32 right-0 w-96 h-px bg-gradient-to-l from-transparent via-indigo-200/30 to-transparent"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-stretch">
          
          {/* COLUMNA IZQUIERDA: CONTENIDO HERO */}
          <div className="lg:col-span-6 flex flex-col justify-between">
            
            {/* Sección Superior: Título + Descripción */}
            <div className="space-y-5">
              
              {/* Título Principal */}
              <div className="space-y-2">
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-black text-gray-900 leading-tight tracking-tight">
                  Educación Bilingüe de
                  <span className="block" style={{ background: 'linear-gradient(135deg, #0E2976 0%, #1a3a7a 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
                    Excelencia en Tuxtla Gutiérrez
                  </span>
                </h1>
                
                <p className="text-sm md:text-base text-gray-600 leading-relaxed max-w-lg font-normal">
                  Educación de excelencia con un enfoque integral en el desarrollo académico, emocional y social de nuestros estudiantes desde edades tempranas.
                </p>
              </div>
            </div>

            {/* Sección Media: Features con Iconos */}
            <div className="grid grid-cols-1 gap-3 my-6 md:my-8">
              {features.map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <div
                    key={index}
                    className="group relative p-4 md:p-5 rounded-2xl border border-gray-100/80 backdrop-blur-sm transition-all duration-300 hover:border-blue-200 hover:shadow-lg hover:shadow-blue-500/10 overflow-hidden cursor-default"
                    style={{ background: 'rgba(255, 255, 255, 0.5)' }}
                  >
                    {/* Fondo hover gradient */}
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-50/0 to-indigo-50/0 group-hover:from-blue-50/60 group-hover:to-indigo-50/40 transition-all duration-300 -z-10"></div>

                    <div className="flex items-start gap-3">
                      {/* Icono */}
                      <div className={`flex-shrink-0 w-10 h-10 rounded-lg bg-gradient-to-br ${feature.accent} text-white flex items-center justify-center shadow-lg shadow-blue-500/20 group-hover:shadow-blue-500/40 transition-all duration-300`}>
                        <Icon />
                      </div>

                      {/* Contenido */}
                      <div className="flex-1 min-w-0">
                        <h3 className="font-bold text-gray-900 text-xs md:text-sm leading-tight mb-1">
                          {feature.title}
                        </h3>
                        <p className="text-[11px] md:text-xs text-gray-600 leading-relaxed">
                          {feature.description}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Sección Inferior: Estadísticas */}
            <div className="grid grid-cols-3 gap-3 pt-5 border-t border-gray-200/60">
              {stats.map((stat, index) => (
                <div key={index} className="text-center lg:text-left group">
                  <div className="flex items-baseline gap-1 mb-1">
                    <p className="text-2xl md:text-3xl font-black" style={{ color: '#0E2976' }}>
                      {stat.number}
                    </p>
                  </div>
                  <p className="text-[10px] md:text-xs font-bold text-gray-700 uppercase tracking-wide mb-0.5">
                    {stat.label}
                  </p>
                  <p className="text-[9px] md:text-[10px] text-gray-500 leading-tight hidden md:block">
                    {stat.sublabel}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* COLUMNA DERECHA: FORMULARIO */}
          <div className="w-full lg:col-span-6 mt-4 lg:mt-0 relative">
            <div className="lg:sticky lg:top-8">
              {/* Card de fondo desplazado - Efecto de profundidad */}
              <div 
                className="absolute inset-0 transform -rotate-2 rounded-[2rem] -z-10 hidden lg:block"
                style={{ 
                  backgroundColor: 'rgba(14, 41, 118, 0.06)',
                  border: '1px solid rgba(14, 41, 118, 0.08)',
                  boxShadow: '0 20px 60px rgba(14, 41, 118, 0.1)'
                }}
              ></div>
              
              {/* Contenedor del Formulario */}
              <div className="bg-white shadow-2xl md:shadow-2xl rounded-[2rem] overflow-hidden border border-gray-100/50">
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