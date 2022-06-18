import { useState } from "react";

import {
  BrowserRouter as Router, Routes,
  Route,
} from "react-router-dom";
// import { createTheme } from "@mui/material";
// import { ThemeProvider } from "@emotion/react";
import Home from "./scenes/Home";
import ThankerAccount from "./scenes/ThankerAccount";

function App() {
  return (
    <Router>
      <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/thanker" element={<ThankerAccount />} />
      </Routes>
    </Router>
  );
}

export default App;
