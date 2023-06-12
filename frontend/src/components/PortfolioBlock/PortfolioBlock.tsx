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
    row: "left" | "right"
  ): CompanyLogo[] => {
    return row === "left"
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
            {(["left", "right"] as ("left" | "right")[]).map((dir) => {
              return (
                <Marquee direction={dir} key={dir} className={styles.marquee} speed={25}>
                  <div className={styles.runnigRow} key={`dup`}>
                    {getCompaniesRow(companies, "left").map((item, idx) => {
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
