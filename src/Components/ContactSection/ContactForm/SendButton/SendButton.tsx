import styles from "./SendButton.module.scss";

export const SendButton = () => {
  return (
    <button type="submit" className={styles.button}>
      send carrier pigeon
    </button>
  );
};
