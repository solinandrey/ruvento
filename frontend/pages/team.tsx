import dynamic from 'next/dynamic';
import { fetchAPI } from 'lib/api';
import TeamPage from '@components/TeamPage';
import Layout from '@src/components/Layout';


const Team = ({title, teammates, subtitle}: any) => {
  return (
    <Layout>
      {teammates && teammates.length && <TeamPage title={title} teammates={teammates} subtitle={subtitle}/>}
    </Layout>
  );
};

export default Team;

export async function getStaticProps() {
  const res = await fetchAPI(
    `/team`,
    {
      populate: 'deep',
    }
  );
  return {
    props: {
      teammates: res?.data?.attributes?.teammate || [],
      title: res?.data?.attributes?.title || '',
      subtitle: res?.data?.attributes?.description || ''
    },

    revalidate: 60,
  };
}
