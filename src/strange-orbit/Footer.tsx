import styles from './Footer.module.css';

import Image from 'next/image';

export default function SiteFooter() {
  return (
    <section className={styles.footerContent}>
      <div>
        &copy; 2025 Strange Orbit, LLC
      </div>
    </section>
  );
}