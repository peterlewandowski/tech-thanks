import VolunteerActivismIcon from "@mui/icons-material/VolunteerActivism";
import { Box, Container, Fab, Typography } from "@mui/material";
import { useEffect } from "react";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../components/context/UserContext";
import ThankerDash from "../components/ThankerAccount/ThankerDash";
import ThankerHistory from "../components/ThankerAccount/ThankerHistory";
import { getThisGiver } from "../components/services/givers";

export default function ThankerAccount() {
  const { user, setUser } = useContext(UserContext);
  const navigate = useNavigate();





useEffect(()=> {
  const getGiver = async () => {
    const address = "1234";
      const giverProfile =  await getThisGiver(address);

      await setUser(giverProfile);
      console.log("giverProfile",giverProfile)
  }
  getGiver()

},[])


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
  
        {!user.address ? <>Loading...</> : 
        <>
        <Typography>Thanker's account</Typography>

        <ThankerDash />
        <Fab variant="extended" onClick={() => navigate("/send")}>
          <VolunteerActivismIcon sx={{ mr: 1 }} />
          Navigate
        </Fab>
        <ThankerHistory />
        </>
      }
        
      </Box>
    </Container>
  );
}
