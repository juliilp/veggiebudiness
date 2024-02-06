import ReactDOM from "react-dom/client";
import "./index.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./vistas/Home";
import Recipies from "./vistas/Recipies";
import RecipesDetail from "./vistas/RecipesDetail";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer";
import ArrowButtomRight from "./components/ArrowButtomRight";
import AboutUs from "./vistas/AboutUs";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <main className="relative">
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route element={<Home />} path="/" />
        <Route element={<Recipies />} path="/recipies" />
        <Route element={<RecipesDetail />} path="/recipies/:id" />
        <Route element={<AboutUs />} path="/sobre-nosotros" />
        <Route element={<Home />} path="/**" />
      </Routes>
      <Footer />
      <ArrowButtomRight />
    </BrowserRouter>
  </main>
);
