import styles from "./Navbar.module.scss";

export const Navbar = () => {
  return (
    <nav className={styles.nav}>
      <ul>
        <li>Home</li>
        <li>Contact</li>
      </ul>
    </nav>
  );
};
