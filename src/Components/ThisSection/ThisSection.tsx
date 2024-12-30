import { useCallback, useState } from "react";
import { useObserver } from "@/hooks/useObserver.";
import { SignUpButton } from "@/Components/Buttons/SignUpButton/SignUpButton";
import { LearnMoreButton } from "@/Components/Buttons/LearnMoreButton/LearnMoreButton";
import Sky from "images/sky.jpg";

import styles from "./ThisSection.module.scss";

export const ThisSection = () => {
  const [isOnScreen, setIsOnScree] = useState(false);

  const onObserveOnce = useCallback(() => {
    setIsOnScree(true);
  }, []);

  const { observer } = useObserver({
    onObserveOnce,
  });

  let classNames = styles.content;

  if (isOnScreen) {
    classNames += ` ${styles.appear}`;
  }

  return (
    <section className={styles.section}>
      <div ref={observer}></div>
      <div className={styles.background}>
        <div className={styles.backgroundCover}></div>
        <img src={Sky} alt="background image" />
      </div>
      <div className={classNames}>
        <h1>this is velocity</h1>
        <h2>a free responsive template by webflow</h2>
        <div className={styles.buttons}>
          <SignUpButton />
          <LearnMoreButton />
        </div>
      </div>
    </section>
  );
};
