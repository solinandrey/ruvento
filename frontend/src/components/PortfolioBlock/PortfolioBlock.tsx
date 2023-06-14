import Image from "next/image";
import Marquee from "react-fast-marquee";

import styles from "./PortfolioBlock.module.scss";
import { urlBuilder } from "@src/mixins";
import { useEffect } from "react";

interface CompanyLogo {
  logo: { data: { attributes: { url: string, width: number, height: number } } };
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
                <Marquee direction={dir} key={dir} className={styles.marquee} speed={40}>
                  <div className={styles.runnigRow} key={`dup`}>
                    {getCompaniesRow(companies, dir).map((item, idx) => {
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
                            width={item?.logo?.data?.attributes?.width}
                            height={item?.logo?.data?.attributes?.height}
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
