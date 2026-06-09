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
            that foundation with multiple-choice flashcards — fast, focused, and
            deliberately challenging.
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
              <p>The characters that trip everyone up — Chatto makes sure you learn the difference.</p>
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
