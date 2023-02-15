import dynamic from 'next/dynamic';
const PortfolioPage = dynamic(() => import('@components/PortfolioPage'));
const Layout = dynamic(() => import('@src/components/Layout'));

const Portfolio = () => {
  return (
    <Layout>
      <PortfolioPage />
    </Layout>
  );
};

export default Portfolio;

export async function getStaticProps() {
  return {
    props: {},
  };
}
