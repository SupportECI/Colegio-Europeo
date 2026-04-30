import { useState, useEffect } from 'react';
import { ChevronRight, X, ChevronLeft } from 'lucide-react';

const Galeria = () => {
  const [categoriaActiva, setCategoriaActiva] = useState('todos');
  const [imagenSeleccionada, setImagenSeleccionada] = useState(null);
  const [indiceActual, setIndiceActual] = useState(0);

  useEffect(() => {
    if (imagenSeleccionada) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => { document.body.style.overflow = 'unset'; };
  }, [imagenSeleccionada]);

  const categorias = [
    { id: 'todos', nombre: 'Todos' },
    { id: 'maternal', nombre: 'Maternal' },
    { id: 'preescolar', nombre: 'Preescolar' },
    { id: 'primaria', nombre: 'Primaria' },
  ];

  // Patrón optimizado para 9 imágenes sin dejar huecos (Basado en 4 columnas)
  const gridPattern = [
    "md:col-span-2 md:row-span-2", // 1. Grande
    "md:col-span-1 md:row-span-1", // 2. Pequeño
    "md:col-span-1 md:row-span-1", // 3. Pequeño
    "md:col-span-2 md:row-span-1", // 4. Ancho 
    "md:col-span-1 md:row-span-2", // 5. Pequeño
    "md:col-span-1 md:row-span-1", // 6. Pequeño
    "md:col-span-2 md:row-span-2", // 7. Alto
    "md:col-span-1 md:row-span-1", // 8. Pequeño
    "md:col-span-2 md:row-span-1", // 9. FINAL
  ];

  const imagenesGaleria = [
    // MATERNAL (5
    { id: 1, categoria: 'maternal', titulo: 'titulo 1', descripcion: 'Descubriendo texturas.', imagen: '' },
    { id: 2, categoria: 'maternal', titulo: 'titulo 2', descripcion: 'Motricidad gruesa.', imagen: '' },
    { id: 3, categoria: 'maternal', titulo: 'titulo 3', descripcion: 'Imaginación temprana.', imagen: '' },
    { id: 4, categoria: 'maternal', titulo: 'titulo 4', descripcion: 'Socialización.', imagen: '' },
    { id: 5, categoria: 'maternal', titulo: 'titulo 5', descripcion: 'Ritmo y oído.', imagen: '' },

    // PREESCOLAR (5)
    { id: 6, categoria: 'preescolar', titulo: 'titulo 6', descripcion: 'Cocina divertida.', imagen: '' },
    { id: 7, categoria: 'preescolar', titulo: 'titulo 7', descripcion: 'Curiosidad.', imagen: '' },
    { id: 8, categoria: 'preescolar', titulo: 'titulo 8', descripcion: 'Naturaleza.', imagen: '' },
    { id: 9, categoria: 'preescolar', titulo: 'titulo 9', descripcion: 'Folclore.', imagen: '' },
    { id: 10, categoria: 'preescolar', titulo: 'titulo 10', descripcion: 'Bilingüismo.', imagen: '' },

    // PRIMARIA (5)
    { id: 11, categoria: 'primaria', titulo: 'titulo 11', descripcion: 'Innovación.', imagen: '' },
    { id: 12, categoria: 'primaria', titulo: 'titulo 12', descripcion: 'Concentración.', imagen: '' },
    { id: 13, categoria: 'primaria', titulo: 'titulo 13', descripcion: 'Lectura.', imagen: '' },
    { id: 14, categoria: 'primaria', titulo: 'titulo 14', descripcion: 'Identidad.', imagen: '' },
    { id: 15, categoria: 'primaria', titulo: 'titulo 15', descripcion: 'Trabajo en equipo.', imagen: '' }
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

  return (
    <section id="galeria" className="py-8 md:py-16 px-4 bg-white scroll-mt-20">
      <div className="max-w-7xl mx-auto">
        {/* Cabecera optimizada y compacta */}
        <header className="mb-6 text-left border-l-4 border-blue-600 pl-6">
          <h2 className="text-2xl md:text-4xl font-extrabold text-gray-900 tracking-tight uppercase">
            Galería <span className="text-blue-600 font-light italic">Educativa</span>
          </h2>
          <p className="mt-1 text-gray-500 max-w-xl text-sm md:text-base leading-snug">
            Descubre los momentos especiales que forman parte de nuestra comunidad educativa.
          </p>
        </header>

        {/* Filtro de Categorías - Pequeño y Discreto */}
        <div className="mb-8 flex flex-wrap gap-2">
          {categorias.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setCategoriaActiva(cat.id)}
              className={`px-3 md:px-4 py-1.5 md:py-2 rounded-full text-[11px] md:text-xs font-semibold uppercase tracking-wide transition-all duration-300 ${
                categoriaActiva === cat.id
                  ? 'bg-blue-600 text-white shadow-md' 
                  : 'bg-gray-200 text-gray-600 hover:bg-gray-300'
              }`}
            >
              {cat.nombre}
            </button>
          ))}
        </div>

        {/* Bento Grid 100% Responsive */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-5 auto-rows-[180px] md:auto-rows-[220px]">
          {imagenesFiltradas.map((imagen, index) => (
            <div
              key={imagen.id}
              onClick={() => abrirGaleria(imagen)}
              className={`group relative overflow-hidden rounded-[2rem] bg-gray-50 cursor-pointer transition-all duration-700 hover:shadow-2xl ${gridPattern[index % 9]}`}
            >
              {/* Imagen con efecto Zoom al hover */}
              <img
                src={imagen.imagen}
                alt={imagen.titulo}
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-1000 group-hover:scale-110"
              />
              
              {/* Overlay suave para legibilidad */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent z-10" />

              {/* ETIQUETA SUPERIOR IZQUIERDA (Glassmorphism) */}
              <div className="absolute top-0 left-0 p-5 z-30">
                <span className="px-3 py-1 text-[10px] font-medium uppercase tracking-[0.1em] text-white/90 bg-white/10 backdrop-blur-md border border-white/20 rounded-full">
                  {imagen.categoria.charAt(0).toUpperCase() + imagen.categoria.slice(1)}
                </span>
              </div>

              {/* CONTENIDO INFERIOR */}
              <div className="absolute inset-0 p-6 flex flex-col justify-end text-white z-20">
                <h3 className="text-lg md:text-xl font-bold leading-tight mb-2 group-hover:text-blue-300 transition-colors duration-300">
                  {imagen.titulo}
                </h3>
                <p className="text-xs md:text-sm text-gray-300 leading-relaxed line-clamp-2 font-light">
                  {imagen.descripcion}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      {imagenSeleccionada && (
        <div className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-md flex items-center justify-center p-4">
          <button onClick={() => setImagenSeleccionada(null)} className="absolute top-6 right-6 text-white/50 hover:text-white transition-all hover:rotate-90">
            <X size={40} strokeWidth={1} />
          </button>
          
          <button onClick={irAnterior} className="absolute left-4 text-white/20 hover:text-white transition-colors">
            <ChevronLeft size={50} strokeWidth={1} />
          </button>

          <div className="max-w-4xl w-full flex flex-col items-center">
            <img src={imagenSeleccionada.imagen} className="max-h-[75vh] w-auto rounded-3xl shadow-2xl object-contain" />
            <div className="mt-8 text-center text-white">
              <h3 className="text-3xl font-bold">{imagenSeleccionada.titulo}</h3>
              <p className="text-gray-400 mt-2 font-light italic">{imagenSeleccionada.descripcion}</p>
            </div>
          </div>

          <button onClick={irSiguiente} className="absolute right-4 text-white/20 hover:text-white transition-colors">
            <ChevronRight size={50} strokeWidth={1} />
          </button>
        </div>
      )}
    </section>
  );
};

export default Galeria;