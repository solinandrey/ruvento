import dynamic from 'next/dynamic';
const TeamPage = dynamic(() => import('@components/TeamPage'));
const Layout = dynamic(() => import('@src/components/Layout'));

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
