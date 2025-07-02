import Image from "next/image";
import { Button } from "./Button";
import styles from "./Hero.module.css";
import gridStyles from "../../styles/grid.module.css";
import { AppleIcon } from "./Icons";


function HeroContent() {
  return (
    <div className={styles.heroContent}>
      <div className={styles.textBlock}>
        <p className={`${styles.subheading} ${styles.darkSubheading}`}>
          GLP Medication Tracking
        </p>
        <h1 className={styles.heading}>A GLP tracking app that you'll love using</h1>
        <p className={`${styles.description} ${styles.darkDescription}`}>Stay on top of your medication, monitor your progress, and improve your health with MyGLP.</p>
      </div>
      <div className={styles.buttonGroup}>
        <Button href="#" variant="primary">
           <AppleIcon width={24} /> Download on the App Store
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
