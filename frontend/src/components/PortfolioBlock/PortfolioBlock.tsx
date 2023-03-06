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
import refocus from "@images/refocus.png";
import alcatraz from "@images/alcatraz.png";
import eightSleep from "@images/8sleep.png";
import swat from "@images/swat.png";
import elctroneek from "@images/electroneek.png";
import reverie from "@images/reverie.png";
import robotics from "@images/robotics.png";
import arloid from "@images/arloid.png";
import creopop from "@images/creopop.png";
import powerdot from "@images/powerdot.png";

interface CompanyLogo {
  logo: StaticImageData;
  alt: string;
  link?: string;
}

// const companies: CompanyLogo[] = [
//   { logo: mighty, alt: "Mighty Buildings" },
//   { logo: pointOne, alt: "Point One" },
//   { logo: prenav, alt: "Prenav" },
//   { logo: solugen, alt: "Solugen" },
//   { logo: upcodes, alt: "Upcodes" },
//   { logo: revl, alt: "Revl" },
//   { logo: boom, alt: "Boom" },
//   { logo: vantageRobotics, alt: "Vantage Robotics" },
// ];

const companies: CompanyLogo[] = [
  { logo: refocus, alt: "Refocus", link: "https://refocus.me/" },
  { logo: alcatraz, alt: "Alcatraz AI", link: "https://www.alcatraz.ai/" },
  {
    logo: mighty,
    alt: "Mighty Buildings",
    link: "https://www.mightybuildings.com/",
  },
  { logo: boom, alt: "Boom", link: "https://boomsupersonic.com/" },
  { logo: solugen, alt: "Solugen", link: "https://solugen.com/" },
  { logo: eightSleep, alt: "Eight Sleep", link: "https://www.eightsleep.com/" },
  { logo: swat, alt: "Swat", link: "https://www.swatmobility.com/" },
  { logo: elctroneek, alt: "Electroneek", link: "https://electroneek.com/" },
  { logo: pointOne, alt: "Point One", link: "https://pointonenav.com/" },
  { logo: reverie, alt: "Reverie Labs", link: "https://www.reverielabs.com/" },
  { logo: revl, alt: "Revl", link: "https://revl.com/" },
  { logo: robotics, alt: "Robotics", link: "https://xrobotics.io/" },
  { logo: prenav, alt: "Prenav", link: "https://www.prenav.com/" },
  { logo: arloid, alt: "Arloid", link: "https://arloid.com/" },
  { logo: creopop, alt: "Creopop", link: "https://creopop.com/" },
  { logo: powerdot, alt: "Powerdot", link: "https://www.powerdot.com/" },
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
                        <a
                          href={item.link}
                          target="_blank"
                          className={styles.logoItem}
                          key={item.alt + idx}
                        >
                          <Image src={item.logo} alt={item.alt} />
                        </a>
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
