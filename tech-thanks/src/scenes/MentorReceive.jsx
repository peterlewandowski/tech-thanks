import { Input } from "@mui/material";
import { useContext, useState } from "react";
import { useParams } from "react-router-dom";
import { UserContext } from "../components/context/UserContext";
import { oneWayHash } from "../components/services/hash";
import VolunteerActivismIcon from "@mui/icons-material/VolunteerActivism";
import { Box, Container, Fab, Typography } from "@mui/material";
import { login, logout } from "../components/services/near/utils";
import { Link, useNavigate } from "react-router-dom";

export default function MentorReceive() {
  const navigate = useNavigate()
  const { user, setUser } = useContext(UserContext);
  const [verifiedEmail, setverifiedEmaill] = useState("");
  const [typedEmail, setTypedEmail] = useState("");
  let { hash } = useParams();

  if (window.walletConnection.isSignedIn()) {
    navigate("/store");
  }

  const handleLogin = (e) => {
    console.log("handleLogin");
    login();
  }
  
  const handleEmail = (e) => {
    setTypedEmail(e.target.value);
    oneWayHash(e.target.value).then((possibleHash) => {
      if (possibleHash == hash) {
        setverifiedEmaill(e.target.value);
      }
    });
  };

  return (
    <>
      <h2>
        You've been lucky enough to receive some ThankCoins! Type to cash them
        out!
      </h2>
      {verifiedEmail ? (
        <div>Welcome <b>{verifiedEmail}</b><br /><br />
         You've been an amazing mentor to someone that wants to thank you 
                    personally with 5 Tech Thank Stars because of how amazing you are.<br />
                    <img src="https://media.giphy.com/media/4YY5Yh1qSeCMwQbrnf/giphy.gif" /><br />
                    <br />
                    What's next? <br />
                    Simple! Accept your stars!!! <br />
                    You'll need your own Near Wallet.<br />
                    Have one or not just click here to login or create your own:
                    <Fab variant="extended" onClick={() => handleLogin()}>
                      <VolunteerActivismIcon sx={{ mr: 1 }} />
                      Login or Create wallet!
                    </Fab>

        </div>)
       : 
      (  <div>
          We need the email the person that thanked you used:  
          <Input placeholder="Your Email" onChange={handleEmail} />
        </div>)
      }
    </>
  );
}
