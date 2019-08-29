import resources from './resources';

export const config = {
  interpolation: { escapeValue: false }, // React already does escaping
  lng: 'en',
  fallbackLng: 'en',
  cache: {
    enabled: true,
  },
  resources,
};

export { resources };
