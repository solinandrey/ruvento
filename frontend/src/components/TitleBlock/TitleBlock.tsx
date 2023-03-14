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
          TECHNOLOGIES 
          </div>
        </div>
        <div className={styles.lowerRow}>
          <div className={`${styles.lowerRowTitle} ${styles.title}`}>POWERED<br/>BY VALUES</div>
          <div className={styles.lowerRowDescription}>
          Empowering founders<br/>to advance Southeast Asia through tech
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
