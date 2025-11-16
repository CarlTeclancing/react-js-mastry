import { CheckCircle2, Circle } from 'lucide-react';
import { Task } from '../types/index';
import './TaskList.css';

interface TaskListProps {
  tasks: Task[];
  onToggleTask: (taskId: string) => void;
}

export default function TaskList({ tasks, onToggleTask }: TaskListProps) {
  const completedCount = tasks.filter(t => t.completed).length;

  return (
    <div className="task-list">
      <div className="list-header">
        <h3>Tasks ({completedCount}/{tasks.length})</h3>
      </div>

      <div className="tasks">
        {tasks.map((task) => (
          <div
            key={task.id}
            className={`task-item ${task.completed ? 'completed' : ''}`}
          >
            <button
              className="task-checkbox"
              onClick={() => onToggleTask(task.id)}
              title={task.completed ? 'Mark incomplete' : 'Mark complete'}
            >
              {task.completed ? (
                <CheckCircle2 size={24} className="checked" />
              ) : (
                <Circle size={24} className="unchecked" />
              )}
            </button>
            <div className="task-content">
              <div className="task-title">{task.title}</div>
              <div className="task-description">{task.description}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
