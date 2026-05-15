// Configuración de Facebook Graph API - OBSOLETO
// Las credenciales ahora están directamente en FacebookFeed.jsx
// Este archivo se mantiene solo como respaldo

export const FACEBOOK_CONFIG = {
  PAGE_ID: '206978189701672',
  TOKEN: 'EAAeM5afZAOlsBReUVhfZCLxvJ2VeFRGtaZCOmNH7K6IsmzQMlkwLX3MTyRfVXuv9ZBrDdFW39unM7ZAla94s46ZAaDAxdDrHpGx48hFFmcwdZAm60qJIZAGEztewdsVEI8aZAIlZABTztl0bDm5vPqCR1ZCMaC3IkQtyxX3lqSmLN2g42VhAXGl3ZB1LZBgxTRyvlpr3FT4KVpcgZCLfuQzKLKIbnWcJkZD',
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
