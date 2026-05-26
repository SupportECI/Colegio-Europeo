import React from 'react';
import HeroForm from './HeroForm';
import { div, label } from 'framer-motion/client';
import { number } from 'prop-types';
import sep from '/Logos/SEP_Logo.svg'
import algebraix from '/Logos/Algebraix_Escolar.png'
import luca from "/Logos/Logo-Luca.svg"
import banner from "/banner.webp"
import hero from "../assets/images/hero.jpeg"

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
      title: "Docentes Especializados",
      description: "Equipo profesional capacitado para cada materia y área.",
      accent: "from-indigo-500 to-indigo-600"
    },
    {
      icon: SafetyIcon,
      title: "Ambiente Seguro",
      description: "Contamos con circuito cerrado, instalaciones de una sola planta, salida de emergencia, áreas divididas de acuerdo al nivel educativo.",
      accent: "from-green-500 to-green-600"
    }
  ];

  const stats = [
    { number: "3", label: "Niveles", sublabel: "Maternal a Primaria" },
    { number: "10+", label: "Años", sublabel: "de trayectoria" },
    { number: "CCT", label: "07PJN0031Y", sublabel: "Preescolar" },
    { number: "CCT", label: "07PPR0043T", sublabel: "Primaria" },
  ];

  const logos = [
    { image: sep },
    { image: algebraix },
    { image: luca },
  ];

  return (
    <section id="hero" className="flex flex-col w-full hero-form-section">

      <div className="relative w-full pt-20 pb-16 md:pt-35 md:pb-52 overflow-hidden border-b border-gray\-200/50">
        
        <img 
          src={hero}
          alt="Fondo Institucional" 
          className="absolute inset-0 w-full h-full object-cover -z-20"
        />
        
        {/*<div className="absolute inset-0 bg-white/60 backdrop-blur-[0px] -z-10"></div>*/}
        <div className="absolute inset-0 bg-blue-500/60 backdrop-blur-[1px] -z-10"></div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-8 text-center">
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-black text-white leading-tight tracking-tight">
            Educación Bilingüe de
            <span className="block mt-1 md:mt-2" style={{ color: '#FFFFFF' }}>
              Excelencia en Tuxtla Gutiérrez
            </span>
          </h1>
          <div className='flex justify-center mt-6'>
            <p className="mx-auto text-sm md:text-base text-white/80 leading-relaxed max-w-2xl font-medium">
              Educación maternal, preescolar y primaria, con un enfoque integral en el desarrollo académico, emocional y social de nuestros estudiantes desde edades tempranas.
            </p>
          </div>
        </div>
      </div>
      {/* ========================================================= */}


      {/* ========================================================= */}
      {/* BLOQUE INFERIOR (CONTENIDO Y FORMULARIO) SIN IMAGEN         */}
      {/* ========================================================= */}
      <div className="relative w-full bg-gradient-to-br from-white via-blue-50/30 to-white pt-12 pb-12 md:pt-16 md:pb-20 overflow-hidden">
        
        {/* Elementos decorativos premium originales (solo en la parte inferior) */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full blur-3xl opacity-30"
            style={{ background: 'radial-gradient(circle, rgba(14, 41, 118, 0.15), transparent)' }}></div>
          <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full blur-3xl opacity-20"
            style={{ background: 'radial-gradient(circle, rgba(14, 41, 118, 0.1), transparent)' }}></div>
          <div className="absolute top-20 left-1/2 w-96 h-px bg-gradient-to-r from-transparent via-blue-200/40 to-transparent"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-stretch">
            
            {/* COLUMNA IZQUIERDA: FEATURES, STATS, LOGOS */}
            <div className="lg:col-span-6 flex flex-col justify-start">

              {/* Features con Iconos */}
              <div className="grid grid-cols-1 gap-3 mb-8 md:mb-10">
                {features.map((feature, index) => {
                  const Icon = feature.icon;
                  return (
                    <div
                      key={index}
                      className="group relative p-4 md:p-5 rounded-2xl border border-gray-100/80 backdrop-blur-sm transition-all duration-300 hover:border-blue-200 hover:shadow-lg hover:shadow-blue-500/10 overflow-hidden cursor-default"
                      style={{ background: 'rgba(255, 255, 255, 0.5)' }}
                    >
                      <div className="absolute inset-0 bg-gradient-to-br from-blue-50/0 to-indigo-50/0 group-hover:from-blue-50/60 group-hover:to-indigo-50/40 transition-all duration-300 -z-10"></div>
                      <div className="flex items-start gap-3">
                        <div className={`flex-shrink-0 w-10 h-10 rounded-lg bg-gradient-to-br ${feature.accent} text-white flex items-center justify-center shadow-lg shadow-blue-500/20 group-hover:shadow-blue-500/40 transition-all duration-300`}>
                          <Icon />
                        </div>
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

              {/* Estadísticas */}
              <div className="grid grid-cols-4 gap-4 pt-5 border-t border-gray-200/60">
                {stats.map((stat, index) => (
                  <div key={index} className="text-center lg:text-left group">
                    <div className="flex items-baseline gap-1 mb-1 justify-center lg:justify-start">
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

              {/* Logos */}
              <div className="flex flex-wrap justify-center lg:justify-start items-center gap-8 md:gap-14 pt-6 mt-6 border-t border-gray-200/60">
                {logos.map((log, index) => (
                  <div key={index} className='flex justify-center items-center'>
                    <img 
                      src={log.image} 
                      alt={`Logo ${index}`} 
                      className="h-12 md:h-16 w-28 md:w-32 object-contain" 
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* COLUMNA DERECHA: FORMULARIO */}
            <div className="w-full lg:col-span-6 mt-4 lg:mt-0 relative">
              <div className="lg:sticky lg:top-8">
                <div
                  className="absolute inset-0 transform -rotate-2 rounded-[2rem] -z-10 hidden lg:block"
                  style={{
                    backgroundColor: 'rgba(14, 41, 118, 0.06)',
                    border: '1px solid rgba(14, 41, 118, 0.08)',
                    boxShadow: '0 20px 60px rgba(14, 41, 118, 0.1)'
                  }}
                ></div>
                <div className="bg-white shadow-2xl md:shadow-2xl rounded-[2rem] overflow-hidden border border-gray-100/50">
                  <HeroForm />
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
      {/* ========================================================= */}

      <style dangerouslySetInnerHTML={{
        __html: `
        .no-scrollbar::-webkit-scrollbar { display: none; }
        .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
      `}} />
    </section>
  );
};

export default Hero;