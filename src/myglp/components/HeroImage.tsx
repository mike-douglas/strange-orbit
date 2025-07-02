
import Image from 'next/image';
import styles from './HeroImage.module.css';

const HeroImage = () => {
  return (
    <Image src="https://placehold.co/500x300" alt="MyGLP App Screenshot" className={styles.heroImage} width={500} height={300} />
  );
};

export default HeroImage;
