import React from "react";
import "./hero.css";
import Box from "@mui/material/Box";
import Fab from "@mui/material/Fab";
import ArrowCircleDownIcon from "@mui/icons-material/ArrowCircleDown";
import {useNavigate} from 'react-router-dom';

export default function Hero() {
  const navigate = useNavigate()
  const handleGetStarted = () => {
   // document.getElementById("main").scrollIntoView({ behavior: "smooth" });
   navigate("/thanker");
  };
  return (
    <>
      <Box
        sx={{
          m: 1,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          height: 500,
        }}
      >
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
