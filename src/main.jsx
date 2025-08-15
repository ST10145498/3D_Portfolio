import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import Scene3D from "./Scene3D.jsx";

import "./index.css";
import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);
