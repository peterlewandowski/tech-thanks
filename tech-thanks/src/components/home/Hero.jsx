import React from "react";
import "./hero.css";
import Box from "@mui/material/Box";
import Fab from "@mui/material/Fab";
import ArrowCircleDownIcon from "@mui/icons-material/ArrowCircleDown";
import { useNavigate } from "react-router-dom";
import { Typography } from "@mui/material";

export default function Hero() {
  const navigate = useNavigate();
  const handleGetStarted = () => {
    navigate("/thanker");
  };
  return (
    <>
      <Box
        sx={{
          m: 1,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          height: 250,
        }}
      >
        <Typography
        variant="h2"
          sx={{
            p: 3,
            fontFamily: "monospace",
            fontWeight: 300,
            letterSpacing: ".1rem",
            color: "inherit",
          }}
        >
          Thank your mentors
        </Typography>
        <Fab
          variant="extended"
          size="medium"
          color="primary"
          aria-label="add"
          onClick={handleGetStarted}
        >
          <ArrowCircleDownIcon sx={{ mr: 1 }} />
          Get Started
        </Fab>
        <div className="textBlock">
          <div className="allText">
            <p className="textHeader"></p>
            <p className="textHeader"></p>
          </div>
        </div>
      </Box>
    </>
  );
}
