import allStyles from './all.module.css';
import styles from './Footer.module.css';

import Logo from '../strange-orbit/components/Logo';

export default function Footer() {
  return (
    <section className={styles.footerContainer}>
      <section className={allStyles.wideContainer}>
        <div className={styles.footerContent}>
          <Logo variant="gray" className={styles.logo} />
          <p>Copyright &copy; 2025 Strange Orbit, LLC.</p>
        </div>
      </section>
    </section>
  );
}