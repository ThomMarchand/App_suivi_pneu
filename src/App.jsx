import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import StockTires from "./pages/StockTires";
import ListVehicles from "./pages/ListVehicles";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/StockTires" element={<StockTires />} />
        <Route path="/ListVehicles" element={<ListVehicles />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
