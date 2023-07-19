import axios from "axios";

export const api = axios.create({
  baseURL: "https://sejadev-backend.onrender.com",
  timeout: 10000,
});
