import Image, { StaticImageData } from "next/image";
import styles from "./InfoCard.module.scss";

interface Props {
  topTitle?: boolean;
  title: string;
  image: string | StaticImageData;
  description: string;
  mainPage?: boolean
}

const InfoCard = ({ topTitle, title, image, description, mainPage }: Props) => {
  return (
    <div className={`${styles.card} ${mainPage ? styles.mainPage : ''}`}>
      {topTitle && (
        <div className={`${styles.title} ${styles.topTitle}`}>{title}</div>
      )}
      <div className={styles.image}>
        <Image src={image} alt={title} />
      </div>
      {!topTitle && (
        <div className={`${styles.title} ${styles.bottomTitle}`}>{title}</div>
      )}
      <div className={styles.desc}>{description}</div>
    </div>
  );
};

export default InfoCard;
