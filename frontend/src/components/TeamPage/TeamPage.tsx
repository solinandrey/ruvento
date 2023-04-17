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

interface Props {
  title: string;
  subtitle: string;
  teammates: {
    id: number;
    name: string;
    link: string;
    avatar: {data: {attributes:{url: string}}};
    description: string;
  }[];
}

const LastCard = ({ subtitle }: { subtitle: string }) => {
  return (
    <div className={styles.lastCard}>
      <div className={styles.lastCardTitle}>{subtitle}</div>
      <div className={styles.lastCardDescription}>
        {/* sit amet, consectetur adipiscing elit, sed do eiusmod{" "} */}
      </div>
    </div>
  );
};

const TeamPage = ({ title, subtitle, teammates }: Props) => {
  return (
    <div className={styles.team}>
      <div className={styles.title}>{title}</div>
      <LastCard subtitle={subtitle} />
      <div className={styles.cards}>
        {teammates.map((item, idx) => {
          return (
            <div className={styles.cardsItem} key={`teammate-${item.id}`}>
              <InfoCard
                title={item.name}
                topTitle
                image={item?.avatar?.data?.attributes?.url}
                description={item.description}
                link={item.link}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default TeamPage;
