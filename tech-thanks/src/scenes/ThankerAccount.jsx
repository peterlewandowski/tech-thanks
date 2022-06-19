import { Box, Button, Fab } from "@mui/material";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../components/context/UserContext";
import ThankerDash from "../components/ThankerAccount/ThankerDash";
import ThankerHistory from "../components/ThankerAccount/ThankerHistory";
import VolunteerActivismIcon from '@mui/icons-material/VolunteerActivism';

export default function ThankerAccount() {
  const { user, setUser } = useContext(UserContext);
  const navigate = useNavigate();

  console.log("user from thankseraccount", user);
  return (
    <>
      <Box>
        <h2>Thanker's account</h2>
        Your Address: {user.address}
        <ThankerDash />
        <div>
          <Fab variant="extended" onClick={() => navigate("/send")}>
            <VolunteerActivismIcon sx={{ mr: 1 }} />
            Give Thanks!
          </Fab>
        </div>
        <ThankerHistory />
      </Box>
    </>
  );
}
