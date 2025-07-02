'use client';

import allStyles from './all.module.css';
import styles from './Nav.module.css';
import Link from 'next/link';

import AppIcon from './components/AppIcon';

export default function Nav() {
  const scrollTo = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      window.scrollTo({
        top: element.offsetTop,
        behavior: 'smooth',
      });
    }
  };

  return (
    <nav className={allStyles.heroContainer + ' ' + styles.navGrid}>
      <AppIcon />
      <button className={styles.mobileButton}>Menu</button>
      <section className={styles.navLinks}>
        <Link href="#features" scroll={false} onClick={(e) => scrollTo(e, 'features')}>
          Features
        </Link>
        <Link href="#faq" scroll={false} onClick={(e) => scrollTo(e, 'faq')}>
          FAQ
        </Link>
        <Link href="#about" scroll={false} onClick={(e) => scrollTo(e, 'about')}>
          About
        </Link>
        <Link href="#support" scroll={false} onClick={(e) => scrollTo(e, 'support')}>
          Support
        </Link>
      </section>
    </nav>
  );
}