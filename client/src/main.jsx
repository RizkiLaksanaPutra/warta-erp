import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App";
import UserProviders from "./providers/UserProviders";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <UserProviders>
      <App />
    </UserProviders>
  </StrictMode>
);
