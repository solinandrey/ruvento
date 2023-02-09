import Image, { StaticImageData } from "next/image";

import styles from "./PortfolioBlock.module.scss";
import mighty from "@images/mighty.png";
import pointOne from "@images/pointone.png";
import prenav from "@images/prenav.png";
import solugen from "@images/solugen.png";
import upcodes from "@images/upcodes.png";
import revl from "@images/revl.png";
import boom from "@images/boom.png";
import vantageRobotics from "@images/vantage-robotics.png";

interface CompanyLogo {
  logo: StaticImageData;
  alt: string;
}

const companies: CompanyLogo[] = [
  { logo: mighty, alt: "Mighty Buildings" },
  { logo: pointOne, alt: "Point One" },
  { logo: prenav, alt: "Prenav" },
  { logo: solugen, alt: "Solugen" },
  { logo: upcodes, alt: "Upcodes" },
  { logo: revl, alt: "Revl" },
  { logo: boom, alt: "Boom" },
  { logo: vantageRobotics, alt: "Vantage Robotics" },
];

const PortfolioBlock = () => {
  const getCompaniesRow = (arr: CompanyLogo[], row: "up" | "down") => {
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
        <div className={styles.title}>featured portfolio</div>
        <div className={styles.logos}>
          {["up", "down"].map((part) => (
            <div className={`${styles.logoRow} ${styles[part]}`} key={part}>
              {[1, 2].map((_, i) => (
                <div className={styles.runnigRow} key={`dup${part}${i}`}>
                  {getCompaniesRow(companies, part as "up" | "down").map(
                    (item, idx) => {
                      return (
                        <div className={styles.logoItem} key={item.alt + idx}>
                          <Image src={item.logo} alt={item.alt} />
                        </div>
                      );
                    }
                  )}
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PortfolioBlock;
