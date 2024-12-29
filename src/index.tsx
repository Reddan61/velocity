import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { App } from "@/App";

const root = document.getElementById("app");

if (root) {
  createRoot(root).render(
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );
} else {
  throw new Error("root not found!");
}
