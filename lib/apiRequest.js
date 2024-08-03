import axios from "axios";

export const apiRequest = axios.create({
  baseURL: process.env.API_URL,
  withCredentials: true,
  headers: {
    "Content-Type": "application/json",
    "x-api-key": process.env.API_URL_KEY,
  },
});
