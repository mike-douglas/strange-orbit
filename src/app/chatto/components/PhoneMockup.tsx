import styles from "./PhoneMockup.module.css";

interface PhoneMockupProps {
  label: string;
  description: string;
  accentColor: string;
  kanaCharacter?: string;
  kanaReading?: string;
}

export default function PhoneMockup({
  label,
  description,
  accentColor,
  kanaCharacter,
  kanaReading,
}: PhoneMockupProps) {
  return (
    <div className={styles.phone}>
      <div className={styles.notch} />
      <div className={styles.screen}>
        <div className={styles.screenContent}>
          <div
            className={styles.modeBadge}
            style={{ background: accentColor + "22", color: accentColor }}
          >
            {label}
          </div>
          {kanaCharacter && (
            <div className={styles.kanaDisplay}>
              <span className={styles.kanaChar}>{kanaCharacter}</span>
              <span className={styles.kanaReading}>{kanaReading}</span>
            </div>
          )}
          <p className={styles.desc}>{description}</p>
          <div
            className={styles.imagePlaceholder}
            aria-label={`Screenshot placeholder: ${label}`}
          >
            <span className={styles.placeholderText}>
              📱 App screenshot
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
