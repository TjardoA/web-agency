import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import PortfolioPage from "./pages/PortfolioPage";
import ContactPage from "./pages/ContactPage";
import ServicesPage from "./pages/ServicesPage";
import DevelopmentPage from "./pages/DevelopmentPage";
import "./index.css";

const cleanPath = window.location.pathname.replace(/\/+$/, "") || "/";
const Page =
  cleanPath === "/portfolio"
    ? PortfolioPage
    : cleanPath === "/contact"
      ? ContactPage
      : cleanPath === "/diensten"
        ? ServicesPage
        : cleanPath === "/development"
          ? DevelopmentPage
          : App;

ReactDOM.createRoot(document.getElementById("app") as HTMLElement).render(
  <React.StrictMode>
    <Page />
  </React.StrictMode>
);
