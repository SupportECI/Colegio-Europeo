import { GlobeAltIcon, EyeIcon, HeartIcon } from '@heroicons/react/24/outline';
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import PropTypes from 'prop-types';

const AboutUs = () => {
  const sections = [
    {
      title: 'Misión',
      description: 'Somos una comunidad educativa de aprendizaje constante, con base en principios de valores, calidad y globalización, cuyo objetivo es la formación integral de ciudadanos creativos y con principios, los cuales participan activamente comprometidos para que en el futuro puedan cambiar al mundo en beneficio del bien común.',
      icon: <GlobeAltIcon className="h-6 w-6 text-[#c32945]" />,
    },
    {
      title: 'Visión',
      description: 'Consolidarnos como una institución educativa reconocida a contribuir positivamente como ciudadanos globales en nuestra comunidad local, nacional e internacional. Considerando la globalización del saber y el hacer, el dominio de las tecnologías y el servicio a la comunidad. Encaminando a los estudiantes la capacidad de producir ideas, saberes y acciones que contribuyan al mejoramiento.',
      icon: <EyeIcon className="h-6 w-6 text-[#c32945]" />,
    },
    {
      title: 'Valores',
      description: ["Responsabilidad", "Honestidad", "Seguridad", "Compromiso", "Profesionalismo", "Lealtad", "Trabajo en equipo"],
      icon: <HeartIcon className="h-6 w-6 text-[#c32945]" />,
    },
  ];

  return (
    <section id="nosotros" className="relative py-16 md:py-28 w-full bg-white overflow-hidden" >
      
      {/* ========================================================= */}
      {/* FONDO DE OLAS EN CAPAS (Ocupa 100% de alto y ancho)       */}
      {/* ========================================================= */}
      <div className="absolute inset-0 w-full h-full z-0 pointer-events-none leading-[0]">
        <svg
          className="w-full h-full block" 
          viewBox="0 0 1440 1000"
          preserveAspectRatio="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Capa 1: Ola más clara y alta */}
          <path
            fill="#c32945"
            fillOpacity="0.1"
            d="M0,350 C400,200 800,500 1440,300 L1440,1000 L0,1000 Z"
          />
          {/* Capa 2: Ola media */}
          <path
            fill="#c32945"
            fillOpacity="0.3"
            d="M0,450 C450,300 850,600 1440,400 L1440,1000 L0,1000 Z"
          />
          {/* Capa 3: Ola principal sólida (Frente) */}
          <path
            fill="#c32945"
            fillOpacity="1"
            d="M0,550 C500,400 900,700 1440,500 L1440,1000 L0,1000 Z"
          />
        </svg>
      </div>

      <div className="absolute bottom-0 left-0 w-full h-32 md:h-48 bg-gradient-to-t from-white to-transparent z-0"></div>


      <div className="relative z-10 max-w-6xl mx-8 md:mx-10 lg:mx-20 xl:mx-auto">
        
        <div className="mb-12 space-y-5 md:mb-20 md:text-center flex flex-col items-center">
          <div className="inline-block px-5 py-1.5 text-sm font-bold text-[#c32945] rounded-full bg-gray-100/80 backdrop-blur-sm cursor-default shadow-sm">
            ¿Quiénes somos?
          </div>
          
          <h1 className="text-3xl md:text-5xl font-black text-gray-900 md:text-center tracking-tight">
            Centro Educativo Europeo
          </h1>
          <p className="text-base md:text-lg text-gray-600 md:text-center max-w-3xl leading-relaxed">
            Es una empresa fundada y establecida en la ciudad de Tuxtla Gutiérrez, Chiapas para atender las necesidades crecientes de los padres en la educación de sus hijos en el área maternal, preescolar y primaria con más de 10 años en el área educativa.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8 items-stretch">
          {sections.map((section, index) => (
            <AnimatedCard
              key={index}
              title={section.title}
              description={section.description}
              icon={section.icon}
              delay={index * 0.2}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

const AnimatedCard = ({ title, description, icon, delay }) => {
  const { ref, inView } = useInView({ threshold: 0.2, triggerOnce: true });

  return (
    <motion.div
      ref={ref} 
      className="text-sm leading-6 h-full"
      initial={{ opacity: 0, y: 50 }} 
      animate={inView ? { opacity: 1, y: 0 } : {}} 
      transition={{ delay, duration: 0.6, ease: 'easeOut' }}
    >
      <div className="relative group h-full">
        <div className="absolute transition rounded-2xl opacity-0 -inset-1 bg-black/10 blur-xl duration-300 group-hover:opacity-100"></div>
        
        <div className="relative flex flex-col h-full p-8 space-y-6 leading-none rounded-2xl bg-white shadow-xl border border-gray-100">
          
          <div className="flex flex-col items-center space-y-4">
            <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[#c32945]/10 border border-[#c32945]/20">
              {icon}
            </div>
            <div>
              <h3 className="text-xl font-bold text-gray-900">{title}</h3>
            </div>
          </div>
          
          <div className="flex-grow flex items-center justify-center">
            {Array.isArray(description) ? (
              <ul className="leading-relaxed text-gray-600 text-[15px] space-y-3 w-full px-2">
                {description.map((item, idx) => (
                  <li key={idx} className="flex items-center gap-3">
                    <span className="text-[#c32945] font-bold text-lg">✓</span>
                    {item}
                  </li>
                ))}
              </ul>
            ) : (
              <p className="leading-relaxed text-gray-600 text-[15px] text-center">{description}</p>
            )}
          </div>

        </div>
      </div>
    </motion.div>
  );
};

AnimatedCard.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.arrayOf(PropTypes.string)
  ]).isRequired, 
  icon: PropTypes.element.isRequired,
  delay: PropTypes.number.isRequired, 
};

export default AboutUs;