
import Image from 'next/image';
import styles from './HeroImage.module.css';

const HeroImage = () => {
  return (
    <Image src="https://placehold.co/294x638" alt="MyGLP App Screenshot" className={styles.heroImage} width={294} height={638} />
  );
};

export default HeroImage;
