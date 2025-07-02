import Link from "next/link";
import { GlobeIcon } from "./Icons";
import styles from "./Footer.module.css";
import gridStyles from "../../styles/grid.module.css";

export default function Footer() {
  return (
    <footer className={`${styles.footer} ${gridStyles.container}`}>
      <div className={`${styles.container} ${gridStyles.grid}`}>
        <div className={styles.spaceY3}>
          <h2 className={styles.heading}>Stay Connected</h2>
          <p className={`${styles.description} ${styles.darkDescription}`}>
            Sign up for our newsletter to get the latest updates and news.
          </p>
        </div>
        <div className={styles.formWrapper}>
          <form className={styles.form}>
            <input
              className={styles.input}
              placeholder="Enter your email"
              type="email"
            />
            <button className={styles.button} type="submit">
              Sign Up
            </button>
          </form>
          <p className={`${styles.privacyText} ${styles.darkPrivacyText}`}>
            We respect your privacy. No spam.
            <Link className={styles.privacyLink} href="#">
              Terms of Service
            </Link>
          </p>
        </div>
        <div className={styles.socialLinks}>
          <Link className={`${styles.socialLink} ${styles.darkSocialLink}`} href="#">
            <GlobeIcon className={styles.icon} />
          </Link>
          <Link className={`${styles.socialLink} ${styles.darkSocialLink}`} href="#">
            <GlobeIcon className={styles.icon} />
          </Link>
          <Link className={`${styles.socialLink} ${styles.darkSocialLink}`} href="#">
            <GlobeIcon className={styles.icon} />
          </Link>
        </div>
      </div>
    </footer>
  );
}
