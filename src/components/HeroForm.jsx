import React, { useState } from "react";
import { validarFormulario } from "../utils/validations";
import {
  mostrarAlertaValidacion,
  mostrarAlertaExito,
  mostrarAlertaError,
  mostrarAlertaConfirmacion,
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
    apoderado: "",
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

    const result = await mostrarAlertaConfirmacion();

    if (result.isConfirmed) {
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
    }
  };

  // Clase para Inputs de texto (Igualamos altura y bordes)
  const inputClasses = (error) => `
    w-full px-3 py-2.5 rounded-lg border-2 text-sm transition-all duration-300 
    focus:outline-none focus:ring-2 
    placeholder:text-[12px] placeholder:text-gray-400
    ${error 
      ? "border-red-500 bg-red-50 focus:ring-red-500/50" 
      : "border-gray-200 hover:border-gray-300 focus:border-[#0E2976] focus:ring-[#0E2976]/50"
    }
  `;

  // Clase mejorada para SELECTS (Se ajustó el padding derecho para la flecha)
  const selectClasses = (error) => `
    w-full pl-3 pr-8 py-2.5 rounded-lg border-2 text-[12px] transition-all duration-300 
    focus:outline-none focus:ring-2 bg-white cursor-pointer text-gray-700
    appearance-none
    ${error 
      ? "border-red-500 bg-red-50 focus:ring-red-500/50" 
      : "border-gray-200 hover:border-gray-300 focus:border-[#0E2976] focus:ring-[#0E2976]/50"
    }
  `;

  return (
    <div className="w-full">
      <div className="bg-white rounded-2xl shadow-lg p-6 md:p-8 backdrop-blur-sm border border-gray-100">
        
        {/* Encabezado */}
        <div className="mb-6">
          <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-1.5">
            Solicita la admisión
          </h2>
          <p className="text-gray-600 text-xs md:text-sm">
            Completa el formulario y nos pondremos en contacto para conocerte
          </p>
          <div 
            className="h-1 w-12 rounded-full mt-3" 
            style={{ background: 'linear-gradient(135deg, #0E2976 0%, #1a3a7a 100%)' }}
          ></div>
        </div>

        <form onSubmit={handleSubmit} className="space-y-5">
          
          {/* Fila 1 */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="relative">
              <label className="block text-xs font-semibold text-gray-700 mb-1.5">Nombre *</label>
              <input
                type="text"
                name="nombre"
                value={formData.nombre}
                onChange={handleChange}
                placeholder="Tu nombre"
                className={inputClasses(errors.nombre)}
              />
              {errors.nombre && <p className="text-red-500 text-[10px] mt-1">✕ {errors.nombre}</p>}
            </div>

            <div className="relative">
              <label className="block text-xs font-semibold text-gray-700 mb-1.5">Apellido *</label>
              <input
                type="text"
                name="apellido"
                value={formData.apellido}
                onChange={handleChange}
                placeholder="Tu apellido"
                className={inputClasses(errors.apellido)}
              />
              {errors.apellido && <p className="text-red-500 text-[10px] mt-1">✕ {errors.apellido}</p>}
            </div>
          </div>

          {/* Fila 2 */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="relative">
              <label className="block text-xs font-semibold text-gray-700 mb-1.5">Email *</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="tu@email.com"
                className={inputClasses(errors.email)}
              />
            </div>

            <div className="relative">
              <label className="block text-xs font-semibold text-gray-700 mb-1.5">Teléfono *</label>
              <input
                type="tel"
                name="telefono"
                value={formData.telefono}
                onChange={handleChange}
                placeholder="+34 600 000 000"
                className={inputClasses(errors.telefono)}
              />
            </div>
          </div>

          {/* Fila 3: Menus Desplegables Optimizados */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="relative group">
              <label className="block text-xs font-semibold text-gray-700 mb-1.5">Nivel *</label>
              <div className="relative">
                <select
                  name="nivel"
                  value={formData.nivel}
                  onChange={handleChange}
                  className={selectClasses(errors.nivel)}
                >
                  <option value="">Selecciona el nivel</option>
                  <option value="lactantes">Lactantes</option>
                  <option value="maternal">Maternal</option>
                  <option value="preescolar">Preescolar</option>
                  <option value="primaria">Primaria</option>
                </select>
                {/* Flecha personalizada para que no se vea desproporcionada */}
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-400">
                  <svg className="h-4 w-4 fill-current" viewBox="0 0 20 20"><path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"/></svg>
                </div>
              </div>
              {errors.nivel && <p className="text-red-500 text-[10px] mt-1">✕ {errors.nivel}</p>}
            </div>

            <div className="relative">
              <label className="block text-xs font-semibold text-gray-700 mb-1.5">Nombre Apoderado *</label>
              <input
                type="text"
                name="apoderado"
                value={formData.apoderado}
                onChange={handleChange}
                placeholder="Nombre del apoderado"
                className={inputClasses(errors.apoderado)}
              />
            </div>

            <div className="relative group">
              <label className="block text-xs font-semibold text-gray-700 mb-1.5">Disponibilidad *</label>
              <div className="relative">
                <select
                  name="disponibilidad"
                  value={formData.disponibilidad}
                  onChange={handleChange}
                  className={selectClasses(errors.disponibilidad)}
                >
                  <option value="">¿Cuándo visitar?</option>
                  <option value="manana">Mañana</option>
                  <option value="tarde">Tarde</option>
                  <option value="flexible">Flexible</option>
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-400">
                  <svg className="h-4 w-4 fill-current" viewBox="0 0 20 20"><path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"/></svg>
                </div>
              </div>
            </div>
          </div>

          {/* Términos */}
          <div className="flex items-start gap-2 p-3 bg-gray-50 rounded-lg border border-gray-200">
            <input
              type="checkbox"
              name="terminos"
              id="terminos"
              checked={formData.terminos}
              onChange={handleChange}
              className="w-4 h-4 mt-0.5 cursor-pointer rounded transition-all"
              style={{ accentColor: '#0E2976' }}
            />
            <label htmlFor="terminos" className="text-[11px] text-gray-600 cursor-pointer flex-1 leading-snug">
              Acepto los <a href="#" className="font-semibold hover:underline" style={{ color: '#0E2976' }}>términos y condiciones</a> y la <a href="#" className="font-semibold hover:underline" style={{ color: '#0E2976' }}>política de privacidad</a> *
            </label>
          </div>

          <button
            type="submit"
            disabled={isLoading}
            className="w-full text-white font-bold py-3 px-6 rounded-lg text-sm hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300 disabled:opacity-70 flex items-center justify-center gap-2"
            style={{ background: 'linear-gradient(135deg, #0E2976 0%, #1a3a7a 100%)' }}
          >
            {isLoading ? "Enviando..." : "✦ Solicitar admisión"}
          </button>

          <p className="text-gray-500 text-center text-[10px]">
            * Campos requeridos para el proceso de inscripción
          </p>
        </form>
      </div>
    </div>
  );
};

export default HeroForm;