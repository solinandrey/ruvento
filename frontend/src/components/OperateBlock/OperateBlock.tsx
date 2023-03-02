import styles from "./OperateBlock.module.scss";
import InfoCard from "@components/InfoCard";
import testImage from "@images/test.png";

const cardsContent = [
  {
    title: "consectetur ",
    description: "sit amet, consectetur adipiscing elit, sed do eiusmod tempor",
    image: testImage,
  },
  {
    title: "consectetur ",
    description: "sit amet, consectetur adipiscing elit, sed do eiusmod tempor",
    image: testImage,
  },
  {
    title: "consectetur ",
    description: "sit amet, consectetur adipiscing elit, sed do eiusmod tempor",
    image: testImage,
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
            sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua.
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
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default OperateBlock;
