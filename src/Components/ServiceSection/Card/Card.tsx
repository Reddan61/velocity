import { FC } from "react";
import { LearnMoreButton } from "@/Components/Buttons/LearnMoreButton/LearnMoreButton";

import styles from "./Card.module.scss";

interface IProps {
  image: string;
  imageAlt: string;
  title: string;
  text: string;
}

export const Card: FC<IProps> = ({ image, imageAlt, text, title }) => {
  return (
    <div className={styles.card}>
      <img src={image} alt={imageAlt} />
      <h3>{title}</h3>
      <p>{text}</p>
      <div>
        <LearnMoreButton />
      </div>
    </div>
  );
};
