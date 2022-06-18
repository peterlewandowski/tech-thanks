import { getClient } from "./client";

export const getLeaderboardItems = async () => {
  const client = getClient();
  const response = await client.get("/leaderboard");
  return response.data;
};
