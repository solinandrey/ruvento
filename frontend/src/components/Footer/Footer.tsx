import Link from "next/link";
import Image from "next/image";

import styles from "./Footer.module.scss";
import TwitterLogo from "@images/twitter.svg";
import InstagramLogo from "@images/instagram.svg";
import FbLogo from "@images/fb.svg";
import Logo from "@images/logotype.svg";

const Footer = () => {
  return (
    <div className={styles.footer}>
      {/* <div className={styles.title}>
        Building a great Company in Southeast Asia <span>Contact us</span>
      </div> */}
      <div className={styles.links}>
        <div className={styles.footerNav}>
          <Link
            href="/portfolio"
            className={styles.footerNavItem}
            scroll={false}
          >
            Portfolio
          </Link>
          {/* <Link href="/blog" className={styles.footerNavItem} scroll={false}>
            Blog
          </Link> */}
          <Link href="/team" className={styles.footerNavItem} scroll={false}>
            Team
          </Link>
          <div className={styles.title}>
            <span>Contact us</span>
          </div>
        </div>
        <div className={styles.socialLinks}>
          <Link href="" className={styles.socialLinksItem} target="_blank">
            <TwitterLogo />
          </Link>
          <Link href="" className={styles.socialLinksItem} target="_blank">
            <InstagramLogo />
          </Link>
          <Link href="" className={styles.socialLinksItem} target="_blank">
            <FbLogo />
          </Link>
        </div>
      </div>
      <div className={styles.bottomRow}>
        <div className={styles.bottomText}>
          sit amet, consectetur adipiscing elit, sed do eiusmod tempor
          incididunt ut labore et dolore magna aliqua.
        </div>
        <div className={styles.bottomLogo}>
          <Logo />
        </div>
      </div>
    </div>
  );
};

export default Footer;
