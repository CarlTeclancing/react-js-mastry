import { useState, useCallback, useEffect } from 'react';
import { InternData, WeekData } from '../types/index';

export const useInternTracker = (initialData: InternData, userId?: string) => {
  const [data, setData] = useState<InternData>(() => {
    if (!userId) return initialData;

    // Load user-specific data from localStorage
    const storageKey = `internTrackerData_${userId}`;
    const saved = localStorage.getItem(storageKey);
    
    if (saved) {
      try {
        return JSON.parse(saved);
      } catch (error) {
        console.error('Error parsing stored data:', error);
        return initialData;
      }
    }
    
    const newData = {
      ...initialData,
      id: userId,
      createdAt: new Date().toISOString(),
      lastUpdated: new Date().toISOString(),
    };
    
    // Save the initial data to localStorage immediately
    try {
      localStorage.setItem(storageKey, JSON.stringify(newData));
    } catch (error) {
      console.error('Error saving initial data:', error);
    }
    
    return newData;
  });

  // Save data to localStorage whenever it changes and we have a userId
  useEffect(() => {
    if (userId) {
      const storageKey = `internTrackerData_${userId}`;
      try {
        const dataToSave = {
          ...data,
          lastUpdated: new Date().toISOString(),
        };
        localStorage.setItem(storageKey, JSON.stringify(dataToSave));
      } catch (error) {
        console.error('Error saving data to localStorage:', error);
      }
    }
  }, [data, userId]);

  const toggleTask = useCallback((weekNumber: number, taskId: string) => {
    setData(prevData => {
      const newData = JSON.parse(JSON.stringify(prevData)); // Deep copy
      const week = newData.weeks.find((w: WeekData) => w.week === weekNumber);
      if (week) {
        const task = week.tasks.find((t: any) => t.id === taskId);
        if (task) {
          task.completed = !task.completed;
          task.completedAt = task.completed ? new Date().toISOString() : undefined;
          updateProgressPercentage(week);
        }
      }
      return newData;
    });
  }, []);

  const toggleActivity = useCallback((weekNumber: number, activityId: string) => {
    setData(prevData => {
      const newData = JSON.parse(JSON.stringify(prevData)); // Deep copy
      const week = newData.weeks.find((w: WeekData) => w.week === weekNumber);
      if (week) {
        const activity = week.activities.find((a: any) => a.id === activityId);
        if (activity) {
          activity.completed = !activity.completed;
          activity.completedAt = activity.completed ? new Date().toISOString() : undefined;
          updateProgressPercentage(week);
        }
      }
      return newData;
    });
  }, []);

  const updateNotes = useCallback((weekNumber: number, notes: string) => {
    setData(prevData => {
      const newData = JSON.parse(JSON.stringify(prevData)); // Deep copy
      const week = newData.weeks.find((w: WeekData) => w.week === weekNumber);
      if (week) {
        week.notes = notes;
      }
      return newData;
    });
  }, []);

  const updateProgressPercentage = (week: WeekData) => {
    const totalItems = week.tasks.length + week.activities.length;
    const completedItems = week.tasks.filter(t => t.completed).length + 
                          week.activities.filter(a => a.completed).length;
    week.progressPercentage = totalItems > 0 ? (completedItems / totalItems) * 100 : 0;
    
    // Mark week as completed if all items are done
    if (week.progressPercentage === 100 && !week.completedAt) {
      week.completedAt = new Date().toISOString();
    }
  };

  const getWeekData = (weekNumber: number): WeekData | undefined => {
    return data.weeks.find(w => w.week === weekNumber);
  };

  const getOverallProgress = (): number => {
    const totalItems = data.weeks.reduce((sum, week) => sum + week.tasks.length + week.activities.length, 0);
    const completedItems = data.weeks.reduce((sum, week) => 
      sum + week.tasks.filter(t => t.completed).length + week.activities.filter(a => a.completed).length, 0);
    return totalItems > 0 ? (completedItems / totalItems) * 100 : 0;
  };

  const getCompletedWeeksCount = (): number => {
    return data.weeks.filter(w => w.progressPercentage === 100).length;
  };

  const getInProgressWeeksCount = (): number => {
    return data.weeks.filter(w => w.progressPercentage > 0 && w.progressPercentage < 100).length;
  };

  const getNotStartedWeeksCount = (): number => {
    return data.weeks.filter(w => w.progressPercentage === 0).length;
  };

  const resetWeekProgress = useCallback((weekNumber: number) => {
    setData(prevData => {
      const newData = JSON.parse(JSON.stringify(prevData)); // Deep copy
      const week = newData.weeks.find((w: WeekData) => w.week === weekNumber);
      if (week) {
        week.tasks.forEach((task: any) => {
          task.completed = false;
          task.completedAt = undefined;
        });
        week.activities.forEach((activity: any) => {
          activity.completed = false;
          activity.completedAt = undefined;
        });
        week.notes = '';
        updateProgressPercentage(week);
      }
      return newData;
    });
  }, []);

  const resetAllProgress = useCallback(() => {
    setData(prevData => {
      const newData = JSON.parse(JSON.stringify(prevData)); // Deep copy
      newData.weeks.forEach((week: WeekData) => {
        week.tasks.forEach((task: any) => {
          task.completed = false;
          task.completedAt = undefined;
        });
        week.activities.forEach((activity: any) => {
          activity.completed = false;
          activity.completedAt = undefined;
        });
        week.notes = '';
        updateProgressPercentage(week);
      });
      return newData;
    });
  }, []);

  return {
    data,
    toggleTask,
    toggleActivity,
    updateNotes,
    getWeekData,
    getOverallProgress,
    getCompletedWeeksCount,
    getInProgressWeeksCount,
    getNotStartedWeeksCount,
    resetWeekProgress,
    resetAllProgress,
  };
};
