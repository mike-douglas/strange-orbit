import Image from "next/image";
import styles from "./Nav.module.css";

export default function Nav() {
  return (
    <nav className={styles.nav}>
      <div className={styles.logoWrap}>
        <Image
          src="/chatto/images/app-icon.png"
          alt="Chatto app icon"
          width={32}
          height={32}
          className={styles.logoIcon}
        />
        <span className={styles.logo}>
          チャット<span className={styles.logoEn}>Chatto</span>
        </span>
      </div>
      <a
        href="https://apps.apple.com/app/id6769604072"
        className={styles.cta}
        aria-label="Download Chatto on the App Store"
        target="_blank"
        rel="noopener noreferrer"
      >
        Download
      </a>
    </nav>
  );
}
