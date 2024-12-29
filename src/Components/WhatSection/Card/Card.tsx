import { FC } from "react";
import styles from "./Card.module.scss";

interface IProps {
  icon: string;
  title: string;
  text: string;
}

export const Card: FC<IProps> = ({ icon, text, title }) => {
  return (
    <div className={styles.card}>
      <img src={icon} alt="card icon" />
      <h3>{title}</h3>
      <p>{text}</p>
    </div>
  );
};
