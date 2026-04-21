import { useState } from 'react';
import { ChevronRight, X, ChevronLeft } from 'lucide-react';

const Galeria = () => {
  const [categoriaActiva, setCategoriaActiva] = useState('todos');
  const [imagenSeleccionada, setImagenSeleccionada] = useState(null);
  const [indiceActual, setIndiceActual] = useState(0);

  const categorias = [
    { id: 'todos', nombre: 'Todos' },
    { id: 'maternal', nombre: 'Maternal' },
    { id: 'preescolar', nombre: 'Preescolar' },
    { id: 'primaria', nombre: 'Primaria' },
  ];

  const imagenesGaleria = [
    // MATERNAL
    {
      id: 1,
      categoria: 'maternal',
      titulo: 'Juego y Aprendizaje',
      descripcion: 'Desarrollo a través del juego cooperativo',
      imagen: 'https://images.unsplash.com/photo-1516534775068-bb57e39c2d0b?w=500&h=500&fit=crop',
    },
    {
      id: 2,
      categoria: 'maternal',
      titulo: 'Actividades Creativas',
      descripcion: 'Expresión artística en el aula',
      imagen: 'https://images.unsplash.com/photo-1516534775068-bb57e39c2d0b?w=500&h=500&fit=crop',
    },
    {
      id: 3,
      categoria: 'maternal',
      titulo: 'Motricidad Fina',
      descripcion: 'Desarrollo de habilidades motoras',
      imagen: 'https://images.unsplash.com/photo-1516534775068-bb57e39c2d0b?w=500&h=500&fit=crop',
    },

    // PREESCOLAR
    {
      id: 7,
      categoria: 'preescolar',
      titulo: 'Taller de Pintura',
      descripcion: 'Creatividad y expresión artística',
      imagen: 'https://images.unsplash.com/photo-1513364776144-60967b0f800f?w=500&h=500&fit=crop',
    },
    {
      id: 8,
      categoria: 'preescolar',
      titulo: 'Lectura y Alfabetización',
      descripcion: 'Iniciación a la lectura y escritura',
      imagen: 'https://images.unsplash.com/photo-1515488042361-ee00e0ddd4e4?w=500&h=500&fit=crop',
    },
    {
      id: 9,
      categoria: 'preescolar',
      titulo: 'Juegos Educativos',
      descripcion: 'Aprendizaje a través del juego',
      imagen: 'https://images.unsplash.com/photo-1503454537688-e0fa066ffd20?w=500&h=500&fit=crop',
    },

    // PRIMARIA
    {
      id: 13,
      categoria: 'primaria',
      titulo: 'Ciencias Naturales',
      descripcion: 'Experimentos científicos en clase',
      imagen: 'https://images.unsplash.com/photo-1532012197267-da84d127e765?w=500&h=500&fit=crop',
    },
    {
      id: 14,
      categoria: 'primaria',
      titulo: 'Educación Física',
      descripcion: 'Movimiento, deporte y salud',
      imagen: 'https://images.unsplash.com/photo-1516534775068-bb57e39c2d0b?w=500&h=500&fit=crop',
    },
    {
      id: 15,
      categoria: 'primaria',
      titulo: 'Proyecto de Investigación',
      descripcion: 'Búsqueda del conocimiento',
      imagen: 'https://images.unsplash.com/photo-1503454537688-e0fa066ffd20?w=500&h=500&fit=crop',
    },
  ];

  const imagenesFiltradas = categoriaActiva === 'todos'
    ? imagenesGaleria
    : imagenesGaleria.filter(img => img.categoria === categoriaActiva);

  const abrirGaleria = (imagen) => {
    const indice = imagenesFiltradas.findIndex(img => img.id === imagen.id);
    setImagenSeleccionada(imagen);
    setIndiceActual(indice);
  };

  const irSiguiente = () => {
    const nuevoIndice = (indiceActual + 1) % imagenesFiltradas.length;
    setIndiceActual(nuevoIndice);
    setImagenSeleccionada(imagenesFiltradas[nuevoIndice]);
  };

  const irAnterior = () => {
    const nuevoIndice = indiceActual === 0 ? imagenesFiltradas.length - 1 : indiceActual - 1;
    setIndiceActual(nuevoIndice);
    setImagenSeleccionada(imagenesFiltradas[nuevoIndice]);
  };

  const cerrarGaleria = () => {
    setImagenSeleccionada(null);
  };

  return (
    <section id="galeria" className="py-20 px-4 bg-gradient-to-b from-white to-gray-50 min-h-screen">
      <div className="max-w-7xl mx-auto">
        {/* Encabezado */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-[#0E2976] to-[#1a3a7a] bg-clip-text text-transparent">
            Galería de Momentos
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Descubre los mejores momentos de nuestros estudiantes en el Centro Educativo Europeo
          </p>
          <div className="h-1 w-20 bg-gradient-to-r from-[#0E2976] to-[#1a3a7a] rounded-full mx-auto mt-4"></div>
        </div>

        {/* Filtro de Categorías */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categorias.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setCategoriaActiva(cat.id)}
              className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 flex items-center gap-2 ${
                categoriaActiva === cat.id
                  ? 'bg-gradient-to-r from-[#0E2976] to-[#1a3a7a] text-white shadow-lg scale-105'
                  : 'bg-white text-gray-700 border-2 border-gray-200 hover:border-[#0E2976] hover:text-[#0E2976]'
              }`}
            >
              {cat.nombre}
              {categoriaActiva === cat.id && <ChevronRight className="h-4 w-4" />}
            </button>
          ))}
        </div>

        {/* Grid de Imágenes */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {imagenesFiltradas.map((imagen, index) => (
            <div
              key={imagen.id}
              onClick={() => abrirGaleria(imagen)}
              className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 h-64 cursor-pointer transform hover:scale-105"
              style={{
                animationDelay: `${index * 0.1}s`,
                animation: `fadeInUp 0.6s ease-out forwards`,
              }}
            >
              {/* Imagen */}
              <img
                src={imagen.imagen}
                alt={imagen.titulo}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />

              {/* Overlay oscuro */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

              {/* Contenido del card */}
              <div className="absolute inset-0 flex flex-col justify-end p-5 text-white translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                <h3 className="text-lg font-bold mb-1">{imagen.titulo}</h3>
                <p className="text-sm text-gray-200">{imagen.descripcion}</p>
              </div>

              {/* Badge de categoría */}
              <div className="absolute top-4 right-4 bg-[#0E2976]/80 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-semibold text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                {imagen.categoria.charAt(0).toUpperCase() + imagen.categoria.slice(1)}
              </div>

              {/* Icono de zoom */}
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="bg-white/30 backdrop-blur-sm rounded-full p-3">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM13 10H7" />
                  </svg>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Mensaje si no hay imágenes */}
        {imagenesFiltradas.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">No hay imágenes en esta categoría aún</p>
          </div>
        )}
      </div>

      {/* Modal Lightbox */}
      {imagenSeleccionada && (
        <div className="fixed inset-0 z-50 bg-black/95 backdrop-blur-sm flex items-center justify-center p-4">
          {/* Botón Cerrar */}
          <button
            onClick={cerrarGaleria}
            className="absolute top-4 right-4 bg-white/20 hover:bg-white/30 rounded-full p-3 transition-all duration-300 z-50"
          >
            <X className="h-6 w-6 text-white" />
          </button>

          {/* Contenedor Principal */}
          <div className="flex items-center gap-4 w-full max-w-4xl">
            {/* Botón Anterior */}
            <button
              onClick={irAnterior}
              className="absolute left-4 bg-white/20 hover:bg-white/30 rounded-full p-3 transition-all duration-300 hidden md:flex items-center justify-center"
            >
              <ChevronLeft className="h-6 w-6 text-white" />
            </button>

            {/* Imagen Principal */}
            <div className="w-full flex flex-col items-center">
              <img
                src={imagenSeleccionada.imagen}
                alt={imagenSeleccionada.titulo}
                className="w-full max-h-[70vh] object-contain rounded-lg"
              />

              {/* Información de la imagen */}
              <div className="mt-6 text-center text-white w-full px-4">
                <h3 className="text-2xl font-bold mb-2">{imagenSeleccionada.titulo}</h3>
                <p className="text-gray-300 mb-4">{imagenSeleccionada.descripcion}</p>
                <div className="flex items-center justify-center gap-3">
                  <span className="bg-[#0E2976] px-4 py-1.5 rounded-full text-sm font-semibold">
                    {imagenSeleccionada.categoria.charAt(0).toUpperCase() + imagenSeleccionada.categoria.slice(1)}
                  </span>
                  <span className="text-gray-400 text-sm">
                    {indiceActual + 1} de {imagenesFiltradas.length}
                  </span>
                </div>
              </div>

              {/* Navegación Mobile */}
              <div className="md:hidden flex gap-4 mt-6 w-full justify-center">
                <button
                  onClick={irAnterior}
                  className="bg-white/20 hover:bg-white/30 rounded-full p-3 transition-all duration-300"
                >
                  <ChevronLeft className="h-5 w-5 text-white" />
                </button>
                <button
                  onClick={irSiguiente}
                  className="bg-white/20 hover:bg-white/30 rounded-full p-3 transition-all duration-300"
                >
                  <ChevronRight className="h-5 w-5 text-white" />
                </button>
              </div>
            </div>

            {/* Botón Siguiente */}
            <button
              onClick={irSiguiente}
              className="absolute right-4 bg-white/20 hover:bg-white/30 rounded-full p-3 transition-all duration-300 hidden md:flex items-center justify-center"
            >
              <ChevronRight className="h-6 w-6 text-white" />
            </button>
          </div>

          {/* Indicador de progreso */}
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-white/20 backdrop-blur-sm rounded-full px-4 py-2">
            <div className="w-64 h-1 bg-white/20 rounded-full overflow-hidden">
              <div
                className="h-full bg-white transition-all duration-300"
                style={{ width: `${((indiceActual + 1) / imagenesFiltradas.length) * 100}%` }}
              ></div>
            </div>
          </div>
        </div>
      )}

      <style>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </section>
  );
};

export default Galeria;
