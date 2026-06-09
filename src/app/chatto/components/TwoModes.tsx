import Image from "next/image";
import styles from "./TwoModes.module.css";

export default function TwoModes() {
  return (
    <section className={styles.section}>
      <Image
        src="/chatto/images/japanese-folding-screen.png"
        alt=""
        aria-hidden="true"
        width={360}
        height={360}
        className={styles.ornamentScreen}
      />
      <div className={styles.inner}>
        <div className={styles.sectionLabel}>認識と入力 · Recognition &amp; Typing</div>
        <h2 className={styles.heading}>
          Most apps stop at recognition.<br />Chatto doesn&apos;t.
        </h2>
        <p className={styles.body}>
          Most apps teach you to recognize kana, but stop there. Chatto also
          has you type on a real Japanese keyboard, so both skills grow together.
        </p>

        <div className={styles.modes}>
          <div className={styles.modeCard}>
            <div className={styles.modeHeader} style={{ background: "#4ecba022" }}>
              <span className={styles.modeBadge} style={{ background: "#4ecba0", color: "#ffffff" }}>
                クイズ · Quiz
              </span>
            </div>
            <div className={styles.modeBody}>
              <h3 className={styles.modeTitle}>Build Recognition First</h3>
              <p className={styles.modeDesc}>
                See a kana character. Pick the correct reading from four options. Wrong
                answers are chosen from visually similar characters so you learn the real
                differences, not just luck or process of elimination.
              </p>
              <ul className={styles.modeFeatures}>
                <li>Multiple-choice flashcards</li>
                <li>Bidirectional: kana → romaji and romaji → kana</li>
                <li>Smart distractors: あ/お, シ/ツ, ソ/ン</li>
                <li>SRS weighting within each session</li>
              </ul>
            </div>
          </div>

          <div className={styles.modeCard}>
            <div className={styles.modeHeader} style={{ background: "#e8607a22" }}>
              <span className={styles.modeBadge} style={{ background: "#e8607a", color: "#ffffff" }}>
                チャット · Chat
              </span>
            </div>
            <div className={styles.modeBody}>
              <h3 className={styles.modeTitle}>Type Like You Text</h3>
              <p className={styles.modeDesc}>
                Sensei prompts you with a romaji reading. You type the kana on your
                actual Japanese keyboard, same as you would texting someone in Japan.
                Exact match, no shortcuts.
              </p>
              <ul className={styles.modeFeatures}>
                <li>iMessage-style conversation UI</li>
                <li>Real Japanese keyboard required</li>
                <li>Hints after 8 seconds, no penalty</li>
                <li>Response-time records ⚡</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
