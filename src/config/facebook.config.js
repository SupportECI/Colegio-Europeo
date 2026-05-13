// Configuración de Facebook Graph API - OBSOLETO
// Las credenciales ahora están directamente en FacebookFeed.jsx
// Este archivo se mantiene solo como respaldo

export const FACEBOOK_CONFIG = {
  PAGE_ID: '452806151429699',
  TOKEN: 'EAASQDJ9TK0EBRXp0swNZAskkp4tiBZA55Hyw6WjLaqGjuz1dZCJjZBZBgE0SpPfgIZBcR42zCBzjAMyhSpBC84Ely6lZCRw2mxBX7wZAbxl0qebzcn3pCQPRsVHGNgjSrNqpgXxDo44fcNUjI3PZCV259cZC2685nkGsEdZA0HsaRXRZBjD6vqQLetdAoyusRDZCuvjmSNpOJ8GquZAjns3xbqZBew5',
  API_VERSION: 'v21.0',
  FIELDS: ['id', 'message', 'full_picture', 'permalink_url', 'created_time', 'story', 'type'],
  LIMIT: 8,
};

export const isTokenConfigured = () => {
  return FACEBOOK_CONFIG.TOKEN && FACEBOOK_CONFIG.TOKEN.length > 15;
};

export const getFacebookApiUrl = () => {
  const fields = FACEBOOK_CONFIG.FIELDS.join(',');
  return `https://graph.facebook.com/${FACEBOOK_CONFIG.API_VERSION}/${FACEBOOK_CONFIG.PAGE_ID}/feed?fields=${fields}&limit=${FACEBOOK_CONFIG.LIMIT}&access_token=${FACEBOOK_CONFIG.TOKEN}`;
};
