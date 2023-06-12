import Image from "next/image";
import Marquee from "react-fast-marquee";

import styles from "./PortfolioBlock.module.scss";
import { urlBuilder } from "@src/mixins";

interface CompanyLogo {
  logo: { data: { attributes: { url: string } } };
  link?: string;
}

interface Props {
  companies: CompanyLogo[];
}

const PortfolioBlock = ({ companies }: Props) => {
  const getCompaniesRow = (
    arr: CompanyLogo[],
    row: "up" | "down"
  ): CompanyLogo[] => {
    return row === "up"
      ? [...doubleArray(doubleArray(arr.slice(0, Math.round(arr.length / 2))))]
      : [...doubleArray(doubleArray(arr.slice(Math.round(arr.length / 2))))];
  };

  const doubleArray = (arr: any[]) => {
    return arr.concat(arr);
  };

  return (
    <div className={styles.portfolioBlock}>
      <div className={styles.container}>
        <div className={styles.title}>our portfolio</div>
        {companies && companies.length && (
          <div className={styles.logos}>
            {/* {["up", "down"].map((part) => (
              <div className={`${styles.logoRow} ${styles[part]}`} key={part}>
                {[1, 2].map((_, i) => (
                  <div className={styles.runnigRow} key={`dup${part}${i}`}>
                    {getCompaniesRow(companies, part as "up" | "down").map(
                      (item, idx) => {
                        return (
                          <a
                            href={item.link}
                            target="_blank"
                            className={styles.logoItem}
                            key={(item.link || "") + idx + i}
                            rel="noreferrer"
                          >
                            <Image
                              src={urlBuilder(
                                item?.logo?.data?.attributes?.url
                              )}
                              alt={item.link || ""}
                              width="500"
                              height="500"
                            />
                          </a>
                        );
                      }
                    )}
                  </div>
                ))}
              </div>
            ))} */}
            {(["left", "right"] as ("left" | "right")[]).map((dir) => {
              return (
                <Marquee direction={dir}>
                  <div className={styles.runnigRow} key={`dup`}>
                    {companies.map((item, idx) => {
                      return (
                        <a
                          href={item.link}
                          target="_blank"
                          className={styles.logoItem}
                          key={(item.link || "") + idx}
                          rel="noreferrer"
                        >
                          <Image
                            src={urlBuilder(item?.logo?.data?.attributes?.url)}
                            alt={item.link || ""}
                            width="500"
                            height="500"
                          />
                        </a>
                      );
                    })}
                  </div>
                </Marquee>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
};

export default PortfolioBlock;
