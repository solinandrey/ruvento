import Head from "next/head";
import { Inter } from "@next/font/google";
import { fetchAPI } from "../lib/api";

import dynamic from 'next/dynamic';
const MainPage = dynamic(() => import('@components/MainPage'));
const Layout = dynamic(() => import('@src/components/Layout'));

const inter = Inter({ subsets: ["latin"] });

export default function Home({ articles }: any) {
  return (
    <>
      <Head>
        <title>Ruvento</title>
        <meta name="description" content="Ruvento website" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main>
        <Layout>
          <MainPage />
        </Layout>
        {/* {articles.map((item:any) => <div>{item.attributes.title}</div>)} */}
      </main>
    </>
  );
}

export async function getStaticProps() {
  console.log("i am on the server");
  // const articles =  await fetchAPI('/articles')
  // console.log(articles);

  return {
    props: {
      // articles: articles.data
    },
  };
}
