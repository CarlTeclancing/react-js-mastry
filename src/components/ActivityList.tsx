import { CheckCircle2, Circle } from 'lucide-react';
import { Activity } from '../types/index';
import './ActivityList.css';

interface ActivityListProps {
  activities: Activity[];
  onToggleActivity: (activityId: string) => void;
}

export default function ActivityList({ activities, onToggleActivity }: ActivityListProps) {
  const completedCount = activities.filter(a => a.completed).length;
  const totalHours = activities.reduce((sum, a) => sum + (a.hours || 0), 0);
  const completedHours = activities
    .filter(a => a.completed)
    .reduce((sum, a) => sum + (a.hours || 0), 0);

  return (
    <div className="activity-list">
      <div className="list-header">
        <h3>Activities ({completedCount}/{activities.length})</h3>
        <span className="hours-info">{completedHours}h / {totalHours}h</span>
      </div>

      <div className="activities">
        {activities.map((activity) => (
          <div
            key={activity.id}
            className={`activity-item ${activity.completed ? 'completed' : ''}`}
          >
            <button
              className="activity-checkbox"
              onClick={() => onToggleActivity(activity.id)}
              title={activity.completed ? 'Mark incomplete' : 'Mark complete'}
            >
              {activity.completed ? (
                <CheckCircle2 size={24} className="checked" />
              ) : (
                <Circle size={24} className="unchecked" />
              )}
            </button>
            <div className="activity-content">
              <div className="activity-name">{activity.name}</div>
              {activity.hours && (
                <div className="activity-hours">{activity.hours} hours</div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
