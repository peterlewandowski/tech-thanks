import { Container, Rating, TextField, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { useContext, useEffect, useState } from "react";
import { UserContext } from "../components/context/UserContext";
import { getDomain, oneWayHash } from "../components/services/hash";

const ThankerSend = () => {
  const { user, setUser } = useContext(UserContext);
  const [starChosen, setStarChosen] = useState(0);
  const [email, setEmail] = useState("");
  const [url, setUrl] = useState("");
  const [value, setValue] = useState("");

  useEffect(() => {
    const getHash = async (passedEmail) => {
      oneWayHash(passedEmail).then((emailHashed) => {
        setUrl(getDomain() + "/thanks/" + emailHashed);
      });
    };
    if (email && value > 0) {
      getHash(email);
    }
  }, [email, value]);

  const handleEmail = (e) => {
    setEmail(e.target.value);
  };

  return (
    <Container
      maxWidth="lg"
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        gap: 3,
        mt: 3,
      }}
    >
      <Typography variant="h4" fontWeight={700}>
        Let's thank that Mentor that got you into tech
      </Typography>
      <Rating
        name="simple-controlled"
        value={value}
        sx={{ fontSize: 70 }}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
      />
      <Box sx={{ display: "flex", alignItems: "center", gap: 3 }}>
        <Typography variant="h6">Who are we thanking?</Typography>
        <TextField
          variant="standard"
          label="Their Email"
          placeholder="todd@bocacode.com"
          onChange={handleEmail}
          sx={{ mb: 2 }}
        />
      </Box>

      {url ? (
        <Box>
          <Typography variant="h6" textAlign="center">
            You've chose to send {value} 🌟's to {email}
          </Typography>
          <b>
            <a href={url}>{url}</a>
          </b>
        </Box>
      ) : (
        ""
      )}
    </Container>
  );
};

export default ThankerSend;
