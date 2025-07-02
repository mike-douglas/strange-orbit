import allStyles from './all.module.css';

import Header from './components/Header';

export default function FAQ() {
  return (
    <div id="faq">
      <section className={allStyles.wideContainer}>
        <Header title="Questions" />
      </section>
    </div>
  )
}