'use client'

import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import {
  MapPin,
  Phone,
  Mail,
  Facebook,
  Instagram,
  Youtube,
  BriefcaseBusiness,
  X,
} from 'lucide-react'
import logoFooter from '../assets/images/Logo-Footer.svg'

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.15,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 25 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: 'easeOut',
    },
  },
}

const nivelesLinks = [
  { label: 'Maternal',             href: '#niveles' },
  { label: 'Preescolar',           href: '#niveles' },
  { label: 'Primaria',             href: '#niveles' },
]

const institucionLinks = [
  { label: 'Sobre Nosotros',       href: '#nosotros' },
  { label: 'Modelo Educativo',     href: '#formacion-integral' },
  { label: 'Admisiones',           href: '#' },
  { label: 'Preguntas Frecuentes', href: '#faq' },
]

const avisosLinks = [
  { label: 'Reglamento Escolar',   href: '/reglamento' },
  { label: 'Costos', href: '/costos' },
  { label: 'Noticias', href: '/plataforma' },
]

const socialLinks = [
  { Icon: Facebook,      href: 'https://www.facebook.com/centroeducativoeuropeotux', name: 'facebook' },
  { Icon: Instagram,     href: 'https://www.instagram.com/centroeducativoeuropeotux/', name: 'instagram' }
]

export default function Footer() {
  const [modalType, setModalType] = useState(null)

  const modalContent = {
    privacidad: {
      title: "Aviso de Privacidad",
      content: "En el Centro Educativo Europeo, la privacidad de nuestros alumnos y padres de familia es prioridad. Sus datos personales están protegidos bajo la Ley Federal de Protección de Datos Personales. Los datos recabados se utilizan exclusivamente para fines académicos, administrativos y de comunicación institucional."
    },
    terminos: {
      title: "Términos y Condiciones",
      content: "Al utilizar los servicios y plataforma del Centro Educativo Europeo, usted acepta cumplir con nuestro reglamento interno, políticas de pagos y normas de convivencia digital. Todo el contenido educativo y logotipos son propiedad intelectual de la institución."
    }
  }

  return (
    <footer className="bg-[#0E2976] text-white/90 relative">
      <div className="mx-auto max-w-7xl px-6 lg:px-8 py-20">
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          {/* INFO COLEGIO */}
          <motion.div variants={itemVariants}>
            <div className="mb-6 ">
              <img 
                src={logoFooter}
                width={200} 
                className="-mt-3"
                alt="Logo Centro Educativo Europeo" 
              />
              <p className="text-sm text-white/70 mt-1 leading-relaxed">
                Formando líderes con valores, excelencia académica y un sistema  integral desde hace más de 10 años en Chiapas.
              </p>
            </div>

            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-blue-300 shrink-0" />
                <p className="text-sm">
                  8a. Sur Poniente No. 1617, Col. Xamaipak, Tuxtla Gutiérrez.
                </p>
              </div>

              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-blue-300" />
                <a href="tel:+529616066550" className="text-sm hover:text-white transition">
                  (961) 606 65 50
                </a>
              </div>

              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-blue-300" />
                <a href="mailto:informes@ceeuropeo.edu.mx" className="text-sm hover:text-white transition">
                  informes@ceeuropeo.edu.mx
                </a>
              </div>
            </div>

            <div className="flex gap-2 mt-6">
              {socialLinks.map(({ Icon, href, name }) => (
                <a
                  key={name}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/10 border border-white/20 text-white hover:bg-[#C32945] transition"
                >
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </motion.div>

          {/* NUESTROS NIVELES */}
          <motion.div variants={itemVariants}>
            <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-6">
              Nuestros Niveles
            </h4>
            <ul className="space-y-4">
              {nivelesLinks.map(({ label, href }) => (
                <li key={label}>
                  <a href={href} className="text-sm text-white/70 hover:text-white transition">
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* INSTITUCIÓN */}
          <motion.div variants={itemVariants}>
            <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-6">
              Institución
            </h4>
            <ul className="space-y-4">
              {institucionLinks.map(({ label, href }) => (
                <li key={label}>
                  <a href={href} className="text-sm text-white/70 hover:text-white transition">
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* AVISOS Y LEGAL */}
          <motion.div variants={itemVariants}>
            <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-6">
              Avisos
            </h4>
            <ul className="space-y-4">
              {avisosLinks.map(({ label, href, modalId }) => (
                <li key={label}>
                  {modalId ? (
                    <button
                      onClick={() => setModalType(modalId)}
                      className="text-left text-sm text-white/70 hover:text-white transition cursor-pointer"
                    >
                      {label}
                    </button>
                  ) : (
                    <a href={href} className="text-sm text-white/70 hover:text-white transition">
                      {label}
                    </a>
                  )}
                </li>
              ))}
            </ul>
          </motion.div>
        </motion.div>

        {/* COPYRIGHT CON LINKS A MODALES */}
        <div className="mt-16 pt-8 border-t border-white/10">
          <motion.div 
            variants={itemVariants}
            className="flex flex-col md:flex-row justify-center items-center gap-4 text-sm text-white/50"
          >
            <p>© {new Date().getFullYear()} Centro Educativo Europeo. Todos los derechos reservados.</p>
            
            {/* Botones para Avisos de privacidad comentamos para futuro uso
            <div className="flex gap-4">
              <button id='terminos' 
                onClick={() => setModalType('terminos')} 
                className="hover:text-white transition underline underline-offset-4"
              >
                Términos y Condiciones
              </button>

              <button id='privacidad'
                onClick={() => setModalType('privacidad')} 
                className="hover:text-white transition underline underline-offset-4"
              >
                Aviso de Privacidad
              </button>
            </div> */}

          </motion.div>
        </div>
      </div>

      {/* MODAL SYSTEM */}
      <AnimatePresence>
        {modalType && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            {/* Overlay */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setModalType(null)}
              className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            />
            
            {/* Modal Content */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="relative bg-white text-gray-900 max-w-lg w-full rounded-2xl p-8 shadow-2xl"
            >
              <button 
                onClick={() => setModalType(null)}
                className="absolute top-4 right-4 p-2 hover:bg-gray-100 rounded-full transition"
              >
                <X className="w-5 h-5 text-gray-500" />
              </button>
              
              <h3 className="text-xl font-bold text-[#0E2976] mb-4">
                {modalContent[modalType].title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {modalContent[modalType].content}
              </p>
              
              <button 
                onClick={() => setModalType(null)}
                className="mt-8 w-full py-3 bg-[#0E2976] text-white rounded-xl font-semibold hover:bg-[#0a1e56] transition shadow-lg"
              >
                Entendido
              </button>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </footer>
  )
}