import { useState } from "react";

import {
  BrowserRouter as Router, Routes,
  Route,
} from "react-router-dom";
// import { createTheme } from "@mui/material";
// import { ThemeProvider } from "@emotion/react";
import Home from "./scenes/Home";
import ThankerAccount from "./scenes/ThankerAccount";
import ThankerSend from "./scenes/ThankerSend";

function App() {
  return (
    <Router>
      <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/thanker" element={<ThankerAccount />} />
      <Route path="/send" element={<ThankerSend />} />
      </Routes>
    </Router>
  );
}

export default App;
