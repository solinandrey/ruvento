import styles from "./PortfolioPage.module.scss";
import mighty from "@images/mighty.png";
import pointOne from "@images/pointone.png";
import prenav from "@images/prenav.png";
import solugen from "@images/solugen.png";
import upcodes from "@images/upcodes.png";
import revl from "@images/revl.png";
import boom from "@images/boom.png";
import vantageRobotics from "@images/vantage-robotics.png";
import Image from "next/image";
import Link from "next/link";

const logos = [
  { logo: mighty, link: "/", alt: "Mighty Buildings" },
  { logo: pointOne, link: "/", alt: "Point One" },
  { logo: prenav, link: "/", alt: "Prenav" },
  { logo: solugen, link: "/", alt: "Solugen" },
  { logo: upcodes, link: "/", alt: "Upcodes" },
  { logo: revl, link: "/", alt: "Revl" },
  { logo: boom, link: "/", alt: "Boom" },
  { logo: vantageRobotics, link: "/", alt: "Vantage Robotics" },
  { logo: mighty, link: "/", alt: "Mighty Buildings" },
  { logo: pointOne, link: "/", alt: "Point One" },
  { logo: prenav, link: "/", alt: "Prenav" },
  { logo: solugen, link: "/", alt: "Solugen" },
  { logo: upcodes, link: "/", alt: "Upcodes" },
  { logo: revl, link: "/", alt: "Revl" },
  { logo: boom, link: "/", alt: "Boom" },
  { logo: vantageRobotics, link: "/", alt: "Vantage Robotics" },
];

const PortfolioPage = () => {
  return (
    <div className={styles.portfolio}>
      <div className={styles.title}>
        WE INVEST IN DISRUPTIV
        <br />
        TECHNOLOGIES AND
        <br />
        REMARKABLE FOUNDERS
      </div>
      <div className={styles.logos}>
        <div className={styles.logosContainer}>
          {logos.map((item, idx) => {
            return (
              <Link
                className={styles.logoItem}
                key={item.alt + idx}
                href={item.link}
              >
                <Image src={item.logo} alt={item.alt} />
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default PortfolioPage;
