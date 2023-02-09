import Link from "next/link";
import styles from "./TitleBlock.module.scss";
import ArrowRight from '@images/arrow-right.svg'
import Image from "next/image";

const TitleBlock = () => {
  return (
    <div className={styles.titleBlock}>
      <div className={styles.titleContent}>
        <div className={styles.upperRow}>
          <div className={`${styles.upperRowTitle} ${styles.title}`}>
            who we
          </div>
        </div>
        <div className={styles.lowerRow}>
          <div className={`${styles.lowerRowTitle} ${styles.title}`}>are</div>
          <div className={styles.lowerRowDescription}>
            WORKING TOGETHER<br/>TO EMPOWER THE WORLD WITH YOUR TECHNOLOGY
          </div>
        </div>
        <Link className={styles.link} href="/blog">
          <div className={styles.linkText}>
            Learn more about Ruvento
          </div>
          <div className={styles.linkArrow}>
            <ArrowRight />
          </div>
        </Link>
      </div>
    </div>
  );
};

export default TitleBlock;
