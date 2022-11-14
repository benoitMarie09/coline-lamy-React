import React from "react";
//import { useState } from "react";
import ReactDOM from "react-dom/client";
import Home from "./pages/Home/Home";
import Gallery from "./pages/Gallery/Gallery";
import NoPage from "./pages/NoPage/NoPage";
import BurgerMenu from "./components/BurgerMenu/BurgerMenu";
import { BrowserRouter, Routes, Route } from "react-router-dom";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<BurgerMenu />}>
          <Route index element={<Home />} />
          <Route path="*" element={<Gallery />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
