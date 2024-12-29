import { Card } from "@/Components/WhatSection/Card/Card";
import EmailIcon from "@/assets/svg/email.svg";
import WatchIcon from "@/assets/svg/watch.svg";
import TwoArrowsIcon from "@/assets/svg/twoArrow.svg";
import styles from "./WhatSection.module.scss";

export const WhatSection = () => {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.top}>
          <h1>what we do</h1>
          <h2>This is some text inside of a div block.</h2>
        </div>
        <div className={styles.cards}>
          <Card
            icon={WatchIcon}
            text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
        varius enim in eros elementum tristique"
            title="Graphic Design"
          />
          <Card
            icon={TwoArrowsIcon}
            text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
        varius enim in eros elementum tristique"
            title="Awesome code"
          />
          <Card
            icon={EmailIcon}
            text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
        varius enim in eros elementum tristique"
            title="free template"
          />
        </div>
      </div>
    </section>
  );
};
