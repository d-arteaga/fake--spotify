import React, { useEffect, useState } from "react";
import axios from "axios";
import Home from "./components/pages/Home";
import Search from "./components/pages/Search";
import { HashRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Search" element={<Search />} />
          <Route path="/LikedSongs" element={<Search />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
