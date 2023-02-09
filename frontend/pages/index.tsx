import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
// import styles from '@components/styles/Home.module.css'
import { fetchAPI } from '../lib/api';
import MainPage from '@components/MainPage';
import Header from '@src/components/Header';

const inter = Inter({ subsets: ['latin'] })

export default function Home({articles}: any) {
  return (
    <>
      <Head>
        <title>Ruvento</title>
        <meta name="description" content="Ruvento website" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main>
        <MainPage />
        {/* {articles.map((item:any) => <div>{item.attributes.title}</div>)} */}
      </main>
    </>
  )
}

export async function getStaticProps() {
  console.log('i am on the server');
  // const articles =  await fetchAPI('/articles')

  


  return {
    props: {
      // articles: articles.data
    }
  }
}
