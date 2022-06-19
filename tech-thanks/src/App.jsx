import { createTheme, CssBaseline, ThemeProvider } from "@mui/material";
import { blue } from "@mui/material/colors";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Footer from "./components/common/Footer";
import { UserContextProvider } from "./components/context/UserContext";
import Store from "./components/Store";
import MentorReceive from "./scenes/MentorReceive";
import ThankerAccount from "./scenes/ThankerAccount";
import ThankerSend from "./scenes/ThankerSend";

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
          {/* <Navbar /> */}
          <Store />
          <Routes>
            {/* <Route path="/" element={<Home />} /> */}
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
