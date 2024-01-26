import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./vistas/Home";
import Recipies from "./vistas/Recipies";
import RecipesDetail from "./vistas/RecipesDetail";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Navbar />
    <BrowserRouter>
      <Routes>
        <Route element={<Home />} path="/" />
        <Route element={<Recipies />} path="/recipies" />
        <Route element={<RecipesDetail />} path="/recipies/:id" />
      </Routes>
    </BrowserRouter>
    <Footer />
  </React.StrictMode>
);
