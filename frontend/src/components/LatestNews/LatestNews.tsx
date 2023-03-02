import { StaticImageData } from "next/image";
import styles from "./LatestNews.module.scss";
import testImage from "@images/test.png";

const newsMock = [
  {
    text: `sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
  sit amet, consectetur adipiscing elit, sed do eiusmod sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
  sit amet, consectetur adipiscing elit, sed do eiusmod `,
    image: testImage,
  },
  {
    text: `sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
  sit amet, consectetur adipiscing elit, sed do eiusmod sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
  sit amet, consectetur adipiscing elit, sed do eiusmod `,
    image: testImage,
  },
  {
    text: `sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
  sit amet, consectetur adipiscing elit, sed do eiusmod sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
  sit amet, consectetur adipiscing elit, sed do eiusmod `,
    image: testImage,
  },
];

const LatestNews = () => {
  return (
    <div className={styles.latestNews}>
      <div className={styles.title}>Latest news</div>
      <div className={styles.news}>
        {newsMock.slice(0,2).map((item, idx) => {
          return (
            <div className={styles.newsItem} key={`news${idx}`}>
              <div className={styles.newsText}>{item.text}</div>
              <div
                className={styles.newsImage}
                style={{
                  background: `url(${item.image.src}) center no-repeat`,
                  backgroundSize: "cover",
                }}
              ></div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default LatestNews;
