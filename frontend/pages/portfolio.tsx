import dynamic from 'next/dynamic';
import { fetchAPI } from 'lib/api';

const PortfolioPage = dynamic(() => import('@components/PortfolioPage'));
const Layout = dynamic(() => import('@src/components/Layout'));

const Portfolio = ({partners, title}: any) => {
  return (
    <Layout>
      <PortfolioPage partners={partners} title={title}/>
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
  console.log(res.data.attributes, "data porti");
  return {
    props: {
      partners: res.data.attributes.partners.data[0].attributes.partners,
      title: res.data.attributes.title
    },

    revalidate: 60,
  };
}
