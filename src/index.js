import React from "react";
import { createRoot } from "react-dom/client";
import App from "./Components/App";

const container = createRoot(document.getElementById("root"));
container.render(<App />);
