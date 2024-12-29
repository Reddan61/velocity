import { ChangeEvent, FC } from "react";
import styles from "./Input.module.scss";

interface IProps {
  error: boolean;
  value: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  placeholder: string;
}

export const Input: FC<IProps> = ({ value, onChange, placeholder, error }) => {
  let className = styles.input;

  if (error) {
    className += ` ${styles.error}`;
  }

  return (
    <input
      className={className}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
    />
  );
};
