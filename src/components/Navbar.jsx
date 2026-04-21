'use client'

import { useState } from 'react'
import {
  Dialog,
  DialogPanel,
  Popover,
  Disclosure,
} from '@headlessui/react'

import {
  PersonStanding,
  Menu,
  X,
  ChevronDown,
  Smile,
  GraduationCap,
  BookOpen,
  Calendar,
  Lightbulb,
  Image,
  MapPin,
} from 'lucide-react'

/* ICONOS PARA SUBMENUS */
const nivelesIcon = {
  Maternal: Smile,
  Preescolar: BookOpen,
  Primaria: GraduationCap,
}

const experienciasIcon = {
  Eventos: Calendar,
  Festividades: Calendar,
  Aprendizajes: Lightbulb,
}

/* NAVEGACIÓN */
const navigation = [
  { name: 'Inicio', href: '#' },
  {
    name: 'Niveles',
    children: [
      { name: 'Maternal', href: '#niveles' },
      { name: 'Preescolar', href: '#niveles' },
      { name: 'Primaria', href: '#niveles' },
    ],
  },
  { name: 'Experiencias', href: '#', icon: PersonStanding },
  { name: 'Galería', href: '#galeria', icon: Image },
  { name: 'Ubicación', href: '#ubicacion', icon: MapPin },
]

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="bg-white/80 backdrop-blur-md border-b border-gray-100 sticky top-0 z-50">
      
      {/* NAVBAR */}
      <nav className="mx-auto flex max-w-7xl items-center justify-between py-4 px-6 lg:px-8">
        
        {/* LOGO */}
        <div className="flex lg:flex-1">
          <a href="#" className="flex items-center gap-3 group">
            <span className="sr-only">Centro Educativo Europeo</span>

            <img
              src="./src/assets/images/Logo-Navbar.svg"
              alt="Logo"
              className="h-12 w-auto object-contain scale-125 origin-left transition-transform group-hover:scale-[1.12]"
            />
          </a>
        </div>

        {/* BOTÓN MOBILE */}
        <div className="flex lg:hidden">
          <button
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
                
                <Popover.Button className="group flex items-center gap-1 text-sm font-medium text-gray-900 hover:text-[#0E2976] transition-colors">
                  <span className="flex items-center gap-1">
                    {item.name}
                  </span>
                  <ChevronDown className="h-4 w-4 text-gray-400 group-hover:text-[#0E2976]" />
                </Popover.Button>

                <Popover.Panel className="absolute left-0 mt-2 w-64 rounded-2xl bg-white border border-gray-100 shadow-xl z-50">
                  <div className="p-4">
                    <p className="text-xs font-semibold uppercase tracking-wide mb-3 text-[#0E2976]">
                      {item.name}
                    </p>

                    {item.children.map((sub) => {
                      const Icon =
                        item.name === 'Niveles'
                          ? nivelesIcon[sub.name]
                          : experienciasIcon[sub.name]

                      return (
                        <a
                          key={sub.name}
                          href={sub.href}
                          className="flex items-center gap-3 rounded-lg px-4 py-3 text-sm text-gray-700 hover:bg-[#F0F4FF] hover:text-[#0E2976] transition"
                        >
                          {Icon && (
                            <Icon className="h-5 w-5 text-gray-400 shrink-0" />
                          )}
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
                className="relative group flex items-center gap-1 text-sm font-medium text-gray-900 hover:text-[#0E2976] transition-colors"
              >
                <span className="flex items-center gap-1">
                  {item.icon && (
                    <item.icon className="h-4 w-4 shrink-0 relative top-[1px] text-gray-500" />
                  )}
                  {item.name}
                </span>

                <span className="absolute left-0 -bottom-1 h-0.5 w-full bg-[#0E2976] scale-x-0 origin-left transition-transform group-hover:scale-x-100" />
              </a>
            )
          )}
        </div>

        {/* BOTÓN ADMISIONES */}
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <a
            href="#admisiones"
            className="rounded-xl px-5 py-2 text-sm font-semibold text-white bg-[#0E2976] hover:bg-[#0a1b4a] transition"
          >
            Admisiones
          </a>
        </div>
      </nav>

      {/* MOBILE MENU */}
      <Dialog open={mobileMenuOpen} onClose={setMobileMenuOpen} className="lg:hidden">
        <div className="fixed inset-0 bg-black/30 z-40" />

        <DialogPanel className="fixed inset-y-0 right-0 z-50 w-full max-w-sm bg-white p-6 shadow-2xl overflow-y-auto">
          
          {/* HEADER MOBILE */}
          <div className="flex items-center justify-between">
            <img
              src="./src/assets/images/Logo-Navbar.svg"
              alt="Logo"
              className="h-10 w-auto"
            />

            <button
              onClick={() => setMobileMenuOpen(false)}
              className="p-2 rounded-md hover:bg-gray-100"
            >
              <X className="h-6 w-6" />
            </button>
          </div>

          {/* LINKS MOBILE */}
          <div className="mt-6 space-y-2">
            {navigation.map((item) =>
              item.children ? (
                <Disclosure key={item.name}>
                  {({ open }) => (
                    <>
                      <Disclosure.Button className="flex w-full items-center justify-between rounded-lg px-4 py-3 text-base font-medium text-gray-900 hover:bg-[#F0F4FF] hover:text-[#0E2976] transition">
                        {item.name}
                        <ChevronDown
                          className={`h-5 w-5 transition-transform ${
                            open ? 'rotate-180' : ''
                          }`}
                        />
                      </Disclosure.Button>

                      <Disclosure.Panel className="space-y-1 px-6 pb-2">
                        {item.children.map((sub) => {
                          const Icon =
                            item.name === 'Niveles'
                              ? nivelesIcon[sub.name]
                              : experienciasIcon[sub.name]

                          return (
                            <a
                              key={sub.name}
                              href={sub.href}
                              className="flex items-center gap-3 rounded-lg px-4 py-2 text-sm text-gray-700 hover:bg-[#F0F4FF] hover:text-[#0E2976] transition"
                            >
                              {Icon && (
                                <Icon className="h-4 w-4 text-gray-400 shrink-0" />
                              )}
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