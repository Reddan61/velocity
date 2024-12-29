import { useState } from "react";
import PhotoImage from "images/photo.jpg";
import MountainsImage from "images/mountains.jpg";
import DeerImage from "images/deer.jpg";
import { TabsContent } from "@/Components/TabSection/Tabs/TabsContent/TabsContent";
import { TabButton } from "@/Components/TabSection/Tabs/TabButton/TabButton";
import styles from "./Tabs.module.scss";

const defaultText = `
  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.
  Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.
  Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus tristique posuere.
`;

const tabs = [
  {
    id: 0,
    image: PhotoImage,
    imageAlt: "man with camera",
    title: "Some Title Here 1",
    text: defaultText,
  },
  {
    id: 1,
    image: DeerImage,
    imageAlt: "deer around river",
    title: "Some Title Here 2",
    text: defaultText,
  },
  {
    id: 2,
    image: MountainsImage,
    imageAlt: "mountains image",
    title: "Some Title Here 3",
    text: defaultText,
  },
];

export const Tabs = () => {
  const [selectedId, setSelectedId] = useState(tabs[0].id);

  return (
    <div className={styles.tabs}>
      <div className={styles.buttons}>
        {tabs.map(({ id }, index) => {
          return (
            <TabButton
              key={id}
              isSelected={selectedId === id}
              onClick={() => {
                setSelectedId(id);
              }}
              text={`tab button ${index + 1}`}
            />
          );
        })}
      </div>
      {tabs.map(({ id, image, imageAlt, text, title }) => {
        return (
          <TabsContent
            key={id}
            show={selectedId === id}
            image={image}
            imageAlt={imageAlt}
            text={text}
            title={title}
          />
        );
      })}
    </div>
  );
};
