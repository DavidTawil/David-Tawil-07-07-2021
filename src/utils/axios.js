import axios from "axios";

export const apikey = "CmBnqv8rkbnZOhDwD0tD320XwgykF4Md";

export const accuweatherInstance = axios.create({
  baseURL: "http://dataservice.accuweather.com",
});
