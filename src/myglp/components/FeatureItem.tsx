import Image from 'next/image';
import styles from './FeatureItem.module.css';

interface FeatureItemProps {
  title: string;
  description: string;
  imageSrc: string;
}

export default function FeatureItem({ title, description, imageSrc }: FeatureItemProps) {
  return (
    <div className={styles.featureItem}>
      <div className={styles.featureItemCopy}>
      <h3>{title}</h3>
      <p>{description}</p>
      </div>
      <Image className={styles.image} src={imageSrc} alt={'Image for: ' + title} width="0" height="0" sizes="100vw" style={{ width: '100%', height: 'auto' }} />
    </div>
  );
}
