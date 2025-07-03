import allStyles from './all.module.css';
import styles from './Download.module.css';
import AppStoreButton from './components/AppStoreButton';

export default function Download() {
  return (
    <div className={styles.downloadContainer}>
      <section className={allStyles.wideContainer}>
        <h2>Ready to start measuring your goals with MyGLP?</h2>
        <p>Never miss a dose, track your progress, and monitor your health with ease. Simplify your experience and stay on top of your wellness goals.</p>
        <AppStoreButton />
      </section>
    </div>
  );
}
