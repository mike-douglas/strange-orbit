
import styles from '../myglp.module.css';
import FeatureItem from './FeatureItem';

const Features = () => {
  return (
    <section className={styles.featuresSection}>
      <h2>Key Features</h2>
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
  );
};

export default Features;
