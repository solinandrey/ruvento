import styles from "./PortfolioPage.module.scss";
import mighty from "@images/mighty.png";
import pointOne from "@images/pointone.png";
import prenav from "@images/prenav.png";
import solugen from "@images/solugen.png";
import revl from "@images/revl.png";
import boom from "@images/boom.png";
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
import Image from "next/image";
import Link from "next/link";

// const logos = [
//   { logo: mighty, link: "/", alt: "Mighty Buildings" },
//   { logo: pointOne, link: "/", alt: "Point One" },
//   { logo: prenav, link: "/", alt: "Prenav" },
//   { logo: solugen, link: "/", alt: "Solugen" },
//   { logo: upcodes, link: "/", alt: "Upcodes" },
//   { logo: revl, link: "/", alt: "Revl" },
//   { logo: boom, link: "/", alt: "Boom" },
//   { logo: vantageRobotics, link: "/", alt: "Vantage Robotics" },
//   { logo: mighty, link: "/", alt: "Mighty Buildings" },
//   { logo: pointOne, link: "/", alt: "Point One" },
//   { logo: prenav, link: "/", alt: "Prenav" },
//   { logo: solugen, link: "/", alt: "Solugen" },
//   { logo: upcodes, link: "/", alt: "Upcodes" },
//   { logo: revl, link: "/", alt: "Revl" },
//   { logo: boom, link: "/", alt: "Boom" },
//   { logo: vantageRobotics, link: "/", alt: "Vantage Robotics" },
// ];

const logos = [
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
                target="_blank"
                rel="noreferrer"
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
