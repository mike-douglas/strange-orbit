import Image from 'next/image';

import styles from './AppIcon.module.css';

export default function AppIcon() {
  return (
    <Image className={styles.icon} src="/icon.png" alt="App Icon" width={75} height={75} />
  );
}