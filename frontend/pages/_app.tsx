import App from "next/app";
import Head from "next/head";
import "../styles/global.scss";
import { createContext, useEffect, useState } from "react";
// import { fetchAPI } from "../lib/api";
import { getStrapiMedia } from "../lib/media";
import Header from "@src/components/Header";
import Footer from "@src/components/Footer";
import { useRouter } from "next/router";
import { AnimatePresence } from "framer-motion";
import { Roboto } from 'next/font/google';
import useFontFaceObserver from 'use-font-face-observer';
import FontFaceObserver from 'fontfaceobserver';
// Store Strapi Global object in context
export const GlobalContext = createContext({});

const MyApp = ({ Component, pageProps }: any) => {
  // const { global } = pageProps;
  const router = useRouter();
  const [loaded, setLoaded] = useState(false);

  const fontStyles = `
    @import url("https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700;900&display=swap");
    body {
      font-family: "Roboto", sans-serif;
    }
  `;

  useEffect(() => {
    const styleTag = document.createElement('style');
    styleTag.appendChild(document.createTextNode(fontStyles));
    styleTag.addEventListener('load', () => {
      setLoaded(true);
      firePreloader();
    });
    document.head.appendChild(styleTag);
  }, [fontStyles]);

  const firePreloader = () => {
    setTimeout(() => {
      document.querySelector('.preloader')?.classList.add('loaded');
      setTimeout(() => {
        document.querySelector('.preloader')?.classList.add('done');
      }, 500)
    }, 1000);
  }


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

      <AnimatePresence
        mode="wait"
        initial={false}
        onExitComplete={() => {
          if (typeof window !== "undefined") {
            window.scrollTo({ top: 0 });
          }
        }}
      >
        {/* <Component {...pageProps} /> */}
        <div className="page-container" key={router.asPath}>
          <Component />
        </div>
        {/* </GlobalContext.Provider> */}
      </AnimatePresence>

      <Footer />
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
  return {};
};

export default MyApp;
