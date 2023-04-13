export const urlBuilder = (url: string) => {
  const { NEXT_PUBLIC_STRAPI_API_URL } = process.env;
  const env = process.env.NODE_ENV;
  if (env == "development") {
    return 'http://localhost:1337' + url
  } else if (env == "production") {
    return NEXT_PUBLIC_STRAPI_API_URL + url;
  }

  
  return NEXT_PUBLIC_STRAPI_API_URL + url;
};