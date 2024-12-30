import { Card } from "@/Components/WhatSection/Card/Card";
import EmailIcon from "@/assets/svg/email.svg";
import WatchIcon from "@/assets/svg/watch.svg";
import TwoArrowsIcon from "@/assets/svg/twoArrow.svg";
import styles from "./WhatSection.module.scss";

const defaultText = `
  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
  varius enim in eros elementum tristique
`;

const cards = [
  {
    icon: WatchIcon,
    text: defaultText,
    title: "Graphic Design",
    animationTimeout: 0,
  },
  {
    icon: TwoArrowsIcon,
    text: defaultText,
    title: "Awesome code",
    animationTimeout: 300,
  },
  {
    icon: EmailIcon,
    text: defaultText,
    title: "Free template",
    animationTimeout: 600,
  },
];

export const WhatSection = () => {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.top}>
          <h1>what we do</h1>
          <h2>This is some text inside of a div block.</h2>
        </div>
        <div className={styles.cards}>
          {cards.map((props) => {
            return <Card {...props} />;
          })}
        </div>
      </div>
    </section>
  );
};
