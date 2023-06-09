import Image, { StaticImageData } from "next/image";
import styles from "./InfoCard.module.scss";
import { urlBuilder } from "@src/mixins";

interface Props {
  topTitle?: boolean;
  title: string;
  image?: string;
  description: string;
  mainPage?: boolean;
  link?: string;
  teammate?: boolean;
}

const InfoCard = ({
  topTitle,
  title,
  image,
  description,
  mainPage,
  link,
  teammate,
}: Props) => {
  return (
    <a
      className={`${styles.card} ${mainPage ? styles.mainPage : ""} ${
        teammate ? styles.teammate : ""
      }`}
      href={link}
      target="_blank"
      rel="noreferrer"
    >
      <div className={styles.backgroundHover}></div>
      {topTitle && (
        <div className={`${styles.title} ${styles.topTitle}`}>{title}</div>
      )}
      {image && (
        <div
          className={styles.image}
          style={{ backgroundImage: `url(${urlBuilder(image)})` }}
        ></div>
      )}

      {!topTitle && (
        <div className={`${styles.title} ${styles.bottomTitle}`}>{title}</div>
      )}
      <div className={styles.desc}>{description}</div>
    </a>
  );
};

export default InfoCard;
