import Head from "next/head";
import { Inter } from "@next/font/google";
import { fetchAPI } from "../lib/api";
import { useEffect } from "react";
import MainPage from "@components/MainPage";
import Layout from "@src/components/Layout";

import dynamic from 'next/dynamic';


export default function Home({ page }: any) {
  useEffect(() => {
    console.log(page, 'page')
  }, [page])
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

  const {NEXT_PUBLIC_STRAPI_API_URL} = process.env;
  // const res = await fetch(`${NEXT_PUBLIC_STRAPI_API_URL}/api/homepage`);
  const res = await fetch(`http://localhost:1337/api/homepage?populate=deep`);
  const data = await res.json();
  console.log(data.data.attributes, 'data')
  return {
    props: {
      page: data.data.attributes,
    },

    revalidate: 60
  }
}
