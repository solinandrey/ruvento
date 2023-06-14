import App from "next/app";
import Head from "next/head";
import "../styles/global.scss";
import { createContext, useEffect, useState } from "react";
import { fetchAPI } from "../lib/api";
import { getStrapiMedia } from "../lib/media";
import Header from "@src/components/Header";
import Footer from "@src/components/Footer";
import { useRouter } from "next/router";
import { AnimatePresence } from "framer-motion";
import { Roboto } from "next/font/google";
import { urlBuilder } from "@src/mixins";
import "../src/components/BlogPage/BlogPage.module.scss";
import "../src/components/PortfolioPage/PortfolioPage.module.scss";
import "../src/components/Footer/Footer.module.scss";
import "../src/components/Header/Header.module.scss";
import "../src/components/InfoCard/InfoCard.module.scss";
import "../src/components/LatestNews/LatestNews.module.scss";
import "../src/components/OperateBlock/OperateBlock.module.scss";
import "../src/components/PortfolioBlock/PortfolioBlock.module.scss";
import "../src/components/TeamPage/TeamPage.module.scss";
import "../src/components/TitleBlock/TitleBlock.module.scss";
import PageTransition, {
  useAsPathWithoutHash,
} from "@madeinhaus/nextjs-page-transition"; // Store Strapi Global object in context
export const GlobalContext = createContext({});

const MyApp = ({ Component, pageProps, haveArticles }: any) => {
  const { global } = pageProps;
  const router = useRouter();
  const [loaded, setLoaded] = useState(false);

  const key = useAsPathWithoutHash();

  const fontStyles = `
    @import url("https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700;900&display=swap");
    body {
      font-family: "Roboto", sans-serif;
    }
  `;

  useEffect(() => {
    const styleTag = document.createElement("style");
    styleTag.appendChild(document.createTextNode(fontStyles));
    styleTag.addEventListener("load", () => {
      setLoaded(true);
      firePreloader();
    });
    document.head.appendChild(styleTag);
  }, [fontStyles]);

  const firePreloader = () => {
    const preloader = document.querySelector(".preloader");
    setTimeout(() => {
      preloader?.classList.add("loaded");
      setTimeout(() => {
        preloader?.classList.add("done");
        setTimeout(() => {
          preloader?.remove();
        }, 200);
      }, 500);
    }, 1000);
  };

  return (
    <>
      <Head>
        <link
          rel="shortcut icon"
          href={urlBuilder(global?.attributes?.favicon?.data?.attributes?.url)}
        />
        <title>{global?.attributes?.siteName}</title>
        <meta
          name="description"
          content={global?.attributes?.defaultSeo?.metaDescription}
          key="desc"
        />
        <meta
          property="og:title"
          content={global?.attributes?.defaultSeo?.metaTitle}
        />
        <meta
          property="og:description"
          content={global?.attributes?.defaultSeo?.metaDescription}
        />
        <meta
          property="og:image"
          content={urlBuilder(
            global?.attributes?.defaultSeo?.shareImage?.data?.attributes?.url
          )}
        />
      </Head>
      {/* <GlobalContext.Provider value={global.attributes}> */}

      <Header haveArticles={haveArticles}/>

      {/* <AnimatePresence
        mode="wait"
        initial={false}
        onExitComplete={() => {
          if (typeof window !== "undefined") {
            window.scrollTo({ top: 0 });
          }
        }}
      > */}
      <PageTransition inPhaseDuration={150} outPhaseDuration={150}>
        <div className="page-container" key={key}>
          <Component {...pageProps} />
        </div>
      </PageTransition>
      {/* </AnimatePresence> */}

      <Footer description={global?.attributes?.footer || ""} haveArticles={haveArticles} />
    </>
  );
};

// getInitialProps disables automatic static optimization for pages that don't
// have getStaticProps. So article, category and home pages still get SSG.
// Hopefully we can replace this with getStaticProps once this issue is fixed:
// https://github.com/vercel/next.js/discussions/10949
MyApp.getInitialProps = async (ctx: any) => {
  // // Calls page's `getInitialProps` and fills `appProps.pageProps`
  const appProps = await App.getInitialProps(ctx);
  // // Fetch global site settings from Strapi
  const globalRes = await fetchAPI("/global", {
    populate: {
      favicon: "*",
      defaultSeo: {
        populate: "*",
      },
    },
  });

  const haveArticles = await fetchAPI("/blog", {
    populate: "deep",
  });

  // Pass the data to our page via props
  return {
    ...appProps,
    pageProps: { global: globalRes.data },
    haveArticles: !!haveArticles?.data?.attributes?.articles?.data?.length,
  };
  // return {};
};

export default MyApp;
