import Logo from './components/Logo'

import styles from './Home.module.css'

export default function Home() {
  return (
    <div className={styles.home}>
      <header>
        <Logo />
      </header>
      <section>
        <article>
          <p>Hello from <strong>Strange Orbit</strong>. I&apos;m a software engineer building apps for Apple platforms.</p>
          <p>More coming soon.</p>
        </article>
      </section>
      <footer>
        Say <a href="mailto:hello@strange-orbit.com">hello@</a>.
      </footer>
    </div>
  )
}