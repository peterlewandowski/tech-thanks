import { getClient } from "./client";

export const getGivers = async () => {
  const client = getClient();
  const response = await client.get("/givers");
  return response.data;
};
