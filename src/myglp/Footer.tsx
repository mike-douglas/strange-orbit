import allStyles from './all.module.css';
import styles from './Footer.module.css';

import SiteFooter from '../strange-orbit/Footer';

const Footer = () => (
  <section className={styles.footerContainer}>
    <section className={allStyles.wideContainer}>
      <div className={styles.footerGrid}>
        <SiteFooter />
        <div>
        
        </div>
      </div>     
    </section>
  </section>
);

export default Footer;