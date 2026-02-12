import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import PortfolioPage from "./pages/PortfolioPage";
import ContactPage from "./pages/ContactPage";
import "./index.css";

const cleanPath = window.location.pathname.replace(/\/+$/, "") || "/";
const Page =
  cleanPath === "/portfolio"
    ? PortfolioPage
    : cleanPath === "/contact"
      ? ContactPage
      : App;

ReactDOM.createRoot(document.getElementById("app") as HTMLElement).render(
  <React.StrictMode>
    <Page />
  </React.StrictMode>
);
