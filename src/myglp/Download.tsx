import allStyles from './all.module.css';
import styles from './Download.module.css';
import AppStoreButton from './components/AppStoreButton';

export default function Download() {
  return (
    <section className={allStyles.wideContainer + ' ' + styles.downloadSection}>
      <h2>Ready to simplify your health journey?</h2>
      <p>Download the MyGLP app today and take control of your GLP-1 medication.</p>
      <AppStoreButton />
    </section>
  );
}
