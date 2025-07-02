import styles from '../myglp.module.css';
import Title from './components/Title';
import Subtitle from './components/Subtitle';
import HeroImage from './components/HeroImage';
import AppStoreButton from './components/AppStoreButton';

const Hero = () => {
  return (
    <section className={styles.heroSection}>
      <div className={styles.heroContent}>
        <Title />
        <Subtitle />
        <AppStoreButton />
      </div>
      <HeroImage />
    </section>
  );
};

export default Hero;