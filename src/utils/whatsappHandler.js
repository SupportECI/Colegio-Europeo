/**
 * Manejador para enviar datos del formulario a WhatsApp
 * Compatible con todos los navegadores: Chrome, Firefox, Safari, Edge
 * Funciona en dispositivos móviles y de escritorio
 */

// Número de WhatsApp del Centro Educativo Europeo (con código de país México)
const WHATSAPP_NUMBER = "529616066550";

/**
 * Detecta si el dispositivo es móvil
 * @returns {boolean} True si es móvil, false si es escritorio
 */
function isMobile() {
  const userAgent = navigator.userAgent.toLowerCase();
  return /android|webos|iphone|ipad|ipod|blackberry|iemobile|opera mini/.test(
    userAgent
  );
}

/**
 * Detecta el navegador utilizado
 * @returns {string} Nombre del navegador
 */
function detectBrowser() {
  const userAgent = navigator.userAgent;
  
  if (userAgent.match(/edg/i)) return "Edge";
  if (userAgent.match(/chrome|chromium|crios/i)) return "Chrome";
  if (userAgent.match(/firefox|fxios/i)) return "Firefox";
  if (userAgent.match(/safari/i)) return "Safari";
  if (userAgent.match(/opr\//i)) return "Opera";
  
  return "Unknown";
}

/**
 * Abre WhatsApp usando el método más compatible
 * Evita bloqueadores de popups y funciona en todos los navegadores
 * @param {string} url - URL de WhatsApp a abrir
 */
function openWhatsApp(url) {
  const browser = detectBrowser();
  const device = isMobile() ? "mobile" : "desktop";
  
  console.log(`Abriendo WhatsApp en ${browser} (${device})`);
  
  try {
    // Intentar con window.open primero (para navegadores que lo permiten)
    const newWindow = window.open(url, "_blank");
    
    // Si window.open retorna null, el popup fue bloqueado
    if (!newWindow) {
      console.warn("Popup bloqueado. Usando método alternativo: navegación directa");
      // Navegación directa (más confiable, no se bloquea como popup)
      window.location.href = url;
    }
  } catch (error) {
    console.error("Error al abrir WhatsApp:", error);
    // Fallback: navegación directa
    window.location.href = url;
  }
}

/**
 * Función que recibe los datos del formulario y abre WhatsApp
 * @param {Object} formData - Objeto con los datos del formulario
 */
function enviarFormulario(formData) {
  // Validar que se recibieron los datos
  if (!formData) {
    console.error("Error: No se recibieron datos del formulario");
    return false;
  }

  // Validar que todos los campos tengan valores
  if (
    !formData.nombre ||
    !formData.apellido ||
    !formData.email ||
    !formData.telefono ||
    !formData.nivel ||
    !formData.disponibilidad
  ) {
    console.warn("Por favor, completa todos los campos antes de enviar.");
    return false;
  }

  // Construir el mensaje con los datos del formulario (URL encoded)
  const textoMensaje = `¡Hola! Vi la página web de su colegio, y me interesa recibir más información, mis datos son:%0ANombre: ${formData.nombre}%0AApellido: ${formData.apellido}%0ACorreo electrónico: ${formData.email}%0AWhatsApp: ${formData.telefono}%0ANivel de interés: ${formData.nivel}%0AInicio: ${formData.disponibilidad}`;

  // Determinar la URL según el dispositivo
  let mensajeURL;
  
  if (isMobile()) {
    // Para móviles: usa wa.me que abre la app si está instalada
    // Más confiable que api.whatsapp.com en dispositivos móviles
    mensajeURL = `https://wa.me/${WHATSAPP_NUMBER}?text=${textoMensaje}`;
  } else {
    // Para escritorio: usa api.whatsapp.com
    // Compatible con todos los navegadores de escritorio
    mensajeURL = `https://api.whatsapp.com/send?phone=${WHATSAPP_NUMBER}&text=${textoMensaje}`;
  }

  // Abrir WhatsApp usando el método más compatible
  openWhatsApp(mensajeURL);

  console.log("✓ Formulario enviado a WhatsApp:", {
    navegador: detectBrowser(),
    dispositivo: isMobile() ? "Móvil" : "Escritorio",
    datos: formData,
  });

  return true;
}

// Hacer la función disponible globalmente para onclick
if (typeof window !== "undefined") {
  window.enviarFormulario = enviarFormulario;
}

export { enviarFormulario };

