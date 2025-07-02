import allStyles from './all.module.css';
import styles from './Footer.module.css';

import SiteFooter from '../strange-orbit/Footer';

export default function Footer() {
  return (
    <section className={styles.footerContainer}>
      <section className={allStyles.wideContainer}>
        <div className={styles.footerGrid}>
          <SiteFooter />
        </div>     
      </section>
    </section>
  );
}