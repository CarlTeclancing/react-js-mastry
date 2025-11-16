import { BookOpen, Target } from 'lucide-react';
import './Header.css';

interface HeaderProps {
  internName: string;
}

export default function Header({ internName }: HeaderProps) {
  return (
    <header className="header">
      <div className="header-content">
        <div className="header-branding">
          <div className="header-icon">
            <BookOpen size={32} color="#fff" />
          </div>
          <div className="header-text">
            <h1>{internName}</h1>
            <p>12-Week Learning Journey</p>
          </div>
        </div>
        <div className="header-badge">
          <Target size={20} />
          <span>Master React.js</span>
        </div>
      </div>
    </header>
  );
}
