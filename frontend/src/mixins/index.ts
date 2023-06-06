export const urlBuilder = (url: string): string => {
  // const { NEXT_PUBLIC_STRAPI_API_URL } = process.env;
  const NEXT_PUBLIC_STRAPI_API_URL = 'https://lobster-app-iw9uv.ondigitalocean.app/';
  const env = process.env.NODE_ENV;
  const prefix = env === 'production' ? '' : env === 'development' ? 'http://localhost:1337/' : ''
  if (!url) return prefix || ''
  console.log(url, prefix, 'url')
  const urlCorrected = url.substring(0,1) === '/' ? url.substring(1) : url;

  return prefix + urlCorrected;
};