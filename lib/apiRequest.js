import axios from "axios";

export const apiRequest = axios.create({
  baseURL: "https://json.apiastro.com/",
  withCredentials: true,
  headers: {
    "Content-Type": "application/json",
    "x-api-key": "xtmgi06ruvaxy5YXTYh0h5F8idSQaCn29x1xnmBo",
  },
});
