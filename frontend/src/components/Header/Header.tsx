import Link from "next/link";
import Image from "next/image";
import styles from "./Header.module.scss";
import Logo from "@src/assets/images/logotype.svg";
import { useRouter } from "next/router";
import { useEffect } from "react";

const headerLinks = [
  {
    label: "Portfolio",
    link: "/portfolio",
  },
];

interface IProps {
  haveArticles?: boolean;
}

const Header = ({ haveArticles }: IProps) => {
  const router = useRouter();

  return (
    <div className={styles.header}>
      <Link href="/" className={styles.logo}>
        <Logo />
      </Link>
      <div className={styles.links}>
        <Link
          key={`header-link-3`}
          href="/"
          className={`${styles.linkItem} ${
            router.pathname === "/" ? styles.hidden : ""
          }`}
        >
          {"Main page"}
        </Link>
        {headerLinks.map((link, idx) => {
          return (
            <Link
              key={`header-link-${idx}`}
              href={link.link}
              className={styles.linkItem}
            >
              {link.label}
            </Link>
          );
        })}
        {haveArticles ? (
          <Link
            key={`header-link-${2}`}
            href={'/blog'}
            className={styles.linkItem}
          >
            Blog
          </Link>
        ) : null}
      </div>
    </div>
  );
};

export default Header;
