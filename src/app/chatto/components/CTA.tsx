import styles from "./CTA.module.css";

export default function CTA() {
  return (
    <section className={styles.section}>
      <div className={styles.inner}>
        <div className={styles.kanaDisplay}>
          <span className={styles.kana}>は</span>
          <span className={styles.kanaReading}>ha</span>
          <span className={styles.kana}>じ</span>
          <span className={styles.kanaReading}>ji</span>
          <span className={styles.kana}>め</span>
          <span className={styles.kanaReading}>me</span>
          <span className={styles.kana}>ま</span>
          <span className={styles.kanaReading}>ma</span>
          <span className={styles.kana}>し</span>
          <span className={styles.kanaReading}>shi</span>
          <span className={styles.kana}>ょ</span>
          <span className={styles.kanaReading}>yo</span>
          <span className={styles.kana}>う</span>
          <span className={styles.kanaReading}>u</span>
        </div>
        <p className={styles.translation}>はじめましょう · let&apos;s begin</p>

        <h2 className={styles.heading}>Ready to practice?</h2>
        <p className={styles.body}>
          Free on the App Store. No subscription. No daily streaks to maintain.
          Just you, the characters, and the keyboard.
        </p>

        <div className={styles.actions}>
          <a href="https://apps.apple.com/app/id6769604072" className={styles.appStoreBtn} target="_blank" rel="noopener noreferrer">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
              <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
            </svg>
            Download on the App Store
          </a>
        </div>

        <p className={styles.tipNote}>
          All lessons are free, and if you want to support development, there&apos;s a tip jar inside the app.
        </p>
      </div>
    </section>
  );
}
