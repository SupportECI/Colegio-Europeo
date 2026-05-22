'use client'

import { useState, Fragment } from 'react'
import {
  Dialog,
  DialogPanel,
  Transition,
  TransitionChild,
} from '@headlessui/react'
import navbarLogo from '../assets/images/Navbar.svg'
import navbarLogoSmall from '../assets/images/logo.svg'
import '../styles/navbar-animations.css'

import {
  House,
  PersonStanding,
  Menu,
  X,
  Image as ImageIcon,
  Building2,
} from 'lucide-react'

const navigation = [
  { name: 'Inicio', href: '/', icon: House },
  { name: 'Experiencias', href: '#experiencias', icon: PersonStanding },
  { name: 'Galería', href: '#galeria', icon: ImageIcon },
  { name: 'Nosotros', href: '#nosotros', icon: Building2 }
]

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="bg-white/80 backdrop-blur-md border-b border-gray-100 sticky top-0 z-50 w-full">
      
      {/* NAVBAR DESKTOP & MOBILE HEADER */}
      <nav className="mx-auto flex max-w-7xl items-center justify-between py-3 sm:py-4 px-4 md:px-8">
        
        {/* LOGO */}
        <div className="flex flex-1">
          <a href="/" className="flex items-center group">
            <img
              src={navbarLogo}
              alt="Logo"
              className="h-10 sm:h-15  w-auto transition-transform duration-300 group-hover:scale-105"
            />
          </a>
        </div>

        {/* BOTÓN HAMBURGUESA (MÓVIL) */}
        <div className="flex lg:hidden">
          <button
            onClick={() => setMobileMenuOpen(true)}
            className="group relative rounded-lg p-2.5 hover:bg-gray-200 active:scale-95 transition-all duration-300"
          >
            <Menu className="hamburger-pulse h-7 w-7 text-[#0E2976] transition-transform duration-300 group-hover:scale-110" />
          </button>
        </div>

        {/* LINKS (DESKTOP) */}
        <div className="hidden lg:flex lg:gap-x-8">
          {navigation.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="relative group flex items-center gap-2 text-sm font-semibold text-gray-700 hover:text-[#0E2976] transition-colors py-2"
            >
              {item.icon && <item.icon className="h-4 w-4 text-gray-400 group-hover:text-[#0E2976] transition-colors" />}
              {item.name}
              <span className="absolute left-0 -bottom-1 h-0.5 w-full bg-[#0E2976] scale-x-0 origin-left transition-transform duration-300 group-hover:scale-x-100" />
            </a>
          ))}
        </div>

        {/* BOTÓN LLAMAR (DESKTOP) */}
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <a
            href="tel:+529611234567"
            className="rounded-xl px-6 py-2.5 text-sm font-bold text-white bg-[#0E2976] hover:bg-[#0a1b4a] shadow-lg shadow-blue-900/10 hover:shadow-blue-900/20 transition-all active:scale-95">
            Atención directa
          </a>
        </div>
      </nav>

      {/* MENÚ MÓVIL CON TRANSICIONES */}
      <Transition show={mobileMenuOpen} as={Fragment}>
        <Dialog as="div" className="relative z-50 lg:hidden" onClose={setMobileMenuOpen}>
          
          {/* 1. Backdrop (Fondo oscuro) */}
          <TransitionChild
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black/40 backdrop-blur-sm" />
          </TransitionChild>

          <div className="fixed inset-0 z-50 flex justify-end">
            {/* 2. Panel Lateral */}
            <TransitionChild
              as={Fragment}
              enter="transform transition ease-in-out duration-400"
              enterFrom="translate-x-full"
              enterTo="translate-x-0"
              leave="transform transition ease-in-out duration-300"
              leaveFrom="translate-x-0"
              leaveTo="translate-x-full"
            >
              <DialogPanel className="w-full max-w-xs bg-white shadow-2xl flex flex-col">
                
                {/* Header del Panel */}
                <div className="flex items-center justify-between p-5 border-b border-gray-50">
                  <img src={navbarLogoSmall} alt="Logo" className="h-9 w-auto" />
                  <button
                    onClick={() => setMobileMenuOpen(false)}
                    className="p-2 rounded-full hover:bg-gray-100 transition-colors"
                  >
                    <X className="h-6 w-6 text-gray-500" />
                  </button>
                </div>

                {/* Cuerpo del Menú */}
                <div className="flex-1 overflow-y-auto py-6 px-4 space-y-2">
                  {navigation.map((item, idx) => (
                    <a
                      key={item.name}
                      href={item.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className="flex items-center gap-4 p-4 text-base font-bold text-gray-900 rounded-2xl hover:bg-blue-50 transition-all item-stagger"
                      style={{ animationDelay: `${idx * 0.1}s` }}
                    >
                      <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gray-50 text-[#0E2976]">
                        {item.icon && <item.icon className="h-5 w-5" />}
                      </div>
                      {item.name}
                    </a>
                  ))}

                  <div className="pt-4 px-2">
                    <a
                      href="tel:+529613001519"
                      onClick={() => setMobileMenuOpen(false)}
                      className="flex w-full items-center justify-center rounded-2xl bg-[#0E2976] py-4 text-base font-bold text-white shadow-xl shadow-blue-900/20 active:scale-95 transition-transform"
                    >
                      Atención directa
                    </a>
                  </div>
                </div>

                {/* Footer del Panel */}
                <div className="p-6 border-t border-gray-50">
                  <p className="text-center text-xs text-gray-400 font-medium">
                    Centro Educativo Europeo © 2026
                  </p>
                </div>
              </DialogPanel>
            </TransitionChild>
          </div>
        </Dialog>
      </Transition>
    </header>
  )
}