import { FormEvent, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { PlusCircle } from '@phosphor-icons/react';
import { Status, TaskType } from '@/App';

import styles from './Add.module.scss';

interface AddProps {
  addTask: (task: TaskType) => void;
}

export function Add({ addTask }: AddProps) {
  const [text, setText] = useState('');

  function handleAddTask(event: FormEvent): void {
    event?.preventDefault();

    const task: TaskType = {
      id: uuidv4(),
      title: text,
      status: Status.pending
    };

    addTask(task);
    setText('');
  }

  return (
    <form onSubmit={handleAddTask}>
      <div className={styles.add}>
        <input
          type="text"
          placeholder="Adicione uma nova tarefa"
          value={text}
          onChange={(event) => setText(event.target.value)}
        />
        <button>
          Criar <PlusCircle size={16} weight="bold" type="submit" />
        </button>
      </div>
    </form>
  );
}
