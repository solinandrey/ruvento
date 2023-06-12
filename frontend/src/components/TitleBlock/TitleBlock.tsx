import Link from "next/link";
import styles from "./TitleBlock.module.scss";
import ArrowRight from "@images/arrow-right.svg";
import Image from "next/image";
import { useEffect } from "react";

interface Props {
  titleRow1?: string;
  titleRow2?: string;
  titleRow3?: string;
  description?: string;
}

const TitleBlock = ({
  titleRow1,
  titleRow2,
  titleRow3,
  description,
}: Props) => {
  // useEffect(() => {
  //   fetch("https://lobster-app-iw9uv.ondigitalocean.app/api/articles").then(
  //     (res) => res.json()
  //   ).then(data => console.log(data, 'data'));
  // }, []);
  return (
    <div className={styles.titleBlock}>
      <div className={styles.titleContent}>
        <div className={styles.upperRow}>
          <div className={`${styles.upperRowTitle} ${styles.title}`}>
            {titleRow1}
          </div>
        </div>
        <div className={styles.lowerRow}>
          <div className={`${styles.lowerRowTitle} ${styles.title}`}>
            {titleRow2}
            <br />
            {titleRow3}
          </div>
          <div className={styles.lowerRowDescription}>
            {description}
          </div>
        </div>
        {/* <Link className={styles.link} href="/blog">
          <div className={styles.linkText}>
            Learn more about Ruvento
          </div>
          <div className={styles.linkArrow}>
            <ArrowRight />
          </div>
        </Link> */}
      </div>
    </div>
  );
};

export default TitleBlock;
