export const urlBuilder = (url: string) => {
  if (!url) return
  const { NEXT_PUBLIC_STRAPI_API_URL } = process.env;
  const env = process.env.NODE_ENV;
  const urlCorrected = url.substring(0,1) === '/' ? url.substring(1) : url;

  if (env == "development") {
    return 'http://localhost:1337/' + urlCorrected
  } else if (env == "production") {
    return NEXT_PUBLIC_STRAPI_API_URL + urlCorrected;
  }

  
  return NEXT_PUBLIC_STRAPI_API_URL + urlCorrected;
};