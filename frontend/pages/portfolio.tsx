import PortfolioPage from "@components/PortfolioPage";
import Layout from "@src/components/Layout";

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
