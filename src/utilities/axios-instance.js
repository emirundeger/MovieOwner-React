import axios from "axios";

const instance = axios.create({
  baseURL: "https://wookie.codesubmit.io/movies",
  headers: { Authorization : "Bearer Wookie2019" }
});

export default instance;
