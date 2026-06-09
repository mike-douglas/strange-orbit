import styles from "./page.module.css";
import Nav from "./components/Nav";
import Hero from "./components/Hero";
import TwoModes from "./components/TwoModes";
import ChatFeature from "./components/ChatFeature";
import QuizFeature from "./components/QuizFeature";
import ProgressSection from "./components/ProgressSection";
import CTA from "./components/CTA";
import Footer from "./components/Footer";

export default function ChattoPage() {
  return (
    <main className={styles.chatto}>
      <Nav />
      <Hero />
      <TwoModes />
      <ChatFeature />
      <QuizFeature />
      <ProgressSection />
      <CTA />
      <Footer />
    </main>
  );
}
