import Image from "next/image";
import styles from "./Testimonials.module.css";
import gridStyles from "../styles/grid.module.css";

export default function Testimonials() {
  return (
    <section className={`${styles.testimonialsSection} ${styles.darkTestimonialsSection}`}>
      <div className={`${gridStyles.container} ${styles.container}`}>
        <div className={styles.spaceY3}>
          <h2 className={styles.heading}>What Our Users Say</h2>
          <p className={`${styles.description} ${styles.darkDescription}`}>
            Hear from the people who use MyGLP to manage their health journey.
          </p>
        </div>
        <div className={`${styles.testimonialsGrid} ${gridStyles.grid}`}>
          <div className={styles.testimonialItem}>
            <div className={styles.testimonialContent}>
              <Image
                alt="Avatar"
                className={styles.avatar}
                height="100"
                src="https://placehold.co/100x100/png"
                style={{
                  aspectRatio: "100/100",
                  objectFit: "cover",
                }}
                width="100"
              />
              <div className={styles.spaceY2}>
                <p className={styles.testimonialText}>MyGLP has transformed my medication routine!</p>
                <p className={`${styles.testimonialAuthor} ${styles.darkTestimonialAuthor}`}>Jane D. - MyGLP User</p>
              </div>
            </div>
          </div>
          <div className={styles.testimonialItem}>
            <div className={styles.testimonialContent}>
              <Image
                alt="Avatar"
                className={styles.avatar}
                height="100"
                src="https://placehold.co/100x100/png"
                style={{
                  aspectRatio: "100/100",
                  objectFit: "cover",
                }}
                width="100"
              />
              <div className={styles.spaceY2}>
                <p className={styles.testimonialText}>
                  I love the reminders and how easy it is to track my progress.
                </p>
                <p className={`${styles.testimonialAuthor} ${styles.darkTestimonialAuthor}`}>John S. - MyGLP User</p>
              </div>
            </div>
          </div>
          <div className={styles.testimonialItem}>
            <div className={styles.testimonialContent}>
              <Image
                alt="Avatar"
                className={styles.avatar}
                height="100"
                src="https://placehold.co/100x100/png"
                style={{
                  aspectRatio: "100/100",
                  objectFit: "cover",
                }}
                width="100"
              />
              <div className={styles.spaceY2}>
                <p className={styles.testimonialText}>
                  This app is a game-changer for anyone on GLP-1 medication.
                </p>
                <p className={`${styles.testimonialAuthor} ${styles.darkTestimonialAuthor}`}>Sarah L. - MyGLP User</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
