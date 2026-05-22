import { Brain, Heart, Users, Trophy } from "lucide-react";
import { motion } from "framer-motion";
import desaCognitivo from '../assets/images/Desarrollo_cognitivo.webp';
import desaEmocional from '../assets/images/Desarrollo_emocional.webp';
import desaSocial from '../assets/images/Desarrollo_social.webp';
import desaFisico from '../assets/images/Desarrollo_fisico.webp';

const pilares = [
  {
    id: 1,
    name: "Desarrollo Cognitivo",
    description: "Estimulación de habilidades de pensamiento crítico, creatividad y resolución de problemas.",
    icon: <Brain className="h-6 w-6" />,
    theme: {
      bg: "bg-blue-50",
      text: "text-blue-600",
    },
    imageUrl: desaCognitivo, 
  },
  {
    id: 2,
    name: "Desarrollo Emocional",
    description: "Educación socioemocional para formar niños seguros, empáticos y resilientes.",
    icon: <Heart className="h-6 w-6" />,
    theme: {
      bg: "bg-orange-50",
      text: "text-orange-600",
    },
    imageUrl: desaEmocional, 
  },
  {
    id: 3,
    name: "Desarrollo Social",
    description: "Fomento de valores, trabajo en equipo y habilidades de comunicación efectiva.",
    icon: <Users className="h-6 w-6" />,
    theme: {
      bg: "bg-emerald-50",
      text: "text-emerald-600",
    },
    imageUrl: desaSocial, 
  },
  {
    id: 4,
    name: "Desarrollo Físico",
    description: "Actividades deportivas, educación física y talleres de artes, música y danza.",
    icon: <Trophy className="h-6 w-6" />,
    theme: {
      bg: "bg-purple-50",
      text: "text-purple-600",
    },
    imageUrl: desaFisico, 
  },
];

export default function FormacionIntegral() {
  return (
    <div id="formacion-integral" className="bg-white py-12 px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        {/* Encabezado del Apartado */}
        <div className="mb-10 text-center">
          <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            Formación Integral para el Futuro
          </h2>
          <p className="mt-3 text-lg text-gray-500 max-w-2xl mx-auto">
            Educamos a niños desarrollando todas sus capacidades y potencial.
          </p>
        </div>

        {/* Grid de Cards de Pilares (2x2 en escritorio) */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
          {pilares.map((pilar, index) => (
            <motion.article
              key={pilar.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, type: "spring", stiffness: 300, damping: 20 }}
              className="relative flex flex-col sm:flex-row bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden hover:shadow-xl transition-all duration-300 pointer-events-auto"
            >
              {/* Mitad Izquierda: Imagen */}
              <div className="relative h-80 sm:h-auto sm:w-1/2 overflow-hidden shrink-0">
                <img 
                  src={pilar.imageUrl} 
                  alt={pilar.name} 
                  className="h-full w-full object-cover transition-transform duration-500 hover:scale-105" 
                />
              </div>

              {/* Mitad Derecha: Icono y Texto */}
              <div className="flex flex-1 flex-col p-6 sm:p-8">
                {/* Icono Coloreado (Mismo diseño de los Niveles) */}
                <div className={`mb-4 flex h-11 w-11 shrink-0 items-center justify-center rounded-xl ${pilar.theme.bg} ${pilar.theme.text} shadow-inner`}>
                  {pilar.icon}
                </div>

                {/* Título */}
                <h3 className="text-2xl font-bold text-gray-950 leading-tight">
                  {pilar.name}
                </h3>

                {/* Descripción (Sin cortes) */}
                <p className="mt-3 text-sm leading-relaxed text-gray-600">
                  {pilar.description}
                </p>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </div>
  );
}