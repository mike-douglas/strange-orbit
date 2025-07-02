import allStyles from './all.module.css';
import styles from './Nav.module.css';

import AppIcon from './components/AppIcon';

export default function Nav() {
  return (
    <nav className={allStyles.heroContainer + ' ' + styles.navGrid}>
      <AppIcon />
      <section className={styles.navLinks}>
        <a href="#">Features</a>
        <a href="#">FAQ</a>
        <a href="#">About</a>
        <a href="#">Support</a>
      </section>
    </nav>
  );
}