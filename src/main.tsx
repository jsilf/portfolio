import React from "react";
import ReactDOM from "react-dom/client";
import { Route, Routes } from "react-router";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import { Layout } from "./components/Layout/Layout";
import { NotFound } from "./components/NotFound/NotFound";
import "./index.css";
import "./css/css.scss";
import "./fonts/Poiret_One/PoiretOne-Regular.ttf";
import "./fonts/Lato/Lato-Regular.ttf";
import "./fonts/Lato/Lato-Thin.ttf";
import "./fonts/League_Spartan/LeagueSpartan-VariableFont_wght.ttf";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index path="/" element={<App />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
