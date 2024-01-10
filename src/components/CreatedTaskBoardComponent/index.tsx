import { ClipboardText } from "@phosphor-icons/react";
import styles from "./style.module.css";
import { TaskComponent } from "../TaskComponent";
import { TaskType } from "../../interfaces/Task";

interface CreatedTaskBoardComponentProps {
  tasks: TaskType[] | [];
  tasksCounter: number;
  removeTask: (id: number) => void;
  changeTaskCheckStatus: ({
    id,
    value,
  }: {
    id: number;
    value: boolean;
  }) => void;
  checkedTaskCounters: number;
}

export function CreatedTaskBoardComponent({
  tasks,
  removeTask,
  changeTaskCheckStatus,
  checkedTaskCounters,
  tasksCounter,
}: CreatedTaskBoardComponentProps) {
  const TaskListComponent = () => {
    return (
      <ul>
        {tasks.map((task) => (
          <TaskComponent
            key={task.id}
            {...task}
            removeTask={removeTask}
            changeTaskCheckStatus={changeTaskCheckStatus}
          />
        ))}
      </ul>
    );
  };

  const NotHaveTaskComponent = () => {
    return (
      <div className={styles.notFound}>
        <ClipboardText size={56} color="#808080" />
        <h2>
          <strong>Você ainda não tem tarefas cadastradas </strong>Crie tarefas e
          organize seus itens a fazer
        </h2>
      </div>
    );
  };

  return (
    <div className={styles.wrapper}>
      <header className={styles.header}>
        <div className={styles.boxCounters}>
          <strong>Tarefas criadas</strong>
          <span>{tasksCounter}</span>
        </div>
        <div className={styles.boxCounters}>
          <strong>Concluídas</strong>
          <span>
            {tasksCounter === 0
              ? tasksCounter
              : `${checkedTaskCounters} de ${tasksCounter}`}
          </span>
        </div>
      </header>
      {tasks.length > 0 ? <TaskListComponent /> : <NotHaveTaskComponent />}
    </div>
  );
}
