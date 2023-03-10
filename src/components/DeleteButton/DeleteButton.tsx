import { Trash } from '@phosphor-icons/react';
import styles from './DeleteButton.module.scss';

interface DeleteButtonProps {
  taskId: string;
  onClick: (taskId: string) => void;
}

export function DeleteButton({ taskId, onClick }: DeleteButtonProps) {
  return (
    <button className={styles['delete-button']} onClick={() => onClick(taskId)}>
      <Trash weight="bold" />
    </button>
  );
}
