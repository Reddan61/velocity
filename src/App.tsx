import "@/reset.scss";
import { Header } from "@/Components/Header/Header";
import { ThisSection } from "@/Components/ThisSection/ThisSection";

import styles from "./App.module.scss";

export const App = () => {
  return (
    <div className={styles.app}>
      <Header />
      <ThisSection />
    </div>
  );
};
