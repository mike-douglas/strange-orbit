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
            Chatto&apos;s chat screen looks and feels like iMessage — because the goal is
            for typing Japanese to feel natural, not academic. Sensei gives you a
            romaji prompt. You type the kana. Exact match, every time.
          </p>
          <div className={styles.features}>
            <div className={styles.feature}>
              <span className={styles.featureIcon}>💬</span>
              <div>
                <strong>Conversation-first UI</strong>
                <p>Prompts come as messages. Your answers go right back. The rhythm of real texting.</p>
              </div>
            </div>
            <div className={styles.feature}>
              <span className={styles.featureIcon}>🔥</span>
              <div>
                <strong>Streak &amp; accuracy tracking</strong>
                <p>A floating stats bar shows your streak, accuracy, and progress — updated after every answer.</p>
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
                <p>Stuck for 8 seconds? A hint appears. Use it — the goal is learning, not failing.</p>
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
