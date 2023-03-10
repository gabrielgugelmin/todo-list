import { TaskType } from '@/App';
import { ClipboardText } from '@phosphor-icons/react';
import { Badge } from '../Badge/Badge';
import { Task } from './Task';
import styles from './Tasks.module.scss';

interface TasksProps {
  tasks: TaskType[];
  onDeleteClick: (taskId: string) => void;
  onFinishClick: (taskId: string) => void;
}

export function Tasks({ tasks, onDeleteClick, onFinishClick }: TasksProps) {
  const createdTasks = tasks.length;

  return (
    <div className={styles.tasks}>
      <div className={styles['tasks__header']}>
        <p>
          Tarefas criadas <Badge quantity={createdTasks} />
        </p>
        <p>
          Concluídas <Badge quantity={0} />
        </p>
      </div>
      <div className={styles['tasks__list']}>
        {tasks.length > 0 ? (
          tasks.map((task) => (
            <Task
              key={task.id}
              onDeleteClick={onDeleteClick}
              onFinishClick={onFinishClick}
              task={task}
            />
          ))
        ) : (
          <div className={styles['no-result']}>
            <ClipboardText size={56} />
            <p>
              <strong>Você ainda não tem tarefas cadastradas</strong>
              Crie tarefas e organize seus itens a fazer
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
