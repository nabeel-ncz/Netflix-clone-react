import { BASE_URL } from "./constants/Constants";
import axios from "axios";

const instance = axios.create({
    baseURL: BASE_URL,
});

export default instance;