import Logo from './components/Logo'

import styles from './Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <Logo className={styles.logo} />
      </header>
      <section className={styles.frontmatter}>
        <article>
          <p>Hello 👋 </p>
          <p><strong>Strange Orbit</strong> is <a href="https://miked.codes">Mike Douglas</a>, an indie iOS developer building a portfolio of beautiful, delightful apps.</p>
        </article>
      </section>
      <footer className={styles.footer}>
        Say <a href="mailto:hello@strange-orbit.com">hello@</a>.
      </footer>
    </div>
  )
}