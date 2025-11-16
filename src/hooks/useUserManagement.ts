import { useState, useCallback, useEffect } from 'react';
import { InternProfile, UserSession } from '../types/index';

const USERS_STORAGE_KEY = 'internTrackerUsers';
const CURRENT_USER_KEY = 'currentIntern';

export const useUserManagement = () => {
  const [userSession, setUserSession] = useState<UserSession | null>(null);
  const [allUsers, setAllUsers] = useState<InternProfile[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  // Initialize on mount
  useEffect(() => {
    const savedUsers = localStorage.getItem(USERS_STORAGE_KEY);
    const currentUser = localStorage.getItem(CURRENT_USER_KEY);

    if (savedUsers) {
      try {
        setAllUsers(JSON.parse(savedUsers));
      } catch (error) {
        console.error('Error loading users:', error);
      }
    }

    if (currentUser) {
      try {
        setUserSession(JSON.parse(currentUser));
      } catch (error) {
        console.error('Error loading current user:', error);
      }
    }

    setIsLoading(false);
  }, []);

  const createUser = useCallback((name: string, email?: string) => {
    const newUser: InternProfile = {
      id: `intern_${Date.now()}`,
      name,
      email,
      startDate: new Date().toISOString().split('T')[0],
      createdAt: new Date().toISOString(),
    };

    const updatedUsers = [...allUsers, newUser];
    localStorage.setItem(USERS_STORAGE_KEY, JSON.stringify(updatedUsers));
    setAllUsers(updatedUsers);

    const session: UserSession = {
      internId: newUser.id,
      internName: newUser.name,
      isAuthenticated: true,
    };

    localStorage.setItem(CURRENT_USER_KEY, JSON.stringify(session));
    setUserSession(session);

    return newUser;
  }, [allUsers]);

  const loginUser = useCallback((userId: string) => {
    const user = allUsers.find(u => u.id === userId);
    if (user) {
      const session: UserSession = {
        internId: user.id,
        internName: user.name,
        isAuthenticated: true,
      };
      localStorage.setItem(CURRENT_USER_KEY, JSON.stringify(session));
      setUserSession(session);
      return true;
    }
    return false;
  }, [allUsers]);

  const logoutUser = useCallback(() => {
    localStorage.removeItem(CURRENT_USER_KEY);
    setUserSession(null);
  }, []);

  const updateUserName = useCallback((userId: string, newName: string) => {
    const updatedUsers = allUsers.map(user =>
      user.id === userId ? { ...user, name: newName } : user
    );
    localStorage.setItem(USERS_STORAGE_KEY, JSON.stringify(updatedUsers));
    setAllUsers(updatedUsers);

    if (userSession && userSession.internId === userId) {
      const newSession = { ...userSession, internName: newName };
      localStorage.setItem(CURRENT_USER_KEY, JSON.stringify(newSession));
      setUserSession(newSession);
    }
  }, [allUsers, userSession]);

  const deleteUser = useCallback((userId: string) => {
    const updatedUsers = allUsers.filter(u => u.id !== userId);
    localStorage.setItem(USERS_STORAGE_KEY, JSON.stringify(updatedUsers));
    setAllUsers(updatedUsers);

    if (userSession && userSession.internId === userId) {
      localStorage.removeItem(CURRENT_USER_KEY);
      setUserSession(null);
    }
  }, [allUsers, userSession]);

  return {
    userSession,
    allUsers,
    isLoading,
    createUser,
    loginUser,
    logoutUser,
    updateUserName,
    deleteUser,
  };
};
