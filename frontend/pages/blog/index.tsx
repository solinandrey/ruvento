import BlogPage from "@components/BlogPage";

const Blog = () => {
  return (
    <div className="blog">
      <BlogPage />
    </div>
  );
};

export default Blog;

export async function getStaticProps() {
  return {
    props: {},
  };
}
