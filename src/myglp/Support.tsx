import allStyles from './all.module.css';
import styles from './Support.module.css';

import LinkButton from './components/LinkButton';
import Header from './components/Header';

export default function Support() {
  return (
    <div id="support" className={styles.supportContainer}>
      <section className={allStyles.wideContainer}>
        <Header title="Support" />
        <div className={styles.supportGrid}>
          <article>
            <h3>Get in Touch</h3>
            <p>
              Send questions, comments, or feature requests to <a href="mailto:support@strange-orbit.com">support@strange-orbit.com</a>.
            </p>
          </article>
          <article>
            <h3>Privacy &amp; Terms of Use</h3>
            <p>
              Take a look at the privacy policy and terms of use below.
            </p>
            <div>
              <LinkButton title="Privacy Policy" href="/myglp/privacy" />
            </div>
            <div>
              <LinkButton title="Terms of Use" href="/myglp/terms" />
            </div>
          </article>
        </div>
      </section>
    </div>
  )
}