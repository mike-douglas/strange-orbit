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
            imageSrc="/myglp/Shot-Details.png"
          />
          <FeatureItem
            title="Medication Levels"
            description="Get insight about how your body changes during your GLP-1 cycle."
            imageSrc="/myglp/Medication-Levels.png"
          />
          <FeatureItem
            title="Everything In One Place"
            description="Keep a comprehensive log of your shots, weight, and side effects in one place."
            imageSrc="/myglp/Timeline-Tracking.png"
          />
        </div>
        <div className={styles.featureList}>
          <h2>Plus, other features.</h2>
          <ul>
            <li><strong>👩‍⚕️ Apple Health Integration.</strong> See your activity levels, calories, and more from Apple Health and your other health apps in MyGLP.</li>
            <li><strong>🔔 Smart Notifications.</strong> Get reminders for upcoming shots so you never miss a dose.</li>
            <li><strong>📉 Weight Trends.</strong> Log your weight and track your progress over time toward your goal.</li>
            <li><strong>📏 Customizable units.</strong> Choose the measurement units that work for you.</li>
          </ul>
        </div>
      </section>
    </div>
  );
}
