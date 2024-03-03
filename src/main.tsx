import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import HomePage from "./pages/Home/index.tsx";
import { Router } from "lucide-react";
import MainRouter from "./MyRouter.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <MainRouter />
  </React.StrictMode>
);
