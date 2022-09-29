import "./App.css";
import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Phones from "./pages/Phones";
import OnePhone from "./pages/OnePhone";

function App() {
  return (
    <div className="App">
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/phones" element={<Phones />} />
        <Route path="/phones/:id" element={<OnePhone />} />
      </Routes>
    </div>
  );
}

export default App;
