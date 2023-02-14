const ArticlePage = () => {
  return <div className="articlePage">Article Page</div>
}

export default ArticlePage;

export async function getStaticProps() {
  return {
    props: {},
  };
}

export const getStaticPaths = async () => {

  return {
      paths: [], //indicates that no page needs be created at build time
      fallback: 'blocking' //indicates the type of fallback
  }
}