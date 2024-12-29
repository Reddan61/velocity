import { ChangeEvent, FC } from "react";
import styles from "./TextArea.module.scss";

interface IProps {
  error: boolean;
  placeholder: string;
  value: string;
  onChange: (e: ChangeEvent<HTMLTextAreaElement>) => void;
}

export const TextArea: FC<IProps> = ({
  onChange,
  placeholder,
  value,
  error,
}) => {
  let className = styles.textarea;

  if (error) {
    className += ` ${styles.error}`;
  }

  return (
    <textarea
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      className={className}
    />
  );
};
