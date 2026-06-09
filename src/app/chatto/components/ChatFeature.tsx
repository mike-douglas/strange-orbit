import Image from "next/image";
import styles from "./ChatFeature.module.css";

export default function ChatFeature() {
  return (
    <section className={styles.section}>
      <div className={styles.inner}>
        <div className={styles.text}>
          <div className={styles.sectionLabel}>チャットモード · Chat Mode</div>
          <h2 className={styles.heading}>
            Your sensei is waiting.<br />Type your answer.
          </h2>
          <p className={styles.body}>
            Chatto&apos;s chat screen looks and feels like iMessage, so typing Japanese
            feels more like texting than studying. Sensei sends you a romaji prompt,
            you type the kana, and the conversation keeps going.
          </p>
          <div className={styles.features}>
            <div className={styles.feature}>
              <span className={styles.featureIcon}>💬</span>
              <div>
                <strong>Conversation-first UI</strong>
                <p>Prompts come in as messages, and your answers go right back, with the rhythm of a real conversation.</p>
              </div>
            </div>
            <div className={styles.feature}>
              <span className={styles.featureIcon}>🔥</span>
              <div>
                <strong>Streak &amp; accuracy tracking</strong>
                <p>A floating stats bar keeps track of your streak, accuracy, and progress, updating after every answer.</p>
              </div>
            </div>
            <div className={styles.feature}>
              <span className={styles.featureIcon}>⚡</span>
              <div>
                <strong>Response time records</strong>
                <p>Beat your best time on any character and it surfaces inline: &ldquo;New Record! 4.41 sec&rdquo;</p>
              </div>
            </div>
            <div className={styles.feature}>
              <span className={styles.featureIcon}>🤫</span>
              <div>
                <strong>Hints, no penalty</strong>
                <p>If you&apos;re stuck for 8 seconds, a hint appears with no penalty. Learning the character is the point, not struggling through it.</p>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.mockupArea}>
          <Image
            src="/chatto/images/chat-dark-bezel.png"
            alt="Chatto chat mode dark screenshot"
            width={320}
            height={650}
            style={{ width: "100%", maxWidth: 320, height: "auto" }}
          />
        </div>
      </div>
    </section>
  );
}
