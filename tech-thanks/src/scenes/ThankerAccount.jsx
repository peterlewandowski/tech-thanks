import VolunteerActivismIcon from "@mui/icons-material/VolunteerActivism";
import { Box, Container, Fab, Typography } from "@mui/material";
import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../components/context/UserContext";
import { getThisGiver } from "../components/services/givers";
import ThankerDash from "../components/ThankerAccount/ThankerDash";
import ThankerHistory from "../components/ThankerAccount/ThankerHistory";

export default function ThankerAccount() {
  const { user, setUser } = useContext(UserContext);
  const navigate = useNavigate();

  useEffect(() => {
    const getGiver = async () => {
      const address = "1234";
      const giverProfile = await getThisGiver(address);

      await setUser(giverProfile);
      console.log("giverProfile", giverProfile);
    };
    getGiver();
  }, []);

  return (
    <Container maxWidth="lg">
      <Box
        sx={{
          m: 5,
          p: 1,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignContent: "center",
        }}
      >
        {!user.address ? (
          <>Loading...</>
        ) : (
          <>
            <h3>Thanker's Account</h3>
            <ThankerDash />
            <div>
              <Fab variant="extended" onClick={() => navigate("/send")}>
                <VolunteerActivismIcon sx={{ mr: 1 }} />
                Give Thanks!
              </Fab>
            </div>
            <ThankerHistory />
          </>
        )}
      </Box>
    </Container>
  );
}
