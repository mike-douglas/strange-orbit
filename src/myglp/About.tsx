import allStyles from './all.module.css';

import AboutMe from '@/strange-orbit/AboutMe';
import Header from './components/Header';

export default function About() {
  return (
    <section id="about" className={allStyles.wideContainer}>
      <Header title="About"/>
      <AboutMe />
    </section>
  )
}