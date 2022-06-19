import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Leaderboard from "../Leaderboard/Leaderboard";

function Main() {

  return (
    <div id="main" style={{ backgroundColor: "#E1D6C6" }}>
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
    </div>
  );
}

export default Main;
