import Image, { StaticImageData } from "next/image";
import styles from "./InfoCard.module.scss";

interface Props {
  topTitle?: boolean;
  title: string;
  image: string | StaticImageData;
  description: string;
}

const InfoCard = ({ topTitle, title, image, description }: Props) => {
  return (
    <div className={styles.card}>
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
