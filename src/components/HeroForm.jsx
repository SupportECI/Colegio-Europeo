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

  // AJUSTE: Aumenté py-3 en móvil y text-base para evitar el zoom automático en iOS
  const inputClasses = (error) => `
    w-full px-4 py-3 sm:py-3 lg:py-3.5 rounded-xl border-2 text-base sm:text-sm lg:text-base transition-all duration-300
    focus:outline-none focus:ring-4 focus:scale-[1.01]
    placeholder:text-gray-300 placeholder:text-sm
    shadow-sm hover:shadow-md
    ${error
      ? "border-red-400 bg-red-50 focus:ring-red-400/20"
      : "border-gray-100 hover:border-gray-200 focus:border-[#0E2976] focus:ring-[#0E2976]/10"
    }
  `;

  const selectClasses = (error) => `
    w-full pl-4 pr-10 py-3 sm:py-3 lg:py-3.5 rounded-xl border-2 text-base sm:text-sm lg:text-base transition-all duration-300
    focus:outline-none focus:ring-4 bg-white cursor-pointer text-gray-700 focus:scale-[1.01]
    appearance-none shadow-sm hover:shadow-md
    ${error
      ? "border-red-400 bg-red-50 focus:ring-red-400/20"
      : "border-gray-100 hover:border-gray-200 focus:border-[#0E2976] focus:ring-[#0E2976]/10"
    }
  `;

  // AJUSTE: Etiquetas más legibles (text-xs en móvil, antes eran 10px)
  const labelClasses = "block text-xs sm:text-xs font-bold text-gray-500 uppercase tracking-wider mb-2 group-focus-within:text-[#0E2976] transition-colors";
  const fieldClasses = "relative group";
  const errorClasses = "text-red-500 text-xs mt-1.5 flex items-center gap-1 font-medium";

  return (
    <div className="w-full max-w-xl mx-auto lg:max-w-none">
      <div className="bg-white rounded-[2rem] shadow-2xl border border-gray-50 p-6 sm:p-8 lg:p-10">

        {/* Encabezado: Más aire y textos más grandes */}
        <div className="mb-6 sm:mb-8 pb-6 border-b border-gray-50">
          <div className="flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left gap-4">
            <div className="h-14 w-14 rounded-2xl flex items-center justify-center flex-shrink-0 bg-[#0E2976]/5">
              <img
                src="./src/assets/images/logo.svg"
                alt="Logo"
                className="h-8 w-auto"
              />
            </div>
            <div>
              <h2 className="text-xl sm:text-2xl font-black text-[#0E2976] tracking-tight">
                Solicita la admisión
              </h2>
              <p className="text-gray-400 text-sm sm:text-base mt-1">
                Déjanos tus datos y te guiaremos en el proceso.
              </p>
            </div>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5">

          {/* Fila 1 — Ahora es 1 columna en móvil para que el input sea ancho */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className={fieldClasses}>
              <label className={labelClasses}>Nombre *</label>
              <input
                type="text"
                name="nombre"
                value={formData.nombre}
                onChange={handleChange}
                placeholder="Ej. Juan"
                className={inputClasses(errors.nombre)}
              />
              {errors.nombre && (
                <p className={errorClasses}><span>✕</span> {errors.nombre}</p>
              )}
            </div>

            <div className={fieldClasses}>
              <label className={labelClasses}>Apellido *</label>
              <input
                type="text"
                name="apellido"
                value={formData.apellido}
                onChange={handleChange}
                placeholder="Ej. Pérez"
                className={inputClasses(errors.apellido)}
              />
              {errors.apellido && (
                <p className={errorClasses}><span>✕</span> {errors.apellido}</p>
              )}
            </div>
          </div>

          {/* Fila 2 — Email y Teléfono */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className={fieldClasses}>
              <label className={labelClasses}>Email Institucional *</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="correo@ejemplo.com"
                className={inputClasses(errors.email)}
              />
              {errors.email && (
                <p className={errorClasses}><span>✕</span> {errors.email}</p>
              )}
            </div>

            <div className={fieldClasses}>
              <label className={labelClasses}>WhatsApp *</label>
              <input
                type="tel"
                name="telefono"
                value={formData.telefono}
                onChange={handleChange}
                placeholder="961 123 4567"
                className={inputClasses(errors.telefono)}
              />
              {errors.telefono && (
                <p className={errorClasses}><span>✕</span> {errors.telefono}</p>
              )}
            </div>
          </div>

          {/* Fila 3 — Nivel e Incorporación */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className={fieldClasses}>
              <label className={labelClasses}>Nivel de Interés *</label>
              <div className="relative">
                <select
                  name="nivel"
                  value={formData.nivel}
                  onChange={handleChange}
                  className={selectClasses(errors.nivel)}
                >
                  <option value="">Selecciona nivel</option>
                  <option value="maternal">Maternal</option>
                  <option value="preescolar">Preescolar</option>
                  <option value="primaria">Primaria</option>
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-3 text-gray-400">
                  <svg className="h-5 w-5 fill-current" viewBox="0 0 20 20">
                    <path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" />
                  </svg>
                </div>
              </div>
              {errors.nivel && (
                <p className={errorClasses}><span>✕</span> {errors.nivel}</p>
              )}
            </div>

            <div className={fieldClasses}>
              <label className={labelClasses}>¿Cuándo iniciaría? *</label>
              <div className="relative">
                <select
                  name="disponibilidad"
                  value={formData.disponibilidad}
                  onChange={handleChange}
                  className={selectClasses(errors.disponibilidad)}
                >
                  <option value="">Selecciona fecha</option>
                  <option value="inmediato">Inmediato</option>
                  <option value="un_mes">En 1 mes</option>
                  <option value="dos_tres_meses">2 a 3 meses</option>
                  <option value="proximo_ciclo">Próximo ciclo</option>
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-3 text-gray-400">
                  <svg className="h-5 w-5 fill-current" viewBox="0 0 20 20">
                    <path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" />
                  </svg>
                </div>
              </div>
              {errors.disponibilidad && (
                <p className={errorClasses}><span>✕</span> {errors.disponibilidad}</p>
              )}
            </div>
          </div>

          {/* Botón Submit: Mucho más grande y táctil */}
          <div className="pt-4">
            <button
              type="submit"
              disabled={isLoading}
              className="w-full text-white font-bold py-4 sm:py-5 px-6 rounded-2xl text-base sm:text-lg hover:shadow-[0_20px_50px_rgba(14,41,118,0.3)] hover:-translate-y-1 active:translate-y-0 transition-all duration-300 disabled:opacity-60 disabled:cursor-not-allowed flex items-center justify-center gap-3"
              style={{ background: "linear-gradient(135deg, #0E2976 0%, #2563eb 100%)" }}
            >
              {isLoading ? (
                <>
                  <svg className="animate-spin h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                  </svg>
                  <span>Procesando...</span>
                </>
              ) : (
                <>
                  <span>Enviar solicitud ahora</span>
                  <span className="text-xl">→</span>
                </>
              )}
            </button>

            <p className="text-gray-400 text-center text-xs mt-4 italic">
              Al enviar, un asesor se comunicará contigo en menos de 24hrs.
            </p>
          </div>

        </form>
      </div>
    </div>
  );
};

export default HeroForm;