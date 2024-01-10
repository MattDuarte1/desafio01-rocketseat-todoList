import styles from "./style.module.css";
import Logo from "../../assets/Logo.svg";

export function HeaderComponent() {
  return (
    <header className={styles.container}>
      <img src={Logo} alt="Logo" />
    </header>
  );
}
