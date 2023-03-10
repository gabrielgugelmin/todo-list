import styles from './Checkbox.module.scss';

interface CheckboxProps {
  taskId: string;
  onClick: (taskId: string) => void;
}

export function Checkbox({ taskId, onClick }: CheckboxProps) {
  return (
    <label className={styles['form-control']} onClick={() => onClick(taskId)}>
      <input type="checkbox" name="checkbox" />
    </label>
  );
}
