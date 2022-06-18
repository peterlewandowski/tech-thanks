import { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams,
} from "react-router-dom";
import {createTheme} from '@mui/material'
import {ThemeProvider} from '@emotion/react'
import Home from './scenes/Home'
import ThankerAccount from './scenes/ThankerAccount'

function App() {
  return (
    <Router>
      <Route path="/" element={<Home />} />
      <Route path='/thanker' element={<ThankerAccount />} />
    </Router>
  );
}

export default App;
