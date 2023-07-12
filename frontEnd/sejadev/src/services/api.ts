import axios from "axios";

export const api = axios.create({
  baseURL: "link",
  timeout: 5000,
});
