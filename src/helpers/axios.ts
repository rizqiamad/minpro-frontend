import axios from "axios";

const BASEURL = process.env.NEXT_PUBLIC_BASE_URL_BE;

const axiosInstace = axios.create({
  baseURL: BASEURL,
});

export const isAxiosError = axios.isAxiosError

export default axiosInstace