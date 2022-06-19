import { CssBaseline, ThemeProvider } from "@mui/material";
import { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Footer from "./components/common/Footer";
import Navbar from "./components/common/Navbar";
import { UserContextProvider } from "./components/context/UserContext";
import Store from "./components/Store";
import { darkTheme, lightTheme } from "./components/Theme/Theme";
import Home from "./scenes/Home";
import MentorReceive from "./scenes/MentorReceive";
import ThankerAccount from "./scenes/ThankerAccount";
import ThankerSend from "./scenes/ThankerSend";

function App() {
  const [isDark, setIsDark] = useState(false);
  return (
    <UserContextProvider>
      <ThemeProvider theme={!isDark ? lightTheme : darkTheme}>
        <CssBaseline />
        <Router>
          <Navbar isDark={isDark} setIsDark={setIsDark} />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/thanker" element={<ThankerAccount />} />
            <Route path="/send" element={<ThankerSend />} />
            <Route path="/thanks/:hash" element={<MentorReceive />} />
            <Route path="/store" element={<Store />} />
          </Routes>
          <Footer />
        </Router>
      </ThemeProvider>
    </UserContextProvider>
  );
}

export default App;
