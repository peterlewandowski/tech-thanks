import VolunteerActivismIcon from "@mui/icons-material/VolunteerActivism";
import { Box, Container, Fab, Typography } from "@mui/material";
import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../components/context/UserContext";
import { getThisGiver } from "../components/services/givers";
import ThankerDash from "../components/ThankerAccount/ThankerDash";
import ThankerHistory from "../components/ThankerAccount/ThankerHistory";
import {  set_greeting, get_greeting} from "../components/services/near/utils";
import db from "../components/services/near/db.json"

export default function ThankerAccount() {
  const { user, setUser } = useContext(UserContext);
  const navigate = useNavigate();
  

  useEffect(() => {
    const getGiver = async () => {
      const address = "1234";
      get_greeting()
      .then(fullDB => {
      //  console.log("fullDB",fullDB)
        const db = JSON.parse(fullDB);
        const giverProfile = db.givers[0]
        console.log("giverProfile",giverProfile)
         setUser(giverProfile);
        //console.log("giverProfile", giverProfile);
      });
    };
    getGiver();
  }, []);


const handleDot = () => {
  console.log("update")
  set_greeting(JSON.stringify(db)).then(x=> {console.log(x)}).catch(console.err);
}

  return (
    <>
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
    <button onClick={()=> {handleDot()}}>_____</button>
    </>
  );
}
