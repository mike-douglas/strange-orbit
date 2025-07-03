'use client';

import allStyles from './all.module.css';
import styles from './Nav.module.css';
import Link from 'next/link';

import AppIcon from './components/AppIcon';
import HamburgerIcon from './components/HamburgerIcon';

import { useState } from 'react';

export default function Nav() {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const scrollTo = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      window.scrollTo({
        top: element.offsetTop,
        behavior: 'smooth',
      });
    }
    setIsNavOpen(false); // Close nav on link click
  };

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  return (
    <nav className={allStyles.heroContainer + ' ' + styles.navGrid}>
      <section className={styles.icon}><AppIcon /> MyGLP</section>
      <section className={styles.mobileButtonContainer}>
        <HamburgerIcon isOpen={isNavOpen} onClick={toggleNav} />
      </section>
      <section className={`${styles.navLinks} ${isNavOpen ? styles.navLinksOpen : ''}`}>
        <Link href="#features" scroll={false} onClick={(e) => scrollTo(e, 'features')}>
          Features
        </Link>
        <Link href="#support" scroll={false} onClick={(e) => scrollTo(e, 'support')}>
          Support
        </Link>
        <Link href="#about" scroll={false} onClick={(e) => scrollTo(e, 'support')}>
          Privacy & Terms
        </Link>
      </section>
    </nav>
  );
}