/**
 * Validaciones para el formulario del HeroSection
 */

// Validar nombre
export const validarNombre = (nombre) => {
  if (!nombre.trim()) {
    return "El nombre es requerido";
  }
  if (nombre.trim().length < 3) {
    return "El nombre debe tener al menos 3 caracteres";
  }
  if (!/^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/.test(nombre)) {
    return "El nombre solo debe contener letras";
  }
  return null;
};

// Validar apellido
export const validarApellido = (apellido) => {
  if (!apellido.trim()) {
    return "El apellido es requerido";
  }
  if (apellido.trim().length < 3) {
    return "El apellido debe tener al menos 3 caracteres";
  }
  if (!/^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/.test(apellido)) {
    return "El apellido solo debe contener letras";
  }
  return null;
};

// Validar email
export const validarEmail = (email) => {
  if (!email.trim()) {
    return "El email es requerido";
  }
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return "Email inválido";
  }
  return null;
};

// Validar teléfono
export const validarTelefono = (telefono) => {
  if (!telefono.trim()) {
    return "El teléfono es requerido";
  }
  if (!/^\+?[\d\s\-()]{10,}$/.test(telefono.replace(/\s/g, ""))) {
    return "Teléfono inválido (mínimo 10 dígitos)";
  }
  return null;
};

// Validar idioma
export const validarIdioma = (idioma) => {
  if (!idioma) {
    return "Selecciona un idioma";
  }
  return null;
};

// Validar nivel
export const validarNivel = (nivel) => {
  if (!nivel) {
    return "Selecciona tu nivel de experiencia";
  }
  return null;
};

// Validar disponibilidad
export const validarDisponibilidad = (disponibilidad) => {
  if (!disponibilidad) {
    return "Selecciona tu disponibilidad";
  }
  return null;
};

// Validar aceptación de términos
export const validarTerminos = (terminos) => {
  if (!terminos) {
    return "Debes aceptar los términos y condiciones";
  }
  return null;
};

// Validar todo el formulario
export const validarFormulario = (formData) => {
  const errores = {};

  const validaciones = {
    nombre: validarNombre,
    apellido: validarApellido,
    email: validarEmail,
    telefono: validarTelefono,
    idioma: validarIdioma,
    nivel: validarNivel,
    disponibilidad: validarDisponibilidad,
    terminos: validarTerminos,
  };

  for (const [campo, validar] of Object.entries(validaciones)) {
    const error = validar(formData[campo]);
    if (error) {
      errores[campo] = error;
    }
  }

  return errores;
};
