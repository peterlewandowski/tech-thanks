import { useState } from "react";
import {
  BrowserRouter as Router, Routes,
  Route,
} from "react-router-dom";
// import { createTheme } from "@mui/material";
// import { ThemeProvider } from "@emotion/react";
import Home from "./scenes/Home";
import ThankerAccount from "./scenes/ThankerAccount";
import { UserContextProvider } from "./components/context/UserContext";
import ThankerSend from "./scenes/ThankerSend";
import MentorReceive from "./scenes/MentorReceive"

function App() {
  return (
    <UserContextProvider>
    <Router>
      <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/thanker" element={<ThankerAccount />} />
      <Route path="/send" element={<ThankerSend />} />
      <Route path="/thanks/:hash" element={<MentorReceive />} />
      </Routes>
    </Router>
    </UserContextProvider>
  );
}

export default App;
