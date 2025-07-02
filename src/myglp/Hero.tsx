import allStyles from './all.module.css';
import styles from './Hero.module.css';

import Title from './components/Title';
import Subtitle from './components/Subtitle';
import HeroImage from './components/HeroImage';
import AppStoreButton from './components/AppStoreButton';

export default function Hero() {
  return (
    <section className={allStyles.heroContainer + ' ' + styles.heroSection}>
      <div className={styles.heroContent}>
        <Title />
        <Subtitle />
        <AppStoreButton />
      </div>
      <HeroImage />
    </section>
  );
}