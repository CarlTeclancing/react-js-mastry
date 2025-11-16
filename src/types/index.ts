export interface Task {
  id: string;
  title: string;
  completed: boolean;
  description: string;
  completedAt?: string;
}

export interface Activity {
  id: string;
  name: string;
  completed: boolean;
  hours?: number;
  completedAt?: string;
}

export interface WeekData {
  week: number;
  startDate: string;
  endDate: string;
  topic: string;
  description: string;
  tasks: Task[];
  activities: Activity[];
  notes: string;
  progressPercentage: number;
  completedAt?: string;
}

export interface InternData {
  id: string;
  name: string;
  startDate: string;
  totalWeeks: number;
  weeks: WeekData[];
  createdAt: string;
  lastUpdated: string;
}

export interface InternProfile {
  id: string;
  name: string;
  email?: string;
  startDate: string;
  createdAt: string;
}

export interface UserSession {
  internId: string;
  internName: string;
  isAuthenticated: boolean;
}
