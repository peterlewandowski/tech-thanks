import VolunteerActivismIcon from "@mui/icons-material/VolunteerActivism";
import { Box, Container, Fab, Typography } from "@mui/material";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../components/context/UserContext";
import ThankerDash from "../components/ThankerAccount/ThankerDash";
import ThankerHistory from "../components/ThankerAccount/ThankerHistory";

export default function ThankerAccount() {
  const { user, setUser } = useContext(UserContext);
  const navigate = useNavigate();

  return (
    <Container maxWidth="lg">
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignContent: "center,",
        }}
      >
        <Typography>Thanker's account</Typography>
        Your Address: {user.address}
        <ThankerDash />
        <Fab variant="extended" onClick={() => navigate("/send")}>
          <VolunteerActivismIcon sx={{ mr: 1 }} />
          Navigate
        </Fab>
        <ThankerHistory />
      </Box>
    </Container>
  );
}
