import React from "react";
import ReactDOM from "react-dom/client";
import { MotionConfig } from "framer-motion";
import App from "./App";
import PortfolioPage from "./pages/PortfolioPage";
import ContactPage from "./pages/ContactPage";
import ServicesPage from "./pages/ServicesPage";
import DevelopmentPage from "./pages/DevelopmentPage";
import PricingPage from "./pages/PricingPage";
import WerkwijzePage from "./pages/WerkwijzePage";
import ProjectsPage from "./pages/ProjectsPage";
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
          : cleanPath === "/tarieven"
            ? PricingPage
            : cleanPath === "/werkwijze"
              ? WerkwijzePage
              : cleanPath === "/projecten" || cleanPath === "/projects"
                ? ProjectsPage
                : App;

ReactDOM.createRoot(document.getElementById("app") as HTMLElement).render(
  <React.StrictMode>
    <MotionConfig
      transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
      reducedMotion="user"
    >
      <Page />
    </MotionConfig>
  </React.StrictMode>
);
