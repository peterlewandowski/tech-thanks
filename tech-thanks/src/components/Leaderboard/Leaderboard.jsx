import { Container } from "@mui/material";
import { useEffect, useState } from "react";
import { getLeaderboardItems } from "../services/leaderboard";
import LeaderboardItem from "./LeaderboardItem";
export default function Leaderboard() {
  const [leaderboardItems, setLeaderboardItems] = useState([]);

  useEffect(() => {
    //getLeaderboardItems().then((data) => setLeaderboardItems(data));
  }, []);

  useEffect(() => {
    const getLeader= async () => {
      getLeaderboardItems()
      .then(fullDB => {
      //  console.log("fullDB",fullDB)
        const db = JSON.parse(fullDB);
        const leaderboard = db.leaderboard;
        console.log("leaderboard",leaderboard)
        setLeaderboardItems(leaderboard);
      });
    };
    getLeader();
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
