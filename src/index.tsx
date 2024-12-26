import { createRoot } from "react-dom/client";
import { App } from "@/App";

const div = document.getElementById("app");

if (div) {
  const root = createRoot(div);
  root.render(<App />);
} else {
  throw new Error("root not found!");
}
