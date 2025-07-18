
import Image from 'next/image';
import styles from './HeroImage.module.css';

export default function HeroImage() {
  return (
    <Image src="/myglp/Home-Light.png" alt="MyGLP App Screenshot" className={styles.heroImage} width="0" height="0" sizes="100vw" style={{ width: '100%', height: 'auto' }} />
  );
}
