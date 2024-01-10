import { HeaderComponent } from "./components/HeaderComponent";
import { CreatedTaskBoardComponent } from "./components/CreatedTaskBoardComponent";
import { FormEvent, useState } from "react";
import { TaskType } from "./interfaces/Task";
import { PlusCircle } from "@phosphor-icons/react";

import styles from "./App.module.css";

function App() {
  const [tasks, setTasks] = useState<TaskType[] | []>([]);
  const [inputTaskValue, setInputTaskValue] = useState<string>("");

  const handleCreateNewTask = (event: FormEvent) => {
    event.preventDefault();

    if (inputTaskValue.length <= 4) {
      window.alert("Por favor, Digite um valor com mais de 4 caracteres");
      return;
    }
    const newTask: TaskType = {
      id: tasks.length + 1,
      content: inputTaskValue,
      isChecked: false,
    };
    setTasks((current) => [...current, newTask]);
    setInputTaskValue("");
  };

  const handleRemoveTask = (id: number) => {
    const filteredTasks = tasks.filter((task) => task.id !== id);
    setTasks(filteredTasks);
  };

  const handleChangedCheckStatus = ({
    id,
    value,
  }: {
    id: number;
    value: boolean;
  }) => {
    const updatedListTask: TaskType[] = tasks.map((task) => {
      return task.id === id ? { ...task, isChecked: value } : { ...task };
    });

    setTasks(updatedListTask);
  };

  const handleVerifyCheckedTasksCounter = tasks.reduce(
    (prev, current) => (current.isChecked ? prev + 1 : prev),
    0
  );

  return (
    <>
      <HeaderComponent />
      <main>
        <form onSubmit={handleCreateNewTask} className={styles.container}>
          <input
            type="text"
            onChange={(e) => setInputTaskValue(e.target.value)}
            value={inputTaskValue}
            placeholder="Adicione uma nova tarefa"
          />
          <button type="submit">
            Criar
            <PlusCircle size={16} />
          </button>
        </form>

        <CreatedTaskBoardComponent
          tasks={tasks}
          tasksCounter={Number(tasks.length)}
          removeTask={handleRemoveTask}
          changeTaskCheckStatus={handleChangedCheckStatus}
          checkedTaskCounters={handleVerifyCheckedTasksCounter}
        />
      </main>
    </>
  );
}

export default App;
