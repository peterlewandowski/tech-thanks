<<<<<<< HEAD
export default function Main() {
  return <div>Main</div>;
}
=======
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Leaderboard from "../Leaderboard/Leaderboard";

function Main() {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    navigate("/SearchResults");
  };

  return (
    <div id="main" style={{ backgroundColor: "#E1D6C6" }}>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleSubmit(e);
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        />
        <Grid
          container
          spacing={2}
          direction="row"
          justify="flex-start"
          alignItems="flex-start"
          paddingBottom="20px"
          paddingLeft="20px"
          paddingRight="20px"
        ></Grid>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Leaderboard />
        </Box>
      </form>
    </div>
  );
}

export default Main;
>>>>>>> d08e5908c4dfe28e158fc3754b332bd2c477bddb
