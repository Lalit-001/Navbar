import React from "react";
import { Route, Routes } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";
import ProductCard from "./Components/ProductCard";
import Home from "./Home/Home";

const App = () => {
  return (
    <section className="bg-cover font-semibold h-screen bg-home">
      <div>
        <Navbar />
        <Routes>
          <Route index element={<Home />}></Route>
        </Routes>
      </div>
    </section>
  );
};

export default App;
