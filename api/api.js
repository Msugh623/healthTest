import axios from "axios";

const api = axios.create({
  baseURL: "https://fedskillstest.coalitiontechnologies.workers.dev",
});

export default api;