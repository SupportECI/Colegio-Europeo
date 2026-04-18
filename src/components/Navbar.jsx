'use client'

import { useState } from 'react'
import {
  Dialog,
  DialogPanel,
  Popover,
  Disclosure,
} from '@headlessui/react'

import {
  Menu,
  X,
  ChevronDown,
  Baby,
  TreePine,
  GraduationCap,
  BookOpen,
  Calendar,
  Lightbulb,
  Image,
  MapPin,
  Mail,
} from 'lucide-react'

/* ICONOS PARA SUBMENUS */
const nivelesIcon = {
  'Lactantes': Baby,
  'Maternal': TreePine,
  'Preescolar': GraduationCap,
  'Primaria': BookOpen,
}

const experienciasIcon = {
  'Eventos': Calendar,
  'Festividades': Calendar,
  'Aprendizajes': Lightbulb,
}

/* NAVEGACIÓN COMPLETA */
const navigation = [
  { name: 'Inicio', href: '#' },
  {
    name: 'Niveles',
    children: [
      { name: 'Lactantes', href: '#' },
      { name: 'Maternal', href: '#' },
      { name: 'Preescolar', href: '#' },
      { name: 'Primaria', href: '#' },
    ],
  },
  {
    name: 'Experiencias',
    children: [
      { name: 'Eventos', href: '#' },
      { name: 'Festividades', href: '#' },
      { name: 'Aprendizajes', href: '#' },
    ],
  },
  { name: 'Galería', href: '#galeria', icon: Image },
  { name: 'Ubicación', href: '#ubicacion', icon: MapPin },
  { name: 'Contacto', href: '#contacto', icon: Mail },
]

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="bg-white/80 backdrop-blur-md border-b border-gray-100 sticky top-0 z-50">
      <nav
        aria-label="Principal"
        className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8"
      >
        {/* SECCIÓN DEL LOGO */}
        <div className="flex lg:flex-1">
          <a href="#" className="-m-1.5 p-1.5 flex items-center gap-3 group">
            <span className="sr-only">Centro Educativo Europeo</span>
            
            {/* TU LOGOTIPO SVG DESDE RUTA */}
            <img 
              src="../images/logo.svg" width={20} height={30}
              alt="Logo" 
              className="h-10 w-auto transition-transform group-hover:scale-105"
            />

            <div 
              className="font-bold text-lg leading-tight transition-colors group-hover:text-[#0a1b4a]" 
              style={{ color: '#0E2976' }}
            >
              Centro Educativo Europeo
            </div>
          </a>
        </div>

        {/* BOTON MOBILE */}
        <div className="flex lg:hidden">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(true)}
            className="rounded-md p-2 text-gray-700 hover:bg-gray-100 transition"
          >
            <Menu className="h-6 w-6" />
          </button>
        </div>

        {/* LINKS DESKTOP */}
        <div className="hidden lg:flex lg:gap-x-8">
          {navigation.map((item) =>
            item.children ? (
              <Popover key={item.name} className="relative">
                <Popover.Button className="group flex items-center gap-x-1 text-sm font-medium text-gray-900 hover:text-[#0E2976] outline-none transition-colors">
                  {item.name}
                  <ChevronDown className="h-4 w-4 text-gray-400 group-hover:text-[#0E2976] transition-colors" />
                </Popover.Button>

                <Popover.Panel className="absolute left-0 mt-2 w-64 rounded-2xl bg-white border border-gray-100 shadow-xl z-50">
                  <div className="p-4">
                    <p className="text-xs font-semibold uppercase tracking-wide mb-3 text-[#0E2976]">
                      {item.name}
                    </p>
                    {item.children.map((sub) => {
                      let Icon = item.name === 'Niveles' ? nivelesIcon[sub.name] : experienciasIcon[sub.name]
                      return (
                        <a
                          key={sub.name}
                          href={sub.href}
                          className="flex items-center gap-3 rounded-lg px-4 py-3 text-sm text-gray-700 hover:bg-[#F0F4FF] hover:text-[#0E2976] transition-all"
                        >
                          {Icon && <Icon className="h-5 w-5 text-gray-400" />}
                          {sub.name}
                        </a>
                      )
                    })}
                  </div>
                </Popover.Panel>
              </Popover>
            ) : (
              <a
                key={item.name}
                href={item.href}
                className="relative group text-sm font-medium text-gray-900 hover:text-[#0E2976] transition-colors"
              >
                {item.icon && <item.icon className="inline h-4 w-4 mr-1" />}
                {item.name}
                <span className="absolute left-0 -bottom-1 h-0.5 w-full bg-[#0E2976] transition-transform origin-left scale-x-0 group-hover:scale-x-100" />
              </a>
            )
          )}
        </div>

        {/* BOTON ADMISIONES */}
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <a
            href="#admisiones"
            className="rounded-xl px-5 py-2.5 text-sm font-semibold text-white transition shadow-sm bg-[#0E2976] hover:bg-[#0a1b4a]"
          >
            Admisiones
          </a>
        </div>
      </nav>

      {/* MENU MOBILE */}
      <Dialog open={mobileMenuOpen} onClose={setMobileMenuOpen} className="lg:hidden">
        <div className="fixed inset-0 bg-black/30 z-40" />
        <DialogPanel className="fixed inset-y-0 right-0 z-50 w-full max-w-sm bg-white p-6 shadow-2xl overflow-y-auto">
          
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <img src="/logo.svg" alt="Logo" className="h-8 w-auto" />
              <div className="font-bold text-lg text-[#0E2976]">Centro Educativo Europeo</div>
            </div>
            <button onClick={() => setMobileMenuOpen(false)} className="p-2 rounded-md hover:bg-gray-100">
              <X className="h-6 w-6" />
            </button>
          </div>

          <div className="mt-6 space-y-2">
            {navigation.map((item) =>
              item.children ? (
                <Disclosure key={item.name}>
                  {({ open }) => (
                    <>
                      <Disclosure.Button className="flex w-full items-center justify-between rounded-lg px-4 py-3 text-base font-medium text-gray-900 hover:bg-[#F0F4FF] hover:text-[#0E2976] transition">
                        {item.name}
                        <ChevronDown className={`h-5 w-5 transition-transform ${open ? 'rotate-180' : ''}`} />
                      </Disclosure.Button>
                      <Disclosure.Panel className="space-y-1 px-6 pb-2">
                        {item.children.map((sub) => {
                          let Icon = item.name === 'Niveles' ? nivelesIcon[sub.name] : experienciasIcon[sub.name]
                          return (
                            <a
                              key={sub.name}
                              href={sub.href}
                              className="flex items-center gap-3 rounded-lg px-4 py-2 text-sm text-gray-700 hover:bg-[#F0F4FF] hover:text-[#0E2976] transition"
                            >
                              {Icon && <Icon className="h-4 w-4 text-gray-400" />}
                              {sub.name}
                            </a>
                          )
                        })}
                      </Disclosure.Panel>
                    </>
                  )}
                </Disclosure>
              ) : (
                <a
                  key={item.name}
                  href={item.href}
                  className="block rounded-lg px-4 py-3 text-base font-medium text-gray-900 hover:bg-[#F0F4FF] hover:text-[#0E2976] transition"
                >
                  {item.name}
                </a>
              )
            )}
            <a
              href="#admisiones"
              className="block text-center mt-4 rounded-xl px-4 py-3 font-semibold text-white bg-[#0E2976] hover:bg-[#0a1b4a]"
            >
              Admisiones
            </a>
          </div>
        </DialogPanel>
      </Dialog>
    </header>
  )
}