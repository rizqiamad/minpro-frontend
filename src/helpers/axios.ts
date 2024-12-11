import axios from "axios";

const BASEURL = "http://locahost:8000/api";

export default axios.create({
  baseURL: BASEURL,
});
