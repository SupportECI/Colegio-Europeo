import { 
  Globe, 
  Clock, 
  Utensils, 
  UserCheck, 
  HeartPulse, 
  Palette, 
  ShieldCheck, 
  BookOpen 
} from 'lucide-react';
import { motion } from 'framer-motion';

const features = [
  { 
    name: 'Sistema Inmersivo', 
    description: 'Educación en español e inglés desde temprana edad para desarrollo completo del lenguaje.', 
    icon: <Globe className="h-6 w-6 text-blue-600" />,
    bgColor: 'bg-blue-50'
  },
  { 
    name: 'Horario Extendido', 
    description: 'Horario extendido hasta las 4:30 PM, adaptándonos a tu horario laboral.', 
    icon: <Clock className="h-6 w-6 text-indigo-600" />,
    bgColor: 'bg-indigo-50'
  },
  { 
    name: 'Comedor', 
    description: 'Servicio de alimentos balanceados y nutritivos.', 
    icon: <Utensils className="h-6 w-6 text-orange-600" />,
    bgColor: 'bg-orange-50'
  },
  { 
    name: 'Grupos reducidos', 
    description: 'Para garantizar el aprendizaje del alumno.', 
    icon: <UserCheck className="h-6 w-6 text-emerald-600" />,
    bgColor: 'bg-emerald-50'
  },
  { 
    name: 'Educación Física', 
    description: 'Programa deportivo integral para desarrollo físico y trabajo en equipo.', 
    icon: <HeartPulse className="h-6 w-6 text-red-600" />,
    bgColor: 'bg-red-50'
  },
  { 
    name: 'Artes y Danza', 
    description: 'Desarrollo de habilidades artísticas y culturales como parte de la formación.', 
    icon: <Palette className="h-6 w-6 text-purple-600" />,
    bgColor: 'bg-purple-50'
  },
  { 
    name: 'Seguro de accidentes escolares', 
    description: 'Incluido en la matricula de nuestros alumnos.', 
    icon: <ShieldCheck className="h-6 w-6 text-cyan-600" />,
    bgColor: 'bg-cyan-50'
  },
  { 
    name: 'Educación financiera y STEAM', 
    description: 'Impulsamos el desarrollo del pensamiento lógico y decisiones financieras claves para el futuro.', 
    icon: <BookOpen className="h-6 w-6 text-slate-600" />,
    bgColor: 'bg-slate-50'
  },
];

export default function PorQueElegirnos() {
  return (
    <section id='nosotros' className="bg-white py-12 px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        {/* Encabezado centrado */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-black tracking-tight text-slate-900 sm:text-4xl">
            ¿Por qué elegir Centro Educativo Europeo?
          </h2>
          <p className="mt-4 text-lg text-gray-500 max-w-2xl mx-auto">
            Ofrecemos beneficios únicos que hacen la diferencia en la educación y bienestar de tus hijos.
          </p>
        </div>

        {/* Grid de Cards ocupando todo el ancho */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature) => (
            <motion.div
              key={feature.name}
              whileHover={{ 
                y: -8, 
                boxShadow: "0 20px 25px -5px rgb(0 0 0 / 0.1)" 
              }}
              transition={{ 
                type: "spring", 
                stiffness: 400,
                damping: 17   
              }}
              className="group p-8 rounded-3xl bg-white border border-slate-100 shadow-sm cursor-default"
            >
              <div className={`mb-5 inline-flex h-12 w-12 items-center justify-center rounded-2xl ${feature.bgColor} transition-colors duration-150 group-hover:bg-opacity-100`}>
                {feature.icon}
              </div>
              <h3 className="text-lg font-bold text-slate-900 group-hover:text-blue-600 transition-colors duration-150">
                {feature.name}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-gray-500">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}