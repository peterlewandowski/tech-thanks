import VolunteerActivismIcon from "@mui/icons-material/VolunteerActivism";
import { Box, Container, Fab, TextField, Typography } from "@mui/material";
import { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { UserContext } from "../components/context/UserContext";
import { oneWayHash } from "../components/services/hash";
import { login } from "../components/services/near/utils";

export default function MentorReceive() {
  const navigate = useNavigate();
  const { user, setUser } = useContext(UserContext);
  const [verifiedEmail, setverifiedEmaill] = useState("");
  const [typedEmail, setTypedEmail] = useState("");
  let { hash } = useParams();

  useEffect(() => {
    if (window.walletConnection.isSignedIn()) {
      navigate("/store");
    }
  }, []);

  const handleLogin = (e) => {
    console.log("handleLogin");
    login();
  };

  const handleEmail = (e) => {
    setTypedEmail(e.target.value);
    oneWayHash(e.target.value).then((possibleHash) => {
      if (possibleHash == hash) {
        setverifiedEmaill(e.target.value);
      }
    });
  };

  return (
    <Container
      maxWidth="md"
      sx={{
        mt: 3,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
      }}
    >
      <Typography textAlign="center" variant="h5">
        You've been lucky enough to receive some ThankCoins! Type to cash them
        out!
      </Typography>
      {verifiedEmail ? (
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
          }}
        >
          <Typography textAlign="center" variant="h5">
            Welcome <b>{verifiedEmail}!</b>
          </Typography>
          <Typography variant="h6" textAlign="center">
            You've been an amazing mentor to someone that wants to thank you
            personally with 5 Tech Thank Stars because of how amazing you are.
          </Typography>
          <img
            src="https://media.giphy.com/media/4YY5Yh1qSeCMwQbrnf/giphy.gif"
            style={{ marginLeft: "auto", marginRight: "auto", width: "50%" }}
          />
          <br />
          <Typography textAlign="center" variant="h6">
            What's next?
          </Typography>
          <Typography textAlign="center" variant="h6">
            Simple! Accept your stars!!!
          </Typography>
          <Typography textAlign="center">
            You'll need your own Near Wallet. Have one or not just click here to
            login or create your own:
          </Typography>
          <Fab
            variant="extended"
            sx={{ mx: "auto" }}
            onClick={() => handleLogin()}
          >
            <VolunteerActivismIcon />
            Login or Create wallet!
          </Fab>
        </Box>
      ) : (
        <Box
          display="flex"
          alignItems="center"
          sx={{ gap: 3, justifyContent: "center" }}
        >
          <Typography variant="h5">
            We need the email of the person that thanked you:
          </Typography>
          <TextField
            label="Your Email"
            placeholder="mentor@techthanks.com"
            onChange={handleEmail}
            variant="standard"
            sx={{ mb: 2 }}
          />
        </Box>
      )}
    </Container>
  );
}
