import { GlobeAltIcon, EyeIcon, HeartIcon } from '@heroicons/react/24/outline';
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import PropTypes from 'prop-types';

const AboutUs = () => {
  const sections = [
    {
      title: 'Misión',
      description: 'Brindar enseñanza de idiomas de alta calidad, adaptándonos a las necesidades de cada estudiante y fomentando el aprendizaje continuo.',
      icon: <GlobeAltIcon className="h-6 w-6 text-indigo-600" />,
    },
    {
      title: 'Visión',
      description: 'Ser líderes en educación de idiomas, reconocidos por la excelencia académica y el impacto positivo en la comunidad global. Buscamos continuar innovando en la enseñanza de idiomas.',
      icon: <EyeIcon className="h-6 w-6 text-blue-600" />,
    },
    {
      title: 'Valores',
      description: 'Compromiso, innovación, respeto y pasión por la enseñanza. Estos valores nos guían para brindar lo mejor de nosotros a nuestros estudiantes.',
      icon: <HeartIcon className="h-6 w-6 text-pink-600" />,
    },
  ];

  return (
    <section id="nosotros" className="py-10 bg-white" >
      <div className="max-w-6xl mx-8 md:mx-10 lg:mx-20 xl:mx-auto">
        <div className="mb-12 space-y-5 md:mb-16 md:text-center">
          <div className="inline-block px-3 py-1 text-sm font-semibold text-indigo-800 rounded-lg md:text-center bg-[#f3f4f6] hover:bg-opacity-40 hover:cursor-pointer">
            ¿Quiénes somos?
          </div>
          <h1 className="mb-5 text-4xl font-semibold text-gray-800 md:text-center">
            Conoce nuestra misión, visión y valores
          </h1>
          <p className="text-lg text-gray-700 md:text-center">
            Nos dedicamos a ofrecer una educación de calidad, inspirando a nuestros estudiantes a alcanzar sus metas.
          </p>
        </div>

        {/* Cards con animación */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
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
  // Usando useInView para animar cuando se hace scroll
  const { ref, inView } = useInView({ threshold: 0.2, triggerOnce: true });

  return (
    <motion.div
      ref={ref} 
      className="text-sm leading-6"
      initial={{ opacity: 0, y: 50 }} 
      animate={inView ? { opacity: 1, y: 0 } : {}} 
      transition={{ delay, duration: 0.6, ease: 'easeOut' }}
    >
      <div className="relative group">
        <div className="absolute transition rounded-lg opacity-25 -inset-1 bg-gray-100 blur duration-200 group-hover:opacity-100 group-hover:duration-200"></div>
        <div className="relative p-6 space-y-6 leading-none rounded-lg bg-white ring-1 ring-gray-200/5 shadow-md hover:shadow-lg">
          <div className="flex flex-col items-center space-y-4">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-indigo-100 shadow-lg">
              {icon}
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-800">{title}</h3>
            </div>
          </div>
          <p className="leading-normal text-gray-600 text-md">{description}</p>
        </div>
      </div>
    </motion.div>
  );
};

// Validación de los props
AnimatedCard.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired, 
  icon: PropTypes.element.isRequired,
  delay: PropTypes.number.isRequired, 
};

export default AboutUs;
