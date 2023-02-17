import Head from "next/head";
import { Inter } from "@next/font/google";
import { fetchAPI } from "../lib/api";

import dynamic from "next/dynamic";
import { useEffect } from "react";
import { MainPageResponse } from "@src/types";
const MainPage = dynamic(() => import("@components/MainPage"));
const Layout = dynamic(() => import("@src/components/Layout"));

const inter = Inter({ subsets: ["latin"] });

interface Props {
  homepage: MainPageResponse['data']
  MainTitle: MainPageResponse['data']['attributes']['MainTitle']
}

export default function Home({homepage,MainTitle}: Props) {
  useEffect(() => {
    console.log(MainTitle, "homepage");
  });

  return (
    <>
      <Head>
        <title>Ruvento</title>
        <meta name="description" content="Ruvento website" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main>
        <Layout>
          <MainPage titleBlock={MainTitle} />
        </Layout>
        {/* {articles.map((item:any) => <div>{item.attributes.title}</div>)} */}
      </main>
    </>
  );
}

export async function getStaticProps() {
  console.log("i am on the server");
  const homepage: MainPageResponse = await fetchAPI("/homepage", {
      populate: encodeURI("*"),
  });

  return {
    props: {
      homepage: homepage.data,
      MainTitle: homepage.data.attributes.MainTitle
    },
  };
}
