import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import AppContexts from "./contexts/AppContexts.jsx";
import AppRouter from "./routers/AppRouter.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AppContexts>
      <AppRouter />
    </AppContexts>
  </StrictMode>
);
