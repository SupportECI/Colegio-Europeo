/**
 * Manejador de formulario con SweetAlert2
 */

import Swal from "sweetalert2";

// Paleta de colores base
const COLOR = {
  primary: "#0E2976",
  primaryLight: "#1a3a7a",
  success: "#10b981",
  error: "#ef4444",
  warning: "#f59e0b",
  gray: "#6b7280",
};

// Estilos base compartidos para todas las alertas
const baseStyles = `
  <style>
    @keyframes fadeSlideIn {
      from { opacity: 0; transform: translateY(16px); }
      to   { opacity: 1; transform: translateY(0); }
    }
    @keyframes scaleIn {
      from { opacity: 0; transform: scale(0.92); }
      to   { opacity: 1; transform: scale(1); }
    }
    @keyframes shimmer {
      0%   { background-position: -200% center; }
      100% { background-position:  200% center; }
    }
    @keyframes pulse-dot {
      0%, 100% { opacity: 1; transform: scale(1); }
      50%       { opacity: 0.4; transform: scale(0.75); }
    }

    .swal-dashboard {
      font-family: 'Inter', system-ui, sans-serif;
      animation: scaleIn 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
    }

    /* Bento grid de 2 columnas */
    .bento-grid {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 10px;
      margin-top: 16px;
    }
    .bento-grid .bento-full {
      grid-column: 1 / -1;
    }

    /* Tarjeta bento */
    .bento-card {
      background: #f8fafc;
      border: 1px solid #e2e8f0;
      border-radius: 12px;
      padding: 12px 14px;
      text-align: left;
      animation: fadeSlideIn 0.4s ease both;
      transition: box-shadow 0.2s;
    }
    .bento-card:hover { box-shadow: 0 4px 16px rgba(14,41,118,0.08); }
    .bento-card:nth-child(1) { animation-delay: 0.05s; }
    .bento-card:nth-child(2) { animation-delay: 0.10s; }
    .bento-card:nth-child(3) { animation-delay: 0.15s; }
    .bento-card:nth-child(4) { animation-delay: 0.20s; }

    .bento-label {
      font-size: 10px;
      font-weight: 600;
      letter-spacing: 0.08em;
      text-transform: uppercase;
      color: #94a3b8;
      margin-bottom: 4px;
    }
    .bento-value {
      font-size: 13px;
      font-weight: 600;
      color: #1e293b;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }
    .bento-icon {
      font-size: 16px;
      margin-bottom: 6px;
      display: block;
    }

    /* Badge de estado */
    .status-badge {
      display: inline-flex;
      align-items: center;
      gap: 6px;
      background: #ecfdf5;
      border: 1px solid #a7f3d0;
      border-radius: 99px;
      padding: 4px 12px;
      font-size: 11px;
      font-weight: 600;
      color: #059669;
      margin-bottom: 12px;
    }
    .status-dot {
      width: 6px; height: 6px;
      border-radius: 50%;
      background: #10b981;
      animation: pulse-dot 1.4s ease-in-out infinite;
    }

    /* Shimmer para el título de éxito */
    .shimmer-text {
      background: linear-gradient(90deg, #0E2976 25%, #3b82f6 50%, #0E2976 75%);
      background-size: 200% auto;
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      animation: shimmer 2.5s linear infinite;
    }

    /* Divider */
    .swal-divider {
      height: 1px;
      background: linear-gradient(to right, transparent, #e2e8f0, transparent);
      margin: 14px 0;
    }

    /* Footer note */
    .swal-footnote {
      font-size: 11px;
      color: #94a3b8;
      margin-top: 14px;
      text-align: center;
      animation: fadeSlideIn 0.5s ease 0.3s both;
    }

    /* Warning grid especial */
    .warning-list {
      display: flex;
      flex-direction: column;
      gap: 8px;
      margin-top: 12px;
      text-align: left;
    }
    .warning-item {
      display: flex;
      align-items: center;
      gap: 10px;
      background: #fffbeb;
      border: 1px solid #fde68a;
      border-radius: 10px;
      padding: 10px 12px;
      font-size: 12px;
      color: #92400e;
      font-weight: 500;
      animation: fadeSlideIn 0.35s ease both;
    }
    .warning-item:nth-child(1) { animation-delay: 0.05s; }
    .warning-item:nth-child(2) { animation-delay: 0.12s; }
    .warning-item:nth-child(3) { animation-delay: 0.19s; }
    .warning-item-icon {
      font-size: 15px;
      flex-shrink: 0;
    }

    /* Confirm button override */
    .swal2-confirm.swal-btn-primary {
      background: linear-gradient(135deg, #0E2976, #1a3a7a) !important;
      border: none !important;
      border-radius: 10px !important;
      font-weight: 600 !important;
      letter-spacing: 0.02em !important;
      padding: 10px 28px !important;
      transition: opacity 0.2s, transform 0.2s !important;
    }
    .swal2-confirm.swal-btn-primary:hover {
      opacity: 0.9 !important;
      transform: translateY(-1px) !important;
    }
    .swal2-cancel.swal-btn-cancel {
      border-radius: 10px !important;
      font-weight: 600 !important;
      padding: 10px 28px !important;
    }
  </style>
`;

/**
 * Muestra una alerta de validación con SweetAlert2
 */
export const mostrarAlertaValidacion = () => {
  Swal.fire({
    html: `
      ${baseStyles}
      <div class="swal-dashboard">
        <div style="font-size:36px; margin-bottom:8px;">⚠️</div>
        <div style="font-size:18px; font-weight:700; color:#1e293b; margin-bottom:4px;">
          Campos incompletos
        </div>
        <div style="font-size:13px; color:#64748b; margin-bottom:2px;">
          Revisa los siguientes puntos antes de continuar
        </div>

        <div class="swal-divider"></div>

        <div class="warning-list">
          <div class="warning-item">
            <span class="warning-item-icon">📋</span>
            Completa todos los campos marcados con *
          </div>
          <div class="warning-item">
            <span class="warning-item-icon">✉️</span>
            Verifica que tu email tenga un formato válido
          </div>
          <div class="warning-item">
            <span class="warning-item-icon">📱</span>
            El teléfono debe tener al menos 10 dígitos
          </div>
        </div>

        <p class="swal-footnote">Todos los campos son necesarios para procesar tu solicitud.</p>
      </div>
    `,
    showConfirmButton: true,
    confirmButtonText: "Entendido",
    customClass: { confirmButton: "swal-btn-primary" },
    buttonsStyling: false,
    allowOutsideClick: false,
    background: "#ffffff",
    width: 400,
  });
};

/**
 * Muestra alerta de éxito después de envío
 */
export const mostrarAlertaExito = (formData) => {
  const nivelMap = {
    maternal: "Maternal",
    preescolar: "Preescolar",
    primaria: "Primaria",
  };
  const disponibilidadMap = {
    inmediato: "Inmediato",
    un_mes: "En 1 mes",
    dos_tres_meses: "2 - 3 meses",
    proximo_ciclo: "Próximo ciclo",
  };

  Swal.fire({
    html: `
      ${baseStyles}
      <div class="swal-dashboard">

        <div class="status-badge">
          <span class="status-dot"></span>
          Solicitud procesada
        </div>

        <div style="font-size:22px; font-weight:800; margin-bottom:4px;" class="shimmer-text">
          ¡Todo listo, ${formData.nombre}!
        </div>
        <div style="font-size:13px; color:#64748b; margin-bottom:2px;">
          Tu solicitud de admisión fue enviada correctamente
        </div>

        <div class="swal-divider"></div>

        <div class="bento-grid">
          <div class="bento-card">
            <span class="bento-icon">👤</span>
            <div class="bento-label">Solicitante</div>
            <div class="bento-value">${formData.nombre} ${formData.apellido}</div>
          </div>
          <div class="bento-card">
            <span class="bento-icon">🎓</span>
            <div class="bento-label">Nivel</div>
            <div class="bento-value">${nivelMap[formData.nivel] || formData.nivel}</div>
          </div>
          <div class="bento-card">
            <span class="bento-icon">✉️</span>
            <div class="bento-label">Email</div>
            <div class="bento-value">${formData.email}</div>
          </div>
          <div class="bento-card">
            <span class="bento-icon">📱</span>
            <div class="bento-label">Teléfono</div>
            <div class="bento-value">${formData.telefono}</div>
          </div>
          <div class="bento-card bento-full">
            <span class="bento-icon">📅</span>
            <div class="bento-label">Incorporación</div>
            <div class="bento-value">${disponibilidadMap[formData.disponibilidad] || formData.disponibilidad}</div>
          </div>
        </div>

        <p class="swal-footnote">Nos pondremos en contacto contigo a la brevedad posible.</p>
      </div>
    `,
    showConfirmButton: true,
    confirmButtonText: "Cerrar",
    customClass: { confirmButton: "swal-btn-primary" },
    buttonsStyling: false,
    allowOutsideClick: false,
    background: "#ffffff",
    width: 440,
  });
};

/**
 * Muestra alerta de error en el envío
 */
export const mostrarAlertaError = () => {
  Swal.fire({
    html: `
      ${baseStyles}
      <div class="swal-dashboard">
        <div style="font-size:36px; margin-bottom:8px;">❌</div>
        <div style="font-size:18px; font-weight:700; color:#1e293b; margin-bottom:4px;">
          Error al enviar
        </div>
        <div style="font-size:13px; color:#64748b;">
          No pudimos procesar tu solicitud en este momento
        </div>

        <div class="swal-divider"></div>

        <div class="bento-card bento-full" style="background:#fef2f2; border-color:#fecaca; margin-top:4px;">
          <span class="bento-icon">🔌</span>
          <div class="bento-label" style="color:#f87171;">Posibles causas</div>
          <div style="font-size:12px; color:#7f1d1d; line-height:1.6; margin-top:4px;">
            Verifica tu conexión a internet e intenta de nuevo.<br/>
            Si el problema persiste, contáctanos directamente.
          </div>
        </div>

        <p class="swal-footnote">Error de red o servidor. Código: 500</p>
      </div>
    `,
    showConfirmButton: true,
    confirmButtonText: "Intentar de nuevo",
    customClass: { confirmButton: "swal-btn-primary" },
    buttonsStyling: false,
    background: "#ffffff",
    width: 400,
  });
};

/**
 * Muestra alerta de confirmación
 */
export const mostrarAlertaConfirmacion = () => {
  return Swal.fire({
    html: `
      ${baseStyles}
      <div class="swal-dashboard">
        <div style="font-size:36px; margin-bottom:8px;">🚀</div>
        <div style="font-size:18px; font-weight:700; color:#1e293b; margin-bottom:4px;">
          ¿Confirmas el envío?
        </div>
        <div style="font-size:13px; color:#64748b;">
          Revisa que tu información sea correcta antes de continuar
        </div>

        <div class="swal-divider"></div>

        <div class="bento-card bento-full" style="margin-top:4px;">
          <div style="font-size:12px; color:#475569; line-height:1.7;">
            Al confirmar, recibirás una respuesta de nuestro equipo<br/>
            en un plazo de <strong>24 a 48 horas hábiles</strong>.
          </div>
        </div>

        <p class="swal-footnote">Esta acción no se puede deshacer.</p>
      </div>
    `,
    showCancelButton: true,
    confirmButtonText: "Sí, enviar",
    cancelButtonText: "Cancelar",
    customClass: {
      confirmButton: "swal-btn-primary",
      cancelButton: "swal-btn-cancel",
    },
    buttonsStyling: false,
    allowOutsideClick: false,
    background: "#ffffff",
    width: 400,
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
    // terminos: false, // descomentar si se requiere en el futuro
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

  setErrors((prev) => ({
    ...prev,
    [name]: undefined,
  }));
};