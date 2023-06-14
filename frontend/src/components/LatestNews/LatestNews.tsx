import styles from "./LatestNews.module.scss";
import Link from "next/link";

// const newsMock = [
//   {
//     text: `sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
//   sit amet, consectetur adipiscing elit, sed do eiusmod `,
//     image: testImage,
//   },
//   {
//     text: `sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
//   sit amet, consectetur adipiscing elit, sed do eiusmod `,
//     image: testImage,
//   },
//   {
//     text: `sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
//   sit amet, consectetur adipiscing elit, sed do eiusmod `,
//     image: testImage,
//   },
// ];

interface IProps {
  articles: {
    attributes: {
      title: string;
      description: string;
      image: {
        data: {
          attributes: {
            url: string;
          };
        };
      };
      slug: string;
    };
  }[];
}

const LatestNews = ({ articles }: IProps) => {
  return (
    <div className={styles.latestNews}>
      <div className={styles.title}>Latest news</div>
      <div className={styles.news}>
        {articles &&
          articles.slice(0, 2).map((item, idx) => {
            return (
              <Link className={styles.newsItem} key={`news${idx}`} href={`/blog/${item?.attributes?.slug}`}>
                <div className={styles.newsText}>{item?.attributes?.title}</div>
                {item?.attributes?.image?.data && (
                  <div
                    className={styles.newsImage}
                    style={{
                      background: `url(${item?.attributes?.image?.data?.attributes?.url}) center no-repeat`,
                      backgroundSize: "cover",
                    }}
                  ></div>
                )}
              </Link>
            );
          })}
      </div>
    </div>
  );
};

export default LatestNews;
