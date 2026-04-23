import React, { useState } from "react";
import { validarFormulario } from "../utils/validations";
import {
  mostrarAlertaValidacion,
  mostrarAlertaExito,
  mostrarAlertaError,
  limpiarFormulario,
  manejarCambio,
} from "../utils/formHandler";

const HeroForm = () => {
  const [formData, setFormData] = useState({
    nombre: "",
    apellido: "",
    email: "",
    telefono: "",
    nivel: "",
    disponibilidad: "",
    terminos: false,
  });

  const [errors, setErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) => manejarCambio(e, setFormData, setErrors);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const erroresValidacion = validarFormulario(formData);

    if (Object.keys(erroresValidacion).length > 0) {
      setErrors(erroresValidacion);
      mostrarAlertaValidacion();
      return;
    }

    setIsLoading(true);
    try {
      await new Promise((resolve) => setTimeout(resolve, 1500));
      mostrarAlertaExito(formData);
      limpiarFormulario(setFormData, setErrors);
    } catch {
      mostrarAlertaError();
    } finally {
      setIsLoading(false);
    }
  };

  // Clase para Inputs de texto (Igualamos altura y bordes)
  const inputClasses = (error) => `
    w-full px-2.5 sm:px-4 py-2 sm:py-3 rounded-lg border-2 text-xs sm:text-base transition-all duration-300 
    focus:outline-none focus:ring-2 focus:scale-[1.02]
    placeholder:text-[10px] sm:placeholder:text-xs placeholder:text-gray-400
    shadow-sm hover:shadow-md
    ${error 
      ? "border-red-500 bg-red-50 focus:ring-red-500/50" 
      : "border-gray-200 hover:border-gray-300 focus:border-[#0E2976] focus:ring-[#0E2976]/50"
    }
  `;

  // Clase mejorada para SELECTS (Se ajustó el padding derecho para la flecha)
  const selectClasses = (error) => `
    w-full pl-2.5 sm:pl-4 pr-8 py-2 sm:py-3 rounded-lg border-2 text-xs sm:text-base transition-all duration-300 
    focus:outline-none focus:ring-2 bg-white cursor-pointer text-gray-700 focus:scale-[1.02]
    appearance-none shadow-sm hover:shadow-md
    ${error 
      ? "border-red-500 bg-red-50 focus:ring-red-500/50" 
      : "border-gray-200 hover:border-gray-300 focus:border-[#0E2976] focus:ring-[#0E2976]/50"
    }
  `;

  return (
    <div className="w-full">
      <div className="bg-gradient-to-br from-white to-gray-50 rounded-2xl shadow-xl p-2.5 sm:p-6 md:p-10 backdrop-blur-sm border border-gray-100 hover:shadow-2xl transition-shadow duration-300">
        
        {/* Encabezado */}
        <div className="mb-2 sm:mb-6 md:mb-8">
          <div className="flex items-center gap-1.5 sm:gap-3 mb-1 sm:mb-2 md:mb-3">
            <div className="h-8 md:h-12 w-8 md:w-12 rounded-lg md:rounded-xl flex items-center justify-center flex-shrink-0">
              <img 
              src="./src/assets/images/logo.svg" width={16} height={24}
              alt="Logo" 
              className="h-6 md:h-10 w-auto transition-transform group-hover:scale-105"
            />
            </div>
            <div>
              <h2 className="text-base sm:text-2xl md:text-3xl font-bold bg-gradient-to-r from-[#0E2976] to-[#1a3a7a] bg-clip-text text-transparent">
                Solicita la admisión
              </h2>
            </div>
          </div>
          <p className="text-gray-600 text-[10px] sm:text-sm md:text-base ml-0.5">
            Completa el formulario y nos pondremos en contacto
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-2 sm:space-y-4 md:space-y-5">
          
          {/* Fila 1 */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-2 sm:gap-4 md:gap-5">
            <div className="relative group">
              <label className="block text-[10px] sm:text-xs md:text-sm font-semibold text-gray-800 mb-1 md:mb-2 group-focus-within:text-[#0E2976] transition-colors">Nombre *</label>
              <input
                type="text"
                name="nombre"
                value={formData.nombre}
                onChange={handleChange}
                placeholder="Tu nombre"
                className={inputClasses(errors.nombre)}
              />
              {errors.nombre && <p className="text-red-500 text-xs md:text-[10px] mt-1">✕ {errors.nombre}</p>}
            </div>

            <div className="relative group">
              <label className="block text-[10px] sm:text-xs md:text-sm font-semibold text-gray-800 mb-1 md:mb-2 group-focus-within:text-[#0E2976] transition-colors">Apellido *</label>
              <input
                type="text"
                name="apellido"
                value={formData.apellido}
                onChange={handleChange}
                placeholder="Tu apellido"
                className={inputClasses(errors.apellido)}
              />
              {errors.apellido && <p className="text-red-500 text-xs md:text-[10px] mt-1">✕ {errors.apellido}</p>}
            </div>
          </div>

          {/* Fila 2 */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-2 sm:gap-4 md:gap-5">
            <div className="relative group">
              <label className="block text-[10px] sm:text-xs md:text-sm font-semibold text-gray-800 mb-1 md:mb-2 group-focus-within:text-[#0E2976] transition-colors">Email *</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="tu@email.com"
                className={inputClasses(errors.email)}
              />
              {errors.email && <p className="text-red-500 text-xs md:text-[10px] mt-1">✕ {errors.email}</p>}
            </div>

            <div className="relative group">
              <label className="block text-[10px] sm:text-xs md:text-sm font-semibold text-gray-800 mb-1 md:mb-2 group-focus-within:text-[#0E2976] transition-colors">Teléfono *</label>
              <input
                type="tel"
                name="telefono"
                value={formData.telefono}
                onChange={handleChange}
                placeholder="+52 9611234567"
                className={inputClasses(errors.telefono)}
              />
              {errors.telefono && <p className="text-red-500 text-xs md:text-[10px] mt-1">✕ {errors.telefono}</p>}
            </div>
          </div>

          {/* Fila 3: Menus Desplegables Optimizados */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-2 sm:gap-4 md:gap-5">
            <div className="relative group">
              <label className="block text-[10px] sm:text-xs md:text-sm font-semibold text-gray-800 mb-1 md:mb-2 group-focus-within:text-[#0E2976] transition-colors">Nivel *</label>
              <div className="relative">
                <select
                  name="nivel"
                  value={formData.nivel}
                  onChange={handleChange}
                  className={selectClasses(errors.nivel)}
                >
                  <option value="">Selecciona el nivel</option>
                  <option value="maternal">Maternal</option>
                  <option value="preescolar">Preescolar</option>
                  <option value="primaria">Primaria</option>
                </select>
                {/* Flecha personalizada para que no se vea desproporcionada */}
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-1.5 sm:px-2 text-gray-400">
                  <svg className="h-3 sm:h-4 w-3 sm:w-4 fill-current" viewBox="0 0 20 20"><path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"/></svg>
                </div>
              </div>
              {errors.nivel && <p className="text-red-500 text-xs md:text-[10px] mt-1">✕ {errors.nivel}</p>}
            </div>

            <div className="relative group">
              <label className="block text-[10px] sm:text-xs md:text-sm font-semibold text-gray-800 mb-1 md:mb-2 group-focus-within:text-[#0E2976] transition-colors">Incorporación *</label>
              <div className="relative">
                <select
                  name="disponibilidad"
                  value={formData.disponibilidad}
                  onChange={handleChange}
                  className={selectClasses(errors.disponibilidad)}
                >
                  <option value="">Selecciona incorporación</option>
                  <option value="inmediato">Inmediato</option>
                  <option value="un_mes">En 1 mes</option>
                  <option value="dos_tres_meses">De 2 a 3 meses</option>
                  <option value="proximo_ciclo">Próximo ciclo escolar</option>
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-1.5 sm:px-2 text-gray-400">
                  <svg className="h-3 sm:h-4 w-3 sm:w-4 fill-current" viewBox="0 0 20 20"><path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"/></svg>
                </div>
              </div>
              {errors.disponibilidad && <p className="text-red-500 text-xs md:text-[10px] mt-1">✕ {errors.disponibilidad}</p>}
            </div>
          </div>

          {/* Términos */}
          <div className="flex items-start gap-1.5 sm:gap-3 md:gap-4 p-1.5 sm:p-4 md:p-5 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg md:rounded-xl border-2 border-blue-200 hover:border-blue-300 transition-all">
            <div className="relative flex items-center mt-0.5 sm:mt-1">
              <input
                type="checkbox"
                name="terminos"
                id="terminos"
                checked={formData.terminos}
                onChange={handleChange}
                className="sr-only"
              />
              <label 
                htmlFor="terminos" 
                className={`w-5 h-5 sm:w-6 sm:h-6 rounded-md border-2 flex items-center justify-center cursor-pointer transition-all flex-shrink-0 ${
                  formData.terminos 
                    ? 'bg-[#0E2976] border-[#0E2976]' 
                    : 'bg-white border-gray-400 hover:border-[#0E2976]'
                }`}
              >
                {formData.terminos && (
                  <svg className="w-3 h-3 sm:w-4 sm:h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                )}
              </label>
            </div>
            <div className="flex-1">
              <label htmlFor="terminos" className="text-[10px] sm:text-xs md:text-sm text-gray-700 cursor-pointer leading-tight sm:leading-relaxed block font-medium">
                Acepto los <a href="#" className="font-semibold hover:underline" style={{ color: '#0E2976' }}>términos y condiciones</a> y la <a href="#" className="font-semibold hover:underline" style={{ color: '#0E2976' }}>política de privacidad</a> *
              </label>
              {errors.terminos && <p className="text-red-500 text-xs md:text-[10px] mt-1 sm:mt-2">✕ {errors.terminos}</p>}
            </div>
          </div>

          <button
            type="submit"
            disabled={isLoading}
            className="w-full text-white font-bold py-2 sm:py-3 md:py-4 px-2.5 sm:px-4 md:px-6 rounded-lg md:rounded-xl text-[11px] sm:text-sm md:text-base hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 disabled:opacity-70 flex items-center justify-center gap-1 sm:gap-2 group relative overflow-hidden"
            style={{ background: 'linear-gradient(135deg, #0E2976 0%, #1a3a7a 100%)' }}
          >
            <div className="absolute inset-0 group-hover:translate-x-0 transition-transform duration-500"></div>
            <div className="relative flex items-center justify-center gap-1 sm:gap-2">
              {isLoading ? (
                <>
                  <svg className="animate-spin h-2.5 sm:h-4 md:h-5 w-2.5 sm:w-4 md:w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  <span className="text-xs sm:text-sm">Enviando...</span>
                </>
              ) : (
                <>
                  <span>✦</span>
                  <span>Solicitar admisión</span>
                </>
              )}
            </div>
          </button>

          <p className="text-gray-500 text-center text-[9px] sm:text-xs md:text-xs">
            * Campos requeridos para el proceso de inscripción
          </p>
        </form>
      </div>
    </div>
  );
};

export default HeroForm;