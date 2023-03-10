import dynamic from 'next/dynamic';
const Layout = dynamic(() => import('@src/components/Layout'));

const ArticlePage = () => {
  return (
    <Layout>
      <div className="articlePage">Article Page</div>
    </Layout>
  );
};

export default ArticlePage;

export async function getStaticProps() {
  return {
    props: {},
  };
}

export const getStaticPaths = async () => {
  return {
    paths: [], //indicates that no page needs be created at build time
    fallback: "blocking", //indicates the type of fallback
  };
};
