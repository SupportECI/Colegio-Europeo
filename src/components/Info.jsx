import { Globe, Award, UserCheck, CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";

const bilingueFeatures = [
  {
    icon: <Globe className="h-6 w-6" />,
    name: "Inmersión Total",
    description: "Aprendizaje natural del Inglés a través de actividades diarias y lúdicas.",
    color: "text-orange-500", // Color temático Maternal
    bgColor: "bg-orange-50",
  },
  {
    icon: <Award className="h-6 w-6" />,
    name: "Programa Certificado",
    description: "Metodología validada con materiales de nivel internacional.",
    color: "text-emerald-500", // Color temático Preescolar
    bgColor: "bg-emerald-50",
  },
  {
    icon: <UserCheck className="h-6 w-6" />,
    name: "Maestros Bilingües",
    description: "Personal altamente calificado y certificado en educación bilingüe.",
    color: "text-blue-500", // Color temático Primaria
    bgColor: "bg-blue-50",
  },
  {
    icon: <CheckCircle2 className="h-6 w-6" />,
    name: "Certificaciones",
    description: "Preparación para exámenes internacionales de inglés.",
    color: "text-slate-600", // Color neutro
    bgColor: "bg-slate-100",
  },
];

export default function SistemaBilingueexcelencia() {
  return (
    <section id="excelencia-bilingue" className="bg-white py-16 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 items-center gap-x-12 gap-y-12 lg:grid-cols-2">
          
          {/* Columna Izquierda: Texto y Características */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="flex flex-col h-full lg:justify-center"
          >
            <span className="text-xs font-bold uppercase tracking-widest text-emerald-600 mb-2">Compromiso Global</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-gray-900 leading-tight">
              Sistema Bilingüe de Excelencia
            </h2>
            <p className="mt-5 text-base sm:text-lg leading-relaxed text-gray-600 max-w-xl">
              Nuestro programa bilingüe está diseñado para que tus hijos dominen tanto el español como el inglés de forma natural y divertida, preparándolos para un mundo globalizado.
            </p>

            {/* Grid de Características Moderno */}
            <dl className="mt-12 grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-8">
              {bilingueFeatures.map((feature, index) => (
                <motion.div
                  key={feature.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.15, duration: 0.5 }}
                  className="flex gap-4 items-start bg-gray-50/50 p-4 rounded-2xl border border-gray-100/50"
                >
                  {/* Icono Redondeado con fondo de color suave */}
                  <div className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl ${feature.bgColor} ${feature.color} shadow-inner border border-white`}>
                    {feature.icon}
                  </div>
                  <div>
                    <dt className="text-base font-bold text-gray-950">
                      {feature.name}
                    </dt>
                    <dd className="mt-1.5 text-sm text-gray-600 leading-relaxed">
                      {feature.description}
                    </dd>
                  </div>
                </motion.div>
              ))}
            </dl>
          </motion.div>

          {/* Columna Derecha: Imagen y Badge */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative lg:pl-6 h-full flex items-center"
          >
            {/* Contenedor de Imagen Responsivo */}
            <div className="relative w-full aspect-[4/3] lg:aspect-auto overflow-hidden rounded-[2.5rem] bg-gray-100 shadow-2xl shadow-gray-100 border-4 border-white transition-all hover:border-emerald-100">
              <img
                src="https://images.unsplash.com/photo-1516627145497-ae6968895b74?q=80&w=1170&auto=format&fit=crop" 
                alt="Niños interactuando en el salón de clases bilingüe del Centro Educativo Europeo"
                className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
              />
              
              {/* Overlay suave para mejorar contraste del badge si es necesario */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 hover:opacity-100 transition-opacity"/>
            </div>

            {/* Badge "100%" Estilo Imagen (Exacto a la referencia) */}
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.9, type: "spring", stiffness: 300, damping: 15 }}
              className="absolute -bottom-6 left-6 sm:left-10 lg:-left-6 flex w-auto max-w-[280px] items-center gap-4 rounded-3xl bg-[#c51c1c] p-6 shadow-2xl border-4 border-white"
            >
              <div className="text-5xl font-extrabold text-white leading-none">100%</div>
              <p className="text-[11px] font-bold leading-tight text-red-50">
                Al inglés desde<br />el primer día
              </p>
            </motion.div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}