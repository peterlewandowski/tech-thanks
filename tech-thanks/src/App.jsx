import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { createTheme, CssBaseline, ThemeProvider } from "@mui/material";
import { blue } from "@mui/material/colors";
import Navbar from "./components/common/Navbar"
import Footer from "./components/common/Footer";
import Home from "./scenes/Home";
import ThankerAccount from "./scenes/ThankerAccount";
import { UserContextProvider } from "./components/context/UserContext";
import ThankerSend from "./scenes/ThankerSend";
import MentorReceive from "./scenes/MentorReceive"

const theme = createTheme({
  palette: {
    primary: {
      mode: "light",
      main: blue[800],
    },
  },
});

function App() {
  return (
    <UserContextProvider>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Router>
        <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/thanker" element={<ThankerAccount />} />
            <Route path="/send" element={<ThankerSend />} />
            <Route path="/thanks/:hash" element={<MentorReceive />} />
          </Routes>
          <Footer />
        </Router>
      </ThemeProvider>
    </UserContextProvider>
  );
}

export default App;
