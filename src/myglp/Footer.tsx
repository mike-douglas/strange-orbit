import allStyles from './all.module.css';
import styles from './Footer.module.css';

const Footer = () => (
  <section className={styles.footerContainer}>
    <section className={allStyles.wideContainer}>
      <div className={styles.footerGrid}>
        <div>
        Info About Strange Orbit LLC
        </div>
        <div>
        Info for the app
        </div>
      </div>     
    </section>
  </section>
);

export default Footer;