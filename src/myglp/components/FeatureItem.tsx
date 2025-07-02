import Image from 'next/image';
import styles from './FeatureItem.module.css';

interface FeatureItemProps {
  title: string;
  description: string;
}

const FeatureItem = ({ title, description }: FeatureItemProps) => {
  return (
    <div className={styles.featureItem}>
      <h3>{title}</h3>
      <p>{description}</p>
      <Image src="https://placehold.co/200x400" alt="Feature Image" width={200} height={400} />
    </div>
  );
};

export default FeatureItem;
