import Image from "next/image";
import { Button } from "./Button";
import styles from "./Hero.module.css";
import gridStyles from "../../styles/grid.module.css";

function HeroContent() {
  return (
    <div className={styles.heroContent}>
      <div className={styles.textBlock}>
        <p className={`${styles.subheading} ${styles.darkSubheading}`}>
          Mental Health App
        </p>
        <h1 className={styles.heading}>
          Find Your Calm
          <br />
          Master Your Mind
          <br />
          Live Your Best Life
        </h1>
        <p className={`${styles.description} ${styles.darkDescription}`}>
          Calmia is the all-in-one mental wellness app that empowers you to
          track your progress, connect with experts, and cultivate lasting
          inner peace. Your journey to a healthier mind starts here.
        </p>
      </div>
      <div className={styles.buttonGroup}>
        <Button href="#" variant="primary">
          Download on the App Store
        </Button>
        <Button href="#" variant="secondary">
          Play video
        </Button>
      </div>
    </div>
  );
}

function HeroImage() {
  return (
    <Image
      alt="Hero"
      className={styles.heroImage}
      height="550"
      src="https://placehold.co/550x550/png"
      width="550"
    />
  );
}

export default function Hero() {
  return (
    <section className={styles.heroSection}>
      <div className={`${gridStyles.container} ${gridStyles.grid} ${gridStyles["lg-grid-cols-2"]} ${gridStyles["lg-gap-12"]}`}>
        <HeroContent />
        <HeroImage />
      </div>
    </section>
  );
}
