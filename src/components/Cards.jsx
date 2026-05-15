import { useState } from "react";
import { motion } from "framer-motion";
import {
  X,
  Brain,
  CheckCircle2,
  Clock,
  Users,
  Smile,
  BookOpen,
  GraduationCap,
  ArrowRight,
  MessageCircle,
  Shield,
  Star,
  Languages,
  Activity,
  Stethoscope,
} from "lucide-react";
import { AnimatePresence } from "framer-motion";
import maternalImg from '../assets/images/Maternal-1.jpg';
import preescolarImg from '../assets/images/Presscolar1.jpg';
import primariaImg from '../assets/images/Primaria1.jpg';

const posts = [
  {
    id: 1,
    title: "Maternal",
    age: "1 a 2.5 años",
    icon: <Smile className="h-5 w-5 sm:h-6 sm:w-6" />,
    theme: {
      bg: "bg-orange-50",
      text: "text-orange-600",
      button: "bg-[#0E2976]",
      modalIcon: "bg-slate-900 text-white",
    },
    quickInfo: [
      { icon: <Languages size={12} />, text: "Inglés", color: "bg-blue-50 text-blue-400" },
      { icon: <Activity size={12} />, text: "Motricidad", color: "bg-pink-50 text-pink-400" },
      { icon: <Shield size={12} />, text: "Independencia", color: "bg-emerald-50 text-emerald-400" },
      { icon: <Star size={12} />, text: "Estimulación", color: "bg-purple-50 text-purple-400" }
    ],
    description: "Desarrollo de habilidades motoras, sociales y cognitivas a través del juego y actividades académicas para esta etapa crucial.",
    benefits: ["Servicio de alimentos incluido", "Desarrollo de lenguaje", "Motricidad fina y gruesa", "Estimulación de la creatividad", "Control de esfínteres", "Socialización temprana", "Rutinas y hábitos saludables"],
    includes: ["Material didáctico manipulativo", "Clases de música y danza", "Exploración y proyectos", "Comedor con menú balanceado", "Evaluación de desarrollo"],
    stats: { schedule: "8:00 - 14:00", capacity: "Máx. 15", Stethoscope: "" },
    imageUrl: maternalImg,
  },
  {
    id: 2,
    title: "Preescolar",
    age: "2.5 a 6 años",
    icon: <BookOpen className="h-5 w-5 sm:h-6 sm:w-6" />,
    theme: {
      bg: "bg-emerald-50",
      text: "text-emerald-600",
      button: "bg-[#0E2976]",
      modalIcon: "bg-slate-900 text-white",
    },
    quickInfo: [
      { icon: <Languages size={12} />, text: "Inglés Diario", color: "bg-indigo-50 text-indigo-400" },
      { icon: <Activity size={12} />, text: "Danza", color: "bg-orange-50 text-orange-400" },
      { icon: <Brain size={12} />, text: "Estimulación", color: "bg-cyan-50 text-cyan-400" },
      { icon: <Star size={12} />, text: "Pensamiento Lógico", color: "bg-yellow-50 text-yellow-400" }
    ],
    description: "Preparación académica y social completa con enfoque bilingüe. Desarrollamos habilidades de lectoescritura y pensamiento matemático.",
    benefits: ["Preparación a programa bilingüe", "Lectoescritura en ambos idiomas", "Pensamiento lógico-matemático", "Preparación para primaria", "Habilidades artísticas y deportivas"],
    includes: ["Libros y materiales didácticos", "Clases de inglés diarias", "Educación física y danza", "Talleres de ciencia y tecnología", "Comedor supervisado", "Eventos culturales y deportivos"],
    stats: { schedule: "7:30 - 14:15", capacity: "Máx. 15" },
    imageUrl: preescolarImg,
  },
  {
    id: 3,
    title: "Primaria",
    age: "6 a 12 años",
    icon: <GraduationCap className="h-5 w-5 sm:h-6 sm:w-6" />,
    theme: {
      bg: "bg-blue-50",
      text: "text-blue-600",
      button: "bg-[#0E2976]",
      modalIcon: "bg-slate-900 text-white",
    },
    quickInfo: [
      { icon: <Languages size={12} />, text: "Bilingüe", color: "bg-rose-50 text-rose-400" },
      { icon: <Activity size={12} />, text: "Finanzas", color: "bg-violet-50 text-violet-400" },
      { icon: <Shield size={12} />, text: "Liderazgo", color: "bg-sky-50 text-sky-400" },
      { icon: <Star size={12} />, text: "Ciencias", color: "bg-green-50 text-green-400" }
    ],
    description: "Educación integral con excelencia académica bilingüe. Preparamos estudiantes con pensamiento crítico y dominio del inglés.",
    benefits: ["Pensamiento crítico y creativo", "Uso de tecnología educativa", "Liderazgo y Finanzas", "Preparación para secundaria", "Constancia de nivel de Inglés (MCER)"],
    includes: ["Materiales y libros bilingües", "50% de clases en inglés", "Plataformas Educativas", "Educación física y artes", "Matemáticas con Método Singapur"],
    stats: { schedule: "7:30 - 14:30", capacity: "Máx. 18" },
    imageUrl: primariaImg,
  },
];

export default function NivelesEducativos() {
  const [selectedPost, setSelectedPost] = useState(null);

  return (
    <section id="niveles" className="relative py-16 md:py-28 w-full bg-white overflow-hidden" id="niveles">
      <div className="absolute inset-0 w-full h-full z-0 pointer-events-none leading-[0]">
        <svg
          className="w-full h-full block" 
          viewBox="0 0 1440 1000"
          preserveAspectRatio="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Capa 1: Ola más clara y alta */}
          <path
            fill="#2F2FE4"
            fillOpacity="0.1"
            d="M0,350 C400,200 800,500 1440,300 L1440,1000 L0,1000 Z"
          />
          {/* Capa 2: Ola media */}
          <path
            fill="#162E93"
            fillOpacity="0.3"
            d="M0,450 C450,300 850,600 1440,400 L1440,1000 L0,1000 Z"
          />
          {/* Capa 3: Ola principal sólida (Frente) */}
          <path
            fill="#1A1953"
            fillOpacity="1"
            d="M0,550 C500,400 900,700 1440,500 L1440,1000 L0,1000 Z"
          />
        </svg>
      </div>

      <div className="absolute bottom-0 left-0 w-full h-32 md:h-48 bg-gradient-to-t from-white to-transparent z-0"></div>

      <div className="mx-auto max-w-7xl relative z-10 px-4 sm:px-6 lg:px-8">
        <div className="mb-8 text-center lg:text-left">
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-gray-900 lg:text-4xl">
            Niveles Educativos
          </h2>
          <p className="mt-2 text-sm sm:text-base text-gray-500">
            Programas diseñados para cada etapa del crecimiento.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {posts.map((post) => (
            <motion.article
              key={post.id}
              whileHover={{ y: -5 }}
              transition={{ type: "spring", stiffness: 400, damping: 25 }}
              className="flex flex-col bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden"
            >
              <div className="relative h-40 sm:h-48 overflow-hidden">
                <img src={post.imageUrl} alt={post.title} className="h-full w-full object-cover" />
                <div className={`absolute top-3 left-3 rounded-lg px-2.5 py-1 text-[10px] font-bold ${post.theme.bg} ${post.theme.text} uppercase tracking-wider bg-white/90 backdrop-blur-sm shadow-sm`}>
                  {post.age}
                </div>
              </div>

              <div className="flex flex-1 flex-col p-5 sm:p-6">
                <div className="flex items-center gap-3 mb-3">
                  <div className={`flex h-9 w-9 sm:h-11 sm:w-11 items-center justify-center rounded-xl ${post.theme.bg} ${post.theme.text}`}>
                    {post.icon}
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-gray-900">{post.title}</h3>
                </div>

                <p className="text-sm leading-relaxed text-gray-600 mb-5">
                  {post.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {post.quickInfo.map((info, idx) => (
                    <span key={idx} className={`flex items-center gap-1 px-2.5 py-1 rounded-full text-[10px] font-bold ${info.color}`}>
                      {info.icon}
                      {info.text}
                    </span>
                  ))}
                </div>

                <div className="mt-auto">
                  <button
                    onClick={() => setSelectedPost(post)}
                    className={`flex w-full items-center justify-center gap-2 rounded-xl px-4 py-3.5 text-sm font-bold text-white transition-all active:scale-95 ${post.theme.button}`}
                  >
                    Detalles del nivel
                    <ArrowRight className="h-4 w-4" />
                  </button>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selectedPost && (
          <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center p-0 sm:p-4">
            <motion.div
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
              onClick={() => setSelectedPost(null)}
              className="absolute inset-0 bg-slate-900/70 backdrop-blur-sm"
            />
            <motion.div
              initial={{ opacity: 0, y: 100 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 100 }}
              className="relative w-full max-w-xl max-h-[92vh] overflow-y-auto rounded-t-4xl sm:rounded-3xl bg-white p-6 sm:p-8 shadow-2xl no-scrollbar"
            >
              {/* Botón cerrar más grande para pulgares en móvil */}
              <button onClick={() => setSelectedPost(null)} className="absolute right-4 top-4 p-2 text-gray-400 hover:text-gray-600 focus:outline-none">
                <X size={24} />
              </button>

              <div className="flex items-center gap-4 mb-6 pr-8">
                <div className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl ${selectedPost.theme.modalIcon}`}>
                  {selectedPost.icon}
                </div>
                <div>
                  <h3 className="text-xl sm:text-2xl font-bold text-slate-900">{selectedPost.title}</h3>
                  <p className="text-xs font-bold text-red-600 uppercase tracking-tighter">{selectedPost.age}</p>
                </div>
              </div>

              <p className="text-gray-600 leading-relaxed mb-6 text-sm sm:text-base">
                {selectedPost.description}
              </p>

              <div className="space-y-6">
                <div>
                  <h4 className="text-base font-bold text-slate-900 mb-3 border-b border-gray-100 pb-1">Beneficios del nivel</h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-2">
                    {selectedPost.benefits.map((item) => (
                      <div key={item} className="flex items-start gap-2">
                        <CheckCircle2 className="h-4 w-4 text-emerald-500 shrink-0 mt-0.5" />
                        <span className="text-xs sm:text-sm text-gray-700">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="text-base font-bold text-slate-900 mb-3 border-b border-gray-100 pb-1">¿Qué incluye?</h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-2">
                    {selectedPost.includes.map((item) => (
                      <div key={item} className="flex items-start gap-2">
                        <span className="text-red-600 font-bold text-sm">✓</span>
                        <span className="text-xs sm:text-sm text-gray-700">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Stats en grid ajustable */}
              <div className={`mt-8 grid gap-2 sm:gap-4 ${Object.keys(selectedPost.stats).length === 2 ? 'grid-cols-2' : 'grid-cols-3'}`}>
                <div className="rounded-xl bg-gray-50 p-2 sm:p-3 text-center border border-gray-100">
                  <Clock className="h-4 w-4 mx-auto mb-1 text-gray-400" />
                  <p className="text-[8px] sm:text-[10px] font-bold text-gray-500 uppercase">Horario</p>
                  <p className="text-[10px] sm:text-xs font-bold text-slate-800">{selectedPost.stats.schedule}</p>
                </div>

                <div className="rounded-xl bg-gray-50 p-2 sm:p-3 text-center border border-gray-100">
                  <Users className="h-4 w-4 mx-auto mb-1 text-gray-400" />
                  <p className="text-[8px] sm:text-[10px] font-bold text-gray-500 uppercase">Cupo</p>
                  <p className="text-[10px] sm:text-xs font-bold text-slate-800">{selectedPost.stats.capacity}</p>
                </div>

                {/* Solo se muestra si existe "Stethoscope" en los stats (Ej. Maternal) */}
                {selectedPost.stats.Stethoscope !== undefined && (
                  <div className="rounded-xl gap-4 bg-gray-50 p-2 sm:p-3 text-center border border-gray-100">
                    <Stethoscope className="h-4 w-4 mx-auto mb-1 text-gray-400 mt-2" />
                    <p className="text-[8px] sm:text-[10px] font-bold text-gray-500 uppercase">Enfermera</p>
                    {/* Si mandaste "", mostrará "Sí" para que no quede el texto vacío */}
                    <p className="text-[10px] sm:text-xs font-bold text-slate-800">{selectedPost.stats.Stethoscope || ""}</p>
                  </div>
                )}

                {/* Solo se muestra si existe "cycle" en los stats (Ej. Primaria) */}
                {selectedPost.stats.cycle !== undefined && (
                  <div className="rounded-xl gap-4 bg-gray-50 p-2 sm:p-3 text-center border border-gray-100">
                    <GraduationCap className="h-4 w-4 mx-auto mb-1 text-gray-400" />
                    <p className="text-[8px] sm:text-[10px] font-bold text-gray-500 uppercase">Ciclo</p>
                    <p className="text-[10px] sm:text-xs font-bold text-slate-800">{selectedPost.stats.cycle}</p>
                  </div>
                )}
              </div>

              <div className="mt-8 mb-2 sm:mb-0">
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href={`https://wa.me/529616066550?text=${encodeURIComponent(`Hola, vi su página web, quiero más información de ${selectedPost.title.toLowerCase()}.`)}`}
                  className="flex w-full items-center justify-center gap-2 rounded-2xl bg-[#c51c1c] py-4 text-sm sm:text-base text-white font-bold shadow-lg transition-transform active:scale-95 hover:bg-red-700"
                >
                  <MessageCircle className="h-5 w-5" />
                  Más información
                </a>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}