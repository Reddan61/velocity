import { FC, useCallback, useState } from "react";
import { useObserver } from "@/hooks/useObserver.";
import styles from "./Card.module.scss";

interface IProps {
  icon: string;
  title: string;
  text: string;
  animationTimeout: number;
}

export const Card: FC<IProps> = ({ icon, text, title, animationTimeout }) => {
  const [isOnScreen, setIsOnScreen] = useState(false);

  const onObserveOnce = useCallback(() => {
    setTimeout(() => {
      setIsOnScreen(true);
    }, animationTimeout);
  }, []);

  const { observer } = useObserver({
    onObserveOnce,
  });

  let className = styles.card;

  if (isOnScreen) {
    className += ` ${styles.appear}`;
  }

  return (
    <div className={className}>
      <img src={icon} alt="card icon" />
      <h3>{title}</h3>
      <p>{text}</p>
      <div ref={observer}></div>
    </div>
  );
};
