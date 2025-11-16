import { useState } from 'react';
import { useInternTracker } from './hooks/useInternTracker';
import { useUserManagement } from './hooks/useUserManagement';
import { initialInternData } from './data/weeklyData';
import Header from './components/Header';
import Navigation from './components/Navigation.tsx';
import WeeklyPage from './components/WeeklyPage.tsx';
import Dashboard from './components/Dashboard.tsx';
import UserAuth from './components/UserAuth';
import './App.css';

type ViewType = 'dashboard' | 'week';

function App() {
  const { 
    userSession, 
    allUsers, 
    createUser, 
    loginUser, 
    logoutUser,
    isLoading
  } = useUserManagement();

  // Always call hooks at top level
  const tracker = useInternTracker(initialInternData, userSession?.internId);
  const [currentView, setCurrentView] = useState<ViewType>('dashboard');
  const [selectedWeek, setSelectedWeek] = useState<number>(1);

  const handleWeekSelect = (week: number) => {
    setSelectedWeek(week);
    setCurrentView('week');
  };

  if (isLoading) {
    return <div style={{width: '100vw', height: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>Loading...</div>;
  }

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

  // Only use tracker data if userSession exists
  const { 
    data, 
    toggleTask, 
    toggleActivity, 
    updateNotes, 
    getWeekData, 
    getOverallProgress 
  } = tracker;

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
