import Link from "next/link";
import Image from "next/image";
import styles from "./Header.module.scss";
import Logo from "@src/assets/images/logotype.svg";

const headerLinks = [
  {
    label: "Portfolio",
    link: "/portfolio",
  },
  {
    label: "Team",
    link: "/team",
  },
  {
    label: "Blog",
    link: "/blog",
  },
];

const Header = () => {
  return (
    <div className={styles.header}>
      <Link href="/" className={styles.logo}>
        <Logo />
      </Link>
      <div className={styles.links}>
        {headerLinks.map((link, idx) => {
          return (
            <Link key={`header-link-${idx}`} href={link.link} className={styles.linkItem}>
              {link.label}
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Header;
