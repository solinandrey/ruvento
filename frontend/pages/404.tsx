import TitleBlock from "@src/components/TitleBlock";

const NotFoundPage = () => {
  return (
    <div>
      <TitleBlock titleRow1="404" />
      <div className="not-found-desc">page not found</div>
    </div>
  );
};

export default NotFoundPage;

export async function getStaticProps() {
  return {
    props: {},
  };
}
