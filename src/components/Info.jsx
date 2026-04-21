'use client'

import { Globe, Award, UserCheck, CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";

const bilingueFeatures = [
  {
    icon: Globe,
    name: "Inmersión Total",
    description: "Aprendizaje natural del inglés a través de experiencias diarias.",
    gradient: "from-orange-500 to-orange-400",
    glow: "hover:shadow-orange-200/50",
  },
  {
    icon: Award,
    name: "Programa Certificado",
    description: "Metodología internacional validada académicamente.",
    gradient: "from-emerald-500 to-emerald-400",
    glow: "hover:shadow-emerald-200/50",
  },
  {
    icon: UserCheck,
    name: "Maestros Bilingües",
    description: "Docentes certificados con enfoque global.",
    gradient: "from-blue-500 to-blue-400",
    glow: "hover:shadow-blue-200/50",
  },
  {
    icon: CheckCircle2,
    name: "Certificaciones",
    description: "Preparación para exámenes internacionales.",
    gradient: "from-slate-700 to-slate-500",
    glow: "hover:shadow-slate-300/50",
  },
];

export default function SistemaBilingueexcelencia() {
  return (
    <section className="relative bg-gradient-to-b from-white via-gray-50 to-white py-24 px-6 overflow-hidden">
      
      
      <div className="max-w-6xl mx-auto text-center">

        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <span className="text-xs font-semibold tracking-widest text-emerald-600 uppercase">
            Compromiso Global
          </span>

          <h2 className="mt-3 text-4xl sm:text-5xl font-extrabold text-gray-900">
            Sistema Bilingüe de Excelencia
          </h2>

          <p className="mt-6 text-lg text-gray-600 max-w-2xl mx-auto">
            Formamos estudiantes bilingües capaces de desenvolverse en un entorno global,
            combinando aprendizaje natural, tecnología y excelencia académica.
          </p>
        </motion.div>

        {/* CARDS */}
        <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {bilingueFeatures.map((feature, i) => {
            const Icon = feature.icon;

            return (
              <motion.div
                key={feature.name}
                initial={{ opacity: 0, y: 30, scale: 0.95 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15, duration: 0.5 }}
                className={`group relative p-6 rounded-3xl bg-white border border-gray-100 shadow-md hover:shadow-2xl ${feature.glow} transition-all duration-300 hover:-translate-y-2`}
              >
                
                {/* EFECTO BORDER GLOW */}
                <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition bg-gradient-to-r from-transparent via-white/40 to-transparent blur-xl" />

                {/* ICONO */}
                <div className={`relative z-10 w-14 h-14 mx-auto flex items-center justify-center rounded-2xl bg-gradient-to-br ${feature.gradient} text-white shadow-lg`}>
                  <Icon className="w-6 h-6" />
                </div>

                {/* TEXTO */}
                <h4 className="mt-6 text-lg font-bold text-gray-900 group-hover:text-emerald-600 transition">
                  {feature.name}
                </h4>

                <p className="mt-3 text-sm text-gray-600 leading-relaxed">
                  {feature.description}
                </p>

                {/* LÍNEA ANIMADA */}
                <div className="mt-6 h-1 w-0 group-hover:w-full bg-gradient-to-r from-emerald-500 to-blue-500 transition-all duration-300 rounded-full" />

              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}