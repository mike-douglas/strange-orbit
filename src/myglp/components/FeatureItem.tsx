import Image from 'next/image';
import styles from './FeatureItem.module.css';

interface FeatureItemProps {
  title: string;
  description: string;
}

export default function FeatureItem({ title, description }: FeatureItemProps) {
  return (
    <div className={styles.featureItem}>
      <h3>{title}</h3>
      <p>{description}</p>
      <Image src="https://placehold.co/300x450" alt="Feature Image" width={300} height={450} />
    </div>
  );
}
