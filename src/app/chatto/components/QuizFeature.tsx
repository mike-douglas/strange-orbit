import Image from "next/image";
import styles from "./QuizFeature.module.css";

export default function QuizFeature() {
  return (
    <section className={styles.section}>
      <div className={styles.inner}>
        <div className={styles.mockupArea}>
          <Image
            src="/chatto/images/quiz-mode-bezel.png"
            alt="Chatto quiz mode screenshot"
            width={320}
            height={650}
            style={{ width: "100%", maxWidth: 320, height: "auto" }}
          />
        </div>

        <div className={styles.text}>
          <div className={styles.sectionLabel}>クイズモード · Quiz Mode</div>
          <h2 className={styles.heading}>
            Recognition before production.
          </h2>
          <p className={styles.body}>
            Before you can type a character, you need to know it. Quiz mode builds
            that foundation with multiple-choice flashcards. The wrong answers are
            chosen from visually similar characters, so you have to really look.
          </p>
          <div className={styles.highlights}>
            <div className={styles.highlight}>
              <div className={styles.highlightKana}>
                <span>あ</span>
                <span className={styles.arrow}>→</span>
                <span>お</span>
              </div>
              <p>Distractors are visually similar characters. You have to look closely.</p>
            </div>
            <div className={styles.highlight}>
              <div className={styles.highlightKana}>
                <span>シ</span>
                <span className={styles.arrow}>→</span>
                <span>ツ</span>
              </div>
              <p>These are the ones that trip most people up, and Chatto makes sure you get them sorted.</p>
            </div>
          </div>
          <p className={styles.caption}>
            正解！· sekai · correct! &nbsp; ちがう · chigau · wrong
          </p>
        </div>
      </div>
    </section>
  );
}
