import axios from "axios";

const API_KEY = import.meta.env.VITE_API_KEY;
const HOST_KEY = import.meta.env["VITE_X-RapidAPI-Host"];

export const axiosPrivate = axios.create({
  baseURL: "https://booking-com.p.rapidapi.com",
  headers: {
    "X-RapidAPI-Key": API_KEY,
    "X-RapidAPI-Host": HOST_KEY,
  },
});
