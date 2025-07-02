
import Image from 'next/image';
import styles from './HeroImage.module.css';

const HeroImage = () => {
  return (
    <Image src="/myglp-hero-image.png" alt="MyGLP App Screenshot" className={styles.heroImage} width={500} height={300} />
  );
};

export default HeroImage;
