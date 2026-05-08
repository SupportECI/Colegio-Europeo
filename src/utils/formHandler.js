/**
 * Manejador de formulario - Centro Educativo Europeo
 * Estilo: Bento Dashboard White Edition
 */

import Swal from "sweetalert2";

// Paleta basada en blancos y azules institucionales sutiles
const COLOR = {
  primary: "#0E2976",
  textMain: "#1e293b",
  textMuted: "#64748b",
  border: "#f1f5f9",
  white: "#ffffff",
};

const baseStyles = `
  <style>
    @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700&display=swap');

    @keyframes scaleIn {
      from { opacity: 0; transform: scale(0.95) translateY(10px); }
      to { opacity: 1; transform: scale(1) translateY(0); }
    }
    
    @keyframes slideRight {
      from { opacity: 0; transform: translateX(-10px); }
      to { opacity: 1; transform: translateX(0); }
    }

    .swal-bento-white {
      font-family: 'Plus Jakarta Sans', sans-serif !important;
      border-radius: 24px !important;
      padding: 2rem !important;
      box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.05), 0 10px 10px -5px rgba(0, 0, 0, 0.02) !important;
    }

    .dashboard-container {
      animation: scaleIn 0.5s cubic-bezier(0.16, 1, 0.3, 1);
      text-align: left;
    }

    /* Grid tipo Bento */
    .bento-grid {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 12px;
      margin: 20px 0;
    }

    .bento-card {
      background: ${COLOR.white};
      border: 1px solid ${COLOR.border};
      border-radius: 16px;
      padding: 16px;
      transition: all 0.3s ease;
      animation: slideRight 0.4s ease both;
    }

    .bento-card:hover {
      border-color: ${COLOR.primary}44;
      transform: translateY(-2px);
      box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.04);
    }

    /* Delays para las tarjetas */
    .bento-card:nth-child(1) { animation-delay: 0.1s; }
    .bento-card:nth-child(2) { animation-delay: 0.2s; }
    .bento-card:nth-child(3) { animation-delay: 0.3s; }

    .card-label {
      font-size: 10px;
      font-weight: 700;
      text-transform: uppercase;
      letter-spacing: 0.05em;
      color: #94a3b8;
      margin-bottom: 4px;
    }

    .card-value {
      font-size: 13px;
      font-weight: 600;
      color: ${COLOR.textMain};
    }

    /* Botón Minimalista Blanco/Azul */
    .btn-bento-primary {
      background: ${COLOR.primary} !important;
      color: white !important;
      border-radius: 12px !important;
      padding: 14px 30px !important;
      font-weight: 600 !important;
      font-size: 14px !important;
      width: 100%;
      border: none !important;
      box-shadow: 0 4px 6px -1px rgba(14, 41, 118, 0.2) !important;
    }

    .btn-bento-cancel {
      background: transparent !important;
      color: #94a3b8 !important;
      font-weight: 600 !important;
      width: 100%;
      margin-top: 8px !important;
    }

    /* Indicador de estado sutil */
    .status-pill {
      display: inline-flex;
      align-items: center;
      padding: 4px 12px;
      background: #f8fafc;
      border: 1px solid ${COLOR.border};
      border-radius: 99px;
      font-size: 11px;
      font-weight: 600;
      color: ${COLOR.primary};
      margin-bottom: 16px;
    }

    .status-dot {
      width: 6px;
      height: 6px;
      background: ${COLOR.primary};
      border-radius: 50%;
      margin-right: 8px;
    }
  </style>
`;

/**
 * Alerta de Validación (Ahora con diseño Bento)
 */
export const mostrarAlertaValidacion = () => {
  Swal.fire({
    html: `
      ${baseStyles}
      <div class="dashboard-container">
        <div class="status-pill"><span class="status-dot"></span>Acción requerida</div>
        <h2 style="font-size: 22px; font-weight: 700; color: ${COLOR.textMain}; margin: 0;">¡Formulario incompleto!</h2>
        <p style="font-size: 12px; color: ${COLOR.textMuted}; margin-top: 8px;">Se han detectado detalles que impiden procesar tu solicitud.</p>
        
        <div class="bento-grid">
          <div class="bento-card">
            <div class="card-label">Campos (*)</div>
            <div class="card-value">Faltan datos</div>
          </div>
          <div class="bento-card">
            <div class="card-label">Teléfono</div>
            <div class="card-value">Número inválido</div>
          </div>
          <div class="bento-card" style="grid-column: span 2;">
            <div class="card-label">Instrucción</div>
            <div class="card-value">Revisa que todos los datos sean correctos</div>
          </div>
        </div>

        <p style="font-size: 11px; color: #94a3b8; line-height: 1.5;">
          Por favor, completa la información resaltada en el formulario para continuar. <br><br>¡Gracias por tu interés en el <strong>Centro Educativo Europeo!</strong></b>
        </p>
      </div>
    `,
    confirmButtonText: "Volver al formulario",
    customClass: { popup: "swal-bento-white", confirmButton: "btn-bento-primary" },
    buttonsStyling: false,
    width: 440,
  });
};

/**
 * Alerta de Éxito (Se mantiene igual)
 */
export const mostrarAlertaExito = (formData) => {
  const nivelMap = { maternal: "Maternal", preescolar: "Preescolar", primaria: "Primaria" };
  
  Swal.fire({
    html: `
      ${baseStyles}
      <div class="dashboard-container">
        <div class="status-pill"><span class="status-dot"></span>Admisión Procesada</div>
        <h2 style="font-size: 22px; font-weight: 700; color: ${COLOR.textMain}; margin: 0;">¡Hola, ${formData.nombre}!</h2>
        <p style="font-size: 14px; color: ${COLOR.textMuted}; margin-top: 8px;">Hemos registrado tu solicitud correctamente en nuestro sistema.</p>
        
        <div class="bento-grid">
          <div class="bento-card">
            <div class="card-label">Programa</div>
            <div class="card-value">${nivelMap[formData.nivel] || formData.nivel}</div>
          </div>
          <div class="bento-card">
            <div class="card-label">Contacto</div>
            <div class="card-value">${formData.telefono}</div>
          </div>
          <div class="bento-card" style="grid-column: span 2;">
            <div class="card-label">Disponibilidad</div>
            <div class="card-value">${formData.disponibilidad}</div>
          </div>
          <div class="bento-card" style="grid-column: span 2;">
            <div class="card-label">Email de Seguimiento</div>
            <div class="card-value">${formData.email}</div>
          </div>
        </div>

        <p style="font-size: 11px; color: #94a3b8; line-height: 1.5;">
          Un asesor académico del <strong>Centro Educativo Europeo</strong> se comunicará contigo para los siguientes pasos.
        </p>
      </div>
    `,
    confirmButtonText: "Entendido",
    customClass: { popup: "swal-bento-white", confirmButton: "btn-bento-primary" },
    buttonsStyling: false,
    width: 440,
  });
};

/**
 * Resto de funciones (Confirmación, Error, Handlers)
 */
export const mostrarAlertaConfirmacion = () => {
  return Swal.fire({
    html: `
      ${baseStyles}
      <div class="dashboard-container">
        <div class="status-pill"><span class="status-dot"></span>Confirmación</div>
        <h2 style="font-size: 20px; font-weight: 700; color: ${COLOR.textMain}; margin: 0;">¿Enviar solicitud?</h2>
        <p style="font-size: 14px; color: ${COLOR.textMuted}; margin-top: 8px;">Tu información será enviada al departamento de admisiones del colegio.</p>
        
        <div class="bento-card" style="margin: 20px 0; background: #fcfcfc;">
          <div class="card-label">Nota importante</div>
          <div class="card-value" style="font-weight: 400; font-size: 12px;">Al confirmar, aceptas ser contactado por nuestro personal docente.</div>
        </div>
      </div>
    `,
    showCancelButton: true,
    confirmButtonText: "Confirmar envío",
    cancelButtonText: "Cancelar",
    customClass: {
      popup: "swal-bento-white",
      confirmButton: "btn-bento-primary",
      cancelButton: "btn-bento-cancel"
    },
    buttonsStyling: false,
    width: 400,
  });
};

export const mostrarAlertaError = () => {
  Swal.fire({
    html: `
      ${baseStyles}
      <div class="dashboard-container">
        <div class="status-pill" style="color: #ef4444;"><span class="status-dot" style="background: #ef4444;"></span>Error de conexión</div>
        <h2 style="font-size: 20px; font-weight: 700; color: ${COLOR.textMain}; margin: 0;">No se pudo enviar</h2>
        <p style="font-size: 14px; color: ${COLOR.textMuted}; margin-top: 8px;">Tuvimos un problema técnico al procesar tus datos.</p>
        
        <div class="bento-card" style="margin-top: 20px; border-color: #fee2e2;">
          <div class="card-value" style="color: #991b1b;">Por favor, verifica tu conexión e intenta de nuevo.</div>
        </div>
      </div>
    `,
    confirmButtonText: "Reintentar",
    customClass: { popup: "swal-bento-white", confirmButton: "btn-bento-primary" },
    buttonsStyling: false,
    width: 400,
  });
};

export const limpiarFormulario = (setFormData, setErrors) => {
  setFormData({ nombre: "", apellido: "", email: "", telefono: "", nivel: "", disponibilidad: "" });
  setErrors({});
};

export const manejarCambio = (e, setFormData, setErrors) => {
  const { name, value, type, checked } = e.target;
  setFormData((prev) => ({ ...prev, [name]: type === "checkbox" ? checked : value }));
  setErrors((prev) => ({ ...prev, [name]: undefined }));
};