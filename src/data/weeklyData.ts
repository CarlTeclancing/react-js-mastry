import { InternData } from '../types/index';

export const initialInternData: InternData = {
  id: '',
  name: 'React.js Learning Intern',
  startDate: new Date().toISOString().split('T')[0],
  createdAt: new Date().toISOString(),
  lastUpdated: new Date().toISOString(),
  totalWeeks: 12,
  weeks: [
    {
      week: 1,
      startDate: '2024-01-08',
      endDate: '2024-01-14',
      topic: 'React Fundamentals & JSX',
      description: 'Understanding React basics, Components, and JSX syntax',
      tasks: [
        { id: '1-1', title: 'Learn React Components (Class & Functional)', completed: false, description: 'Study component basics' },
        { id: '1-2', title: 'Understand JSX Syntax', completed: false, description: 'Learn how JSX works' },
        { id: '1-3', title: 'Props and State Basics', completed: false, description: 'Master props and state concepts' },
        { id: '1-4', title: 'Build First Component', completed: false, description: 'Create a simple React component' }
      ],
      activities: [
        { id: 'a1-1', name: 'Read React Documentation', completed: false, hours: 3 },
        { id: 'a1-2', name: 'Watch Tutorial Videos', completed: false, hours: 4 },
        { id: 'a1-3', name: 'Code Along Exercises', completed: false, hours: 3 }
      ],
      notes: '',
      progressPercentage: 0
    },
    {
      week: 2,
      startDate: '2024-01-15',
      endDate: '2024-01-21',
      topic: 'State Management & Hooks',
      description: 'Deep dive into useState, useEffect, and custom hooks',
      tasks: [
        { id: '2-1', title: 'Master useState Hook', completed: false, description: 'Learn state management with hooks' },
        { id: '2-2', title: 'Learn useEffect Hook', completed: false, description: 'Understand side effects and lifecycle' },
        { id: '2-3', title: 'Create Custom Hook', completed: false, description: 'Build a reusable custom hook' },
        { id: '2-4', title: 'Project: Counter App', completed: false, description: 'Build a counter with hooks' }
      ],
      activities: [
        { id: 'a2-1', name: 'Study Hook Rules', completed: false, hours: 2 },
        { id: 'a2-2', name: 'Practice useEffect Examples', completed: false, hours: 4 },
        { id: 'a2-3', name: 'Debug Common Hook Issues', completed: false, hours: 2 }
      ],
      notes: '',
      progressPercentage: 0
    },
    {
      week: 3,
      startDate: '2024-01-22',
      endDate: '2024-01-28',
      topic: 'Component Composition & Patterns',
      description: 'Learn component composition, render props, and higher-order components',
      tasks: [
        { id: '3-1', title: 'Understand Composition Patterns', completed: false, description: 'Learn how to compose components' },
        { id: '3-2', title: 'Study Render Props Pattern', completed: false, description: 'Master render props technique' },
        { id: '3-3', title: 'Learn Higher-Order Components', completed: false, description: 'Understand HOC pattern' },
        { id: '3-4', title: 'Refactor Components', completed: false, description: 'Apply patterns to existing code' }
      ],
      activities: [
        { id: 'a3-1', name: 'Read Design Patterns Guide', completed: false, hours: 3 },
        { id: 'a3-2', name: 'Implement Render Props Example', completed: false, hours: 3 },
        { id: 'a3-3', name: 'Create HOC Example', completed: false, hours: 2 }
      ],
      notes: '',
      progressPercentage: 0
    },
    {
      week: 4,
      startDate: '2024-01-29',
      endDate: '2024-02-04',
      topic: 'Forms & Input Handling',
      description: 'Mastering form handling, validation, and input management',
      tasks: [
        { id: '4-1', title: 'Controlled Components', completed: false, description: 'Learn controlled form inputs' },
        { id: '4-2', title: 'Form Validation', completed: false, description: 'Implement form validation' },
        { id: '4-3', title: 'Handle Form Submission', completed: false, description: 'Manage form submissions' },
        { id: '4-4', title: 'Build Contact Form', completed: false, description: 'Create a complete form app' }
      ],
      activities: [
        { id: 'a4-1', name: 'Study Form Best Practices', completed: false, hours: 3 },
        { id: 'a4-2', name: 'Practice Form Validation', completed: false, hours: 3 },
        { id: 'a4-3', name: 'Test Form Edge Cases', completed: false, hours: 2 }
      ],
      notes: '',
      progressPercentage: 0
    },
    {
      week: 5,
      startDate: '2024-02-05',
      endDate: '2024-02-11',
      topic: 'API Integration & Async Operations',
      description: 'Working with APIs, fetching data, and handling async operations',
      tasks: [
        { id: '5-1', title: 'Learn Fetch API', completed: false, description: 'Understand fetch and promises' },
        { id: '5-2', title: 'Error Handling in API Calls', completed: false, description: 'Manage errors gracefully' },
        { id: '5-3', title: 'Loading States', completed: false, description: 'Implement loading indicators' },
        { id: '5-4', title: 'Project: Weather App', completed: false, description: 'Build app that fetches weather data' }
      ],
      activities: [
        { id: 'a5-1', name: 'Test with Public APIs', completed: false, hours: 4 },
        { id: 'a5-2', name: 'Handle Loading States', completed: false, hours: 3 },
        { id: 'a5-3', name: 'Debug Network Requests', completed: false, hours: 2 }
      ],
      notes: '',
      progressPercentage: 0
    },
    {
      week: 6,
      startDate: '2024-02-12',
      endDate: '2024-02-18',
      topic: 'State Management (Redux/Context)',
      description: 'Advanced state management with Redux and Context API',
      tasks: [
        { id: '6-1', title: 'Learn Context API', completed: false, description: 'Understand Context for state' },
        { id: '6-2', title: 'Redux Basics', completed: false, description: 'Learn Redux fundamentals' },
        { id: '6-3', title: 'Reducers & Actions', completed: false, description: 'Master Redux concepts' },
        { id: '6-4', title: 'Implement Redux Store', completed: false, description: 'Set up Redux in app' }
      ],
      activities: [
        { id: 'a6-1', name: 'Compare Context vs Redux', completed: false, hours: 2 },
        { id: 'a6-2', name: 'Build Redux App', completed: false, hours: 5 },
        { id: 'a6-3', name: 'Debug Redux DevTools', completed: false, hours: 2 }
      ],
      notes: '',
      progressPercentage: 0
    },
    {
      week: 7,
      startDate: '2024-02-19',
      endDate: '2024-02-25',
      topic: 'Routing with React Router',
      description: 'Learn client-side routing and navigation',
      tasks: [
        { id: '7-1', title: 'React Router Setup', completed: false, description: 'Initialize routing' },
        { id: '7-2', title: 'Navigate Between Routes', completed: false, description: 'Learn navigation' },
        { id: '7-3', title: 'Route Parameters', completed: false, description: 'Handle dynamic routes' },
        { id: '7-4', title: 'Multi-page SPA', completed: false, description: 'Build multi-page app' }
      ],
      activities: [
        { id: 'a7-1', name: 'Study Router Documentation', completed: false, hours: 3 },
        { id: 'a7-2', name: 'Practice Route Nesting', completed: false, hours: 3 },
        { id: 'a7-3', name: 'Implement Route Guards', completed: false, hours: 2 }
      ],
      notes: '',
      progressPercentage: 0
    },
    {
      week: 8,
      startDate: '2024-02-26',
      endDate: '2024-03-03',
      topic: 'Testing React Components',
      description: 'Writing unit tests and integration tests for React',
      tasks: [
        { id: '8-1', title: 'Jest Setup & Basics', completed: false, description: 'Learn testing framework' },
        { id: '8-2', title: 'React Testing Library', completed: false, description: 'Test components properly' },
        { id: '8-3', title: 'Mocking & Async Tests', completed: false, description: 'Advanced testing' },
        { id: '8-4', title: 'Achieve 80% Coverage', completed: false, description: 'Test application thoroughly' }
      ],
      activities: [
        { id: 'a8-1', name: 'Write Unit Tests', completed: false, hours: 4 },
        { id: 'a8-2', name: 'Write Integration Tests', completed: false, hours: 3 },
        { id: 'a8-3', name: 'Check Code Coverage', completed: false, hours: 2 }
      ],
      notes: '',
      progressPercentage: 0
    },
    {
      week: 9,
      startDate: '2024-03-04',
      endDate: '2024-03-10',
      topic: 'Performance Optimization',
      description: 'Optimize React app performance and learn best practices',
      tasks: [
        { id: '9-1', title: 'Code Splitting & Lazy Loading', completed: false, description: 'Learn optimization techniques' },
        { id: '9-2', title: 'Memoization (useMemo, useCallback)', completed: false, description: 'Prevent unnecessary renders' },
        { id: '9-3', title: 'React DevTools Profiler', completed: false, description: 'Profile app performance' },
        { id: '9-4', title: 'Optimize Bundle Size', completed: false, description: 'Reduce app size' }
      ],
      activities: [
        { id: 'a9-1', name: 'Profile Components', completed: false, hours: 3 },
        { id: 'a9-2', name: 'Implement Code Splitting', completed: false, hours: 3 },
        { id: 'a9-3', name: 'Optimize Re-renders', completed: false, hours: 2 }
      ],
      notes: '',
      progressPercentage: 0
    },
    {
      week: 10,
      startDate: '2024-03-11',
      endDate: '2024-03-17',
      topic: 'TypeScript with React',
      description: 'Using TypeScript for type-safe React development',
      tasks: [
        { id: '10-1', title: 'TypeScript Basics for React', completed: false, description: 'Learn type basics' },
        { id: '10-2', title: 'Component Props Typing', completed: false, description: 'Type component props' },
        { id: '10-3', title: 'Generic Components', completed: false, description: 'Create flexible typed components' },
        { id: '10-4', title: 'Refactor to TypeScript', completed: false, description: 'Add types to projects' }
      ],
      activities: [
        { id: 'a10-1', name: 'Learn Type Annotations', completed: false, hours: 3 },
        { id: 'a10-2', name: 'Create Typed Components', completed: false, hours: 4 },
        { id: 'a10-3', name: 'Debug Type Errors', completed: false, hours: 2 }
      ],
      notes: '',
      progressPercentage: 0
    },
    {
      week: 11,
      startDate: '2024-03-18',
      endDate: '2024-03-24',
      topic: 'Next.js Fundamentals',
      description: 'Introduction to Next.js and server-side rendering',
      tasks: [
        { id: '11-1', title: 'Next.js Setup & Pages', completed: false, description: 'Learn Next.js basics' },
        { id: '11-2', title: 'API Routes', completed: false, description: 'Create backend with Next.js' },
        { id: '11-3', title: 'Server-Side Rendering', completed: false, description: 'Implement SSR' },
        { id: '11-4', title: 'Build Full-Stack App', completed: false, description: 'Create complete app' }
      ],
      activities: [
        { id: 'a11-1', name: 'Study Next.js Docs', completed: false, hours: 3 },
        { id: 'a11-2', name: 'Build Pages & Routes', completed: false, hours: 4 },
        { id: 'a11-3', name: 'Implement API Routes', completed: false, hours: 2 }
      ],
      notes: '',
      progressPercentage: 0
    },
    {
      week: 12,
      startDate: '2024-03-25',
      endDate: '2024-03-31',
      topic: 'Final Project & Deployment',
      description: 'Capstone project and deployment to production',
      tasks: [
        { id: '12-1', title: 'Plan Capstone Project', completed: false, description: 'Design full application' },
        { id: '12-2', title: 'Implement Full-Stack Features', completed: false, description: 'Build complete features' },
        { id: '12-3', title: 'Deploy to Production', completed: false, description: 'Deploy on hosting platform' },
        { id: '12-4', title: 'Create Documentation', completed: false, description: 'Document your project' }
      ],
      activities: [
        { id: 'a12-1', name: 'Final Code Review', completed: false, hours: 3 },
        { id: 'a12-2', name: 'Deploy Application', completed: false, hours: 3 },
        { id: '12-3', name: 'Write Project Documentation', completed: false, hours: 2 }
      ],
      notes: '',
      progressPercentage: 0
    }
  ]
};
