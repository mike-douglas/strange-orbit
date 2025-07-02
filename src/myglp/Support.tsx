import allStyles from './all.module.css';

import Header from './components/Header';

export default function Support() {
  return (
    <div id="support">
      <section className={allStyles.wideContainer}>
        <Header title="Support" />
      </section>
    </div>
  )
}