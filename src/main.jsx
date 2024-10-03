import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import { PrimeReactProvider } from "primereact/api";
import "primereact/resources/themes/saga-orange/theme.css";
import 'primeicons/primeicons.css';
import "./assets/styles/main.scss";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <PrimeReactProvider>
      <App />
    </PrimeReactProvider>
  </StrictMode>
);
