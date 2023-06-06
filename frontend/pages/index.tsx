import Head from "next/head";
import { Inter } from "@next/font/google";
import { fetchAPI } from "../lib/api";
import { useEffect } from "react";
import MainPage from "@components/MainPage";
import Layout from "@src/components/Layout";



export default function Home({ page }: any) {
  return (
    <>
      <Head>
        <title>Ruvento</title>
        <meta name="description" content="Ruvento website" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main>
        <Layout>
          <MainPage page={page}/>
        </Layout>
        {/* {articles.map((item:any) => <div>{item.attributes.title}</div>)} */}
      </main>
    </>
  );
}

export async function getStaticProps() {

  const res = await fetchAPI(
    `/homepage`,
    {
      populate: 'deep',
    }
  );
  // console.log(data.data.attributes, 'data')
  return {
    props: {
      page: res?.data?.attributes || {},
    },

    revalidate: 60
  }
}
