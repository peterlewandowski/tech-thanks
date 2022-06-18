import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { useNavigate } from "react-router-dom";
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
