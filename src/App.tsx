import { useState } from 'react';
import { useInternTracker } from './hooks/useInternTracker';
import { useUserManagement } from './hooks/useUserManagement';
import { initialInternData } from './data/weeklyData';
import Header from './components/Header';
import Navigation from './components/Navigation';
import WeeklyPage from './components/WeeklyPage';
import Dashboard from './components/Dashboard';
import UserAuth from './components/UserAuth';
import './App.css';

type ViewType = 'dashboard' | 'week';

function App() {
  const { 
    userSession, 
    allUsers, 
    createUser, 
    loginUser, 
    logoutUser 
  } = useUserManagement();

  const { 
    data, 
    toggleTask, 
    toggleActivity, 
    updateNotes, 
    getWeekData, 
    getOverallProgress 
  } = useInternTracker(initialInternData, userSession?.internId);
  
  const [currentView, setCurrentView] = useState<ViewType>('dashboard');
  const [selectedWeek, setSelectedWeek] = useState<number>(1);

  const handleWeekSelect = (week: number) => {
    setSelectedWeek(week);
    setCurrentView('week');
  };

  // Show login screen if no user is logged in
  if (!userSession) {
    return (
      <UserAuth
        userSession={userSession}
        allUsers={allUsers}
        onCreateUser={createUser}
        onLoginUser={loginUser}
        onLogoutUser={logoutUser}
      />
    );
  }

  return (
    <div className="app-container">
      <UserAuth
        userSession={userSession}
        allUsers={allUsers}
        onCreateUser={createUser}
        onLoginUser={loginUser}
        onLogoutUser={logoutUser}
      />
      <Header internName={data.name} />
      <Navigation 
        currentView={currentView}
        onViewChange={setCurrentView}
      />
      <main className="main-content">
        {currentView === 'dashboard' ? (
          <Dashboard 
            weeks={data.weeks}
            overallProgress={getOverallProgress()}
            onWeekClick={handleWeekSelect}
          />
        ) : (
          <WeeklyPage 
            weekData={getWeekData(selectedWeek)}
            onToggleTask={(taskId: string) => toggleTask(selectedWeek, taskId)}
            onToggleActivity={(activityId: string) => toggleActivity(selectedWeek, activityId)}
            onNotesUpdate={(notes: string) => updateNotes(selectedWeek, notes)}
            allWeeks={data.weeks}
            onWeekSelect={handleWeekSelect}
          />
        )}
      </main>
    </div>
  );
}

export default App;
