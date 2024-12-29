import { Link, useLocation } from "react-router-dom";
import styles from "./Navbar.module.scss";
import { PAGES } from "@/constants";

const links = [
  {
    to: PAGES.HOME,
    text: "Home",
  },
  {
    to: PAGES.CONTACT,
    text: "Contact",
  },
];

export const Navbar = () => {
  const { pathname } = useLocation();

  return (
    <nav className={styles.nav}>
      <ul>
        {links.map(({ text, to }, index) => {
          const isSelected = pathname === to;
          const className = isSelected
            ? `${styles.link} ${styles.selected}`
            : `${styles.link}`;

          return (
            <li key={index}>
              <Link to={to} className={className}>
                {text}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};
