import { useState } from 'react';

import { Header } from './components/Header/Header';
import { Add } from './components/Add/Add';
import { Tasks } from './components/Tasks/Tasks';

export interface TaskType<T = Status> {
  id: string;
  title: string;
  status: T;
}

export enum Status {
  pending = 'pending',
  done = 'done'
}

function App() {
  const [tasks, setTasks] = useState<TaskType[]>([]);

  const handleAddTask = (task: TaskType) => {
    setTasks((prevState) => [...prevState, task]);
  };

  function onFinishClick(taskId: string) {
    const updatedTasks = tasks.map((task) =>
      task.id === taskId
        ? {
            ...task,
            status: task.status === Status.done ? Status.pending : Status.done
          }
        : task
    );

    setTasks(updatedTasks);
  }

  function onDeleteClick(taskId: string) {
    const updatedTasks = tasks.filter((task) => task.id !== taskId);

    setTasks(updatedTasks);
  }

  return (
    <div className="App">
      <Header />
      <div className="container">
        <Add addTask={handleAddTask} />
        <Tasks
          tasks={tasks}
          onDeleteClick={onDeleteClick}
          onFinishClick={onFinishClick}
        />
      </div>
    </div>
  );
}

export default App;
