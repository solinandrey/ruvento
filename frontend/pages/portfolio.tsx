import dynamic from 'next/dynamic';
import { fetchAPI } from 'lib/api';
import PortfolioPage from '@components/PortfolioPage';
import Layout from '@src/components/Layout';

// const PortfolioPage = dynamic(() => import('@components/PortfolioPage'));
// const Layout = dynamic(() => import('@src/components/Layout'));

const Portfolio = ({partners, title, subtitle}: any) => {
  return (
    <Layout>
      {partners && title && <PortfolioPage partners={partners} title={title} subtitle={subtitle}/>}
    </Layout>
  );
};

export default Portfolio;

export async function getStaticProps() {
  const res = await fetchAPI(
    `/portfolio`,
    {
      populate: 'deep',
    }
  );
  return {
    props: {
      partners: res?.data?.attributes?.portfolio?.data[0]?.attributes?.partner || [],
      title: res?.data?.attributes.title || '',
      subtitle: res?.data?.attributes.subtitle || ''
    },

    revalidate: 60,
  };
}
