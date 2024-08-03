import axios from "axios";

export const apiRequest = axios.create({
  baseURL: process.env.API_URL,
  withCredentials: true,
  headers: {
    "Content-Type": "application/json",
    "x-api-key": c86xN8fujH6IEx8kHGG2Q9K1i3VRVLyf9a7A4XLZ,
  },
});
