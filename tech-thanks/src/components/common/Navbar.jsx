import { DarkMode, LightMode } from "@mui/icons-material";
import { IconButton } from "@mui/material";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import "regenerator-runtime/runtime";
import { UserContext } from "../context/UserContext";
import { login, logout} from "../services/near/utils";

export default function Navbar({ isDark, setIsDark }) {
  const navigate = useNavigate();

  const { user, setUser } = useContext(UserContext);

  const navButtons = () => {
    if (window.walletConnection.isSignedIn()) {
      return (
        <span>
          <Button onClick={() => navigate("/thanker")}>Dashboard</Button>
          <Button onClick={logout}>Sign Out</Button>
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
            <IconButton component={Link} to="/" sx={{ flexGrow: 1 }}>
              <Typography
                variant="h6"
                sx={{
                  flexGrow: 1,
                  display: { md: "flex" },
                  fontFamily: "monospace",
                  fontWeight: 700,
                  letterSpacing: ".3rem",
                }}
              >
                TechThanks
              </Typography>
            </IconButton>
            <IconButton
              onClick={() => setIsDark(!isDark)}
              sx={{ flexShrink: 0 }}
            >
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
