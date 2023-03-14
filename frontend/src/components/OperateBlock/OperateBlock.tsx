import styles from "./OperateBlock.module.scss";
import InfoCard from "@components/InfoCard";
import testImage from "@images/test.png";
import operate1 from '@images/operate1.jpg';
import operate2 from '@images/operate2.jpg';

const cardsContent = [
  {
    title: "FOUNDERS-FIRST APPROACH",
    description: "We are a team led by serial entrepreneurs and startup operators. We intimately understand the challenges faced by the founders, and we are here to support and champion the needs of the teams on their journey to build great companies.",
    image: operate1,
  },
  {
    title: "BUILDING EXPERTISE BRIDGES",
    description: "We can help you gain the best Product Development Expertise by connecting you with the leading teams in the USA, Europe, and Asia – connections  that help you get funded and successfully scale your business by learning from the best leaders across the globe.",
    image: operate2,
  },
  {
    title: "HOW WE CAN HELP",
    description: "Thanks to our experience as operators, we have extensive expertise in R&D, Product Development and Management, and Launch Marketing. From early funding to product development to finding the right global business partners and raising Series A – we help teams achieve their milestones without interfering in their core values and business operations.",
    image: operate2,
  },
];

const OperateBlock = () => {
  return (
    <div className={styles.operateBlock}>
      <div className={styles.content}>
        <div className={styles.top}>
          <div className={styles.topTitle}>How we operate</div>
          <div className={styles.line}></div>
          <div className={styles.topDesc}>
          Ruvento Ventures is dedicated to funding the best teams across the Southeast Asia. We invest in technologies that are powered by values, and focused on uplifting the Region and the World.
          </div>
        </div>
        <div className={styles.cards}>
          {cardsContent.map((card, idx) => {
            return (
              <InfoCard
                key={`card${idx}`}
                image={card.image}
                title={card.title}
                description={card.description}
                mainPage
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default OperateBlock;
