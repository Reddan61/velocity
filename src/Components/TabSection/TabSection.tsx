import { Tabs } from "@/Components/TabSection/Tabs/Tabs";
import styles from "./TabSection.module.scss";

export const TabSection = () => {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.top}>
          <h1>Tab Section</h1>
          <h2>This is some text inside of a div block</h2>
        </div>
        <Tabs />
      </div>
    </section>
  );
};
