import styles from './Features.module.css';
import allStyles from './all.module.css';

import FeatureItem from './components/FeatureItem';
import Header from './components/Header';

export default function Features() {
  return (
    <div id="features" className={styles.featureContainer}>
      <section className={allStyles.wideContainer}>
        <Header title="Features" />
        <div className={styles.featureGrid}>
          <FeatureItem
            title="Medication Tracking"
            description="Easily log your GLP-1 medication doses and schedules."
          />
          <FeatureItem
            title="Progress Monitoring"
            description="Track your weight, side effects, and other health metrics over time."
          />
          <FeatureItem
            title="Personalized Insights"
            description="Receive tailored insights and tips based on your data."
          />
        </div>
      </section>
    </div>
  );
}
