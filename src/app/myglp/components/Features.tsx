import { MountainIcon } from "./Icons";
import { Button } from "./Button";
import styles from "./Features.module.css";
import gridStyles from "../styles/grid.module.css";

export default function Features() {
  return (
    <section className={styles.featuresSection}>
      <div className={`${gridStyles.container} ${styles.featuresContainer}`}>
        <div className={`${styles.gridContainer} ${gridStyles.grid}`}>
          <div className={styles.contentWrapper}>
            <div className={styles.textBlock}>
              <div className={`${styles.badge} ${styles.darkBadge}`}>
                Key Features
              </div>
              <h2 className={styles.heading}>Smarter Medication Management</h2>
              <p className={`${styles.description} ${styles.darkDescription}`}>
                MyGLP helps you stay on track with your GLP-1 medication. Set smart reminders, log your doses, and
                never miss a beat.
              </p>
            </div>
            <ul className={styles.featureList}>
              <li>
                <MountainIcon className={`${styles.featureItem} mr-2 inline-block h-4 w-4`} />
                Customizable notifications for your shot schedule.
              </li>
              <li>
                <MountainIcon className={`${styles.featureItem} mr-2 inline-block h-4 w-4`} />
                Track your progress with weight, side effect, and mood monitoring.
              </li>
              <li>
                <MountainIcon className={`${styles.featureItem} mr-2 inline-block h-4 w-4`} />
                View historical data to understand trends and insights.
              </li>
            </ul>
            <div className={styles.buttonGroup}>
              <Button variant="primary" href="#">
                Get Started
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
