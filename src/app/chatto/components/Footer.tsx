import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <span className={styles.logo}>チャット · Chatto</span>
        <span className={styles.copy}>
          A Strange Orbit app · iOS · Free
        </span>
      </div>
    </footer>
  );
}
