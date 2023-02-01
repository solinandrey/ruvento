import PortfolioPage from "@components/PortfolioPage";

const Portfolio = () => {
  return (
    <div className="portfolio">
      <PortfolioPage />
    </div>
  );
};

export default Portfolio;

export async function getStaticProps() {
  return {
    props: {},
  };
}
