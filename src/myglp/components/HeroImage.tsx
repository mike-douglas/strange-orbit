
import Image from 'next/image';
import styles from './HeroImage.module.css';

export default function HeroImage() {
  return (
    <Image src="https://placehold.co/294x638" alt="MyGLP App Screenshot" className={styles.heroImage} width={294} height={638} />
  );
}
