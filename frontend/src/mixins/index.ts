export const urlBuilder = (url: string): string => {
  const { NEXT_PUBLIC_STRAPI_API_URL } = process.env;
  const env = process.env.NODE_ENV;
  const prefix = env === 'production' ? NEXT_PUBLIC_STRAPI_API_URL : env === 'development' ? 'http://localhost:1337/' : ''
  if (!url) return prefix || ''
  const urlCorrected = url.substring(0,1) === '/' ? url.substring(1) : url;

  return prefix + urlCorrected;
};