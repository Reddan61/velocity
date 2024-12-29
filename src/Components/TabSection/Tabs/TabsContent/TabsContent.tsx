import { FC, useRef } from "react";
import { CSSTransition } from "react-transition-group";

import styles from "./TabsContent.module.scss";

interface IProps {
  show: boolean;
  image: string;
  imageAlt: string;
  title: string;
  text: string;
}

export const TabsContent: FC<IProps> = ({
  show,
  image,
  imageAlt,
  text,
  title,
}) => {
  const nodeRef = useRef(null);

  return (
    <CSSTransition
      nodeRef={nodeRef}
      in={show}
      timeout={1000}
      exit={false}
      classNames={{
        enter: styles.enter,
        enterActive: styles.enterActive,
      }}
      unmountOnExit
    >
      <div ref={nodeRef} className={styles.content}>
        <img src={image} alt={imageAlt} className={styles.image} />
        <h3>{title}</h3>
        <p>{text}</p>
      </div>
    </CSSTransition>
  );
};
