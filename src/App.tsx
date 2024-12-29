import "@/reset.scss";
import { Navigate, Route, Routes } from "react-router-dom";
import { Layout } from "@/Pages/Layout/Layout";
import { Contact } from "@/Pages/Contact/Contact";
import { Home } from "@/Pages/Home/Home";
import { PAGES } from "@/constants";

import "./App.module.scss";

export const App = () => {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path={PAGES.HOME} element={<Home />} />
        <Route path={PAGES.CONTACT} element={<Contact />} />
      </Route>
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
};
