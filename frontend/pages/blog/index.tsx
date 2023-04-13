import BlogPage from '@components/BlogPage';
import Layout from '@src/components/Layout';
import { fetchAPI } from 'lib/api';

const Blog = ({articles}: any) => {
  return (
    <Layout>
      <BlogPage articles={articles}/>
    </Layout>
  );
};

export default Blog;

export async function getStaticProps() {
  const res = await fetchAPI(
    `/blog`,
    {
      populate: 'deep',
    }
  );
  return {
    props: {
      articles: res.data.attributes.articles.data
    },

    revalidate: 60,
  };
}
