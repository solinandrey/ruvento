import BlogPage from "@components/BlogPage";
import Layout from "@src/components/Layout";

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
