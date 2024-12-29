import { Outlet } from "react-router-dom";
import { Footer } from "@/Components/Footer/Footer";
import { Header } from "@/Components/Header/Header";

import styles from "./Layout.module.scss";

export const Layout = () => {
  return (
    <>
      <Header />
      <main className={styles.main}>
        <Outlet />
      </main>
      <Footer />
    </>
  );
};
