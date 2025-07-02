'use client';

import allStyles from './all.module.css';
import styles from './Nav.module.css';
import Link from 'next/link';

import AppIcon from './components/AppIcon';

export default function Nav() {
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>, id: string) => {
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
      <section className={styles.navLinks}>
        <Link href="#features" scroll={false} onClick={(e) => handleClick(e, 'features')}>
          Features
        </Link>
        <Link href="#faq" scroll={false} onClick={(e) => handleClick(e, 'faq')}>
          FAQ
        </Link>
        <Link href="#about" scroll={false} onClick={(e) => handleClick(e, 'about')}>
          About
        </Link>
        <Link href="#support" scroll={false} onClick={(e) => handleClick(e, 'support')}>
          Support
        </Link>
      </section>
    </nav>
  );
}