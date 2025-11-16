import { LayoutGrid, Calendar } from 'lucide-react';
import './Navigation.css';

interface NavigationProps {
  currentView: 'dashboard' | 'week';
  onViewChange: (view: 'dashboard' | 'week') => void;
}

export default function Navigation({ currentView, onViewChange }: NavigationProps) {
  return (
    <nav className="navigation">
      <div className="nav-container">
        <button
          className={`nav-button ${currentView === 'dashboard' ? 'active' : ''}`}
          onClick={() => onViewChange('dashboard')}
        >
          <LayoutGrid size={20} />
          <span>Dashboard</span>
        </button>
        <button
          className={`nav-button ${currentView === 'week' ? 'active' : ''}`}
          onClick={() => onViewChange('week')}
        >
          <Calendar size={20} />
          <span>Weekly Plan</span>
        </button>
      </div>
    </nav>
  );
}
