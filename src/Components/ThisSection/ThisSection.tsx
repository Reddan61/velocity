import Sky from "images/sky.jpg";
import { SignUpButton } from "@/Components/Buttons/SignUpButton/SignUpButton";
import { LearnMoreButton } from "@/Components/Buttons/LearnMoreButton/LearnMoreButton";

import styles from "./ThisSection.module.scss";

export const ThisSection = () => {
  return (
    <section className={styles.section}>
      <div className={styles.background}>
        <div className={styles.backgroundCover}></div>
        <img src={Sky} alt="background image" />
      </div>
      <div className={styles.content}>
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
