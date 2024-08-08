import axios from "axios";

export const paymentFetch = axios.create({
    baseURL: "https://www.chimetrading.com/api/chime",
    validateStatus: (status) => {
      return status >= 200 && status < 500;
    },
    headers: {
      "Content-Type": "application/json",
    },
  });