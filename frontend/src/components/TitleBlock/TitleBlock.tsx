import Link from "next/link";
import styles from "./TitleBlock.module.scss";
import ArrowRight from '@images/arrow-right.svg'
import Image from "next/image";
import { MainTitleBlock } from "@src/types";

interface Props {
  title: string
  description: string
  linkText: string
}

const TitleBlock = ({title, description, linkText}: Props) => {

  const splitTitle = (title: string) => {
    const arr = title.split(' ');
    const part1 = arr.slice(0, Math.round(arr.length/2)).join(' ');
    const part2 = arr.slice(Math.round(arr.length/2)).join(' ');

    return [part1, part2]
  }

  return (
    <div className={styles.titleBlock}>
      <div className={styles.titleContent}>
        <div className={styles.upperRow}>
          <div className={`${styles.upperRowTitle} ${styles.title}`}>
            {splitTitle(title)[0]}
          </div>
        </div>
        <div className={styles.lowerRow}>
          <div className={`${styles.lowerRowTitle} ${styles.title}`}>{splitTitle(title)[1]}</div>
          <div className={styles.lowerRowDescription}>
            {description}
          </div>
        </div>
        <Link className={styles.link} href="/blog">
          <div className={styles.linkText}>
            {linkText}
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
