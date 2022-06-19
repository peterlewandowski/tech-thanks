import 'regenerator-runtime/runtime'
import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { DarkMode, LightMode } from "@mui/icons-material";
import { IconButton } from "@mui/material";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { UserContext } from "../context/UserContext";
import { getThisGiver } from "../services/givers";
import {login, logout, get_greeting, set_greeting} from '../services/near/utils'
import getConfig from '../services/near/config'


export default function Navbar({ isDark, setIsDark }) {
  const navigate = useNavigate();

  const { user, setUser } = useContext(UserContext);

  const handleClickLogin = async () => {
    // from the blockchain signature find out who the address of this user is.
    // fake it for now
    const address = "1234";
    const giverProfile = await getThisGiver(address);
    console.log("giverProfile", giverProfile);
    setUser(giverProfile);
    navigate("/thanker");
  };

  const handleLogout = () => {
    // localStorage.removeItem("jwt");
    setUser(null);
    navigate("/");
  };

  const handleMode = () => {
    setIsDark(!isDark);
  };

  const navButtons = () => {
    if (window.walletConnection.isSignedIn()) {
      return (
        <span>
          <Button color="inherit" onClick={() => navigate("/dashboard")}>
            Dashboard
          </Button>
          <Button color="inherit" onClick={logout}>
            Sign Out
          </Button>
        </span>
      );
    } else {
      return (
        <span>
          <Button color="inherit" type="primary" onClick={login}>
            Sign in!
          </Button>
        </span>
      );
    }
  };

  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
            <Typography
              variant="h6"
              noWrap
              component="a"
              href="/"
              sx={{
                flexGrow: 1,
                mr: 2,
                display: { md: "flex" },
                fontFamily: "monospace",
                fontWeight: 700,
                letterSpacing: ".3rem",
                color: "inherit",
                textDecoration: "none",
              }}
            >
              TechThanks
            </Typography>
            <IconButton onClick={handleMode}>
              {isDark && <LightMode />}
              {!isDark && <DarkMode />}
            </IconButton>
            {navButtons()}
          </Toolbar>
        </AppBar>
      </Box>
    </>
  );
}
