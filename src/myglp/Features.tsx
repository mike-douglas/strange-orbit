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
            title="Record Every Detail"
            description="Save your shot dose, brand, and injection site so you never lose track."
            imageSrc="/Shot-Details.png"
          />
          <FeatureItem
            title="Track Your Progress"
            description="Monitor your weight loss journey with ease."
            imageSrc="/Weight-Trends.png"
          />
          <FeatureItem
            title="Everything In One Place"
            description="Keep a comprehensive log of your shots, weight, and side effects in one convenient app."
            imageSrc="/Timeline-Tracking.png"
          />
        </div>
        <div className={styles.featureList}>
          <h2>Plus, other features.</h2>
          <ul>
            <li><strong>🔔 Notifications.</strong> Get reminders for upcoming shot so you never miss a dose.</li>
            <li><strong>🧘🏾‍♀️ Mood tracking.</strong> Record your mood and mental state throughout your journey.</li>
            <li><strong>📏 Customizable units.</strong> Choose the measurement units that work for you.</li>
          </ul>
        </div>
      </section>
    </div>
  );
}
