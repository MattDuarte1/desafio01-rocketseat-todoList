import styles from "./style.module.css";
import checkIcon from "../../assets/check.svg";
import checkedIcon from "../../assets/checked.svg";
import { Trash } from "@phosphor-icons/react";
import { TaskType } from "../../interfaces/Task";

interface TaskComponentProps extends TaskType {
  removeTask: (id: number) => void;
  changeTaskCheckStatus: ({
    id,
    value,
  }: {
    id: number;
    value: boolean;
  }) => void;
}
export function TaskComponent({
  id,
  content,
  isChecked,
  removeTask,
  changeTaskCheckStatus,
}: TaskComponentProps) {
  const checkBoxCheckedClassParagraph = isChecked
    ? styles["paragraph-checked"]
    : styles["paragraph-unchecked"];

  return (
    <li className={styles.container}>
      <button onClick={() => changeTaskCheckStatus({ id, value: !isChecked })}>
        <img src={isChecked ? checkedIcon : checkIcon} alt="check button" />
      </button>
      <span className={checkBoxCheckedClassParagraph}>{content}</span>

      <button
        title="Delete Task"
        onClick={() => removeTask(id)}
        className={styles.deleteButton}
      >
        <Trash />
      </button>
    </li>
  );
}
