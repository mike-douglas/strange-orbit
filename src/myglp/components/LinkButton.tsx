import styles from './LinkButton.module.css';

interface LinkButtonProps {
  title: string
  href: string
}

export default function LinkButton({ title, href }: LinkButtonProps) {
  return (
    <a className={styles.link} href={href}>
      {title}
    </a>
  )
}