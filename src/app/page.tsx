import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.home}>
      <article>
        <section>
          <p>Hello from <strong>Strange Orbit</strong>. I&apos;m a software engineer building apps for Apple platforms.</p>
          <p>More coming soon.</p>
        </section>
      </article>
      <footer>
        Say <a href="mailto:hello@strange-orbit.com">hello@</a>.
      </footer>
    </main>
  );
}
