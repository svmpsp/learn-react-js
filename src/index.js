import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";

import DefaultComponent from "./App";

const root = createRoot(document.getElementById("root"));
root.render(
  <StrictMode>
    <DefaultComponent />
  </StrictMode>,
);
