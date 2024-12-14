import axios from "axios";

const BASEURL = "http://localhost:8000/api";

export default axios.create({
  baseURL: BASEURL,
});
