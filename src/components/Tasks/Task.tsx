import { Status, TaskType } from '@/App';
import { Checkbox } from '../Checkbox/Checkbox';
import { DeleteButton } from '../DeleteButton/DeleteButton';

import styles from './Tasks.module.scss';

interface TaskProps {
  task: TaskType;
  onDeleteClick: (taskId: string) => void;
  onFinishClick: (taskId: string) => void;
}

export function Task({ task, onDeleteClick, onFinishClick }: TaskProps) {
  return (
    <div
      className={`${styles.task} ${
        task.status === Status.done ? styles['task--done'] : ''
      }`}
    >
      <Checkbox taskId={task.id} onClick={onFinishClick} />
      <p>{task.title}</p>
      <DeleteButton taskId={task.id} onClick={onDeleteClick} />
    </div>
  );
}
