import styles from "./TeamPage.module.scss";
import InfoCard from "@components/InfoCard";
import testImage from "@images/test.png";

const teamMembers = [
  {
    title: "consectetur ",
    image: testImage,
    description:
      "sit amet, consectetur adipiscing elit, sed do eiusmod tempor ",
  },
  {
    title: "consectetur ",
    image: testImage,
    description:
      "sit amet, consectetur adipiscing elit, sed do eiusmod tempor ",
  },
  {
    title: "consectetur ",
    image: testImage,
    description:
      "sit amet, consectetur adipiscing elit, sed do eiusmod tempor ",
  },
  {
    title: "consectetur ",
    image: testImage,
    description:
      "sit amet, consectetur adipiscing elit, sed do eiusmod tempor ",
  },
  {
    title: "consectetur ",
    image: testImage,
    description:
      "sit amet, consectetur adipiscing elit, sed do eiusmod tempor ",
  },
];

const LastCard = () => {
  return (
    <div className={styles.lastCard}>
      <div className={styles.lastCardTitle}>Our team will be by your side</div>
      <div className={styles.lastCardDescription}>
        sit amet, consectetur adipiscing elit, sed do eiusmod{" "}
      </div>
    </div>
  );
};

const TeamPage = () => {
  return (
    <div className={styles.team}>
      <div className={styles.title}>our team</div>
      <div className={styles.cards}>
        {teamMembers.map((item, idx) => {
          return (
            <div className={styles.cardsItem} key={`teammate-${idx}`}>
              <InfoCard
                title={item.title}
                topTitle
                image={item.image}
                description={item.description}
              />
            </div>
          );
        })}
        <LastCard />
      </div>
    </div>
  );
};

export default TeamPage;
