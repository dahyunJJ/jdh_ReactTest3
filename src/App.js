import "bootstrap/dist/css/bootstrap.min.css";
import "./css/App.css";
import { Route, Routes } from "react-router-dom";
import React, { useState, useEffect } from "react";

import Header from "./pages/Header";
import Main from "./pages/Main";
import Shop from "./pages/Shop";
import Detail from "./pages/Detail";
import Footer from "./pages/Footer";

import data from "./productData";

function App() {
  let [list, setList] = useState(data);

  return (
    <>
      <div className="App">
        <Header />

        <Routes>
          <Route path="/" element={<Main list={list} />} />
          <Route path="/Shop" element={<Shop list={list} />} />
          <Route path="/Blog" element={<div>Blog</div>} />
          <Route path="/Our Story" element={<div>Our Story</div>} />
          <Route path="/detail/:id" element={<Detail list={list} />} />
          <Route path="/*" element={<div>404</div>} />
        </Routes>

        <Footer />
      </div>
      ;
    </>
  );
}

export default App;
