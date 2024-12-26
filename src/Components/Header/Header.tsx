import { Logo } from "@/Components/Logo/Logo";
import styles from "./Header.module.scss";
import { Navbar } from "@/Components/Header/Navbar/Navbar";

export const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <Logo />
        <Navbar />
      </div>
    </header>
  );
};
