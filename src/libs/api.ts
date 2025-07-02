import axios from "axios";

const api = axios.create({
  baseURL: "https://devcharisma.aurorasystem.co.id/atg/kepegawaian-api",
});

export default api;
