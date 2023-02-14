import TeamPage from "@components/TeamPage";
import Layout from "@src/components/Layout";

const Team = () => {
  return (
    <Layout>
      <TeamPage />
    </Layout>
  );
};

export default Team;

export async function getStaticProps() {
  return {
    props: {},
  };
}
