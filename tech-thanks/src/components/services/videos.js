import { getClient } from "./client";

export const getVideos = async () => {
  const client = getClient();
  const response = await client.get("/videos");
  return response.data;
};
