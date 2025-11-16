import { WeekData } from '../types/index';
import WeekCard from './WeekCard.tsx';
import ProgressBar from './ProgressBar.tsx';
import './Dashboard.css';

interface DashboardProps {
  weeks: WeekData[];
  overallProgress: number;
  onWeekClick: (week: number) => void;
}

export default function Dashboard({ weeks, overallProgress, onWeekClick }: DashboardProps) {
  const completedWeeks = weeks.filter(w => w.progressPercentage === 100).length;
  const inProgressWeeks = weeks.filter(w => w.progressPercentage > 0 && w.progressPercentage < 100).length;
  const notStartedWeeks = weeks.filter(w => w.progressPercentage === 0).length;

  return (
    <div className="dashboard">
      <section className="dashboard-stats">
        <div className="stat-card">
          <div className="stat-number">{completedWeeks}</div>
          <div className="stat-label">Weeks Completed</div>
        </div>
        <div className="stat-card">
          <div className="stat-number">{inProgressWeeks}</div>
          <div className="stat-label">In Progress</div>
        </div>
        <div className="stat-card">
          <div className="stat-number">{notStartedWeeks}</div>
          <div className="stat-label">Not Started</div>
        </div>
        <div className="stat-card">
          <div className="stat-number">{Math.round(overallProgress)}%</div>
          <div className="stat-label">Overall Progress</div>
        </div>
      </section>

      <section className="progress-section">
        <h2>Learning Progress</h2>
        <ProgressBar percentage={overallProgress} />
        <div className="progress-details">
          <span>{Math.round(overallProgress)}% Complete</span>
          <span>{weeks.length} weeks total</span>
        </div>
      </section>

      <section className="weeks-grid">
        <h2>Weekly Modules</h2>
        <div className="grid">
          {weeks.map((week) => (
            <WeekCard
              key={week.week}
              week={week}
              onClick={() => onWeekClick(week.week)}
            />
          ))}
        </div>
      </section>
    </div>
  );
}
