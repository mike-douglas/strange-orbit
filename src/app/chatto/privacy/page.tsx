import Nav from "../components/Nav";
import Footer from "../components/Footer";
import styles from "./page.module.css";

export const metadata = {
  title: "Privacy Policy — Chatto",
  description: "Chatto privacy policy. We don't store your data on our servers.",
};

export default function PrivacyPage() {
  return (
    <main className={styles.chatto}>
      <Nav />
      <div className={styles.container}>
        <h1 className={styles.title}>Privacy Policy</h1>
        <p className={styles.updated}>Last updated: June 9, 2026</p>

        <section className={styles.section}>
          <h2>The short version</h2>
          <p>
            Chatto does not store any of your personal data on our servers.
            Your learning progress, settings, and content stay on your device.
            The only data we collect is anonymous usage analytics to understand
            how people use the app so we can make it better.
          </p>
        </section>

        <section className={styles.section}>
          <h2>What we don&apos;t collect</h2>
          <p>We do not collect, transmit, or store:</p>
          <ul>
            <li>Your name, email address, or any account information</li>
            <li>Your learning history, quiz results, or progress</li>
            <li>Any content you create or interact with in the app</li>
            <li>Your location</li>
            <li>Any information that could identify you as an individual</li>
          </ul>
        </section>

        <section className={styles.section}>
          <h2>Analytics</h2>
          <p>
            We collect anonymous, aggregated analytics data to understand which
            features are used and how people navigate the app. This data helps
            us prioritize improvements and fix problems. It cannot be traced
            back to any individual user.
          </p>
          <p>
            Examples of what this includes: which screens are visited, how
            often features like the quiz or chat mode are opened, and general
            session length. It does not include any content from your sessions.
          </p>
        </section>

        <section className={styles.section}>
          <h2>Data stored on your device</h2>
          <p>
            Chatto stores your progress, settings, and any decks you create
            locally on your device. This data never leaves your device and is
            subject to Apple&apos;s standard iOS data protection.
          </p>
        </section>

        <section className={styles.section}>
          <h2>Contact</h2>
          <p>
            Questions about this policy? Reach us at{" "}
            <a href="mailto:hello@strange-orbit.com">hello@strange-orbit.com</a>.
          </p>
        </section>
      </div>
      <Footer />
    </main>
  );
}
