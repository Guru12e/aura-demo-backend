import axios from "axios";

export const apiRequest = axios.create({
  baseURL: process.env.API_URL,
  withCredentials: true,
  headers: {
    "Content-Type": "application/json",
    "x-api-key": "JqD6oA5PUZ2p2LOcMLd6P9gC7yd6txfw1dslNT2w",
  },
});
