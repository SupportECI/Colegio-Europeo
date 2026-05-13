// Configuración de Facebook Graph API - OBSOLETO
// Las credenciales ahora están directamente en FacebookFeed.jsx
// Este archivo se mantiene solo como respaldo

export const FACEBOOK_CONFIG = {
  PAGE_ID: '452806151429699',
  TOKEN: 'EAAdShPd7GKYBRSIjeYeRIZAFaAs02YyzjHVPuvykoyfNURl3BxUfKbTx3a8FCKw4vcvxUSTaEMXZAlch4w5Jt2FRIsr5RFupwVS7M7dgaYEHUiZCSEhYfdKbhpZAsZCWPjBGnbPZCPcvIZAXJ954v5ge3YPGt9NQQLfpvw3CjrWFOBv4iXDLgzuBWjLTpq35wHRzj74VUahnw4843KP19F8vzpLRe7qSI2PXkqjMZA87ZCmZADBc28IT4DuU50',
  API_VERSION: 'v21.0',
  FIELDS: ['id', 'message', 'full_picture', 'permalink_url', 'created_time', 'story', 'type'],
  LIMIT: 6,
};

export const isTokenConfigured = () => {
  return FACEBOOK_CONFIG.TOKEN && FACEBOOK_CONFIG.TOKEN.length > 10;
};

export const getFacebookApiUrl = () => {
  const fields = FACEBOOK_CONFIG.FIELDS.join(',');
  return `https://graph.facebook.com/${FACEBOOK_CONFIG.API_VERSION}/${FACEBOOK_CONFIG.PAGE_ID}/feed?fields=${fields}&limit=${FACEBOOK_CONFIG.LIMIT}&access_token=${FACEBOOK_CONFIG.TOKEN}`;
};
