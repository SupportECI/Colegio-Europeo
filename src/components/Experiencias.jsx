import React, { useState } from 'react';
import FacebookFeed from './FacebookFeed';
import '../styles/facebook-feed.css';

const ExperiencesGrid = () => {
  const [viewMode, setViewMode] = useState('grid'); // 'grid' o 'facebook'
  
  const experiences = [
    {
      title: "Titulo 1",
      description: "Descripción 1",
      image: "",
      className: "md:col-span-2 md:row-span-2 min-h-[300px] md:min-h-[400px]",
      level: "General"
    },
    {
      title: "titulo 2",
      description: "Descripción 2",
      image: "",
      className: "md:col-span-2 md:row-span-1 min-h-[200px]",
      level: "Primaria"
    },
    {
      title: "titulo 3",
      description: "Descripción 3",
      image: "",
      className: "md:col-span-1 md:row-span-1 min-h-[200px]",
      level: "Docentes"
    },
    {
      title: "titulo 4",
      description: "Descripción 4",
      image: "",
      className: "md:col-span-1 md:row-span-2 min-h-[300px]",
      level: "Primaria"
    },
    {
      title: "titulo 5",
      description: "Descripción 5",
      image: "",
      className: "md:col-span-2 md:row-span-1 min-h-[200px]",
      level: "Todos"
    },
    {
      title: "titulo 6",
      description: "Descripción 6",
      image: "",
      className: "md:col-span-1 md:row-span-1 min-h-[200px]",
      level: "Primaria"
    },
  ];

  return (
    <section id="experiencias" className="py-8 md:py-16 px-4 bg-white scroll-mt-20">
      <div className="max-w-7xl mx-auto">
        {/* Cabecera optimizada y compacta */}
        <header className="mb-6 text-left border-l-4 border-blue-600 pl-6">
          <h2 className="text-2xl md:text-4xl font-extrabold text-gray-900 tracking-tight uppercase">
            Experiencias <span className="text-blue-600 font-light italic">Educativas</span>
          </h2>
          <p className="mt-1 text-gray-500 max-w-xl text-sm md:text-base leading-snug">
            Descubre los eventos que fortalecen el aprendizaje y la convivencia en nuestra comunidad escolar.
          </p>
        </header>

        {/* Botones de selección de vista */}
        <div className="flex gap-3 mb-8">
          <button
            onClick={() => setViewMode('grid')}
            className={`px-6 py-2.5 rounded-lg font-semibold transition-all duration-300 ${
              viewMode === 'grid'
                ? 'bg-blue-600 text-white shadow-lg shadow-blue-600/40'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            📷 Galería de Experiencias
          </button>
          <button
            onClick={() => setViewMode('facebook')}
            className={`px-6 py-2.5 rounded-lg font-semibold transition-all duration-300 flex items-center gap-2 ${
              viewMode === 'facebook'
                ? 'bg-blue-600 text-white shadow-lg shadow-blue-600/40'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            👍 Publicaciones de Facebook
          </button>
        </div>

        {/* Vista de Grid */}
        {viewMode === 'grid' && (
          <div className="grid grid-cols-1 md:grid-cols-4 gap-5 auto-rows-auto">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className={`group relative overflow-hidden rounded-[2rem] bg-gray-50 transition-all duration-700 hover:shadow-2xl ${exp.className}`}
              >
                {/* Imagen con efecto Zoom al hover */}
                <img
                  src={exp.image}
                  alt={exp.title}
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-1000 group-hover:scale-110"
                />
                
                {/* Overlay suave para legibilidad */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent z-10" />

                {/* ETIQUETA SUPERIOR IZQUIERDA (Glassmorphism) */}
                <div className="absolute top-0 left-0 p-5 z-30">
                  <span className="px-3 py-1 text-[10px] font-medium uppercase tracking-[0.1em] text-white/90 bg-white/10 backdrop-blur-md border border-white/20 rounded-full">
                    {exp.level}
                  </span>
                </div>

                {/* CONTENIDO INFERIOR */}
                <div className="absolute inset-0 p-6 flex flex-col justify-end text-white z-20">
                  <h3 className="text-lg md:text-xl font-bold leading-tight mb-2 group-hover:text-blue-300 transition-colors duration-300">
                    {exp.title}
                  </h3>
                  <p className="text-xs md:text-sm text-gray-300 leading-relaxed line-clamp-2 font-light">
                    {exp.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Vista de Facebook Feed */}
        {viewMode === 'facebook' && (
          <div className="animate-fadeIn">
            <FacebookFeed />
          </div>
        )}
      </div>
    </section>
  );
};

export default ExperiencesGrid;