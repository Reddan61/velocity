import { FC } from "react";
import styles from "./TabButton.module.scss";

interface IProps {
  isSelected: boolean;
  text: string;
  onClick: () => void;
}

export const TabButton: FC<IProps> = ({ text, isSelected, onClick }) => {
  let classes = `${styles.button}`;

  if (isSelected) {
    classes += ` ${isSelected ? styles.selected : null}`;
  }

  return (
    <button className={classes} onClick={onClick}>
      {text}
    </button>
  );
};
