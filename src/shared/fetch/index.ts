import axios from "axios";

export const axiosFetch = axios.create({ timeout: 5000 });