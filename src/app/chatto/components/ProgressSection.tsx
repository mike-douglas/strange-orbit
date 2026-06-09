import Image from "next/image";
import styles from "./ProgressSection.module.css";

const sampleGrid = [
  ["あ","い","う","え","お"],
  ["か","き","く","け","こ"],
  ["さ","し","す","せ","そ"],
  ["た","ち","つ","て","と"],
  ["な","に","ぬ","ね","の"],
  ["は","ひ","ふ","へ","ほ"],
];

const masteredRows = [0, 1, 2];

export default function ProgressSection() {
  return (
    <section className={styles.section}>
      <div className={styles.inner}>
        <div className={styles.text}>
          <div className={styles.sectionLabel}>進捗 · Progress</div>
          <h2 className={styles.heading}>
            46 characters.<br />Then 25 more.
          </h2>
          <p className={styles.body}>
            Start with the 46 base hiragana. As your accuracy climbs, the voiced
            voiced dakuten characters like が, ざ, だ, and ば start unlocking too,
            and your deck keeps growing from there. Both modes count toward your progress.
          </p>
          <div className={styles.statCards}>
            <div className={styles.statCard}>
              <span className={styles.statNum}>71</span>
              <span className={styles.statLabel}>Hiragana cards</span>
            </div>
            <div className={styles.statCard}>
              <span className={styles.statNum}>71</span>
              <span className={styles.statLabel}>Katakana cards</span>
            </div>
            <div className={styles.statCard} style={{ gridColumn: "span 2" }}>
              <span className={styles.statNum}>2</span>
              <span className={styles.statLabel}>Modes · Quiz &amp; Chat</span>
            </div>
          </div>
        </div>

        <div className={styles.gridArea}>
          <div className={styles.gridCard}>
            <div className={styles.gridHeader}>
              <span className={styles.gridTitle}>ひらがな · Hiragana</span>
              <span className={styles.gridProgress}>32 / 46 mastered</span>
            </div>
            <div className={styles.kanaGrid}>
              {sampleGrid.map((row, ri) =>
                row.map((char, ci) => (
                  <div
                    key={`${ri}-${ci}`}
                    className={
                      styles.kanaCell +
                      (masteredRows.includes(ri) ? " " + styles.mastered : "")
                    }
                  >
                    {char}
                  </div>
                ))
              )}
            </div>
            <div className={styles.gridFooter}>
              <span className={styles.lockedNote}>🔒 Dakuten unlocks when base set is mastered</span>
            </div>
          </div>
          <Image
            src="/chatto/images/progress-bezel.png"
            alt="Chatto progress screen screenshot"
            width={280}
            height={570}
            style={{ width: "100%", maxWidth: 280, height: "auto", marginTop: 24 }}
          />
        </div>
      </div>
    </section>
  );
}
