import dynamic from 'next/dynamic';
const BlogPage = dynamic(() => import('@components/BlogPage'));
const Layout = dynamic(() => import('@src/components/Layout'));

const Blog = () => {
  return (
    <Layout>
      <BlogPage />
    </Layout>
  );
};

export default Blog;

export async function getStaticProps() {
  return {
    props: {},
  };
}
