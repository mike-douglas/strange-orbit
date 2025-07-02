
import Image from 'next/image';
import styles from './HeroImage.module.css';

export default function HeroImage() {
  return (
    <Image src="/Home-Light.png" alt="MyGLP App Screenshot" className={styles.heroImage} width={295} height={593} />
  );
}
