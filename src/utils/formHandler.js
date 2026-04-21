/**
 * Manejador de formulario con SweetAlert2
 */

import Swal from "sweetalert2";

/**
 * Muestra una alerta de validación con SweetAlert2
 */
export const mostrarAlertaValidacion = () => {
  Swal.fire({
    icon: "warning",
    title: "Campos incompletos",
    text: "Por favor completa todos los campos requeridos antes de enviar el formulario.",
    confirmButtonColor: "#1211ab",
    confirmButtonText: "Aceptar",
    allowOutsideClick: false,
  });
};

/**
 * Muestra alerta de éxito después de envío
 */
export const mostrarAlertaExito = (formData) => {
  Swal.fire({
    icon: "success",
    title: "¡Solicitud enviada!",
    html: `
      <p style="text-align: left; margin: 10px 0;">
        <strong>Gracias ${formData.nombre}!</strong><br/>
        <br/>
        Hemos recibido tu solicitud de clase muestra. 
        Nos pondremos en contacto pronto a través de:
        <br/><br/>
        <strong>📧</strong> ${formData.email}<br/>
        <strong>📱</strong> ${formData.telefono}
      </p>
    `,
    confirmButtonColor: "#1211ab",
    confirmButtonText: "Cerrar",
    allowOutsideClick: false,
    didOpen: () => {
      Swal.showLoading();
      setTimeout(() => {
        Swal.hideLoading();
      }, 2000);
    },
  });
};

/**
 * Muestra alerta de error en el envío
 */
export const mostrarAlertaError = () => {
  Swal.fire({
    icon: "error",
    title: "Error",
    text: "Hubo un problema al enviar el formulario. Intenta de nuevo.",
    confirmButtonColor: "#1211ab",
    confirmButtonText: "Aceptar",
  });
};

/**
 * Muestra alerta de confirmación
 */
export const mostrarAlertaConfirmacion = () => {
  return Swal.fire({
    icon: "info",
    title: "Confirmación",
    text: "¿Estás seguro de que deseas enviar el formulario?",
    showCancelButton: true,
    confirmButtonColor: "#1211ab",
    cancelButtonColor: "#6b7280",
    confirmButtonText: "Sí, enviar",
    cancelButtonText: "Cancelar",
    allowOutsideClick: false,
  });
};

/**
 * Limpia el formulario
 */
export const limpiarFormulario = (setFormData, setErrors) => {
  setFormData({
    nombre: "",
    apellido: "",
    email: "",
    telefono: "",
    nivel: "",
    disponibilidad: "",
    terminos: false,
  });
  setErrors({});
};

/**
 * Maneja el cambio de input
 */
export const manejarCambio = (e, setFormData, setErrors) => {
  const { name, value, type, checked } = e.target;

  setFormData((prev) => ({
    ...prev,
    [name]: type === "checkbox" ? checked : value,
  }));

  // Limpiar error del campo cuando el usuario empieza a escribir
  setErrors((prev) => ({
    ...prev,
    [name]: undefined,
  }));
};
