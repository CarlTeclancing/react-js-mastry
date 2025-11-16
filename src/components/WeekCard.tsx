import { CheckCircle2, Clock } from 'lucide-react';
import { WeekData } from '../types/index';
import ProgressBar from './ProgressBar';
import './WeekCard.css';

interface WeekCardProps {
  week: WeekData;
  onClick: () => void;
}

export default function WeekCard({ week, onClick }: WeekCardProps) {
  const completedTasks = week.tasks.filter(t => t.completed).length;
  const completedActivities = week.activities.filter(a => a.completed).length;

  return (
    <div className="week-card" onClick={onClick}>
      <div className="week-header">
        <div className="week-number">Week {week.week}</div>
        <div className="week-status">
          {week.progressPercentage === 100 ? (
            <div className="badge completed">
              <CheckCircle2 size={16} />
              Completed
            </div>
          ) : week.progressPercentage > 0 ? (
            <div className="badge in-progress">
              <Clock size={16} />
              In Progress
            </div>
          ) : (
            <div className="badge not-started">Not Started</div>
          )}
        </div>
      </div>

      <h3 className="week-topic">{week.topic}</h3>
      <p className="week-description">{week.description}</p>

      <div className="week-dates">
        <span>{week.startDate} to {week.endDate}</span>
      </div>

      <div className="week-progress">
        <ProgressBar percentage={week.progressPercentage} size="small" />
        <div className="week-stats">
          <span>Tasks: {completedTasks}/{week.tasks.length}</span>
          <span>Activities: {completedActivities}/{week.activities.length}</span>
        </div>
      </div>
    </div>
  );
}
