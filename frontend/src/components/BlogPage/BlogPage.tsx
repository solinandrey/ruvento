import Image from "next/image";
import Link from 'next/link';
import styles from "./BlogPage.module.scss";
import testImage from "@images/test.png";

const articles = [
  {
    title: "consectetur",
    link: "/slug",
    image: testImage,
    description:
      "sit amet, consectetur adipiscing elit, sed do eiusmod tempor sit amet, consectetur adipiscing elit, sed do eiusmod tempor sit amet, consectetur adipiscing elit, sed do eiusmod tempor sit amet, consectetur adipiscing elit, sed do eiusmod tempor sit amet, consectetur adipiscing elit, sed do eiusmod tempor ",
  },
  {
    title: "consectetur",
    link: "/slug",
    image: testImage,
    description:
      "sit amet, consectetur adipiscing elit, sed do eiusmod tempor sit amet, consectetur adipiscing elit, sed do eiusmod tempor sit amet, consectetur adipiscing elit, sed do eiusmod tempor sit amet, consectetur adipiscing elit, sed do eiusmod tempor sit amet, consectetur adipiscing elit, sed do eiusmod tempor ",
  },
  {
    title: "consectetur",
    link: "/slug",
    image: testImage,
    description:
      "sit amet, consectetur adipiscing elit, sed do eiusmod tempor sit amet, consectetur adipiscing elit, sed do eiusmod tempor sit amet, consectetur adipiscing elit, sed do eiusmod tempor sit amet, consectetur adipiscing elit, sed do eiusmod tempor sit amet, consectetur adipiscing elit, sed do eiusmod tempor ",
  },
  {
    title: "consectetur",
    link: "/slug",
    image: testImage,
    description:
      "sit amet, consectetur adipiscing elit, sed do eiusmod tempor sit amet, consectetur adipiscing elit, sed do eiusmod tempor sit amet, consectetur adipiscing elit, sed do eiusmod tempor sit amet, consectetur adipiscing elit, sed do eiusmod tempor sit amet, consectetur adipiscing elit, sed do eiusmod tempor ",
  },
  {
    title: "consectetur",
    link: "/slug",
    image: testImage,
    description:
      "sit amet, consectetur adipiscing elit, sed do eiusmod tempor sit amet, consectetur adipiscing elit, sed do eiusmod tempor sit amet, consectetur adipiscing elit, sed do eiusmod tempor sit amet, consectetur adipiscing elit, sed do eiusmod tempor sit amet, consectetur adipiscing elit, sed do eiusmod tempor ",
  },
];

const BlogPage = () => {
  return (
    <div className={styles.blog}>
      <div className={styles.articles}>
        {articles.map((item, idx) => {
          return (
            <Link href={`/blog${item.link}`} className={styles.articleItem} key={`article-${idx}`}>
              <div className={styles.articleImage}>
                <Image alt={item.title} src={item.image} />
              </div>
              <div className={styles.articleText}>
                <div className={styles.articleTitle}>{item.title}</div>
                <div className={styles.articleDesc}>{item.description}</div>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default BlogPage;
