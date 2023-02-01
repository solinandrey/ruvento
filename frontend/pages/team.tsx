import TeamPage from "@components/TeamPage";

const Team = () => {
  return (
    <div className="team">
      <TeamPage />
    </div>
  );
};

export default Team;

export async function getStaticProps() {
  return {
    props: {},
  };
}
