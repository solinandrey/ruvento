import Image from "next/image";
import Link from "next/link";
import styles from "./BlogPage.module.scss";
import testImage from "@images/test.png";
import { urlBuilder } from "@src/mixins";

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

interface Props {
  articles: {
    id: number;
    attributes: {
      title: string;
      description: string;
      slug: string;
      image: { data: { attributes: { url: string } } };
    };
  }[];
}

const BlogPage = ({ articles }: Props) => {
  return (
    <div className={styles.blog}>
      <div className={styles.articles}>
        {articles.map((item, idx) => {
          return (
            <Link
              href={`/blog/${item.attributes.slug}`}
              className={styles.articleItem}
              key={`article-${item.id}`}
            >
              <div className={styles.articleImage}>
                {item?.attributes?.image?.data?.attributes.url && (
                  <Image
                    width="500"
                    height="500"
                    alt={item?.attributes.slug}
                    src={urlBuilder(
                      item?.attributes.image?.data?.attributes.url
                    )}
                  />
                )}
              </div>
              <div className={styles.articleText}>
                <div className={styles.articleTitle}>
                  {item?.attributes.title}
                </div>
                <div className={styles.articleDesc}>
                  {item?.attributes.description}
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default BlogPage;
