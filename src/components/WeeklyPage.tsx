import { ChevronLeft, ChevronRight, CheckCircle2, Circle } from 'lucide-react';
import { WeekData } from '../types/index';
import TaskList from './TaskList';
import ActivityList from './ActivityList';
import NotesSection from './NotesSection';
import './WeeklyPage.css';

interface WeeklyPageProps {
  weekData?: WeekData;
  onToggleTask: (taskId: string) => void;
  onToggleActivity: (activityId: string) => void;
  onNotesUpdate: (notes: string) => void;
  allWeeks: WeekData[];
  onWeekSelect: (week: number) => void;
}

export default function WeeklyPage({
  weekData,
  onToggleTask,
  onToggleActivity,
  onNotesUpdate,
  allWeeks,
  onWeekSelect
}: WeeklyPageProps) {
  if (!weekData) {
    return <div className="weekly-page">Select a week to view</div>;
  }

  const currentIndex = allWeeks.findIndex(w => w.week === weekData.week);
  const hasPrevious = currentIndex > 0;
  const hasNext = currentIndex < allWeeks.length - 1;

  const handlePrevious = () => {
    if (hasPrevious) {
      onWeekSelect(allWeeks[currentIndex - 1].week);
    }
  };

  const handleNext = () => {
    if (hasNext) {
      onWeekSelect(allWeeks[currentIndex + 1].week);
    }
  };

  return (
    <div className="weekly-page">
      <div className="week-navigation">
        <button
          className="nav-arrow"
          onClick={handlePrevious}
          disabled={!hasPrevious}
          title="Previous week"
        >
          <ChevronLeft size={24} />
        </button>

        <div className="week-info">
          <h1>Week {weekData.week}</h1>
          <p className="week-subtitle">{weekData.startDate} to {weekData.endDate}</p>
        </div>

        <button
          className="nav-arrow"
          onClick={handleNext}
          disabled={!hasNext}
          title="Next week"
        >
          <ChevronRight size={24} />
        </button>
      </div>

      <div className="week-header-card">
        <div className="topic-section">
          <h2>{weekData.topic}</h2>
          <p>{weekData.description}</p>
        </div>
        <div className="progress-indicator">
          <div className="progress-circle">
            <svg width="120" height="120" viewBox="0 0 120 120">
              <circle cx="60" cy="60" r="54" fill="none" stroke="#e9ecef" strokeWidth="8" />
              <circle
                cx="60"
                cy="60"
                r="54"
                fill="none"
                stroke="url(#grad)"
                strokeWidth="8"
                strokeDasharray={`${(weekData.progressPercentage / 100) * (54 * 2 * Math.PI)} ${54 * 2 * Math.PI}`}
                style={{ transition: 'stroke-dasharray 0.3s ease' }}
              />
              <defs>
                <linearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#667eea" />
                  <stop offset="100%" stopColor="#764ba2" />
                </linearGradient>
              </defs>
            </svg>
            <div className="progress-text">
              <span className="progress-percentage">{Math.round(weekData.progressPercentage)}%</span>
            </div>
          </div>
        </div>
      </div>

      <div className="week-content">
        <div className="content-column">
          <TaskList
            tasks={weekData.tasks}
            onToggleTask={onToggleTask}
          />

          <ActivityList
            activities={weekData.activities}
            onToggleActivity={onToggleActivity}
          />
        </div>

        <div className="content-column">
          <NotesSection
            notes={weekData.notes}
            onNotesUpdate={onNotesUpdate}
          />
        </div>
      </div>

      <div className="week-footer">
        <div className="summary">
          <div className="summary-item">
            <CheckCircle2 size={20} className="icon-completed" />
            <span>Tasks: {weekData.tasks.filter(t => t.completed).length}/{weekData.tasks.length}</span>
          </div>
          <div className="summary-item">
            <Circle size={20} className="icon-activity" />
            <span>Activities: {weekData.activities.filter(a => a.completed).length}/{weekData.activities.length}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
