import axios from "axios";
export const getClient = () => {
  return axios.create({
    baseURL: "https://hack.floridajs.com/",
  });
};
