import axios from "axios";

// export const apikey = "GblKQ63EuutcRNfL8HTZ4PnPcCdWprAg";
export const apikey = "CmBnqv8rkbnZOhDwD0tD320XwgykF4Md";

export const accuweatherInstance = axios.create({
  baseURL: "https://dataservice.accuweather.com",
});
