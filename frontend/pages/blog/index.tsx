import BlogPage from '@components/BlogPage';
import Layout from '@src/components/Layout';
import { fetchAPI } from 'lib/api';
import { useEffect } from 'react';

const Blog = ({articles}: any) => {
  useEffect(() => {
    console.log(articles, 'articles')
  }, [])
  return (
    <Layout>
      {articles && articles.length && <BlogPage articles={articles}/>}
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
      articles: res?.data?.attributes?.articles?.data || []
    },

    revalidate: 60,
  };
}
