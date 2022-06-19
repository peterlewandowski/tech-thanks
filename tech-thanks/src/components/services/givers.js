import { getClient } from "./client";

export const getGivers = async () => {
  const client = getClient();
  const response = await client.get("/givers");
  return response.data;
};

export const getThisGiver = async (address) => {
  const client = getClient();
  const giverCall = await client.get("/givers?address=" + address);
  if (giverCall.data.length == 0) {
    return {};
  } else {
    return giverCall.data[0];
  }
};
