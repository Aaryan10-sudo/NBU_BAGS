import axios from "axios";
import { baseURL } from "../config/config";

export const hitApi = axios.create({
  baseURL: baseURL,
});
