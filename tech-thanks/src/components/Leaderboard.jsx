import { Container } from "@mui/material";
import { nanoid } from "nanoid";
import leaderboardItems from "../utils";
import LeaderboardItem from "./LeaderboardItem";
export default function Leaderboard() {
  const leaderboardElements = leaderboardItems.map((item) => {
    return (
      <LeaderboardItem key={nanoid()} name={item.name} score={item.score} />
    );
  });

  return (
    <>
      <Container maxWidth="sm">{leaderboardElements}</Container>
    </>
  );
}
