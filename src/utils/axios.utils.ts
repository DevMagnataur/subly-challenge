import axios from "axios";

const endpoint = import.meta.env.VITE_APP_DEV_BASE_URL;

const AxiosInstance = axios.create({
  baseURL: endpoint,
});

export default AxiosInstance