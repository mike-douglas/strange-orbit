import styles from './MyGLPLayout.module.css';

export default function MyGLPLayout({ children }: { children: React.ReactNode }) {
  return (
    <main className={styles.container}>
      {children}
    </main>
  );
}
