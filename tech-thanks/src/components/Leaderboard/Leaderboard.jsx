import { Container } from "@mui/material";
import { useEffect, useState } from "react";
import { getLeaderboardItems } from "../services/leaderboard";
import LeaderboardItem from "./LeaderboardItem";
export default function Leaderboard() {
  const [leaderboardItems, setLeaderboardItems] = useState([]);

  useEffect(() => {
    getLeaderboardItems().then((data) => setLeaderboardItems(data));
  }, []);

  const leaderboardElements = leaderboardItems.map((item) => {
    const { id, name, email, thankcoins } = item;
    return (
      <LeaderboardItem
        key={id}
        name={name}
        email={email}
        thankcoins={thankcoins}
      />
    );
  });

  return (
    <>
      <Container maxWidth="sm">{leaderboardElements}</Container>
    </>
  );
}
