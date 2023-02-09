import App from "next/app";
import Head from "next/head";
import "../styles/global.scss";
import { createContext } from "react";
// import { fetchAPI } from "../lib/api";
import { getStrapiMedia } from "../lib/media";
import Header from "@src/components/Header";
// Store Strapi Global object in context
export const GlobalContext = createContext({});

const MyApp = ({ Component, pageProps }: any) => {
  // const { global } = pageProps;

  return (
    <>
      <Head>
        {/* <link
          rel="shortcut icon"
          href={getStrapiMedia(global.attributes.favicon)}
        /> */}
      </Head>
      {/* <GlobalContext.Provider value={global.attributes}> */}
        <Header />
        {/* <Component {...pageProps} /> */}
        <Component />
      {/* </GlobalContext.Provider> */}
    </>
  );
};

// getInitialProps disables automatic static optimization for pages that don't
// have getStaticProps. So article, category and home pages still get SSG.
// Hopefully we can replace this with getStaticProps once this issue is fixed:
// https://github.com/vercel/next.js/discussions/10949
MyApp.getInitialProps = async (ctx: any) => {
  // // Calls page's `getInitialProps` and fills `appProps.pageProps`
  // const appProps = await App.getInitialProps(ctx);
  // // Fetch global site settings from Strapi
  // const globalRes = await fetchAPI("/global", {
  //   populate: {
  //     favicon: "*",
  //     defaultSeo: {
  //       populate: "*",
  //     },
  //   },
  // });
  // Pass the data to our page via props
  // return { ...appProps, pageProps: { global: globalRes.data } };
  return {}
};

export default MyApp;