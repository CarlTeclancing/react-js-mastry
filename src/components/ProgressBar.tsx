import './ProgressBar.css';

interface ProgressBarProps {
  percentage: number;
  size?: 'small' | 'large';
}

export default function ProgressBar({ percentage, size = 'large' }: ProgressBarProps) {
  return (
    <div className={`progress-bar progress-${size}`}>
      <div
        className="progress-fill"
        style={{ width: `${Math.min(percentage, 100)}%` }}
      />
    </div>
  );
}
