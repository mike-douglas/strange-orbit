
import '../myglp.css';

interface FeatureItemProps {
  title: string;
  description: string;
}

const FeatureItem = ({ title, description }: FeatureItemProps) => {
  return (
    <div className="featureItem">
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
};

export default FeatureItem;
