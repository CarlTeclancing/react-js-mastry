import { useState } from 'react';
import { LogIn, UserPlus, LogOut } from 'lucide-react';
import { InternProfile, UserSession } from '../types/index';
import './UserAuth.css';

interface UserAuthProps {
  userSession: UserSession | null;
  allUsers: InternProfile[];
  onCreateUser: (name: string, email?: string) => void;
  onLoginUser: (userId: string) => void;
  onLogoutUser: () => void;
}

export default function UserAuth({
  userSession,
  allUsers,
  onCreateUser,
  onLoginUser,
  onLogoutUser,
}: UserAuthProps) {
  const [showModal, setShowModal] = useState(!userSession);
  const [isNewUser, setIsNewUser] = useState(allUsers.length === 0);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [selectedUserId, setSelectedUserId] = useState('');

  const handleCreateUser = (e: React.FormEvent) => {
    e.preventDefault();
    if (name.trim()) {
      onCreateUser(name, email || undefined);
      setName('');
      setEmail('');
      setShowModal(false);
    }
  };

  const handleLoginUser = (e: React.FormEvent) => {
    e.preventDefault();
    if (selectedUserId) {
      onLoginUser(selectedUserId);
      setShowModal(false);
    }
  };

  const handleLogout = () => {
    onLogoutUser();
    setShowModal(true);
    setIsNewUser(false);
    setSelectedUserId('');
  };

  if (!showModal) {
    return (
      <div className="user-info-bar">
        <div className="user-info-content">
          <span className="user-greeting">Welcome, {userSession?.internName}! 👋</span>
          <button className="logout-btn" onClick={handleLogout}>
            <LogOut size={16} />
            Switch User
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="user-auth-overlay">
      <div className="user-auth-modal">
        <div className="auth-header">
          <h2>
            {isNewUser ? (
              <>
                <UserPlus size={24} /> Start Your React.js Journey
              </>
            ) : (
              <>
                <LogIn size={24} /> Select Your Profile
              </>
            )}
          </h2>
        </div>

        {isNewUser ? (
          <form onSubmit={handleCreateUser} className="auth-form">
            <div className="form-group">
              <label htmlFor="name">Your Name *</label>
              <input
                id="name"
                type="text"
                placeholder="Enter your full name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                autoFocus
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">Email (Optional)</label>
              <input
                id="email"
                type="email"
                placeholder="your.email@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <button type="submit" className="submit-btn" disabled={!name.trim()}>
              <UserPlus size={18} />
              Create Profile & Start Learning
            </button>

            {allUsers.length > 0 && (
              <button
                type="button"
                className="toggle-btn"
                onClick={() => setIsNewUser(false)}
              >
                Or select existing profile
              </button>
            )}
          </form>
        ) : (
          <form onSubmit={handleLoginUser} className="auth-form">
            <div className="form-group">
              <label htmlFor="user-select">Select Your Profile</label>
              <select
                id="user-select"
                value={selectedUserId}
                onChange={(e) => setSelectedUserId(e.target.value)}
                autoFocus
                required
              >
                <option value="">-- Choose a profile --</option>
                {allUsers.map((user) => (
                  <option key={user.id} value={user.id}>
                    {user.name}
                    {user.email ? ` (${user.email})` : ''}
                  </option>
                ))}
              </select>
            </div>

            <button type="submit" className="submit-btn" disabled={!selectedUserId}>
              <LogIn size={18} />
              Login
            </button>

            <button
              type="button"
              className="toggle-btn"
              onClick={() => setIsNewUser(true)}
            >
              Create New Profile
            </button>
          </form>
        )}

        <div className="auth-info">
          <p>
            🔒 <strong>Your data is secure:</strong> All progress is stored locally on your device.
            Each user has their own unique progress tracking.
          </p>
        </div>
      </div>
    </div>
  );
}
