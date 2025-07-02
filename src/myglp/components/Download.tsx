
import styles from './Download.module.css';
import AppStoreButton from './AppStoreButton';

const Download = () => {
  return (
    <section className={styles.downloadSection}>
      <h2>Ready to simplify your health journey?</h2>
      <p>Download the MyGLP app today and take control of your GLP-1 medication.</p>
      <AppStoreButton />
    </section>
  );
};

export default Download;
